import NextAuth, { type DefaultSession } from 'next-auth'

export type ExtendedUser = DefaultSession["user"] & {
  role: 'admin' | 'user',
  isTwoFactorEnable: boolean,
}

declare module "next-auth" {
  interface Session {
    user: ExtendedUser
  }
}
