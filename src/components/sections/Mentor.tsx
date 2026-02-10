import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, BookOpen, Target } from "lucide-react";
import carlosMarden from "@/assets/carlos-marden.jpg";
export const Mentor = () => {
  const credentials = [{
    icon: Award,
    text: "Investidor"
  }, {
    icon: Briefcase,
    text: "Empreendedor"
  }, {
    icon: BookOpen,
    text: "Curador estratégico com mais de 700 livros lidos"
  }, {
    icon: Target,
    text: "Mentor de desenvolvimento pessoal, sucesso profissional e investimentos"
  }];
  return <section className="py-20 bg-background bg-textured relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-card shadow-success border-primary/30 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-8 md:p-12 space-y-6">
                  <div className="space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Quem será seu mentor?</h2>
                    <p className="text-2xl font-semibold text-primary">
                      Carlos Marden
                    </p>
                  </div>

                  <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-4 mb-6">
                    <p className="text-foreground font-semibold text-sm">
                      Facilitação dos Encontros:
                    </p>
                    <p className="text-foreground/80 text-sm mt-1">Fundador do Projeto Regras do Jogo. Conduz os encontros mensais focando em discussões profundas e aplicação prática do conteúdo.</p>
                  </div>

                  <div className="space-y-4">
                    {credentials.map((credential, index) => <div key={index} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <credential.icon className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-foreground font-medium">
                          {credential.text}
                        </p>
                      </div>)}
                  </div>

                  <div className="pt-4 space-y-4 text-muted-foreground leading-relaxed">
                    <p className="font-medium text-foreground">
                      "Minha missão é simples: ajudar as pessoas a usar o conhecimento dos livros para obter resultados concretos."
                    </p>
                  </div>
                </div>

                <div className="relative h-full min-h-[400px] md:min-h-[500px] overflow-hidden rounded-r-lg">
                  <img src={carlosMarden} alt="Carlos Marden - Mentor do Clube do Livro Regras do Jogo" className="absolute inset-0 w-full h-full object-cover object-[center_20%] md:object-center" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};