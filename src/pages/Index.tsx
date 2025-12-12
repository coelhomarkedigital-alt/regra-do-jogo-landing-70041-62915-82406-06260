import { Hero } from "@/components/sections/Hero";
import { VideoSection } from "@/components/sections/VideoSection";
import { ProblemCards } from "@/components/sections/ProblemCards";
import { SolutionIntegrated } from "@/components/sections/SolutionIntegrated";
import { GrowthDimensions } from "@/components/sections/GrowthDimensions";
import { HowItWorksForWho } from "@/components/sections/HowItWorksForWho";
import { ResultsCondensed } from "@/components/sections/ResultsCondensed";
import { Mentor } from "@/components/sections/Mentor";
import { SocialProof } from "@/components/sections/SocialProof";
import { BooksCarousel } from "@/components/BooksCarousel";
import { Schedule } from "@/components/sections/Schedule";
import { Pricing } from "@/components/sections/Pricing";
import { Guarantee } from "@/components/sections/Guarantee";
import { Doubts } from "@/components/sections/Doubts";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <VideoSection />
      <ProblemCards />
      <SolutionIntegrated />
      <GrowthDimensions />
      <HowItWorksForWho />
      <ResultsCondensed />
      <Mentor />
      <SocialProof />
      <BooksCarousel />
      <Schedule />
      <Pricing />
      <Guarantee />
      <Doubts />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
