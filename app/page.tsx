"use client"

import dynamic from "next/dynamic"

const HomePage = dynamic(() => import("@/components/home/HomePage"), {
  ssr: false,
})

export default function Page() {
  return <HomePage />
}
