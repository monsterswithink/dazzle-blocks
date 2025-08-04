# Step 2: Upgrade NextAuth.js to v5

This step outlines the necessary changes to upgrade your NextAuth.js (Auth.js) implementation to v5, which introduces significant changes to how authentication handlers and session management are configured.

**Files to create/modify:**

1.  `package.json` (Modify existing file)
2.  `lib/auth.ts` (Modify existing file)
3.  `app/api/auth/[...nextauth]/route.ts` (Modify existing file)
4.  `middleware.ts` (Modify existing file)
5.  `app/providers.tsx` (Modify existing file)
6.  `app/layout.tsx` (Modify existing file)
7.  `app/page.tsx` (Modify existing file)
8.  `app/auth/signin/page.tsx` (Modify existing file)
9.  `app/auth/error/page.tsx` (Modify existing file)
10. `app/editor/page.tsx` (Modify existing file)

---

## `package.json`

Update the `@auth/core` and `@auth/nextjs` dependencies to `latest`.

\`\`\`json
{
  "name": "resume-editor",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@auth/core": "latest",
    "@auth/nextjs": "latest",
    "@hookform/resolvers": "^3.3.4",
    "@next/third-parties": "^14.2.5",
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-alert-dialog": "^1.0.5",
    "@radix-ui/react-aspect-ratio": "^1.0.3",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-checkbox": "^1.0.4",
    "@radix-ui/react-collapsible": "^1.0.3",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-hover-card": "^1.0.7",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-menubar": "^1.0.4",
    "@radix-ui/react-navigation-menu": "^1.1.4",
    "@radix-ui/react-popover": "^1.0.7",
    "@radix-ui/react-progress": "^1.0.3",
    "@radix-ui/react-radio-group": "^1.1.3",
    "@radix-ui/react-scroll-area": "^1.0.5",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slider": "^1.1.2",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-switch": "^1.0.3",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-toast": "^1.1.5",
    "@radix-ui/react-toggle": "^1.0.3",
    "@radix-ui/react-toggle-group": "^1.0.4",
    "@radix-ui/react-tooltip": "^1.0.7",
    "@supabase/supabase-js": "^2.39.7",
    "@veltdev/react": "^1.0.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "cmdk": "^0.2.1",
    "date-fns": "^3.3.1",
    "embla-carousel-react": "^8.0.0",
    "input-otp": "^1.2.4",
    "lucide-react": "^0.344.0",
    "next": "15.0.3",
    "next-auth": "5.0.0-beta.25",
    "next-themes": "^0.2.1",
    "react": "19.0.0-rc-66855b96-20241106",
    "react-day-picker": "^8.10.0",
    "react-dom": "19.0.0-rc-66855b96-20241106",
    "react-hook-form": "^7.49.3",
    "react-resizable-panels": "^2.0.10",
    "recharts": "^2.12.2",
    "sonner": "^1.4.0",
    "tailwind-merge": "^2.2.1",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.0",
    "zod": "^3.22.4"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "15.0.3",
    "postcss": "^8",
    "tailwindcss": "^3.4.17",
    "typescript": "^5"
  }
}
\`\`\`

## `lib/auth.ts`

This file will define the `authConfig` object, which is the core configuration for Auth.js. It will include the LinkedIn provider, session callbacks, and page redirects.

\`\`\`typescript
import type { AuthConfig } from "@auth/core"
import LinkedIn from "@auth/core/providers/linkedin"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import { createClient } from "@supabase/supabase-js"

export const authConfig = {
  providers: [
    LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      },
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
    supabaseClient: createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!),
  }),
  callbacks: {
    async session({ session, user }) {
      if (session?.user) {
        session.user.id = user.id
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
} satisfies AuthConfig
\`\`\`

## `app/api/auth/[...nextauth]/route.ts`

This file will export the `GET` and `POST` handlers from `next-auth` using the `authConfig`.

\`\`\`typescript
import NextAuth from "@auth/nextjs"
import { authConfig } from "@/lib/auth"

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }
\`\`\`

## `middleware.ts`

The middleware will be updated to use the new `auth` helper from `lib/auth.ts` and handle protected routes.

\`\`\`typescript
import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { nextUrl } = req
  const isAuthenticated = !!req.auth

  const isPublicRoute = nextUrl.pathname === "/" || nextUrl.pathname.startsWith("/auth")

  if (!isAuthenticated && !isPublicRoute) {
    let from = nextUrl.pathname
    if (nextUrl.search) {
      from += nextUrl.search
    }
    const url = new URL(`/auth/signin`, nextUrl.origin)
    url.searchParams.set("from", from)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public).*)"],
}
\`\`\`

## `app/providers.tsx`

This file will wrap the application with `SessionProvider` from `next-auth/react` to make the session available to all client components.

\`\`\`tsx
'use client'

import { SessionProvider } from 'next-auth/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes'
import { Toaster } from '@/components/ui/sonner'

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <SessionProvider>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
        {children}
        <Toaster />
      </NextThemesProvider>
    </SessionProvider>
  )
}
\`\`\`

## `app/layout.tsx`

The root layout will import `Providers` and wrap the `body` with it.

\`\`\`tsx
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Providers } from "./providers"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Resume Editor",
  description: "A collaborative resume editor powered by Next.js and Velt.",
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
\`\`\`

## `app/page.tsx`

The home page will be a simple landing page with a sign-in button.

\`\`\`tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GithubIcon, LinkedinIcon } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Welcome to Resume Editor</CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-40
