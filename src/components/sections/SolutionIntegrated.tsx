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
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-paper-foreground" data-animate="fade-up">
              Você Já Sabe Que Leitura É Importante
            </h2>
            <p className="text-xl text-paper-foreground/70 max-w-3xl mx-auto">
              Mas reconhece algum desses problemas?
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="bg-white p-5 rounded-xl border-l-4 border-primary hover:shadow-hover transition-all flex items-start gap-4 shadow-card"
                data-animate="scale" 
                data-delay={String(index + 1)}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <problem.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left pt-1">
                  <p className="text-lg leading-relaxed font-medium text-paper-foreground">
                    <span className="font-bold">{problem.title}:</span> {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
