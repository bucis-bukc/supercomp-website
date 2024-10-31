import React from "react";
import { cn } from "@/lib/utils";
import {
  UseFormRegister,
  FieldValues,
  Path,
  UseFormSetValue,
} from "react-hook-form";
import { convertImage } from "@/lib/helpers";
import Image from "next/image";
import { div } from "framer-motion/client";
import { CheckCircle } from "lucide-react";

interface Props<T extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<T>;
  setValue: UseFormSetValue<any>;
  isError?: any;
  errorMessage?: string;
  className?: string;
  image?: string;
  setFile: (file: any) => void;
  setImage: (image: string) => void;
}

export const PayslipInput = <T extends FieldValues>({
  name,
  placeholder,
  register,
  image,
  setFile,
  setImage,
  setValue,
  isError,
  errorMessage,
  className,
  ...rest
}: Props<T>) => {
  const handleFileChange = async (file: any) => {
    try {
      setFile(file);
      const base64Image = await convertImage(file);
      setImage(base64Image);
      setValue(name!, base64Image);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full relative">
      <label
        htmlFor={name}
        className={cn("relative w-full group z-0 flex", className)}
      >
        <div className="absolute inset-0 outline outline-2 -outline-offset-2 group-focus-within:outline-sky-500 outline-zinc-700 [mask-image:linear-gradient(225deg,transparent,transparent_10px,black_10px)] -z-10 transition-all duration-100"></div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 group-focus-within:text-sky-500 text-zinc-700 -z-10 transition-all duration-100"
        >
          <path
            d="M0 1H12.2667L23 11.7333V24"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
        </svg>
        <div className="bg-transparent h-40 center outline-none w-full px-4 text-xl font-semibold cursor-pointer text-zinc-800 overflow-hidden">
          {image ? (
            <div className="center gap-y-2 flex-col">
              <CheckCircle className="size-12 text-green-500" />
              <p>Payslip Uploaded</p>
            </div>
          ) : (
            placeholder
          )}
        </div>
        <input
          {...rest}
          type="file"
          id={name}
          {...register(name as Path<T>)}
          accept="image/jpeg, image/png"
          onChange={(e) => handleFileChange(e.target.files?.[0])}
          className="hidden"
        />
      </label>
      {isError && (
        <span className="text-red-500 text-sm mt-1">{errorMessage}</span>
      )}
    </div>
  );
};
