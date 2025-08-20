import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { userId, organizationId, name, email, photoUrl, color, textColor } = await req.json();

    if (!userId || !organizationId) {
      return NextResponse.json(
        { error: 'userId and organizationId are required' },
        { status: 400 }
      );
    }

    // Replace this with the actual function to generate a Velt JWT token
    const veltAuthToken = await generateVeltAuthToken({
      userId,
      organizationId,
      name,
      email,
      photoUrl,
      color,
      textColor,
    });

    return NextResponse.json(veltAuthToken);

  } catch (error) {
    console.error('Error generating Velt auth token:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
