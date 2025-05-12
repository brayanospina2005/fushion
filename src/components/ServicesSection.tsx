import React from 'react';
import { Shirt, Footprints, TrendingUp, PackageCheck, Ship, ClipboardCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../utils/content';

const ServicesSection: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];

  const services = [
    { id: 1, icon: <Shirt size={32} />, name: t.services.categories.clothing },
    { id: 2, icon: <Footprints size={32} />, name: t.services.categories.footwear },
  ];

  const processSteps = [
    { id: 1, icon: <TrendingUp size={28} />, title: t.services.process.step1 },
    { id: 2, icon: <PackageCheck size={28} />, title: t.services.process.step2 },
    { id: 3, icon: <Ship size={28} />, title: t.services.process.step3 },
    { id: 4, icon: <ClipboardCheck size={28} />, title: t.services.process.step4 },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          {t.services.title}
        </h2>
        
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-gray-600">
            {t.services.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-20 justify-center">
          {services.map((service, idx) => (
            <div key={service.id} className="bg-primary/10 rounded-lg p-6 text-center transform transition-transform hover:scale-105" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="flex justify-center mb-4">
                <div className="bg-white p-3 rounded-full shadow-md text-primary">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
            </div>
          ))}
        </div>
        
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
          {t.services.processTitle}
        </h3>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/10 -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex flex-col items-center">
                  <div className="bg-primary text-white p-4 rounded-full shadow-lg z-10 mb-4">
                    {step.icon}
                  </div>
                  <span className="absolute top-4 -left-3 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </span>
                  <h4 className="text-center text-gray-800 font-medium">{step.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;