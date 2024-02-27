"use server";

export async function handleForm(prevState: any, data: FormData) {
  console.log("prevState", prevState);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("im run in the server baby");
  console.log(data.get("email"), data.get("password"));

  return {
    errors: ["wrong password", "password too short"],
  };
}
