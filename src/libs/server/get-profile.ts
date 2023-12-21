import { RedirectType, redirect } from "next/navigation";
import { getSession } from "./session";
import client from "./prisma-client";

export async function getProfileIfLoggedIn() {
  const session = await getSession();
  if (!session.user) {
    redirect("/enter", RedirectType.replace);
  }

  const profile = await client.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  return profile;
}
