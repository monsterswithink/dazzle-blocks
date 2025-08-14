"use client"

import { useEffect, useState, Suspense } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { FloatingToolbar } from "@/resume-tools/FloatingToolbar"
import { ResumePreview } from "@/resume-blocks/ResumePreview"
import { Card, CardContent } from "@/ui/card"
import { Skeleton } from "@/ui/skeleton"

interface EnrichedProfile {
  id: string
  name: string
  headline: string
  theme: string
  // …rest of your resume fields
}

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [profile, setProfile] = useState<EnrichedProfile | null>(null)
  const [loading, setLoading] = useState(true)

  // Redirect if not signed in
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin")
    }
  }, [status, router])

  // Fetch + Enrich only when session is ready
  useEffect(() => {
    if (!session?.user) return

    let isMounted = true

    async function loadProfile() {
      try {
        // 1. Try to get existing profile from Supabase
        const res = await fetch(`/api/profile?userId=${session.user.id}`)
        const existing = await res.json()

        if (existing?.id) {
          if (isMounted) {
            setProfile(existing)
            setLoading(false)
          }
          return
        }

        // 2. If not found, run enrichment
        const enrichRes = await fetch(`/api/enrich-profile`, {
          method: "POST",
          body: JSON.stringify({ userId: session.user.id }),
          headers: { "Content-Type": "application/json" },
        })
        const enriched = await enrichRes.json()

        // 3. Save to Supabase
        await fetch(`/api/profile`, {
          method: "POST",
          body: JSON.stringify(enriched),
          headers: { "Content-Type": "application/json" },
        })

        if (isMounted) {
          setProfile(enriched)
          setLoading(false)
        }
      } catch (err) {
        console.error("Profile load failed", err)
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
      {/* Floating toolbar stays visible */}
      <FloatingToolbar />

      <Card className="w-full max-w-3xl mt-6">
        <CardContent>
          {loading ? (
            <Skeleton className="w-full h-64" />
          ) : profile ? (
            <ResumePreview profile={profile} />
          ) : (
            <div className="text-center text-gray-500">
              No profile data found.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
