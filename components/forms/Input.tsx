import { cn } from "@/lib/utils";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface Props<T extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<T>;
  isError?: any;
  errorMessage?: string;
  className?: string;
}

export const Input = <T extends FieldValues>({
  inputMode,
  name,
  placeholder,
  type,
  register,
  isError,
  errorMessage,
  className,
  ...rest
}: Props<T>) => {
  return (
    <div className="w-full relative">
      <label htmlFor={name} className="text-zinc-800">
        {placeholder}
      </label>
      <div className={cn("relative w-full group z-0 flex", className)}>
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
        <input
          {...rest}
          inputMode={inputMode}
          type={type || "text"}
          id={name}
          {...register(name as Path<T>)}
          className="bg-transparent h-12 outline-none w-full px-4"
        />
      </div>
      {isError && (
        <span className="text-red-500 text-sm mt-1">{errorMessage}</span>
      )}
    </div>
  );
};
