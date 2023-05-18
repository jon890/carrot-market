import prismaClient from "@/libs/server/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { phone, email } = await request.json();
  const payload = phone ? { phone } : { email };

  const token = await prismaClient.token.create({
    data: {
      payload: "1234",
      user: {
        connectOrCreate: {
          where: {
            ...payload,
          },
          create: {
            ...payload,
            name: "Anonymous",
          },
        },
      },
    },
  });

  console.log(token);

  return NextResponse.json({ ok: true });
}
