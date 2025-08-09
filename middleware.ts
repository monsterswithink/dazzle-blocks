export { auth as middleware } from "@/lib/auth"

export default auth({
  callbacks: {
    authorized({ req, token }) {
      return !!token
    },
  },
})

export const config = {
  matcher: [
    "/profile/:path*",
    "/resume/:path*",
    "/editor",
    "/editor/:path*",
    // add others as needed
  ],
}
