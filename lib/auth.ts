import LinkedIn from "next-auth/providers/linkedin"
import { supabase } from "./supabase"
import { handlers } from "@auth/nextjs"
import NextAuth from "next-auth"

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
 
export const { handlers, signIn, signOut, auth } = NextAuth(
  providers: [
    LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      profile(profile) {
        // You might need to inspect the full profile object returned by LinkedIn
        // to find the correct field for vanityUrl or public profile URL.
        // This is an example based on common LinkedIn profile structures.
        const vanityUrlMatch = profile.vanityName || profile.public_profile_url?.split("/").pop()

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
    // For a simple setup without a database, you can remove the adapter.
    createUser: async (data) => {
      const { data: newUser, error } = await supabase
        .from("users")
        .insert([
          {
            email: data.email,
            name: data.name,
            image: data.image,
            // Add other fields from data if your users table supports them
          },
        ])
        .select()
        .single()

      if (error) throw error
      return newUser
    },
    getUser: async (id) => {
      const { data: user, error } = await supabase.from("users").select("*").eq("id", id).single()
      if (error && error.code !== "PGRST116") throw error // PGRST116 means "no rows found"
      return user
    },
    getUserByEmail: async (email) => {
      const { data: user, error } = await supabase.from("users").select("*").eq("email", email).single()
      if (error && error.code !== "PGRST116") throw error
      return user
    },
    getUserByAccount: async ({ providerAccountId, provider }) => {
      const { data: account, error: accountError } = await supabase
        .from("accounts")
        .select("userId")
        .eq("provider", provider)
        .eq("providerAccountId", providerAccountId)
        .single()

      if (accountError && accountError.code !== "PGRST116") throw accountError
      if (!account) return null

      const { data: user, error: userError } = await supabase
        .from("users")
        .select("*")
        .eq("id", account.userId)
        .single()

      if (userError && userError.code !== "PGRST116") throw userError
      return user
    },
    updateUser: async (data) => {
      const { data: updatedUser, error } = await supabase
        .from("users")
        .update({
          name: data.name,
          email: data.email,
          image: data.image,
          emailVerified: data.emailVerified,
        })
        .eq("id", data.id)
        .select()
        .single()
      if (error) throw error
      return updatedUser
    },
    deleteUser: async (id) => {
      await supabase.from("users").delete().eq("id", id)
      return null // Adapter expects null or the deleted user
    },
    linkAccount: async (account) => {
      const { data: newAccount, error } = await supabase
        .from("accounts")
        .insert([
          {
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
          },
        ])
        .select()
        .single()
      if (error) throw error
      return newAccount
    },
    unlinkAccount: async ({ providerAccountId, provider }) => {
      await supabase.from("accounts").delete().eq("provider", provider).eq("providerAccountId", providerAccountId)
      return undefined // Adapter expects undefined or the unlinked account
    },
    createSession: async (data) => {
      const { data: newSession, error } = await supabase
        .from("sessions")
        .insert([
          {
            userId: data.userId,
            expires: data.expires,
            sessionToken: data.sessionToken,
          },
        ])
        .select()
        .single()
      if (error) throw error
      return newSession
    },
    getSessionAndUser: async (sessionToken) => {
      const { data: session, error: sessionError } = await supabase
        .from("sessions")
        .select("*")
        .eq("sessionToken", sessionToken)
        .single()

      if (sessionError && sessionError.code !== "PGRST116") throw sessionError
      if (!session) return null

      const { data: user, error: userError } = await supabase
        .from("users")
        .select("*")
        .eq("id", session.userId)
        .single()

      if (userError && userError.code !== "PGRST116") throw userError
      if (!user) return null

      return { session, user }
    },
    updateSession: async (data) => {
      const { data: updatedSession, error } = await supabase
        .from("sessions")
        .update({
          expires: data.expires,
          userId: data.userId,
        })
        .eq("sessionToken", data.sessionToken)
        .select()
        .single()
      if (error) throw error
      return updatedSession
    },
    deleteSession: async (sessionToken) => {
      await supabase.from("sessions").delete().eq("sessionToken", sessionToken)
      return undefined // Adapter expects undefined or the deleted session
    },
  },
  callbacks: {
    async session({ session, user, token }) {
      // Add user ID and vanityUrl to the session object
      if (user) {
        session.user.id = user.id
        session.user.vanityUrl = (user as any).vanityUrl // Cast to any to access vanityUrl
      }
      return session
    },
    async jwt({ token, user, account, profile }) {
      // Persist the OAuth access_token and vanityUrl to the JWT
      if (account) {
        token.accessToken = account.access_token
      }
      if (profile) {
        // Add vanityUrl from profile to token
        ;(token as any).vanityUrl = (profile as any).vanityName || (profile as any).public_profile_url?.split("/").pop()
      }
      if (user) {
        // Add vanityUrl from user to token if it exists (e.g., from database)
        ;(token as any).vanityUrl = (user as any).vanityUrl || (token as any).vanityUrl
      }
      return token
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/", // Redirect to homepage for sign-in
    error: "/auth/error", // Custom error page
  },
}

export const auth = handlers(authConfig)
