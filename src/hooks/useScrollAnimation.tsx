import { useEffect } from 'react';

/**
 * Hook customizado para ativar animações baseadas em scroll
 * Usa Intersection Observer para detectar quando elementos entram na viewport
 */
export const useScrollAnimation = () => {
  useEffect(() => {
    // Configuração do observer
    const observerOptions = {
      threshold: 0.1, // Elemento precisa estar 10% visível
      rootMargin: '0px 0px -80px 0px' // Margem para trigger mais natural
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
    
    // Começa a observar cada elemento
    animatedElements.forEach(element => {
      observer.observe(element);
    });

    // Cleanup ao desmontar
    return () => {
      animatedElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
};
