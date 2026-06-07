import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const token =
    (await cookies()).get(
      "token"
    )?.value;

    const cookieStore = await cookies();

  console.log(
    "All Cookies:",
    cookieStore.getAll()
  );
  console.log(
    "JWT_SECRET:",
    process.env.JWT_SECRET
  );

  if (!token) {
    return NextResponse.json(
      {
        authenticated: false,
      },
      { status: 401 }
    );
  }

  try {
    const decoded =
      jwt.verify(
        token,
        process.env.JWT_SECRET!
      );

    return NextResponse.json({
      authenticated: true,
      user: decoded,
    });
  } catch {
    return NextResponse.json(
      {
        authenticated: false,
      },
      { status: 401 }
    );
  }
}