"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export function ProfileSnapshotCard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === "loading") {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center p-6">
          <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
        </CardContent>
      </Card>
    )
  }

  if (status === "unauthenticated") {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
        </CardHeader>
        <CardContent className="text-center p-6">
          <p className="text-gray-500 dark:text-gray-400 mb-4">Sign in to view and manage your profile.</p>
          <Button onClick={() => router.push("/auth/signin")}>Sign In</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Profile</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-4 p-6">
        <Avatar className="h-16 w-16">
          <AvatarImage src={session?.user?.image || "/placeholder-user.jpg"} alt={session?.user?.name || "User"} />
          <AvatarFallback>{session?.user?.name?.charAt(0) || "U"}</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <div className="font-semibold">{session?.user?.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{session?.user?.email}</div>
          <Button variant="link" className="p-0 h-auto justify-start" onClick={() => router.push("/profile")}>
            View/Edit Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
