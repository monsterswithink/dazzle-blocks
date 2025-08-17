'use client'

import { SessionProvider } from 'next-auth/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes'
import { Toaster } from '@/ui/sonner'
import { VeltProvider } from "@veltdev/react"

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <SessionProvider>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
        <VeltProvider>
          {children}
        </VeltProvider>
        <Toaster />
      </NextThemesProvider>
    </SessionProvider>
  )
}
