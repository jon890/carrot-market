import client from "@/libs/server/prisma-client";
import { getSession } from "@/libs/server/session";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { token } = await req.json();

  const foundToken = await client.token.findUnique({
    where: {
      payload: token,
    },
  });

  if (!foundToken) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const session = await getSession();
  session.user = {
    id: foundToken.userId,
  };
  await session.save();

  await client.token.deleteMany({
    where: {
      userId: foundToken.userId,
    },
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
