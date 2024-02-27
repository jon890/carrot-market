import FormButton from "@/components/form-button";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

export default function CreateAccountPage() {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>

      <form className="flex flex-col gap-3">
        <FormInput
          name="username"
          type="text"
          placeholder="Username"
          errors={[""]}
          required
        />
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
          errors={[""]}
          required
        />
        <FormInput
          name="passwordConfirm"
          type="password"
          placeholder="Password Confirm"
          errors={[""]}
          required
        />
        <FormButton text="Create Account" />
      </form>

      <SocialLogin />
    </div>
  );
}
