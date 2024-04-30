import { NextResponse } from "next/server";

export function middleware(request) {
  console.log(request);
  return NextResponse.next();
}
//Filter what pages/routes this middleware will be applied to
export const config = {
  matcher: "/news",
};
