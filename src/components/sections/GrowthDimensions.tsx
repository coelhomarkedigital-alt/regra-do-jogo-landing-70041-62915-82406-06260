import { Card, CardContent } from "@/components/ui/card";
import { X, Check } from "lucide-react";

export const GrowthDimensions = () => {
  const beforeItems = [
    "Leitura sem direção clara",
    "Abandona livros no meio",
    "Esquece o que leu rapidamente",
    "Não consegue aplicar ideias",
    "Acúmulo sem critério",
    "Frustração constante"
  ];

  const afterItems = [
    "Ritmo e clareza no processo",
    "Termina livros com consistência",
    "Retém e conecta ideias",
    "Traduz leitura em ação",
    "Constrói repertório útil",
    "Evolução mensurável"
  ];

  return (
    <section className="py-16 bg-paper">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-paper-foreground" data-animate="fade-up">
              A Transformação
            </h2>
            <p className="text-xl text-paper-foreground/70 max-w-3xl mx-auto">
              De consumo de informação para ferramenta de vida
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Antes */}
            <Card 
              className="bg-white shadow-card hover:shadow-hover transition-all duration-300 border-destructive/30" 
              data-animate="slide-left"
            >
              <CardContent className="pt-8 pb-6 px-6">
                <h3 className="text-2xl font-bold text-paper-foreground text-center mb-6">Antes</h3>
                <div className="space-y-4">
                  {beforeItems.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
                        <X className="w-4 h-4 text-destructive" />
                      </div>
                      <p className="text-paper-foreground/80">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Depois */}
            <Card 
              className="bg-white shadow-card hover:shadow-hover transition-all duration-300 border-primary/30" 
              data-animate="slide-right"
            >
              <CardContent className="pt-8 pb-6 px-6">
                <h3 className="text-2xl font-bold text-paper-foreground text-center mb-6">Depois</h3>
                <div className="space-y-4">
                  {afterItems.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-paper-foreground/80">{item}</p>
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
