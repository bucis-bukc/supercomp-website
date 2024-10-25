import React from "react";
import { Card } from "../helpers";
import { nonTechCompetitions, techCompetitions } from "@/lib/data";

export const Competitions = () => {
  return (
    <section className="bg-gray-bg">
      <div className="container mx-auto py-20">
        <h2 className="text-text font-extrabold lg:text-6xl md:text-5xl text-4xl">
          Competitions
        </h2>

        <div className="mt-20">
          <h3 className="lg:text-4xl text-3xl text-text font-semibold">
            Technical Competitions
          </h3>

          <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            {techCompetitions.map((comp, idx) => (
              <Card key={idx} {...comp} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="lg:text-4xl text-3xl text-text font-semibold">
            Non-Technical Competitions
          </h3>

          <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            {nonTechCompetitions.map((comp, idx) => (
              <Card key={idx} {...comp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
