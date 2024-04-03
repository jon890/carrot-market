"use client";

import FormButton from "@/components/form-button";
import Input from "@/components/input";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { uploadProduct } from "./actions";
import { useFormState } from "react-dom";

export default function AddProduct() {
  const [preview, setPreview] = useState("");
  const [state, action] = useFormState(uploadProduct, null);

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;

    const file = files?.[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
  };

  return (
    <div>
      <form className="flex flex-col gap-5 p-5" action={action}>
        <label
          htmlFor="photo"
          className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-neutral-300 bg-cover bg-center text-neutral-300"
          style={{
            backgroundImage: `url(${preview})`,
          }}
        >
          {preview === "" && (
            <>
              <PhotoIcon className="w-20" />
              <div className="text-sm text-neutral-400">
                사진을 추가해주세요.
                {state?.fieldErrors?.photo}
              </div>
            </>
          )}
        </label>
        <input
          type="file"
          id="photo"
          name="photo"
          className="hidden"
          accept="image/*"
          onChange={onImageChange}
        />
        <Input
          name="title"
          required
          placeholder="제목"
          type="text"
          errors={state?.fieldErrors?.title}
        />
        <Input
          name="price"
          required
          placeholder="가격"
          type="text"
          errors={state?.fieldErrors?.price}
        />
        <Input
          name="description"
          placeholder="자세한 설명"
          type="text"
          errors={state?.fieldErrors?.description}
        />
        <FormButton text="작성 완료" />
      </form>
    </div>
  );
}
