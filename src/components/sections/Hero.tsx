import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp-container";

export const Hero = () => {
  const scrollToPricing = () => {
    const pricing = document.getElementById('pricing');
    pricing?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="container relative z-10 px-4 py-16 mx-auto text-center w-full"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-block bg-primary/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-medium mb-4 text-primary border border-primary/30">Transforme sua vida através da leitura inteligente</div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-glow">
            Pare de adiar.<br />
            Comece a <span className="text-primary">evoluir</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto leading-relaxed">Transforme leitura em hábito, hábito em conhecimento e conhecimento em resultado, através do nosso Clube do livro Regras do Jogo.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="xl" onClick={scrollToPricing} className="w-full sm:w-auto shadow-glow">
              Quero fazer parte do Clube
            </Button>
          </div>

          <div className="pt-3 text-foreground text-lg font-bold">
            <p className="font-semibold text-primary drop-shadow-lg">R$ 1,33/dia – menos que um café ☕</p>
            <p className="text-sm mt-1 text-foreground/70">Acesso imediato • Cancele quando quiser</p>
          </div>
        </div>
      </motion.div>
    </LampContainer>
  );
};