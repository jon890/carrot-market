"use server";

import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/libs/constants";
import { z } from "zod";

function checkUsername(username: string) {
  return !username.includes("potato");
}

function checkPassword({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) {
  return password === confirm_password;
}

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "Username must be a string!",
        required_error: "Where is my username???",
      })
      .min(3, "Way too short!!!")
      .max(10, "That is too loooooong!")
      .toLowerCase()
      .trim()
      .refine(checkUsername, "custom error"),
    email: z.string().email(),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH)
      .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirm_password: z.string().min(PASSWORD_MIN_LENGTH),
  })
  .refine(checkPassword, {
    message: "Both passwords should be the same!",
    path: ["confirm_password"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    console.log(result, result.error.flatten());
    return result.error.flatten();
  } else {
    console.log(result.data);
  }

  return null;
}
