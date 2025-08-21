import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This route simply returns the user info to be used with Velt client
export async function POST(req: NextRequest) {
  try {
    const { userId, organizationId, name, email, photoUrl, color, textColor } = await req.json();

    if (!userId || !organizationId) {
      return NextResponse.json(
        { error: 'userId and organizationId are required' },
        { status: 400 }
      );
    }

    // Return exactly what the client needs to call Velt SDK
    const veltAuthData = {
      userId,
      organizationId,
      name,
      email,
      photoUrl,
      color,
      textColor,
    };

    return NextResponse.json(veltAuthData);

  } catch (error) {
    console.error('Error preparing Velt auth data:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
