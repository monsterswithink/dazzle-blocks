import { Loader2 } from "lucide-react"
import { Skeleton } from "@/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="space-y-4 text-center">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
          <h1 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-gray-50">
            Loading authentication error...
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            <Skeleton className="h-4 w-[300px]" />
          </p>
        </div>
      </div>
    </div>
  )
}