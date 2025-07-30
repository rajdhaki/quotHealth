import HealthcareGuardian from "@/pages/home/HealthcareGuardian";
import Hero from "@/pages/home/Hero";
import WhatWeDoForYou from "@/pages/home/WhatWeDoForYou";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <HealthcareGuardian/>
      <WhatWeDoForYou/>
    </main>
  );
}
