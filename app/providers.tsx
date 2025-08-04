"use client"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { Toaster } from "@/components/ui/sonner"
import { VeltProvider } from "@/components/resume-providers/Velt"

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <SessionProvider>
      <NextThemesProvider {...props}>
        <VeltProvider>{children}</VeltProvider>
        <Toaster />
      </NextThemesProvider>
    </SessionProvider>
  )
}
