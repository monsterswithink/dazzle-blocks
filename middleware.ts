import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const isAuthPage = nextUrl.pathname.startsWith("/auth")
  const isProtectedRoute =
    nextUrl.pathname.startsWith("/editor") ||
    nextUrl.pathname.startsWith("/profile") ||
    nextUrl.pathname.startsWith("/resume")

  if (isAuthPage) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/editor", nextUrl))
    }
    return NextResponse.next()
  }

  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/auth/signin", nextUrl))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
