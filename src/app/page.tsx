import GetStarted from "@/pages/home/GetStarted";
import HealthcareGuardian from "@/pages/home/HealthcareGuardian";
import Hero from "@/pages/home/Hero";
import OurService from "@/pages/home/OurService";
import WhatWeDoForYou from "@/pages/home/WhatWeDoForYou";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <HealthcareGuardian/>
      <WhatWeDoForYou/>
      <OurService/>
      <GetStarted/>
    </main>
  );
}
