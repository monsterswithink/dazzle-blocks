import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { supabase } from "@/lib/supabase"
import type { Profile } from "@/types/profile"

export async function GET() {
  const session = await auth()

  if (!session || !session.user?.id) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
  }

  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("user_id", session.user.id)
      .single()

    // PGRST116 means no rows found
    if (error && error.code !== "PGRST116") {
      throw new Error(error.message)
    }

    if (!data) {
      return NextResponse.json({ message: "Profile not found" }, { status: 404 })
    }

    return NextResponse.json(data)
  } catch (error: any) {
    console.error("Error fetching profile:", error.message)
    return NextResponse.json(
      { message: "Failed to fetch profile", error: error.message },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  const session = await auth()

  if (!session || !session.user?.id) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
  }

  const profileData: Profile = await request.json()

  try {
    const { data, error } = await supabase
      .from("profiles")
      .insert({ ...profileData, user_id: session.user.id })
      .select()
      .single()

    if (error) {
      throw new Error(error.message)
    }

    return NextResponse.json(data, { status: 201 })
  } catch (error: any) {
    console.error("Error creating profile:", error.message)
    return NextResponse.json(
      { message: "Failed to create profile", error: error.message },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  const session = await auth()

  if (!session || !session.user?.id) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
  }

  const profileData: Profile = await request.json()

  try {
    const { data, error } = await supabase
      .from("profiles")
      .update(profileData)
      .eq("user_id", session.user.id)
      .select()
      .single()

    if (error) {
      throw new Error(error.message)
    }

    return NextResponse.json(data)
  } catch (error: any) {
    console.error("Error updating profile:", error.message)
    return NextResponse.json(
      { message: "Failed to update profile", error: error.message },
      { status: 500 }
    )
  }
}
