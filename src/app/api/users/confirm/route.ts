import client from "@/libs/server/prisma-client";
import { getSession } from "@/libs/server/session";
import { NextRequest, NextResponse } from "next/server";

type SessionData = {
  user?: {
    id: number;
  };
};

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

  const session = await getSession();
  session.user = {
    id: exists.userId,
  };
  await session.save();

  return NextResponse.json({ ok: true }, { status: 200 });
}
