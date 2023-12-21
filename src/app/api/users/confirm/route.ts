import client from "@/libs/server/prisma-client";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { token } = await req.json();

  const exists = await client.token.findUnique({
    where: {
      payload: token,
    },
  });

  if (!exists) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const session = await getIronSession(cookies(), {
    password: process.env.AUTH_KEY!,
    cookieName: "NEXT_SESSION",
  });

  session.user = {
    id: exists.userId,
  };
  await session.save();

  console.log(session);

  return NextResponse.json({ ok: true }, { status: 200 });
}
