"use client"

import { useEffect, useState, Suspense } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Card, CardContent, ProfileSnapshotCard } from "@/resume-blocks/ProfileSnapshotCard"
import { Skeleton } from "@/ui/skeleton"
import type { Profile } from "@/types/profile"

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  // Redirect if unauthenticated
useEffect(() => {
  if (status === "unauthenticated") {
    // Either send to root or a custom page
    router.push("/")
  }
}, [status, router])

  // Load profile + enrich only when session is ready
  useEffect(() => {
    if (!session?.user) return

    let isMounted = true

    async function loadProfile() {
      try {
        setLoading(true)

        const res = await fetch("/api/profile")
        const existing: Profile = await res.json()

        if (existing?.id) {
          if (isMounted) setProfile(existing)
        } else if (session.user.vanityUrl) {
          const enrichRes = await fetch(
            `/api/enrich?linkedinProfileUrl=${encodeURIComponent(session.user.vanityUrl)}`
          )
          const enriched: Profile = await enrichRes.json()

          if (isMounted) setProfile(enriched)

          await fetch("/api/profile", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(enriched),
          })
        }
      } catch (err) {
        console.error("Failed to load/enrich profile", err)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    loadProfile()
    return () => {
      isMounted = false
    }
  }, [session])

  return (
    <div className="flex flex-col items-center w-full p-6">
      <Suspense
        fallback={
          <Card>
            <CardContent>
              <Skeleton className="h-40 w-full" />
            </CardContent>
          </Card>
        }
      >
        <ProfileSnapshotCard profile={profile} loading={loading} />
      </Suspense>
    </div>
  )
}
