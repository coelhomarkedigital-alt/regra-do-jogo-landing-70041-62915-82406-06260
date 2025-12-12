import { Button } from "@/components/ui/button";
import readingWithBook from "@/assets/reading-with-book.jpg";
export const FinalCTA = () => {
  const scrollToPricing = () => {
    const pricing = document.getElementById('pricing');
    pricing?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="py-20 bg-background relative overflow-hidden bg-textured">
      <div className="absolute inset-0 z-0 opacity-60 bg-cover bg-center" style={{
      backgroundImage: `url(${readingWithBook})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }} />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background/50 via-background/55 to-background/60" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            O momento é <span className="text-primary drop-shadow-glow">agora</span>.<br />
            A escolha é sua.
          </h2>

          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Você pode continuar adiando sua evolução ou pode dar o primeiro passo hoje. 
            Junte-se a milhares de pessoas que escolheram transformar leitura em resultado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button variant="hero" size="xl" asChild className="w-full sm:w-auto shadow-glow">
              <a href="http://projetoregrasdojogo.rds.land/clube-do-livro-assinantes-mensais" target="_blank" rel="noopener noreferrer">
                Começar com Plano Mensal
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild className="w-full sm:w-auto">
              <a href="http://projetoregrasdojogo.rds.land/clube-do-livro-assinantes-anuais" target="_blank" rel="noopener noreferrer">
                Garantir Plano Anual
              </a>
            </Button>
          </div>

          <div className="pt-6 space-y-2 text-foreground/70">
            <p className="text-lg font-medium">
              ✅ Acesso imediato • ✅ Garantia de 7 dias • ✅ Cancele quando quiser
            </p>
            <p className="text-sm text-primary font-semibold">
              R$ 1,33/dia para transformar sua vida
            </p>
          </div>

          <div className="pt-12 border-t border-primary/20 mt-12">
            <p className="text-foreground/60 italic text-lg">"A leitura é para a mente o que o exercício é para o corpo." - Joseph Addison</p>
          </div>
        </div>
      </div>
    </section>;
};