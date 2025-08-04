"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import type { Profile } from "@/types/profile"

export function ProfileSnapshotCard() {
  const [linkedinUrl, setLinkedinUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [enrichedProfile, setEnrichedProfile] = useState<Profile | null>(null)

  const handleEnrichProfile = async () => {
    if (!linkedinUrl) {
      toast.error("Please enter a LinkedIn profile URL.")
      return
    }

    setLoading(true)
    setEnrichedProfile(null)
    try {
      const response = await fetch("/api/enrich", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ linkedinUrl }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to enrich profile.")
      }

      const data = await response.json()
      setEnrichedProfile(data.profile)
      toast.success("Profile enriched successfully!")
    } catch (error: any) {
      console.error("Error enriching profile:", error)
      toast.error("Failed to enrich profile.", {
        description: error.message || "An unknown error occurred.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Enrich Profile from LinkedIn</CardTitle>
        <CardDescription>
          Enter a LinkedIn profile URL to automatically extract and populate resume data.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="linkedin-url">LinkedIn Profile URL</Label>
          <Input
            id="linkedin-url"
            placeholder="https://www.linkedin.com/in/johndoe"
            value={linkedinUrl}
            onChange={(e) => setLinkedinUrl(e.target.value)}
            disabled={loading}
          />
        </div>
        <Button onClick={handleEnrichProfile} disabled={loading} className="w-full">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enriching...
            </>
          ) : (
            "Enrich Profile"
          )}
        </Button>

        {enrichedProfile && (
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold">Enriched Data Preview:</h3>
            <p>
              <strong>Name:</strong> {enrichedProfile.name}
            </p>
            <p>
              <strong>Headline:</strong> {enrichedProfile.headline}
            </p>
            <p>
              <strong>Email:</strong> {enrichedProfile.email}
            </p>
            {/* You can display more fields here */}
            <Button variant="outline" className="w-full bg-transparent">
              Apply to Resume (Coming Soon)
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
