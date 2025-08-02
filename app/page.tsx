import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function HomePage() {
  const session = await auth()

  if (session) {
    redirect("/profile")
  }

  return (
    <main className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center p-4 md:p-6 lg:p-8">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Welcome to the Collaborative Resume Editor</CardTitle>
          <CardDescription className="mt-2 text-lg text-gray-600">
            Build and collaborate on your professional resume in real-time.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700">Sign in with your LinkedIn account to get started.</p>
          <Button asChild size="lg" className="w-full">
            <Link href="/api/auth/signin">Sign in with LinkedIn</Link>
          </Button>
          <div className="text-sm text-gray-500">
            By signing in, you agree to our{" "}
            <Link href="#" className="underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline">
              Privacy Policy
            </Link>
            .
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
