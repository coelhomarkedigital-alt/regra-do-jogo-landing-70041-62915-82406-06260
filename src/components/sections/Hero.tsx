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
        className="container relative z-10 px-4 py-16 mx-auto text-center w-full"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block bg-primary/20 backdrop-blur-md px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 text-primary border border-primary/30">
            Regras do Jogo • Clube de Leitura Guiada
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-glow">
            Leia <span className="text-primary">1 livro por mês</span>, domine o conteúdo dos livros e nunca mais esqueça, nem deixe de aplicar o que você leu
          </h1>

          <div className="w-full max-w-[860px] mx-auto pt-4">
            <div
              className="relative w-full rounded-2xl overflow-hidden aspect-video"
              style={{
                boxShadow:
                  '0 0 30px rgba(251, 191, 36, 0.3), 0 0 60px rgba(245, 192, 69, 0.15), inset 0 0 0 2px rgba(251, 191, 36, 0.4)',
              }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/0pUzQjhjDRg?rel=0&fs=0&disablekb=1&iv_load_policy=3&playsinline=1&modestbranding=1&controls=1"
                title="Veja como funciona"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen={false}
              />
            </div>
          </div>

          <p className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto leading-relaxed text-center">
            Conheça a metodologia que, ao lado de uma tribo de leitores, tem transformado a forma de ler e aprender de quem faz parte do Clube do Livro Regras do Jogo
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="xl" onClick={scrollToPricing} className="w-full sm:w-auto shadow-glow cursor-pointer">
              Quero fazer parte da tribo
            </Button>
          </div>
        </div>
      </motion.div>
    </LampContainer>
  );
};