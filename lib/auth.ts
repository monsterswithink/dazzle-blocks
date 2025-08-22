import NextAuth from "next-auth"
import LinkedIn from "next-auth/providers/linkedin"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "r_liteprofile r_emailaddress r_basicprofile",
        },
      },
      userinfo: {
        url: "https://api.linkedin.com/v2/me",
        params: { projection: "(id,localizedFirstName,localizedLastName,profilePicture(displayImage~:playableStreams),vanityName)" },
      },
      async profile(profile, tokens) {
        console.log("Debugging NextAuth LinkedIn profile callback - raw profile:", profile);
        const emailResponse = await fetch(
          "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
          {
            headers: {
              Authorization: `Bearer ${tokens.access_token}`,
            },
          }
        )
        const emailData = await emailResponse.json()
        return {
          id: profile.sub,
          name: `${profile.localizedFirstName} ${profile.localizedLastName}`,
          email: emailData?.elements?.[0]?.["handle~"]?.emailAddress,
          image: profile.profilePicture?.["displayImage~"]?.elements?.[0]?.identifiers?.[0]?.identifier,
          vanityUrl: profile.vanityName,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token
      }
      if (profile) {
        token.vanityUrl = (profile as any).vanityName || null
      }
      return token
    },
    async session({ session, token }) {
      return {
        ...session,
        accessToken: token.accessToken,
        user: {
          ...session.user,
          vanityUrl: token.vanityUrl as string,
        },
      }
    },
  },
  pages: {
    signIn: "/",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
})

declare module "next-auth" {
  interface Session {
    accessToken?: string
    user: {
      id: string
      vanityUrl?: string
    } & {
      name?: string | null
      email?: string | null
      image?: string | null
    }
  }
}
