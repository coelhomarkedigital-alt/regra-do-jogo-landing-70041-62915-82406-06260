import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, HelpCircle } from "lucide-react";
export const ProblemCards = () => {
  const problems = [{
    icon: BookOpen,
    title: "Escolha influenciada sem critério.",
    description: "Você já comprou um livro porque todo mundo estava falando dele."
  }, {
    icon: Clock,
    title: "Leitura sem continuidade.",
    description: "Começou a ler, achou interessante, mas na metade já estava pulando páginas."
  }, {
    icon: HelpCircle,
    title: "Aprendizado sem aplicação.",
    description: "Terminou (ou abandonou), e ficou pensando: \"ok, aprendi algo... mas e agora?\"."
  }];
  return <section className="py-16 bg-paper">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-paper-foreground">
              Veja se isso faz sentido:
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, index) => <Card key={index} className="bg-white shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-primary/20" data-animate="scale" data-delay={String(index + 1)}>
                <CardContent className="pt-8 pb-6 px-6 space-y-4 text-center">
                  <div className="w-16 h-16 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                    <problem.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-paper-foreground">{problem.title}</h3>
                  <p className="text-paper-foreground/70 leading-relaxed">{problem.description}</p>
                </CardContent>
              </Card>)}
          </div>

          <p className="text-center text-xl md:text-2xl text-paper-foreground/80 font-medium mt-8" data-animate="fade-up">
            Isso acontece porque você não sabia <span className="text-primary font-bold">PORQUÊ</span> estava lendo aquele livro <span className="text-primary font-bold">NAQUELE</span> momento.
          </p>
        </div>
      </div>
    </section>;
};