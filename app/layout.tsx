import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "#styles"
import { Providers } from "./providers"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Resume Editor",
  description: "A collaborative resume editor powered by Next.js and Velt.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}


import './globals.css'