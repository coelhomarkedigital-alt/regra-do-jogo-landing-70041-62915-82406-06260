import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Briefcase, DollarSign, Sparkles } from "lucide-react";
export const GrowthDimensions = () => {
  const dimensions = [
    {
      icon: Heart,
      title: "Crescimento Pessoal",
      description: "Autoconhecimento, inteligência emocional, hábitos, foco e disciplina.",
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
    {
      icon: Users,
      title: "Relacionamentos",
      description: "Comunicação eficaz, empatia, networking e construção de vínculos significativos.",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: Briefcase,
      title: "Sucesso Profissional",
      description: "Liderança, produtividade, estratégia e gestão de carreira.",
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      icon: DollarSign,
      title: "Educação Financeira",
      description: "Investimentos, mentalidade de abundância e construção de patrimônio.",
      color: "text-yellow-600",
      bg: "bg-yellow-500/10",
    },
    {
      icon: Sparkles,
      title: "Espiritualidade",
      description: "Propósito, valores, filosofia de vida e conexão com algo maior.",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ];
  return (
    <section className="py-16 bg-paper">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-paper-foreground" data-animate="fade-up">
              5 Dimensões de uma Vida de Sucesso      
            </h2>
            <p className="text-xl text-paper-foreground/70 max-w-3xl mx-auto">
              Nossa curadoria abrange todas as áreas essenciais para uma vida plena e próspera. Cada livro trabalha pelo
              menos uma dessas dimensões.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {dimensions.map((dimension, index) => (
              <Card
                key={index}
                className="bg-white shadow-success hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-primary/20"
                data-animate="scale"
                data-delay={String(index + 1)}
              >
                <CardContent className="pt-7 pb-5 px-5 text-center space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <dimension.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-paper-foreground leading-tight">{dimension.title}</h3>
                  <p className="text-xs text-paper-foreground/70 leading-relaxed">{dimension.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
