"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ResumeService } from "@/lib/resume-service"
import { Button } from "@/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/card"
import { CheckCircle, ExternalLink, Loader2 } from "lucide-react"

export default function EnrichedProfilePage() {
  const [data, setData] = useState<any>(null)
  const [resumeId, setResumeId] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const stored = sessionStorage.getItem("enrichedProfile")
    if (stored) {
      setData(JSON.parse(stored))
    }
  }, [])

  const handleCreateResume = async () => {
    if (!data) return

    setIsSaving(true)
    try {
      const createdResumeId = await ResumeService.createResumeFromEnrichedData(data)

      if (createdResumeId) {
        setResumeId(createdResumeId)
        setSaved(true)
        // Clear the session storage since we've saved it
        sessionStorage.removeItem("enrichedProfile")
      } else {
        alert("Failed to create resume. Please try again.")
      }
    } catch (error) {
      console.error("Error creating resume:", error)
      alert("Failed to create resume. Please try again.")
    } finally {
      setIsSaving(false)
    }
  }

  const handleViewResume = () => {
    if (resumeId) {
      router.push(`/resume/${resumeId}`)
    }
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p>Loading enriched data...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {saved ? <CheckCircle className="h-5 w-5 text-green-600" /> : null}
              Enriched LinkedIn Profile
            </CardTitle>
            <CardDescription>
              {saved
                ? "Your resume has been created successfully!"
                : "Review your LinkedIn data and create your resume"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {!saved ? (
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Profile Summary</h3>
                  <p>
                    <strong>Name:</strong> {data.full_name}
                  </p>
                  <p>
                    <strong>Headline:</strong> {data.headline}
                  </p>
                  <p>
                    <strong>Location:</strong> {data.city}, {data.state}
                  </p>
                  <p>
                    <strong>Experience:</strong> {data.experiences?.length || 0} positions
                  </p>
                  <p>
                    <strong>Skills:</strong> {data.skills?.length || 0} skills
                  </p>
                </div>

                <Button onClick={handleCreateResume} disabled={isSaving} className="w-full" size="lg">
                  {isSaving ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Resume...
                    </>
                  ) : (
                    "Create My Resume"
                  )}
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Resume Created!</h3>
                  <p>
                    Your resume is now available at: <code>/resume/{resumeId}</code>
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button onClick={handleViewResume} className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View My Resume
                  </Button>
                  <Button variant="outline" onClick={() => router.push("/profile")}>
                    Back to Profile
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Raw data preview */}
        <Card>
          <CardHeader>
            <CardTitle>Raw LinkedIn Data</CardTitle>
            <CardDescription>Complete enriched profile data from EnrichLayer</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 p-4 rounded-lg text-xs overflow-auto max-h-96">
              {JSON.stringify(data, null, 2)}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
