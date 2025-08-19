import { auth } from "@/lib/auth";
import { createClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

async function getUserAndClient() {
  const session = await auth();
  if (!session) {
    return { error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) };
  }
  const supabase = createClient();
  return { session, supabase };
}

export async function GET() {
  const { error, session, supabase } = (await getUserAndClient()) as any;
  if (error) return error;

  // fetch profile row
  const { data: profile, error: dbError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", session.user.id)
    .single();

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 });
  }

  // merge auth user data + profile row
  const user = {
    ...session.user, // comes from NextAuth (email, name, image, etc.)
    ...profile,      // comes from Supabase "profiles" table (occupation, bio, etc.)
  };

  return NextResponse.json(user);
}

export async function POST(req: Request) {
  const { error, session, supabase } = (await getUserAndClient()) as any;
  if (error) return error;

  const body = await req.json();

  const { error: dbError } = await supabase
    .from("profiles")
    .update(body)
    .eq("id", session.user.id);

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

export async function PUT(req: Request) {
  const { error, session, supabase } = (await getUserAndClient()) as any;
  if (error) return error;

  const body = await req.json();

  const { error: dbError } = await supabase
    .from("profiles")
    .upsert({ id: session.user.id, ...body }, { onConflict: "id" });

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
