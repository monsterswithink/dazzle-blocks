"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { signIn } from "next-auth/react"
import { Linkedin } from "lucide-react"
import { useSearchParams } from "next/navigation"

export default function SignInPage() {
  const searchParams = useSearchParams()
  const from = searchParams.get("from") ?? "/editor"

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            Choose your preferred sign-in method.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button className="w-full" onClick={() => signIn("linkedin", { callbackUrl: from })}>
            <Linkedin className="mr-2 h-4 w-4" /> Sign In with LinkedIn
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
