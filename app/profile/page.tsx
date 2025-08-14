"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { createClient } from "@supabase/supabase-js"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status !== "authenticated" || !session?.user?.id) return

    const fetchProfile = async () => {
      setLoading(true)

      // 1️⃣ Check Supabase for profile
      const { data: existing } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single()

      if (existing) {
        setProfile(existing)
        setLoading(false)
        return
      }

      // 2️⃣ If no profile → run enrichment
      try {
        const res = await fetch("/api/enrich-profile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ linkedinId: session.user.linkedinId }),
        })

        const enriched = await res.json()

        // Store in Supabase
        await supabase.from("profiles").insert({
          id: session.user.id,
          ...enriched,
        })

        setProfile(enriched)
      } catch (err) {
        console.error("Enrichment failed", err)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [status, session])

  if (loading) {
    return (
      <div className="space-y-4 p-6">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    )
  }

  if (!profile) {
    return <p className="p-6">No profile found.</p>
  }

  return (
    <Card className="m-6">
      <CardHeader>
        <CardTitle>{profile.full_name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{profile.headline}</p>
        {/* render more fields as needed */}
      </CardContent>
    </Card>
  )
}
