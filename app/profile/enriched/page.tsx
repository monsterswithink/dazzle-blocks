"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import type { Profile } from "@/types/profile"

export default function EnrichedProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [linkedinUrl, setLinkedinUrl] = useState("")
  const [enrichedProfile, setEnrichedProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    }
  }, [status, router])

  const handleEnrichProfile = async () => {
    if (!linkedinUrl) {
      toast.error("LinkedIn profile URL is required.")
      return
    }

    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/enrich?linkedinProfileUrl=${encodeURIComponent(linkedinUrl)}`)
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to enrich profile.")
      }
      const data: Profile = await response.json()
      setEnrichedProfile(data)
      toast.success("Profile enriched successfully!")
    } catch (err: any) {
      setError(err.message)
      toast.error("Failed to enrich profile", {
        description: err.message,
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSaveProfile = async () => {
    if (!enrichedProfile) {
      toast.error("No enriched profile data to save.")
      return
    }

    setLoading(true)
    setError(null)
    try {
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enrichedProfile),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to save profile.")
      }
      toast.success("Enriched profile saved successfully!")
      router.push("/profile") // Redirect to the main profile page
    } catch (err: any) {
      setError(err.message)
      toast.error("Failed to save profile", {
        description: err.message,
      })
    } finally {
      setLoading(false)
    }
  }

  if (status === "loading") {
    return (
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
        <div className="space-y-4 text-center">
          <Loader2 className="mx-auto h-12 w-12 animate-spin text-gray-900 dark:text-gray-50" />
          <h1 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-gray-50">Loading...</h1>
          <p className="text-gray-500 dark:text-gray-400">Please wait while we load your profile.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Enrich Profile from LinkedIn</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="linkedin-url">LinkedIn Profile URL</Label>
            <Input
              id="linkedin-url"
              type="url"
              placeholder="e.g., https://www.linkedin.com/in/your-profile"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              disabled={loading}
            />
          </div>
          <Button onClick={handleEnrichProfile} disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enriching...
              </>
            ) : (
              "Enrich Profile"
            )}
          </Button>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {enrichedProfile && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Enriched Data Preview:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Name</Label>
                  <p className="font-medium">{enrichedProfile.personal.name}</p>
                </div>
                <div>
                  <Label>Title</Label>
                  <p className="font-medium">{enrichedProfile.personal.title}</p>
                </div>
                <div>
                  <Label>Email</Label>
                  <p>{enrichedProfile.personal.email}</p>
                </div>
                <div>
                  <Label>Phone</Label>
                  <p>{enrichedProfile.personal.phone}</p>
                </div>
                <div>
                  <Label>LinkedIn</Label>
                  <p className="truncate">{enrichedProfile.personal.linkedin}</p>
                </div>
                <div>
                  <Label>GitHub</Label>
                  <p className="truncate">{enrichedProfile.personal.github}</p>
                </div>
              </div>
              <div className="space-y-2">
                <Label>About Me</Label>
                <div
                  className="prose dark:prose-invert max-w-none text-sm border rounded-md p-3 bg-gray-50 dark:bg-gray-800"
                  dangerouslySetInnerHTML={{ __html: enrichedProfile.about.description }}
                />
              </div>
              <Button onClick={handleSaveProfile} disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save Enriched Profile"
                )}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
