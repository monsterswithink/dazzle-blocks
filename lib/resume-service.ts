import { supabase } from "./supabase"

// Placeholder for initial resume data
const initialResumeData = {
  personal: {
    name: "John Doe",
    title: "Software Engineer",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
  },
  about: {
    description:
      "<p>Highly motivated and results-oriented software engineer with 5 years of experience in developing scalable web applications. Proficient in JavaScript, React, Node.js, and cloud platforms. Passionate about creating efficient and user-friendly solutions.</p>",
  },
  experience: [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      years: "2022 - Present",
      description:
        "<ul><li>Led the development of a new microservices architecture, improving system scalability by 30%.</li><li>Mentored junior developers and conducted code reviews, ensuring high code quality.</li><li>Collaborated with product teams to define requirements and deliver features on time.</li></ul>",
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Innovate Corp.",
      years: "2019 - 2022",
      description:
        "<ul><li>Developed and maintained RESTful APIs using Node.js and Express.</li><li>Implemented responsive user interfaces with React and Redux.</li><li>Participated in agile development cycles, contributing to sprint planning and retrospectives.</li></ul>",
    },
  ],
  education: [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      university: "University of Technology",
      years: "2017 - 2019",
      description: "<ul><li>Specialized in Distributed Systems and Artificial Intelligence.</li></ul>",
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Engineering",
      university: "State University",
      years: "2013 - 2017",
      description: "<ul><li>Graduated with honors.</li></ul>",
    },
  ],
  skills: [
    { id: 1, name: "JavaScript", level: 5 },
    { id: 2, name: "React", level: 5 },
    { id: 3, name: "Node.js", level: 4 },
    { id: 4, name: "TypeScript", level: 4 },
    { id: 5, name: "SQL", level: 3 },
    { id: 6, name: "AWS", level: 3 },
  ],
}

export async function getResumeById(id: string) {
  const { data, error } = await supabase.from("resumes").select("data").eq("id", id).single()

  if (error) {
    console.error("Error fetching resume:", error)
    // If resume not found, return initial data for demonstration
    if (error.code === "PGRST116") {
      // No rows found
      return initialResumeData
    }
    throw error
  }

  return data?.data || initialResumeData
}

export async function updateResume(id: string, data: any) {
  const { error } = await supabase.from("resumes").update({ data }).eq("id", id)

  if (error) {
    console.error("Error updating resume:", error)
    throw error
  }
}

export async function createResume(userId: string, data: any) {
  const { data: newResume, error } = await supabase
    .from("resumes")
    .insert([{ user_id: userId, data }])
    .select()
    .single()

  if (error) {
    console.error("Error creating resume:", error)
    throw error
  }
  return newResume
}
