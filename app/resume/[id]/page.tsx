import { notFound } from "next/navigation"
import { getResumeById } from "@/lib/resume-service"
import { ResumeDisplay } from "@/components/resume-blocks/ResumeDisplay"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

interface ResumeViewPageProps {
  params: {
    id: string
  }
}

export default async function ResumeViewPage({ params }: ResumeViewPageProps) {
  const session = await auth()

  if (!session) {
    redirect("/auth/signin")
  }

  const resumeId = params.id
  const resumeData = await getResumeById(resumeId)

  if (!resumeData) {
    notFound()
  }

  // You might want to add logic here to check if the current user has permission to view this resume
  // For now, we'll assume if it's found, it's viewable.

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 py-12">
      <ResumeDisplay resumeData={resumeData} theme="modern" /> {/* Default theme for view mode */}
    </div>
  )
}
