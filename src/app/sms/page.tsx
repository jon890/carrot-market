"use client";

import FormButton from "@/components/form-button";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { smsLogin } from "./actions";

const initialState = {
  token: false,
  error: undefined,
};

export default function SMSLoginPage() {
  const [state, dispatch] = useFormState(smsLogin, initialState);

  console.log(state);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>

      <form className="flex flex-col gap-3" action={dispatch}>
        {state?.token ? (
          <Input
            name="token"
            type="number"
            placeholder="Verification code"
            errors={state?.error?.formErrors}
            required
            min={100000}
            max={999999}
          />
        ) : (
          <Input
            name="phone"
            type="text"
            placeholder="Phone number"
            errors={state?.error?.formErrors}
            required
          />
        )}
        <FormButton text="Verify" />
      </form>
    </div>
  );
}
