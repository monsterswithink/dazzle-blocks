import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Liveblocks Resume Editor",
  description: "A collaborative resume editor built with Next.js and Liveblocks.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'