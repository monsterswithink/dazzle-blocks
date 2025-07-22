import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface ResumeProfile {
  id: string
  public_identifier: string
  profile_data: any // The enriched JSON from EnrichLayer
  theme_data: any
  settings: any
  created_at: string
  updated_at: string
}
