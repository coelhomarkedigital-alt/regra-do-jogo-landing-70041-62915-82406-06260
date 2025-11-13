import { Card, CardContent } from "@/components/ui/card";
import { Check, Target, Users, BookOpen, Calendar, TrendingUp, Zap } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
export const SolutionIntegrated = () => {
  const whyDifficult = [
    "Ler sozinho exige disciplina que poucos têm naturalmente", 
    "Sem método estruturado, é fácil perder o fio da meada", 
    "A falta de acompanhamento faz você desistir no primeiro obstáculo", 
    "Você não sabe se está extraindo o melhor de cada livro", 
    "Não há com quem discutir e aprofundar os insights"
  ];
  const differentials = [{
    icon: Target,
    text: "Método testado e validado"
  }, {
    icon: Users,
    text: "Comunidade engajada"
  }, {
    icon: BookOpen,
    text: "Curadoria especializada"
  }, {
    icon: Calendar,
    text: "Estrutura mensal clara"
  }, {
    icon: TrendingUp,
    text: "Foco em aplicação prática"
  }, {
    icon: Zap,
    text: "Mediação profissional"
  }];
  return <section className="py-16 bg-background bg-textured text-foreground">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-animate="fade-up">
              Por que é tão difícil criar e manter o hábito de leitura?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              O problema não é você. É a <span className="text-primary font-semibold">falta de estrutura</span>. Ler sozinho, sem direcionamento, sem comunidade e sem compromisso é uma batalha perdida. <span className="text-primary font-semibold">Você precisa de método, não apenas de motivação.</span>
            </p>
          </div>

          <div className="space-y-4">
            {whyDifficult.map((item, index) => (
              <div 
                key={index} 
                className="flex gap-4 items-start p-5 bg-card rounded-lg border-l-4 border-primary backdrop-blur-sm hover:bg-card/80 transition-colors shadow-card" 
                data-animate="slide-left" 
                data-delay={String(index + 1)}
              >
                <span className="text-primary text-2xl font-bold flex-shrink-0">•</span>
                <p className="text-lg leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="relative opacity-0 animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-xl opacity-20"></div>
            <Card className="relative bg-gradient-accent border-0 shadow-glow">
              <CardContent className="pt-10 pb-10 px-8">
                <h3 className="text-2xl md:text-3xl font-bold text-accent-foreground text-center mb-8 animate-fade-in">O Clube do livro Regras do Jogo
não é só mais um clube de leitura</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                  {differentials.map((diff, index) => (
                    <div 
                      key={index} 
                      className="relative bg-background rounded-xl p-5 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 opacity-0 animate-fade-in overflow-hidden" 
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <GlowingEffect 
                        disabled={false}
                        proximity={100}
                        spread={30}
                        blur={10}
                        borderWidth={2}
                        movementDuration={1.5}
                      />
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                          <diff.icon className="w-6 h-6 text-primary" />
                        </div>
                        <p className="text-foreground font-semibold leading-snug">
                          {diff.text}
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
    </section>;
};