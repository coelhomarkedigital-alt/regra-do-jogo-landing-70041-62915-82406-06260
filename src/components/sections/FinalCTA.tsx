import { Button } from "@/components/ui/button";
import readingGroup from "@/assets/reading-group.jpg";
export const FinalCTA = () => {
  const scrollToPricing = () => {
    const pricing = document.getElementById('pricing');
    pricing?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="py-20 bg-background relative overflow-hidden bg-textured">
      <div className="absolute inset-0 z-0 opacity-30" style={{
      backgroundImage: `url(${readingGroup})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background/85 via-background/90 to-card/85" />
      
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
            <Button variant="hero" size="xl" onClick={scrollToPricing} className="w-full sm:w-auto shadow-glow">
              Garantir Plano Anual
            </Button>
            <Button variant="outline" size="xl" onClick={scrollToPricing} className="w-full sm:w-auto">
              Começar com Plano Mensal
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
            <p className="text-foreground/60 italic text-lg">"A melhor hora para plantar uma árvore foi há 20 anos. A segunda melhor hora é agora."
— Autor desconhecido</p>
          </div>
        </div>
      </div>
    </section>;
};