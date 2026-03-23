import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { useState } from "react";

export const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const features = [
    "Encontros mensais ao vivo com o especialista",
    "Cronograma diário de leitura todo mês",
    "Mais de 20 horas de gravações disponíveis",
    "Comunidade ativa no WhatsApp",
    "Curadoria mensal do livro",
    "Cancelamento livre e sem multa"
  ];

  return (
    <section id="pricing" className="py-20" style={{ backgroundColor: '#FAF2E1' }}>
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-2">
              <Check className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-paper-foreground">Sem lista de espera • Entre quando quiser</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-paper-foreground" data-animate="fade-up">
              Escolha sua assinatura
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-muted">
              Invista em você. Menos que um café por dia para transformar sua vida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Assinatura Mensal */}
            <Card className={`bg-white shadow-success hover:shadow-hover transition-all duration-300 border-primary/20 ${selectedPlan === 'mensal' ? 'ring-4 ring-primary/50 shadow-hover' : ''}`} data-animate="price-card" data-delay="1">
              <CardHeader className="text-center pb-8 pt-8 px-6 space-y-4">
                <h3 className="text-2xl font-bold text-paper-foreground">
                  Assinatura Mensal
                </h3>
                <div className="space-y-2">
                  <p className="text-5xl font-bold text-primary">
                    R$ 39,90
                  </p>
                  <p className="text-paper-foreground/70">
                    por mês • renovação automática • cancele quando quiser
                  </p>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-8 space-y-6">
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-paper-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button variant="cta" size="xl" className="w-full" asChild>
                  <a href="https://projetoregrasdojogo.com.br/finalizar-compra/?add-to-cart=1550" target="_blank" rel="noopener noreferrer">
                    Começar com Assinatura Mensal
                  </a>
                </Button>

                <p className="text-xs text-paper-foreground/60 text-center">
                  Garantia de 7 dias • Reembolso integral
                </p>
              </CardContent>
            </Card>

            {/* Assinatura Anual */}
            <Card className={`bg-white shadow-success hover:shadow-hover transition-all duration-300 border-primary/20 relative overflow-hidden ${selectedPlan === 'anual' ? 'ring-4 ring-primary/50 shadow-hover' : ''}`} data-animate="price-card" data-delay="2">
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse">
                  <Star className="w-3 h-3" />
                  Melhor Escolha
                </div>
              </div>

              <CardHeader className="text-center pb-8 pt-8 px-6 space-y-4">
                <h3 className="text-2xl font-bold text-paper-foreground">
                  Assinatura Anual
                </h3>
                <div className="space-y-2">
                  <p className="text-5xl font-bold text-primary">
                    R$ 349,90
                  </p>
                  <p className="text-paper-foreground/70">
                    por ano • ~R$ 29,16/mês
                  </p>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    Economize R$ 128,90
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-8 space-y-6">
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-paper-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button variant="cta" size="xl" className="w-full" asChild>
                  <a href="https://projetoregrasdojogo.com.br/finalizar-compra/?add-to-cart=1724" target="_blank" rel="noopener noreferrer">
                    Garantir Assinatura Anual
                  </a>
                </Button>

                <p className="text-xs text-paper-foreground/60 text-center">
                  Garantia de 7 dias • Reembolso integral
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center pt-8 space-y-4">
            <p className="text-lg text-paper-foreground font-medium">
              💳 Pagamento 100% seguro via cartão de crédito
            </p>
            <p className="text-paper-foreground/70">
              Seus dados estão protegidos e criptografados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
