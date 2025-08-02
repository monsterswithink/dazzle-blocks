import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { supabase } from "@/lib/supabase"

export async function GET(request: Request) {
  const session = await auth()

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // In a real application, you would fetch the user's profile from your database
  // using their session ID or user ID.
  // For this example, we'll return a mock profile or the session user data.

  try {
    const { data: userProfile, error } = await supabase
      .from("profiles") // Assuming you have a 'profiles' table
      .select("*")
      .eq("id", session.user.id) // Assuming session.user.id is the user's ID in your DB
      .single()

    if (error && error.code !== "PGRST116") {
      // PGRST116 means "no rows found"
      console.error("Error fetching user profile from Supabase:", error)
      return NextResponse.json({ error: "Failed to fetch profile" }, { status: 500 })
    }

    if (userProfile) {
      return NextResponse.json({
        ...session.user,
        ...userProfile, // Merge database profile with session data
      })
    } else {
      // If no profile found in DB, return session user data
      return NextResponse.json(session.user)
    }
  } catch (error) {
    console.error("Unexpected error in /api/profile:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const session = await auth()

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { name, email, image } = await request.json()

  // In a real application, you would update the user's profile in your database.
  try {
    const { data, error } = await supabase.from("profiles").upsert(
      {
        id: session.user.id, // Assuming session.user.id is the user's ID
        name: name,
        email: email,
        image: image,
        // Add other profile fields you want to update
      },
      { onConflict: "id" },
    ) // Upsert based on ID

    if (error) {
      console.error("Error updating user profile in Supabase:", error)
      return NextResponse.json({ error: "Failed to update profile" }, { status: 500 })
    }

    return NextResponse.json({ message: "Profile updated successfully", data })
  } catch (error) {
    console.error("Unexpected error updating profile:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
