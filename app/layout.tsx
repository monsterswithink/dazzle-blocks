"use client"

import { Suspense } from "react"
import { Providers } from "@/components/providers"
import { cn } from "@/lib/utils"
import { Inter } from "next/font/google"

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Suspense fallback={null}>
          <Providers attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  )
}
