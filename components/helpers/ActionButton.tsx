import { cn } from "../../lib/utils";

export const ActionButton = ({
  btnText,
  className,
  type,
  disabled,
}: {
  btnText: string;
  className?: string;
  type?: "submit" | "button";
  disabled?: boolean;
}) => {
  return (
    <button
      className={cn(
        "bg-sky-500/20 px-4 py-2 font-extrabold uppercase font-heading text-sm tracking-wide relative",
        className,
        disabled && "pointer-events-none opacity-50"
      )}
      disabled={disabled}
    >
      {/* Glowing Outline */}
      <div className="absolute inset-0 outline outline-2 -outline-offset-2 outline-sky-500 [mask-image:linear-gradient(225deg,transparent,transparent_10px,black_10px)]"></div>
      {/* Cut Corner Effect */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-0 text-sky-500"
      >
        <path
          d="M0 1H12.2667L23 11.7333V24"
          stroke="currentColor"
          strokeWidth="2"
        ></path>
      </svg>
      {/* Button Text */}
      <span className="leading-6">{btnText}</span>
    </button>
  );
};
