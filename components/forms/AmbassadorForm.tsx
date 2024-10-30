"use client";
import React, { useState } from "react";
import { Input } from "./Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ambassadorSchema } from "@/validations/ambassadors.validation";
import { ActionButton } from "../helpers";
import { convertImage } from "@/lib/helpers";
import Image from "next/image";
import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { createAmbassador } from "@/API/ambassador.api";

export const AmbassadorForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState("");

  const handleFileChange = async (file: any) => {
    try {
      setFile(file);
      const base64Image = await convertImage(file);
      setImage(base64Image);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const { mutateAsync } = useMutation({
    mutationFn: createAmbassador,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof ambassadorSchema>>({
    resolver: zodResolver(ambassadorSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof ambassadorSchema>> = async (
    data
  ) => {
    if (!image) return toast.error("Image is required");
    const { response, success } = await mutateAsync({
      ...data,
      picture: image,
    });
    if (success) {
      toast.success("Thank you for your submission");
      setImage("");
      setFile(null);
      reset();
    } else return toast.error(response as string);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      <div className="relative w-full mx-auto center">
        <label
          htmlFor="avatar"
          className={cn(
            "cursor-pointer relative size-32 shadow-md rounded-full center ",
            !image && "border-2 border-sky-500"
          )}
        >
          {image ? (
            <Image
              src={image}
              alt="avatar"
              width={100}
              height={100}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <div>
              <Camera className="size-7 text-sky-500" />
            </div>
          )}
        </label>
        <input
          type="file"
          className="hidden"
          id="avatar"
          accept="image/jpeg, image/png"
          onChange={(e) => handleFileChange(e.target.files?.[0])}
        />
      </div>
      <div className="relative">
        <Input
          placeholder="Full Name"
          type="text"
          name="name"
          register={register}
          isError={errors.name || false}
          errorMessage={errors.name?.message}
        />
      </div>

      <div className="relative">
        <Input
          placeholder="Email Address"
          type="email"
          name="email"
          register={register}
          isError={errors.email || false}
          errorMessage={errors.email?.message}
        />
      </div>

      <div className="relative">
        <Input
          placeholder="Institute Name"
          type="text"
          name="institute"
          register={register}
          isError={errors.institute || false}
          errorMessage={errors.institute?.message}
        />
      </div>

      <div className="relative">
        <Input
          placeholder="Phone Number"
          type="text"
          name="phone"
          register={register}
          isError={errors.phone || false}
          errorMessage={errors.phone?.message}
        />
      </div>

      <div className="relative">
        <Input
          placeholder="CNIC"
          type="number"
          inputMode="numeric"
          name="cnic"
          register={register}
          isError={errors.cnic || false}
          errorMessage={errors.cnic?.message}
        />
      </div>

      <ActionButton
        type="submit"
        className="py-3 sm:text-lg mt-4"
        btnText="Submit"
        disabled={isSubmitting}
      />
    </form>
  );
};
