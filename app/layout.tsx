import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "#styles"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LinkedIn Resume Sync",
  description: "Sync your LinkedIn profile to create beautiful, collaborative resumes",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
