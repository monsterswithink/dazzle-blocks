"use client"

import { useState, useEffect } from "react"
import { useVeltRoom, useVeltState } from "@veltdev/react"
import { FloatingToolbar } from "@/resume-tools/FloatingToolbar"
import { ResumeDisplay } from "@/resume-blocks/ResumeDisplay"
import { ResumeService, type ResumeData } from "@/lib/resume-service"
import { supabase } from "@/lib/supabase"
import type { EnrichedProfile, ResumeTheme } from "@/types/profile"



export default function ResumeViewer({ initialData, resumeId }) {
  // Join the Velt room for this resume
  const { isConnected } = useVeltRoom({ roomId: `resume-${resumeId}` })

  // Shared state (like Liveblocks' useStorage)
  const [profile, setProfile] = useVeltState("profile", initialData.profile)
  const [theme, setTheme] = useVeltState("theme", initialData.theme)
  const [settings, setSettings] = useVeltState("settings", initialData.settings)

  // Supabase realtime subscription remains
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
          if (payload.new) {
            update({
              profile: payload.new.profile_data,
              theme: payload.new.theme_data,
              settings: payload.new.settings,
            })
          }
        },
      )
      .subscribe()
    return () => {
      supabase.removeChannel(channel)
    }
  }, [resumeId, update])

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
    update({
      profile: updatedProfile,
      settings: { ...settings, lastModified: new Date().toISOString() },
    })
    await saveToSupabase({
      profile: updatedProfile,
      settings: { ...settings, lastModified: new Date().toISOString() },
    })
  }

  const handleThemeChange = async (newTheme: ResumeTheme) => {
    update({ theme: newTheme })
    await saveToSupabase({ theme: newTheme })
  }

  const handleLinkedInSync = () => {
    alert("LinkedIn sync would re-fetch your latest LinkedIn data and update the resume!")
  }

  const toggleEditMode = async () => {
    const newSettings = { ...settings, isEditMode: !settings.isEditMode }
    update({ settings: newSettings })
    await saveToSupabase({ settings: newSettings })
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

      {isSaving && (
        <div className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">Saving...</div>
      )}
    </div>
  )
}