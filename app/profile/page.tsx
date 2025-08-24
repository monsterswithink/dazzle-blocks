"use client"

import dynamic from "next/dynamic"

const Profile = dynamic(() => import("@/pages/Profile"), {
  ssr: false,
})

export default function Page() {
  return <Profile />
}
