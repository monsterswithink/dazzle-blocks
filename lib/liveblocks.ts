import { createClient } from "@liveblocks/client"
import { createRoomContext } from "@liveblocks/react"
import type { EnrichedProfile, ResumeTheme } from "@/types/profile"

// Presence represents the properties that will exist on every User in the Room
// and be shared with everyone else.
export type Presence = {
  // cursor: { x: number, y: number } | null,
  // ...
}

// Optionally, Storage represents the shared document that persists in the Room,
// even after all users leave.
export type Storage = {
  // author: LiveObject<{ firstName: string, lastName: string }>,
  // ...
  profile: EnrichedProfile
  theme: ResumeTheme
  settings: {
    isEditMode: boolean
    lastModified: string
  }
  resumeData: any // Using 'any' for simplicity, define a proper type for your resume data
}

// Optionally, UserMeta represents static/readonly metadata on each user, like their name.
export type UserMeta = {
  id?: string // Accessible in Liveblocks presence hooks and authentication
  info?: {
    name?: string
    avatar?: string
  }
}

// Optionally, Event represents events that can be emitted by the client and received by others in the Room.
export type RoomEvent = {
  // type: "NOTIFICATION",
  // message: string,
}

// Optionally, Liveness represents the state of a user's connection and activity.
export type Liveness = {
  // isTyping: boolean,
  // ...
}

const client = createClient({
  publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY!,
})

export const {
  RoomProvider,
  useMyPresence,
  useOthers,
  useStorage,
  useMutation,
  useBroadcastEvent,
  useEventListener,
  useSelf,
  useRoom,
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent, Liveness>(client)
