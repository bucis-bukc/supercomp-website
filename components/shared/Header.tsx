import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-5 container mx-auto">
      <div className="relative">
        <Image
          src="/assets/images/logo.png"
          alt="Supercomp - BUKC - Logo"
          width={500}
          height={500}
          className="object-contain w-20"
        />
      </div>
      <nav className="flex items-center gap-x-10">
        <Link href="/" className="text-text text-lg font-semibold">
          Home
        </Link>
        <Link href="/register" className="text-text text-lg font-medium">
          Register
        </Link>
        <Link href="/ambassadors" className="text-text text-lg font-medium">
          Ambassadors
        </Link>
      </nav>
    </header>
  );
};
