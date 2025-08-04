"use client"

import { useOthers } from "@veltdev/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function PresenceAvatars() {
  const others = useOthers()

  if (others.length === 0) {
    return null
  }

  return (
    <TooltipProvider>
      <div className="flex -space-x-2 overflow-hidden">
        {others.map((other) => (
          <Tooltip key={other.connectionId}>
            <TooltipTrigger asChild>
              <Avatar className="h-8 w-8 border-2 border-white dark:border-gray-900">
                <AvatarImage src={other.info.photoUrl || "/placeholder-user.jpg"} alt={other.info.name} />
                <AvatarFallback>{other.info.name?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>{other.info.name} (Online)</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
