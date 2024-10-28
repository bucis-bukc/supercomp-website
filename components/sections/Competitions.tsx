"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Card } from "../helpers";

interface CardsData {
  category: string;
  name: string;
  shortDescription: string;
  description: string;
  minMembers: number;
  maxMembers: number;
  rulebookUrl: string;
  href: string;
  color: string;
}

export const Competitions = ({
  data,
  className,
  heading,
}: {
  data: CardsData[];
  className?: string;
  heading: string;
}) => {
  const [selectedCard, setSelectedCard] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timeout = setTimeout(() => {
      setSelectedCard((prev) => (prev + 1) % data.length);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [selectedCard, isHovered]);

  return (
    <section className={cn("py-24 overflow-x-clip md:-mt-28", className)}>
      <div className="container mx-auto">
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center max-w-3xl mx-auto">
          {heading}
        </h2>
        <div className="mt-36 lg:mt-48 flex">
          <div className="flex flex-none gap-8">
            {data.map((card, idx) => (
              <div
                key={idx}
                className="inline-flex transition-all duration-500"
                style={{
                  transform: `translateX(calc((-100% - 2rem) * ${selectedCard}))`,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Card
                  color={card.color}
                  className="max-w-xs md:max-w-md"
                  btnText="Get Rule Book"
                >
                  {/* Image */}
                  <div className="flex justify-center -mt-28">
                    <div className="inline-flex relative">
                      {/* Shadow for Image */}
                      <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)] group-hover:bg-zinc-950/30 transition duration-300"></div>
                      <img
                        src={"/assets/images/pill.png"}
                        alt={card.name}
                        className="size-40 user-select-none group-hover:-translate-y-6 transition duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="font-heading font-black text-3xl mt-12">
                    {card.name}
                  </h3>
                  <p className="text-lg text-zinc-800 mt-4">
                    {card.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {data.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "size-2.5 bg-zinc-500 rounded-full cursor-pointer",
                  index === selectedCard && "bg-zinc-300"
                )}
                onClick={() => setSelectedCard(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
