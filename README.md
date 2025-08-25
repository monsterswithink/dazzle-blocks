# Resume Editor

A collaborative resume editor powered by Next.js, NextAuth.js v5, Supabase, and Velt.

## Features

-   **Authentication**: Secure user authentication using NextAuth.js v5 with LinkedIn OAuth.
-   **Resume Editing**: Create and edit professional resumes with a rich text editor.
-   **Real-time Collaboration**: Powered by Velt SDK for live presence and commenting.
-   **Data Storage**: Supabase backend for storing resume data.
-   **Profile Enrichment**: (Planned) Integration with EnrichLayer API for fetching additional profile data.
-   **Responsive Design**: Built with Tailwind CSS and shadcn/ui for a modern, responsive UI.

## Getting Started

### 1. Clone the repository

\`\`\`bash
git clone https://github.com/your-username/resume-editor.git
cd resume-editor
\`\`\`

### 2. Install dependencies

\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 3. Set up Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

\`\`\`env
# Supabase
SUPABASE_URL="YOUR_SUPABASE_URL"
SUPABASE_SERVICE_ROLE_KEY="YOUR_SUPABASE_SERVICE_ROLE_KEY"
NEXT_PUBLIC_SUPABASE_URL="YOUR_SUPABASE_URL"
NEXT_PUBLIC_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"

# NextAuth.js
NEXTAUTH_SECRET="YOUR_NEXTAUTH_SECRET"
NEXTAUTH_URL="http://localhost:3000" # Change in production

# LinkedIn OAuth
LINKEDIN_CLIENT_ID="YOUR_LINKEDIN_CLIENT_ID"
LINKEDIN_CLIENT_SECRET="YOUR_LINKEDIN_CLIENT_SECRET"

# EnrichLayer API (for profile enrichment)
ENRICHLAYER_API_KEY="YOUR_ENRICHLAYER_API_KEY"

# Velt SDK
NEXT_PUBLIC_VELT_PUBLIC_KEY="YOUR_VELT_PUBLIC_KEY"
\`\`\`

-   **Supabase**: Get your Supabase URL and keys from your Supabase project settings.
-   **NextAuth.js**: Generate a strong secret for `NEXTAUTH_SECRET` (e.g., using `openssl rand -base64 32`).
-   **LinkedIn OAuth**: Register an application on the LinkedIn Developer Portal to get your Client ID and Client Secret. Ensure your redirect URI is configured correctly (e.g., `http://localhost:3000/api/auth/callback/linkedin`).
-   **EnrichLayer API**: Obtain an API key from EnrichLayer for profile data enrichment.
-   **Velt SDK**: Get your Velt Public API Key from [console.velt.dev](https://console.velt.dev/) and safelist your domain [^7].

### 4. Run Database Migrations (Supabase)

You can use the provided SQL script to create the necessary `resumes` table in your Supabase database.

\`\`\`sql
-- scripts/create-resumes-table.sql
CREATE TABLE IF NOT EXISTS resumes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE resumes ENABLE ROW LEVEL SECURITY;

-- Policy for users to view their own resumes
CREATE POLICY "Users can view their own resumes." ON resumes
  FOR SELECT USING (auth.uid() = user_id);

-- Policy for users to insert their own resumes
CREATE POLICY "Users can insert their own resumes." ON resumes
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policy for users to update their own resumes
CREATE POLICY "Users can update their own resumes." ON resumes
  FOR UPDATE USING (auth.uid() = user_id);

-- Policy for users to delete their own resumes
CREATE POLICY "Users can delete their own resumes." ON resumes
  FOR DELETE USING (auth.uid() = user_id);
\`\`\`

Run this script in your Supabase SQL editor.

### 5. Run the development server

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

-   `app/`: Next.js App Router for pages and API routes.
    -   `api/auth/[...nextauth]/route.ts`: NextAuth.js API route.
    -   `editor/page.tsx`: The main resume editor page.
    -   `auth/signin/page.tsx`: Custom sign-in page.
    -   `layout.tsx`: Root layout for the application.
-   `components/`: Reusable React components.
    -   `resume-blocks/`: Components specific to resume sections (e.g., `ResumeEditor.tsx`).
    -   `providers/Velt.tsx`: Velt SDK provider.
    -   `ui/`: Shadcn/ui components.
-   `lib/`: Utility functions and configurations.
    -   `auth.ts`: NextAuth.js configuration.
    -   `supabase.ts`: Supabase client setup.
    -   `resume-service.ts`: Functions for interacting with resume data in Supabase.
-   `middleware.ts`: Next.js middleware for authentication protection.
-   `public/`: Static assets.
-   `scripts/`: Database migration scripts.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
-   [NextAuth.js Documentation](https://authjs.dev/reference/nextjs) - learn about NextAuth.js.
-   [Velt Documentation](https://docs.velt.dev/) - learn about Velt SDK for collaboration.

## Deployment

This project can be easily deployed to Vercel.
