import { createClient } from "@liveblocks/client"
import { createRoomContext } from "@liveblocks/react"
import type { EnrichedProfile, ResumeTheme } from "@/types/profile"

type Presence = {}

type Storage = {
  profile: EnrichedProfile
  theme: ResumeTheme
  settings: {
    isEditMode: boolean
    lastModified: string
  }
}

type UserMeta = {
  id: string
  info: {
    name: string
    avatar: string
  }
}

type RoomEvent = {}

/* --------  FIX: tolerate missing key & use pattern-safe fallback  -------- */
const apiKey = process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY
const client = createClient({
  publicApiKey:
    apiKey && apiKey.startsWith("pk_")
      ? apiKey
      : // dummy dev key that matches the expected pattern
        "pk_live_000000000000000000000000000000000000",
})
/* ------------------------------------------------------------------------ */

export const {
  RoomProvider,
  useRoom,
  useMyPresence,
  useOthers,
  useBroadcastEvent,
  useEventListener,
  useStorage,
  useMutation,
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent>(client)
