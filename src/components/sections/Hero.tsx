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
          
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-glow md:text-4xl">
            Deixa eu te fazer uma pergunta simples:<br />
            <span className="text-primary">Quando foi a última vez que um livro mudou uma decisão importante da sua vida?</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto leading-relaxed text-center">Se a resposta não vem fácil, o problema não é memória.
É a falta de um método para reter e aplicar o que você lê quando isso realmente importa.</p>

          

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="xl" asChild className="w-full sm:w-auto shadow-glow">
              <a href="http://projetoregrasdojogo.rds.land/clube-do-livro-assinantes-mensais" target="_blank" rel="noopener noreferrer">
                Quero Ler com Critério
              </a>
            </Button>
          </div>

          <p className="text-sm mt-2 text-foreground/70 font-bold">Continue para entender o método</p>

          
        </div>
      </motion.div>
    </LampContainer>;
};