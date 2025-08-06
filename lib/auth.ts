import NextAuth from "next-auth"
import LinkedIn from "next-auth/providers/linkedin"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import { createClient } from "@supabase/supabase-js"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      authorization: {
        params: { scope: "openid profile email" },
      },
      profile: (profile) => {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          vanityUrl: `https://www.linkedin.com/in/${profile.vanityName}`,
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
    async session({ session, user, token }) {
      if (session?.user) {
        session.user.id = user.id
        if (token.vanityUrl) {
          session.user.vanityUrl = token.vanityUrl as string
        }
      }
      return session
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id
      }
      if (profile) {
        const profileWithVanity = profile as any
        if (profileWithVanity.vanityName) {
          token.vanityUrl = `https://www.linkedin.com/in/${profileWithVanity.vanityName}`
        }
      }
      return token
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
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
})

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      vanityUrl: string
    } & {
      name?: string | null
      email?: string | null
      image?: string | null
    }
  }
}
