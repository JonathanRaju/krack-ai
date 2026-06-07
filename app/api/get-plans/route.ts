import { NextResponse } from "next/server";

const BACKEND_URL =
  process.env.BACKEND_URL ||
  "http://localhost:5000";

export async function GET() {
  try {
    const response = await fetch(
      `${BACKEND_URL}/api/plans`,
      {
        cache: "no-store",
      }
    );

    const data =
      await response.json();

    return NextResponse.json(
      data,
      {
        status: response.status,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}