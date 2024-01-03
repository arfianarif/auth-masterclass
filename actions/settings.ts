'use server'

import bcrypt from 'bcryptjs'
import { getUserByEmail, getUserById } from "@/data/user"
import { currentUser } from "@/lib/auth-server"
import { prisma } from "@/lib/db"
import { sendVerificationEmail } from "@/lib/mail"
import { generateVerificationToken } from "@/lib/tokens"
import { SettingsSchema } from "@/schemas"
import { z } from "zod"

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
  const user = await currentUser()

  if (!user) {
    return { error: 'Unauthorized!' }
  }

  const dbUser = await getUserById(user.id)

  if (!dbUser) {
    return { error: 'Unauthorized!' }
  }

  if (user.isOAuth) {
    values.email = undefined
    values.password = undefined
    values.newPassword = undefined
    values.isTwoFactorEnable = undefined
  }

  if (values.email && values.email !== user.email) {
    const existingUser = await getUserByEmail(values.email)

    if (existingUser && existingUser.id !== user.id) {
      return { error: 'Email already in use!' }
    }

    const verificationToken = await generateVerificationToken(values.email)
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    )
    return { success: 'Verification Email sent!' }
  }

  if (values.password && values.newPassword && dbUser.password) {
    const passwordMatch = bcrypt.compare(
      values.password,
      dbUser.password
    )
    if (!passwordMatch) {
      return { error: 'Incorrect password!' }
    }

    const hashedPassword = await bcrypt.hash(values.newPassword, 10)
    values.password = hashedPassword
    values.newPassword = undefined
  }

  await prisma.user.update({
    where: {
      id: dbUser.id
    },
    data: {
      ...values
    }
  })

  return {
    success: "Settings updated!"
  }
}