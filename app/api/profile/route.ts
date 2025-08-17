import { auth } from "@/lib/auth";
import { createClient } from "@/lib/supabase";
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
    .eq("id", session.user.id)
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
    .eq("id", session.user.id);

  if (dbError) return NextResponse.json({ error: dbError.message }, { status: 500 });
  return NextResponse.json({ success: true });
}

export async function PUT(req: Request) {
  const { error, session, supabase } = await getUserAndClient() as any;
  if (error) return error;

  const body = await req.json();
  const { error: dbError } = await supabase
    .from("profiles")
    .upsert({ id: session.user.id, ...body }, { onConflict: "id" });

  if (dbError) return NextResponse.json({ error: dbError.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
