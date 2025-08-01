"use client"

import { useVeltPresence } from "@veltdev/react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function PresenceAvatars() {
  const { users } = useVeltPresence()

  return (
    <div className="flex -space-x-2">
      {users.map((user) => (
        <div className="flex flex-col items-center" key={user.id}>
          <Avatar className="border-2 border-white shadow">
            <AvatarImage src={user.avatar || undefined} alt={user.name || "Anonymous"} />
            <AvatarFallback>
              {user.name?.split(" ").map((n) => n[0]).join("").toUpperCase() || "?"}
            </AvatarFallback>
          </Avatar>
          <span className="text-xs mt-1 text-gray-700">
            {user.name || "Anonymous"}
          </span>
        </div>
      ))}
    </div>
  )
}