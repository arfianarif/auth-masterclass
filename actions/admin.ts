'use server'

import { currentRole } from "@/lib/auth-server"

export const admin = async () => {
  const role = await currentRole()
  if (role !== 'admin') {
    return { error: 'Forbidden!' }
  }
  return { success: 'Allowed!' }
}