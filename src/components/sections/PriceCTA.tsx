import { Button } from "@/components/ui/button";

export const PriceCTA = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary drop-shadow-glow leading-relaxed">
            E tudo isso por menos de R$1,33 por dia, menos que um cafezinho…
          </p>
          <Button variant="hero" size="xl" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="shadow-glow cursor-pointer">
            Garantir minha vaga
          </Button>
        </div>
      </div>
    </section>
  );
};
