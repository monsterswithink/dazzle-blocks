"use client"

import { Loader2 } from "lucide-react"
import { Progress } from "@/ui/progress"
import { useEffect, useState } from "react"

export default function AuthError() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 3))
    }, 150)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="space-y-4 text-center">
        <Loader2 className="h-12 w-12 animate-spin text-red-500 mx-auto" />
        <h1 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-gray-50">
          Authentication Error
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Please wait while we process your request...
      </p>
        <Progress value={progress} className="w-[300px]" />
      </div>
    </div>
  )
}
