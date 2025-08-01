"use client"

import { Button } from "@/ui/button"
import { Video } from "lucide-react"
// Placeholder: Replace with actual video logic (Velt's or your own)
export function ProfileVideoButton({ onClick }: { onClick?: () => void }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute bottom-0 right-0 rounded-full bg-white/80 hover:bg-white shadow"
      onClick={onClick}
      aria-label="Record or Join Video"
    >
      <Video className="h-5 w-5 text-blue-600" />
    </Button>
  )
}