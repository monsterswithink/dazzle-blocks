import { auth } from "@/lib/auth";
import { createClient } from "@/lib/supabase";
import { NextResponse } from "next/server";
import type { UserProfile, Profile } from "@/types"; // adjust import path

async function getUserAndClient() {
  const session = await auth();
  if (!session) {
    return { error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) };
  }
  const supabase = createClient();
  return { session, supabase };
}

// merged return type
export type UserWithProfile = UserProfile & Partial<Profile>;

export async function GET() {
  const { error, session, supabase } = (await getUserAndClient()) as {
    error?: ReturnType<typeof NextResponse.json>;
    session: { user: UserProfile };
    supabase: ReturnType<typeof createClient>;
  };
  if (error) return error;

  // fetch database profile row
  const { data: profile, error: dbError } = await supabase
    .from<Profile>("profiles")
    .select("*")
    .eq("id", session.user.id)
    .single();

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 });
  }

  // merge session user and profile
  const userWithProfile: UserWithProfile = {
    ...session.user,
    ...profile,
  };

  return NextResponse.json(userWithProfile);
}

export async function POST(req: Request) {
  const { error, session, supabase } = (await getUserAndClient()) as {
    error?: ReturnType<typeof NextResponse.json>;
    session: { user: UserProfile };
    supabase: ReturnType<typeof createClient>;
  };
  if (error) return error;

  const body: Partial<Profile> = await req.json();

  const { error: dbError } = await supabase
    .from<Profile>("profiles")
    .update(body)
    .eq("id", session.user.id);

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

export async function PUT(req: Request) {
  const { error, session, supabase } = (await getUserAndClient()) as {
    error?: ReturnType<typeof NextResponse.json>;
    session: { user: UserProfile };
    supabase: ReturnType<typeof createClient>;
  };
  if (error) return error;

  const body: Partial<Profile> = await req.json();

  const { error: dbError } = await supabase
    .from<Profile>("profiles")
    .upsert({ id: session.user.id, ...body }, { onConflict: "id" });

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
