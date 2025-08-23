"use client"

import dynamic from "next/dynamic"

const ProfilePage = dynamic(() => import("@/components/profile/ProfilePage"), {
  ssr: false,
})

export default function Page() {
  return <ProfilePage />
}
