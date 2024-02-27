"use client";

import FormButton from "@/components/form-button";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import useMutation from "@/libs/client/useMutation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface EnterForm {
  email?: string;
  phone?: string;
}

interface TokenForm {
  token: string;
}

interface MutationResult {
  ok: boolean;
}

export default function CreateAccountPage() {
  const router = useRouter();
  const [method, setMethod] = useState<"email" | "phone">("email");

  const { register, reset, handleSubmit } = useForm<EnterForm>();
  const { register: tokenRegister, handleSubmit: tokenHandleSubmit } =
    useForm<TokenForm>();

  const [enter, { loading, data, error }] = useMutation<
    EnterForm,
    MutationResult
  >("/api/users/enter");

  const [
    confirmToken,
    { loading: tokenLoading, data: tokenData, error: tokenError },
  ] = useMutation<TokenForm, MutationResult>("/api/users/confirm");

  const onEmailClick = () => {
    if (method !== "email") reset();
    setMethod("email");
  };
  const onPhoneClick = () => {
    if (method !== "phone") reset();
    setMethod("phone");
  };

  const onValid = (data: EnterForm) => {
    if (loading) return;
    enter(data);
  };

  const onTokenValid = (data: TokenForm) => {
    if (tokenLoading) return;
    confirmToken(data);
  };

  // useEffect(() => {
  //   console.log(loading, data, error);
  // }, [loading, data, error]);

  useEffect(() => {
    if (tokenData?.ok) {
      router.push("/");
    }
  }, [tokenData, router]);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>

      <form className="flex flex-col gap-3">
        <FormInput type="text" placeholder="Username" errors={[""]} required />
        <FormInput type="email" placeholder="Email" errors={[""]} required />
        <FormInput
          type="password"
          placeholder="Password"
          errors={[""]}
          required
        />
        <FormInput
          type="password"
          placeholder="Password Confirm"
          errors={[""]}
          required
        />
        <FormButton loading={false} text="Create Account" />
      </form>

      <SocialLogin />
    </div>
  );
}