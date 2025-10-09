import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Calendar, Video, MessageCircle } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Faça sua inscrição",
      description: "Escolha o plano que funciona melhor para você (mensal ou anual) e garanta seu acesso imediato.",
      step: "01",
    },
    {
      icon: Calendar,
      title: "Receba a curadoria",
      description: "Todo mês, você descobre o livro escolhido + esquema de leitura semanal para organizar sua rotina.",
      step: "02",
    },
    {
      icon: Video,
      title: "Participe dos encontros",
      description: "1x por mês, aos sábados às 9h (Brasília), encontro online de 2-3h com discussões profundas e práticas.",
      step: "03",
    },
    {
      icon: MessageCircle,
      title: "Conecte-se na comunidade",
      description: "Acesso exclusivo ao grupo no WhatsApp para trocar insights, tirar dúvidas e fazer networking.",
      step: "04",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Como funciona?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Um processo simples, mas poderoso. Você só precisa aparecer e se dedicar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-border/50 relative overflow-hidden group"
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {step.step}
                </div>
                <CardContent className="pt-8 pb-6 px-6 space-y-4 relative z-10">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <div className="inline-block px-8 py-6 bg-muted rounded-lg">
              <p className="text-lg text-foreground">
                <span className="font-semibold">100% online.</span> Participe de onde estiver. As gravações ficam disponíveis até o fim do mês.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
