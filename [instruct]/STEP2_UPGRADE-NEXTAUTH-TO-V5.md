Perfect. Below is a standalone, auth-focused migration brief—designed specifically for migrating from next-auth v4 to @auth/core (v5) within your exact repo structure and routing system — without touching LinkedIn OAuth logic, Liveblocks/Velt, or EnrichLayer flow:

⸻

✦ PROMPT — Auth Migration: NextAuth v4 → @auth/core (Auth.js v5)

🧭 Objective

Migrate from next-auth v4 (deprecated) to Auth.js v5 using the @auth/core package, while preserving all route-level access, LinkedIn session fields, and the ability to hydrate vanityUrl into session-based data-fetching for EnrichLayer.

🔒 Do NOT modify:
	•	LinkedIn OAuth scopes or flow (even if deprecated, r_basicprofile will be ignored safely)
	•	Data path from LinkedIn → EnrichLayer → Supabase
	•	Liveblocks/Velt integration
	•	Any endpoint that uses useSession, getServerSession, etc — unless adapting them for v5

⸻

✅ Your Current Auth Setup

Auth location:
	•	app/api/auth/[...nextauth]/route.ts
	•	Session client usage: useSession()
	•	Server usage: getServerSession(authOptions)

Profile use case:
	•	Authenticated users redirect to /profile
	•	Session includes LinkedIn vanityUrl, injected during profile() callback
	•	Downstream EnrichLayer fetch depends on session.user.vanityUrl

⸻

🔄 Migration Steps

1. Install Auth.js packages

npm uninstall next-auth
npm install @auth/core @auth/nextjs


⸻

2. Update your route handler

From (v4) app/api/auth/[...nextauth]/route.ts:

import NextAuth from "next-auth";
import LinkedInProvider from "next-auth/providers/linkedin";
import authOptions from "@/lib/auth";

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

✅ To (v5):

import { auth } from "@/lib/auth";

export const GET = auth;
export const POST = auth;

🔁 You now export auth directly, which wraps NextAuth() for you (new API).

⸻

3. Update lib/auth.ts to match v5 structure

Old (v4):

import LinkedInProvider from "next-auth/providers/linkedin";
export const authOptions = {
  providers: [LinkedInProvider({...})],
  callbacks: {
    async session({ session, token }) {
      session.user.vanityUrl = token.vanityUrl;
      return session;
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.vanityUrl = profile.vanityName;
      }
      return token;
    },
  },
};

✅ New (v5):

import { NextAuthConfig } from "@auth/core";
import LinkedIn from "@auth/core/providers/linkedin";
import { handlers } from "@auth/nextjs";

export const authConfig: NextAuthConfig = {
  providers: [
    LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.vanityUrl = profile.vanityName ?? profile.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.vanityUrl = token.vanityUrl;
      return session;
    },
  },
};

export const auth = handlers(authConfig);


⸻

4. Update all getServerSession() usage

Old:

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const session = await getServerSession(authOptions);

✅ New:

import { auth } from "@/lib/auth";

const session = await auth();

🧠 This is now fully unified — auth() behaves like getServerSession() but under @auth/nextjs.

⸻

5. Client-side remains unchanged

import { useSession } from "@auth/nextjs";

const { data: session } = useSession();
console.log(session?.user?.vanityUrl);

🟢 No changes to hooks, as @auth/nextjs still supports the React bindings.

⸻

🧪 Final Test Checklist
	•	✅ /api/auth/signin still works
	•	✅ OAuth redirect still routes to /profile
	•	✅ session.user.vanityUrl is still available in:
	•	useSession() (client)
	•	auth() (server)
	•	✅ EnrichLayer fetch at /api/enrich works (requires vanityUrl)
	•	✅ Auth state persists correctly across reloads, resume save, and sync

⸻

⚠️ Notes
	•	Scopes like r_basicprofile are deprecated but harmless — LinkedIn now ignores it, so no need to rewrite your strategy unless you’re missing essential fields (which EnrichLayer covers anyway).
	•	@auth/core decouples runtime from framework — no more tightly coupled pages/api expectations.
	•	Can now easily run in Edge or middleware if needed.

⸻

Need the updated full files (auth.ts, [...nextauth]/route.ts, etc)? Just say the word.
