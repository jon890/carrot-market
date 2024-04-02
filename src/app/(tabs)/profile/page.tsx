import client from "@/libs/prisma-client";
import { getSession } from "@/libs/session";
import { notFound, redirect } from "next/navigation";

async function getUser() {
  const session = await getSession();
  if (session.id) {
    const user = await client.user.findUnique({
      where: {
        id: session.id,
      },
    });
    return user;
  }

  notFound();
}

export default async function ProfilePage() {
  const user = await getUser();
  console.log(user);

  const logOut = async () => {
    "use server";
    const session = await getSession();
    session.destroy();
    redirect("/");
  };

  return (
    <div>
      <h1>Welcome! {user?.username}!</h1>
      <form action={logOut}>
        <button>Log out</button>
      </form>
    </div>
  );
}
