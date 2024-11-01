import {
  Ambassadors,
  Competitions,
  CTA,
  Hero,
  Sponsors,
} from "@/components/sections";
import { connectDb } from "@/lib/config/db";
import { nonTechCompetitionsData, techCompetitionsData } from "@/lib/data";
import { Ambassador } from "@/lib/models/Ambassador";

export default async function Home() {
  await connectDb();
  const ambassadors = await Ambassador.find({});

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
      <Ambassadors heading="Our Ambassadors" ambassadors={ambassadors} />
      <CTA />
    </main>
  );
}
