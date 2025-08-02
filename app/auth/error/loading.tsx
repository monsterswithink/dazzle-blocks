import { Loader2 } from "lucide-react"

export default function AuthErrorLoading() {
  return (
    <div className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center gap-4 py-10">
      <Loader2 className="h-10 w-10 animate-spin text-gray-500" />
      <p className="text-lg text-gray-600">Loading authentication error...</p>
    </div>
  )
}
