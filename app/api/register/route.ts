import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    body.password = crypto
      .createHash("sha256")
      .update(body.password)
      .digest("hex");

    const response = await fetch(
      `${BACKEND_URL}/api/v2/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

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