import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { supabase } from "@/lib/supabase"
import { ResumeEditor } from "@/components/resume-blocks/ResumeEditor"
import { VeltProvider } from "@/components/resume-providers/Velt"
import { notFound } from "next/navigation"

interface ResumePageProps {
  params: {
    id: string
  }
}

export default async function ResumePage({ params }: ResumePageProps) {
  const session = await auth()

  if (!session) {
    redirect("/api/auth/signin")
  }

  const userId = session.user?.id
  if (!userId) {
    redirect("/api/auth/signin")
  }

  const resumeId = params.id

  let resumeContent: any = null

  try {
    const { data: resume, error: fetchError } = await supabase
      .from("resumes")
      .select("content")
      .eq("id", resumeId)
      .eq("user_id", userId) // Ensure user owns the resume
      .single()

    if (fetchError) {
      console.error("Error fetching resume:", fetchError)
      if (fetchError.code === "PGRST116") {
        notFound()
      }
      notFound()
    }

    if (!resume) {
      notFound()
    }

    resumeContent = resume.content
  } catch (e) {
    console.error("Unexpected error in resume fetching:", e)
    notFound()
  }

  const veltClient = new VeltClient({
    apiKey: process.env.NEXT_PUBLIC_VELT_PUBLIC_KEY!,
    userId,
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
