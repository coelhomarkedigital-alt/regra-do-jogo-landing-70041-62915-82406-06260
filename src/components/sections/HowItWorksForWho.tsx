import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HowItWorksForWho = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Metodologia com cronograma diário",
      description: "Metodologia com cronograma diário para você consolidar o hábito da leitura e ler 1 livro por mês com foco, absorção e aplicação real na sua vida."
    },
    {
      icon: Users,
      title: "Encontros mensais ao vivo",
      description: "Encontros mensais ao vivo com o especialista e membros engajados para debater o livro, tirar dúvidas e sair de cada sessão com insights prontos para aplicar na sua vida."
    },
    {
      icon: MessageCircle,
      title: "Comunidade ativa",
      description: "Comunidade ativa e encontros gravados para acessar o conteúdo quando quiser, se manter motivado e nunca ler sozinho."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF2E1]">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              O que é o Clube do Livro Regras do Jogo? Não é só um clube. Não é só um método.
            </h2>
            <p className="text-xl text-paper-foreground/70 max-w-3xl mx-auto">
              É o único lugar que reúne tudo que você precisa para ler 1 livro por mês com método, aplicar o que aprendeu e fazer parte de uma tribo de leitores que crescem juntos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="bg-white rounded-lg border border-primary/20 shadow-success hover:shadow-hover transition-all duration-300"
                data-animate={index % 2 === 0 ? "slide-left" : "slide-right"}
                data-delay={String(index + 1)}>
                <CardContent className="pt-6 pb-6 px-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 shrink-0">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-paper-foreground">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <Button variant="hero" size="xl" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="shadow-glow cursor-pointer">
              Quero fazer parte do Clube do Livro
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
