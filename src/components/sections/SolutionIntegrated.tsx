import { Card, CardContent } from "@/components/ui/card";
import { Check, Target, Users, BookOpen, Calendar, TrendingUp, Zap } from "lucide-react";
export const SolutionIntegrated = () => {
  const whyDifficult = ["Ler sozinho exige disciplina que poucos têm naturalmente", "Sem método estruturado, é fácil perder o fio da meada", "Falta de accountability faz você desistir no primeiro obstáculo", "Você não sabe se está extraindo o melhor de cada livro", "Não há com quem discutir e aprofundar os insights"];
  const differentials = [{
    icon: Target,
    text: "Método testado e validado"
  }, {
    icon: Users,
    text: "Comunidade engajada"
  }, {
    icon: BookOpen,
    text: "Curadoria especializada"
  }, {
    icon: Calendar,
    text: "Estrutura mensal clara"
  }, {
    icon: TrendingUp,
    text: "Foco em aplicação prática"
  }, {
    icon: Zap,
    text: "Mediação profissional"
  }];
  return <section className="py-16 bg-gradient-to-br from-[hsl(0,0%,5%)] via-[hsl(270,30%,8%)] to-[hsl(0,0%,10%)] text-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Por que é tão difícil criar e
manter o hábito de leitura?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              O problema não é você. É a <span className="text-[#fbbf24] font-semibold">falta de estrutura</span>. Ler sozinho, sem direcionamento, sem comunidade e sem compromisso é uma batalha perdida. <span className="text-[#fbbf24] font-semibold">Você precisa de método, não apenas de motivação.</span>
            </p>
          </div>

          <div className="space-y-4">
            {whyDifficult.map((item, index) => <div key={index} className="flex gap-4 items-start p-5 bg-white/5 rounded-lg border-l-4 border-[hsl(45,98%,57%)] backdrop-blur-sm hover:bg-white/10 transition-colors">
                <span className="text-[hsl(45,98%,57%)] text-2xl font-bold flex-shrink-0">•</span>
                <p className="text-lg leading-relaxed">{item}</p>
              </div>)}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(45,98%,57%)] to-[hsl(38,92%,50%)] rounded-2xl blur-xl opacity-20"></div>
            <Card className="relative bg-gradient-to-r from-[hsl(45,98%,57%)] to-[hsl(38,92%,50%)] border-0 shadow-2xl">
              <CardContent className="pt-10 pb-10 px-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] text-center mb-8">O Clube do livro Regras do Jogo
não é só mais um clube de leitura</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                  {differentials.map((diff, index) => <div key={index} className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                        <diff.icon className="w-6 h-6 text-accent" />
                      </div>
                      <p className="text-[#1a1a1a] font-semibold leading-snug">
                        {diff.text}
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