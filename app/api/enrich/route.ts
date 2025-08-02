import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"

export async function GET(request: Request) {
  const session = await auth()

  if (!session || !session.user || !(session.user as any).vanityUrl) {
    return NextResponse.json({ error: "Unauthorized or missing vanityUrl" }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const vanityUrl = searchParams.get("vanityUrl") || (session.user as any).vanityUrl

  if (!vanityUrl) {
    return NextResponse.json({ error: "vanityUrl is required" }, { status: 400 })
  }

  const enrichLayerApiKey = process.env.ENRICHLAYER_API_KEY

  if (!enrichLayerApiKey) {
    console.error("ENRICHLAYER_API_KEY is not set.")
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
  }

  try {
    // This is a placeholder for the actual EnrichLayer API call.
    // Replace with your actual EnrichLayer integration logic.
    const enrichResponse = await fetch(
      `https://api.enrichlayer.com/v1/profile?api_key=${enrichLayerApiKey}&url=${encodeURIComponent(vanityUrl)}`,
    )

    if (!enrichResponse.ok) {
      const errorData = await enrichResponse.json()
      console.error("EnrichLayer API error:", errorData)
      return NextResponse.json(
        { error: "Failed to fetch enriched data", details: errorData },
        { status: enrichResponse.status },
      )
    }

    const data = await enrichResponse.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching enriched data:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
