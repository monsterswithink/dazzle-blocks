"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SharePopover } from "@/components/share-popover"
import { useOthers, RoomProvider } from "@/lib/liveblocks"
import Image from "next/image"
import { Loader2, Users } from "lucide-react"

export function ProfileSnapshotCard({ profile }: { profile: any }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const resumeId = profile?.public_identifier

  // Liveblocks viewer count hook
  function ViewerCount() {
    const others = useOthers()
    return (
      <div className="flex items-center gap-1 text-xs text-gray-500">
        <Users className="h-4 w-4" />
        {others.length + 1} viewing
      </div>
    )
  }

  if (!profile) {
    // Skeleton loader
    return (
      <Card className="animate-pulse max-w-md mx-auto p-6">
        <div className="flex gap-4 items-center mb-4">
          <div className="rounded-full bg-gray-200 h-16 w-16" />
          <div>
            <div className="h-4 bg-gray-200 mb-2 w-32 rounded" />
            <div className="h-3 bg-gray-100 w-24 rounded" />
          </div>
        </div>
        <div className="h-3 bg-gray-100 w-3/4 mb-4 rounded" />
        <div className="flex gap-2">
          <div className="h-8 w-24 bg-gray-200 rounded" />
          <div className="h-8 w-24 bg-gray-100 rounded" />
        </div>
      </Card>
    )
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="flex flex-col items-center">
        <Image
          src={profile.profile_pic_url || "/placeholder.svg"}
          alt={profile.full_name}
          width={64}
          height={64}
          className="rounded-full border mb-2"
        />
        <CardTitle className="text-xl">{profile.full_name}</CardTitle>
        <CardDescription className="text-gray-600">{profile.headline}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        <div className="text-gray-700">{profile.summary}</div>
        <div className="flex items-center justify-center gap-3">
          <SharePopover>
            <Button size="sm" variant="outline">Share</Button>
          </SharePopover>
          <Button
            size="sm"
            onClick={() => {
              setLoading(true)
              router.push(`/resume/${resumeId}`)
            }}
            disabled={loading}
          >
            {loading ? <Loader2 className="animate-spin h-4 w-4" /> : "View Resume"}
          </Button>
        </div>
        <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
          <span>
            Last synced:{" "}
            {profile.meta?.last_updated
              ? new Date(profile.meta.last_updated).toLocaleString()
              : "Unknown"}
          </span>
          {/* Liveblocks Viewer Count */}
          <RoomProvider id={`resume-${resumeId}`} initialPresence={{}}>
            <ViewerCount />
          </RoomProvider>
        </div>
      </CardContent>
    </Card>
  )
}
