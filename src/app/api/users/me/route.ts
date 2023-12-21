import client from "@/libs/server/prisma-client";
import { getSession } from "@/libs/server/session";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const profile = await client.user.findUnique({
    where: { id: session.user?.id },
  });

  return NextResponse.json({ ok: true, data: profile }, { status: 200 });
}
