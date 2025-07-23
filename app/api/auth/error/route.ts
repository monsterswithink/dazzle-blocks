import { NextResponse }, type { NextRequest } from "next/server"
/*import type { NextRequest } from "next/server" */

/**
 * NextAuth still points to `/api/auth/error`.
 * We redirect to our client-facing error page at `/auth/error`
 * so the preview (and end-users) always see a UI instead of a 404.
 */
export function GET(request: NextRequest) {
  const url = new URL("/auth/error", request.url)
  url.search = request.url.split("?")[1] ?? "" // preserve the ?error=... query
  return NextResponse.redirect(url)
}

export const POST = GET // Just in case a POST ever happens
