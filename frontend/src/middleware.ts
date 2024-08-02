import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "./utils/session";

export async function middleware(req: NextRequest) {
  // const session = await verifySession();

  // if (!session) {
  //   return NextResponse.redirect(new URL("/auth/login", req.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/doctor/:path*",
    "/patient/:path*",
    "/settings/:path*",
    "/settings-doctor/:path*",
    "/doctor-edit-profile/:path*",
    "/program-date/:path*",
  ],
};
