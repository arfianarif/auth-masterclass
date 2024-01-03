'use server'

import * as z from 'zod'
import { getUserByEmail } from "@/data/user";
import { ResetSchema } from "@/schemas";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values)
  if (!validatedFields.success) {
    return { error: 'Invalid Email !' }
  }

  const { email } = validatedFields.data
  const existingUser = await getUserByEmail(email)
  if (!existingUser) {
    return {
      error: 'Email not found'
    }
  }

  // TODO: Generate token & send email
  return { success: 'Reset email sent!' }
}