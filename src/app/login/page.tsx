"use client";

import FormButton from "@/components/form-button";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { handleForm } from "./actions";

export default function LoginPage() {
  const [state, action] = useFormState(handleForm, null);

  console.log(state);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>

      <form className="flex flex-col gap-3" action={action}>
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          errors={[""]}
          required
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          errors={state?.errors ?? []}
          required
        />
        <FormButton text="Login" />
      </form>

      <SocialLogin />
    </div>
  );
}
