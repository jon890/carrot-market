import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { token } = await req.json();

  const session = await getIronSession(cookies(), {
    password: "asdf",
    cookieName: "NEXT_SESSION",
  });
  return NextResponse.json({ ok: true }, { status: 200 });
}
