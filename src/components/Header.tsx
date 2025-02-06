import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function Header() {
  const [showTitle, setShowTitle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) {
      setShowTitle(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowTitle(true);
      } else {
        setShowTitle(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (!isHomePage) {
      navigate('/');
      // Aguarda a navegação completar antes de fazer o scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="header bg-transparent py-5 fixed w-full z-20 transition-colors duration-300 hidden md:block">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 w-full">
        {showTitle && (
          <h1 
            className="text-3xl font-bold hover:cursor-pointer" 
            onClick={() => {
              if (!isHomePage) {
                navigate('/');
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            Janine Mathias
          </h1>
        )}
        <nav className={`flex ${showTitle && 'justify-between'} w-full`}>
          <ul className={`flex ${showTitle ? 'justify-end' : 'justify-around'} text-lg space-x-4 gap-4 w-full`}>
            <li><a href="#home" onClick={(e) => handleNavigation(e, '#home')} className="hover:underline">Inicio</a></li>
            <li><a href="#about" onClick={(e) => handleNavigation(e, '#about')} className="hover:underline">Sobre mim</a></li>
            <li><a href="#releases" onClick={(e) => handleNavigation(e, '#releases')} className="hover:underline">Álbuns</a></li>
            <li><a href="#contact" onClick={(e) => handleNavigation(e, '#contact')} className="hover:underline">Contatos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}