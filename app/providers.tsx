"use client"

import type React from "react";
import { SessionProvider } from "@auth/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { VeltProvider } from "@/components/velt-provider";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() =>
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000, // 1 minute
        },
      },
    })
  );

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <VeltProvider>{children}</VeltProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
