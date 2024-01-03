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
  pages: {
    signIn: '/auth/login',
    error: '/auth/error'
  },
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      })
    }
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") return true

      const existingUser = await getUserById(user.id)

      // Prevent signIn without email verification
      if (!existingUser?.emailVerified) return false

      // Todo: 2FA
      return true
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl
    // },
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