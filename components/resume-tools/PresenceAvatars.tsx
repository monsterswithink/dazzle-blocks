"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useRoom } from "@veltdev/react"

export function PresenceAvatars() {
  const { room } = useRoom()
  const users = room?.getUsers() || []

  if (users.length === 0) return null

  return (
    <div className="flex -space-x-2 overflow-hidden">
      <TooltipProvider>
        {users.map((user) => (
          <Tooltip key={user.id}>
            <TooltipTrigger asChild>
              <Avatar className="h-8 w-8 cursor-pointer border-2 border-white transition-transform hover:scale-110">
                <AvatarImage src={user.avatar || "/placeholder.png"} alt={user.name || "User avatar"} />
                <AvatarFallback>{user.name?.charAt(0) ?? "?"}</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>{user.name || "Unknown User"}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  )
}
