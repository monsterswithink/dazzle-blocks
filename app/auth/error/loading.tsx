"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function Loading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 5))
    }, 150)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="space-y-4 text-center">
        <Loader2 className="h-12 w-12 animate-spin text-gray-500 dark:text-gray-400 mx-auto" />
        <h1 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-gray-50">
          Authentication error
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Please wait while we process your request...
        </p>
        <Progress value={progress} className="w-[300px]" />
      </div>
    </div>
  )
}