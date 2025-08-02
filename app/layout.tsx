"use client"
  
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "#styles";
import P from "@auth/nextjs";
import { ThemeProvider } from "next-themes";
import { ClientProviders } from "@/app/providers";
import {SessionProvider} from "@/app/providers"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionProvider><ClientProviders>{children}</ClientProviders> </SessionProvider>
      </body>
    </html>
  );
}
