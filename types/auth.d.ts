// Basic user identity from NextAuth + Supabase
export interface AuthUser {
  id: string;           // Supabase user id
  email: string | null;
  name: string | null;
  avatarUrl?: string;
  vanityUrl?: string;   // LinkedIn vanity URL
  occupation?: string;
}
