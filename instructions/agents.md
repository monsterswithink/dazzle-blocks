# GPT

**🧠 Updated Full AI Handoff Prompt — Velt SDK + TipTap + Supabase + LinkedIn Sync**

# **[PROJECT OVERVIEW]:**

Create a Next.js 15+ App Router resume editor using Velt SDK + TipTap, integrated with Supabase for authentication/session management.

# **[Goal]**

- Fully type-safe editor using provided types/profile.ts.
- Fetch resume data from JSON (EnrichedProfile) stored at /public/data/initial-resume-data.json.
- Supabase authentication:
- 
  - [ ] JWT-based sessions.
  - [ ] Fetch LinkedIn vanityUrl from session using appropriate scopes.
  - [ ] Construct LinkedIn profile URL dynamically:

```
const linkedInProfileUrl = https://www.linkedin.com/in/${session.user.vanityUrl};
```

- 
  - [ ] All LinkedIn sync logic handled via session + JWT validation.
  - [ ] Floating pill-shaped toolbar fixed at bottom with:
- 
  - [ ] Theme dropdown (JSON Tailwind themes from /public/themes/theme-*.json).
  - [ ] Share popover containing 3 cards:
  - 
    1. Permalink → QR code generator (any API / Next.js solution acceptable).
    2. Print → printer-friendly layout.
    3. Download PDF → export resume.
  - [ ] 
  - [ ] Edit toggle → all text & profile photo become Velt-live editable.
  - [ ] LinkedIn sync button.

### [RESUME CONTENT:

- 
  - [ ] Render experiences, education, certifications, volunteer work, publications.
  - [ ] Skills as progress bars.
  - [ ] Email, LinkedIn, website icons.
  - [ ] Collapsible sections for experiences.
- 
- Move mock data from ResumeEditor.tsx to Y.js / Velt-compatible JSON storage.
- Fully responsive, modern Vercel-style UI.

**[FILE STRUCTURE]:**

```
.
├── app
│   ├── api
│   │   ├── auth
│   │   │   ├── error
│   │   │   │   └── route.ts
│   │   │   └── [...nextauth]
│   │   │       └── route.ts
│   │   ├── enrich
│   │   │   └── route.ts
│   │   └── profile
│   │       └── route.ts
│   ├── auth
│   │   └── error
│   │       ├── error.tsx
│   │       └── loading.tsx
│   ├── editor
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── profile
│   │   └── page.tsx
│   ├── providers.tsx
│   └── resume
│       └── [id]
│           ├── not-found.tsx
│           └── page.tsx
├── bun.lock
├── .codesandbox
│   ├── icon.png
│   ├── tasks.json
│   └── template.json
├── components
│   ├── buttons
│   │   └── SignIn.tsx
│   ├── resume-blocks
│   │   ├── CollapsibleSection.tsx
│   │   ├── EditableText.tsx
│   │   ├── ProfileSnapshotCard.tsx
│   │   ├── ResumeDisplay.tsx
│   │   ├── ResumeEditor.tsx
│   │   └── Skills.tsx
│   ├── resume-providers
│   │   └── Velt.tsx
│   ├── resume-tools
│   │   ├── FloatingToolbar.tsx
│   │   ├── ProfileVideoButton.tsx
│   │   └── SharePopover.tsx
│   ├── theme-provider.tsx
│   └── ui
│       ├── avatar.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── collapsible.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── popover.tsx
│       ├── progress.tsx
│       ├── resizable.tsx
│       ├── select.tsx
│       ├── sonner.tsx
│       └── textarea.tsx
├── components.json
├── .devcontainer
│   └── devcontainer.json
├── eslint.config.mjs
├── .gitignore
├── instructions
│   ├── agents.md
│   ├── providerParam.md
│   ├── STEP1_TOOLBAR.md
│   └── STEP2_UPGRADE-NEXTAUTH-TO-V5.md
├── lib
│   ├── auth.ts
│   ├── resume-service.ts
│   ├── supabase.ts
│   └── utils.ts
├── middleware.ts
├── .next
│   ├── app-build-manifest.json
│   ├── build-manifest.json
│   ├── cache
│   │   ├── config.json
│   │   └── webpack
│   │       └── client-development
│   │           ├── 0.pack.gz
│   │           └── index.pack.gz
│   ├── package.json
│   ├── react-loadable-manifest.json
│   ├── server
│   │   ├── app-paths-manifest.json
│   │   ├── interception-route-rewrite-manifest.js
│   │   ├── middleware-build-manifest.js
│   │   ├── middleware-manifest.json
│   │   ├── middleware-react-loadable-manifest.js
│   │   ├── next-font-manifest.js
│   │   ├── next-font-manifest.json
│   │   ├── pages-manifest.json
│   │   ├── server-reference-manifest.js
│   │   └── server-reference-manifest.json
│   ├── static
│   │   ├── chunks
│   │   │   └── polyfills.js
│   │   └── development
│   │       ├── _buildManifest.js
│   │       └── _ssgManifest.js
│   ├── trace
│   └── types
│       ├── cache-life.d.ts
│       └── package.json
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── public
│   ├── data
│   │   └── initial-resume-data.json
│   ├── placeholder.jpg
│   ├── placeholder-logo.png
│   ├── placeholder-logo.svg
│   ├── placeholder.svg
│   ├── placeholder-user.jpg
│   └── themes
│       ├── theme-classic.json
│       ├── theme-creative.json
│       ├── theme-minimal.json
│       └── theme-modern.json
├── QUICK ACCESS.md
├── README.md
├── scripts
│   └── create-resumes-table.sql
├── styles
│   └── globals.css
├── tailwind.config.ts
├── tree.txt
├── tsconfig.json
├── types
│   └── profile.ts
└── .vscode
    └── settings.json

40 directories, 102 files
```

> ***We get the resume data by fetching the linkedin profile url from the session scopes during auth via*** `vanityUrl` ***by combining JWT logic, next-auth v5, and supabase.***

---

### **[SECRET SAUCE IS IN ROUTING]:**

1. `api/auth/[...nextauth]/route.ts` handlers link to the ***lib/auth.ts*** logic to run custom linkedin auth using next-auth v5 (`next-auth@beta`)

Something like:

```
import NextAuth from "next-auth"
import LinkedIn from "next-auth/providers/linkedin"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "r_liteprofile email",
        },
      },
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          vanityUrl: profile.vanityName || null,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token
      }
      if (profile) {
        token.vanityUrl = (profile as any).vanityName || null
      }
      return token
    },
    async session({ session, token }) {
      return {
        ...session,
        accessToken: token.accessToken,
        user: {
          ...session.user,
          vanityUrl: token.vanityUrl as string,
        },
      }
    },
  },
  pages: {
    signIn: "/",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
})

declare module "next-auth" {
  interface Session {
    accessToken?: string
    user: {
      id: string
      vanityUrl?: string
    } & {
      name?: string | null
      email?: string | null
      image?: string | null
    }
  }
}
```

1. auth file fetches vanityUrl using scopes in the ***lib/auth.ts*** auth logic through JWT tokens, building the full [https://www.linkedin.com/in/{vanityUrl}](https://www.linkedin.com/in/%7BvanityUrl%7D) to use for the next route's api call
2. api/enrich/route calls enrichlayer API via:

```import

export async function GET(req: NextRequest) {
  const apiKey = process.env.ENRICHLAYER_API_KEY
  const { searchParams } = new URL(req.url)

  const vanityName = searchParams.get("vanityName")
  const linkedinProfileUrl = searchParams.get("linkedinProfileUrl")

  const profileUrl =
    linkedinProfileUrl ??
    (vanityName ? `https://linkedin.com/in/${vanityName}/` : null)

  if (!apiKey || !profileUrl) {
    return NextResponse.json({ error: "Missing parameters" }, { status: 400 })
  }

  const url = new URL("https://enrichlayer.com/api/v2/profile")
  url.searchParams.set("linkedin_profile_url", profileUrl)
  url.searchParams.set("extra", "include")
  url.searchParams.set("github_profile_id", "include")
  url.searchParams.set("facebook_profile_id", "include")
  url.searchParams.set("twitter_profile_id", "include")
  url.searchParams.set("personal_contact_number", "include")
  url.searchParams.set("personal_email", "include")
  url.searchParams.set("inferred_salary", "include")
  url.searchParams.set("skills", "include")
  url.searchParams.set("use_cache", "if-present")
  url.searchParams.set("fallback_to_cache", "on-error")

  const enrichRes = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${apiKey}` },
    cache: "no-store",
  })

  const data = await enrichRes.json()
  return NextResponse.json(data, { status: enrichRes.status })
}

```

### Lastly, `middleware.ts` logic issues redirect after auth to the profile page using something like:

```
import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { nextUrl } = req
  const isAuthenticated = !!req.auth

  // Allow public paths
  const publicPaths = ["/", "/api/auth", "/auth/error", "/_next", "/favicon.ico"]
  const isPublicPath = publicPaths.some((path) => nextUrl.pathname.startsWith(path))

  if (isPublicPath) {
    return NextResponse.next()
  }

  // Redirect unauthenticated users to sign-in
  if (!isAuthenticated) {
    const signInUrl = new URL("/", nextUrl.origin)
    signInUrl.searchParams.set("callbackUrl", nextUrl.pathname)
    return NextResponse.redirect(signInUrl)
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
```

### `api/profile/route`:

```
import { auth } from "@/lib/
import { createClient } from "@/lib/
import { NextResponse } from "next/server";

async function getUserAndClient() {
const session = await auth();
if (!session) return { error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) };
const supabase = createClient();
return { session, supabase };
}

export async function GET() {
const { error, session, supabase } = await getUserAndClient() as any;
if (error) return error;

const { data, error: dbError } = await supabase
.from("profiles")
.select("*")
.eq("id", [session.user.id](http://session.user.id))
.single();

if (dbError) return NextResponse.json({ error: dbError.message }, { status: 500 });
return NextResponse.json(data);
}

export async function POST(req: Request) {
const { error, session, supabase } = await getUserAndClient() as any;
if (error) return error;

const body = await req.json();
const { error: dbError } = await supabase
.from("profiles")
.update(body)
.eq("id", [session.user.id](http://session.user.id));

if (dbError) return NextResponse.json({ error: dbError.message }, { status: 500 });
return NextResponse.json({ success: true });
}

export async function PUT(req: Request) {
const { error, session, supabase } = await getUserAndClient() as any;
if (error) return error;

const body = await req.json();
const { error: dbError } = await supabase
.from("profiles")
.upsert({ id: [session.user.id](http://session.user.id), ...body }, { onConflict: "id" });

if (dbError) return NextResponse.json({ error: dbError.message }, { status: 500 });
return NextResponse.json({ success: true });
}
```

*The response is saved in supabase, where* `public_identifier` *is the primary key of the user's linkedin profile.* `lib/resume-service.ts` *This effectively sends the user to a profile snapshot card page where the* `enrichlayer` *processes the API call whilt they wait*

### The types are as follows to infer the resume layout and data cohesion

```// Shared types
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
  title: string
  company: string
  years: string
  description: string
}

export interface ProcessedExperience extends Omit<Experience, "years"> {
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
  degree: string
  university: string
  years: string
  description: string
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

export interface Skill {
  name: string
  level: number // e.g., 1-5
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
  skills: Skill[]
  inferred_salary: InferredSalary
  gender: string | null | ""
  birth_date: string | null | ""
  industry: string | null | ""
  extra: ExtraInfo
  interests: string[]
  personal_emails: string[]
  personal_numbers: string[]
  meta: MetaInfo
  vanityUrl: string
  enrichedProfile: {
    headline: string
    summary: string
    skills: Skill[]
    experience: { title: string; company: string; years: string }[]
  }
}

// ----------------------
// Processed version
// ----------------------
export interface ProcessedProfile extends Omit<EnrichedProfile, "experiences" | "education" | "skills"> {
  experiences: ProcessedExperience[]
  education: Education[]
  skills: Skill[]
  location: string
  profileStats: {
    totalExperience: string
    companiesWorked: number
    currentRole: string | null | ""
  }
}

// Theme types
export type ResumeTheme = "modern" | "classic" | "minimal" | "creative"

// ----------------------
// User Profile Types
// ----------------------
export interface UserProfile {
  id: string
  name: string | null
  email: string | null
  image: string | null
  vanityUrl?: string | null // LinkedIn vanity URL
  // Add any other profile fields you store in your database
}

// ----------------------
// Enrich Layer Profile Types
// ----------------------
export interface EnrichLayerProfile {
  full_name: string
  headline: string
  summary: string
  experience: Array<{
    title: string
    company: string
    location: string
    start_date: string
    end_date: string
    description: string
  }>
  education: Array<{
    degree: string
    university: string
    location: string
    start_date: string
    end_date: string
    description: string
  }>
  skills: Skill[]
  profile_url: string
  // ... other fields from EnrichLayer
}

// ----------------------
// Profile Interface
// ----------------------
export interface Profile {
  id: string
  name: string
  email: string
  image?: string
  headline?: string
  summary?: string
  experience?: Experience[]
  education?: Education[]
  skills?: Skill[]
}
```
