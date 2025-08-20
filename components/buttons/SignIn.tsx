"use client"

import { Button } from "@/ui/button"
import { Linkedin, Loader2 } from "lucide-react"
import { signIn, useSession } from "next-auth/react"
import { useState } from "react"

export default function SignIn() {
  const { status } = useSession()
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = async () => {
    setIsLoading(true)
    try {
      await signIn("linkedin", {
        callbackUrl: "https://dazzle-one.vercel.app/api/auth/callback/linkedin",
        redirect: true,
      })
    } catch (error) {
      console.error("Sign in error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (status === "loading") {
    return (
      <Button disabled className="w-full">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading...
      </Button>
    )
  }

  return (
    <Button onClick={handleSignIn} disabled={isLoading} className="w-full" size="lg">
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Signing in...
        </>
      ) : (
        <>
          <Linkedin className="mr-2 h-4 w-4" />
          Sign in with LinkedIn
        </>
      )}
    </Button>
  )
}
