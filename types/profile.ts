// Shared types
export interface DateObject {
  day: number | null
  month: number | null
  year: number | null
}

export interface FormattedDate {
  formatted: string
  raw: DateObject
  isPresent: boolean
}

export type DateFormat = "MMM YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD" | "relative"

// ----------------------
// Core experience types
// ----------------------
export interface Experience {
  starts_at: DateObject | null
  ends_at: DateObject | null
  company: string | null | ""
  company_linkedin_profile_url: string | null | ""
  company_facebook_profile_url: string | null | ""
  title: string | null | ""
  description: string | null | ""
  location: string | null | ""
  logo_url: string | null | ""
}

export interface ProcessedExperience extends Omit<Experience, "starts_at" | "ends_at"> {
  starts_at: FormattedDate | null
  ends_at: FormattedDate | null
  duration: string
  isCurrent: boolean
  sortOrder: number
}

// ----------------------
// Supporting types
// ----------------------
export interface Activity {
  title: string
  link: string | null | ""
  activity_status: string | null | ""
}

export interface SimilarProfile {
  name: string
  link: string
  summary: string
  location: string
}

export interface Article {
  title: string
  link: string
  published_date: DateObject
  author: string | null | ""
  image_url: string | null | ""
}

export interface InferredSalary {
  min: number | null
  max: number | null
}

export interface ExtraInfo {
  github_profile_id: string | null | ""
  facebook_profile_id: string | null | ""
  twitter_profile_id: string | null | ""
  website: string | null | ""
}

export interface MetaInfo {
  last_updated: string
}

// ----------------------
// Structured sections
// ----------------------
export interface Education {
  school: string | null | ""
  degree: string | null | ""
  field_of_study: string | null | ""
  starts_at: DateObject | null
  ends_at: DateObject | null
  grade: string | null | ""
  description: string | null | ""
  logo_url: string | null | ""
  location: string | null | ""
}

export interface Language {
  name: string | null | ""
  proficiency: string | null | ""
}

export interface Organization {
  name: string | null | ""
  position: string | null | ""
  starts_at: DateObject | null
  ends_at: DateObject | null
  description: string | null | ""
}

export interface Publication {
  title: string | null | ""
  publisher: string | null | ""
  published_on: DateObject | null
  description: string | null | ""
  url: string | null | ""
}

export interface HonorAward {
  title: string | null | ""
  issuer: string | null | ""
  issued_on: DateObject | null
  description: string | null | ""
}

export interface Patent {
  title: string | null | ""
  number: string | null | ""
  date: DateObject | null
  status: string | null | ""
  description: string | null | ""
}

export interface Course {
  name: string | null | ""
  number: string | null | ""
}

export interface Project {
  title: string | null | ""
  description: string | null | ""
  url: string | null | ""
  starts_at: DateObject | null
  ends_at: DateObject | null
}

export interface TestScore {
  name: string | null | ""
  score: string | null | ""
  date: DateObject | null
  description: string | null | ""
}

export interface VolunteerWork {
  organization: string | null | ""
  role: string | null | ""
  cause: string | null | ""
  description: string | null | ""
  starts_at: DateObject | null
  ends_at: DateObject | null
}

export interface Certification {
  name: string | null | ""
  authority: string | null | ""
  license_number: string | null | ""
  url: string | null | ""
  starts_at: DateObject | null
  ends_at: DateObject | null
}

// ----------------------
// Root profile object
// ----------------------
export interface EnrichedProfile {
  public_identifier: string
  profile_pic_url: string | null | ""
  background_cover_image_url: string | null | ""
  first_name: string
  last_name: string
  full_name: string
  follower_count: number
  occupation: string | null | ""
  headline: string
  summary: string
  country: string
  country_full_name: string
  city: string
  state: string
  experiences: Experience[]
  education: Education[]
  languages: Language[]
  languages_and_proficiencies: Language[]
  accomplishment_organisations: Organization[]
  accomplishment_publications: Publication[]
  accomplishment_honors_awards: HonorAward[]
  accomplishment_patents: Patent[]
  accomplishment_courses: Course[]
  accomplishment_projects: Project[]
  accomplishment_test_scores: TestScore[]
  volunteer_work: VolunteerWork[]
  certifications: Certification[]
  connections: number
  people_also_viewed: SimilarProfile[]
  recommendations: string[]
  activities: Activity[]
  similarly_named_profiles: SimilarProfile[]
  articles: Article[]
  groups: string[]
  skills: string[]
  inferred_salary: InferredSalary
  gender: string | null | ""
  birth_date: string | null | ""
  industry: string | null | ""
  extra: ExtraInfo
  interests: string[]
  personal_emails: string[]
  personal_numbers: string[]
  meta: MetaInfo
}

// ----------------------
// Processed version
// ----------------------
export interface ProcessedProfile extends Omit<EnrichedProfile, "experiences"> {
  experiences: ProcessedExperience[]
  location: string
  profileStats: {
    totalExperience: string
    companiesWorked: number
    currentRole: string | null | ""
  }
}

// Theme types
export interface ResumeTheme {
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
  }
  fonts: {
    heading: string
    body: string
  }
  layout: {
    spacing: string
    borderRadius: string
  }
}
