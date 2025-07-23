import Link from "next/link"
import { Button } from "@/ui/button"
import { FileX, Home } from "lucide-react"

export default function ResumeNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <FileX className="h-24 w-24 text-gray-400 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Resume Not Found</h1>
          <p className="text-gray-600">The resume you're looking for doesn't exist or may have been moved.</p>
        </div>

        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Link>
          </Button>

          <p className="text-sm text-gray-500">
            If you believe this is an error, please check the URL or contact support.
          </p>
        </div>
      </div>
    </div>
  )
}
