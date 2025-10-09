import { Card, CardContent } from "@/components/ui/card";
import { Users, Star, TrendingUp, Quote } from "lucide-react";

export const SocialProof = () => {
  const stats = [
    {
      icon: Users,
      value: "1.247+",
      label: "Membros Ativos",
    },
    {
      icon: Star,
      value: "4.8★",
      label: "Avaliação Média",
    },
    {
      icon: TrendingUp,
      value: "87%",
      label: "Criaram o hábito de leitura",
    },
  ];

  const testimonials = [
    {
      name: "Ana Paula Silva",
      role: "Gerente de Projetos",
      text: "O Clube me deu o que faltava: estrutura. Agora leio 1 livro por mês com consistência e aplico tudo na minha carreira.",
    },
    {
      name: "Roberto Almeida",
      role: "Empreendedor",
      text: "Mais do que os livros, o networking e as discussões mudaram minha forma de pensar negócios. Valeu cada centavo.",
    },
    {
      name: "Juliana Costa",
      role: "Advogada",
      text: "Eu sempre comprava livros e não lia. Agora tenho um método e uma comunidade que me mantém engajada. Transformador!",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Junte-se a milhares de leitores
            </h2>
            <p className="text-xl text-muted-foreground">
              Pessoas reais, resultados reais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="bg-gradient-trust shadow-trust hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-trust/50"
              >
                <CardContent className="pt-8 pb-6 text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-accent" />
                  </div>
                  <p className="text-4xl md:text-5xl font-bold text-accent">
                    {stat.value}
                  </p>
                  <p className="text-trust-foreground font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground">
              O que os membros dizem
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-trust shadow-trust hover:shadow-hover transition-all duration-300 border-trust/50"
                >
                  <CardContent className="pt-8 pb-6 px-6 space-y-4">
                    <Quote className="w-10 h-10 text-accent/20" />
                    <p className="text-trust-foreground/80 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div className="pt-4 border-t border-trust/30">
                      <p className="font-semibold text-trust-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-trust-foreground/70">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
