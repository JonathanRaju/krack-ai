import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(
  req: NextRequest
) {
  const token =
    req.cookies.get("token")?.value;

  const protectedRoutes = [
    "/profile",
    "/admin",
  ];

  const isProtected =
    protectedRoutes.some(route =>
      req.nextUrl.pathname.startsWith(route)
    );

  if (isProtected && !token) {
    return NextResponse.redirect(
      new URL("/", req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/dashboard/:path*",
  ],
};