import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Frown } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2 text-red-600">
            <Frown className="h-6 w-6" />
            Resume Not Found
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            We couldn't find the resume you're looking for. It might have been deleted, or the link is incorrect.
          </p>
          <div className="flex flex-col gap-2">
            <Button asChild>
              <Link href="/editor">Create a New Resume</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/profile">Go to My Resumes</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
