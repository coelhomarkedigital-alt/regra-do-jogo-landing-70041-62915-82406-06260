import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const meetings = [{
  month: "Janeiro",
  number: "01",
  date: "10/01",
  title: "MasterClass de Abertura",
  subtitle: null,
  guest: null
}, {
  month: "Fevereiro",
  number: "02",
  date: "07/02",
  title: "Evento Oficial de Abertura do Clube do Livro",
  subtitle: null,
  guest: null
}, {
  month: "Março",
  number: "03",
  date: "14/03",
  title: '"O Óbvio que Ignoramos" - Jacob Petry',
  subtitle: "Como simples atitudes podem gerar sucesso consistente.",
  guest: null
}, {
  month: "Abril",
  number: "04",
  date: "11/04",
  title: '"Dar e Receber" - Adam Grant (com Marcella Mourão)',
  subtitle: "Uma abordagem revolucionária sobre sucesso, generosidade e influência.",
  guest: null
}, {
  month: "Maio",
  number: "05",
  date: "09/05",
  title: '"Como Falar em Público e Encantar as Pessoas" - Dale Carnegie',
  subtitle: "Torne-se um comunicador e orador magistral.",
  guest: null
}, {
  month: "Junho",
  number: "06",
  date: "20/06",
  title: '"Essencialismo" - Greg McKeown (com Konrad Mota)',
  subtitle: "A disciplinada busca por menos.",
  guest: null
}, {
  month: "Julho",
  number: "07",
  date: "15/07",
  title: "Encontro de Leitores",
  subtitle: "Trocas, reflexões e experiências.",
  guest: null
}, {
  month: "Agosto",
  number: "08",
  date: "08/08",
  title: '"Como Decifrar Mentes" - David Lieberman',
  subtitle: "A nova ciência para desvendar o que as pessoas pensam, querem e quem elas realmente são.",
  guest: null
}, {
  month: "Setembro",
  number: "09",
  date: "12/09",
  title: '"Potencial Oculto" - Adam Grant (com Paulo Verçosa)',
  subtitle: "Como extrair o melhor de você e dos outros.",
  guest: null
}, {
  month: "Outubro",
  number: "10",
  date: "17/10",
  title: '"Em Busca de Sentido" - Viktor Frankl (com Konrad Mota)',
  subtitle: "Um psicólogo no campo de concentração.",
  guest: null
}, {
  month: "Novembro",
  number: "11",
  date: "14/11",
  title: '"Conversas Difíceis" - Bruce Patton (com Nilton Medeiros)',
  subtitle: "Como discutir o que é mais importante.",
  guest: null
}, {
  month: "Dezembro",
  number: "12",
  date: "12/12",
  title: "Encerramento e Confraternização do Clube",
  subtitle: null,
  guest: null
}];

export const Schedule = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FAF2E1]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Cronograma dos Encontros do Clube do Livro 2026
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-muted">
            Encontros ao vivo, organizados com antecedência, para você se planejar e participar de uma jornada de
            leitura e desenvolvimento ao longo de todo o ano.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {meetings.map((meeting, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg border border-primary/20 px-6 shadow-success hover:shadow-hover transition-all"
            >
              <AccordionTrigger className="text-left text-primary-foreground font-semibold hover:text-primary py-5 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 shrink-0">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg">{meeting.month} 2026</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-5 pt-2">
                <div className="pl-13 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm bg-primary/10 px-3 py-1 rounded-full text-amber-700 font-bold">
                      {meeting.date}/2026
                    </span>
                  </div>
                  <h3 className="font-semibold text-base md:text-lg text-primary-foreground">
                    {meeting.title}
                  </h3>
                  {meeting.subtitle && (
                    <p className="text-sm italic text-accent">{meeting.subtitle}</p>
                  )}
                  {meeting.guest && (
                    <p className="text-sm text-primary font-medium">{meeting.guest}</p>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Disclaimer */}
        <p className="text-center text-sm mt-8 text-muted">
          Datas programadas com antecedência. Em caso de ajustes pontuais, os membros serão avisados com tempo hábil.
        </p>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button variant="cta" size="xl" asChild className="shadow-[0_0_20px_rgba(251,191,36,0.4),0_0_40px_rgba(245,192,69,0.2)]">
            <a href="http://projetoregrasdojogo.rds.land/clube-do-livro-assinantes-mensais" target="_blank" rel="noopener noreferrer">
              Quero fazer parte do Clube do Livro
            </a>
          </Button>
          <p className="text-sm mt-3 text-muted">Garanta sua vaga e acompanhe todos os encontros ao vivo</p>
        </div>
      </div>
    </section>
  );
};