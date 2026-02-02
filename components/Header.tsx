
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onShowContactForm: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShowContactForm }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Layanan', href: '#layanan' },
    { name: 'Proses', href: '#proses' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimoni', href: '#testimoni' },
  ];

  const handleMobileConsultClick = () => {
    setIsOpen(false);
    onShowContactForm();
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-lg' : 'bg-white'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-extrabold text-brand-blue">
            Jalur<span className="text-brand-dark">Web</span>.
          </a>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-base font-medium text-gray-600 hover:text-brand-blue transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <button onClick={onShowContactForm} className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-base rounded-lg shadow-md transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-brand-blue text-white hover:bg-blue-700 focus:ring-brand-blue">
              Konsultasi Gratis
            </button>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-dark focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-white shadow-lg`}>
        <div className="flex flex-col space-y-4 p-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-base font-medium text-gray-600 hover:text-brand-blue transition-colors">
              {link.name}
            </a>
          ))}
          <button onClick={handleMobileConsultClick} className="inline-flex items-center justify-center text-center gap-2 px-6 py-3 font-semibold text-base rounded-lg shadow-md transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-brand-blue text-white hover:bg-blue-700 focus:ring-brand-blue w-full">
            Konsultasi Gratis
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
