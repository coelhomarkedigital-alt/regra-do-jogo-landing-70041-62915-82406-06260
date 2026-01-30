import { Card, CardContent } from "@/components/ui/card";
import { Clock, Brain, Lightbulb, Layers, BookX, HelpCircle } from "lucide-react";

export const SolutionIntegrated = () => {
  const problems = [
    { 
      icon: Clock,
      title: "Demora demais para terminar",
      description: "Você começa um livro empolgado, mas semanas depois ainda está no mesmo lugar. O livro fica ali, te julgando da estante."
    },
    { 
      icon: Brain,
      title: "Quando termina, já esqueceu o começo",
      description: "Leu 300 páginas, mas mal consegue lembrar o que estava nos primeiros capítulos. A sensação é de ter perdido metade do conteúdo."
    },
    { 
      icon: Lightbulb,
      title: "Aprende, mas não sabe aplicar",
      description: "Você fecha o livro pensando \"isso foi interessante\", mas na hora de usar aquela ideia na vida real, ela simplesmente não vem."
    },
    { 
      icon: Layers,
      title: "Acumula leitura sem construir critério",
      description: "Já leu dezenas de livros, mas não consegue articular claramente o que aprendeu ou como isso mudou suas decisões."
    },
    { 
      icon: BookX,
      title: "Não consegue lembrar livros antigos",
      description: "Aquele livro que você leu há 6 meses? Você sabe que foi bom, mas não lembra quase nada do conteúdo quando precisa."
    },
    { 
      icon: HelpCircle,
      title: "Leitura sem propósito claro",
      description: "Você lê porque \"é importante\", mas não sabe exatamente o que está buscando ou como aquele livro se conecta com sua vida."
    }
  ];

  return (
    <section className="py-16 bg-paper">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-paper-foreground" data-animate="fade-up">
              Você Já Sabe Que Leitura É Importante
            </h2>
            <p className="text-xl text-paper-foreground/70 max-w-3xl mx-auto">
              Mas reconhece algum desses problemas?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.map((problem, index) => (
              <Card 
                key={index} 
                className="bg-white shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-primary/20" 
                data-animate="scale" 
                data-delay={String(index + 1)}
              >
                <CardContent className="pt-7 pb-5 px-5 text-center space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <problem.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-paper-foreground leading-tight">{problem.title}</h3>
                  <p className="text-paper-foreground/70 leading-relaxed text-base">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
