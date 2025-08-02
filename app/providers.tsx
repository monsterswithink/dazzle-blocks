"use client"

import { SessionProvider } from "next-auth/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { Toaster } from "@/components/ui/toaster"
import { VeltProvider } from "@/components/resume-provider/Velt"

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <SessionProvider>
      <VeltProvider documentId="resume-app-root">
        <NextThemesProvider {...props}>
          {children}
          <Toaster />
        </NextThemesProvider>
      </VeltProvider>
    </SessionProvider>
  )
}