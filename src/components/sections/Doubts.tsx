import { Card, CardContent } from "@/components/ui/card";
import { Clock, Video, Shield, BookOpen, Target } from "lucide-react";
export const Doubts = () => {
  const doubts = [{
    icon: Clock,
    question: 'Falta de tempo não é o problema',
    answer: "A leitura acontece em pequenos blocos, integrados à sua rotina. O foco é consistência e aplicação, não volume.",
    stat: null
  }, {
    icon: Video,
    question: 'Perdeu o encontro? Assiste depois',
    answer: "Todas as sessões ficam gravadas. Sem desculpa.",
    stat: null
  }, {
    icon: Shield,
    question: 'Risco zero pra você',
    answer: "Você tem 7 dias para testar o Clube com tranquilidade. Se não fizer sentido, é só cancelar.",
    stat: null
  }, {
    icon: BookOpen,
    question: 'Você não odeia ler. Você odeia começar e não terminar',
    answer: "O problema nunca foi gostar de ler. Foi começar sem critério e abandonar no meio.",
    stat: null
  }, {
    icon: Target,
    question: 'Preciso ser leitor disciplinado?',
    answer: "Não. O Clube existe justamente para criar ritmo, critério e continuidade na leitura.",
    stat: null
  }];
  return <section className="py-20 bg-paper">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-paper-foreground">Perguntas e objeções comuns:</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {doubts.map((doubt, index) => <Card key={index} className="bg-white border-primary/20 shadow-success hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <doubt.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-bold text-paper-foreground">{doubt.question}</h3>
                      <p className="text-paper-foreground/70 leading-relaxed">{doubt.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};