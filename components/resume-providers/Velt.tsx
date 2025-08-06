"use client"

import type React from "react"
import { VeltProvider as VeltSDKProvider, useIdentify } from "@veltdev/react"
import { useEffect } from "react"
import { useSession } from "next-auth/react"

interface VeltProviderProps {
  children: React.ReactNode
}

function VeltIdentifyUser() {
  const { data: session } = useSession()

  // Note: The useIdentify hook will only be called once,
  // when the user's session is first available.
  useIdentify({
    userId: session?.user?.email || session?.user?.id || "",
    name: session?.user?.name || "Anonymous",
    avatar: session?.user?.image || "/placeholder-user.png",
  })

  return null
}

export function VeltProvider({ children }: VeltProviderProps) {
  return (
    <VeltSDKProvider apiKey={process.env.NEXT_PUBLIC_VELT_PUBLIC_KEY!}>
      <VeltIdentifyUser />
      {children}
    </VeltSDKProvider>
  )
}
