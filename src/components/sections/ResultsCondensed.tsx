import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Zap, Compass, Award } from "lucide-react";
export const ResultsCondensed = () => {
  const scrollToPricing = () => {
    const pricing = document.getElementById('pricing');
    pricing?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const results = [{
    icon: Target,
    text: "Hábito de leitura consistente e prazeroso"
  }, {
    icon: TrendingUp,
    text: "Insights práticos aplicados nas 5 dimensões da vida"
  }, {
    icon: Zap,
    text: "Pensamento crítico através de discussões mediadas"
  }, {
    icon: Compass,
    text: "Rede de contatos que compartilham valores e evolução"
  }, {
    icon: Award,
    text: "Conhecimento transformado em ação e resultados reais"
  }];
  return <section className="py-16 bg-background relative overflow-hidden">
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto space-y-10 text-center">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              O que você vai conquistar
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-muted-foreground">Mais do que ler, você vai evoluir em todas as áreas da sua vida. Resultados reais através de método e consistência</p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {results.map((result, index) => <div key={index} className="bg-gradient-card p-5 rounded-xl border-l-4 border-primary hover:shadow-hover transition-all flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <result.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-lg leading-relaxed text-left pt-1 font-medium text-foreground">
                  {result.text}
                </p>
              </div>)}
          </div>

          <div className="pt-6">
            <div className="inline-block bg-gradient-card px-8 py-6 rounded-2xl border border-border/50 shadow-card">
              <p className="text-xl font-bold mb-4 text-foreground">O compromisso é seu. Os resultados, também.</p>
              <Button variant="cta" size="xl" onClick={scrollToPricing} className="shadow-cta">
                Começar minha transformação
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};