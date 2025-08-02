import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2 text-red-600">
            <AlertCircle className="h-6 w-6" />
            Authentication Error
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            An error occurred during authentication. This might be due to invalid credentials, a problem with the
            authentication provider, or a server issue.
          </p>
          <p className="text-sm text-gray-500">Please try again or contact support if the problem persists.</p>
          <div className="flex flex-col gap-2">
            <Button asChild>
              <Link href="/api/auth/signin">Try Logging In Again</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Go to Homepage</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
