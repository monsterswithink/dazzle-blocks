"use client"

import { useState, useEffect } from "react"
import { RoomProvider } from "@/lib/liveblocks"
import { FloatingToolbar } from "@/components/floating-toolbar"
import { ResumeDisplay } from "@/components/resume-display"
import { ResumeService, type ResumeData } from "@/lib/resume-service"
import { supabase } from "@/lib/supabase"
import type { EnrichedProfile, ResumeTheme } from "@/types/profile"

interface ResumeViewerProps {
  initialData: ResumeData
  resumeId: string
}

export default function ResumeViewer({ initialData, resumeId }: ResumeViewerProps) {
  return (
    <RoomProvider id={`resume-${resumeId}`} initialPresence={{}} initialStorage={initialData}>
      <ResumeViewerContent initialData={initialData} resumeId={resumeId} />
    </RoomProvider>
  )
}

function ResumeViewerContent({ initialData, resumeId }: { initialData: ResumeData; resumeId: string }) {
  const [profile, setProfile] = useState<EnrichedProfile>(initialData.profile)
  const [theme, setTheme] = useState<ResumeTheme>(initialData.theme)
  const [settings, setSettings] = useState(initialData.settings)
  const [isSaving, setIsSaving] = useState(false)

  // Set up Supabase realtime subscription
  useEffect(() => {
    const channel = supabase
      .channel(`resume-${resumeId}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "resumes",
          filter: `public_identifier=eq.${resumeId}`,
        },
        (payload) => {
          console.log("Resume updated:", payload)
          if (payload.new) {
            setProfile(payload.new.profile_data)
            setTheme(payload.new.theme_data)
            setSettings(payload.new.settings)
          }
        },
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [resumeId])

  const saveToSupabase = async (updatedData: Partial<ResumeData>) => {
    setIsSaving(true)
    try {
      const currentData: ResumeData = {
        profile,
        theme,
        settings,
        ...updatedData,
      }

      await ResumeService.saveResume(resumeId, currentData)
    } catch (error) {
      console.error("Error saving to Supabase:", error)
    } finally {
      setIsSaving(false)
    }
  }

  const handleProfileUpdate = async (updates: Partial<EnrichedProfile>) => {
    const updatedProfile = { ...profile, ...updates }
    setProfile(updatedProfile)

    await saveToSupabase({
      profile: updatedProfile,
      settings: {
        ...settings,
        lastModified: new Date().toISOString(),
      },
    })
  }

  const handleThemeChange = async (newTheme: ResumeTheme) => {
    setTheme(newTheme)
    await saveToSupabase({ theme: newTheme })
  }

  const handleLinkedInSync = () => {
    // This would trigger a re-sync with EnrichLayer
    console.log("LinkedIn sync triggered - would call EnrichLayer API again")
    alert("LinkedIn sync would re-fetch your latest LinkedIn data and update the resume!")
  }

  const toggleEditMode = async () => {
    const newSettings = { ...settings, isEditMode: !settings.isEditMode }
    setSettings(newSettings)
    await saveToSupabase({ settings: newSettings })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <ResumeDisplay
        profile={profile}
        theme={theme}
        isEditMode={settings.isEditMode}
        onProfileUpdate={handleProfileUpdate}
      />

      <div data-floating-toolbar>
        <FloatingToolbar
          isEditMode={settings.isEditMode}
          onToggleEdit={toggleEditMode}
          onThemeChange={handleThemeChange}
          onLinkedInSync={handleLinkedInSync}
          currentTheme={theme}
        />
      </div>

      {/* Save indicator */}
      {isSaving && (
        <div className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">Saving...</div>
      )}
    </div>
  )
}
