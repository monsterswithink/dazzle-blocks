import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default async function HomePage() {
  const session = await auth()

  if (session) {
    redirect("/editor")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Resume Editor</CardTitle>
          <CardDescription>Create and collaborate on professional resumes in real-time</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/auth/signin">Get Started</Link>
          </Button>
          <p className="text-sm text-gray-600 text-center">Sign in with LinkedIn to start building your resume</p>
        </CardContent>
      </Card>
    </div>
  )
}
