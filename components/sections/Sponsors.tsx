"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const Sponsors = () => {
  return (
    <div className="bg-white md:py-14 py-10">
      <div className="container mx-auto">
        <motion.div className="center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className="flex gap-14 flex-none pr-14"
          >
            <Image
              src="/assets/images/sponsors/logo1.png"
              alt="logo 1"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/assets/images/sponsors/logo2.png"
              alt="logo 2"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/assets/images/sponsors/logo3.png"
              alt="logo 3"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/assets/images/sponsors/logo4.png"
              alt="logo 4"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/assets/images/sponsors/logo5.png"
              alt="logo 5"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/assets/images/sponsors/logo6.png"
              alt="logo 6"
              width={400}
              height={400}
              className="ticker-img"
            />

            {/* Duplicate images */}
            <Image
              src="/assets/images/sponsors/logo1.png"
              alt="logo 1"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/assets/images/sponsors/logo2.png"
              alt="logo 2"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/assets/images/sponsors/logo3.png"
              alt="logo 3"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/assets/images/sponsors/logo4.png"
              alt="logo 4"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/assets/images/sponsors/logo5.png"
              alt="logo 5"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/assets/images/sponsors/logo6.png"
              alt="logo 6"
              width={400}
              height={400}
              className="ticker-img"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
