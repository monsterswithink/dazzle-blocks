"use client";

import { useVeltClient } from "@veltdev/react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import type { VeltUser } from "@/types/auth";

export default function VeltAuthClient() {
  const { data: session } = useSession();
  const { client } = useVeltClient();
  const [user, setUser] = useState<VeltUser | null>(null);

  // Fetch Velt JWT token from your server
  async function fetchVeltJWTToken(userId: string) {
    const res = await fetch("/api/velt/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });

    if (!res.ok) throw new Error("Failed to fetch Velt JWT token");
    return res.json(); // { authToken: string }
  }

  useEffect(() => {
    const initVelt = async () => {
      if (!client || !session?.user) return;

      // Dynamically build VeltUser from session
      const veltUser: VeltUser = {
        userId: session.user.id,
        name: session.user.name ?? undefined,
        email: session.user.email ?? undefined,
        photoUrl: session.user.image ?? undefined,
        organizationId: process.env.NEXT_PUBLIC_VELT_ORG_ID!,
      };

      // Get JWT token from your API
      const { authToken } = await fetchVeltJWTToken(veltUser.userId);

      // Identify user in Velt
      await client.identify(veltUser, { authToken });

      setUser(veltUser);
    };

    initVelt().catch(console.error);
  }, [client, session]);

  if (!user) return <div>Loading Velt...</div>;

  return <div>User: {user.userId}</div>;
}
