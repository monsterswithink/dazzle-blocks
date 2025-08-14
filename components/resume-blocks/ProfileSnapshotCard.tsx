"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

interface ProfileSnapshotCardProps {
  onEdit?: () => void
  onShare?: () => void
  onChangeTheme?: () => void
}

export function ProfileSnapshotCard({ onEdit, onShare, onChangeTheme }: ProfileSnapshotCardProps) {
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
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Sign in to view and manage your profile.
          </p>
          <Button onClick={() => router.push("/auth/signin")}>Sign In</Button>
        </CardContent>
      </Card>
    )
  }

  const userName = session?.user?.name || "User"
  const userEmail = session?.user?.email || "No email"

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Profile</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-4 p-6">
        <Avatar className="h-16 w-16">
          <AvatarImage src={session?.user?.image || "/placeholder-user.jpg"} alt={userName} />
          <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="grid gap-1 flex-1">
          <div className="font-semibold">{userName}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{userEmail}</div>
          <div className="flex gap-2 mt-2">
            <Button variant="link" className="p-0 h-auto" onClick={() => router.push("/profile")}>
              Edit
            </Button>
            {onShare && (
              <Button variant="link" className="p-0 h-auto" onClick={onShare}>
                Share
              </Button>
            )}
            {onChangeTheme && (
              <Button variant="link" className="p-0 h-auto" onClick={onChangeTheme}>
                Theme
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
