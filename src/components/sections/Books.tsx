import { Card, CardContent } from "@/components/ui/card";
import { Book } from "lucide-react";

export const Books = () => {
  const books = [
    {
      title: "Os 7 Hábitos das Pessoas Altamente Eficazes",
      author: "Stephen Covey",
      category: "Produtividade & Liderança",
    },
    {
      title: "Mindset: A Nova Psicologia do Sucesso",
      author: "Carol Dweck",
      category: "Crescimento Pessoal",
    },
    {
      title: "As Armas da Persuasão",
      author: "Robert Cialdini",
      category: "Comunicação & Influência",
    },
    {
      title: "Hábitos Atômicos",
      author: "James Clear",
      category: "Transformação & Hábitos",
    },
    {
      title: "Pai Rico, Pai Pobre",
      author: "Robert Kiyosaki",
      category: "Educação Financeira",
    },
    {
      title: "O Poder do Hábito",
      author: "Charles Duhigg",
      category: "Neurociência & Comportamento",
    },
  ];

  return (
    <section className="py-20 bg-reading">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-reading-foreground">
              Livros que transformam
            </h2>
            <p className="text-xl text-reading-foreground/70 max-w-2xl mx-auto">
              Obras cuidadosamente selecionadas para impactar todas as dimensões da sua vida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <Card 
                key={index}
                className="bg-white shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-primary/20 group"
              >
                <CardContent className="pt-8 pb-6 px-6 space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow transition-all">
                    <Book className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-reading-foreground leading-tight">
                      {book.title}
                    </h3>
                    <p className="text-sm text-reading-foreground/60">
                      {book.author}
                    </p>
                    <div className="pt-2">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {book.category}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-4">
            <p className="text-reading-foreground/70">
              E muitos outros títulos estrategicamente escolhidos mês a mês
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
