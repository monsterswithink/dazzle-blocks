"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useOthers } from "@veltdev/react" // Corrected import from @veltdev/react

export function PresenceAvatars() {
  const others = useOthers()

  return (
    <TooltipProvider>
      <div className="flex -space-x-2 overflow-hidden">
        {others.toArray().map((other) => (
          <Tooltip key={other.id}>
            <TooltipTrigger asChild>
              <Avatar className="h-8 w-8 border-2 border-white dark:border-gray-900">
                <AvatarImage src={other.info.photoUrl || "/placeholder-user.png"} alt={other.info.name} />
                <AvatarFallback>{other.info.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>{other.info.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
        {others.count > 0 && (
          <Avatar className="h-8 w-8 border-2 border-white dark:border-gray-900 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center text-xs font-medium">
            <AvatarFallback>+{others.count}</AvatarFallback>
          </Avatar>
        )}
      </div>
    </TooltipProvider>
  )
}
