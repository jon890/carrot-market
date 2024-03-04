import { IronSession } from "iron-session";
import { NextResponse } from "next/server";
import { SessionData } from "@/@types/session-data";
import { getSession } from "./session";

export async function protectedRoute(
  handler: (session: IronSession<SessionData>) => Promise<NextResponse>,
) {
  const session = await getSession();
  if (!session?.user) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  return await handler(session);
}
