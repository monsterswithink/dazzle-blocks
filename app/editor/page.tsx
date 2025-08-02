import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { supabase } from "@/lib/supabase"
import { ResumeEditor } from "@/components/resume-blocks/ResumeEditor"
import { initialResumeData } from "@/public/data/initial-resume-data"
import { VeltProvider } from "@/components/resume-providers/Velt"

export default async function EditorPage() {
  const session = await auth()

  if (!session) {
    redirect("/api/auth/signin")
  }

  const userId = session.user?.id
  if (!userId) {
    redirect("/api/auth/signin")
  }

  // Fetch or create a resume for the user
  let resumeId: string | null = null
  let resumeContent: any = initialResumeData // Default to initial data

  try {
    const { data: existingResumes, error: fetchError } = await supabase
      .from("resumes")
      .select("id, content")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(1)

    if (fetchError && fetchError.code !== "PGRST116") {
      // PGRST116 means "no rows found"
      console.error("Error fetching existing resumes:", fetchError)
      // Continue with initial data if fetch fails
    }

    if (existingResumes && existingResumes.length > 0) {
      resumeId = existingResumes[0].id
      resumeContent = existingResumes[0].content
    } else {
      // Create a new resume if none exists
      const { data: newResume, error: createError } = await supabase
        .from("resumes")
        .insert({ user_id: userId, content: initialResumeData })
        .select("id, content")
        .single()

      if (createError) {
        console.error("Error creating new resume:", createError)
        // Fallback to initial data if creation fails
      } else if (newResume) {
        resumeId = newResume.id
        resumeContent = newResume.content
      }
    }
  } catch (e) {
    console.error("Unexpected error in resume fetching/creation:", e)
    // Ensure resumeId is null if an error occurred and no resume was found/created
    resumeId = null
  }

  // If no resumeId could be established, we cannot proceed with Velt collaboration
  if (!resumeId) {
    return (
      <div className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-red-600">Error Loading Resume</h1>
        <p className="text-gray-700">Could not load or create a resume. Please try again later.</p>
        <p className="text-sm text-gray-500">If the problem persists, contact support.</p>
      </div>
    )
  }

  // Initialize Velt client for server-side rendering (optional, but good practice)
  // This ensures the VeltProvider has a client instance ready.
  const veltClient = new VeltClient({
    apiKey: process.env.VELT_PUBLIC_KEY!,
    userId: userId,
    userName: session.user?.name || "Anonymous",
    userAvatar: session.user?.image || "/placeholder-user.png",
  })

  return (
    <VeltProvider client={veltClient} documentId={resumeId}>
      <main className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center p-4 md:p-6 lg:p-8">
        <ResumeEditor initialResumeData={resumeContent} resumeId={resumeId} />
      </main>
    </VeltProvider>
  )
}
