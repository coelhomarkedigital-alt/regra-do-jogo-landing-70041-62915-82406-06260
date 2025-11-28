import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToPricing = () => {
    const pricing = document.getElementById('pricing');
    pricing?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 px-4 md:hidden animate-fade-in">
      <Button 
        variant="cta"
        size="lg"
        asChild
        className="w-full shadow-cta animate-[pulse_3s_ease-in-out_infinite]"
      >
        <a href="https://pag.ae/81g7_gNNH" target="_blank" rel="noopener noreferrer">
          Quero evoluir com o Clube
          <ArrowUp className="w-5 h-5 ml-2 rotate-90" />
        </a>
      </Button>
    </div>
  );
};
