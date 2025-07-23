"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@ui/card"
import { Button } from "@ui/button"
import { AlertCircle } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function AuthError() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  const getErrorMessage = (error: string | null) => {
    switch (error) {
      case "Configuration":
        return "Server configuration error. Check LinkedIn app settings."
      case "AccessDenied":
        return "Access was denied. Please try again."
      case "Verification":
        return "Verification failed. Please try again."
      case "OAuthSignin":
        return "OAuth sign-in error. Check LinkedIn app configuration."
      case "OAuthCallback":
        return "OAuth callback error. Check redirect URI in LinkedIn app."
      case "OAuthCreateAccount":
        return "Could not create account. Check LinkedIn app permissions."
      case "EmailCreateAccount":
        return "Could not create account with email."
      case "Callback":
        return "Callback error occurred."
      case "OAuthAccountNotLinked":
        return "Account not linked. Try a different sign-in method."
      case "EmailSignin":
        return "Email sign-in error."
      case "CredentialsSignin":
        return "Credentials sign-in error."
      case "SessionRequired":
        return "Session required. Please sign in."
      default:
        return `Unknown error occurred: ${error || "No error code provided"}`
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
          <CardTitle className="text-2xl font-bold text-red-600">Authentication Error</CardTitle>
          <CardDescription className="text-left">
            <strong>Error:</strong> {error || "Unknown"}
            <br />
            <strong>Message:</strong> {getErrorMessage(error)}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-gray-600">
            <p>
              <strong>Common fixes:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>
                Check LinkedIn app redirect URI:{" "}
                <code className="text-xs bg-gray-100 px-1 rounded">
                  http://localhost:3000/api/auth/callback/linkedin
                </code>
              </li>
              <li>Verify LinkedIn app has r_liteprofile and r_emailaddress permissions</li>
              <li>Ensure environment variables are set correctly</li>
              <li>Check LinkedIn app is not in development mode restrictions</li>
            </ul>
          </div>
          <Link href="/">
            <Button className="w-full">Try Again</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
