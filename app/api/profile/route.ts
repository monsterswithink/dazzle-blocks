import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const accessToken = request.headers.get("authorization")?.replace("Bearer ", "")

  console.log("Incoming request to /api/profile")
  console.log("Access token:", accessToken?.slice(0, 10), "...")

  if (!accessToken) {
    return NextResponse.json({ error: "Access token missing" }, { status: 401 })
  }

  try {
    const res = await fetch("https://api.linkedin.com/v2/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "X-Restli-Protocol-Version": "2.0.0",
      },
    })

    const raw = await res.text()
    console.log("LinkedIn raw response:", raw)

    if (!res.ok) {
      return NextResponse.json({ error: "LinkedIn API error", details: raw }, { status: res.status })
    }

    const profileData = JSON.parse(raw)
    return NextResponse.json(profileData)
  } catch (error: any) {
    console.error("Error fetching LinkedIn profile:", error.message)
    return NextResponse.json({ error: "Server error", details: error.message }, { status: 500 })
  }
}
