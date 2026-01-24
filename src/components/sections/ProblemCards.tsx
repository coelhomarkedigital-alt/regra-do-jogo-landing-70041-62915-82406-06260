import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, HelpCircle } from "lucide-react";
export const ProblemCards = () => {
  const problems = [{
    icon: BookOpen,
    title: "Compra, mas não lê.",
    description: "Você já comprou um livro porque todo mundo estava falando dele."
  }, {
    icon: Clock,
    title: "Falta tempo e consistência.",
    description: "Começa a ler, mas abandona no meio. Falta um método que torne a leitura parte da rotina."
  }, {
    icon: HelpCircle,
    title: "Não sabe o que ler.",
    description: "Tantas opções, mas qual livro vai realmente fazer diferença na sua vida agora?"
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
        </div>
      </div>
    </section>;
};