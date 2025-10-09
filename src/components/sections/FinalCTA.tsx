import { Button } from "@/components/ui/button";
import readingGroup from "@/assets/reading-group.jpg";
export const FinalCTA = () => {
  const scrollToPricing = () => {
    const pricing = document.getElementById('pricing');
    pricing?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="py-20 bg-[hsl(0,0%,5%)] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-25" style={{
      backgroundImage: `url(${readingGroup})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'blur(2px)'
    }} />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[hsl(0,0%,5%)]/80 via-[hsl(270,30%,8%)]/70 to-[hsl(0,0%,10%)]/80" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            O momento é agora.<br />
            A escolha é sua.
          </h2>

          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Você pode continuar adiando sua evolução ou pode dar o primeiro passo hoje. 
            Junte-se a milhares de pessoas que escolheram transformar leitura em resultado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button variant="hero" size="xl" onClick={scrollToPricing} className="w-full sm:w-auto">
              Garantir Plano Anual
            </Button>
            <Button variant="outline" size="xl" onClick={scrollToPricing} className="w-full sm:w-auto border-2 border-accent text-accent hover:bg-accent hover:text-[#1a1a1a]">
              Começar com Plano Mensal
            </Button>
          </div>

          <div className="pt-6 space-y-2 text-white/80">
            <p className="text-lg font-medium">
              ✅ Acesso imediato • ✅ Garantia de 7 dias • ✅ Cancele quando quiser
            </p>
            <p className="text-sm">
              R$ 1,33/dia para transformar sua vida
            </p>
          </div>

          <div className="pt-12 border-t border-white/20 mt-12">
            <p className="text-white/70 italic text-lg">"A melhor hora para plantar uma árvore foi há 20 anos. A segunda melhor hora é agora."
— Autor desconhecido</p>
          </div>
        </div>
      </div>
    </section>;
};