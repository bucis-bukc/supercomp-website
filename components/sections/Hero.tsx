"use client";
import React, { useRef } from "react";
import { ActionButton, Circle, Hexagon } from "../helpers";
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero = () => {
  const icosahedronRef = useRef(null);
  const cubeRef = useRef(null);
  const torusRef = useRef(null);
  const cuboidRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: icosahedronRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: cubeScrollYProgress } = useScroll({
    target: cubeRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: torusScrollYProgress } = useScroll({
    target: torusRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: cuboidScrollYProgress } = useScroll({
    target: cuboidRef,
    offset: ["start end", "end start"],
  });

  const icosahedronRotate = useTransform(scrollYProgress, [0, 1], [30, -45]);
  const cubeRotate = useTransform(cubeScrollYProgress, [0, 1], [100, -45]);
  const torusRotate = useTransform(torusScrollYProgress, [0, 1], [20, -20]);
  const cuboidRotate = useTransform(cuboidScrollYProgress, [0, 1], [20, -20]);

  return (
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.7, type: "spring" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase font-extrabold text-center text-zinc-800 tracking-wider"
        >
          Introducing
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.7, type: "spring", delay: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title font-heading font-black lg:text-8xl md:text-7xl text-6xl text-center mt-4 max-w-3xl mx-auto"
        >
          Supercomp
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.7, type: "spring", delay: 0.4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xl md:text-2xl mt-6 text-zinc-800 max-w-xl mx-auto"
        >
          An exciting event for computer science students to showcase their
          skills and compete in various competitions.
        </motion.p>
        <div className="flex justify-center mt-10">
          <ActionButton btnText="Get Started" />
        </div>
        {/* Image Container */}
        <div className="flex justify-center mt-24">
          <div className="inline-flex relative z-0">
            {/* Hexagon */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1100px]" size={1100} />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon
                className="size-[1800px]"
                size={1800}
                reverse
                duration={60}
              />
            </div>
            {/* Cube Image */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle animate className="absolute left-[200px] -top-[900px]">
                <motion.img
                  src="/assets/images/cube.png"
                  alt="Cube 3D Image"
                  className="size-[140px]"
                  ref={cubeRef}
                  style={{ rotate: cubeRotate }}
                />
              </Circle>
            </div>
            {/* Cuboid Image */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle animate className="absolute left-[200px] top-[270px]">
                <motion.img
                  src="/assets/images/cuboid.png"
                  alt="Cuboid 3D Image"
                  className="size-[140px]"
                  ref={cuboidRef}
                  style={{ rotate: cuboidRotate }}
                />
              </Circle>
            </div>
            {/* Torus Image */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute -left-[600px] -top-[80px]">
                <motion.img
                  src="/assets/images/torus.png"
                  alt="Torus 3D Image"
                  className="size-[140px]"
                  ref={torusRef}
                  style={{ rotate: torusRotate }}
                />
              </Circle>
            </div>
            <motion.div
              style={{ rotate: icosahedronRotate }}
              ref={icosahedronRef}
              className="inline-flex"
            >
              {/* Main Image */}
              <img
                src="/assets/images/icosahedron.png"
                alt="Icosahedron 3D Image"
                className="w-[500px] "
                
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Button */}
        <div className="flex justify-center flex-col items-center mt-40 md:mt-80 gap-4">
          <div className="h-10 w-5 outline outline-[6px] outline-sky-500/10 inline-flex justify-center pt-2 rounded-full">
            <motion.div
              className="h-3 w-1 bg-sky-500 rounded-full"
              animate={{ translateY: 12, opacity: 0.2 }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
          <p className="uppercase text-zinc-500 font-extrabold tracking-wider">
            Scroll to learn more
          </p>
        </div>
      </div>
    </section>
  );
};
