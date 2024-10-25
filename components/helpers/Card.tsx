import { Download, User } from "lucide-react";
import Link from "next/link";
import React from "react";

interface CardProps {
  name: string;
  shortDescription: string;
  minMembers: number;
  maxMembers: number;
  rulebookUrl: string;
}

export const Card = ({
  name,
  shortDescription,
  minMembers,
  maxMembers,
  rulebookUrl,
}: CardProps) => {
  return (
    <div className="max-w-md border border-borderCol rounded-md py-5 px-5">
      <h4 className="text-2xl text-text font-semibold">{name}</h4>
      <p className="text-gray-500 mt-2 text-lg">{shortDescription}</p>
      <div className="flex items-center gap-x-4 my-3">
        <User className="text-text size-5" />
        <p className="text-gray-500">
          Min: {minMembers} - Max: {maxMembers}
        </p>
      </div>

      <Link href={rulebookUrl}>
        <button className="text-text font-semibold flex items-center gap-x-3">
          <span>Rules</span>
          <Download className="text-text size-5" />
        </button>
      </Link>
    </div>
  );
};
