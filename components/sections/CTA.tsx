"use client";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "../helpers";
import { ctaText } from "@/lib/data";

export const CTA = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const transalteY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={ref}
      className="md:px-10 px-3 bg-gradient-to-b from-[#FFFF] to-[#D2DCFF] py-32  overflow-x-clip overflow-y-clip"
    >
      <div className="container mx-auto">
        <div className="max-w-[540px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, type: "spring" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title mt-5"
          >
            Register now today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-lg tracking-tight text-zinc-800 mt-5"
          >
            {ctaText}
          </motion.p>

          <div className="flex items-center justify-center gap-2 mt-10">
            <Button text="Get for free" />
            <button className="btn btn-text flex gap-x-1 items-center hover:gap-x-2 transition-all duration-100">
              <span>Learn more</span>
              <ArrowRight className="size-4" />
            </button>
          </div>

          <div className="relative w-full">
            <motion.img
              src="/assets/images/star.png"
              alt="star img"
              width={260}
              height={260}
              className="max-md:hidden absolute -top-[340px] -left-64 lg:-left-[350px] lg:w-[300px] lg:-top-[300px]"
              loading="lazy"
              style={{
                translateY: transalteY,
              }}
            />
            <motion.img
              src="/assets/images/spring.png"
              alt="spring img"
              width={260}
              height={260}
              className="max-md:hidden w-[250px] absolute -top-[200px] -right-[200px] lg:w-[300px] lg:-right-[350px]"
              loading="lazy"
              style={{
                translateY: transalteY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
