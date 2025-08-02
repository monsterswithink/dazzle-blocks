"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { VeltProvider as VeltReactProvider } from "@veltdev/react"
import { useSession } from "next-auth/react"

interface VeltProviderProps {
  children: React.ReactNode
  documentId: string
  client?: VeltClient // Optional: pass a pre-initialized client
}

export function VeltProvider({ children, documentId, client }: VeltProviderProps) {
  const { data: session, status } = useSession()
  const [veltClientInstance, setVeltClientInstance] = useState<VeltClient | null>(null)

  useEffect(() => {
    if (status === "authenticated" && !veltClientInstance) {
      const userId = session.user?.id || session.user?.email || "anonymous"
      const userName = session.user?.name || "Anonymous User"
      const userAvatar = session.user?.image || "/placeholder-user.png"

      const newClient =
        client ||
        new VeltClient({
          apiKey: process.env.NEXT_PUBLIC_VELT_PUBLIC_KEY!,
          userId: userId,
          userName: userName,
          userAvatar: userAvatar,
        })
      setVeltClientInstance(newClient)
    } else if (status === "unauthenticated" && veltClientInstance) {
      // Optionally destroy client if user logs out
      veltClientInstance.destroy()
      setVeltClientInstance(null)
    }
  }, [session, status, veltClientInstance, client])

  if (status === "loading" || !veltClientInstance) {
    return (
      <div className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center gap-4 py-10">
        <p className="text-lg text-gray-600">Initializing collaboration...</p>
      </div>
    )
  }

  return (
    <VeltReactProvider client={veltClientInstance} documentId={documentId}>
      {children}
    </VeltReactProvider>
  )
}
