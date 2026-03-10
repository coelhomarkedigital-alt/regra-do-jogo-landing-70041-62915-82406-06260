export const VideoSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div
            className="relative w-full rounded-2xl overflow-hidden aspect-video"
            style={{
              boxShadow:
                '0 0 30px rgba(251, 191, 36, 0.3), 0 0 60px rgba(245, 192, 69, 0.15), inset 0 0 0 2px rgba(251, 191, 36, 0.4)',
            }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/0pUzQjhjDRg?rel=0&fs=0&disablekb=1&iv_load_policy=3&playsinline=1&modestbranding=1&controls=1"
              title="Veja como funciona"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
