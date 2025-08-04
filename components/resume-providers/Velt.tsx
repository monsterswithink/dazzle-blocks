"use client"

import type React from "react"

import { useEffect } from "react"
import { VeltProvider as VeltReactProvider, useVeltClient } from "@veltdev/react"
import { useSession } from "next-auth/react"

interface VeltWrapperProps {
  children: React.ReactNode
  documentId: string
}

function VeltInitializer({ children, documentId }: VeltWrapperProps) {
  const { data: session, status } = useSession()
  const { client } = useVeltClient()

  useEffect(() => {
    const initVelt = async () => {
      if (client && session?.user) {
        await client.identify(session.user.id!, {
          name: session.user.name || "Anonymous",
          email: session.user.email || "",
          photoUrl: session.user.image || "",
        })

        client.setDocument(documentId)
      }
    }

    if (status === "authenticated") {
      initVelt()
    }
  }, [client, session, status, documentId])

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  return <>{children}</>
}

export function VeltProvider({ children, documentId }: VeltWrapperProps) {
  if (!process.env.NEXT_PUBLIC_VELT_PUBLIC_KEY) {
    return <div className="p-4 text-red-600">Velt API key not configured</div>
  }

  return (
    <VeltReactProvider apiKey={process.env.NEXT_PUBLIC_VELT_PUBLIC_KEY}>
      <VeltInitializer documentId={documentId}>{children}</VeltInitializer>
    </VeltReactProvider>
  )
}
