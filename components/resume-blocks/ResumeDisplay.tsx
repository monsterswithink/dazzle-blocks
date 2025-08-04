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
    full_name,
    occupation,
    personal_emails,
    personal_numbers,
    vanityUrl,
    summary,
    experiences,
    education,
    skills,
    accomplishment_projects,
    accomplishment_honors_awards,
  } = resumeData

  const getFormattedDate = (d: { formatted: string } | null) =>
    d?.formatted || "Present"

  return (
    <div className="w-full max-w-3xl rounded-lg border bg-white p-8 shadow-lg">
      <h1 className="mb-4 text-3xl font-bold">{full_name || "Your Name"}</h1>
      <p className="mb-6 text-gray-600">
        {occupation || "Your Title"} | {personal_emails?.[0] || "email@example.com"} |{" "}
        {personal_numbers?.[0] || "123-456-7890"} |{" "}
        {vanityUrl ? `linkedin.com/in/${vanityUrl}` : "linkedin.com/in/yourprofile"}
      </p>

      {!!summary && (
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
                {getFormattedDate(exp.starts_at)} – {getFormattedDate(exp.ends_at)} ({exp.duration})
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
                {edu.school} {edu.location ? `| ${edu.location}` : ""}
              </p>
              <p className="text-sm text-gray-500">
                {edu.starts_at?.year} – {edu.ends_at?.year || "Present"}
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

      {accomplishment_projects?.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-2 border-b pb-1 text-xl font-semibold">Projects</h2>
          {accomplishment_projects.map((proj, i) => (
            <div key={i} className="mb-4">
              <h3 className="font-semibold">{proj.title}</h3>
              <p className="text-sm text-gray-500">
                {proj.starts_at?.year || "Start"} – {proj.ends_at?.year || "Present"}
              </p>
              <div className="prose prose-sm mt-1" dangerouslySetInnerHTML={{ __html: proj.description ?? "" }} />
            </div>
          ))}
        </section>
      )}

      {accomplishment_honors_awards?.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-2 border-b pb-1 text-xl font-semibold">Awards</h2>
          {accomplishment_honors_awards.map((award, i) => (
            <div key={i} className="mb-4">
              <h3 className="font-semibold">{award.title}</h3>
              <p className="text-gray-700">{award.issuer}</p>
              <p className="text-sm text-gray-500">{award.issued_on?.year}</p>
              <div className="prose prose-sm mt-1" dangerouslySetInnerHTML={{ __html: award.description ?? "" }} />
            </div>
          ))}
        </section>
      )}
    </div>
  )
}
