import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, MessageCircle, Trophy, Check } from "lucide-react";
export const HowItWorksForWho = () => {
  const steps = [{
    icon: Calendar,
    title: "Receba a curadoria mensal",
    description: "Todo mês você descobre o livro escolhido + esquema de leitura semanal. Você adquire o livro (formato de sua preferência) e recebe toda estrutura para maximizar seu aprendizado."
  }, {
    icon: Users,
    title: "Encontros mensais ao vivo",
    description: "1 vez por mês, aos sábados às 9h. Discussões conduzidas por Carlos Marden para aprofundar insights e trocar experiências."
  }, {
    icon: MessageCircle,
    title: "Comunidade ativa",
    description: "Grupo exclusivo no WhatsApp para networking, dúvidas e motivação mútua entre membros"
  }, {
    icon: Trophy,
    title: "Aplique na prática",
    description: "Metodologia focada em transformar conhecimento em ação real nas 5 dimensões da sua vida"
  }];
  const profiles = ["Profissionais que querem evoluir na carreira", "Pessoas que lutam para criar o hábito de ler", "Quem quer aprender com troca de experiências", "Aqueles que valorizam método e estrutura", "Quem quer aplicar conhecimento, não apenas acumular", "Profissionais que valorizam networking de qualidade"];
  return <section className="py-16" style={{ backgroundColor: '#F4F4F4' }}>
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: '#000' }}>Tudo foi pensado para caber na sua rotina</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 border-border/20" style={{ backgroundColor: '#FFFFFF' }}>
                <CardContent className="pt-6 pb-6 px-6">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold" style={{ color: '#000' }}>
                        {step.title}
                      </h3>
                      <p style={{ color: '#222' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          <div className="relative mt-16">
            <div className="absolute inset-0 bg-primary rounded-2xl blur-xl opacity-20"></div>
            <Card className="relative border-2 border-primary shadow-2xl" style={{ backgroundColor: '#000' }}>
              <CardContent className="pt-8 pb-8 px-8">
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-6" style={{ color: '#F5C045' }}>
                  Para quem é o Clube?
                </h3>
                <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                  {profiles.map((profile, index) => <div key={index} className="rounded-lg p-4 shadow-md flex items-start gap-3" style={{ backgroundColor: '#F5C045' }}>
                      <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#000' }}>
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <p className="leading-snug font-medium" style={{ color: '#000' }}>
                        {profile}
                      </p>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};