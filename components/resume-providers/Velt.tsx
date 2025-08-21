"use client"

import React from "react"
import {
  VeltProvider as VeltSDKProvider,
  useIdentify,
  useLiveState,
} from "@veltdev/react"
import { useSession } from "next-auth/react"
import type { AuthUser } from "@/types/AuthUser"  // 👈 import your type

interface VeltProviderProps {
  children: React.ReactNode
  documentId?: string
  dataProviders?: any
}

function VeltIdentifyUser() {
  const { data: session } = useSession()
  const identify = useIdentify()

  async function fetchVeltJWTToken(userId: string) {
    const res = await fetch("/api/velt/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    })
    if (!res.ok) throw new Error("Failed to fetch Velt JWT token")
    return res.json() as Promise<{ authToken: string }>
  }

  React.useEffect(() => {
    if (!session?.user) return

    const user = session.user as AuthUser   // 👈 enforce typing

    const identifyUser = async () => {
      const { authToken } = await fetchVeltJWTToken(user.id)

      identify(
        {
          userId: user.id,                  // 👈 map id → userId
          name: user.name ?? undefined,
          email: user.email ?? undefined,
          photoUrl: user.avatarUrl ?? "/placeholder-user.png",
        },
        { authToken }
      )
    }

    identifyUser().catch(console.error)
  }, [session, identify])

  return null
}

export function VeltProvider({
  children,
  documentId,
  dataProviders,
}: VeltProviderProps) {
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
