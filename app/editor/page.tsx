"use client"

import dynamic from "next/dynamic"

const ResumeEditorPage = dynamic(() => import("@/components/editor/ResumeEditorPage"), {
  ssr: false,
})

export default function Page() {
  return <ResumeEditorPage />
}
