import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Building, DollarSign, Sparkles } from "lucide-react";

export const BookSelection = () => {
  const dimensions = [
    {
      icon: Heart,
      title: "Crescimento Pessoal",
      description: "Autoconhecimento, inteligência emocional e disciplina através de livros que te fazem questionar quem você é e quem você quer ser."
    },
    {
      icon: Users,
      title: "Relacionamentos",
      description: "Comunicação, empatia e construção de vínculos significativos. Livros que te ensinam a entender pessoas e criar conexões reais."
    },
    {
      icon: Building,
      title: "Sucesso Profissional",
      description: "Liderança, produtividade, estratégia e gestão de carreira. Livros que te ajudam a tomar decisões melhores e avançar com clareza."
    },
    {
      icon: DollarSign,
      title: "Finanças Pessoais",
      description: "Investimentos, mentalidade de abundância e construção de patrimônio. Livros que te ensinam a pensar em longo prazo e construir segurança."
    },
    {
      icon: Sparkles,
      title: "Espiritualidade",
      description: "Propósito, valores e conexão com algo maior. Livros que te ajudam a encontrar sentido e viver com mais presença."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Como escolhemos os 8 livros do ano?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Todo ano, são 8 livros escolhidos por impacto em 5 áreas da sua vida. Não por popularidade. Cada livro cobre pelo menos uma delas. E você também indica, a curadoria é colaborativa.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {dimensions.map((dimension, index) => (
              <Card 
                key={index} 
                className="bg-white shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-primary/20"
                data-animate="scale"
                data-delay={String(index + 1)}
              >
                <CardContent className="pt-8 pb-6 px-5 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <dimension.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground leading-tight">{dimension.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{dimension.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
