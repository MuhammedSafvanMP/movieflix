import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define protected routes
const isProtectedRoute = createRouteMatcher([
  "/",
  "/movies",
  "/new&popular",
  "/search",
  "/tvshows",
]);

export default clerkMiddleware(async (auth, req) => {
  const authObject = await auth();
  const url = new URL(req.url);

  if (!authObject.userId && isProtectedRoute(req)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (authObject.userId && url.pathname === "/login") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)",
    "/(api|trpc)(.*)",
  ],
};
