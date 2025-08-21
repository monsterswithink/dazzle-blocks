import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

// Server-side secret (this is your own key to sign JWTs for users)
const USER_JWT_SECRET = process.env.USER_JWT_SECRET;

if (!USER_JWT_SECRET) {
  throw new Error("Missing USER_JWT_SECRET in environment variables");
}

// Function to generate a JWT for a Velt user
async function generateVeltAuthToken(payload: {
  userId: string;
  organizationId: string;
  name?: string;
  email?: string;
  photoUrl?: string;
  color?: string;
  textColor?: string;
}) {
  return { authToken: jwt.sign(payload, USER_JWT_SECRET, { expiresIn: '1h' }) };
}

export async function POST(req: NextRequest) {
  try {
    const { userId, organizationId, name, email, photoUrl, color, textColor } = await req.json();

    if (!userId || !organizationId) {
      return NextResponse.json(
        { error: 'userId and organizationId are required' },
        { status: 400 }
      );
    }

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