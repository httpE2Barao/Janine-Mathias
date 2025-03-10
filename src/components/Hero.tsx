import { Music4 } from 'lucide-react';

interface HeroProps {
  name: string;
  title: string;
  backgroundImage: string;
  ticketLink?: string; 
}

export function Hero({ name, title, backgroundImage, ticketLink }: HeroProps) {

  const scrollTo = ( props: String ) => {
    const releasesSection = document.querySelector(`#${props}`);
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
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium mb-4 text-center tracking-wide">{name}</h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl mx-auto text-gray-200 mb-8">
          {title}
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('releases')}
            className="flex items-center gap-3 px-8 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30 hover:bg-white/30 transition-colors duration-300"
          >
            <Music4 className="w-5 h-5" />
            <span>Ver Lançamentos</span>
          </button>
          {ticketLink && (
            <button
              onClick={() => scrollTo('shows')}
              className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors"
            >
              Comprar Ingressos 
            </button> // inscreva-se
          )}
        </div>
      </div>
    </div>
  );
}