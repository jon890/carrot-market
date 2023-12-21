import client from "@/libs/server/prisma-client";
import { protectedRoute } from "@/libs/server/protected-route";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return protectedRoute(async (session) => {
    const profile = await client.user.findUnique({
      where: { id: session.user?.id },
    });

    return NextResponse.json({ ok: true, data: profile }, { status: 200 });
  });
}
