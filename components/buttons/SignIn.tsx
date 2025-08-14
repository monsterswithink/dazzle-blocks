"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/ui/button"

export default function SignIn() {
  return (
    <Button
      onClick={() =>
        signIn("linkedin", {
          callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/profile`
        })
      }
    >
      Sign in with LinkedIn
    </Button>
  )
}
