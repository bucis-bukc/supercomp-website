import {
  Ambassadors,
  Competitions,
  CTA,
  Hero,
  Sponsors,
} from "@/components/sections";
import { nonTechCompetitionsData, techCompetitionsData } from "@/lib/data";
import { Ambassador } from "@/types/types";
const ambassadors: Ambassador[] = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 555-1234",
    institute: "Harvard University",
    cnic: "12345-6789012-3",
    picture: "/team 1.png",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 555-5678",
    institute: "Stanford University",
    cnic: "23456-7890123-4",
    picture: "/team 2.png",
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "+1 555-9101",
    institute: "MIT",
    cnic: "34567-8901234-5",
    picture: "/team 3.png",
  },
];

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
      <Ambassadors heading="Our Ambassadors" ambassadors={ambassadors} />
      <CTA />
    </main>
  );
}
