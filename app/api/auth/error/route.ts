import { NextResponse } from "next/server"

export async function GET() {
  // This route handler can be used to display a custom error page
  // for authentication failures.
  // You might want to log the error or redirect to a more user-friendly page.
  return NextResponse.json({ error: "Authentication failed" }, { status: 401 })
}
