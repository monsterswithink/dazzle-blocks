"use client"

import type { ProcessedProfile } from "@/types/profile"
import { cn } from "@/lib/utils"

interface ResumeDisplayProps {
  resumeData: ProcessedProfile | null
  theme?: string
}

export function ResumeDisplay({ resumeData, theme = "modern" }: ResumeDisplayProps) {
  if (!resumeData) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
        No resume data to display.
      </div>
    )
  }

  const themeClasses = {
    modern: "font-sans text-gray-800 dark:text-gray-200",
    classic: "font-serif text-gray-800 dark:text-gray-200",
    minimal: "font-mono text-gray-800 dark:text-gray-200",
    creative: "font-display text-gray-800 dark:text-gray-200",
  }

  const sectionTitleClasses = {
    modern: "text-xl font-bold border-b-2 border-gray-300 pb-1 mb-4",
    classic: "text-xl font-bold border-b border-gray-400 pb-1 mb-4 uppercase",
    minimal: "text-lg font-semibold mb-3",
    creative: "text-2xl font-extrabold text-blue-600 dark:text-blue-400 mb-4",
  }

  const itemTitleClasses = {
    modern: "font-semibold text-lg",
    classic: "font-bold text-lg",
    minimal: "font-medium text-base",
    creative: "font-bold text-xl text-purple-600 dark:text-purple-400",
  }

  const itemSubtitleClasses = {
    modern: "text-gray-600 dark:text-gray-400",
    classic: "italic text-gray-700 dark:text-gray-300",
    minimal: "text-sm text-gray-500 dark:text-gray-400",
    creative: "text-md text-pink-600 dark:text-pink-400",
  }

  const getFormattedDate = (d: { formatted: string } | null) => d?.formatted || "Present"

  return (
    <div
      className={cn(
        "w-full h-full p-8 bg-white dark:bg-gray-800 shadow-lg overflow-y-auto print:shadow-none",
        themeClasses[theme as keyof typeof themeClasses] || themeClasses.modern,
      )}
    >
      <header className="text-center mb-8">
        <h1 className={cn("text-4xl font-bold mb-1", themeClasses[theme as keyof typeof themeClasses])}>
          {resumeData.full_name || "Your Name"}
        </h1>
        <p className={cn("text-xl text-gray-600 dark:text-gray-400", themeClasses[theme as keyof typeof themeClasses])}>
          {resumeData.occupation || "Your Title"}
        </p>
        <div className="flex justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-2 flex-wrap">
          {resumeData.personal_emails?.[0] && <span>{resumeData.personal_emails[0]}</span>}
          {resumeData.personal_numbers?.[0] && <span>{resumeData.personal_numbers[0]}</span>}
          {resumeData.public_identifier && (
            <a
              href={`https://linkedin.com/in/${resumeData.public_identifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          )}
          {resumeData.extra?.github_profile_id && (
            <a
              href={`https://github.com/${resumeData.extra.github_profile_id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          )}
        </div>
      </header>

      {resumeData.summary && (
        <section className="mb-6">
          <h2 className={cn(sectionTitleClasses[theme as keyof typeof sectionTitleClasses])}>Summary</h2>
          <div className="prose dark:prose-invert max-w-none text-base">
            <p>{resumeData.summary}</p>
          </div>
        </section>
      )}

      {resumeData.experiences && resumeData.experiences.length > 0 && (
        <section className="mb-6">
          <h2 className={cn(sectionTitleClasses[theme as keyof typeof sectionTitleClasses])}>Experience</h2>
          {resumeData.experiences.map((exp, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <h3 className={cn(itemTitleClasses[theme as keyof typeof itemTitleClasses])}>{exp.title}</h3>
              <p className={cn(itemSubtitleClasses[theme as keyof typeof itemSubtitleClasses])}>
                {exp.company} {exp.location ? `| ${exp.location}` : ""}
              </p>
              <p className="text-sm text-gray-500">
                {getFormattedDate(exp.starts_at)} – {getFormattedDate(exp.ends_at)} ({exp.duration})
              </p>
              {exp.description && (
                <div className="prose dark:prose-invert max-w-none text-sm mt-1">
                  <p>{exp.description}</p>
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {resumeData.education && resumeData.education.length > 0 && (
        <section className="mb-6">
          <h2 className={cn(sectionTitleClasses[theme as keyof typeof sectionTitleClasses])}>Education</h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <h3 className={cn(itemTitleClasses[theme as keyof typeof itemTitleClasses])}>{edu.degree}</h3>
              <p className={cn(itemSubtitleClasses[theme as keyof typeof itemSubtitleClasses])}>
                {edu.school} {edu.location ? `| ${edu.location}` : ""}
              </p>
              <p className="text-sm text-gray-500">
                {edu.starts_at?.year} – {edu.ends_at?.year || "Present"}
              </p>
              {edu.description && (
                <div className="prose dark:prose-invert max-w-none text-sm mt-1">
                  <p>{edu.description}</p>
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {resumeData.skills && resumeData.skills.length > 0 && (
        <section className="mb-6">
          <h2 className={cn(sectionTitleClasses[theme as keyof typeof sectionTitleClasses])}>Skills</h2>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill, index) => (
              <span
                key={index}
                className={cn("px-3 py-1 rounded-full text-sm", {
                  "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200": theme === "modern",
                  "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200": theme === "classic",
                  "border border-gray-300 dark:border-gray-600": theme === "minimal",
                  "bg-gradient-to-r from-purple-400 to-pink-400 text-white": theme === "creative",
                })}
              >
                {typeof skill === "string" ? skill : skill.name || skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {resumeData.accomplishment_projects && resumeData.accomplishment_projects.length > 0 && (
        <section className="mb-6">
          <h2 className={cn(sectionTitleClasses[theme as keyof typeof sectionTitleClasses])}>Projects</h2>
          {resumeData.accomplishment_projects.map((proj, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <h3 className={cn(itemTitleClasses[theme as keyof typeof itemTitleClasses])}>{proj.title}</h3>
              <p className="text-sm text-gray-500">
                {proj.starts_at?.year || "Start"} – {proj.ends_at?.year || "Present"}
              </p>
              {proj.url && (
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  View Project
                </a>
              )}
              {proj.description && (
                <div className="prose dark:prose-invert max-w-none text-sm mt-1">
                  <p>{proj.description}</p>
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {resumeData.accomplishment_honors_awards && resumeData.accomplishment_honors_awards.length > 0 && (
        <section className="mb-6">
          <h2 className={cn(sectionTitleClasses[theme as keyof typeof sectionTitleClasses])}>Awards</h2>
          {resumeData.accomplishment_honors_awards.map((award, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <h3 className={cn(itemTitleClasses[theme as keyof typeof itemTitleClasses])}>{award.title}</h3>
              <p className={cn(itemSubtitleClasses[theme as keyof typeof itemSubtitleClasses])}>{award.issuer}</p>
              <p className="text-sm text-gray-500">{award.issued_on?.year}</p>
              {award.description && (
                <div className="prose dark:prose-invert max-w-none text-sm mt-1">
                  <p>{award.description}</p>
                </div>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  )
}
