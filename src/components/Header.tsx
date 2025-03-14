import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function Header() {
  const [showTitle, setShowTitle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const menuItems = [
    { label: 'Inicio', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Lançamentos', href: '#releases' },
    { label: 'Shows', href: '#shows' },
    { label: 'Contato', href: '#contact' },
  ];

  useEffect(() => {
    if (!isHomePage) {
      setShowTitle(true);
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const halfViewport = window.innerHeight / 2;
      
      if (scrollPosition > halfViewport) {
        setShowTitle(true);
        setIsScrolled(true);
      } else {
        setShowTitle(false);
        setIsScrolled(false);
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
    <header className={`
      fixed w-full z-20 transition-all duration-300 hidden md:block
      ${isScrolled 
        ? 'bg-white/60 backdrop-blur-sm shadow-sm py-4' 
        : 'bg-transparent py-5'
      }
    `}>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 w-full">
        {showTitle && (
          <h1 
            className={`text-3xl font-bold hover:cursor-pointer w-96  ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
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
        <nav className={`flex ${showTitle && 'justify-between'} w-full font-[400]`}>
          <ul className={`flex ${showTitle ? 'justify-end' : 'justify-around'} text-lg space-x-4 gap-4 w-full`}>
            {menuItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  onClick={(e) => handleNavigation(e, item.href)} 
                  className={`hover:underline ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}