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
\`\`\`
