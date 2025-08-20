// ./types/collaboration.d.ts

// ---------------------------
// Supabase persisted data
// ---------------------------
export interface Resume {
  id: string;
  userId: string;
  title: string;
  content: string; // latest saved content (HTML/JSON)
  theme: string;
  createdAt: string;
  updatedAt: string;
}

// Minimal user info persisted in Supabase
export interface UserProfile {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  vanityUrl?: string; // LinkedIn vanity URL
  occupation?: string;
}

// ---------------------------
// Velt collaboration models
// ---------------------------

// Presence: who’s online, cursor info, etc.
export interface CollaboratorPresence {
  userId: string;
  name: string;
  avatarUrl?: string;
  isActive: boolean;
  cursor?: {
    x: number;
    y: number;
    color: string;
  };
}

// Comment model
export interface Comment {
  id: string;
  userId: string;
  resumeId: string;
  content: string;
  createdAt: string;
  resolved: boolean;
}

// Annotation (like highlights, inline notes)
export interface Annotation {
  id: string;
  resumeId: string;
  userId: string;
  range: {
    start: number;
    end: number;
  };
  commentId?: string;
  createdAt: string;
}

// Ephemeral collaboration state (never persisted in Supabase)
export interface CollaborationState {
  presence: CollaboratorPresence[];
  comments: Comment[];
  annotations: Annotation[];
  document: any; // Velt CRDT document snapshot
}

// ---------------------------
// Utility combined type
// ---------------------------

export interface ResumeSession {
  resume: Resume;                  // persisted snapshot
  collaborators: CollaboratorPresence[]; // ephemeral
  comments: Comment[];
  annotations: Annotation[];
}
