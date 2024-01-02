import NextAuth from "next-auth"
import authConfig from "./lib/auth.config"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const isLoggedIn = !!req.auth
  console.log("Route : ", req.nextUrl.pathname, isLoggedIn)
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  // anything you want to invoje the middleware
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}