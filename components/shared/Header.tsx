import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="center py-3 bg-black text-white text-sm gap-x-1">
        <p className="max-md:hidden text-white/60 ">
          Take part in the competition -
        </p>
        <Link href="/register" className="inline-flex items-center gap-1">
          <p>Register now!</p>
          <ArrowRight className="size-4 inline-flex justify-center items-center" />
        </Link>
      </div>

      <div className="container mx-auto py-2 md:px-10">
        <div className="">
          <div className="flex items-center justify-between">
            <Image
              src="/assets/images/logo.png"
              alt="LOGO"
              width={200}
              height={200}
              className="object-contain w-16"
            />
            <Menu className="size-7 cursor-pointer mr-4 md:hidden" />

            <nav className="hidden md:flex items-center gap-6 text-black/60">
              <Link href="" className="font-semibold">
                Home
              </Link>
              <Link href="" className="font-medium">
                About
              </Link>
              <Link href="" className="font-medium">
                Register
              </Link>
              <Link href="" className="font-medium">
                Ambassadors
              </Link>
            </nav>

            <Image
              src="/assets/images/logo.png"
              alt="LOGO"
              width={200}
              height={200}
              className="max-md:hidden object-contain w-16"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
