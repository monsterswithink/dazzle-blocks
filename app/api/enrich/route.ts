import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"

export async function GET(request: Request) {
  const session = await auth()

  if (!session || !session.user?.email) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const linkedinProfileUrl = searchParams.get("linkedinProfileUrl")

  if (!linkedinProfileUrl) {
    return NextResponse.json({ message: "LinkedIn profile URL is required" }, { status: 400 })
  }

  // Mock data for demonstration purposes
  const mockEnrichedData = {
    name: session.user.name || "John Doe",
    title: "Senior Software Engineer",
    email: session.user.email,
    phone: "+1 (555) 123-4567",
    linkedin: linkedinProfileUrl,
    github: "https://github.com/johndoe",
    about: {
      description:
        "Highly motivated and results-oriented software engineer with 10+ years of experience in developing scalable web applications. Proficient in modern JavaScript frameworks, cloud platforms, and agile methodologies. Passionate about building innovative solutions and leading cross-functional teams.",
    },
    experience: [
      {
        id: 1,
        title: "Senior Software Engineer",
        company: "Tech Solutions Inc.",
        years: "2020 - Present",
        description:
          "<ul><li>Led development of a new microservices architecture, improving system scalability by 30%.</li><li>Mentored junior engineers and conducted code reviews, fostering a culture of high-quality code.</li><li>Collaborated with product teams to define requirements and deliver features on time.</li></ul>",
      },
      {
        id: 2,
        title: "Software Engineer",
        company: "Innovate Corp.",
        years: "2015 - 2020",
        description:
          "<ul><li>Developed and maintained RESTful APIs for various client applications.</li><li>Implemented front-end components using React and Redux.</li><li>Participated in daily stand-ups and sprint planning sessions.</li></ul>",
      },
    ],
    education: [
      {
        id: 1,
        degree: "Master of Science in Computer Science",
        university: "State University",
        years: "2013 - 2015",
        description: "<ul><li>Specialized in Distributed Systems.</li></ul>",
      },
      {
        id: 2,
        degree: "Bachelor of Science in Computer Engineering",
        university: "City College",
        years: "2009 - 2013",
        description: "<ul><li>Graduated with honors.</li></ul>",
      },
    ],
    skills: [
      { id: 1, name: "JavaScript", level: 5 },
      { id: 2, name: "TypeScript", level: 4 },
      { id: 3, name: "React", level: 5 },
      { id: 4, name: "Next.js", level: 4 },
      { id: 5, name: "Node.js", level: 4 },
      { id: 6, name: "Python", level: 3 },
      { id: 7, name: "AWS", level: 3 },
      { id: 8, name: "Docker", level: 3 },
      { id: 9, name: "SQL", level: 4 },
    ],
  }

  // In a real application, you would call an external API like Enrichlayer here
  // const ENRICHLAYER_API_KEY = process.env.ENRICHLAYER_API_KEY;
  // const enrichResponse = await fetch(`https://api.enrichlayer.com/v1/profile?api_key=${ENRICHLAYER_API_KEY}&url=${linkedinProfileUrl}`);
  // const data = await enrichResponse.json();

  return NextResponse.json(mockEnrichedData)
}
