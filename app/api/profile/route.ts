import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { supabase } from "@/lib/supabase"

export async function GET() {
  const session = await auth()

  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  try {
    const { data: userProfile, error } = await supabase
      .from("profiles") // Assuming you have a 'profiles' table
      .select("*")
      .eq("id", session.user.id)
      .single()

    if (error && error.code !== "PGRST116") {
      // PGRST116 means no rows found
      throw error
    }

    return NextResponse.json({ profile: userProfile || null })
  } catch (error: any) {
    console.error("Error fetching user profile:", error)
    return NextResponse.json({ message: "Failed to fetch user profile", error: error.message }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  const session = await auth()

  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  const { name, email, image } = await req.json()

  try {
    const { data, error } = await supabase
      .from("profiles")
      .upsert(
        {
          id: session.user.id,
          name: name || session.user.name,
          email: email || session.user.email,
          image: image || session.user.image,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "id" },
      )
      .select()
      .single()

    if (error) {
      throw error
    }

    return NextResponse.json({ message: "Profile updated successfully", profile: data })
  } catch (error: any) {
    console.error("Error updating user profile:", error)
    return NextResponse.json({ message: "Failed to update user profile", error: error.message }, { status: 500 })
  }
}
