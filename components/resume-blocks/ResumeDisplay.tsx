"use client"

import Image from "next/image"
import { Mail, Linkedin, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GenericCollapsibleBlock } from "@/resume-blocks/GenericCollapsibleBlock"
import { SkillsChart } from "@/resume-blocks/Skills"
import { EditableText } from "@/resume-blocks/EditableText"
import type { EnrichedProfile, ResumeTheme } from "@/types/profile"

interface ResumeDisplayProps {
  profile: EnrichedProfile
  theme: ResumeTheme
  isEditMode?: boolean
  onProfileUpdate?: (updates: Partial<EnrichedProfile>) => void
}

export function ResumeDisplay({
  profile,
  theme,
  isEditMode = false,
  onProfileUpdate,
}: ResumeDisplayProps) {
  return (
    <div
      className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden resume-container"
      style={{
        fontFamily: theme.fonts.body,
        color: theme.colors.text,
      }}
    >
      {/* Header */}
      <div className="relative h-32" style={{ backgroundColor: theme.colors.primary }}>
        {profile.background_cover_image_url && (
          <Image
            src={profile.background_cover_image_url}
            alt="Background"
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative px-8 pb-8">
        {/* Profile Pic */}
        <div className="absolute -top-16 left-8">
          <div className="relative">
            <Image
              src={profile.profile_pic_url || "/placeholder.svg?height=128&width=128"}
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
          {/* Name, Title, Location */}
          <div className="mb-6">
            <EditableText
              content={profile.full_name}
              isEditable={isEditMode}
              onUpdate={content => onProfileUpdate?.({ full_name: content })}
              className="text-3xl font-bold mb-2"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary,
              }}
            />
            <EditableText
              content={profile.headline}
              isEditable={isEditMode}
              onUpdate={content => onProfileUpdate?.({ headline: content })}
              className="text-xl text-gray-600 mb-2"
            />
            <div className="flex items-center text-gray-500 mb-4">
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
            {profile.public_identifier && (
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
            )}
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
            {/* Main (left) column */}
            <div className="lg:col-span-2 space-y-8">
              {/* About/summary */}
              {profile.summary && (
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
                    onUpdate={content => onProfileUpdate?.({ summary: content })}
                    className="text-gray-700 leading-relaxed"
                  />
                </section>
              )}

              {/* Experiences */}
              {profile.experiences?.length > 0 && (
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
                  <GenericCollapsibleBlock items={profile.experiences} titleKey="title" subtitleKey="company" />
                </section>
              )}

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
                  <GenericCollapsibleBlock items={profile.education} titleKey="school" subtitleKey="degree" />
                </section>
              )}

              {/* Certifications */}
              {profile.certifications?.length > 0 && (
                <section>
                  <h2
                    className="text-2xl font-bold mb-4 pb-2 border-b"
                    style={{
                      fontFamily: theme.fonts.heading,
                      color: theme.colors.primary,
                      borderColor: theme.colors.secondary,
                    }}
                  >
                    Certifications
                  </h2>
                  <GenericCollapsibleBlock items={profile.certifications} titleKey="name" subtitleKey="authority" />
                </section>
              )}

              {/* Volunteer Work */}
              {profile.volunteer_work?.length > 0 && (
                <section>
                  <h2
                    className="text-2xl font-bold mb-4 pb-2 border-b"
                    style={{
                      fontFamily: theme.fonts.heading,
                      color: theme.colors.primary,
                      borderColor: theme.colors.secondary,
                    }}
                  >
                    Volunteer Work
                  </h2>
                  <GenericCollapsibleBlock items={profile.volunteer_work} titleKey="role" subtitleKey="organization" />
                </section>
              )}

              {/* Projects */}
              {profile.accomplishment_projects?.length > 0 && (
                <section>
                  <h2
                    className="text-2xl font-bold mb-4 pb-2 border-b"
                    style={{
                      fontFamily: theme.fonts.heading,
                      color: theme.colors.primary,
                      borderColor: theme.colors.secondary,
                    }}
                  >
                    Projects
                  </h2>
                  <GenericCollapsibleBlock items={profile.accomplishment_projects} titleKey="title" subtitleKey="description" />
                </section>
              )}
            </div>

            {/* Right column */}
            <div className="space-y-8">
              {/* Skills */}
              {profile.skills?.length > 0 && <SkillsChart skills={profile.skills} />}

              {/* Languages */}
              {profile.languages?.length > 0 && (
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Languages</h3>
                  <GenericCollapsibleBlock items={profile.languages} titleKey="name" subtitleKey="proficiency" />
                </section>
              )}

              {/* Honors & Awards */}
              {profile.accomplishment_honors_awards?.length > 0 && (
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Honors & Awards</h3>
                  <GenericCollapsibleBlock items={profile.accomplishment_honors_awards} titleKey="title" subtitleKey="issuer" />
                </section>
              )}

              {/* Publications */}
              {profile.accomplishment_publications?.length > 0 && (
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Publications</h3>
                  <GenericCollapsibleBlock items={profile.accomplishment_publications} titleKey="title" subtitleKey="publisher" />
                </section>
              )}

              {/* Courses */}
              {profile.accomplishment_courses?.length > 0 && (
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Courses</h3>
                  <GenericCollapsibleBlock items={profile.accomplishment_courses} titleKey="name" subtitleKey="number" />
                </section>
              )}

              {/* Organizations */}
              {profile.accomplishment_organisations?.length > 0 && (
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Organizations</h3>
                  <GenericCollapsibleBlock items={profile.accomplishment_organisations} titleKey="name" subtitleKey="position" />
                </section>
              )}

              {/* Test Scores */}
              {profile.accomplishment_test_scores?.length > 0 && (
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Test Scores</h3>
                  <GenericCollapsibleBlock items={profile.accomplishment_test_scores} titleKey="name" subtitleKey="score" />
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}