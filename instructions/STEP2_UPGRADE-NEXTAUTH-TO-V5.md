# Step 2: Upgrade NextAuth.js to v5 (Auth.js)

This step outlines the process of upgrading your authentication system from NextAuth.js v4 to Auth.js v5, which introduces significant changes in how authentication is handled, especially with the App Router.

## Key Changes in Auth.js v5

-   **App Router First**: Designed primarily for the Next.js App Router.
-   **Server-side Everything**: Emphasizes Server Components and Server Actions for authentication logic.
-   **Simplified API**: A more streamlined API for common authentication patterns.
-   **No `getSession` in Client Components**: `getSession` is removed from client components. Use `useSession` from `next-auth/react` for client-side session data.
-   **`auth.ts` for Configuration**: Centralized configuration in a root `auth.ts` file.
-   **Route Handlers for API**: Authentication endpoints are now handled by a single `app/api/auth/[...nextauth]/route.ts` file.

## Files to Create/Modify

-   `package.json` (Modify)
-   `app/api/auth/[...nextauth]/route.ts` (New/Modify)
-   `lib/auth.ts` (New/Modify)
-   `middleware.ts` (New/Modify)
-   `app/layout.tsx` (Modify)
-   `app/page.tsx` (Modify)
-   `app/profile/page.tsx` (Modify)
-   `app/editor/page.tsx` (Modify)
-   `app/profile/enriched/page.tsx` (Modify)
-   `app/resume/[id]/page.tsx` (Modify)
-   `components/resume-providers/Velt.tsx` (Modify)

## Implementation Details

### `package.json`

Update the `dependencies` to use the latest versions of `@auth/core` and `@auth/nextjs`.

\`\`\`json
{
  "name": "liveblocks-resume-editor",
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
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-alert-dialog": "^1.0.5",
    "@radix-ui/react-aspect-ratio": "^1.0.3",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-checkbox": "^1.0.4",
    "@radix-ui/react-collapsible": "^1.0.3",
    "@radix-ui/react-context-menu": "^1.1.5",
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
    "@radix-ui/react-switch": "^1.0.3",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-toast": "^1.1.5",
    "@radix-ui/react-toggle": "^1.0.3",
    "@radix-ui/react-toggle-group": "^1.0.4",
    "@radix-ui/react-tooltip": "^1.0.7",
    "@supabase/supabase-js": "^2.43.4",
    "@tiptap/extension-link": "^2.3.0",
    "@tiptap/react": "^2.3.0",
    "@tiptap/starter-kit": "^2.3.0",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@vercel/analytics": "^1.3.1",
    "@vercel/speed-insights": "^1.0.11",
    "@velt/react": "^0.1.1",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.0",
    "embla-carousel-react": "^8.0.4",
    "input-otp": "^1.2.0",
    "lucide-react": "^0.378.0",
    "next": "14.2.3",
    "next-auth": "latest",
    "next-themes": "^0.3.0",
    "react": "^18",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18",
    "react-hook-form": "^7.51.4",
    "react-resizable-panels": "^2.0.19",
    "recharts": "^2.12.7",
    "sonner": "^1.4.41",
    "tailwind-merge": "^2.3.0",
    "tailwindcss-animate": "^1.0.7",
    "tiptap-markdown": "^0.8.0",
    "typescript": "^5",
    "vaul": "^0.9.0",
    "velt": "^0.1.1",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "postcss": "^8",
    "prettier": "^3.2.5",
    "prettier-plugin-tailwindcss": "^0.5.14",
    "tailwindcss": "^3.4.1"
  }
}
\`\`\`

### `app/api/auth/[...nextauth]/route.ts`

This file will act as the main API endpoint for all authentication requests. It should re-export the `handlers` from your `lib/auth.ts` file.

\`\`\`tsx
// app/api/auth/[...nextauth]/route.ts
import { handlers } from "@/lib/auth"
export const { GET, POST } = handlers
\`\`\`

### `lib/auth.ts`

This is the core configuration file for Auth.js. It defines your authentication providers, callbacks, and other settings.

\`\`\`tsx
// lib/auth.ts
import NextAuth from "next-auth"
import LinkedIn from "next-auth/providers/linkedin"
import { DrizzleAdapter } from "@auth/drizzle-adapter" // If using Drizzle ORM
import { supabase } from "./supabase" // Your Supabase client

// Extend the Session and User types to include custom fields like vanityUrl
declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      vanityUrl?: string | null // Add vanityUrl to the user object
    }
  }

  interface User {
    vanityUrl?: string | null
  }
}

export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      profile(profile) {
        // You might need to inspect the full profile object returned by LinkedIn
        // to find the correct field for vanityUrl or public profile URL.
        // This is an example based on common LinkedIn profile structures.
        const vanityUrlMatch = profile.vanityName || profile.public_profile_url?.split('/').pop();

        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          vanityUrl: vanityUrlMatch || null,
        }
      },
    }),
  ],
  adapter: {
    // Example using Supabase as a database for Auth.js.
    // You would need to set up your Supabase client and schema.
    // If you're not using Drizzle, you'd use a different adapter or implement your own.
    // For a simple setup without a database, you can remove the adapter.
    createUser: async (data) => {
      const { data: newUser, error } = await supabase
        .from('users')
        .insert([{
          email: data.email,
          name: data.name,
          image: data.image,
          // Add other fields from data if your users table supports them
        }])
        .select()
        .single();

      if (error) throw error;
      return newUser;
    },
    getUser: async (id) => {
      const { data: user, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)
        .single();
      if (error && error.code !== 'PGRST116') throw error; // PGRST116 means "no rows found"
      return user;
    },
    getUserByEmail: async (email) => {
      const { data: user, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single();
      if (error && error.code !== 'PGRST116') throw error;
      return user;
    },
    getUserByAccount: async ({ providerAccountId, provider }) => {
      const { data: account, error: accountError } = await supabase
        .from('accounts')
        .select('userId')
        .eq('provider', provider)
        .eq('providerAccountId', providerAccountId)
        .single();

      if (accountError && accountError.code !== 'PGRST116') throw accountError;
      if (!account) return null;

      const { data: user, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('id', account.userId)
        .single();

      if (userError && userError.code !== 'PGRST116') throw userError;
      return user;
    },
    updateUser: async (data) => {
      const { data: updatedUser, error } = await supabase
        .from('users')
        .update({
          name: data.name,
          email: data.email,
          image: data.image,
          emailVerified: data.emailVerified,
        })
        .eq('id', data.id)
        .select()
        .single();
      if (error) throw error;
      return updatedUser;
    },
    deleteUser: async (id) => {
      await supabase.from('users').delete().eq('id', id);
      return null; // Adapter expects null or the deleted user
    },
    linkAccount: async (account) => {
      const { data: newAccount, error } = await supabase
        .from('accounts')
        .insert([{
          userId: account.userId,
          type: account.type,
          provider: account.provider,
          providerAccountId: account.providerAccountId,
          refresh_token: account.refresh_token,
          access_token: account.access_token,
          expires_at: account.expires_at,
          id_token: account.id_token,
          scope: account.scope,
          session_state: account.session_state,
          token_type: account.token_type,
        }])
        .select()
        .single();
      if (error) throw error;
      return newAccount;
    },
    unlinkAccount: async ({ providerAccountId, provider }) => {
      await supabase
        .from('accounts')
        .delete()
        .eq('provider', provider)
        .eq('providerAccountId', providerAccountId);
      return undefined; // Adapter expects undefined or the unlinked account
    },
    createSession: async (data) => {
      const { data: newSession, error } = await supabase
        .from('sessions')
        .insert([{
          userId: data.userId,
          expires: data.expires,
          sessionToken: data.sessionToken,
        }])
        .select()
        .single();
      if (error) throw error;
      return newSession;
    },
    getSessionAndUser: async (sessionToken) => {
      const { data: session, error: sessionError } = await supabase
        .from('sessions')
        .select('*')
        .eq('sessionToken', sessionToken)
        .single();

      if (sessionError && sessionError.code !== 'PGRST116') throw sessionError;
      if (!session) return null;

      const { data: user, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('id', session.userId)
        .single();

      if (userError && userError.code !== 'PGRST116') throw userError;
      if (!user) return null;

      return { session, user };
    },
    updateSession: async (data) => {
      const { data: updatedSession, error } = await supabase
        .from('sessions')
        .update({
          expires: data.expires,
          userId: data.userId,
        })
        .eq('sessionToken', data.sessionToken)
        .select()
        .single();
      if (error) throw error;
      return updatedSession;
    },
    deleteSession: async (sessionToken) => {
      await supabase.from('sessions').delete().eq('sessionToken', sessionToken);
      return undefined; // Adapter expects undefined or the deleted session
    },
  },
  callbacks: {
    async session({ session, user, token }) {
      // Add user ID and vanityUrl to the session object
      if (user) {
        session.user.id = user.id;
        session.user.vanityUrl = (user as any).vanityUrl; // Cast to any to access vanityUrl
      }
      return session;
    },
    async jwt({ token, user, account, profile }) {
      // Persist the OAuth access_token and vanityUrl to the JWT
      if (account) {
        token.accessToken = account.access_token;
      }
      if (profile) {
        // Add vanityUrl from profile to token
        (token as any).vanityUrl = (profile as any).vanityName || (profile as any).public_profile_url?.split('/').pop();
      }
      if (user) {
        // Add vanityUrl from user to token if it exists (e.g., from database)
        (token as any).vanityUrl = (user as any).vanityUrl || (token as any).vanityUrl;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/", // Redirect to homepage for sign-in
    error: "/auth/error", // Custom error page
  },
})
\`\`\`

### `middleware.ts`

The middleware is crucial for protecting routes and handling redirects based on authentication status.

\`\`\`tsx
// middleware.ts
import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { nextUrl } = req
  const isAuthenticated = !!req.auth

  const publicPaths = ["/", "/api/auth", "/auth/error", "/_next"] // Paths that don't require authentication
  const isPublicPath = publicPaths.some(path => nextUrl.pathname.startsWith(path))

  // Allow access to public paths
  if (isPublicPath) {
    return NextResponse.next()
  }

  // If not authenticated and trying to access a protected path, redirect to sign-in
  if (!isAuthenticated) {
    const signInUrl = new URL("/api/auth/signin", nextUrl.origin)
    signInUrl.searchParams.set("callbackUrl", nextUrl.pathname)
    return NextResponse.redirect(signInUrl)
  }

  // If authenticated, allow access
  return NextResponse.next()
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
\`\`\`

### `app/layout.tsx`

Wrap your application with `SessionProvider` from `next-auth/react` to make session data available to client components.

\`\`\`tsx
// app/layout.tsx
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from 'next/font/google'
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SessionProvider } from "next-auth/react" // Import SessionProvider from next-auth/react

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Liveblocks Resume Editor",
  description: "A collaborative resume editor built with Next.js and Liveblocks.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <SessionProvider> {/* Wrap children with SessionProvider */}
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
\`\`\`

### `app/page.tsx`

Modify the homepage to redirect authenticated users to their profile and provide a sign-in link for unauthenticated users.

\`\`\`tsx
// app/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function HomePage() {
  const session = await auth()

  if (session) {
    redirect("/profile")
  }

  return (
    <main className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center p-4 md:p-6 lg:p-8">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Welcome to the Collaborative Resume Editor
          </CardTitle>
          <CardDescription className="mt-2 text-lg text-gray-600">
            Build and collaborate on your professional resume in real-time.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700">
            Sign in with your LinkedIn account to get started.
          </p>
          <Button asChild size="lg" className="w-full">
            <Link href="/api/auth/signin">Sign in with LinkedIn</Link>
          </Button>
          <div className="text-sm text-gray-500">
            By signing in, you agree to our{" "}
            <Link href="#" className="underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline">
              Privacy Policy
            </Link>
            .
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
\`\`\`

### `app/profile/page.tsx`

Fetch session data using the `auth` helper from `lib/auth.ts` and display user information.

\`\`\`tsx
// app/profile/page.tsx
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ProfileSnapshotCard } from "@/components/resume-blocks/ProfileSnapshotCard"

export default async function ProfilePage() {
  const session = await auth()

  if (!session) {
    redirect("/api/auth/signin")
  }

  const user = session.user

  return (
    <main className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center p-4 md:p-6 lg:p-8">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="flex flex-col items-center gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src={user?.image || "/placeholder-user.png"} alt={user?.name || "User Avatar"} />
            <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold">{user?.name || "User Profile"}</CardTitle>
          {user?.email && <p className="text-gray-600">{user.email}</p>}
          {(user as any)?.vanityUrl && (
            <p className="text-gray-500">
              LinkedIn Vanity URL:{" "}
              <a
                href={`https://linkedin.com/in/${(user as any).vanityUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                linkedin.com/in/{(user as any).vanityUrl}
              </a>
            </p>
          )}
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col gap-4">
            <Button asChild size="lg">
              <Link href="/editor">Start/Edit Resume</Link>
            </Button>
            {(user as any)?.vanityUrl && (
              <Button asChild variant="outline" size="lg">
                <Link href="/profile/enriched">View Enriched Profile Data</Link>
              </Button>
            )}
            <Button asChild variant="destructive" size="lg">
              <Link href="/api/auth/signout">Sign Out</Link>
            </Button>
          </div>
          <ProfileSnapshotCard />
        </CardContent>
      </Card>
    </main>
  )
}
\`\`\`

### `app/editor/page.tsx`

Ensure the editor page fetches session data using `auth` and redirects if not authenticated.

\`\`\`tsx
// app/editor/page.tsx
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { supabase } from "@/lib/supabase"
import { ResumeEditor } from "@/components/resume-blocks/ResumeEditor"
import { initialResumeData } from "@/public/data/initial-resume-data"
import { VeltProvider } from "@/components/resume-providers/Velt"
import { VeltClient } from "velt"

export default async function EditorPage() {
  const session = await auth()

  if (!session) {
    redirect("/api/auth/signin")
  }

  const userId = session.user?.id
  if (!userId) {
    redirect("/api/auth/signin")
  }

  // Fetch or create a resume for the user
  let resumeId: string | null = null
  let resumeContent: any = initialResumeData // Default to initial data

  try {
    const { data: existingResumes, error: fetchError } = await supabase
      .from("resumes")
      .select("id, content")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(1)

    if (fetchError && fetchError.code !== 'PGRST116') { // PGRST116 means "no rows found"
      console.error("Error fetching existing resumes:", fetchError)
      // Continue with initial data if fetch fails
    }

    if (existingResumes && existingResumes.length > 0) {
      resumeId = existingResumes[0].id
      resumeContent = existingResumes[0].content
    } else {
      // Create a new resume if none exists
      const { data: newResume, error: createError } = await supabase
        .from("resumes")
        .insert({ user_id: userId, content: initialResumeData })
        .select("id, content")
        .single()

      if (createError) {
        console.error("Error creating new resume:", createError)
        // Fallback to initial data if creation fails
      } else if (newResume) {
        resumeId = newResume.id
        resumeContent = newResume.content
      }
    }
  } catch (e) {
    console.error("Unexpected error in resume fetching/creation:", e)
    // Ensure resumeId is null if an error occurred and no resume was found/created
    resumeId = null;
  }

  // If no resumeId could be established, we cannot proceed with Velt collaboration
  if (!resumeId) {
    return (
      <div className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-red-600">Error Loading Resume</h1>
        <p className="text-gray-700">Could not load or create a resume. Please try again later.</p>
        <p className="text-sm text-gray-500">If the problem persists, contact support.</p>
      </div>
    )
  }

  // Initialize Velt client for server-side rendering (optional, but good practice)
  // This ensures the VeltProvider has a client instance ready.
  const veltClient = new VeltClient({
    apiKey: process.env.VELT_PUBLIC_KEY!,
    userId: userId,
    userName: session.user?.name || "Anonymous",
    userAvatar: session.user?.image || "/placeholder-user.png",
  });

  return (
    <VeltProvider client={veltClient} documentId={resumeId}>
      <main className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center p-4 md:p-6 lg:p-8">
        <ResumeEditor initialResumeData={resumeContent} resumeId={resumeId} />
      </main>
    </VeltProvider>
  )
}
\`\`\`

### `app/profile/enriched/page.tsx`

Update this page to use the `auth` helper and correctly access the `vanityUrl` from the session.

\`\`\`tsx
// app/profile/enriched/page.tsx
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface EnrichedProfileData {
  // Define the structure of your enriched data here
  // This is a placeholder, replace with actual fields from EnrichLayer
  full_name?: string;
  headline?: string;
  summary?: string;
  experience?: any[];
  education?: any[];
  skills?: string[];
  profile_url?: string;
  // ... other fields
}

async function fetchEnrichedProfile(vanityUrl: string): Promise<EnrichedProfileData | null> {
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/enrich?vanityUrl=${encodeURIComponent(vanityUrl)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Important: Do not cache this data if it's dynamic
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Failed to fetch enriched profile:', errorData);
      return null;
    }

    const data: EnrichedProfileData = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching enriched profile:', error);
    return null;
  }
}

export default async function EnrichedProfilePage() {
  const session = await auth();

  if (!session || !session.user || !(session.user as any).vanityUrl) {
    redirect("/api/auth/signin"); // Redirect if not authenticated or no vanityUrl
  }

  const vanityUrl = (session.user as any).vanityUrl;
  const enrichedData = await fetchEnrichedProfile(vanityUrl);

  return (
    <main className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center p-4 md:p-6 lg:p-8">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Enriched LinkedIn Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {enrichedData ? (
            <div className="space-y-4">
              <p>
                <span className="font-semibold">Name:</span> {enrichedData.full_name || session.user.name}
              </p>
              {enrichedData.headline && (
                <p>
                  <span className="font-semibold">Headline:</span> {enrichedData.headline}
                </p>
              )}
              {enrichedData.summary && (
                <div>
                  <h3 className="font-semibold">Summary:</h3>
                  <p>{enrichedData.summary}</p>
                </div>
              )}
              {enrichedData.experience && enrichedData.experience.length > 0 && (
                <div>
                  <h3 className="font-semibold">Experience:</h3>
                  <ul className="list-disc pl-5">
                    {enrichedData.experience.map((exp: any, index: number) => (
                      <li key={index}>
                        {exp.title} at {exp.company} ({exp.start_date} - {exp.end_date || 'Present'})
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {enrichedData.education && enrichedData.education.length > 0 && (
                <div>
                  <h3 className="font-semibold">Education:</h3>
                  <ul className="list-disc pl-5">
                    {enrichedData.education.map((edu: any, index: number) => (
                      <li key={index}>
                        {edu.degree} from {edu.university} ({edu.start_date} - {edu.end_date || 'Present'})
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {enrichedData.skills && enrichedData.skills.length > 0 && (
                <div>
                  <h3 className="font-semibold">Skills:</h3>
                  <p>{enrichedData.skills.join(', ')}</p>
                </div>
              )}
              {enrichedData.profile_url && (
                <p>
                  <span className="font-semibold">Profile URL:</span>{" "}
                  <a href={enrichedData.profile_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    {enrichedData.profile_url}
                  </a>
                </p>
              )}
            </div>
          ) : (
            <div className="text-center text-gray-600">
              <p>No enriched profile data available for "{vanityUrl}".</p>
              <p className="mt-2 text-sm">
                This might be due to an issue with the EnrichLayer API or if the profile is not publicly accessible.
              </p>
            </div>
          )}
          <div className="mt-6 flex justify-center">
            <Button asChild>
              <Link href="/profile">Back to Profile</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
\`\`\`

### `app/resume/[id]/page.tsx`

Update this dynamic route to use the `auth` helper for session management.

\`\`\`tsx
// app/resume/[id]/page.tsx
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { supabase } from "@/lib/supabase"
import { ResumeEditor } from "@/components/resume-blocks/ResumeEditor"
import { VeltProvider } from "@/components/resume-providers/Velt"
import { VeltClient } from "velt"
import { notFound } from "next/navigation"

interface ResumePageProps {
  params: {
    id: string
  }
}

export default async function ResumePage({ params }: ResumePageProps) {
  const session = await auth()

  if (!session) {
    redirect("/api/auth/signin")
  }

  const userId = session.user?.id
  if (!userId) {
    redirect("/api/auth/signin")
  }

  const resumeId = params.id

  let resumeContent: any = null

  try {
    const { data: resume, error: fetchError } = await supabase
      .from("resumes")
      .select("content")
      .eq("id", resumeId)
      .eq("user_id", userId) // Ensure user owns the resume
      .single()

    if (fetchError) {
      console.error("Error fetching resume:", fetchError)
      if (fetchError.code === 'PGRST116') { // No rows found
        notFound(); // Trigger Next.js not-found page
      }
      // For other errors, we might still want to show an error message
      // or redirect, but for now, let's assume notFound covers it.
      notFound();
    }

    if (!resume) {
      notFound(); // Resume not found or not owned by user
    }

    resumeContent = resume.content
  } catch (e) {
    console.error("Unexpected error in resume fetching:", e)
    notFound(); // Catch any unexpected errors and show not found
  }

  // Initialize Velt client for server-side rendering (optional, but good practice)
  const veltClient = new VeltClient({
    apiKey: process.env.VELT_PUBLIC_KEY!,
    userId: userId,
    userName: session.user?.name || "Anonymous",
    userAvatar: session.user?.image || "/placeholder-user.png",
  });

  return (
    <VeltProvider client={veltClient} documentId={resumeId}>
      <main className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center p-4 md:p-6 lg:p-8">
        <ResumeEditor initialResumeData={resumeContent} resumeId={resumeId} />
      </main>
    </VeltProvider>
  )
}
\`\`\`

### `components/resume-providers/Velt.tsx`

Update the Velt provider to use `next-auth/react`'s `useSession` hook for client-side session access.

\`\`\`tsx
// components/resume-providers/Velt.tsx
"use client"

import React, { useEffect, useState } from "react"
import { VeltProvider as VeltReactProvider, useRoom } from "@velt/react"
import { VeltClient } from "velt"
import { useSession } from "next-auth/react"

interface VeltProviderProps {
  children: React.ReactNode
  documentId: string
  client?: VeltClient // Optional: pass a pre-initialized client
}

export function VeltProvider({ children, documentId, client }: VeltProviderProps) {
  const { data: session, status } = useSession()
  const [veltClientInstance, setVeltClientInstance] = useState<VeltClient | null>(null)

  useEffect(() => {
    if (status === "authenticated" && !veltClientInstance) {
      const userId = session.user?.id || session.user?.email || "anonymous"
      const userName = session.user?.name || "Anonymous User"
      const userAvatar = session.user?.image || "/placeholder-user.png"

      const newClient = client || new VeltClient({
        apiKey: process.env.NEXT_PUBLIC_VELT_PUBLIC_KEY!,
        userId: userId,
        userName: userName,
        userAvatar: userAvatar,
      })
      setVeltClientInstance(newClient)
    } else if (status === "unauthenticated" && veltClientInstance) {
      // Optionally destroy client if user logs out
      veltClientInstance.destroy()
      setVeltClientInstance(null)
    }
  }, [session, status, veltClientInstance, client])

  if (status === "loading" || !veltClientInstance) {
    return (
      <div className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center gap-4 py-10">
        <p className="text-lg text-gray-600">Initializing collaboration...</p>
      </div>
    )
  }

  return (
    <VeltReactProvider client={veltClientInstance} documentId={documentId}>
      {children}
    </VeltReactProvider>
  )
}
\`\`\`
\`\`\`

```plaintext file="instructions/STEP3_MIGRATE_LIVEBLOCKS_TO_VELT"
# Step 3: Migrate Liveblocks to Velt

This step guides you through migrating your real-time collaboration features from Liveblocks to Velt. Velt offers a comprehensive suite of collaboration tools, including presence, comments, annotations, and live cursors, often with simpler integration.

## Key Changes

-   **Replace Liveblocks Client**: Remove Liveblocks client setup and replace it with Velt client initialization.
-   **Update Providers**: Replace Liveblocks React components (e.g., `RoomProvider`, `ClientSideSuspense`) with Velt's `VeltProvider`.
-   **Migrate Hooks**: Replace Liveblocks hooks (e.g., `useSelf`, `useOthers`, `useStorage`) with their Velt equivalents (e.g., `useRoom` for presence and live state).
-   **Integrate Velt UI**: Utilize Velt's built-in UI components for presence avatars, floating toolbars, and video/audio collaboration.

## Files to Create/Modify

-   `package.json` (Modify)
-   `lib/liveblocks.ts` (Delete)
-   `app/layout.tsx` (Modify)
-   `app/editor/page.tsx` (Modify)
-   `app/resume/[id]/page.tsx` (Modify)
-   `components/resume-providers/Velt.tsx` (New File)
-   `components/resume-tools/PresenceAvatars.tsx` (New File)
-   `components/resume-tools/FloatingToolbar.tsx` (Modify/Ensure Velt Integration)
-   `components/resume-tools/SharePopover.tsx` (New File)
-   `components/resume-tools/ProfileVideoButton.tsx` (New File)
-   `components/resume-blocks/EditableText.tsx` (Modify)
-   `components/resume-blocks/ProfileSnapshotCard.tsx` (Modify)

## Implementation Details

### `package.json`

Remove Liveblocks dependencies and add Velt dependencies.

\`\`\`json
{
  "name": "liveblocks-resume-editor",
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
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-alert-dialog": "^1.0.5",
    "@radix-ui/react-aspect-ratio": "^1.0.3",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-checkbox": "^1.0.4",
    "@radix-ui/react-collapsible": "^1.0.3",
    "@radix-ui/react-context-menu": "^1.1.5",
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
    "@radix-ui/react-switch": "^1.0.3",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-toast": "^1.1.5",
    "@radix-ui/react-toggle": "^1.0.3",
    "@radix-ui/react-toggle-group": "^1.0.4",
    "@radix-ui/react-tooltip": "^1.0.7",
    "@supabase/supabase-js": "^2.43.4",
    "@tiptap/extension-link": "^2.3.0",
    "@tiptap/react": "^2.3.0",
    "@tiptap/starter-kit": "^2.3.0",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@vercel/analytics": "^1.3.1",
    "@vercel/speed-insights": "^1.0.11",
    "@velt/react": "^0.1.1",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.0",
    "embla-carousel-react": "^8.0.4",
    "input-otp": "^1.2.0",
    "lucide-react": "^0.378.0",
    "next": "14.2.3",
    "next-auth": "latest",
    "next-themes": "^0.3.0",
    "react": "^18",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18",
    "react-hook-form": "^7.51.4",
    "react-resizable-panels": "^2.0.19",
    "recharts": "^2.12.7",
    "sonner": "^1.4.41",
    "tailwind-merge": "^2.3.0",
    "tailwindcss-animate": "^1.0.7",
    "tiptap-markdown": "^0.8.0",
    "typescript": "^5",
    "vaul": "^0.9.0",
    "velt": "^0.1.1",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "postcss": "^8",
    "prettier": "^3.2.5",
    "prettier-plugin-tailwindcss": "^0.5.14",
    "tailwindcss": "^3.4.1"
  }
}
\`\`\`

### `lib/liveblocks.ts`

Delete this file as Liveblocks is being replaced by Velt.

\`\`\`

\`\`\`

### `app/layout.tsx`

Remove Liveblocks imports and related components.

\`\`\`tsx
// app/layout.tsx
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from 'next/font/google'
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SessionProvider } from "next-auth/react" // Import SessionProvider from next-auth/react

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Liveblocks Resume Editor",
  description: "A collaborative resume editor built with Next.js and Liveblocks.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <SessionProvider> {/* Wrap children with SessionProvider */}
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
\`\`\`

### `app/editor/page.tsx`

Replace Liveblocks `RoomProvider` with `VeltProvider` and update client initialization.

\`\`\`tsx
// app/editor/page.tsx
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { supabase } from "@/lib/supabase"
import { ResumeEditor } from "@/components/resume-blocks/ResumeEditor"
import { initialResumeData } from "@/public/data/initial-resume-data"
import { VeltProvider } from "@/components/resume-providers/Velt"
import { VeltClient } from "velt"

export default async function EditorPage() {
  const session = await auth()

  if (!session) {
    redirect("/api/auth/signin")
  }

  const userId = session.user?.id
  if (!userId) {
    redirect("/api/auth/signin")
  }

  // Fetch or create a resume for the user
  let resumeId: string | null = null
  let resumeContent: any = initialResumeData // Default to initial data

  try {
    const { data: existingResumes, error: fetchError } = await supabase
      .from("resumes")
      .select("id, content")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(1)

    if (fetchError && fetchError.code !== 'PGRST116') { // PGRST116 means "no rows found"
      console.error("Error fetching existing resumes:", fetchError)
      // Continue with initial data if fetch fails
    }

    if (existingResumes && existingResumes.length > 0) {
      resumeId = existingResumes[0].id
      resumeContent = existingResumes[0].content
    } else {
      // Create a new resume if none exists
      const { data: newResume, error: createError } = await supabase
        .from("resumes")
        .insert({ user_id: userId, content: initialResumeData })
        .select("id, content")
        .single()

      if (createError) {
        console.error("Error creating new resume:", createError)
        // Fallback to initial data if creation fails
      } else if (newResume) {
        resumeId = newResume.id
        resumeContent = newResume.content
      }
    }
  } catch (e) {
    console.error("Unexpected error in resume fetching/creation:", e)
    // Ensure resumeId is null if an error occurred and no resume was found/created
    resumeId = null;
  }

  // If no resumeId could be established, we cannot proceed with Velt collaboration
  if (!resumeId) {
    return (
      <div className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-red-600">Error Loading Resume</h1>
        <p className="text-gray-700">Could not load or create a resume. Please try again later.</p>
        <p className="text-sm text-gray-500">If the problem persists, contact support.</p>
      </div>
    )
  }

  // Initialize Velt client for server-side rendering (optional, but good practice)
  // This ensures the VeltProvider has a client instance ready.
  const veltClient = new VeltClient({
    apiKey: process.env.VELT_PUBLIC_KEY!,
    userId: userId,
    userName: session.user?.name || "Anonymous",
    userAvatar: session.user?.image || "/placeholder-user.png",
  });

  return (
    <VeltProvider client={veltClient} documentId={resumeId}>
      <main className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center p-4 md:p-6 lg:p-8">
        <ResumeEditor initialResumeData={resumeContent} resumeId={resumeId} />
      </main>
    </VeltProvider>
  )
}
\`\`\`

### `app/resume/[id]/page.tsx`

Similar to `app/editor/page.tsx`, replace Liveblocks `RoomProvider` with `VeltProvider`.

\`\`\`tsx
// app/resume/[id]/page.tsx
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { supabase } from "@/lib/supabase"
import { ResumeEditor } from "@/components/resume-blocks/ResumeEditor"
import { VeltProvider } from "@/components/resume-providers/Velt"
import { VeltClient } from "velt"
import { notFound } from "next/navigation"

interface ResumePageProps {
  params: {
    id: string
  }
}

export default async function ResumePage({ params }: ResumePageProps) {
  const session = await auth()

  if (!session) {
    redirect("/api/auth/signin")
  }

  const userId = session.user?.id
  if (!userId) {
    redirect("/api/auth/signin")
  }

  const resumeId = params.id

  let resumeContent: any = null

  try {
    const { data: resume, error: fetchError } = await supabase
      .from("resumes")
      .select("content")
      .eq("id", resumeId)
      .eq("user_id", userId) // Ensure user owns the resume
      .single()

    if (fetchError) {
      console.error("Error fetching resume:", fetchError)
      if (fetchError.code === 'PGRST116') { // No rows found
        notFound(); // Trigger Next.js not-found page
      }
      // For other errors, we might still want to show an error message
      // or redirect, but for now, let's assume notFound covers it.
      notFound();
    }

    if (!resume) {
      notFound(); // Resume not found or not owned by user
    }

    resumeContent = resume.content
  } catch (e) {
    console.error("Unexpected error in resume fetching:", e)
    notFound(); // Catch any unexpected errors and show not found
  }

  // Initialize Velt client for server-side rendering (optional, but good practice)
  const veltClient = new VeltClient({
    apiKey: process.env.VELT_PUBLIC_KEY!,
    userId: userId,
    userName: session.user?.name || "Anonymous",
    userAvatar: session.user?.image || "/placeholder-user.png",
  });

  return (
    <VeltProvider client={veltClient} documentId={resumeId}>
      <main className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center p-4 md:p-6 lg:p-8">
        <ResumeEditor initialResumeData={resumeContent} resumeId={resumeId} />
      </main>
    </VeltProvider>
  )
}
\`\`\`

### `components/resume-providers/Velt.tsx` (New File)

Create a new Velt provider component to encapsulate Velt client initialization and provide it to the React tree.

\`\`\`tsx
// components/resume-providers/Velt.tsx
"use client"

import React, { useEffect, useState } from "react"
import { VeltProvider as VeltReactProvider, useRoom } from "@velt/react"
import { VeltClient } from "velt"
import { useSession } from "next-auth/react"

interface VeltProviderProps {
  children: React.ReactNode
  documentId: string
  client?: VeltClient // Optional: pass a pre-initialized client
}

export function VeltProvider({ children, documentId, client }: VeltProviderProps) {
  const { data: session, status } = useSession()
  const [veltClientInstance, setVeltClientInstance] = useState<VeltClient | null>(null)

  useEffect(() => {
    if (status === "authenticated" && !veltClientInstance) {
      const userId = session.user?.id || session.user?.email || "anonymous"
      const userName = session.user?.name || "Anonymous User"
      const userAvatar = session.user?.image || "/placeholder-user.png"

      const newClient = client || new VeltClient({
        apiKey: process.env.NEXT_PUBLIC_VELT_PUBLIC_KEY!,
        userId: userId,
        userName: userName,
        userAvatar: userAvatar,
      })
      setVeltClientInstance(newClient)
    } else if (status === "unauthenticated" && veltClientInstance) {
      // Optionally destroy client if user logs out
      veltClientInstance.destroy()
      setVeltClientInstance(null)
    }
  }, [session, status, veltClientInstance, client])

  if (status === "loading" || !veltClientInstance) {
    return (
      <div className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center gap-4 py-10">
        <p className="text-lg text-gray-600">Initializing collaboration...</p>
      </div>
    )
  }

  return (
    <VeltReactProvider client={veltClientInstance} documentId={documentId}>
      {children}
    </VeltReactProvider>
  )
}
\`\`\`

### `components/resume-tools/PresenceAvatars.tsx` (New File)

Create a component to display presence avatars using Velt's `useRoom` hook.

\`\`\`tsx
// components/resume-tools/PresenceAvatars.tsx
"use client"

import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useRoom } from "@velt/react"
import { Velt } from "velt"

export function PresenceAvatars() {
  const { room } = useRoom()
  const users = room?.getUsers() || []

  if (!users || users.length === 0) {
    return null
  }

  return (
    <div className="flex -space-x-2 overflow-hidden">
      <TooltipProvider>
        {users.map((user) => (
          <Tooltip key={user.id}>
            <TooltipTrigger asChild>
              <Avatar className="h-8 w-8 cursor-pointer border-2 border-white transition-transform hover:scale-110">
                <AvatarImage src={user.avatar || "/placeholder.png"} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>{user.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  )
}
\`\`\`

### `components/resume-tools/FloatingToolbar.tsx` (Modify)

Ensure the `FloatingToolbar` is integrated with Velt's active editor. The previous version already uses `Velt.getActiveEditor()` implicitly via `useEditor` when Velt is initialized. Just ensure `Velt` is imported correctly.

\`\`\`tsx
// components/resume-tools/FloatingToolbar.tsx
"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bold, Italic, Underline, Link, List, ListOrdered, Heading1, Heading2, Heading3, Code } from 'lucide-react'
import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import TiptapLink from "@tiptap/extension-link" // Renamed to avoid conflict with Lucide Link

interface FloatingToolbarProps {
  // No props needed as it interacts directly with the active Tiptap editor
}

export function FloatingToolbar() {
  // This component needs to interact with the currently active Tiptap editor.
  // Velt's `initEditor` function makes the editor instance globally accessible
  // via `Velt.getActiveEditor()`.
  // This is a simplified example. In a real application, you might pass the editor
  // instance down via context or use a more robust state management for toolbars.

  // For demonstration, we'll create a dummy editor to show the toolbar functionality.
  // In a real scenario, this toolbar would connect to the `editor` instance
  // from `EditableText` component via Velt's active editor mechanism.
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
      }),
      TiptapLink.configure({
        openOnClick: false, // Prevent opening link when clicking in editor
        autolink: true,
      }),
    ],
    content: "<p>This is a dummy editor for toolbar demo.</p>",
    editable: false, // Make it non-editable for this demo
  })

  if (!editor) {
    return null
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 rounded-md border bg-white p-2 shadow-lg z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <Heading1 className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
            <Heading1 className="mr-2 h-4 w-4" />
            Heading 1
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
            <Heading2 className="mr-2 h-4 w-4" />
            Heading 2
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
            <Heading3 className="mr-2 h-4 w-4" />
            Heading 3
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => editor.chain().focus().setParagraph().run()}>
            <span className="mr-2 h-4 w-4">¶</span>
            Paragraph
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <Bold className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <Italic className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "is-active" : ""}
      >
        <Underline className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={setLink}
        className={editor.isActive('link') ? 'is-active' : ''}
      >
        <Link className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        disabled={!editor.can().chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        <List className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        <ListOrdered className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
      >
        <Code className="h-4 w-4" />
      </Button>
    </div>
  )
}
\`\`\`

### `components/resume-tools/SharePopover.tsx` (New File)

Create a component for sharing the resume link, which can be enhanced with Velt's sharing features.

\`\`\`tsx
// components/resume-tools/SharePopover.tsx
"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Share2, Check, Copy } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"

interface SharePopoverProps {
  resumeId: string
}

export function SharePopover({ resumeId }: SharePopoverProps) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const shareLink = `${window.location.origin}/resume/${resumeId}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink)
    setCopied(true)
    toast({
      title: "Link Copied!",
      description: "The shareable link has been copied to your clipboard.",
    })
    setTimeout(() => setCopied(false), 2000) // Reset copied state after 2 seconds
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Share Resume</h4>
            <p className="text-sm text-muted-foreground">
              Anyone with this link can view and collaborate.
            </p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="share-link">Shareable link</Label>
            <div className="flex space-x-2">
              <Input id="share-link" defaultValue={shareLink} readOnly />
              <Button size="sm" onClick={copyToClipboard}>
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
\`\`\`

### `components/resume-tools/ProfileVideoButton.tsx` (New File)

Create a component for recording and playing back profile videos using Velt's recording features.

\`\`\`tsx
// components/resume-tools/ProfileVideoButton.tsx
"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Video, StopCircle, PlayCircle, Loader2 } from 'lucide-react'
import { useRoom } from "@velt/react"
import { Velt } from "velt"
import { useToast } from "@/components/ui/use-toast"

export function ProfileVideoButton() {
  const { room } = useRoom()
  const [isRecording, setIsRecording] = useState(false)
  const [isPlaybackAvailable, setIsPlaybackAvailable] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    if (room) {
      // Check if a recording exists for this document
      const checkRecording = async () => {
        setIsLoading(true)
        try {
          const recordings = await Velt.getRecordings()
          const hasRecording = recordings.some(
            (rec) => rec.documentId === room.documentId
          )
          setIsPlaybackAvailable(hasRecording)
        } catch (error) {
          console.error("Error checking recordings:", error)
          toast({
            title: "Recording Error",
            description: "Failed to check for existing recordings.",
            variant: "destructive",
          })
        } finally {
          setIsLoading(false)
        }
      }
      checkRecording()

      // Listen for recording events
      const unsubscribeRecording = Velt.onRecordingStatusChange((status) => {
        if (status === "recording") {
          setIsRecording(true)
          toast({
            title: "Recording Started",
            description: "Your screen and audio are now being recorded.",
          })
        } else if (status === "stopped") {
          setIsRecording(false)
          setIsPlaybackAvailable(true) // A new recording is now available
          toast({
            title: "Recording Stopped",
            description: "Your recording has ended and is being processed.",
          })
        }
      })

      return () => {
        unsubscribeRecording()
      }
    }
  }, [room, toast])

  const handleRecord = async () => {
    if (!room) {
      toast({
        title: "Error",
        description: "Collaboration room not initialized.",
        variant: "destructive",
      })
      return
    }

    if (isRecording) {
      setIsLoading(true)
      try {
        await Velt.stopRecording()
        // Status change listener will handle setIsRecording(false)
      } catch (error) {
        console.error("Error stopping recording:", error)
        toast({
          title: "Recording Error",
          description: "Failed to stop recording.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    } else {
      setIsLoading(true)
      try {
        await Velt.startRecording()
        // Status change listener will handle setIsRecording(true)
      } catch (error) {
        console.error("Error starting recording:", error)
        toast({
          title: "Recording Error",
          description: "Failed to start recording. Check browser permissions.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handlePlayback = async () => {
    if (!room) {
      toast({
        title: "Error",
        description: "Collaboration room not initialized.",
        variant: "destructive",
      })
      return
    }
    setIsLoading(true)
    try {
      // This will open the Velt playback UI for the current document
      await Velt.playRecording()
    } catch (error) {
      console.error("Error playing recording:", error)
      toast({
        title: "Playback Error",
        description: "Failed to play recording. No recording found or an error occurred.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex gap-2">
      <Button
        onClick={handleRecord}
        disabled={isLoading}
        variant={isRecording ? "destructive" : "default"}
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : isRecording ? (
          <StopCircle className="mr-2 h-4 w-4" />
        ) : (
          <Video className="mr-2 h-4 w-4" />
        )}
        {isRecording ? "Stop Recording" : "Record Video"}
      </Button>
      {isPlaybackAvailable && (
        <Button onClick={handlePlayback} disabled={isLoading || isRecording} variant="outline">
          {isLoading && !isRecording ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <PlayCircle className="mr-2 h-4 w-4" />
          )}
          Play Recording
        </Button>
      )}
    </div>
  )
}
\`\`\`

### `components/resume-blocks/EditableText.tsx` (Modify)

Update `EditableText` to use Velt's `initEditor` and `destroyEditor` for collaborative text editing.

\`\`\`tsx
// components/resume-blocks/EditableText.tsx
"use client"

import React, { useEffect, useRef } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Link from "@tiptap/extension-link"
import { useRoom } from "@velt/react"
import { Velt } from "velt"

interface EditableTextProps {
  initialContent: string
  onUpdate: (content: string) => void
  placeholder?: string
  className?: string
  tag?: keyof JSX.IntrinsicElements // Allow specifying the HTML tag (e.g., 'p', 'h1')
  editorId: string // Unique ID for Velt collaboration
}

export function EditableText({
  initialContent,
  onUpdate,
  placeholder,
  className,
  tag: WrapperTag = "p", // Default to 'p' if no tag is provided
  editorId,
}: EditableTextProps) {
  const { room } = useRoom()
  const editorRef = useRef<HTMLDivElement>(null)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
        // Disable history as Velt handles collaborative state
        history: false,
      }),
      Link.configure({
        openOnClick: true,
        autolink: true,
      }),
    ],
    content: initialContent,
    onUpdate: ({ editor }) => {
      onUpdate(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: "ProseMirror min-h-[1em] focus:outline-none", // Apply ProseMirror class
        "data-placeholder": placeholder, // For placeholder styling
      },
    },
  })

  useEffect(() => {
    if (editor && room) {
      // Initialize Velt for this specific editor instance
      Velt.initEditor(editor, editorId)

      // Clean up Velt editor instance on unmount
      return () => {
        Velt.destroyEditor(editorId)
      }
    }
  }, [editor, room, editorId])

  // Update editor content if initialContent changes externally
  useEffect(() => {
    if (editor && editor.getHTML() !== initialContent) {
      editor.commands.setContent(initialContent, false, { preserveCursor: true })
    }
  }, [editor, initialContent])

  if (!editor) {
    return null
  }

  return (
    <WrapperTag className={className} ref={editorRef}>
      <EditorContent editor={editor} />
    </WrapperTag>
  )
}
\`\`\`

### `components/resume-blocks/ProfileSnapshotCard.tsx` (Modify)

Update `ProfileSnapshotCard` to use Velt's `useRoom` hook for potential future integration with Velt analytics.

\`\`\`tsx
// components/resume-blocks/ProfileSnapshotCard.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, LineChart, PieChart } from 'lucide-react'
import {
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  Pie,
  Cell,
} from "recharts"
import { useRoom } from "@velt/react"
import { useEffect, useState } from "react"
import { Velt } from "velt"

// Dummy data for demonstration
const dummyAnalyticsData = {
  views: [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 800 },
    { name: "May", value: 500 },
  ],
  clicks: [
    { name: "Jan", value: 100 },
    { name: "Feb", value: 150 },
    { name: "Mar", value: 200 },
    { name: "Apr", value: 180 },
    { name: "May", value: 250 },
  ],
  sources: [
    { name: "LinkedIn", value: 400, color: "#0077B5" },
    { name: "GitHub", value: 300, color: "#6e5494" },
    { name: "Direct", value: 200, color: "#4CAF50" },
    { name: "Other",
\`\`\`
\`\`\`

```plaintext file="instructions/providerParam.md"
# Provider Parameter for Auth.js v5

This document explains how to correctly pass the `provider` parameter when using `signIn` and `signOut` functions in Auth.js v5 (formerly NextAuth.js).

## Key Changes in Auth.js v5

In Auth.js v5, the `signIn` and `signOut` functions are designed to be more flexible and explicit. When using specific OAuth providers (like Google, GitHub, LinkedIn, etc.), you need to pass the provider's ID as the first argument to `signIn`.

## Usage

### `signIn(providerId, options)`

To initiate a sign-in flow with a specific provider, pass the provider's ID as the first argument. The provider ID is typically the lowercase name of the provider (e.g., "linkedin", "google", "github").

\`\`\`typescript
import { signIn } from "@/lib/auth"; // Assuming you export signIn from your auth.ts

// To sign in with LinkedIn
await signIn("linkedin");

// To sign in with Google
await signIn("google");

// You can also pass additional options, such as a callback URL
await signIn("linkedin", { callbackUrl: "/profile" });
\`\`\`

### `signOut(options)`

The `signOut` function does not typically require a `providerId` as it logs the user out of the current session regardless of the provider used to sign in. However, you can still pass options like a `redirectTo` URL.

\`\`\`typescript
import { signOut } from "@/lib/auth";

// To sign out
await signOut();

// To sign out and redirect to the homepage
await signOut({ redirectTo: "/" });
\`\`\`

## Example in a React Component (Client Component)

Here's how you might use `signIn` and `signOut` in a client component:

\`\`\`tsx
"use client";

import { signIn, signOut } from "@/lib/auth"; // Import from your auth.ts
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react"; // Use useSession for client-side session

export default function AuthButtons() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <div className="flex gap-2">
        <p>Signed in as {session.user?.email}</p>
        <Button onClick={() => signOut({ redirectTo: "/" })}>Sign Out</Button>
        <Button asChild>
          <Link href="/profile">Go to Profile</Link>
        </Button>
      </div>
    );
  }

  return (
    <Button onClick={() => signIn("linkedin")}>Sign in with LinkedIn</Button>
  );
}
\`\`\`

## Important Notes

-   **Provider IDs**: Ensure the `providerId` matches the ID configured in your `lib/auth.ts` file. For built-in providers, this is usually their lowercase name.
-   **Client vs. Server**: Remember that `signIn` and `signOut` can be used in both Client Components (via `next-auth/react`) and Server Components/Server Actions (directly imported from `lib/auth`). When used in Client Components, they trigger a client-side redirect to the Auth.js API route.
-   **Error Handling**: Always consider error handling for `signIn` calls, especially for credential-based logins.
