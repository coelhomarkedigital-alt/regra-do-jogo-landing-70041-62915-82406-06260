import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, HelpCircle } from "lucide-react";
export const ProblemCards = () => {
  const problems = [{
    icon: BookOpen,
    title: "Compra mas não lê",
    description: "Você acumula livros na estante, mas sempre adia a leitura. A pilha só cresce."
  }, {
    icon: Clock,
    title: "Falta tempo e consistência",
    description: "Começa a ler, mas abandona no meio. Falta um método que torne a leitura parte da rotina."
  }, {
    icon: HelpCircle,
    title: "Não sabe o que ler",
    description: "Tantas opções, mas qual livro vai realmente fazer diferença na sua vida agora?"
  }];
  return <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Você se reconhece em algum desses cenários?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, index) => <Card key={index} className="bg-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border/50">
                <CardContent className="pt-8 pb-6 px-6 space-y-4 text-center">
                  <div className="w-16 h-16 mx-auto rounded-lg bg-[hsl(25,80%,95%)] flex items-center justify-center">
                    <problem.icon className="w-8 h-8 text-[hsl(25,80%,55%)]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};