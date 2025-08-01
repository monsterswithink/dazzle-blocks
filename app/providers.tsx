"use client"

import type React from "react"
import { SessionProvider } from "next-auth/react"
import { VeltProvider } from "@veltdev/react"

export function Providers({ children }: { children: React.ReactNode }) {
  const veltApiKey = process.env.NEXT_PUBLIC_VELT_PUBLIC_KEY
  return (
    <SessionProvider>
      <VeltProvider apiKey={VELT_PUBLIC_KEY}>{children}</VeltProvider>
    </SessionProvider>
  )
}
