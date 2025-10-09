import { Card, CardContent } from "@/components/ui/card";
import { BookX, Clock, HelpCircle } from "lucide-react";

export const ProblemSolution = () => {
  const problems = [
    {
      icon: BookX,
      title: "Você compra, mas não lê",
      description: "Aquela pilha de livros acumulando poeira na estante. A intenção existe, mas a execução não acontece.",
    },
    {
      icon: Clock,
      title: "Falta de tempo (ou foco)",
      description: "Entre trabalho, família e rotina, o tempo para ler simplesmente desaparece. Ou você começa e se perde no meio do caminho.",
    },
    {
      icon: HelpCircle,
      title: "Não sabe o que ler",
      description: "Tantos livros, tantas promessas. Qual vale seu tempo? Qual vai realmente fazer diferença?",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Se identificou?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              O problema não é falta de vontade. É falta de método.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 animate-scale-in">
            {problems.map((problem, index) => (
              <Card 
                key={index} 
                className="bg-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardContent className="pt-8 pb-6 px-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <problem.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8 animate-fade-in">
            <div className="inline-block px-8 py-6 bg-gradient-card rounded-lg shadow-card border border-border/30">
              <p className="text-xl md:text-2xl font-medium text-foreground">
                💡 <span className="text-primary font-bold">A solução:</span> Um método que transforma intenção em ação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
