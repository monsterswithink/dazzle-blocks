import type { Profile } from "@/types/profile"
import { cn } from "@/lib/utils"

interface ResumeDisplayProps {
  resumeData: Profile
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

  return (
    <div
      className={cn(
        "w-full h-full p-8 bg-white dark:bg-gray-800 shadow-lg overflow-y-auto",
        themeClasses[theme as keyof typeof themeClasses],
      )}
    >
      <header className="text-center mb-8">
        <h1 className={cn("text-4xl font-bold mb-1", themeClasses[theme as keyof typeof themeClasses])}>
          {resumeData.personal.name}
        </h1>
        <p className={cn("text-xl text-gray-600 dark:text-gray-400", themeClasses[theme as keyof typeof themeClasses])}>
          {resumeData.personal.title}
        </p>
        <div className="flex justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-2">
          <span>{resumeData.personal.email}</span>
          <span>{resumeData.personal.phone}</span>
          {resumeData.personal.linkedin && (
            <a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          )}
          {resumeData.personal.github && (
            <a href={resumeData.personal.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
          )}
        </div>
      </header>

      <section className="mb-6">
        <h2 className={cn(sectionTitleClasses[theme as keyof typeof sectionTitleClasses])}>About Me</h2>
        <div
          className="prose dark:prose-invert max-w-none text-base"
          dangerouslySetInnerHTML={{ __html: resumeData.about.description }}
        />
      </section>

      <section className="mb-6">
        <h2 className={cn(sectionTitleClasses[theme as keyof typeof sectionTitleClasses])}>Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <h3 className={cn(itemTitleClasses[theme as keyof typeof itemTitleClasses])}>{exp.title}</h3>
            <p className={cn(itemSubtitleClasses[theme as keyof typeof itemSubtitleClasses])}>
              {exp.company} | {exp.years}
            </p>
            <div
              className="prose dark:prose-invert max-w-none text-sm mt-1"
              dangerouslySetInnerHTML={{ __html: exp.description }}
            />
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className={cn(sectionTitleClasses[theme as keyof typeof sectionTitleClasses])}>Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <h3 className={cn(itemTitleClasses[theme as keyof typeof itemTitleClasses])}>{edu.degree}</h3>
            <p className={cn(itemSubtitleClasses[theme as keyof typeof itemSubtitleClasses])}>
              {edu.university} | {edu.years}
            </p>
            <div
              className="prose dark:prose-invert max-w-none text-sm mt-1"
              dangerouslySetInnerHTML={{ __html: edu.description }}
            />
          </div>
        ))}
      </section>

      <section>
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
              {skill.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
