"use client"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

interface ResumeDisplayProps {
  resumeData: any
  theme: string
}

export function ResumeDisplay({ resumeData, theme }: ResumeDisplayProps) {
  if (!resumeData) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
        No resume data to display.
      </div>
    )
  }

  const themeClasses = {
    modern: "font-sans text-gray-800 dark:text-gray-200",
    classic: "font-serif text-gray-700 dark:text-gray-300",
    minimal: "font-mono text-gray-900 dark:text-gray-100",
    creative: "font-display text-gray-700 dark:text-gray-300",
  }

  const getThemeSpecificStyles = (section: string) => {
    switch (theme) {
      case "modern":
        return {
          header: "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1 mb-4",
          subheading: "text-lg font-semibold text-gray-700 dark:text-gray-300",
          text: "text-base",
        }
      case "classic":
        return {
          header: "text-indigo-700 dark:text-indigo-300 border-b border-indigo-700 dark:border-indigo-300 pb-1 mb-3",
          subheading: "text-lg font-bold text-gray-600 dark:text-gray-400",
          text: "text-base",
        }
      case "minimal":
        return {
          header: "text-gray-900 dark:text-gray-100 text-xl font-bold mb-3",
          subheading: "text-base font-semibold text-gray-800 dark:text-gray-200",
          text: "text-sm",
        }
      case "creative":
        return {
          header: "text-purple-600 dark:text-purple-400 text-2xl font-extrabold mb-4",
          subheading: "text-lg font-bold text-gray-600 dark:text-gray-400",
          text: "text-base",
        }
      default:
        return {
          header: "text-gray-900 dark:text-gray-100 text-xl font-bold mb-4",
          subheading: "text-lg font-semibold text-gray-700 dark:text-gray-300",
          text: "text-base",
        }
    }
  }

  const styles = getThemeSpecificStyles(theme)

  return (
    <div
      className={cn(
        "p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-4xl mx-auto",
        themeClasses[theme as keyof typeof themeClasses],
      )}
    >
      {/* Personal Information */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold mb-1">{resumeData.personal.name}</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">{resumeData.personal.title}</p>
        <div className="flex justify-center items-center flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
          {resumeData.personal.email && (
            <span className="flex items-center gap-1">
              <Mail className="h-4 w-4" /> {resumeData.personal.email}
            </span>
          )}
          {resumeData.personal.phone && (
            <span className="flex items-center gap-1">
              <Phone className="h-4 w-4" /> {resumeData.personal.phone}
            </span>
          )}
          {resumeData.personal.linkedin && (
            <a
              href={`https://${resumeData.personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          )}
          {resumeData.personal.github && (
            <a
              href={`https://${resumeData.personal.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          )}
        </div>
      </div>

      <Separator className="my-6" />

      {/* About Me */}
      {resumeData.about?.description && (
        <section className="mb-6">
          <h3 className={cn("text-xl font-bold", styles.header)}>About Me</h3>
          <div
            className={cn("prose dark:prose-invert max-w-none", styles.text)}
            dangerouslySetInnerHTML={{ __html: resumeData.about.description }}
          />
        </section>
      )}

      {/* Experience */}
      {resumeData.experience && resumeData.experience.length > 0 && (
        <section className="mb-6">
          <h3 className={cn("text-xl font-bold", styles.header)}>Experience</h3>
          {resumeData.experience.map((exp: any) => (
            <div key={exp.id} className="mb-4 last:mb-0">
              <h4 className={cn("font-semibold", styles.subheading)}>{exp.title}</h4>
              <p className="text-gray-600 dark:text-gray-400">
                {exp.company} | {exp.years}
              </p>
              <div
                className={cn("prose dark:prose-invert max-w-none text-sm", styles.text)}
                dangerouslySetInnerHTML={{ __html: exp.description }}
              />
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {resumeData.education && resumeData.education.length > 0 && (
        <section className="mb-6">
          <h3 className={cn("text-xl font-bold", styles.header)}>Education</h3>
          {resumeData.education.map((edu: any) => (
            <div key={edu.id} className="mb-4 last:mb-0">
              <h4 className={cn("font-semibold", styles.subheading)}>{edu.degree}</h4>
              <p className="text-gray-600 dark:text-gray-400">
                {edu.university} | {edu.years}
              </p>
              <div
                className={cn("prose dark:prose-invert max-w-none text-sm", styles.text)}
                dangerouslySetInnerHTML={{ __html: edu.description }}
              />
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {resumeData.skills && resumeData.skills.length > 0 && (
        <section>
          <h3 className={cn("text-xl font-bold", styles.header)}>Skills</h3>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill: any) => (
              <Badge key={skill.id} variant="secondary" className="px-3 py-1 text-sm">
                {skill.name}
              </Badge>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
