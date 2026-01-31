import { Heart, Users, Building, DollarSign, Sparkles } from "lucide-react";
export const BookSelection = () => {
  const dimensions = [{
    icon: Heart,
    title: "Crescimento Pessoal",
    description: "Clareza de valores, identidade e decisões"
  }, {
    icon: Users,
    title: "Relacionamentos",
    description: "Comunicação, empatia e vínculos reais"
  }, {
    icon: Building,
    title: "Sucesso Profissional",
    description: "Estratégia, liderança e produtividade"
  }, {
    icon: DollarSign,
    title: "Finanças Pessoais",
    description: "Mentalidade, uso do dinheiro e decisões financeiras"
  }, {
    icon: Sparkles,
    title: "Espiritualidade",
    description: "Propósito, sentido e presença"
  }];
  return <section className="py-16 bg-paper relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto space-y-10 text-center">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-paper-foreground">
              Como escolhemos os 8 livros do ano?
            </h2>
            <p className="text-xl text-paper-foreground/70 max-w-3xl mx-auto">
              Cada livro é escolhido para desenvolver uma dimensão específica da sua vida.
A curadoria é colaborativa, e você também pode indicar leituras.

            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {dimensions.map((dimension, index) => <div key={index} className="bg-white p-5 rounded-xl border-l-4 border-primary hover:shadow-hover transition-all flex items-start gap-4 shadow-card">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <dimension.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left pt-1">
                  <p className="text-lg leading-relaxed font-medium text-paper-foreground">
                    <span className="font-bold">{dimension.title}:</span> {dimension.description}
                  </p>
                </div>
              </div>)}
          </div>

          <div className="pt-6">
            <p className="text-lg text-paper-foreground/70 max-w-2xl mx-auto">
              Cada livro existe para desenvolver uma dimensão específica da sua vida.
            </p>
          </div>
        </div>
      </div>
    </section>;
};