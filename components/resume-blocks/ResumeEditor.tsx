"use client"

import { useState, useEffect } from "react"
import { VeltDocumentProvider, useVeltDocument } from "@veltdev/react"
import { FloatingToolbar } from "@/resume-tools/FloatingToolbar"
import { ResumeDisplay } from "@/resume-blocks/ResumeDisplay"
import type { EnrichedProfile, ResumeTheme } from "@/types/profile"

function ResumeEditorContent({ documentId, initialStorage }: { documentId: string; initialStorage: any }) {
  const { state, update } = useVeltDocument(documentId, {
    initialState: initialStorage,
  })

  const profile = state.profile
  const theme = state.theme
  const settings = state.settings

  const updateProfile = (updates: Partial<EnrichedProfile>) => {
    update({ profile: { ...profile, ...updates }, settings: { ...settings, lastModified: new Date().toISOString() } })
  }

  const updateTheme = (newTheme: ResumeTheme) => {
    update({ theme: newTheme })
  }

  const updateSettings = (newSettings: Partial<typeof settings>) => {
    update({ settings: { ...settings, ...newSettings } })
  }

  const handleLinkedInSync = () => {
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
  const [initialStorage, setInitialStorage] = useState<any>(null)

  useEffect(() => {
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
    <VeltDocumentProvider documentId="resume-editor" initialState={initialStorage}>
      <ResumeEditorContent documentId="resume-editor" initialStorage={initialStorage} />
    </VeltDocumentProvider>
  )
}
