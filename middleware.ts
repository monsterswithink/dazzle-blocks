// middleware.ts
import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"

export default auth({
  callbacks: {
    authorized({ req, token }) {
      const pathname = req.nextUrl.pathname

      // ✅ Always allow NextAuth internal API routes (OAuth callbacks)
      if (pathname.startsWith("/api/auth")) return true

      // ✅ Allow public routes (add more if needed)
      const publicPaths = ["/", "/about", "/contact"]
      if (publicPaths.includes(pathname)) return true

      // ✅ Require token for protected paths
      return !!token
    },
  },
})

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}

// Optional: redirect root "/" to "/profile" if logged in
export function middleware(req) {
  const token = req.cookies.get("next-auth.session-token")?.value
  const isRoot = req.nextUrl.pathname === "/"

  if (isRoot && token) {
    return NextResponse.redirect(new URL("/profile", req.url))
  }

  return NextResponse.next()
}
