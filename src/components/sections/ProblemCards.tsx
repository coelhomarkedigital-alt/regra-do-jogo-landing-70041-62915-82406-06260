import { motion } from "framer-motion";
import { BookOpen, Clock, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const ProblemCards = () => {
  const problems = [{
    icon: BookOpen,
    title: "Compra mas não lê",
    description: "Você acumula livros na estante, mas sempre adia a leitura. A pilha só cresce."
  }, {
    icon: Clock,
    title: "Falta tempo e consistência",
    description: "Começa a ler, mas abandona no meio. Falta um método que torne a leitura parte da rotina."
  }, {
    icon: HelpCircle,
    title: "Não sabe o que ler",
    description: "Tantas opções, mas qual livro vai realmente fazer diferença na sua vida agora?"
  }];

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Title with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Você se reconhece em algum
              <br />
              <span className="text-primary">desses cenários?</span>
            </h2>
          </motion.div>

          {/* Problems grid with minimalist design */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group"
                >
                  {/* Decorative circle that appears on hover */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                    className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-primary/10 -z-10 group-hover:scale-150 transition-transform duration-500"
                  ></motion.div>

                  {/* Content */}
                  <div className="relative space-y-6 p-8">
                    {/* Icon */}
                    <div className="inline-flex">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-16 h-16 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center group-hover:border-primary transition-colors"
                      >
                        <Icon className="w-8 h-8 text-primary" />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                      {problem.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base leading-relaxed text-foreground/60">
                      {problem.description}
                    </p>

                    {/* Decorative line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "3rem" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                      className="h-0.5 bg-primary/40"
                    ></motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};