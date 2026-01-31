import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Compass, Target, Brain, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const ClubDifference = () => {
  const [openCard, setOpenCard] = useState<number | null>(null);

  const differentials = [
    {
      icon: Calendar,
      number: "1",
      title: "Ritmo e critério de leitura",
      shortText: "A estrutura certa para não abandonar nem ler sem propósito.",
      fullDescription: "Dentro do Clube, você recebe uma estrutura clara de leitura: qual livro ler, por que ele foi escolhido e como distribuir a leitura ao longo do mês. O critério começa na curadoria dos livros e o ritmo é definido para evitar abandono e leitura sem continuidade."
    },
    {
      icon: Compass,
      number: "2",
      title: "Clareza de onde você está na leitura",
      shortText: "Você sabe exatamente em que ponto está e o que observar agora.",
      fullDescription: "Além do ritmo, você sabe exatamente em que ponto do livro deveria estar e o que faz sentido observar naquele momento da leitura. Isso evita recomeços constantes e transforma a leitura em um processo contínuo, não solto."
    },
    {
      icon: Target,
      number: "3",
      title: "Aplicação orientada à sua vida real",
      shortText: "A leitura é espelhada em decisões e situações reais da sua vida.",
      fullDescription: "Nos encontros, a leitura é discutida a partir de uma área concreta da sua vida. Você espelha decisões, situações e desafios reais no conteúdo do livro. Ao final da discussão, você sai com clareza de como aplicar aquelas ideias agora ou nos próximos passos da sua vida."
    },
    {
      icon: Brain,
      number: "4",
      title: "Retenção e repertório",
      shortText: "Você aprende a lembrar e reutilizar o que leu quando precisa.",
      fullDescription: "Em cada leitura, você aprende a criar conexões próprias com o conteúdo do livro. Não para decorar, mas para lembrar e reutilizar quando precisar. Dentro do Clube, você aprende formas práticas de ancorar as ideias para conseguir acessá-las meses ou anos depois, no momento em que uma decisão aparece. Resolve o problema: \"Li muita coisa, mas não consigo usar nada quando preciso.\""
    }
  ];

  const toggleCard = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <section className="py-16 bg-background bg-textured text-foreground">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="relative opacity-0 animate-scale-in" style={{ animationDelay: "0.2s" }}>
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
                
                <div className="grid md:grid-cols-2 gap-6">
                  {differentials.map((diff, index) => (
                    <motion.div
                      key={index}
                      layout
                      className="relative bg-background rounded-xl shadow-lg overflow-hidden opacity-0 animate-fade-in"
                      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                    >
                      <AnimatePresence mode="wait">
                        {openCard === index ? (
                          <motion.div
                            key="open"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="p-6"
                          >
                            <div className="space-y-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                  <diff.icon className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-primary font-bold text-lg">{diff.number}.</span>
                                <h3 className="text-foreground font-bold text-lg">{diff.title}</h3>
                              </div>
                              <p className="text-muted-foreground leading-relaxed">
                                {diff.fullDescription}
                              </p>
                              <Button
                                variant="ghost"
                                onClick={() => toggleCard(index)}
                                className="text-primary hover:text-primary/80 p-0 h-auto font-semibold"
                              >
                                ← Voltar
                              </Button>
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="closed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => toggleCard(index)}
                            className="cursor-pointer group h-full"
                          >
                            <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/10 p-6 h-full border-2 border-transparent hover:border-primary/30 transition-all duration-300">
                              {/* Number badge */}
                              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                <span className="text-primary font-bold text-xl">{diff.number}</span>
                              </div>
                              
                              <div className="space-y-4 pr-12">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                  <diff.icon className="w-7 h-7 text-primary" />
                                </div>
                                
                                {/* Title */}
                                <h3 className="text-foreground font-bold text-xl leading-tight">
                                  {diff.title}
                                </h3>
                                
                                {/* Short text */}
                                <p className="text-muted-foreground leading-relaxed">
                                  {diff.shortText}
                                </p>
                                
                                {/* CTA */}
                                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                                  <span>Clique para entender</span>
                                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
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
