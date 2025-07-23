"use client"

import type { EnrichedProfile, ResumeTheme } from "@/types/profile"
import { EditableText } from "@/resume-blocks/EditableText"
import { SkillsChart } from "@/resume-blocks/Skills"
import { Button } from "@/ui/button"
import { Mail, Linkedin, Globe, MapPin, Calendar } from "lucide-react"
import Image from "next/image"

interface ResumeDisplayProps {
  profile: EnrichedProfile
  theme: ResumeTheme
  isEditMode: boolean
  onProfileUpdate: (updates: Partial<EnrichedProfile>) => void
}

export function ResumeDisplay({ profile, theme, isEditMode, onProfileUpdate }: ResumeDisplayProps) {
  const formatDate = (dateObj: any) => {
    if (!dateObj) return "Present"
    const { month, year } = dateObj
    if (!month || !year) return "Present"
    const date = new Date(year, month - 1)
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
  }

  return (
    <div
      className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden resume-container"
      style={{
        fontFamily: theme.fonts.body,
        color: theme.colors.text,
      }}
    >
      {/* Header Section */}
      <div className="relative h-32" style={{ backgroundColor: theme.colors.primary }}>
        {profile.background_cover_image_url && (
          <Image
            src={profile.background_cover_image_url || "/placeholder.svg"}
            alt="Background"
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative px-8 pb-8">
        {/* Profile Picture */}
        <div className="absolute -top-16 left-8">
          <div className="relative">
            <Image
              src={profile.profile_pic_url || "/placeholder.svg?height=128&width=128&query=professional+headshot"}
              alt={profile.full_name}
              width={128}
              height={128}
              className="rounded-full border-4 border-white shadow-lg"
            />
            {isEditMode && (
              <Button
                size="sm"
                className="absolute bottom-0 right-0 rounded-full"
                style={{ backgroundColor: theme.colors.accent }}
              >
                📷
              </Button>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="pt-20">
          {/* Name and Title */}
          <div className="mb-6">
            <EditableText
              content={profile.full_name}
              isEditable={isEditMode}
              onUpdate={(content) => onProfileUpdate({ full_name: content })}
              className="text-3xl font-bold mb-2"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary,
              }}
            />
            <EditableText
              content={profile.headline}
              isEditable={isEditMode}
              onUpdate={(content) => onProfileUpdate({ headline: content })}
              className="text-xl text-gray-600 mb-2"
            />
            <div className="flex items-center text-gray-500 mb-4">
              <MapPin className="h-4 w-4 mr-1" />
              <span>
                {profile.city}, {profile.state}
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 mb-8">
            {profile.personal_emails?.[0] && (
              <Button variant="outline" size="sm" asChild>
                <a href={`mailto:${profile.personal_emails[0]}`}>
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </a>
              </Button>
            )}
            <Button variant="outline" size="sm" asChild>
              <a
                href={`https://linkedin.com/in/${profile.public_identifier}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            {profile.extra?.website && (
              <Button variant="outline" size="sm" asChild>
                <a href={profile.extra.website} target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4 mr-2" />
                  Website
                </a>
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Summary */}
              <section>
                <h2
                  className="text-2xl font-bold mb-4 pb-2 border-b"
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.primary,
                    borderColor: theme.colors.secondary,
                  }}
                >
                  About
                </h2>
                <EditableText
                  content={profile.summary}
                  isEditable={isEditMode}
                  onUpdate={(content) => onProfileUpdate({ summary: content })}
                  className="text-gray-700 leading-relaxed"
                />
              </section>

              {/* Experience */}
              <section>
                <h2
                  className="text-2xl font-bold mb-4 pb-2 border-b"
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.primary,
                    borderColor: theme.colors.secondary,
                  }}
                >
                  Experience
                </h2>
                <div className="space-y-6">
                  {profile.experiences?.map((exp, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-gray-200">
                      <div
                        className="absolute -left-2 top-0 w-4 h-4 rounded-full"
                        style={{ backgroundColor: theme.colors.accent }}
                      />
                      <div className="mb-2">
                        <EditableText
                          content={exp.title || ""}
                          isEditable={isEditMode}
                          className="text-lg font-semibold"
                        />
                        <EditableText
                          content={exp.company || ""}
                          isEditable={isEditMode}
                          className="text-gray-600 font-medium"
                        />
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>
                            {formatDate(exp.starts_at)} - {formatDate(exp.ends_at)}
                          </span>
                          {exp.location && (
                            <>
                              <span className="mx-2">•</span>
                              <span>{exp.location}</span>
                            </>
                          )}
                        </div>
                      </div>
                      {exp.description && (
                        <EditableText
                          content={exp.description}
                          isEditable={isEditMode}
                          className="text-gray-700 text-sm leading-relaxed"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              {profile.education?.length > 0 && (
                <section>
                  <h2
                    className="text-2xl font-bold mb-4 pb-2 border-b"
                    style={{
                      fontFamily: theme.fonts.heading,
                      color: theme.colors.primary,
                      borderColor: theme.colors.secondary,
                    }}
                  >
                    Education
                  </h2>
                  <div className="space-y-4">
                    {profile.education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-gray-200 pl-4">
                        <EditableText content={edu.degree || ""} isEditable={isEditMode} className="font-semibold" />
                        <EditableText content={edu.school || ""} isEditable={isEditMode} className="text-gray-600" />
                        <div className="text-sm text-gray-500">
                          {formatDate(edu.starts_at)} - {formatDate(edu.ends_at)}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Skills */}
              {profile.skills?.length > 0 && <SkillsChart skills={profile.skills} />}

              {/* Languages */}
              {profile.languages?.length > 0 && (
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Languages</h3>
                  <div className="space-y-2">
                    {profile.languages.map((lang, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-sm font-medium">{lang.name}</span>
                        <span className="text-xs text-gray-500">{lang.proficiency}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Certifications */}
              {profile.certifications?.length > 0 && (
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Certifications</h3>
                  <div className="space-y-3">
                    {profile.certifications.slice(0, 5).map((cert, index) => (
                      <div key={index} className="text-sm">
                        <div className="font-medium">{cert.name}</div>
                        <div className="text-gray-600">{cert.authority}</div>
                        <div className="text-xs text-gray-500">{formatDate(cert.starts_at)}</div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
