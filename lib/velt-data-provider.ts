import { supabase } from "@/lib/supabase"
import type { EnrichedProfile } from "@/types/enrichedprofile"

export const resumeDataProvider = {
  async get(req: { documentId: string }) {
    const { data, error } = await supabase
      .from("resumes")
      .select("data")
      .eq("id", req.documentId)
      .single()

    if (error) {
      return { data: null, success: false, statusCode: 500, message: error.message }
    }

    return { data: data.data, success: true, statusCode: 200 }
  },

  async save(req: { documentId: string; data: EnrichedProfile }) {
    const { data, error } = await supabase
      .from("resumes")
      .update({ data: req.data, updated_at: new Date().toISOString() })
      .eq("id", req.documentId)
      .select("id")
      .single()

    if (error) {
      return { data: null, success: false, statusCode: 500, message: error.message }
    }

    return { data: { id: data.id }, success: true, statusCode: 200 }
  },

  async delete(req: { documentId: string }) {
    const { error } = await supabase.from("resumes").delete().eq("id", req.documentId)

    if (error) {
      return { data: null, success: false, statusCode: 500, message: error.message }
    }

    return { success: true, statusCode: 200 }
  },
}
