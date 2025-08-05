// lib/auth.ts
import NextAuth from "next-auth"
import LinkedIn from "next-auth/providers/linkedin"

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  debug: true, // Enable debug logging
  providers: [
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
      profile(profile: any) {
        return {
          id: profile.id,
          name: `${profile.localizedFirstName} ${profile.localizedLastName}`,
          email: profile.emailAddress || null,
          image: profile.profilePicture?.['displayImage~']?.elements?.[0]?.identifiers?.[0]?.identifier || null,
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin', // Custom sign-in page if needed
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.linkedinId = profile?.id;
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          linkedinId: token.linkedinId,
        },
      }
    },
  },
};

export default NextAuth(authOptions);
