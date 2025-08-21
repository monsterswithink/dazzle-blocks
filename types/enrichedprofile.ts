export interface EnrichedProfile {
  public_identifier: string; // Primary key from EnrichLayer
  first_name: string;
  last_name: string;
  full_name: string;
  headline: string;
  summary: string;
  profile_pic_url?: string | null;
  background_cover_image_url?: string | null;
  occupation?: string | null;
  industry?: string | null;
  country?: string | null;
  city?: string | null;
  state?: string | null;
  birth_date?: string | null;
  gender?: string | null;

  // Experiences, Education, Skills, etc.
  experiences: Array<{
    title: string;
    company: string;
    start_date: string;
    end_date?: string | null;
    description?: string | null;
    location?: string;
  }>;
  
  education: Array<{
    degree: string;
    university: string;
    start_date: string;
    end_date?: string | null;
    description?: string | null;
  }>;

  skills: Array<{
    name: string;
    level?: number; // optional for EnrichLayer
  }>;

  // Optional social/external links
  extra?: {
    github?: string;
    twitter?: string;
    facebook?: string;
    website?: string;
  };

  // Connections / analytics
  follower_count?: number;
  connections?: number;
}
