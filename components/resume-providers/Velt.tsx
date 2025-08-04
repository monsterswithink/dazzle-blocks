"use client"

import type React from "react"

import { VeltProvider as VeltSDKProvider, useVeltClient } from "@veltdev/react"
import { useEffect } from "react"
import { useSession } from "next-auth/react"

interface VeltProviderProps {
  children: React.ReactNode
}

export function VeltProvider({ children }: VeltProviderProps) {
  const { data: session } = useSession()
  const { client: veltClient } = useVeltClient()

  useEffect(() => {
    if (veltClient && session?.user) {
      veltClient.setWhoIsOnline({
        user: {
          id: session.user.email || session.user.id,
          name: session.user.name || "Anonymous",
          photoUrl: session.user.image || "/placeholder-user.png",
        },
      })
    }
  }, [veltClient, session])

  return <VeltSDKProvider apiKey={process.env.NEXT_PUBLIC_VELT_PUBLIC_KEY!}>{children}</VeltSDKProvider>
}
