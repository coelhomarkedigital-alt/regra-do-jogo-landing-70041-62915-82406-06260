import { Card, CardContent } from "@/components/ui/card";
import { Book } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
export const BooksCarousel = () => {
  const plugin = useRef(Autoplay({
    delay: 3000,
    stopOnInteraction: true
  }));
  const books = [{
    title: "Os 7 Hábitos das Pessoas Altamente Eficazes",
    author: "Stephen Covey",
    category: "Produtividade & Liderança"
  }, {
    title: "Mindset: A Nova Psicologia do Sucesso",
    author: "Carol Dweck",
    category: "Crescimento Pessoal"
  }, {
    title: "As Armas da Persuasão",
    author: "Robert Cialdini",
    category: "Comunicação & Influência"
  }, {
    title: "Hábitos Atômicos",
    author: "James Clear",
    category: "Transformação & Hábitos"
  }, {
    title: "Pai Rico, Pai Pobre",
    author: "Robert Kiyosaki",
    category: "Educação Financeira"
  }, {
    title: "O Poder do Hábito",
    author: "Charles Duhigg",
    category: "Neurociência & Comportamento"
  }];
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
                {books.map((book, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="bg-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border/50 group h-full">
                      <CardContent className="pt-8 pb-6 px-6 space-y-4">
                        <div className="w-14 h-14 rounded-lg bg-gradient-accent opacity-80 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Book className="w-7 h-7 text-white" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-foreground leading-tight">
                            {book.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {book.author}
                          </p>
                          <div className="pt-2">
                            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                              {book.category}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>)}
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