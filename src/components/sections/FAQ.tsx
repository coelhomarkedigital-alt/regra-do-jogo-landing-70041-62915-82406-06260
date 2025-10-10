import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Como funcionam os encontros?",
      answer: "Os encontros acontecem 1 vez por mês, aos sábados, às 9h (horário de Brasília), de forma online. A duração média é de 2 a 3 horas, com espaço para perguntas, debates e troca de ideias.",
    },
    {
      question: "E se eu não puder participar ao vivo?",
      answer: "Não se preocupe. Todas as sessões são gravadas e ficam disponíveis na área de vídeos do portal até o último dia do mês.",
    },
    {
      question: "Preciso comprar o livro?",
      answer: "Sim. Você é responsável pela aquisição do livro do mês (físico ou digital, como preferir). O Clube fornece a curadoria, o esquema de leitura semanal, os encontros mensais, a comunidade e todos os materiais complementares.",
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim. O cancelamento é livre e sem multa. Ao solicitar, você permanece com acesso às aulas e ao grupo até o último dia do mês vigente.",
    },
    {
      question: "Quem escolhe os livros?",
      answer: "Eu faço a curadoria pensando em variar entre as 5 dimensões e em livros que geram discussões ricas e aplicáveis.",
    },
    {
      question: "Funciona a garantia?",
      answer: "Sim! Você tem 7 dias para experimentar. Se não gostar, devolvemos 100% do seu dinheiro sem perguntas. Basta enviar um e-mail para: relacionamento@projetoregrasdojogo.com",
    },
  ];

  return (
    <section id="faq" className="py-16" style={{ backgroundColor: '#F4F4F4' }}>
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tudo o que você precisa saber antes de começar
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-card hover:shadow-hover transition-all"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-accent py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
