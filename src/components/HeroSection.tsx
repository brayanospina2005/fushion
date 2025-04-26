import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../utils/content';

const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="relative h-screen bg-gradient-to-b from-[#E6F3FF] to-white flex items-center justify-center">
      <div className="container mx-auto px-4 pt-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
          {t.hero.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          {t.hero.subtitle}
        </p>
        <Link
          to="mission"
          smooth={true}
          duration={500}
          offset={-80}
          className="inline-block bg-[#4A90E2] text-white px-8 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors cursor-pointer"
        >
          {t.hero.cta}
        </Link>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          to="mission"
          smooth={true}
          duration={500}
          offset={-80}
          className="text-[#4A90E2] cursor-pointer"
        >
          <ArrowDown size={32} />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;