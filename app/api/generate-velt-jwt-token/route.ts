import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId, email, organizationId, isAdmin } = await req.json();

    if (!userId || !organizationId) {
      return NextResponse.json(
        { error: "userId and organizationId are required" },
        { status: 400 }
      );
    }

    const url = "https://api.velt.dev/v1/auth/token/get";
    const body = {
      data: {
        userId,
        apiKey: process.env.NEXT_PUBLIC_VELT_PUBLIC_KEY, // Public key from Velt console
        authToken: process.env.VELT_CLIENT_AUTH_TOKEN, // Client token from Velt console
        userProperties: {
          email,
          organizationId,
          isAdmin: !!isAdmin,
        },
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Velt API HTTP error: ${response.status}`);
    }

    const data = await response.json();
    const userJwt = data?.result?.data?.token;

    if (!userJwt) {
      throw new Error("No token returned from Velt API");
    }

    return NextResponse.json({ veltToken: userJwt });
  } catch (error) {
    console.error("Error generating Velt auth token:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
