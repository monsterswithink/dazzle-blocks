"use client"

import type React from "react";
import {
  VeltProvider as VeltSDKProvider,
  useIdentify,
  useLiveState,
} from "@veltdev/react";
import { useSession } from "next-auth/react";

interface VeltProviderProps {
  children: React.ReactNode;
  documentId?: string;
  dataProviders?: any;
}

// Child component handles user identification with JWT
function VeltIdentifyUser() {
  const { data: session } = useSession();

  // Fetch Velt JWT token from your API
  async function fetchVeltJWTToken(userId: string) {
    const res = await fetch("/api/velt/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });

    if (!res.ok) throw new Error("Failed to fetch Velt JWT token");
    return res.json(); // { authToken: string }
  }

  React.useEffect(() => {
    if (!session?.user) return;

    const identify = useIdentify();

React.useEffect(() => {
  if (!session?.user) return;

  const identifyUser = async () => {
    const userId = session.user.id;
    const { authToken } = await fetchVeltJWTToken(userId);

    identify({
      userId,
      name: session.user.name ?? undefined,
      email: session.user.email ?? undefined,
      photoUrl: session.user.image ?? "/placeholder-user.png",
    }, { authToken });
  };

  identifyUser().catch(console.error);
}, [session, identify]);

  return null;
}

export function VeltProvider({ children, documentId, dataProviders }: VeltProviderProps) {
  const apiKey = process.env.NEXT_PUBLIC_VELT_PUBLIC_KEY;

  if (!apiKey) {
    console.warn("NEXT_PUBLIC_VELT_PUBLIC_KEY is not set");
    return <>{children}</>;
  }

  return (
    <VeltSDKProvider apiKey={apiKey} documentId={documentId} dataProviders={dataProviders}>
      <VeltIdentifyUser />
      {children}
    </VeltSDKProvider>
  );
}

export { useLiveState };
