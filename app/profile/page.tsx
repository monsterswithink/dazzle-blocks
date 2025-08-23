"use client"

import dynamic from "next/dynamic"

const ProfilePage = dynamic(() => import("@/resume-blocks/ProfilePage"), {
  ssr: false,
})

export default function Page() {
  return <ProfilePage />
}
