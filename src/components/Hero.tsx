import { ArrowDown } from 'lucide-react';

type Props = {
  onExplore: () => void;
};

export default function Hero({ onExplore }: Props) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover" "md:object-contain"
      >
        <source src="/Website_Banner_Video(1).mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-sage-900/40" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <button
          onClick={onExplore}
          className="inline-flex items-center gap-2 bg-sage-50/15 backdrop-blur-sm text-sage-50 px-8 py-3.5 rounded-full font-light tracking-wide border border-sage-50/30 hover:bg-sage-50/25 transition-all duration-300 hover:gap-3 animate-fade-up"
        >
          Explore the Gallery
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="w-5 h-5 text-sage-50/70" />
      </div>
    </section>
  );
}
