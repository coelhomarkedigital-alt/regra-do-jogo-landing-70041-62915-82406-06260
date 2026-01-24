import { Button } from "@/components/ui/button";
import { BookCheck, Lightbulb, MessageSquareText, Filter, TrendingUp } from "lucide-react";
export const ResultsCondensed = () => {
  const scrollToPricing = () => {
    const pricing = document.getElementById("pricing");
    pricing?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const results = [{
    icon: BookCheck,
    text: "Ler 8 livros por ano do começo ao fim, não 20 pela metade."
  }, {
    icon: Lightbulb,
    text: "Saber o que fazer com o que leu, não só marcar frases."
  }, {
    icon: MessageSquareText,
    text: "Discussões que organizam seu pensamento, não curtida em resenha."
  }, {
    icon: Filter,
    text: "Critério pra escolher o próximo livro, não impulso de algoritmo."
  }, {
    icon: TrendingUp,
    text: "Evolução em 5 áreas específicas, não só produtividade."
  }];
  return <section className="py-16 bg-paper relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto space-y-10 text-center">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-paper-foreground">
              O que você vai conquistar?
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {results.map((result, index) => <div key={index} className="bg-white p-5 rounded-xl border-l-4 border-primary hover:shadow-hover transition-all flex items-start gap-4 shadow-card">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <result.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-lg leading-relaxed text-left pt-1 font-medium text-paper-foreground">
                  {result.text}
                </p>
              </div>)}
          </div>

          <div className="pt-6">
            <div className="inline-block bg-white px-8 py-6 rounded-2xl border border-primary/20 shadow-hover">
              <p className="text-xl font-bold mb-4 text-paper-foreground">
                8 livros por ano. Do começo ao fim. Com propósito.
              </p>
              <Button variant="cta" size="xl" onClick={scrollToPricing} className="shadow-glow">
                Entrar no clube
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};