"use client"

import type React from "react"
import { Mona_Sans as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SessionProvider } from "next-auth/react" // Import SessionProvider from next-auth/react
import { useSearchParams, Suspense } from "next/navigation" // Import useSearchParams and Suspense
import ClientLayoutComponent from "./ClientLayout"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const searchParams = useSearchParams() // Use useSearchParams

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Suspense fallback={null}>
          {" "}
          {/* Wrap children with Suspense boundary */}
          <SessionProvider>
            {" "}
            {/* Wrap children with SessionProvider */}
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              <ClientLayoutComponent>{children}</ClientLayoutComponent>
              <Toaster />
              <Analytics />
              <SpeedInsights />
            </ThemeProvider>
          </SessionProvider>
        </Suspense>
      </body>
    </html>
  )
}
