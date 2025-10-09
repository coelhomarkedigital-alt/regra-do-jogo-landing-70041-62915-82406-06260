import { Mail, Phone } from "lucide-react";
import logoRegrasDoJogo from "@/assets/logo-regras-do-jogo.jpg";

export const Footer = () => {
  return <footer className="bg-foreground text-background py-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-3">
              <img src={logoRegrasDoJogo} alt="Projeto Regras do Jogo" className="h-12 w-auto" />
            </div>
            <h3 className="text-2xl font-bold">Clube do Livro Regras do Jogo</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Transforme leitura em hábito, hábito em conhecimento e conhecimento em resultado.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-2 text-sm">
              <a href="mailto:relacionamento@projetoregrasdojogo.com" className="flex items-center gap-2 text-background/80 hover:text-background transition-colors">
                <Mail className="w-4 h-4" />
                relacionamento@projetoregrasdojogo.com
              </a>
              <a href="https://wa.me/5585996648085" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/80 hover:text-background transition-colors">
                <Phone className="w-4 h-4" />
                +55 85 9964-8085
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Horários dos Encontros</h4>
            <div className="text-sm text-background/80 space-y-1">
              <p>📅 1x por mês, aos sábados</p>
              <p>⏰ 9h (Horário de Brasília)</p>
              <p>💻 100% online</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Clube do Livro Regras do Jogo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>;
};