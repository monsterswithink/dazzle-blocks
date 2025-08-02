import { supabase } from "./supabase"
import type { EnrichedProfile, ResumeTheme } from "@/types/profile"

export interface ResumeData {
  profile: EnrichedProfile
  theme: ResumeTheme
  settings: {
    isEditMode: boolean
    lastModified: string
  }
}

export class ResumeService {
  static async getResumeByPublicId(publicId: string): Promise<ResumeData | null> {
    try {
      const { data, error } = await supabase.from("resumes").select("*").eq("public_identifier", publicId).single()

      if (error) {
        console.error("Error fetching resume:", error)
        return null
      }

      if (!data) return null

      return {
        profile: data.profile_data,
        theme: data.theme_data,
        settings: data.settings,
      }
    } catch (error) {
      console.error("Error in getResumeByPublicId:", error)
      return null
    }
  }

  static async saveResume(publicId: string, resumeData: ResumeData): Promise<boolean> {
    try {
      const { error } = await supabase.from("resumes").upsert({
        public_identifier: publicId,
        profile_data: resumeData.profile,
        theme_data: resumeData.theme,
        settings: resumeData.settings,
        updated_at: new Date().toISOString(),
      })

      if (error) {
        console.error("Error saving resume:", error)
        return false
      }

      return true
    } catch (error) {
      console.error("Error in saveResume:", error)
      return false
    }
  }

  static async createResumeFromEnrichedData(enrichedData: any): Promise<string | null> {
    try {
      // Make sure we have a valid public_identifier
      const publicId = enrichedData.public_identifier || enrichedData.id

      if (!publicId) {
        console.error("No public_identifier found in enriched data:", enrichedData)
        return null
      }

      console.log("Creating resume with public ID:", publicId) // Debug log

      const resumeData: ResumeData = {
        profile: enrichedData,
        theme: {
          name: "Modern",
          colors: {
            primary: "#2563eb",
            secondary: "#e2e8f0",
            accent: "#3b82f6",
            background: "#ffffff",
            text: "#1f2937",
          },
          fonts: {
            heading: "Inter, sans-serif",
            body: "Inter, sans-serif",
          },
          layout: {
            spacing: "1.5rem",
            borderRadius: "0.5rem",
          },
        },
        settings: {
          isEditMode: false,
          lastModified: new Date().toISOString(),
        },
      }

      const success = await this.saveResume(publicId, resumeData)
      return success ? publicId : null
    } catch (error) {
      console.error("Error creating resume from enriched data:", error)
      return null
    }
  }
}
