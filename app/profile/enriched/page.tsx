"use client"

import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Profile } from "@/types/profile"

async function fetchEnrichedProfile(linkedinUrl: string): Promise<Profile | null> {
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/enrich`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ linkedinUrl }),
      cache: "no-store", // Ensure fresh data
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || "Failed to fetch enriched profile.")
    }

    const data = await response.json()
    return data.profile
  } catch (error) {
    console.error("Error fetching enriched profile:", error)
    return null
  }
}

export default async function EnrichedProfilePage({ searchParams }: { searchParams: { linkedinUrl?: string } }) {
  const session = await auth()

  if (!session) {
    redirect("/auth/signin")
  }

  const linkedinUrl = searchParams.linkedinUrl || ""
  const enrichedProfile = linkedinUrl ? await fetchEnrichedProfile(linkedinUrl) : null

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Enriched Profile Data</CardTitle>
          <CardDescription>This data was extracted from the provided LinkedIn URL.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {enrichedProfile ? (
            <div className="space-y-2">
              <p>
                <strong>Name:</strong> {enrichedProfile.name}
              </p>
              <p>
                <strong>Headline:</strong> {enrichedProfile.headline}
              </p>
              <p>
                <strong>Email:</strong> {enrichedProfile.email}
              </p>
              {enrichedProfile.summary && (
                <p>
                  <strong>Summary:</strong> {enrichedProfile.summary}
                </p>
              )}

              {enrichedProfile.experience && enrichedProfile.experience.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mt-4">Experience:</h3>
                  {enrichedProfile.experience.map((exp, index) => (
                    <div key={index} className="ml-4 border-l pl-4 mt-2">
                      <p>
                        <strong>{exp.title}</strong> at {exp.company}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{exp.years}</p>
                      <p className="text-sm">{exp.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {enrichedProfile.education && enrichedProfile.education.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mt-4">Education:</h3>
                  {enrichedProfile.education.map((edu, index) => (
                    <div key={index} className="ml-4 border-l pl-4 mt-2">
                      <p>
                        <strong>{edu.degree}</strong> from {edu.university}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{edu.years}</p>
                      <p className="text-sm">{edu.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {enrichedProfile.skills && enrichedProfile.skills.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mt-4">Skills:</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {enrichedProfile.skills.map((skill, index) => (
                      <span key={index} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                        {skill.name} ({skill.level})
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <Button className="mt-6 w-full">Apply to Resume (Coming Soon)</Button>
            </div>
          ) : (
            <p className="text-center text-gray-700 dark:text-gray-300">
              No enriched profile data found or an error occurred.
            </p>
          )}
          <Button onClick={() => redirect("/editor")} variant="outline" className="w-full mt-4">
            Back to Editor
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
