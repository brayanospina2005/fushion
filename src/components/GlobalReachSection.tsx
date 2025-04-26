import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../utils/content';

const GlobalReachSection: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];

  const locations = [
    {
      id: 1,
      name: t.global.countries.china,
      flag: "🇨🇳",
      region: "Asia"
    },
    {
      id: 2,
      name: t.global.countries.turkey,
      flag: "🇹🇷",
      region: "Eurasia"
    },
    {
      id: 3,
      name: t.global.countries.panama,
      flag: "🇵🇦",
      region: "Central America"
    },
    {
      id: 4,
      name: t.global.countries.europe,
      flag: "🇪🇺",
      region: "Europe"
    },
    {
      id: 5,
      name: t.global.countries.brazil,
      flag: "🇧🇷",
      region: "South America"
    },
    {
      id: 6,
      name: t.global.countries.colombia,
      flag: "🇨🇴",
      region: "South America"
    }
  ];

  return (
    <section id="global" className="py-20 bg-[#E6F3FF]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          {t.global.title}
        </h2>
        
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-gray-600">
            {t.global.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center">
                <span className="text-4xl mr-3">{location.flag}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{location.name}</h3>
                  <p className="text-gray-500 text-sm">{location.region}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {t.global.platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-[#E6F3FF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-[#4A90E2] w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{platform.name}</h3>
              <p className="text-gray-600 text-sm">{platform.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;