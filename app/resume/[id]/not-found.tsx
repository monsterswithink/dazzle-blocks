import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">404 - Resume Not Found</h2>
        <p className="text-gray-700 dark:text-gray-300">
          The resume you are looking for does not exist or you do not have permission to view it.
        </p>
        <Link href="/editor">
          <Button>Go to Editor</Button>
        </Link>
      </div>
    </div>
  )
}
