import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL =
  process.env.BACKEND_URL || "http://localhost:5000";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const response = await fetch(
    `${BACKEND_URL}/api/v2/forgot-password/verify-otp`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      credentials: "include",
    }
  );

  const data = await response.json();

  const nextResponse =
    NextResponse.json(data, {
      status: response.status,
    });

  const cookie =
    response.headers.get("set-cookie");

  if (cookie) {
    nextResponse.headers.set(
      "set-cookie",
      cookie
    );
  }

  return nextResponse;
}