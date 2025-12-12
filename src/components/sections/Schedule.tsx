import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
const meetings = [
  {
    month: "Janeiro",
    number: "01",
    date: "10/01",
    title: "MasterClass de Abertura",
    subtitle: null,
    guest: null,
  },
  {
    month: "Fevereiro",
    number: "02",
    date: "07/02",
    title: "Evento Oficial de Abertura do Clube do Livro",
    subtitle: null,
    guest: null,
  },
  {
    month: "Março",
    number: "03",
    date: "14/03",
    title: '"O Óbvio que Ignoramos" - Jacob Petry',
    subtitle: "Como simples atitudes podem gerar sucesso consistente.",
    guest: null,
  },
  {
    month: "Abril",
    number: "04",
    date: "11/04",
    title: '"Dar e Receber" - Adam Grant (com Marcella Mourão)',
    subtitle: "Uma abordagem revolucionária sobre sucesso, generosidade e influência.",
    guest: null,
  },
  {
    month: "Maio",
    number: "05",
    date: "09/05",
    title: '"Como Falar em Público e Encantar as Pessoas" - Dale Carnegie',
    subtitle: "Torne-se um comunicador e orador magistral.",
    guest: null,
  },
  {
    month: "Junho",
    number: "06",
    date: "20/06",
    title: '"Essencialismo" - Greg McKeown (com Konrad Mota)',
    subtitle: "A disciplinada busca por menos.",
    guest: null,
  },
  {
    month: "Julho",
    number: "07",
    date: "15/07",
    title: "Encontro de Leitores",
    subtitle: "Trocas, reflexões e experiências",
    guest: null,
  },
  {
    month: "Agosto",
    number: "08",
    date: "08/08",
    title: '"Como Decifrar Mentes" - David Lieberman',
    subtitle: "A nova ciência para desvendar o que as pessoas pensam, querem e quem elas realmente são.",
    guest: null,
  },
  {
    month: "Setembro",
    number: "09",
    date: "12/09",
    title: '"Potencial Oculto" - Adam Grant (com Paulo Verçosa)',
    subtitle: "Como extrair o melhor de você e dos outros.",
    guest: null,
  },
  {
    month: "Outubro",
    number: "10",
    date: "17/10",
    title: '"Em Busca de Sentido" - Viktor Frankl (com Konrad Mota)',
    subtitle: "Um psicólogo no campo de concentração.",
    guest: null,
  },
  {
    month: "Novembro",
    number: "11",
    date: "14/11",
    title: '"Conversas Difíceis" - Bruce Patton (com Nilton Medeiros)',
    subtitle: "Como discutir o que é mais importante.",
    guest: null,
  },
  {
    month: "Dezembro",
    number: "12",
    date: "12/12",
    title: "Encerramento e Confraternização do Clube",
    subtitle: null,
    guest: null,
  },
];
export const Schedule = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F6F2E8]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Cronograma dos Encontros do Clube do Livro 2026
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Encontros ao vivo, organizados com antecedência, para você se planejar e participar de uma jornada de
            leitura e desenvolvimento ao longo de todo o ano.
          </p>
        </div>

        <div className="grid gap-4 md:gap-3">
          {meetings.map((meeting, index) => (
            <div
              key={index}
              className="bg-[#FAF2E1] rounded-xl p-4 md:p-5 border border-primary/20 shadow-sm hover:shadow-md transition-shadow duration-300 opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 0.05}s`,
                animationFillMode: "forwards",
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                {/* Date badge */}
                <div className="flex items-center gap-3 md:min-w-[180px]">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-primary">{meeting.month}</span>
                    <span className="text-xs text-muted-foreground ml-2">({meeting.date})</span>
                  </div>
                </div>

                {/* Meeting number */}
                <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {meeting.number}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-semibold text-base md:text-lg text-primary-foreground">{meeting.title}</h3>
                  {meeting.subtitle && <p className="text-sm mt-0.5 font-medium text-accent">{meeting.subtitle}</p>}
                  {meeting.guest && <p className="text-sm text-primary font-medium mt-0.5">{meeting.guest}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Datas programadas com antecedência. Em caso de ajustes pontuais, os membros serão avisados com tempo hábil.
        </p>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button variant="cta" size="xl" asChild className="shadow-[0_0_20px_rgba(251,191,36,0.4),0_0_40px_rgba(245,192,69,0.2)]">
            <a
              href="http://projetoregrasdojogo.rds.land/clube-do-livro-assinantes-mensais"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero fazer parte do Clube do Livro
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-3">Garanta sua vaga e acompanhe todos os encontros ao vivo</p>
        </div>
      </div>
    </section>
  );
};
