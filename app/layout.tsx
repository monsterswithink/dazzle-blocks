// app/layout.tsx (your RootLayout)

"use client";

import { VeltProvider } from "@veltdev/react";
// import other providers...

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen ...", fontSans.variable)}>
        <Suspense fallback={null}>
          <SessionProvider /* optional: session={session} */>
            {/* VeltProvider must live inside SessionProvider so auth/identify flows work */}
            <VeltProvider apiKey={process.env.NEXT_PUBLIC_VELT_API_KEY!}>
              {/* Now Theme/UI layout and your children */}
              <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange>
                <ClientLayoutComponent>{children}</ClientLayoutComponent>
                <Toaster />
                <Analytics />
                <SpeedInsights />
              </ThemeProvider>
            </VeltProvider>
          </SessionProvider>
        </Suspense>
      </body>
    </html>
  );
}
