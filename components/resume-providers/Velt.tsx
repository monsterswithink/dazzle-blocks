"use client"

import React from "react"
import { VeltProvider as VeltSDKProvider, useIdentify, useLiveState } from "@veltdev/react"
import { useSession } from "next-auth/react"
import type { AuthUser } from "@/types/AuthUser"

interface VeltProviderProps {
  children: React.ReactNode
  documentId?: string
  dataProviders?: any
}

// Handles user identification with JWT
function VeltIdentifyUser() {
  const { data: session } = useSession()
  const identify = useIdentify()
  const user = session?.user as AuthUser

  async function fetchVeltJWTToken(userId: string) {
    const res = await fetch("/api/velt/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    })
    if (!res.ok) throw new Error("Failed to fetch Velt JWT token")
    return res.json() // { authToken: string }
  }

  React.useEffect(() => {
    if (!user) return

    const identifyUser = async () => {
      const { authToken } = await fetchVeltJWTToken(user.id)

      identify(
        {
          userId: user.id,
          name: user.name ?? undefined,
          email: user.email ?? undefined,
          photoUrl: user.avatarUrl ?? "/placeholder-user.png",
        },
        { authToken }
      )
    }

    identifyUser().catch(console.error)
  }, [user, identify])

  return null
}

export function VeltProvider({ children, documentId, dataProviders }: VeltProviderProps) {
  const apiKey = process.env.NEXT_PUBLIC_VELT_PUBLIC_KEY

  if (!apiKey) {
    console.warn("NEXT_PUBLIC_VELT_PUBLIC_KEY is not set")
    return <>{children}</>
  }

  return (
    <VeltSDKProvider apiKey={apiKey} documentId={documentId} dataProviders={dataProviders}>
      <VeltIdentifyUser />
      {children}
    </VeltSDKProvider>
  )
}

export { useLiveState }
