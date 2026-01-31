import { Card, CardContent } from "@/components/ui/card";
import { Clock, Video, Shield, BookOpen, Target } from "lucide-react";

export const Doubts = () => {
  // Card principal (destaque central)
  const mainDoubt = {
    icon: Target,
    question: 'Preciso ser leitor disciplinado?',
    answer: "Não. O Clube existe justamente para criar ritmo, critério e continuidade na leitura.",
  };

  // Cards superiores (esquerda e direita)
  const topDoubts = [
    {
      icon: Clock,
      question: 'Falta de tempo não é o problema',
      answer: "A leitura acontece em pequenos blocos, integrados à sua rotina. O foco é consistência e aplicação, não volume.",
    },
    {
      icon: Video,
      question: 'Perdeu o encontro? Assiste depois',
      answer: "Todas as sessões ficam gravadas. Sem desculpa.",
    },
  ];

  // Cards inferiores (esquerda e direita)
  const bottomDoubts = [
    {
      icon: Shield,
      question: 'Risco zero pra você',
      answer: "Você tem 7 dias para testar o Clube com tranquilidade. Se não fizer sentido, é só cancelar.",
    },
    {
      icon: BookOpen,
      question: 'Você não odeia ler. Você odeia começar e não terminar',
      answer: "O problema nunca foi gostar de ler. Foi começar sem critério e abandonar no meio.",
    },
  ];

  const DoubtCard = ({ doubt, isMain = false }: { doubt: typeof mainDoubt; isMain?: boolean }) => (
    <Card className={`bg-white border-primary/20 shadow-success hover:shadow-hover transition-all duration-300 hover:-translate-y-1 ${isMain ? 'border-primary/40 shadow-glow' : ''}`}>
      <CardContent className={`${isMain ? 'p-10' : 'p-8'} space-y-4`}>
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 ${isMain ? 'w-14 h-14' : 'w-12 h-12'} rounded-lg bg-primary/10 flex items-center justify-center`}>
            <doubt.icon className={`${isMain ? 'w-7 h-7' : 'w-6 h-6'} text-primary`} />
          </div>
          <div className="flex-1 space-y-3">
            <h3 className={`${isMain ? 'text-2xl' : 'text-xl'} font-bold text-paper-foreground`}>{doubt.question}</h3>
            <p className={`text-paper-foreground/70 leading-relaxed ${isMain ? 'text-lg' : ''}`}>{doubt.answer}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-paper">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-paper-foreground">Perguntas e objeções comuns:</h2>
          </div>

          {/* Layout Desktop: Diamante */}
          <div className="hidden md:block space-y-6">
            {/* Linha superior - 2 cards */}
            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
              {topDoubts.map((doubt, index) => (
                <DoubtCard key={index} doubt={doubt} />
              ))}
            </div>
            
            {/* Card central - destaque */}
            <div className="max-w-2xl mx-auto">
              <DoubtCard doubt={mainDoubt} isMain />
            </div>
            
            {/* Linha inferior - 2 cards */}
            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
              {bottomDoubts.map((doubt, index) => (
                <DoubtCard key={index} doubt={doubt} />
              ))}
            </div>
          </div>

          {/* Layout Mobile: Card principal primeiro, depois os outros */}
          <div className="md:hidden space-y-6">
            {/* Card principal primeiro */}
            <DoubtCard doubt={mainDoubt} isMain />
            
            {/* Outros cards */}
            {[...topDoubts, ...bottomDoubts].map((doubt, index) => (
              <DoubtCard key={index} doubt={doubt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
