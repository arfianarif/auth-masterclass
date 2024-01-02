import NextAuth from "next-auth"
import authConfig from "@/lib/auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./db"
import { getUserById } from "@/data/user"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  callbacks: {
    async session({ session, user, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }
      if (token.role && session.user) {
        session.user.role = token.role as 'admin' | 'user'
      }
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (!token.sub) return token
      const existingUser = await getUserById(token.sub)
      if (!existingUser) return token
      token.role = existingUser.role
      return token
    }
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  ...authConfig
})