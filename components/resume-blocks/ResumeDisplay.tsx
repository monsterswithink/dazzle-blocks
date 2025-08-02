"use client"
import { useRoom } from "@velt/sdk"

interface ResumeDisplayProps {
  resumeData: any // This should be a more specific type based on your resume structure
}

export function ResumeDisplay({ resumeData }: ResumeDisplayProps) {
  const { room } = useRoom()

  // This component would render the resume data in a non-editable format.
  // You can apply different themes or layouts here.
  // For simplicity, we'll just display some key fields.

  if (!resumeData) {
    return <div className="text-center text-gray-500">No resume data to display.</div>
  }

  return (
    <div className="w-full max-w-3xl rounded-lg border bg-white p-8 shadow-lg">
      <h1 className="mb-4 text-3xl font-bold">{resumeData.personal?.name || "Your Name"}</h1>
      <p className="mb-6 text-gray-600">
        {resumeData.personal?.title || "Your Title"} | {resumeData.personal?.email || "email@example.com"} |{" "}
        {resumeData.personal?.phone || "123-456-7890"} |{" "}
        {resumeData.personal?.linkedin || "linkedin.com/in/yourprofile"}
      </p>

      {resumeData.summary && (
        <section className="mb-6">
          <h2 className="mb-2 border-b pb-1 text-xl font-semibold">Summary</h2>
          <div dangerouslySetInnerHTML={{ __html: resumeData.summary }} />
        </section>
      )}

      {resumeData.experience && resumeData.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-2 border-b pb-1 text-xl font-semibold">Experience</h2>
          {resumeData.experience.map((exp: any, index: number) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{exp.title}</h3>
              <p className="text-gray-700">
                {exp.company} | {exp.location}
              </p>
              <p className="text-sm text-gray-500">
                {exp.startDate} - {exp.endDate}
              </p>
              <div className="prose prose-sm mt-1" dangerouslySetInnerHTML={{ __html: exp.description }} />
            </div>
          ))}
        </section>
      )}

      {resumeData.education && resumeData.education.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-2 border-b pb-1 text-xl font-semibold">Education</h2>
          {resumeData.education.map((edu: any, index: number) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-gray-700">
                {edu.university} | {edu.location}
              </p>
              <p className="text-sm text-gray-500">
                {edu.startDate} - {edu.endDate}
              </p>
              <div className="prose prose-sm mt-1" dangerouslySetInnerHTML={{ __html: edu.description }} />
            </div>
          ))}
        </section>
      )}

      {resumeData.skills && resumeData.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-2 border-b pb-1 text-xl font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill: string, index: number) => (
              <span key={index} className="rounded-full bg-gray-200 px-3 py-1 text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {resumeData.projects && resumeData.projects.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-2 border-b pb-1 text-xl font-semibold">Projects</h2>
          {resumeData.projects.map((project: any, index: number) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-500">
                {project.startDate} - {project.endDate}
              </p>
              <div className="prose prose-sm mt-1" dangerouslySetInnerHTML={{ __html: project.description }} />
            </div>
          ))}
        </section>
      )}

      {resumeData.awards && resumeData.awards.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-2 border-b pb-1 text-xl font-semibold">Awards</h2>
          {resumeData.awards.map((award: any, index: number) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{award.title}</h3>
              <p className="text-gray-700">{award.issuer}</p>
              <p className="text-sm text-gray-500">{award.date}</p>
              <div className="prose prose-sm mt-1" dangerouslySetInnerHTML={{ __html: award.description }} />
            </div>
          ))}
        </section>
      )}
    </div>
  )
}
