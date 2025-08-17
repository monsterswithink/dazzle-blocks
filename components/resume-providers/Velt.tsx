"use client"

import type React from "react"
import { VeltProvider as VeltSDKProvider, useIdentify } from "@veltdev/react"
import { useSession } from "next-auth/react"

interface VeltProviderProps {
  children: React.ReactNode
  documentId: string
}

function VeltIdentifyUser() {
  const { data: session } = useSession()

  useIdentify({
    userId: session?.user?.email || session?.user?.id || "anonymous",
    name: session?.user?.name || "Anonymous",
    email: session?.user?.email || "",
    photoUrl: session?.user?.image || "/placeholder-user.png",
  })

  return null
}

export function VeltProvider({ children, documentId }: VeltProviderProps) {
  const apiKey = process.env.NEXT_PUBLIC_VELT_PUBLIC_KEY

  if (!apiKey) {
    console.warn("NEXT_PUBLIC_VELT_PUBLIC_KEY is not set")
    return <>{children}</>
  }

  return (
    <VeltSDKProvider apiKey={apiKey} documentId={documentId}>
      <VeltIdentifyUser />
      {children}
    </VeltSDKProvider>
  )
}
