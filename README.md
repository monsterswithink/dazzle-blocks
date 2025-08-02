# Liveblocks Resume Editor

This is a collaborative resume editor built with Next.js, Auth.js (NextAuth.js v5), Supabase, and Velt (for real-time collaboration).

## Features

-   **Real-time Collaboration**: Edit resumes simultaneously with others using Velt's live state sync.
-   **Authentication**: Secure user authentication with LinkedIn OAuth using Auth.js.
-   **Profile Enrichment**: Fetch and display LinkedIn profile data (e.g., `vanityUrl`) for resume generation.
-   **Resume Management**: Create, edit, and manage multiple resumes.
-   **Rich Text Editing**: Powered by Tiptap for a flexible and powerful editing experience.
-   **UI Components**: Built with Shadcn/ui for a modern and accessible user interface.

## Getting Started

### 1. Clone the repository

\`\`\`bash
git clone https://github.com/your-username/liveblocks-resume-editor.git
cd liveblocks-resume-editor
\`\`\`

### 2. Install dependencies

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

### 3. Set up Environment Variables

Create a `.env.local` file in the root of your project and add the following environment variables:

\`\`\`
NEXTAUTH_SECRET=YOUR_NEXTAUTH_SECRET_HERE
NEXTAUTH_URL=http://localhost:3000

LINKEDIN_CLIENT_ID=YOUR_LINKEDIN_CLIENT_ID
LINKEDIN_CLIENT_SECRET=YOUR_LINKEDIN_CLIENT_SECRET

SUPABASE_URL=YOUR_SUPABASE_URL
SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY=YOUR_SUPABASE_SERVICE_ROLE_KEY

VELT_PUBLIC_KEY=YOUR_VELT_PUBLIC_KEY
NEXT_PUBLIC_VELT_PUBLIC_KEY=YOUR_VELT_PUBLIC_KEY

ENRICHLAYER_API_KEY=YOUR_ENRICHLAYER_API_KEY
\`\`\`

-   **`NEXTAUTH_SECRET`**: A random string used to encrypt tokens. Generate one with `openssl rand -base64 32`.
-   **`NEXTAUTH_URL`**: The URL of your application. For local development, it's `http://localhost:3000`.
-   **LinkedIn OAuth**: Obtain `LINKEDIN_CLIENT_ID` and `LINKEDIN_CLIENT_SECRET` from your LinkedIn Developer application.
-   **Supabase**: Set up a Supabase project and get your `SUPABASE_URL`, `SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY`.
-   **Velt**: Sign up for Velt and get your `VELT_PUBLIC_KEY`.
-   **EnrichLayer**: Obtain your `ENRICHLAYER_API_KEY` if you are using their service for profile enrichment.

### 4. Run Database Migrations (Supabase)

If you're using Supabase, you might need to run the SQL script to create the `resumes` table.

\`\`\`bash
# Connect to your Supabase database and run the SQL from:
# scripts/create-resumes-table.sql
\`\`\`

### 5. Run the development server

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

-   `app/`: Next.js App Router pages and API routes.
    -   `api/auth/[...nextauth]/route.ts`: Auth.js route handler.
    -   `api/enrich/route.ts`: API route for EnrichLayer integration.
    -   `api/profile/route.ts`: API route for user profile data.
    -   `resume/[id]/`: Dynamic route for individual resume editing.
-   `components/`: Reusable React components.
    -   `resume-blocks/`: Components specific to resume content (e.g., `EditableText`).
    -   `resume-providers/`: Context providers (e.g., `Velt`).
    -   `resume-tools/`: UI tools for the editor (e.g., `FloatingToolbar`).
    -   `ui/`: Shadcn/ui components.
-   `lib/`: Utility functions and configurations.
    -   `auth.ts`: Auth.js configuration.
    -   `supabase.ts`: Supabase client setup.
    -   `utils.ts`: General utility functions.
-   `middleware.ts`: Next.js middleware for authentication.
-   `public/`: Static assets.
-   `scripts/`: Database migration scripts.
-   `types/`: TypeScript type definitions.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
\`\`\`
