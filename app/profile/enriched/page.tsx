"use client"

import { CardDescription } from "@/components/ui/card"

import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface EnrichedProfileData {
  full_name?: string
  headline?: string
  summary?: string
  experience?: any[]
  education?: any[]
  skills?: string[]
  profile_url?: string
}

async function fetchEnrichedProfile(vanityUrl: string): Promise<EnrichedProfileData | null> {
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/enrich?vanityUrl=${encodeURIComponent(vanityUrl)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Failed to fetch enriched profile:", errorData)
      return null
    }

    const data: EnrichedProfileData = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching enriched profile:", error)
    return null
  }
}

export default async function EnrichedProfilePage() {
  const session = await auth()
  const router = useRouter()

  if (!session || !session.user || !(session.user as any).vanityUrl) {
    redirect("/api/auth/signin")
  }

  const vanityUrl = (session.user as any).vanityUrl
  const enrichedData = await fetchEnrichedProfile(vanityUrl)

  return (
    <main className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center p-4 md:p-6 lg:p-8">
      {enrichedData ? (
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Enriched LinkedIn Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <p>
                <span className="font-semibold">Name:</span> {enrichedData.full_name || session.user.name}
              </p>
              {enrichedData.headline && (
                <p>
                  <span className="font-semibold">Headline:</span> {enrichedData.headline}
                </p>
              )}
              {enrichedData.summary && (
                <div>
                  <h3 className="font-semibold">Summary:</h3>
                  <p>{enrichedData.summary}</p>
                </div>
              )}
              {enrichedData.experience && enrichedData.experience.length > 0 && (
                <div>
                  <h3 className="font-semibold">Experience:</h3>
                  <ul className="list-disc pl-5">
                    {enrichedData.experience.map((exp: any, index: number) => (
                      <li key={index}>
                        {exp.title} at {exp.company} ({exp.start_date} - {exp.end_date || "Present"})
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {enrichedData.education && enrichedData.education.length > 0 && (
                <div>
                  <h3 className="font-semibold">Education:</h3>
                  <ul className="list-disc pl-5">
                    {enrichedData.education.map((edu: any, index: number) => (
                      <li key={index}>
                        {edu.degree} from {edu.university} ({edu.start_date} - {edu.end_date || "Present"})
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {enrichedData.skills && enrichedData.skills.length > 0 && (
                <div>
                  <h3 className="font-semibold">Skills:</h3>
                  <p>{enrichedData.skills.join(", ")}</p>
                </div>
              )}
              {enrichedData.profile_url && (
                <p>
                  <span className="font-semibold">Profile URL:</span>{" "}
                  <a
                    href={enrichedData.profile_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {enrichedData.profile_url}
                  </a>
                </p>
              )}
            </div>
            <div className="mt-6 flex justify-center">
              <Button asChild>
                <Link href="/profile">Back to Profile</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-3xl font-bold">No Data</CardTitle>
              <CardDescription>No enriched profile data found.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Button className="w-full" onClick={() => router.push("/profile")}>
                Go Back to Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </main>
  )
}
