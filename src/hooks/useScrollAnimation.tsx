import { useEffect } from 'react';

/**
 * Hook customizado para ativar animações baseadas em scroll
 * Usa Intersection Observer para detectar quando elementos entram na viewport
 */
export const useScrollAnimation = () => {
  useEffect(() => {
    // Configuração do observer
    const observerOptions = {
      threshold: 0.05, // Reduzido para 5% para detectar melhor no desktop
      rootMargin: '0px 0px -50px 0px' // Margem ajustada para desktop
    };

    // Callback quando elemento entra na viewport
    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Pequeno delay para suavizar
          setTimeout(() => {
            entry.target.classList.add('animated');
          }, 50);
          
          // Para de observar após animar (animação acontece só uma vez)
          observer.unobserve(entry.target);
        }
      });
    };

    // Cria o observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Seleciona todos os elementos com data-animate
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    // Anima imediatamente elementos que já estão visíveis na viewport
    animatedElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible) {
        // Se já está visível, anima imediatamente
        setTimeout(() => {
          element.classList.add('animated');
        }, 100);
      } else {
        // Se não está visível, observa para animar quando entrar
        observer.observe(element);
      }
    });

    // Cleanup ao desmontar
    return () => {
      animatedElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
};
