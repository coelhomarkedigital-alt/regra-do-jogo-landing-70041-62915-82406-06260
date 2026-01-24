import { Card, CardContent } from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export const SolutionIntegrated = () => {
  const whyDifficult = [
    { highlight: "O que ler", rest: " (critério de escolha)." },
    { highlight: "Quando ler", rest: " (momento certo)." },
    { highlight: "Por que ler", rest: " (propósito claro)." },
    { highlight: "O que fazer depois", rest: " (aplicação prática)." }
  ];

  const differentials = [
    { highlight: "→ Curadoria mensal", rest: " (o livro certo, na hora certa)." },
    { highlight: "→ Leitura guiada", rest: " (contexto + reflexões práticas)." },
    { highlight: "→ Aplicação real", rest: " (como usar na vida, não só teoria)." }
  ];

  return (
    <section className="py-16 bg-background bg-textured text-foreground">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-animate="fade-up">
              Ler sem critério é pior do que não ler.
              Porque gera a falsa sensação de que "ler não funciona pra mim".
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mas não é sobre ler mais. É sobre ler com <span className="text-primary font-bold">hierarquia</span>:
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
                <p className="text-lg leading-relaxed">
                  <span className="text-primary font-bold">{item.highlight}</span>
                  {item.rest}
                </p>
              </div>
            ))}
          </div>

          <div
            className="relative opacity-0 animate-scale-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-xl opacity-10"></div>
            <div className="absolute -inset-1 bg-gradient-accent rounded-2xl opacity-20 blur-lg"></div>
            <Card className="relative bg-gradient-accent border-0 shadow-glow">
              <CardContent className="pt-10 pb-10 px-8">
                <h3 className="text-2xl md:text-3xl font-bold text-accent-foreground text-center mb-8 animate-fade-in">
                  O clube do Livro resolve isso.
                </h3>
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
                        <p className="text-foreground font-semibold leading-snug text-lg">
                          <span className="text-primary font-bold">{diff.highlight}</span>
                          {diff.rest}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-lg md:text-xl text-accent-foreground/90 font-medium mt-8">
                  Para quem já lê, mas sente que a leitura não está gerando clareza, decisão e mudança real.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
