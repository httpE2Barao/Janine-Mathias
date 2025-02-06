interface HeroProps {
  name: string;
  title: string;
  backgroundImage: string;
}

export function Hero({ name, title, backgroundImage }: HeroProps) {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <div className="text-center fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-text bg-gradient-to-r from-purple-200 via-white to-pink-200 bg-clip-text text-transparent">
            {name}
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200 tracking-wide">
            {title}
          </p>
          <div className="mt-12">
            <button className="px-8 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30 hover:bg-white/30 transition-colors duration-300">
              Conheça meu trabalho
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}