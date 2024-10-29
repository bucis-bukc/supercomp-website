import React from "react";
import { cn } from "../../lib/utils";

export const Tag = ({
  minMembers,
  maxMembers,
  color,
  className,
}: {
  minMembers: number;
  maxMembers: number;
  color?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "px-4 py-1.5 uppercase font-heading font-extrabold tracking-wider text-xs bg-fuchsia-500/15 text-fuchsia-500 inline-flex rounded-full",
        color === "fuchsia" && "bg-fuchsia-500/15 text-fuchsia-500",
        color === "cyan" && "bg-cyan-500/15 text-cyan-500",
        color === "violet" && "bg-violet-500/15 text-violet-500",
        className
      )}
    >
      {minMembers === maxMembers
        ? minMembers === 1
          ? "1 Member"
          : `${minMembers} Members`
        : `${minMembers} - ${maxMembers} Members`}
    </div>
  );
};
