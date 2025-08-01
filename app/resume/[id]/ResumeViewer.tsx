"use client"

import { useEffect, useCallback } from "react"
import { useSetDocument, useDocument } from "@veltdev/react"
import { FloatingToolbar } from "@/resume-tools/FloatingToolbar"
import { ResumeDisplay } from "@/resume-blocks/ResumeDisplay"
import { ResumeService, type ResumeData } from "@/lib/resume-service"
import { supabase } from "@/lib/supabase"
import type { EnrichedProfile, ResumeTheme } from "@/types/profile"

export default function ResumeViewer({ initialData, resumeId }: { initialData: ResumeData, resumeId: string }) {
  // 1. Register this document with Velt for collaboration
  useSetDocument(
    initialData
      ? { id: `resume-${resumeId}`, initialState: initialData }
      : null
  )

  // 2. Use Velt collaborative document state
  const { state, update } = useDocument<ResumeData>()

  // 3. Supabase realtime subscription (to update Velt state if db changes externally)
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

  // 4. Save to Supabase on change
  const saveToSupabase = useCallback(async (updatedData: Partial<ResumeData>) => {
    const currentData: ResumeData = {
      profile: state.profile,
      theme: state.theme,
      settings: state.settings,
      ...updatedData,
    }
    await ResumeService.saveResume(resumeId, currentData)
  }, [resumeId, state.profile, state.theme, state.settings])

  // 5. Editing handlers update Velt state and persist
  const handleProfileUpdate = async (updates: Partial<EnrichedProfile>) => {
    update({
      profile: { ...state.profile, ...updates },
      settings: { ...state.settings, lastModified: new Date().toISOString() },
    })
    await saveToSupabase({
      profile: { ...state.profile, ...updates },
      settings: { ...state.settings, lastModified: new Date().toISOString() },
    })
  }

  const handleThemeChange = async (newTheme: ResumeTheme) => {
    update({ theme: newTheme })
    await saveToSupabase({ theme: newTheme })
  }

  const toggleEditMode = async () => {
    const newSettings = { ...state.settings, isEditMode: !state.settings.isEditMode }
    update({ settings: newSettings })
    await saveToSupabase({ settings: newSettings })
  }

  const handleLinkedInSync = () => {
    alert("LinkedIn sync handled elsewhere!")
  }

  // 6. Loading state
  if (!state.profile || !state.theme || !state.settings) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading resume...</p>
        </div>
      </div>
    )
  }

  // 7. Collaborative UI
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <ResumeDisplay
        profile={state.profile}
        theme={state.theme}
        isEditMode={state.settings.isEditMode}
        onProfileUpdate={handleProfileUpdate}
      />
      <div data-floating-toolbar>
        <FloatingToolbar
          isEditMode={state.settings.isEditMode}
          onToggleEdit={toggleEditMode}
          onThemeChange={handleThemeChange}
          onLinkedInSync={handleLinkedInSync}
          currentTheme={state.theme}
        />
      </div>
    </div>
  )
}
