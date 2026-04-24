import { Hero } from "@/components/sections/Hero";
import { VideoSection } from "@/components/sections/VideoSection";
import { Button } from "@/components/ui/button";
import { SolutionIntegrated } from "@/components/sections/SolutionIntegrated";
import { ClubDifference } from "@/components/sections/ClubDifference";
import { GrowthDimensions } from "@/components/sections/GrowthDimensions";
import { HowItWorksForWho } from "@/components/sections/HowItWorksForWho";
import { BookSelection } from "@/components/sections/BookSelection";
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
import { PriceCTA } from "@/components/sections/PriceCTA";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <section className="py-10 bg-black">
        <div className="text-center px-4">
          <Button variant="cta" size="xl" asChild className="shadow-cta">
            <a href="https://projetoregrasdojogo.com.br/finalizar-compra/?add-to-cart=1550" target="_blank" rel="noopener noreferrer">
              Quero aprender a ler com método
            </a>
          </Button>
        </div>
      </section>
      <SolutionIntegrated />
      <HowItWorksForWho />
      <ClubDifference />
      <GrowthDimensions />
      <PriceCTA />
      <BookSelection />
      <Mentor />
      <SocialProof />
      <section className="py-12 bg-background">
        <div className="text-center">
          <Button variant="hero" size="xl" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="shadow-glow cursor-pointer">
            Quero aprender a ler melhor
          </Button>
        </div>
      </section>
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
