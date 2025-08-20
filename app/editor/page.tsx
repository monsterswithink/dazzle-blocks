"use client"

import { useState, useEffect } from "react"
import { VeltProvider, useLiveState } from "@/components/resume-providers/Velt"
import { resumeDataProvider } from "@/lib/velt-data-provider"
import { FloatingToolbar } from "@/components/resume-tools/FloatingToolbar"
import { ResumeDisplay } from "@/components/resume-blocks/ResumeDisplay"
import type { EnrichedProfile, ResumeTheme } from "@/types/profile"

export default function ResumeEditor() {
  const [profile, setProfile] = useLiveState<EnrichedProfile | null>("profile", null)
  const [theme, setTheme] = useLiveState<ResumeTheme>("theme", "modern")
  const [settings, setSettings] = useLiveState("settings", {
    isEditMode: false,
    lastModified: new Date().toISOString(),
  })

  useEffect(() => {
    // Load fallback data if no data is found in the live state
    if (profile === null) {
      fetch("/data/initial-resume-data.json")
        .then((res) => res.json())
        .then((data) => {
          setProfile(data.profile)
          setTheme(data.theme)
          setSettings(data.settings)
        })
        .catch((err) => console.error("Failed to load initial data:", err))
    }
  }, [profile, setProfile, setTheme, setSettings])

  const handleLinkedInSync = () => {
    console.log("LinkedIn sync triggered")
    alert("LinkedIn sync functionality will be implemented by you!")
  }

  const toggleEditMode = () => {
    setSettings((prev) => ({ ...prev, isEditMode: !prev.isEditMode }))
  }

  const onProfileUpdate = (updates: Partial<EnrichedProfile>) => {
    setProfile((prev) => (prev ? { ...prev, ...updates } : null))
    setSettings((prev) => ({ ...prev, lastModified: new Date().toISOString() }))
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
    <VeltProvider documentId="resume-editor" dataProviders={{ resume: resumeDataProvider }}>
      <div className="min-h-screen bg-gray-50 py-8">
        <ResumeDisplay profile={profile} theme={theme} isEditMode={settings.isEditMode} onProfileUpdate={onProfileUpdate} />

        <div data-floating-toolbar>
          <FloatingToolbar
            isEditMode={settings.isEditMode}
            onToggleEdit={toggleEditMode}
            onThemeChange={setTheme}
            onLinkedInSync={handleLinkedInSync}
            currentTheme={theme}
          />
        </div>
      </div>
    </VeltProvider>
  )
}
