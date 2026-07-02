import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { NextChallengeSection } from "@/components/sections/NextChallengeSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PromptLibrarySection } from "@/components/sections/PromptLibrarySection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <RoadmapSection />
        <ProjectsSection />
        <PromptLibrarySection />
        <FAQSection />
        <NextChallengeSection />
      </main>
      <Footer />
    </>
  );
}
