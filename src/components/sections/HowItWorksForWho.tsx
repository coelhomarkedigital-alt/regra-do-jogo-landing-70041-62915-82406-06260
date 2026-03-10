import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, MessageCircle, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HowItWorksForWho = () => {
  const steps = [
  {
    icon: Calendar,
    title: "Receba a curadoria mensal",
    description: "Todo mês você recebe o cronograma semanal do livro atual: o que ler, quando ler, e o que observar em cada trecho. Você adquire o livro (formato de sua preferência) e aplica a estrutura para extrair o máximo daquele conteúdo."
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
  }];


  return (
    <section className="py-16 md:py-24 bg-[#FAF2E1]">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              O que você recebe no Clube  
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) =>
            <Card
              key={index}
              className="bg-white rounded-lg border border-primary/20 shadow-success hover:shadow-hover transition-all duration-300"
              data-animate={index % 2 === 0 ? "slide-left" : "slide-right"}
              data-delay={String(index + 1)}>
              
                <CardContent className="pt-6 pb-6 px-6">
                  <div className="flex gap-4 items-start">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 shrink-0">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-primary-foreground">{step.title}</h3>
                      <p className="text-amber-700">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="text-center pt-8">
            <Button variant="hero" size="xl" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="shadow-glow cursor-pointer">
              Quero fazer parte do Clube
            </Button>
          </div>
        </div>
      </div>
    </section>);

};