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
            <video
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl object-cover"
              src="/video-apresentacao.mp4"
              controls
              playsInline
              preload="metadata"
            >
              Seu navegador não suporta a reprodução de vídeo.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};
