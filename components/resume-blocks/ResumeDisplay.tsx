"use client"

import { useRoom } from "@veltdev/react"
import type { ProcessedProfile } from "@/types/profile"

interface ResumeDisplayProps {
  resumeData: ProcessedProfile | null
}

export function ResumeDisplay({ resumeData }: ResumeDisplayProps) {
  const { room } = useRoom()

  if (!resumeData) {
    return <div className="text-center text-gray-500">No resume data available.</div>
  }

  const {
    name,
    email,
    phone,
    linkedinUrl,
    title,
    summary,
    experiences,
    education,
    skills,
    projects,
    awards,
  } = resumeData

  return (
    <div className="w-full max-w-3xl rounded-lg border bg-white p-8 shadow-lg">
      <h1 className="mb-4 text-3xl font-bold">{name || "Your Name"}</h1>
      <p className="mb-6 text-gray-600">
        {title || "Your Title"} | {email || "email@example.com"} | {phone || "123-456-7890"} |{" "}
        {linkedinUrl || "linkedin.com/in/yourprofile"}
      </p>

      {summary && (
        <section className="mb-6">
          <h2 className="mb-2 border-b pb-1 text-xl font-semibold">Summary</h2>
          <div className="prose prose-sm" dangerouslySetInnerHTML={{ __html: summary }} />
        </section>
      )}

      {experiences?.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-2 border-b pb-1 text-xl font-semibold">Experience</h2>
          {experiences.map((exp, i) => (
            <div key={i} className="mb-4">
              <h3 className="font-semibold">{exp.title}</h3>
              <p className="text-gray-700">
                {exp.company} {exp.location ? `| ${exp.location}` : ""}
              </p>
              <p className="text-sm text-gray-500">
                {exp.startDate} – {exp.endDate || "Present"}
              </p>
              <div className="prose prose-sm mt-1" dangerouslySetInnerHTML={{ __html: exp.description ?? "" }} />
            </div>
          ))}
        </section>
      )}

      {education?.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-2 border-b pb-1 text-xl font-semibold">Education</h2>
          {education.map((edu, i) => (
            <div key={i} className="mb-4">
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-gray-700">
                {edu.university} {edu.location ? `| ${edu.location}` : ""}
              </p>
              <p className="text-sm text-gray-500">
                {edu.startDate} – {edu.endDate || "Present"}
              </p>
              <div className="prose prose-sm mt-1" dangerouslySetInnerHTML={{ __html: edu.description ?? "" }} />
            </div>
          ))}
        </section>
      )}

      {skills?.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-2 border-b pb-1 text-xl font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span key={i} className="rounded-full bg-gray-200 px-3 py-1 text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {projects?.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-2 border-b pb-1 text-xl font-semibold">Projects</h2>
          {projects.map((project, i) => (
            <div key={i} className="mb-4">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-500">
                {project.startDate} – {project.endDate || "Present"}
              </p>
              <div className="prose prose-sm mt-1" dangerouslySetInnerHTML={{ __html: project.description ?? "" }} />
            </div>
          ))}
        </section>
      )}

      {awards?.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-2 border-b pb-1 text-xl font-semibold">Awards</h2>
          {awards.map((award, i) => (
            <div key={i} className="mb-4">
              <h3 className="font-semibold">{award.title}</h3>
              <p className="text-gray-700">{award.issuer}</p>
              <p className="text-sm text-gray-500">{award.date}</p>
              <div className="prose prose-sm mt-1" dangerouslySetInnerHTML={{ __html: award.description ?? "" }} />
            </div>
          ))}
        </section>
      )}
    </div>
  )
}