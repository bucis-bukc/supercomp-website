"use client";
import { AmbassadorForm } from "@/components/forms";
import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { ambassadorPara1, ambassadorPara2, ambassadorText } from "@/lib/data";

const AmbassadorsPage = () => {
  return (
    <main>
      <section className="py-24 md:pt-40 overflow-x-clip md:-mt-28">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.7, type: "spring", delay: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title font-bold text-4xl md:text-5xl lg:text-6xl text-center max-w-3xl mx-auto"
          >
            Become an Ambassador
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.7, type: "spring", delay: 0.4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-xl md:text-2xl mt-6 text-zinc-800 max-w-xl mx-auto"
          >
            {ambassadorText}
          </motion.p>
          {/* Two Grid Layout */}
          <div className="mt-24 grid md:grid-cols-2 gap-5">
            <div className="flex flex-col justify-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.7, type: "spring", delay: 0.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="capitalize section-title text-left font-bold text-3xl md:text-4xl lg:text-5xl max-w-3xl mb-5"
              >
                what You'll get
              </motion.h2>
              <p className="sm:text-lg text-zinc-800 max-w-xl">
                {ambassadorPara1}
              </p>
              <p className="mt-2 sm:text-lg text-zinc-800 max-w-xl">
                {ambassadorPara2}
              </p>
            </div>
            <AmbassadorForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AmbassadorsPage;
