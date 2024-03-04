import { InputHTMLAttributes } from "react";

type InputProps = {
  errors?: string[];
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ name, errors = [], ...rest }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="h-10 w-full rounded-md border-none bg-transparent 
        ring-2 ring-neutral-200 transition placeholder:text-neutral-400
        focus:outline-none
        focus:ring-4  focus:ring-orange-500"
        name={name}
        {...rest}
      />
      {errors?.map((error, index) => (
        <span key={index} className="font-medium text-red-500">
          {error}
        </span>
      ))}
    </div>
  );
}
