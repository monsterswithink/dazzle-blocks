import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { ResumeEditor } from "@/components/resume-blocks/ResumeEditor"
import { getResumeById } from "@/lib/resume-service"

export default async function EditorPage() {
  const session = await auth()

  if (!session) {
    redirect("/auth/signin")
  }

  // For demonstration, we'll use a fixed resume ID or fetch the user's default resume
  // In a real application, you'd fetch this based on the user or a URL parameter
  const defaultResumeId = "clx0123456789abcdefg" // Example ID, replace with dynamic logic

  const resumeData = await getResumeById(defaultResumeId)

  if (!resumeData) {
    // Handle case where resume is not found, e.g., create a new one or show an error
    // For now, we'll redirect to a generic error or home page
    redirect("/")
  }

  return (
    <div className="h-screen flex flex-col">
      <ResumeEditor resumeId={defaultResumeId} initialResumeData={resumeData} />
    </div>
  )
}
