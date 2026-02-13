'use client';

interface VideoLoopProps {
  src: string;
  poster?: string;
}

export default function VideoLoop({ src, poster }: VideoLoopProps) {
  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm bg-[#E5E0D8]">
      {src ? (
        <video
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <span className="text-xs tracking-widest uppercase">Vídeo do Projeto</span>
        </div>
      )}
    </div>
  );
}
