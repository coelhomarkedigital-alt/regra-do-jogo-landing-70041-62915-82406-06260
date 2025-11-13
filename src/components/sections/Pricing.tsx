import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { useState } from "react";

export const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const features = ["Acesso imediato a todos os materiais", "Encontros mensais ao vivo", "Comunidade exclusiva no WhatsApp", "Esquema de leitura semanal", "Materiais complementares (resumos, exercícios)", "Gravações disponíveis"];
  const handleSubscribe = (plan: string) => {
    setSelectedPlan(plan);
    // Lógica de redirecionamento para checkout
    console.log(`Assinando plano: ${plan}`);
  };
  return <section id="pricing" className="py-20" style={{ backgroundColor: '#FAF2E1' }}>
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-2">
              <Check className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-paper-foreground">Sem lista de espera • Entre quando quiser</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-paper-foreground">
              Escolha seu plano
            </h2>
            <p className="text-xl text-paper-foreground/70 max-w-2xl mx-auto">
              Invista em você. Menos que um café por dia para transformar sua vida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plano Mensal */}
            <Card className={`bg-white shadow-success hover:shadow-hover transition-all duration-300 border-primary/20 opacity-0 animate-fade-in ${selectedPlan === 'mensal' ? 'ring-4 ring-primary/50 shadow-hover' : ''}`}>
              <CardHeader className="text-center pb-8 pt-8 px-6 space-y-4">
                <h3 className="text-2xl font-bold text-paper-foreground">
                  Plano Mensal
                </h3>
                <div className="space-y-2">
                  <p className="text-5xl font-bold text-primary">
                    R$ 39,90
                  </p>
                  <p className="text-paper-foreground/70">
                    por mês • cobrança recorrente
                  </p>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-8 space-y-6">
                <ul className="space-y-3">
                  {features.map((feature, index) => <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-paper-foreground">
                        {feature}
                      </span>
                    </li>)}
                  <li className="flex items-start gap-3 pt-2">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-paper-foreground">
                      Cancelamento livre e sem multa
                    </span>
                  </li>
                </ul>

                <Button variant="cta" size="xl" className="w-full" onClick={() => handleSubscribe('mensal')}>
                  Começar com Plano Mensal
                </Button>

                <p className="text-xs text-paper-foreground/60 text-center">
                  Garantia de 7 dias • Reembolso integral
                </p>
              </CardContent>
            </Card>

            {/* Plano Anual */}
            <Card className={`bg-white shadow-success hover:shadow-hover transition-all duration-300 border-primary/20 relative overflow-hidden opacity-0 animate-fade-in ${selectedPlan === 'anual' ? 'ring-4 ring-primary/50 shadow-hover' : ''}`} style={{ animationDelay: '0.15s' }}>
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse">
                  <Star className="w-3 h-3" />
                  Melhor Escolha
                </div>
              </div>

              <CardHeader className="text-center pb-8 pt-8 px-6 space-y-4">
                <h3 className="text-2xl font-bold text-paper-foreground">
                  Plano Anual
                </h3>
                <div className="space-y-2">
                  <p className="text-5xl font-bold text-primary">
                    R$ 349,90
                  </p>
                  <p className="text-paper-foreground/70">
                    por ano • ~R$ 29,16/mês
                  </p>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    Economize R$ 129
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-8 space-y-6">
                <ul className="space-y-3">
                  {features.map((feature, index) => <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-paper-foreground">
                        {feature}
                      </span>
                    </li>)}
                  <li className="flex items-start gap-3 pt-2">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-paper-foreground">
                      Melhor custo-benefício
                    </span>
                  </li>
                </ul>

                <Button variant="cta" size="xl" className="w-full" onClick={() => handleSubscribe('anual')}>
                  Garantir Plano Anual
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
    </section>;
};