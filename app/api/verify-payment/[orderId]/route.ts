import {
    NextRequest,
    NextResponse,
  } from "next/server";
  
  const BACKEND_URL =
    process.env.BACKEND_URL || "http://localhost:5000";
  
  export async function GET(
    req: NextRequest,
    {
      params,
    }: {
      params: Promise<{
        orderId: string;
      }>;
    }
  ) {
    const { orderId } =
      await params;
  
    const response =
      await fetch(
        `${BACKEND_URL}/api/verify-payment/${orderId}`
      );
  
    const data =
      await response.json();
  
    return NextResponse.json(
      data
    );
  }