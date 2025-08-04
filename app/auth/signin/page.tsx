// app/auth/signin/page.tsx
"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"

export default function SignInPage() {
  const searchParams = useSearchParams()
  const from = searchParams.get("from") ?? "/profile"

  useEffect(() => {
    signIn("linkedin", { callbackUrl: from })
  }, [from])

  return null // or loading spinner
}
