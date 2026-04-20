import { Card, CardContent } from "@/components/ui/card";
import { Users, Star, TrendingUp } from "lucide-react";
import depoimentoMariana1 from "@/assets/depoimento-mariana-1.png";
import depoimentoMariana2 from "@/assets/depoimento-mariana-2.png";
import depoimentoAline1 from "@/assets/depoimento-aline-1.png";
import depoimentoAline2 from "@/assets/depoimento-aline-2.png";
import depoimentoPaulo from "@/assets/depoimento-paulo.png";
import depoimentoRommel from "@/assets/depoimento-rommel.png";

export const SocialProof = () => {
  const stats = [{
    icon: Users,
    value: "1.247+",
    label: "Membros Ativos"
  }, {
    icon: Star,
    value: "4.8★",
    label: "Avaliação Média"
  }, {
    icon: TrendingUp,
    value: "87%",
    label: "Criaram o hábito de leitura"
  }];

  const testimonials = [
    { name: "Mariana", image: depoimentoMariana1 },
    { name: "Aline Gomes", image: depoimentoAline1 },
    { name: "Aline Gomes", image: depoimentoAline2 },
    { name: "Paulo Eduardo", image: depoimentoPaulo },
    { name: "Mariana", image: depoimentoMariana2 },
    { name: "Rommel", image: depoimentoRommel },
  ];

  return (
    <section className="py-24 bg-[#FAF2E1]">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111]">Junte-se a centenas de leitores</h2>
            <p className="text-xl text-[#555]">Pessoas reais, resultados reais.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white border border-black/10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl">
                <CardContent className="pt-8 pb-6 text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#C6922E]/10 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-[#C6922E]" />
                  </div>
                  <p className="text-4xl md:text-5xl font-bold text-[#C6922E]">{stat.value}</p>
                  <p className="text-[#333] font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-[#111]">
              O que os membros dizem
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white border border-black/10 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-5 space-y-3">
                    <div className="rounded-xl overflow-hidden bg-[#FAF2E1] flex items-center justify-center">
                      <img
                        src={testimonial.image}
                        alt={`Depoimento de ${testimonial.name}`}
                        className="w-full h-auto object-contain mx-auto"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-center font-semibold text-[#111] pt-2">
                      {testimonial.name}
                    </p>
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
