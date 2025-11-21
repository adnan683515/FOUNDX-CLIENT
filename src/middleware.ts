import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AuthRoutes = ["/login", "/register"];

const roleBasedRoute: Record<string, RegExp[]> = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
};

type TUser = {
  name: string;
  role: "USER" | "ADMIN";
} | null;

const getUser = (request: NextRequest): TUser => {
  return null;
};

export function middleware(request: NextRequest) {
  
  const { pathname } = request.nextUrl;
  const user = getUser(request);

  // Not logged in
  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Role based access check
  if (user.role in roleBasedRoute) {
    const routes = roleBasedRoute[user.role];
    const hasAccess = routes.some((route) => route.test(pathname));

    if (hasAccess) return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/profile/:path*", "/admin/:path*", "/login", "/register"],
};
