import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { VeltProvider } from "@/components/resume-providers/Velt"
import { ResumeEditor } from "@/components/resume-blocks/ResumeEditor"

export default async function EditorPage() {
  const session = await auth()

  if (!session) {
    redirect("/auth/signin")
  }

  const documentId = `resume-${session.user.id}`

  return (
    <VeltProvider documentId={documentId}>
      <div className="min-h-screen bg-gray-50">
        <ResumeEditor />
      </div>
    </VeltProvider>
  )
}
