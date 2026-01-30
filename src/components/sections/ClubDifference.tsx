import { Card, CardContent } from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Calendar, Target, Brain } from "lucide-react";

export const ClubDifference = () => {
  const differentials = [
    { 
      icon: Calendar,
      number: "1",
      title: "Direcionamento com Ritmo",
      description: "Calendário claro de leitura. Você sabe exatamente onde deveria estar hoje no livro. A leitura deixa de ser abstrata e vira um processo objetivo. Sem mais abandono ou leitura picada."
    },
    { 
      icon: Target,
      number: "2",
      title: "Aplicação por Área da Vida",
      description: "O livro não é discutido genericamente. Cada obra é aplicada a uma área específica da sua vida. O encontro existe para traduzir leitura em decisão, ação e ajuste real."
    },
    { 
      icon: Brain,
      number: "3",
      title: "Retenção e Memória",
      description: "Você aprende como lembrar de livros antigos, como associar ideias e criar um repertório reutilizável. Resolve o problema: \"Li muita coisa, mas não consigo usar nada quando preciso.\""
    }
  ];

  return (
    <section className="py-16 bg-background bg-textured text-foreground">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div
            className="relative opacity-0 animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-xl opacity-10"></div>
            <div className="absolute -inset-1 bg-gradient-accent rounded-2xl opacity-20 blur-lg"></div>
            <Card className="relative bg-gradient-accent border-0 shadow-glow">
              <CardContent className="pt-10 pb-10 px-8">
                <div className="text-center mb-8 animate-fade-in">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent-foreground mb-3">
                    A Diferença Real do Clube
                  </h2>
                  <p className="text-lg md:text-xl text-accent-foreground/80">
                    Não é sobre ler mais. É sobre transformar leitura em mudança prática.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {differentials.map((diff, index) => (
                    <div
                      key={index}
                      className="relative bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 opacity-0 animate-fade-in overflow-hidden"
                      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                    >
                      <GlowingEffect
                        disabled={false}
                        proximity={100}
                        spread={30}
                        blur={10}
                        borderWidth={2}
                        movementDuration={1.5}
                      />
                      <div className="relative z-10 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <diff.icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-primary font-bold text-lg">{diff.number}.</span>
                          <h3 className="text-foreground font-bold text-lg">{diff.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {diff.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
