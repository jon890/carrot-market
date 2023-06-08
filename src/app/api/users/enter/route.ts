import prismaClient from "@/libs/server/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  const { phone, email } = await request.json();

  const userPayload = phone ? { phone } : email ? { email } : null;
  if (!userPayload) return NextResponse.json({ ok: false }, { status: 400 });

  // const tokenPayload = crypto.randomBytes(3).toString("hex");
  const tokenPayload = Math.floor(100000 + Math.random() * 900000) + "";

  const token = await prismaClient.token.create({
    data: {
      payload: tokenPayload,
      user: {
        connectOrCreate: {
          where: {
            ...userPayload,
          },
          create: {
            ...userPayload,
            name: "Anonymous",
          },
        },
      },
    },
  });

  console.log(token);

  return NextResponse.json({ ok: true }, { status: 200 });
}
