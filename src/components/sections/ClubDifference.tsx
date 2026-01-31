import { Card, CardContent } from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Calendar, Compass, Target, Brain } from "lucide-react";
export const ClubDifference = () => {
  const differentials = [{
    icon: Calendar,
    number: "1",
    title: "Ritmo e critério de leitura",
    description: "Dentro do Clube, você recebe uma estrutura clara de leitura: qual livro ler, por que ele foi escolhido e como distribuir a leitura ao longo do mês. O critério começa na curadoria dos livros e o ritmo é definido para evitar abandono e leitura sem continuidade."
  }, {
    icon: Compass,
    number: "2",
    title: "Clareza de onde você está na leitura",
    description: "Além do ritmo, você sabe exatamente em que ponto do livro deveria estar e o que faz sentido observar naquele momento da leitura. Isso evita recomeços constantes e transforma a leitura em um processo contínuo, não solto."
  }, {
    icon: Target,
    number: "3",
    title: "Aplicação orientada à sua vida real",
    description: "Nos encontros, a leitura é discutida a partir de uma área concreta da sua vida. Você espelha decisões, situações e desafios reais no conteúdo do livro. Ao final da discussão, você sai com clareza de como aplicar aquelas ideias agora ou nos próximos passos da sua vida."
  }, {
    icon: Brain,
    number: "4",
    title: "Retenção e Repertório",
    description: "Em cada leitura, você aprende a criar conexões próprias com o conteúdo do livro. Não para decorar, mas para lembrar e reutilizar quando precisar. Dentro do Clube, você aprende formas práticas de ancorar as ideias para conseguir acessá-las meses ou anos depois, no momento em que uma decisão aparece. Resolve o problema: \"Li muita coisa, mas não consigo usar nada quando preciso.\""
  }];
  return <section className="py-16 bg-background bg-textured text-foreground">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="relative opacity-0 animate-scale-in" style={{
          animationDelay: "0.2s"
        }}>
            <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-xl opacity-10"></div>
            <div className="absolute -inset-1 bg-gradient-accent rounded-2xl opacity-20 blur-lg"></div>
            <Card className="relative bg-gradient-accent border-0 shadow-glow">
              <CardContent className="pt-10 pb-10 px-8">
                <div className="text-center mb-8 animate-fade-in">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent-foreground mb-3">
                    Como o método de leitura do Clube funciona na prática
                  </h2>
                  <p className="text-lg md:text-xl text-accent-foreground/80">
                    Sem direcionamento, essas condições se perdem. No Clube, elas acontecem juntas.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {differentials.map((diff, index) => <div key={index} className="relative bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 opacity-0 animate-fade-in overflow-hidden" style={{
                  animationDelay: `${0.4 + index * 0.1}s`
                }}>
                      <GlowingEffect disabled={false} proximity={100} spread={30} blur={10} borderWidth={2} movementDuration={1.5} />
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
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};