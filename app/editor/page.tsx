"use client"

import { useState, useEffect } from "react"
import { RoomProvider, useStorage, useMutation } from "@/lib/liveblocks"
import { FloatingToolbar } from "./components/floating-toolbar"
import { ResumeDisplay } from "./components/resume-display"
import type { EnrichedProfile, ResumeTheme } from "./types/profile"

function ResumeEditorContent() {
  const profile = useStorage((root) => root.profile)
  const theme = useStorage((root) => root.theme)
  const settings = useStorage((root) => root.settings)

  const updateProfile = useMutation(({ storage }, updates: Partial<EnrichedProfile>) => {
    const currentProfile = storage.get("profile")
    storage.set("profile", { ...currentProfile, ...updates })
    storage.set("settings", {
      ...storage.get("settings"),
      lastModified: new Date().toISOString(),
    })
  }, [])

  const updateTheme = useMutation(({ storage }, newTheme: ResumeTheme) => {
    storage.set("theme", newTheme)
  }, [])

  const updateSettings = useMutation(({ storage }, newSettings: Partial<typeof settings>) => {
    storage.set("settings", { ...storage.get("settings"), ...newSettings })
  }, [])

  const handleLinkedInSync = () => {
    console.log("LinkedIn sync triggered")
    alert("LinkedIn sync functionality will be implemented by you!")
  }

  const toggleEditMode = () => {
    updateSettings({ isEditMode: !settings?.isEditMode })
  }

  if (!profile || !theme || !settings) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading resume...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <ResumeDisplay profile={profile} theme={theme} isEditMode={settings.isEditMode} onProfileUpdate={updateProfile} />

      <div data-floating-toolbar>
        <FloatingToolbar
          isEditMode={settings.isEditMode}
          onToggleEdit={toggleEditMode}
          onThemeChange={updateTheme}
          onLinkedInSync={handleLinkedInSync}
          currentTheme={theme}
        />
      </div>
    </div>
  )
}

export default function ResumeEditor() {
  const [initialStorage, setInitialStorage] = useState(null)

  useEffect(() => {
    // Load fallback data for the editor (when no specific resume is being edited)
    fetch("/data/initial-resume-data.json")
      .then((res) => res.json())
      .then((data) => setInitialStorage(data))
      .catch((err) => console.error("Failed to load initial data:", err))
  }, [])

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
    <RoomProvider id="resume-editor" initialPresence={{}} initialStorage={initialStorage}>
      <ResumeEditorContent />
    </RoomProvider>
  )
}
