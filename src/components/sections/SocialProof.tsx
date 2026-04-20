import { Card, CardContent } from "@/components/ui/card";
import depoimentoMariana1 from "@/assets/depoimento-mariana-1.png";
import depoimentoMariana2 from "@/assets/depoimento-mariana-2.png";
import depoimentoAline1 from "@/assets/depoimento-aline-1.png";
import depoimentoAline2 from "@/assets/depoimento-aline-2.png";
import depoimentoPaulo from "@/assets/depoimento-paulo.png";
import depoimentoRommel from "@/assets/depoimento-rommel.png";

export const SocialProof = () => {
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111]">
              Pessoas reais já estão aplicando
              <br />
              o que aprendem aqui
            </h2>
            <p className="text-xl text-[#555]">Veja o que dizem os nossos membros</p>
          </div>

          <div className="space-y-8">
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
