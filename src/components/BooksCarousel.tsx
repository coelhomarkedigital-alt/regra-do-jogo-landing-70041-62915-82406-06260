import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import habitos7 from "@/assets/books/7-habitos.webp";
import habitosAtomicos from "@/assets/books/habitos-atomicos.webp";
import armasPersuasao from "@/assets/books/armas-persuasao.webp";
import supercomunicadores from "@/assets/books/supercomunicadores.jpg";
import psicologiaFinanceira from "@/assets/books/psicologia-financeira.jpg";
import egoInimigo from "@/assets/books/ego-inimigo.jpg";
import nacaoDopamina from "@/assets/books/nacao-dopamina.jpg";
import geracaoAnsiosa from "@/assets/books/geracao-ansiosa.jpg";

export const BooksCarousel = () => {
  const plugin = useRef(Autoplay({
    delay: 3000,
    stopOnInteraction: true
  }));
  
  const books = [
    {
      title: "Os 7 Hábitos das Pessoas Altamente Eficazes",
      author: "Stephen R. Covey",
      category: "Produtividade & Liderança",
      cover: habitos7
    },
    {
      title: "Hábitos Atômicos",
      author: "James Clear",
      category: "Transformação & Hábitos",
      cover: habitosAtomicos
    },
    {
      title: "As Armas da Persuasão",
      author: "Robert B. Cialdini",
      category: "Comunicação & Influência",
      cover: armasPersuasao
    },
    {
      title: "Supercomunicadores",
      author: "Charles Duhigg",
      category: "Comunicação & Conexão",
      cover: supercomunicadores
    },
    {
      title: "A Psicologia Financeira",
      author: "Morgan Housel",
      category: "Educação Financeira",
      cover: psicologiaFinanceira
    },
    {
      title: "O Ego é seu Inimigo",
      author: "Ryan Holiday",
      category: "Desenvolvimento Pessoal",
      cover: egoInimigo
    },
    {
      title: "Nação Dopamina",
      author: "Dra. Anna Lembke",
      category: "Neurociência & Comportamento",
      cover: nacaoDopamina
    },
    {
      title: "A Geração Ansiosa",
      author: "Jonathan Haidt",
      category: "Psicologia & Sociedade",
      cover: geracaoAnsiosa
    }
  ];
  return <section className="py-16 bg-muted/20">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Obras transformadoras que abordaremos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Alguns dos livros que já transformaram nossos membros, selecionados para impactar todas as dimensões da sua vida.</p>
          </div>

          <div className="relative px-12">
            <Carousel plugins={[plugin.current]} className="w-full" opts={{
            align: "start",
            loop: true
          }} onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}>
              <CarouselContent>
                {books.map((book, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="bg-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border/50 group h-full">
                      <CardContent className="pt-8 pb-6 px-6 space-y-4">
                        <div className="flex justify-center mb-4">
                          <div className="relative group-hover:scale-105 transition-transform duration-300">
                            <img 
                              src={book.cover} 
                              alt={`Capa do livro ${book.title}`}
                              className="h-48 w-auto object-contain brightness-100 shadow-glow"
                              style={{
                                filter: 'drop-shadow(0 4px 20px rgba(251, 191, 36, 0.4)) brightness(1.05)'
                              }}
                            />
                          </div>
                        </div>
                        <div className="space-y-2 text-center">
                          <h3 className="text-lg font-semibold text-foreground leading-tight">
                            {book.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {book.author}
                          </p>
                          <div className="pt-2 flex justify-center">
                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                              {book.category}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="text-center pt-2">
            <p className="text-muted-foreground">
              E muitos outros títulos estrategicamente escolhidos mês a mês
            </p>
          </div>
        </div>
      </div>
    </section>;
};