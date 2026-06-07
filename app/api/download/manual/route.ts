import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(
    "https://github.com/JonathanRaju/overlay-ai/releases/download/v1.0.0/Krack-AI.Manual.pdf"
  );
}