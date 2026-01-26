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
            O problema não é você não ler.<br />
            ​ <span className="text-primary">É você ler sem saber o quê, quando e por quê.</span>​
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto leading-relaxed text-center">A maioria das pessoas lê livros por impulso, por indicação aleatória ou porque 'todo mundo está lendo'. Resultado? Acúmulo, culpa e zero clareza. Livros não geram transformação quando você lê sem hierarquia.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="xl" asChild className="w-full sm:w-auto shadow-glow">
              <a href="http://projetoregrasdojogo.rds.land/clube-do-livro-assinantes-mensais" target="_blank" rel="noopener noreferrer">
                Quero fazer parte do Clube
              </a>
            </Button>
          </div>

          <div className="pt-3 text-foreground text-lg font-bold">
            <p className="font-semibold text-primary drop-shadow-lg">R$ 1,33/dia – menos que um café ☕</p>
            <p className="text-sm mt-1 text-foreground/70">Acesso imediato</p>
          </div>

          
        </div>
      </motion.div>
    </LampContainer>;
};