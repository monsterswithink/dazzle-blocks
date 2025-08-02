"use client"

import { useSearchParams, Suspense } from "next/navigation"
import { Mona_Sans as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { SessionProvider } from "next-auth/react"
import { VeltProvider } from "@veltdev/react"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import ClientLayoutComponent from "@/components/ClientLayoutComponent" // ✅ if this still exists

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const searchParams = useSearchParams()
  const docId = searchParams.get("doc") ?? "resume-app-root"

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Suspense fallback={null}>
          <SessionProvider>
            <VeltProvider apiKey={process.env.NEXT_PUBLIC_VELT_PUBLIC_KEY!} documentId={docId}>
              <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                <ClientLayoutComponent>{children}</ClientLayoutComponent>
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