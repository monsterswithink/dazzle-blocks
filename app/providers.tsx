"use client"

import type React from "react"
import { SessionProvider } from "next-auth/react"
import { VeltProvider } from "@veltdev/react"

export function Providers({ children }: { children: React.ReactNode }) {
  const veltApiKey = process.env.NEXT_PUBLIC_VELT_PUBLIC_KEY
  return (
    <SessionProvider>
      <VeltProvider apiKey={veltApiKey}>{children}</VeltProvider>
    </SessionProvider>
  )
}
// "use client"

// import type React from "react"
// import { SessionProvider } from "next-auth/react"

// export function Providers({ children }: { children: React.ReactNode }) {
//   return <SessionProvider>{children}</SessionProvider>
// }
