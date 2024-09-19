import { NextRequest, NextResponse } from "next/server";

export default function Home(req: NextRequest) {
  return NextResponse.redirect(`${req.nextUrl.origin}/dashboard`);
}
