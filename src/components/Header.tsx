import { useEffect, useState } from 'react';

export function Header() {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowTitle(true);
      } else {
        setShowTitle(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header bg-transparent py-5 fixed w-full z-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 w-full">
        {showTitle && <h1 className="text-3xl font-bold hover:cursor-default">Janine Mathias</h1>}
        <nav className={`flex ${showTitle && 'justify-between'} w-full`}>
          <ul className={`flex ${showTitle ? 'justify-end' : 'justify-around'} text-lg space-x-4 gap-4 w-full`}>
            <li><a href="#home" className="hover:underline">Inicio</a></li>
            <li><a href="#about" className="hover:underline">Sobre mim</a></li>
            <li><a href="#releases" className="hover:underline">Álbuns</a></li>
            <li><a href="#contact" className="hover:underline">Contatos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
