import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Target, Users, GraduationCap, TrendingUp } from "lucide-react";

export const ValueProposition = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Curadoria Estratégica",
      description: "Obras escolhidas a dedo. Cada livro é selecionado para maximizar seu crescimento nas 5 dimensões da vida.",
    },
    {
      icon: Target,
      title: "Método Comprovado",
      description: "Esquema de leitura semanal, encontros estruturados e materiais de apoio. Você sabe exatamente o que fazer.",
    },
    {
      icon: Users,
      title: "Comunidade Engajada",
      description: "Discutir com pessoas que pensam como você multiplica o aprendizado. Troque ideias, faça conexões reais.",
    },
    {
      icon: GraduationCap,
      title: "Mentoria Exclusiva",
      description: "Encontros mensais mediados por Carlos Marden: Procurador Federal, investidor e mentor com visão prática de negócios e vida.",
    },
    {
      icon: TrendingUp,
      title: "Transformação Real",
      description: "Não é sobre ler mais. É sobre aplicar o que você lê e ver resultados concretos na sua vida pessoal e profissional.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              O que faz o Clube ser diferente?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Não é só mais um clube de leitura. É um sistema completo de transformação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border/50 group"
              >
                <CardContent className="pt-8 pb-6 px-6 space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-[hsl(158,64%,95%)] flex items-center justify-center group-hover:bg-[hsl(158,64%,90%)] transition-colors">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
