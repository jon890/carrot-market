import prismaClient from "@/libs/prisma-client";
import { sendEmail } from "@/libs/server/sendgrid-client";
import { sendMessage } from "@/libs/server/twilio-client";
import { NextRequest, NextResponse } from "next/server";

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

  console.log("Token", tokenPayload);

  if (phone) {
    // try {
    //   const ret = await sendMessage(`Your login token is ${tokenPayload}`); // console.log(ret);
    // } catch (e) {
    //   console.error(e);
    // }
  } else if (email) {
    // try {
    //   const ret = await sendEmail({
    //     from: "bifos@nhn.com",
    //     to: email,
    //     subject: "Your Carrot Market Verification Email",
    //     text: `Your token is ${tokenPayload}`,
    //     html: `<strong>Your token is ${tokenPayload}</strong>`,
    //   });
    // } catch (e) {
    //   // if (e instanceof ResponseError) {
    //   //   console.log(e.response.body);
    //   // }
    //   console.error((e as any).response.body);
    // }
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
