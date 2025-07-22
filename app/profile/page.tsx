"use client"

import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const [profile, setProfile] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    if (session?.accessToken) {
      fetch("/api/profile", {
        headers: { Authorization: `Bearer ${session.accessToken}` },
      })
        .then((res) => res.json())
        .then((data) => setProfile(data))
        .catch((err) => setError("Failed to load profile"))
    }
  }, [session])

  const handleEnrich = async () => {
    if (!profile?.vanityName) {
      alert("Missing vanityName")
      return
    }

    const res = await fetch(`/api/enrich?vanityName=${profile.vanityName}`)
    if (!res.ok) {
      alert("Failed to fetch enriched profile")
      return
    }

    const enrichedData = await res.json()
    // Save in local storage or sessionStorage (quick and dirty way to pass data)
    sessionStorage.setItem("enrichedProfile", JSON.stringify(enrichedData))
    router.push("/profile/enriched")
  }

  if (status === "loading") return <p>Loading session...</p>
  if (!session) return <p>Please sign in to view your LinkedIn profile</p>
  if (error) return <p>{error}</p>
  if (!profile) return <p>Loading profile data...</p>

  return (
    <div>
      <h1>LinkedIn Profile</h1>
      <p>
        Name: {profile.localizedFirstName} {profile.localizedLastName}
      </p>
      <p>Headline: {profile.localizedHeadline}</p>
      <button onClick={handleEnrich} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Enrich Profile with EnrichLayer →
      </button>
    </div>
  )
}
