import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../utils/content';

const Header: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const t = content[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: 'mission', label: t.nav.mission },
    { id: 'global', label: t.nav.global },
    { id: 'services', label: t.nav.services },
    { id: 'credentials', label: t.nav.credentials },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Globe size={28} className="text-[#4A90E2] mr-2" />
          <span className="text-xl font-semibold text-[#4A90E2]">GlobalTrade</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-gray-700 hover:text-[#4A90E2] cursor-pointer transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <button 
            onClick={toggleLanguage} 
            className="ml-8 px-3 py-1 border border-[#4A90E2] rounded text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white transition-colors"
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleLanguage} 
            className="mr-4 px-2 py-1 border border-[#4A90E2] rounded text-[#4A90E2] text-sm"
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
          
          <button onClick={toggleMenu} className="text-gray-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="py-4 px-4">
            {navLinks.map((link) => (
              <li key={link.id} className="py-2">
                <Link
                  to={link.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-gray-700 hover:text-[#4A90E2] block transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;