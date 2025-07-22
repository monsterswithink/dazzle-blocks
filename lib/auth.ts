// ---- sanity-checks -------------------------------------------------
// if (process.env.NODE_ENV !== "production") {
//   const secret = process.env.NEXTAUTH_SECRET ?? ""
//   const url = process.env.NEXTAUTH_URL ?? ""

//   if (secret.length < 32) {
//     // eslint-disable-next-line no-console
//     console.error(
//       "[config] NEXTAUTH_SECRET must be at least 32 random characters.\n" +
//         "Generate one with:  openssl rand -base64 32",
//     )
//   }
//   if (!/^https?:\/\//.test(url)) {
//     // eslint-disable-next-line no-console
//     console.error(
//       "[config] NEXTAUTH_URL must start with http:// or https://\n" + `Current value: "${url || "(not set)"}"`,
//     )
//   }
// }
// --------------------------------------------------------------------
// V1 THAT RETURNED THE PROVIDER ID ONLY
// import type { NextAuthOptions } from "next-auth"
// import LinkedInProvider from "next-auth/providers/linkedin"

// export const authOptions: NextAuthOptions = {
//   secret: process.env.NEXTAUTH_SECRET,
//   debug: true, // Enable debug logging
//   providers: [
//     LinkedInProvider({
//       clientId: process.env.LINKEDIN_CLIENT_ID!,
//       clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
//       authorization: {
//         params: {
//           scope: "r_liteprofile r_basicprofile",
//         },
//       },
//       // Simplified profile mapping to avoid parsing errors
//       profile(profile: any) {
//         console.log("LinkedIn profile data:", profile) // Debug log

//         return {
//           id: profile.id || "unknown",
//           name: profile.localizedFirstName || "Unknown User",
//           email: profile.emailAddress || null,
//           image: null, // Simplified - remove complex image parsing
//           linkedinId: profile.id || "unknown",
//           vanityUrl: profile.vanityName || null,
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, account, profile, user }) {
//       console.log("JWT callback:", { token, account, profile, user }) // Debug log

//       if (account && profile) {
//         token.linkedinId = profile.id
//         token.vanityUrl = (profile as any).vanityName || null
//       }
//       return token
//     },
//     async session({ session, token }) {
//       console.log("Session callback:", { session, token }) // Debug log

//       return {
//         ...session,
//         user: {
//           ...session.user,
//           linkedinId: token.linkedinId,
//           vanityUrl: token.vanityUrl,
//         },
//       }
//     },
//     async signIn({ user, account, profile }) {
//       console.log("SignIn callback:", { user, account, profile }) // Debug log
//       return true
//     },
//   },
//   pages: {
//     signIn: "/",
//     error: "/auth/error",
//   },
//   session: {
//     strategy: "jwt",
//   },
// }
// V2 ATTEMPT WITH SCOPES
import LinkedInProvider from "next-auth/providers/linkedin"
import type { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "r_basicprofile",
        },
      },
      userinfo: {
        url: "https://api.linkedin.com/v2/me",
        params: {
          projection:
            "(id,firstName,lastName,localizedFirstName,localizedLastName,profilePicture(displayImage~:playableStreams))",
        },
      },
      profile(profile) {
        return {
          id: profile.id,
          name: `${profile.localizedFirstName} ${profile.localizedLastName}`,
          email: null,
          image: profile.profilePicture?.["displayImage~"]?.elements?.[0]?.identifiers?.[0]?.identifier || null,
          linkedinId: profile.id,
          profileUrl: `https://www.linkedin.com/in/${profile.id}`,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token
        token.linkedinId = profile?.id
        token.profileUrl = `https://www.linkedin.com/in/${profile?.id}`
      }
      return token
    },
    async session({ session, token }) {
      return {
        ...session,
        accessToken: token.accessToken,
        user: {
          ...session.user,
          linkedinId: token.linkedinId,
          profileUrl: token.profileUrl,
        },
      }
    },
  },
  debug: true,
}
