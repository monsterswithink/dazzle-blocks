"use client";

import type React from "react";
import {
  VeltProvider as VeltSDKProvider,
  useIdentify,
  useLiveState,
} from "@veltdev/react";
import { useSession } from "next-auth/react";
import type { AuthUser } from "@/types/auth";

interface VeltProviderProps {
  children: React.ReactNode;
  documentId?: string;
  dataProviders?: any;
}

function VeltUser() {
  const { data: session } = useSession();

  React.useEffect(() => {
    if (session?.user) {
      const user = session.user as AuthUser;
      useIdentify({
        uid: user.id,
        displayName: user.name || undefined,
        email: user.email || undefined,
        photoURL: user.avatarUrl || undefined,
        organizationId: undefined,
        colorCode: undefined,
      });
    }
  }, [session]);

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
      <VeltUser />
      {children}
    </VeltSDKProvider>
  );
}

export { useLiveState };
