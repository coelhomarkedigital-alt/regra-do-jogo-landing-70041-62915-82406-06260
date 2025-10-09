import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-books.jpg";
import logoRegrasDoJogo from "@/assets/logo-regras-do-jogo.jpg";
export const Hero = () => {
  const scrollToPricing = () => {
    const pricing = document.getElementById('pricing');
    pricing?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} />
      <div className="absolute inset-0 z-0 bg-gradient-hero opacity-90" />
      
      <div className="absolute inset-0 z-0 opacity-30" style={{
      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
      backgroundSize: '50px 50px',
      animation: 'moveGrid 20s linear infinite'
    }} />
      
      <div className="container relative z-10 px-4 py-16 mx-auto text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-block bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-medium mb-4 text-white/90">Transforme sua vida através da leitura inteligente</div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Pare de adiar.<br />
            Comece a evoluir.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">Transforme leitura em hábito, hábito em conhecimento e conhecimento em resultado, através do nosso Clube do livro Regras do Jogo.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="xl" onClick={scrollToPricing} className="w-full sm:w-auto">
              Quero fazer parte do Clube
            </Button>
          </div>

          <div className="pt-3 text-white/80 text-lg font-bold">
            <p className="font-semibold text-slate-50">R$ 1,33/dia – menos que um café ☕</p>
            <p className="text-sm mt-1">Acesso imediato • Cancele quando quiser</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      
      <style>{`
        @keyframes moveGrid {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>;
};