import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { BACKEND_URL } from "./utils/backend.url";

interface isLogged {
  isLogged: boolean;
}

export default async function middleware(req: NextRequest) {
  const token = cookies().get("refreshToken")?.value;
  let session: isLogged | null = null;

  try {
    const { data } = await axios.get<isLogged>(`${BACKEND_URL}/auth/logged`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    session = data;
  } catch (error) {
    if (req.nextUrl.pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
  }

  const isLoginPage = req.nextUrl.pathname === "/login";

  if (!session?.isLogged && !isLoginPage) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (session?.isLogged && isLoginPage) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/"],
};
