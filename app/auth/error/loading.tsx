"use client"

import { Loader2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"

export default function Loading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 5))
    }, 150)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="space-y-4 text-center">
        <Loader2 className="h-12 w-12 animate-spin text-gray-500 dark:text-gray-400 mx-auto" />
        <p className="text-gray-500 dark:text-gray-400">Loading...</p>
        <Progress value={progress} className="w-[300px]" />
      </div>
    </div>
  )
}
