import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, MessageCircle, Trophy } from "lucide-react";

export const HowItWorksForWho = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Receba a curadoria mensal",
      description: "Todo mês você descobre o livro escolhido + esquema de leitura semanal. Você adquire o livro (formato de sua preferência) e recebe toda estrutura para maximizar seu aprendizado."
    },
    {
      icon: Users,
      title: "Encontros mensais ao vivo",
      description: "1 vez por mês, aos sábados, às 9h. Discussões conduzidas por Carlos Marden e convidados para aprofundar insights e trocar experiências."
    },
    {
      icon: MessageCircle,
      title: "Comunidade ativa",
      description: "Grupo exclusivo no WhatsApp para networking, dúvidas e motivação mútua entre membros."
    },
    {
      icon: Trophy,
      title: "Aplique na prática",
      description: "Metodologia focada em transformar conhecimento em ação real nas 5 dimensões da sua vida."
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" data-animate="fade-up">
              Como funciona na prática?  
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className="bg-card shadow-card hover:shadow-hover transition-all duration-300 border-border/50" 
                data-animate={index % 2 === 0 ? "slide-left" : "slide-right"} 
                data-delay={String(index + 1)}
              >
                <CardContent className="pt-6 pb-6 px-6">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
