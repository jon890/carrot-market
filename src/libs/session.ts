import { SessionData } from "@/@types/session-data";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export function getSession() {
  return getIronSession<SessionData>(cookies(), {
    password: process.env.COOKIE_PASSWORD!,
    cookieName: "delicious-karrot",
  });
}
