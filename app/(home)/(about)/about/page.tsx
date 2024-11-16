"use client"

import { AboutHero } from "../components/AboutHero";
import { ContactSection } from "../components/ContactSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { MissionSection } from "../components/MissionSection";
import { PartnerSection } from "../components/PartnerSection";
import { ServicesOverview } from "../components/ServicesOverview";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <ServicesOverview />
      <FeaturesSection />
      <PartnerSection />
      <ContactSection />
    </>
  );
}
