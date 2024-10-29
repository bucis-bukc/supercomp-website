"use client";
import { ArrowRight, Hexagon, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Register", path: "/register" },
  { name: "Ambassadors", path: "/ambassadors" },
];
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 backdrop-blur-sm z-40">
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
              <div
                onClick={() => setIsOpen((prev) => !prev)}
                className="size-10 relative cursor-pointer md:hidden"
              >
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500">
                  <div
                    className={cn(
                      "w-5 h-0.5 bg-zinc-800",
                      isOpen ? "rotate-45" : "-translate-y-1"
                    )}
                  ></div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500">
                  <div
                    className={cn(
                      "w-5 h-0.5 bg-zinc-800",
                      isOpen ? "-rotate-45" : "translate-y-1"
                    )}
                  ></div>
                </div>
              </div>

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

      {/* Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed size-full top-0 left-0 z-30 bg-sky-100"
          >
            <div className="absolute inset-2 rounded-md bg-sky-100 md:mt-28 mt-24 z-0">
              <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
                {/* <Hexagon size={700} className="size-[700px]" /> */}
              </div>
              <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
                {/* <Hexagon size={1100} className="size-[1100px]" /> */}
              </div>
              <div className="h-full flex justify-center items-center">
                <nav className="flex flex-col items-center gap-12 md:gap-16">
                  {navLinks.map(({ name, path }, index) => (
                    <motion.a
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "linear",
                      }}
                      key={index}
                      href={path}
                    >
                      <span className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-zinc-800 hover:text-zinc-900 transition duration-300">
                        {name}
                      </span>
                    </motion.a>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
