"use server";

import bcrypt from "bcrypt";
import { PASSWORD_MIN_LENGTH } from "@/libs/constants";
import client from "@/libs/prisma-client";
import { z } from "zod";
import { getSession } from "@/libs/session";
import { redirect } from "next/navigation";

async function checkEmailExists(email: string) {
  const user = await client.user.findUnique({
    where: {
      email,
    },
    select: { id: true },
  });

  return Boolean(user);
}

const formSchema = z.object({
  email: z
    .string()
    .email()
    .toLowerCase()
    .refine(checkEmailExists, "An account with this email does not exist."),
  password: z.string().min(PASSWORD_MIN_LENGTH),
  // .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
});

export async function login(prevState: any, formData: FormData) {
  const data = {
    ...Object.fromEntries(formData.entries()),
  };

  const result = await formSchema.spa(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const user = await client.user.findUnique({
      where: {
        email: result.data.email,
      },
      select: {
        id: true,
        password: true,
      },
    });

    const ok = await bcrypt.compare(result.data.password, user!.password ?? "");

    if (ok) {
      const session = await getSession();
      session.id = user!.id;
      await session.save();
      redirect("/profile");
    } else {
      return {
        fieldErrors: {
          password: ["Wrong password."],
          email: [],
        },
      };
    }
  }
}
