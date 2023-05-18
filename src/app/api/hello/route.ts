import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  //   const cookieStore = cookies();
  //   const _headers = headers();
  //   redirect("https://nextjs.org")

  return NextResponse.json({ hello: "next" });
}
