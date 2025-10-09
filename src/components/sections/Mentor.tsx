import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, BookOpen, Target } from "lucide-react";
import carlosMarden from "@/assets/carlos-marden.jpg";
export const Mentor = () => {
  const credentials = [{
    icon: Award,
    text: "Procurador Federal"
  }, {
    icon: Briefcase,
    text: "Investidor e Empreendedor"
  }, {
    icon: BookOpen,
    text: "Leitor voraz e curador estratégico"
  }, {
    icon: Target,
    text: "Mentor de desenvolvimento pessoal e profissional"
  }];
  return <section className="py-20 bg-gradient-to-b from-background via-background to-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-trust shadow-trust border-trust/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-8 md:p-12 space-y-6">
                  <div className="space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold text-trust-foreground">Quem será seu mentor?</h2>
                    <p className="text-2xl font-semibold text-accent">
                      Carlos Marden
                    </p>
                  </div>

                  <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-4 mb-6">
                    <p className="text-trust-foreground font-semibold text-sm">
                      Facilitação dos Encontros:
                    </p>
                    <p className="text-trust-foreground/80 text-sm mt-1">Encontros conduzidos por Carlos Marden: Procurador Federal, investidor, especialista em transformação através da leitura e criador do Projeto Regras do Jogo.</p>
                  </div>

                  <div className="space-y-4">
                    {credentials.map((credential, index) => <div key={index} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-trust/30 flex items-center justify-center flex-shrink-0">
                          <credential.icon className="w-5 h-5 text-accent" />
                        </div>
                        <p className="text-trust-foreground font-medium">
                          {credential.text}
                        </p>
                      </div>)}
                  </div>

                  <div className="pt-4 space-y-4 text-trust-foreground/80 leading-relaxed">
                    <p>
                      Com uma trajetória que une direito, investimentos e desenvolvimento humano, 
                      Carlos Marden traz uma visão única sobre como o conhecimento pode ser 
                      transformado em ação prática.
                    </p>
                    <p className="font-medium text-trust-foreground">
                      "Minha missão é simples: ajudar pessoas a transformarem livros em resultados concretos."
                    </p>
                  </div>
                </div>

                <div className="relative h-full min-h-[400px] md:min-h-[500px] overflow-hidden rounded-r-lg">
                  <img src={carlosMarden} alt="Carlos Marden - Mentor do Clube do Livro Regras do Jogo" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};