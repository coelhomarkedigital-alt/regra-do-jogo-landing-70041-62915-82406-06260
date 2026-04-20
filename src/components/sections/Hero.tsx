import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp-container";

export const Hero = () => {
  const scrollToPricing = () => {
    const pricing = document.getElementById('pricing');
    pricing?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="container relative z-10 px-4 py-16 mx-auto text-center w-full">
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block bg-primary/20 backdrop-blur-md px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 text-primary border border-primary/30">
            Regras do Jogo • Clube de Leitura Guiada
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-glow">
            Você lê. Esquece tudo. E não aplica nada.
          </h1>

          <p className="text-2xl md:text-3xl text-foreground max-w-3xl mx-auto leading-relaxed text-center">
            Leia 1 livro por mês, <span className="text-primary font-semibold">retenha e aplique</span> o que aprendeu com um método simples que ajuda você a parar de esquecer o que lê.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="xl" onClick={scrollToPricing} className="w-full sm:w-auto shadow-glow cursor-pointer">
              Quero aplicar o que eu leio
            </Button>
          </div>
        </div>
      </motion.div>
    </LampContainer>);

};