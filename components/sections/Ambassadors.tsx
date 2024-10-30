"use client";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AmbassadorCard } from "../AmbassadorCard";
import { Ambassador } from "@/types/types";
import { cn } from "@/lib/utils";

export const Ambassadors = ({
  heading,
  ambassadors,
}: {
  heading: string;
  ambassadors: Ambassador[];
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timeout = setTimeout(() => {
      if (current === Math.ceil(ambassadors.length / 2) - 1) {
        api?.scrollTo(0);
        return;
      }
      api?.scrollTo(current + 1);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [current, isHovered]);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <section className={cn("py-24 overflow-x-clip md:-mt-28")}>
      <div className="container">
        {/* Heading */}
        <div className="flex sm:items-center max-sm:flex-col justify-between gap-x-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.7, type: "spring", delay: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title font-bold text-4xl md:text-5xl lg:text-6xl text-center max-w-3xl mx-auto"
          >
            {heading}
          </motion.h2>
          <div className="flex items-center gap-x-4 max-sm:justify-between max-sm:mt-5">
            <button
              onClick={() => api?.scrollTo(current - 2)}
              className="center size-12 rounded-full border border-text text-text hover:text-primaryCol hover:border-primaryCol transition-all duration-200"
            >
              <ArrowLeft className="size-6" />
            </button>
            <button
              onClick={() => api?.scrollTo(current)}
              className="center size-12 rounded-full border border-text text-text hover:text-primaryCol hover:border-primaryCol transition-all duration-200"
            >
              <ArrowRight className="size-6" />
            </button>
          </div>
        </div>
        {/* Slider */}
        <div className="mt-36 lg:mt-48">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              slidesToScroll: 1,
            }}
            className="w-full max-w-sm"
          >
            <CarouselContent>
              {ambassadors.map((team, index) => (
                <CarouselItem
                  key={index}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="xs:max-w-xs w-full md:max-w-md flex flex-col items-start select-none "
                >
                  <AmbassadorCard {...team} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      {/* Dots */}
      <div className="flex justify-center mt-10">
        <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
          {ambassadors
            .slice(0, Math.ceil(ambassadors.length / 2))
            .map((_, index) => (
              <div
                key={index}
                className={cn(
                  "size-2.5 bg-zinc-500 rounded-full cursor-pointer",
                  index === current && "bg-zinc-300"
                )}
                onClick={() => {
                  api?.scrollTo(index);
                }}
              ></div>
            ))}
        </div>
      </div>
    </section>
  );
};
