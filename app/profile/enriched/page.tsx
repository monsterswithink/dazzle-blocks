"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { saveResumeToSupabase } from "@/lib/resume-service"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

export default function EnrichedProfilePage() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const stored = sessionStorage.getItem("enrichedProfile")
    if (stored) {
      setData(JSON.parse(stored))
    }
  }, [])

  const handleCreateResume = async () => {
    if (!data) return

    setLoading(true)
    try {
      const resumeId = await saveResumeToSupabase(data)
      toast.success("Resume created successfully!")
      router.push(`/resume/${resumeId}`)
    } catch (error) {
      console.error("Error creating resume:", error)
      toast.error("Failed to create resume")
    } finally {
      setLoading(false)
    }
  }

  if (!data) {
    return (
      <div className="flex min-h-[100dvh] flex-col items-center justify-center">
        <p>Loading enriched data...</p>
      </div>
    )
  }

  return (
    <main className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center p-4 md:p-6 lg:p-8">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle>Enriched LinkedIn Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Name:</h3>
              <p>{data.full_name}</p>
            </div>
            <div>
              <h3 className="font-semibold">Headline:</h3>
              <p>{data.headline}</p>
            </div>
            <div>
              <h3 className="font-semibold">Location:</h3>
              <p>
                {data.city}, {data.country}
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Industry:</h3>
              <p>{data.industry}</p>
            </div>
          </div>

          {data.summary && (
            <div>
              <h3 className="font-semibold">Summary:</h3>
              <p className="text-sm text-gray-600">{data.summary}</p>
            </div>
          )}

          <div className="flex gap-4">
            <Button onClick={handleCreateResume} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Resume...
                </>
              ) : (
                "Create Resume from This Data"
              )}
            </Button>
            <Button variant="outline" onClick={() => router.push("/profile")}>
              Back to Profile
            </Button>
          </div>

          <details className="mt-8">
            <summary className="cursor-pointer font-semibold">View Raw Data</summary>
            <pre className="mt-4 text-xs bg-gray-100 p-4 rounded overflow-auto max-h-96">
              {JSON.stringify(data, null, 2)}
            </pre>
          </details>
        </CardContent>
      </Card>
    </main>
  )
}
