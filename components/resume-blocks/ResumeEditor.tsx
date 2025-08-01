"use client"

import { useEffect, useState } from "react"
import { useSetDocument } from "@veltdev/react"
import { FloatingToolbar } from "@/resume-tools/FloatingToolbar"
import { ResumeDisplay } from "@/resume-blocks/ResumeDisplay"

function getEditorSessionId() {
  // Use sessionStorage (client-only) to persist demo id for this tab/session
  if (typeof window === "undefined") return "editor-demo"
  let id = sessionStorage.getItem("resume-demo-id")
  if (!id) {
    id = `resume-demo-${Math.random().toString(36).slice(2, 10)}`
    sessionStorage.setItem("resume-demo-id", id)
  }
  return id
}

export default function ResumeEditor() {
  const [initialStorage, setInitialStorage] = useState<any>(null)
  const [docId, setDocId] = useState<string>("editor-demo")

  useEffect(() => {
    setDocId(getEditorSessionId())
    fetch("/data/initial-resume-data.json")
      .then((res) => res.json())
      .then((data) => setInitialStorage(data))
      .catch((err) => console.error("Failed to load initial data:", err))
  }, [])

  useSetDocument(
    initialStorage
      ? { id: docId, initialState: initialStorage }
      : null
  )

  if (!initialStorage) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Initializing...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <ResumeDisplay
        profile={initialStorage.profile}
        theme={initialStorage.theme}
        isEditMode={initialStorage.settings.isEditMode}
        onProfileUpdate={() => {}}
      />
      <div data-floating-toolbar>
        <FloatingToolbar
          isEditMode={initialStorage.settings.isEditMode}
          onToggleEdit={() => {}}
          onThemeChange={() => {}}
          onLinkedInSync={() => {}}
          currentTheme={initialStorage.theme}
        />
      </div>
    </div>
  )
} 
