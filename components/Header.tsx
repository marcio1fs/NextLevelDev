import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick: () => void; isActive: boolean; }> = ({ href, children, onClick, isActive }) => (
  <a
    href={href}
    onClick={onClick}
    className={`block md:inline-block px-4 py-2 transition-colors duration-300 relative after:content-[''] after:absolute after:left-4 after:bottom-1 after:h-0.5 after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-[calc(100%-2rem)] after:w-0 ${
      isActive ? 'text-brand-primary font-semibold after:w-[calc(100%-2rem)]' : 'text-dark-text-secondary hover:text-white'
    }`}
  >
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Observer to track which section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        // This threshold triggers when a section is centered in the viewport
        rootMargin: '-50% 0px -50% 0px' 
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { href: '#about', label: 'Sobre Mim' },
    { href: '#portfolio', label: 'Portfólio' },
    { href: '#services', label: 'Serviços' },
    { href: '#contact', label: 'Contato' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-dark-bg/80 backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={handleLinkClick}
          className={`text-3xl font-bold transition-colors duration-300 hover:text-white ${activeSection === 'home' ? 'text-white' : 'text-dark-text-secondary'}`}
        >
          NextLevelDev<span className="text-brand-primary">.</span>
        </a>
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <NavLink 
              key={link.href} 
              href={link.href} 
              onClick={handleLinkClick}
              isActive={link.href === `#${activeSection}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-dark-bg/95 backdrop-blur-lg pb-4 border-b border-slate-800">
          <nav className="flex flex-col items-center">
            {navLinks.map((link) => (
                <NavLink 
                  key={link.href} 
                  href={link.href} 
                  onClick={handleLinkClick}
                  isActive={link.href === `#${activeSection}`}
                >
                {link.label}
                </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;