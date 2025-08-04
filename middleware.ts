import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { nextUrl } = req
  const isAuthenticated = !!req.auth

  const isPublicRoute = nextUrl.pathname === "/" || nextUrl.pathname.startsWith("/auth")

  if (!isAuthenticated && !isPublicRoute) {
    let from = nextUrl.pathname
    if (nextUrl.search) {
      from += nextUrl.search
    }
    const url = new URL(`/auth/signin`, nextUrl.origin)
    url.searchParams.set("from", from)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public).*)"],
}
