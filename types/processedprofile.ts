export interface ProcessedProfile extends Omit<EnrichedProfile, 'experiences' | 'education' | 'skills'> {
  experiences: Array<{
    title: string;
    company: string;
    start: Date;
    end?: Date | null;
    duration?: string;
    isCurrent?: boolean;
    description?: string;
    location?: string;
  }>;

  education: Array<{
    degree: string;
    university: string;
    start: Date;
    end?: Date | null;
    description?: string;
  }>;

  skills: Array<{
    name: string;
    level: number; // normalized 1-5 scale
  }>;

  location?: string; // derived from city + state + country
  profileStats?: {
    totalExperience?: string;
    companiesWorked?: number;
    currentRole?: string | null;
  };
}
