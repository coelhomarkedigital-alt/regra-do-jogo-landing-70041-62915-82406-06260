import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, Mail } from "lucide-react";
export const Guarantee = () => {
  return <section className="py-20 bg-muted/20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card shadow-success border-2 border-primary/30">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-primary" />
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Garantia de 7 Dias
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Seu investimento está 100% protegido
                  </p>
                </div>

                <div className="pt-6 space-y-4 text-left max-w-2xl mx-auto">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="leading-relaxed text-slate-50">
                      <span className="font-semibold">Teste sem risco:</span> Você tem 7 dias completos para experimentar o Clube e decidir se é para você.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="leading-relaxed text-slate-50">
                      <span className="font-semibold">Reembolso integral:</span> Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="leading-relaxed text-slate-50">
                      <span className="font-semibold">Sem burocracia:</span> Basta enviar um e-mail e processar o reembolso imediatamente.
                    </p>
                  </div>
                </div>

                <div className="pt-6 p-4 bg-muted rounded-lg">
                  <div className="flex items-center justify-center gap-2 text-foreground">
                    <Mail className="w-5 h-5 text-accent" />
                    <p className="font-medium">
                      📩 relacionamento@projetoregrasdojogo.com
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground pt-4">
                  Acreditamos tanto no poder do Clube que assumimos todo o risco. Você só tem a ganhar.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};