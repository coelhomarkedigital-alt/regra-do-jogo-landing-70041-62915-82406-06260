import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        setShowPlayButton(false);
      }
    }
  };

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.load();
      setIsPlaying(false);
      setShowPlayButton(true);
    }
  };

  const handleVideoClick = () => {
    handlePlayPause();
    if (!isPlaying) {
      setShowPlayButton(false);
    }
  };

  return (
    <section className="py-16 bg-black">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Veja como funciona
            </h2>
          </div>
          
          <div 
            className="relative w-full rounded-2xl overflow-hidden aspect-video"
            style={{ 
              boxShadow: '0 0 30px rgba(251, 191, 36, 0.3), 0 0 60px rgba(245, 192, 69, 0.15), inset 0 0 0 2px rgba(251, 191, 36, 0.4)'
            }}
          >
            <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full object-contain cursor-pointer"
              src="/video-apresentacao.mp4"
              playsInline
              preload="metadata"
              onEnded={handleVideoEnd}
              onClick={handleVideoClick}
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
            >
              Seu navegador não suporta a reprodução de vídeo.
            </video>
            
            {/* Play/Pause Overlay Button */}
            {showPlayButton && (
              <button
                onClick={handlePlayPause}
                className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 hover:bg-black/40"
                aria-label="Reproduzir vídeo"
              >
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110">
                  <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </button>
            )}
            
            {/* Pause button when playing */}
            {isPlaying && !showPlayButton && (
              <button
                onClick={handlePlayPause}
                className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                aria-label="Pausar vídeo"
              >
                <div className="w-20 h-20 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm">
                  <Pause className="w-10 h-10 text-white" fill="currentColor" />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
