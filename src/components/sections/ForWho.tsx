import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export const ForWho = () => {
  const profiles = [
    "Profissionais que querem evoluir na carreira.",
    "Empreendedores buscando insights estratégicos.",
    "Pessoas que lutam para criar o hábito de ler.",
    "Quem quer aprender com troca de experiências.",
    "Aqueles que valorizam método e estrutura.",
    "Pessoas que buscam crescimento em múltiplas áreas.",
    "Quem quer aplicar conhecimento, não apenas acumular.",
    "Profissionais que valorizam networking de qualidade.",
  ];

  return (
    <section className="py-20 bg-background bg-textured">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Para quem é o Clube?
            </h2>
            <p className="text-xl text-muted-foreground">
              Se você se identifica com pelo menos 3 itens abaixo, esse clube é para você.
            </p>
          </div>

          <Card className="bg-card shadow-hover border-primary/20">
            <CardContent className="pt-8 pb-8 px-8">
              <div className="grid md:grid-cols-2 gap-4">
                {profiles.map((profile, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {profile}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-lg text-muted-foreground italic">
              "Se você quer ir rápido, vá sozinho. Se quer ir longe, vá acompanhado."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
