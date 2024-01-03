/**
 * An array of routes for public
 * not required authentication
 * @type{string[]}
 */
export const publicRoutes = [
  "/",
  "/auth/new-verification",
]

/**
 * An array of routes for authentication
 * Required authentication will redirected to /login
 * @type{string[]}
*/
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
]

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type{string}
 */
export const apiAuthPrefix = "/api/auth"

/**
 * The default redirected if loggedin
 * @type{string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/settings'