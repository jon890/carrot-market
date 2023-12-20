import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { token } = await req.json();
  console.log(token);
  return NextResponse.json({ ok: true }, { status: 200 });
}
