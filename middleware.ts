import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { nextUrl } = req
  const isAuthenticated = !!req.auth

  const publicPaths = ["/", "/api/auth", "/auth/error", "/_next"] // Paths that don't require authentication
  const isPublicPath = publicPaths.some((path) => nextUrl.pathname.startsWith(path))

  // Allow access to public paths
  if (isPublicPath) {
    return NextResponse.next()
  }

  // If not authenticated and trying to access a protected path, redirect to sign-in
  if (!isAuthenticated) {
    const signInUrl = new URL("/api/auth/signin", nextUrl.origin)
    signInUrl.searchParams.set("callbackUrl", nextUrl.pathname)
    return NextResponse.redirect(signInUrl)
  }

  // If authenticated, allow access
  return NextResponse.next()
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
