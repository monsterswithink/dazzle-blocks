"use client"

import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabase } from "@/lib/supabase"
import type { Profile } from "@/types/profile"

async function getUserProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()

  if (error && error.code !== "PGRST116") {
    // PGRST116 means no rows found
    console.error("Error fetching user profile:", error)
    return null
  }
  return data || null
}

export default async function ProfilePage() {
  const session = await auth()

  if (!session || !session.user) {
    redirect("/auth/signin")
  }

  const userProfile = await getUserProfile(session.user.id)

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Avatar className="mx-auto h-24 w-24 mb-4">
            <AvatarImage src={session.user.image || "/placeholder-user.png"} alt={session.user.name || "User"} />
            <AvatarFallback>{session.user.name?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-3xl font-bold">{session.user.name}</CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            Manage your profile information.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={session.user.email || ""} readOnly />
          </div>
          <div>
            <Label htmlFor="id">User ID</Label>
            <Input id="id" value={session.user.id} readOnly />
          </div>
          {userProfile && (
            <>
              {/* Add more profile fields here if your 'profiles' table has them */}
              {userProfile.headline && (
                <div>
                  <Label htmlFor="headline">Headline</Label>
                  <Input id="headline" value={userProfile.headline} readOnly />
                </div>
              )}
              {userProfile.summary && (
                <div>
                  <Label htmlFor="summary">Summary</Label>
                  <Input id="summary" value={userProfile.summary} readOnly />
                </div>
              )}
            </>
          )}
          <Button onClick={() => redirect("/editor")} className="w-full">
            Back to Editor
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
