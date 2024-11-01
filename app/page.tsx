import {
  Ambassadors,
  Competitions,
  CTA,
  Hero,
  Sponsors,
} from "@/components/sections";
import { connectDb } from "@/lib/config/db";
import {
  nonTechCompetitionsData,
  nontechCompetitionsHeading,
  techCompetitionsData,
  techCompetitionsHeading,
} from "@/lib/data";
import { Ambassador } from "@/lib/models/Ambassador";

export default async function Home() {
  await connectDb();
  const ambassadors = await Ambassador.find({});

  return (
    <main className="">
      <Hero />
      <Competitions
        heading={techCompetitionsHeading}
        data={techCompetitionsData}
      />
      <Sponsors />
      <Competitions
        heading={nontechCompetitionsHeading}
        data={nonTechCompetitionsData}
        className="pt-44"
      />
      {ambassadors.length > 3 && (
        <Ambassadors heading="Our Ambassadors" ambassadors={ambassadors} />
      )}
      <CTA />
    </main>
  );
}
