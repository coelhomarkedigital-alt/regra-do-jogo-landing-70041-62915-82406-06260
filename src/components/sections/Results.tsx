import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, Zap, Compass } from "lucide-react";

export const Results = () => {
  const results = [
    {
      icon: Target,
      text: "Criar e manter o hábito de leitura de forma consistente e prazerosa",
    },
    {
      icon: TrendingUp,
      text: "Aplicar insights práticos nas 5 dimensões: pessoal, relacionamentos, profissional, financeiro e espiritual",
    },
    {
      icon: Zap,
      text: "Desenvolver pensamento crítico e capacidade de análise através das discussões mediadas",
    },
    {
      icon: Compass,
      text: "Construir uma rede de contatos com pessoas que compartilham valores e buscam evolução",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Resultados que você pode esperar
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Não prometemos mágica. Prometemos transformação através da consistência e do método certo.
            </p>
          </div>

          <div className="space-y-6">
            {results.map((result, index) => (
              <Card 
                key={index}
                className="bg-gradient-card shadow-card hover:shadow-success transition-all duration-300 hover:translate-x-2 border-l-4 border-l-primary"
              >
                <CardContent className="py-6 px-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[hsl(158,64%,95%)] flex items-center justify-center">
                      <result.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-lg text-foreground leading-relaxed pt-2">
                      {result.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <div className="inline-block px-8 py-6 bg-primary/5 rounded-lg border-2 border-primary/20">
              <p className="text-xl font-medium text-foreground">
                💪 O compromisso é seu. Os resultados, também.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
