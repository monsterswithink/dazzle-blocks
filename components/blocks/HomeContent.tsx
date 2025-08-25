"use client"

import React, { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/card"
import SignIn from "@/micro/SignIn" // your dedicated SignIn button

export default function HomeContent() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push("/profile")
    }
  }, [session, router])

  if (status === "loading") {
    return (
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <main className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center p-4 md:p-6 lg:p-8">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Welcome to the Collaborative Resume Editor
          </CardTitle>
          <CardDescription className="mt-2 text-lg text-gray-600">
            Build and collaborate on your professional resume in real-time.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700">Sign in with your LinkedIn account to get started.</p>
          <SignIn />
        </CardContent>
      </Card>
    </main>
  )
}
