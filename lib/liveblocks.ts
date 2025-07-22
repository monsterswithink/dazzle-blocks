import { createClient } from "@liveblocks/client"
import { createRoomContext } from "@liveblocks/react"

const client = createClient({
  publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY || "pk_dev_placeholder",
})

export const {
  RoomProvider,
  useRoom,
  useMyPresence,
  useOthers,
  useBroadcastEvent,
  useEventListener,
  useStorage,
  useMutation,
} = createRoomContext(client)
