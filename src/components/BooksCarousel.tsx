import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import obvioIgnoramos from "@/assets/books/obvio-ignoramos.jpg";
import darReceber from "@/assets/books/dar-receber.jpg";
import falarPublico from "@/assets/books/falar-publico.jpg";
import essencialismo from "@/assets/books/essencialismo.jpg";
import decifrarMentes from "@/assets/books/decifrar-mentes.jpg";
import potencialOculto from "@/assets/books/potencial-oculto.jpg";
import buscaSentido from "@/assets/books/busca-sentido.jpg";
import conversasDificeis from "@/assets/books/conversas-dificeis.jpg";
export const BooksCarousel = () => {
  const plugin = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: true,
    }),
  );
  const books = [
    {
      title: "O Óbvio que Ignoramos",
      author: "Jacob Petry",
      category: "Sucesso & Atitudes",
      cover: obvioIgnoramos,
    },
    {
      title: "Dar e Receber",
      author: "Adam Grant",
      category: "Sucesso & Generosidade",
      cover: darReceber,
    },
    {
      title: "Como Falar em Público e Encantar as Pessoas",
      author: "Dale Carnegie",
      category: "Comunicação & Oratória",
      cover: falarPublico,
    },
    {
      title: "Essencialismo",
      author: "Greg McKeown",
      category: "Produtividade & Foco",
      cover: essencialismo,
    },
    {
      title: "Como Decifrar Mentes",
      author: "David Lieberman",
      category: "Psicologia & Comportamento",
      cover: decifrarMentes,
    },
    {
      title: "Potencial Oculto",
      author: "Adam Grant ",
      category: "Desenvolvimento Pessoal",
      cover: potencialOculto,
    },
    {
      title: "Em Busca de Sentido",
      author: "Viktor Frankl",
      category: "Filosofia & Propósito",
      cover: buscaSentido,
    },
    {
      title: "Conversas Difíceis",
      author: "Bruce Patton",
      category: "Comunicação & Relacionamentos",
      cover: conversasDificeis,
    },
  ];
  return (
    <section className="py-16 bg-muted/20">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Obras transformadoras que abordaremos em 2026
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma curadoria estratégica de livros que já transformaram nossos membros e que, ao longo de 2026, irão
              impactar profundamente todas as dimensões da sua vida.
            </p>
          </div>

          <div className="relative px-12">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {books.map((book, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="bg-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border/50 group h-full">
                      <CardContent className="pt-8 pb-6 px-6 space-y-4">
                        <div className="flex justify-center mb-4">
                          <div
                            className="relative group-hover:scale-105 transition-transform duration-300 bg-white p-2 rounded-lg overflow-hidden"
                            style={{
                              boxShadow: "0 0 25px rgba(251, 191, 36, 0.5), 0 0 50px rgba(245, 192, 69, 0.3)",
                            }}
                          >
                            <img
                              src={book.cover}
                              alt={`Capa do livro ${book.title}`}
                              className="h-52 w-auto object-cover scale-110"
                            />
                          </div>
                        </div>
                        <div className="space-y-2 text-center">
                          <h3 className="text-lg font-semibold text-foreground leading-tight">{book.title}</h3>
                          <p className="text-sm text-muted-foreground">{book.author}</p>
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
              8 obras cuidadosamente selecionadas para os encontros do Clube do Livro em 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
