import { signIn } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LinkedinIcon } from "lucide-react"

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
          <CardDescription>Sign in to your account to access the resume editor</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action={async () => {
              "use server"
              await signIn("linkedin", { redirectTo: "/editor" })
            }}
          >
            <Button type="submit" className="w-full" size="lg">
              <LinkedinIcon className="mr-2 h-4 w-4" />
              Continue with LinkedIn
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
