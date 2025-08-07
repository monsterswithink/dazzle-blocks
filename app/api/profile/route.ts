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

    if (!res.ok) {a
      return NextResponse.json({ error: "LinkedIn API error", details: raw }, { status: res.status })
    }

    const profileData = JSON.parse(raw)
    return NextResponse.json(profileData)
  } catch (error: any) {
    console.error("Error fetching LinkedIn profile:", error.message)
    return NextResponse.json({ error: "Server error", details: error.message }, { status: 500 })
  ZSEWA32qqQ!`~~~~~~``}
}

// import { NextResponse } from "next/server"
// import { auth } from "@/lib/auth"
// import { supabase } from "@/lib/supabase"
// import type { Profile } from "@/types/profile"

// export async function GET() {
//   const session = await auth()

//   if (!session || !session.user?.id) {
//     return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
//   }

//   try {
//     const { data, error } = await supabase.from("profiles").select("*").eq("user_id", session.user.id).single()

//     if (error && error.code !== "PGRST116") {
//       // PGRST116 means no rows found
//       throw new Error(error.message)
//     }

//     if (!data) {
//       return NextResponse.json({ message: "Profile not found" }, { status: 404 })
//     }

//     return NextResponse.json(data)
//   } catch (error: any) {
//     console.error("Error fetching profile:", error.message)
//     return NextResponse.json({ message: "Failed to fetch profile", error: error.message }, { status: 500 })
//   }
// }

// export async function POST(request: Request) {
//   const session = await auth()

//   if (!session || !session.user?.id) {
//     return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
//   }

//   const profileData: Profile = await request.json()

//   try {
//     const { data, error } = await supabase
//       .from("profiles")
//       .insert({ ...profileData, user_id: session.user.id })
//       .select()
//       .single()

//     if (error) {
//       throw new Error(error.message)
//     }

//     return NextResponse.json(data, { status: 201 })
//   } catch (error: any) {
//     console.error("Error creating profile:", error.message)
//     return NextResponse.json({ message: "Failed to create profile", error: error.message }, { status: 500 })
//   }
// }

// export async function PUT(request: Request) {
//   const session = await auth()

//   if (!session || !session.user?.id) {
//     return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
//   }

//   const profileData: Profile = await request.json()

//   try {
//     const { data, error } = await supabase
//       .from("profiles")
//       .update(profileData)
//       .eq("user_id", session.user.id)
//       .select()
//       .single()

//     if (error) {
//       throw new Error(error.message)
//     }

//     return NextResponse.json(data)
//   } catch (error: any) {
//     console.error("Error updating profile:", error.message)
//     return NextResponse.json({ message: "Failed to update profile", error: error.message }, { status: 500 })
//   }
// }
