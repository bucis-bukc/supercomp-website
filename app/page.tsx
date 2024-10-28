import { Competitions, CTA, Hero, Sponsors } from "@/components/sections";
import { nonTechCompetitionsData, techCompetitionsData } from "@/lib/data";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Competitions
        heading="Showcase your skills in technical competitions!"
        data={techCompetitionsData}
      />
      <Sponsors />
      <Competitions
        heading="Get ready for the General Competitions!"
        data={nonTechCompetitionsData}
        className="pt-44"
      />
      <CTA />
    </main>
  );
}
