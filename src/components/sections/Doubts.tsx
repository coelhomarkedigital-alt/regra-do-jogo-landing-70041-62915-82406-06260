import { Card, CardContent } from "@/components/ui/card";
import { Clock, Video, Shield, BookOpen, Check } from "lucide-react";

export const Doubts = () => {
  const doubts = [
    {
      icon: Clock,
      question: "\"Não tenho tempo\"",
      answer: "Apenas 15 minutos por dia. Menos tempo do que você gasta nas redes sociais.",
      stat: "87% dos membros encontram tempo facilmente"
    },
    {
      icon: Video,
      question: "\"E se eu não conseguir acompanhar?\"",
      answer: "Todas as sessões ficam gravadas. Assista quando e onde quiser.",
      stat: "Acesso vitalício às gravações"
    },
    {
      icon: Shield,
      question: "\"Tenho medo de desperdiçar dinheiro\"",
      answer: "7 dias de garantia integral. Não gostou? Devolvemos cada centavo, sem perguntas.",
      stat: "Risco zero para você"
    },
    {
      icon: BookOpen,
      question: "\"Não gosto de ler / não consigo terminar livros\"",
      answer: "Você só não encontrou o método certo. Nossos membros tinham o mesmo bloqueio.",
      stat: "84% criaram hábito de leitura em 30 dias"
    }
  ];

  return (
    <section className="py-20 bg-paper">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-paper-foreground">
              Ainda está em dúvida?
            </h2>
            <p className="text-xl text-paper-foreground/70 max-w-2xl mx-auto">
              A gente entende. Essas são as principais preocupações que ouvimos. Veja como resolvemos cada uma:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {doubts.map((doubt, index) => (
              <Card 
                key={index}
                className="bg-white border-primary/20 shadow-success hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <doubt.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-bold text-paper-foreground">
                        {doubt.question}
                      </h3>
                      <p className="text-paper-foreground/70 leading-relaxed">
                        {doubt.answer}
                      </p>
                      <div className="flex items-start gap-2 pt-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm font-semibold text-paper-foreground">
                          {doubt.stat}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
