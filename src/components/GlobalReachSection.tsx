import React, { useRef } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../utils/content';
import { motion, useInView } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const GlobalReachSection: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];

  const locations = [
    {
      id: 1,
      name: t.global.countries.china,
      code: "cn",
      region: "Asia"
    },
    {
      id: 2,
      name: t.global.countries.turkey,
      code: "tr",
      region: "Eurasia"
    },
    {
      id: 3,
      name: t.global.countries.panama,
      code: "pa",
      region: "Central America"
    },
    {
      id: 4,
      name: t.global.countries.europe,
      code: "eu",
      region: "Europe"
    },
    {
      id: 5,
      name: t.global.countries.brazil,
      code: "br",
      region: "South America"
    },
    {
      id: 6,
      name: t.global.countries.colombia,
      code: "co",
      region: "South America"
    }
  ];

  // Refs para las tarjetas de países
  const locationRefs = locations.map(() => useRef(null));
  const locationInViews = locationRefs.map(ref => useInView(ref, { once: false, amount: 0.3 }));

  // Refs para las plataformas
  const platformRefs = t.global.platforms.map(() => useRef(null));
  const platformInViews = platformRefs.map(ref => useInView(ref, { once: false, amount: 0.3 }));

  return (
    <section id="global" className="py-20 bg-primary/10">
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
          {locations.map((location, idx) => (
            <motion.div
              key={location.id}
              ref={locationRefs[idx]}
              variants={fadeUpVariant}
              initial="hidden"
              animate={locationInViews[idx] ? 'visible' : 'hidden'}
              className="bg-white rounded-lg p-8 shadow-md flex flex-col items-center"
            >
              <span className="mb-4">
                <img
                  src={`https://unpkg.com/flagpack@latest/flags/4x3/${location.code}.svg`}
                  alt={`Bandera de ${location.name}`}
                  className="w-12 h-8 object-contain rounded"
                />
              </span>
              <h3 className="text-xl font-semibold text-primary mb-2">{location.name}</h3>
              <p className="text-gray-600">{location.region}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {t.global.platforms.map((platform, index) => (
            <motion.div
              key={index}
              ref={platformRefs[index]}
              variants={fadeUpVariant}
              initial="hidden"
              animate={platformInViews[index] ? 'visible' : 'hidden'}
              className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{platform.name}</h3>
              <p className="text-gray-600 text-sm">{platform.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;