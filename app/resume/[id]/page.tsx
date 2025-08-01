import { notFound } from "next/navigation"
import { ResumeService } from "@/lib/resume-service"
import ResumeViewer from "./ResumeViewer"

export default async function ResumePage({ params }: { params: { id: string } }) {
  const resumeData = await ResumeService.getResumeByPublicId(params.id)
  if (!resumeData) notFound()

  // Pass resumeId as prop to ResumeViewer for dynamic document id
  return <ResumeViewer initialData={resumeData} resumeId={params.id} />
}

// import { notFound } from "next/navigation"
// import { ResumeService } from "@/lib/resume-service"
// import ResumeViewer from "./ResumeViewer"

// interface ResumePageProps {
//   params: { id: string }
// }

// async function getResumeData(id: string) {
//   try {
//     return await ResumeService.getResumeByPublicId(id)
//   } catch (error) {
//     console.error("Error fetching resume data:", error)
//     return null
//   }
// }

// export async function generateMetadata({ params }: ResumePageProps) {
//   const resumeData = await getResumeData(params.id)

//   if (!resumeData) {
//     return {
//       title: "Resume Not Found",
//       description: "The requested resume could not be found.",
//     }
//   }

//   const { profile } = resumeData

//   return {
//     title: `${profile.full_name} - Resume`,
//     description: profile.headline || profile.summary?.slice(0, 160),
//     openGraph: {
//       title: `${profile.full_name} - Resume`,
//       description: profile.headline,
//       images: profile.profile_pic_url ? [profile.profile_pic_url] : [],
//       type: "profile",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: `${profile.full_name} - Resume`,
//       description: profile.headline,
//       images: profile.profile_pic_url ? [profile.profile_pic_url] : [],
//     },
//   }
// }

// export default async function ResumePage({ params }: ResumePageProps) {
//   const resumeData = await getResumeData(params.id)

//   if (!resumeData) {
//     notFound()
//   }

//   return <ResumeViewer initialData={resumeData} resumeId={params.id} />
// }
