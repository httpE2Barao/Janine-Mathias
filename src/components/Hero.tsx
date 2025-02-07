import { Music4 } from 'lucide-react';

interface HeroProps {
  name: string;
  title: string;
  backgroundImage: string;
}

export function Hero({ name, title, backgroundImage }: HeroProps) {
  const scrollToReleases = () => {
    const releasesSection = document.querySelector('#releases');
    if (releasesSection) {
      releasesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src={backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-center">{name}</h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl mx-auto text-gray-200 mb-8">
          {title}
        </p>
        <button
          onClick={scrollToReleases}
          className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Music4 className="w-5 h-5" />
          <span>Ver Lançamentos</span>
        </button>
      </div>
    </div>
  );
}