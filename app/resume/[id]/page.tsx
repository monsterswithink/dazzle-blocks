import { Suspense } from "react"
import { ResumeEditor } from "@//resume-blocks/ResumeEditor"
import { VeltProvider } from "@//resume-providers/Velt"
import { Loader2 } from "lucide-react"

export default function ResumePage({ params }: { params: { id: string } }) {
  return (
    <VeltProvider documentId={params.id}>
      <Suspense
        fallback={
          <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
            <div className="space-y-4 text-center">
              <Loader2 className="mx-auto h-12 w-12 animate-spin text-gray-900 dark:text-gray-50" />
              <h1 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-gray-50">Loading resume...</h1>
              <p className="text-gray-500 dark:text-gray-400">Please wait while we load the resume content.</p>
            </div>
          </div>
        }
      >
        <ResumeEditor resumeId={params.id} />
      </Suspense>
    </VeltProvider>
  )
}
