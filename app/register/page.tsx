"use client";
import React from "react";
import { motion } from "framer-motion";
import { RegisterForm } from "@/components/forms";
import { registerText } from "@/lib/data";

const RegistrationPage = () => {
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
            Register Now
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.7, type: "spring", delay: 0.4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-xl md:text-2xl mt-6 text-zinc-800 max-w-xl mx-auto"
          >
            {registerText}
          </motion.p>
          <RegisterForm />
        </div>
      </section>
    </main>
  );
};

export default RegistrationPage;
