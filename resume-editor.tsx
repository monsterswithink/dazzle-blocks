"use client"

import { useState } from "react"
import { RoomProvider } from "@/lib/liveblocks"
import { FloatingToolbar } from "./components/floating-toolbar"
import { ResumeDisplay } from "./components/resume-display"
import type { EnrichedProfile, ResumeTheme } from "./types/profile"

// Sample profile data - replace with your actual data fetching
const sampleProfile: EnrichedProfile = {
  public_identifier: "john-doe",
  profile_pic_url: "/placeholder.svg?height=128&width=128",
  background_cover_image_url: null,
  first_name: "John",
  last_name: "Doe",
  full_name: "John Doe",
  follower_count: 500,
  occupation: "Software Engineer",
  headline: "Senior Full Stack Developer | React & Node.js Expert",
  summary:
    "Passionate software engineer with 5+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies. Love solving complex problems and mentoring junior developers.",
  country: "US",
  country_full_name: "United States",
  city: "San Francisco",
  state: "CA",
  experiences: [
    {
      starts_at: { day: 1, month: 1, year: 2022 },
      ends_at: null,
      company: "Tech Corp",
      company_linkedin_profile_url: "",
      company_facebook_profile_url: "",
      title: "Senior Software Engineer",
      description:
        "Lead development of customer-facing web applications using React and Node.js. Mentored 3 junior developers and improved team productivity by 40%.",
      location: "San Francisco, CA",
      logo_url: "",
    },
    {
      starts_at: { day: 1, month: 6, year: 2020 },
      ends_at: { day: 31, month: 12, year: 2021 },
      company: "StartupXYZ",
      company_linkedin_profile_url: "",
      company_facebook_profile_url: "",
      title: "Full Stack Developer",
      description:
        "Built and maintained multiple web applications from scratch. Implemented CI/CD pipelines and reduced deployment time by 60%.",
      location: "Remote",
      logo_url: "",
    },
  ],
  education: [
    {
      school: "University of California, Berkeley",
      degree: "Bachelor of Science",
      field_of_study: "Computer Science",
      starts_at: { day: 1, month: 9, year: 2016 },
      ends_at: { day: 31, month: 5, year: 2020 },
      grade: "3.8 GPA",
      description: "",
      logo_url: "",
      location: "Berkeley, CA",
    },
  ],
  languages: [
    { name: "English", proficiency: "Native" },
    { name: "Spanish", proficiency: "Conversational" },
  ],
  languages_and_proficiencies: [],
  accomplishment_organisations: [],
  accomplishment_publications: [],
  accomplishment_honors_awards: [],
  accomplishment_patents: [],
  accomplishment_courses: [],
  accomplishment_projects: [],
  accomplishment_test_scores: [],
  volunteer_work: [],
  certifications: [
    {
      name: "AWS Solutions Architect",
      authority: "Amazon Web Services",
      license_number: "AWS-123456",
      url: "",
      starts_at: { day: 1, month: 3, year: 2023 },
      ends_at: { day: 1, month: 3, year: 2026 },
    },
  ],
  connections: 500,
  people_also_viewed: [],
  recommendations: [],
  activities: [],
  similarly_named_profiles: [],
  articles: [],
  groups: [],
  skills: ["JavaScript", "React", "Node.js", "TypeScript", "Python", "AWS", "Docker", "GraphQL"],
  inferred_salary: { min: 120000, max: 180000 },
  gender: null,
  birth_date: null,
  industry: "Technology",
  extra: {
    github_profile_id: "johndoe",
    facebook_profile_id: "",
    twitter_profile_id: "johndoe",
    website: "https://johndoe.dev",
  },
  interests: ["Technology", "Open Source", "Machine Learning"],
  personal_emails: ["john.doe@email.com"],
  personal_numbers: [],
  meta: { last_updated: "2024-01-15" },
}

const defaultTheme: ResumeTheme = {
  name: "Modern",
  colors: {
    primary: "#2563eb",
    secondary: "#e2e8f0",
    accent: "#3b82f6",
    background: "#ffffff",
    text: "#1f2937",
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
  layout: {
    spacing: "1.5rem",
    borderRadius: "0.5rem",
  },
}

export default function ResumeEditor() {
  const [profile, setProfile] = useState<EnrichedProfile>(sampleProfile)
  const [currentTheme, setCurrentTheme] = useState<ResumeTheme>(defaultTheme)
  const [isEditMode, setIsEditMode] = useState(false)

  const handleProfileUpdate = (updates: Partial<EnrichedProfile>) => {
    setProfile((prev) => ({ ...prev, ...updates }))
  }

  const handleThemeChange = (theme: ResumeTheme) => {
    setCurrentTheme(theme)
  }

  const handleLinkedInSync = () => {
    // This will be handled by your LinkedIn sync logic
    console.log("LinkedIn sync triggered")
    alert("LinkedIn sync functionality will be implemented by you!")
  }

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  return (
    <RoomProvider id="resume-editor" initialPresence={{}}>
      <div className="min-h-screen bg-gray-50 py-8">
        <ResumeDisplay
          profile={profile}
          theme={currentTheme}
          isEditMode={isEditMode}
          onProfileUpdate={handleProfileUpdate}
        />

        <FloatingToolbar
          isEditMode={isEditMode}
          onToggleEdit={toggleEditMode}
          onThemeChange={handleThemeChange}
          onLinkedInSync={handleLinkedInSync}
          currentTheme={currentTheme}
        />
      </div>
    </RoomProvider>
  )
}
