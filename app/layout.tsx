"use client"

import { Suspense } from "react"
import { SessionProvider } from "next-auth/react"
import { VeltProvider } from "@veltdev/react"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Inter } from "next/font"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Suspense fallback={null}>
          <SessionProvider>
            <VeltProvider apiKey={process.env.NEXT_PUBLIC_VELT_PUBLIC_KEY!} documentId="resume-app-root">
              <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                {children}
                <Toaster />
                <Analytics />
                <SpeedInsights />
              </ThemeProvider>
            </VeltProvider>
          </SessionProvider>
        </Suspense>
      </body>
    </html>
  )
}