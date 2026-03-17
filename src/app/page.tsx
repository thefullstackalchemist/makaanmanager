import { Hero } from "@/components/Hero";
import { EmotionStrip } from "@/components/EmotionStrip";
import { ServicesSection } from "@/components/Services";
import { StatsSection } from "@/components/Stats";
import { LeadSection } from "@/components/LeadSection";

export default function Home() {
  return (
    <>
      <Hero />
      <EmotionStrip />
      <ServicesSection />
      <StatsSection />
      <LeadSection />
    </>
  );
}
