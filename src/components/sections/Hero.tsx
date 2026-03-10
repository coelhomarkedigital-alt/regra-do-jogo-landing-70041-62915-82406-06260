import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp-container";
export const Hero = () => {
  const scrollToVideo = () => {
    const videoSection = document.getElementById('video-section');
    videoSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <LampContainer>
      <motion.div initial={{
      opacity: 0.5,
      y: 100
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut"
    }} className="container relative z-10 px-4 py-16 mx-auto text-center w-full">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-block bg-primary/20 backdrop-blur-md px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 text-primary border border-primary/30">Regras do Jogo • Clube de Leitura Guiada</div>
          
          <p className="text-lg lg:text-2xl text-white leading-relaxed mb-2 md:text-2xl">Você já leu. Talvez até bastante.</p>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-glow">
            Mas seja honesto: <span className="text-primary">o que realmente mudou na sua vida por causa disso?</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto leading-relaxed text-center">O problema não é você. É que ninguém te ensinou a <span className="text-primary font-bold">ler com método</span>. O Método de Leitura Aplicada existe para mudar isso.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="xl" onClick={scrollToVideo} className="w-full sm:w-auto shadow-glow cursor-pointer">
              Quero entender o método
            </Button>
          </div>

          <p className="text-sm mt-2 text-foreground/70 font-bold">Continue para entender o método</p>

          
        </div>
      </motion.div>
    </LampContainer>;
};