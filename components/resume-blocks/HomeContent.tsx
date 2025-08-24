"use client"

import React, { useEffect } from "react"
import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/card"
import { Linkedin, Loader2 } from "lucide-react"




export default function HomeContent() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push("/profile")
    }
  }, [session, router])

  const handleSignIn = async () => {
    await signIn("linkedin", {
      callbackUrl: "/profile",
      redirect: true,
    })
  }

  if (status === "loading") {
    return (
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <main className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center p-4 md:p-6 lg:p-8">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Welcome to the Collaborative Resume Editor</CardTitle>
          <CardDescription className="mt-2 text-lg text-gray-600">
            Build and collaborate on your professional resume in real-time.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700">Sign in with your LinkedIn account to get started.</p>
          <Button onClick={handleSignIn} size="lg" className="w-full">
            <Linkedin className="mr-2 h-5 w-5" />
            Sign in with LinkedIn
          </Button>
          <div className="text-sm text-gray-500">
            By signing in, you agree to our{" "}
            <Link href="#" className="underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline">
              Privacy Policy
            </Link>
            .
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
