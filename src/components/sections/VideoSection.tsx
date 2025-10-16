export const VideoSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container px-4 mx-auto">
        <div className="max-w-md mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Veja como funciona
            </h2>
          </div>
          
          <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
              src="https://www.youtube.com/embed/zEh1390Q-Q0?modestbranding=1&rel=0&showinfo=0"
              title="Veja como funciona o Clube do Livro Regras do Jogo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
