import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter text-gray-900 dark:text-gray-50">404 - Resume Not Found</h1>
        <p className="text-gray-500 dark:text-gray-400">
          The resume you are looking for does not exist or you do not have permission to view it.
        </p>
        <Link href="/editor" passHref>
          <Button>Go to Editor</Button>
        </Link>
      </div>
    </div>
  )
}
