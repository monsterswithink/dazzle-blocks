import { supabase } from "@/lib/supabase"

export interface ResumeData {
  id: string
  userId: string
  personalInfo: {
    name: string
    email: string
    phone: string
    linkedin: string
    github: string
    website: string
  }
  summary: string
  experience: {
    title: string
    company: string
    years: string
    description: string
  }[]
  education: {
    degree: string
    university: string
    years: string
    description: string
  }[]
  skills: string[]
  createdAt: string
  updatedAt: string
}

// Dummy data for demonstration
const dummyResumes: ResumeData[] = [
  {
    id: "resume-123",
    userId: "user-abc", // Replace with actual user ID from session
    personalInfo: {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      phone: "(987) 654-3210",
      linkedin: "https://linkedin.com/in/janedoe",
      github: "https://github.com/janedoe",
      website: "https://janedoe.dev",
    },
    summary:
      "Creative and detail-oriented graphic designer with 7 years of experience in branding, digital media, and print design. Proven ability to deliver compelling visual solutions that meet client objectives and enhance brand identity.",
    experience: [
      {
        title: "Lead Graphic Designer",
        company: "Creative Agency",
        years: "2020 - Present",
        description:
          "Managed a team of 3 designers, overseeing projects from concept to completion. Developed brand guidelines for major clients, resulting in a 25% increase in brand recognition. Designed marketing collateral, websites, and social media campaigns.",
      },
      {
        title: "Junior Designer",
        company: "Design Studio",
        years: "2017 - 2020",
        description:
          "Assisted senior designers in creating visual concepts. Prepared files for print and digital output. Collaborated with clients to understand their design needs.",
      },
    ],
    education: [
      {
        degree: "B.F.A. in Graphic Design",
        university: "Art Institute",
        years: "2017",
        description: "Focused on typography, digital illustration, and web design principles.",
      },
    ],
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Branding", "UI/UX Design", "Print Design", "Web Design"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "resume-456",
    userId: "user-abc", // Replace with actual user ID from session
    personalInfo: {
      name: "Peter Jones",
      email: "peter.jones@example.com",
      phone: "(111) 222-3333",
      linkedin: "https://linkedin.com/in/peterjones",
      github: "https://github.com/peterjones",
      website: "https://peterjones.net",
    },
    summary:
      "Results-driven marketing specialist with 10+ years of experience in digital marketing, content strategy, and campaign management. Proven track record of increasing online engagement and driving lead generation.",
    experience: [
      {
        title: "Marketing Manager",
        company: "Global Marketing Co.",
        years: "2015 - Present",
        description:
          "Developed and executed comprehensive digital marketing strategies. Managed SEO/SEM campaigns, resulting in a 40% increase in organic traffic. Led content creation and social media initiatives.",
      },
    ],
    education: [
      {
        degree: "M.A. in Marketing",
        university: "Business School",
        years: "2014",
        description: "Specialized in digital marketing and consumer behavior.",
      },
    ],
    skills: ["Digital Marketing", "SEO/SEM", "Content Strategy", "Social Media Marketing", "Google Analytics", "CRM"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

export class ResumeService {
  static async getResumeById(resumeId: string): Promise<ResumeData | null> {
    try {
      const { data, error } = await supabase.from("resumes").select("*").eq("id", resumeId).single()

      if (error) {
        console.error("Error fetching resume:", error)
        return null
      }

      if (!data) return null

      return {
        id: data.id,
        userId: data.user_id,
        personalInfo: data.personal_info,
        summary: data.summary,
        experience: data.experience,
        education: data.education,
        skills: data.skills,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
      }
    } catch (error) {
      console.error("Error in getResumeById:", error)
      return null
    }
  }

  static async getResumesByUserId(userId: string): Promise<ResumeData[]> {
    try {
      const { data, error } = await supabase.from("resumes").select("*").eq("user_id", userId)

      if (error) {
        console.error("Error fetching resumes:", error)
        return []
      }

      if (!data) return []

      return data.map((resume) => ({
        id: resume.id,
        userId: resume.user_id,
        personalInfo: resume.personal_info,
        summary: resume.summary,
        experience: resume.experience,
        education: resume.education,
        skills: resume.skills,
        createdAt: resume.created_at,
        updatedAt: resume.updated_at,
      }))
    } catch (error) {
      console.error("Error in getResumesByUserId:", error)
      return []
    }
  }

  static async createResume(userId: string, data: Partial<ResumeData>): Promise<ResumeData> {
    try {
      const newResume: ResumeData = {
        id: `resume-${Date.now()}`, // Simple unique ID
        userId,
        personalInfo: data.personalInfo || {
          name: "",
          email: "",
          phone: "",
          linkedin: "",
          github: "",
          website: "",
        },
        summary: data.summary || "",
        experience: data.experience || [],
        education: data.education || [],
        skills: data.skills || [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }

      const { error } = await supabase.from("resumes").insert([newResume])

      if (error) {
        console.error("Error creating resume:", error)
        throw error
      }

      return newResume
    } catch (error) {
      console.error("Error in createResume:", error)
      throw error
    }
  }

  static async updateResume(resumeId: string, data: Partial<ResumeData>): Promise<ResumeData | null> {
    try {
      const { error } = await supabase
        .from("resumes")
        .update({ ...data, updated_at: new Date().toISOString() })
        .eq("id", resumeId)

      if (error) {
        console.error("Error updating resume:", error)
        return null
      }

      return await this.getResumeById(resumeId)
    } catch (error) {
      console.error("Error in updateResume:", error)
      return null
    }
  }

  static async deleteResume(resumeId: string): Promise<boolean> {
    try {
      const { error } = await supabase.from("resumes").delete().eq("id", resumeId)

      if (error) {
        console.error("Error deleting resume:", error)
        return false
      }

      return true
    } catch (error) {
      console.error("Error in deleteResume:", error)
      return false
    }
  }

  static async getResumeByPublicId(publicId: string): Promise<ResumeData | null> {
    try {
      const { data, error } = await supabase.from("resumes").select("*").eq("public_identifier", publicId).single()

      if (error) {
        console.error("Error fetching resume:", error)
        return null
      }

      if (!data) return null

      return {
        id: data.id,
        userId: data.user_id,
        personalInfo: data.personal_info,
        summary: data.summary,
        experience: data.experience,
        education: data.education,
        skills: data.skills,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
      }
    } catch (error) {
      console.error("Error in getResumeByPublicId:", error)
      return null
    }
  }

  static async saveResume(publicId: string, resumeData: ResumeData): Promise<boolean> {
    try {
      const { error } = await supabase.from("resumes").upsert({
        public_identifier: publicId,
        profile_data: resumeData.personalInfo,
        theme_data: resumeData.theme,
        settings: resumeData.settings,
        updated_at: new Date().toISOString(),
      })

      if (error) {
        console.error("Error saving resume:", error)
        return false
      }

      return true
    } catch (error) {
      console.error("Error in saveResume:", error)
      return false
    }
  }

  static async createResumeFromEnrichedData(enrichedData: any): Promise<string | null> {
    try {
      const publicId = enrichedData.public_identifier

      const resumeData: ResumeData = {
        id: `resume-${Date.now()}`, // Simple unique ID
        userId: enrichedData.user_id,
        personalInfo: enrichedData,
        summary: "",
        experience: [],
        education: [],
        skills: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }

      const success = await this.saveResume(publicId, resumeData)
      return success ? publicId : null
    } catch (error) {
      console.error("Error creating resume from enriched data:", error)
      return null
    }
  }
}
