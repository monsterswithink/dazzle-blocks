"use client"

import { Button } from "@/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/card"
import { Progress } from "@/ui/progress"
import { SharePopover } from "@/components/tools/SharePopover"
import { useOthers, RoomProvider } from "@/lib/liveblocks"
import Image from "next/image"
import { Users, Loader2, ExternalLink } from "lucide-react"
import { useRouter } from "next/navigation"

export function ProfileSnapshotCard({
  profile,
  syncing = false,
  onViewResume,
  resumeId,
  loading = false,
}: {
  profile: any
  syncing?: boolean
  onViewResume?: () => void
  resumeId?: string
  loading?: boolean
}) {
  const router = useRouter()

  // Liveblocks viewer count component
  function ViewerCount() {
    const others = useOthers()
    return (
      <div className="flex items-center gap-1 text-xs text-gray-500">
        <Users className="h-4 w-4" />
        {(others.length + 1)} viewing
      </div>
    )
  }

  // Card skeleton
  if (loading || !profile) {
    return (
      <Card className="animate-pulse max-w-md mx-auto p-6 relative">
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
        <div className="absolute left-0 right-0 bottom-0 px-6 pb-4">
          <Progress value={80} className="h-2" />
          <p className="text-center text-sm text-gray-600 mt-1">Syncing profile…</p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="max-w-md mx-auto relative">
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
            onClick={() => onViewResume ? onViewResume() : router.push(`/resume/${resumeId}`)}
            disabled={!resumeId}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Resume
          </Button>
        </div>
        <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
          <span>
            Last synced:{" "}
            {profile.meta?.last_updated
              ? new Date(profile.meta.last_updated).toLocaleString()
              : "Unknown"}
          </span>
          {resumeId && (
            <RoomProvider id={`resume-${resumeId}`} initialPresence={{}}>
              <ViewerCount />
            </RoomProvider>
          )}
        </div>
      </CardContent>
      {syncing && (
        <div className="absolute left-0 right-0 bottom-0 px-6 pb-4">
          <Progress value={80} className="h-2" />
          <p className="text-center text-sm text-gray-600 mt-1">Syncing profile…</p>
        </div>
      )}
    </Card>
  )
}
