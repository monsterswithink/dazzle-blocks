import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function HomePage() {
  const session = await auth()

  if (session) {
    redirect("/editor")
  }

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Welcome to Resume Editor</CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            Create, edit, and collaborate on your professional resume.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
  className="w-full"
  onClick={() => signIn("linkedin", {
    callbackUrl: searchParams.get("from") ?? "/profile",
  })}
>
  <Linkedin className="mr-2 h-4 w-4" /> Sign In with LinkedIn
</Button>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            By signing in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
