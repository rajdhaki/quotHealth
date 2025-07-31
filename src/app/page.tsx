import AppDownload from "@/pages/home/AppDownload";
import GetStarted from "@/pages/home/GetStarted";
import HealthcareGuardian from "@/pages/home/HealthcareGuardian";
import Hero from "@/pages/home/Hero";
import Macbook from "@/pages/home/Macbook";
import OurService from "@/pages/home/OurService";
import WhatWeDoForYou from "@/pages/home/WhatWeDoForYou";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <HealthcareGuardian/>
      <WhatWeDoForYou/>
      <Macbook/>
      <OurService/>
      <GetStarted/>
      <AppDownload/>
    </main>
  );
}
