import React from 'react';
import { Award, Globe, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../utils/content';

const CredentialsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];

  const credentials = [
    { 
      id: 1, 
      icon: <Award size={48} />, 
      title: t.credentials.items.fairs.title, 
      description: t.credentials.items.fairs.description 
    },
    { 
      id: 2, 
      icon: <Users size={48} />, 
      title: t.credentials.items.service.title, 
      description: t.credentials.items.service.description 
    },
    { 
      id: 3, 
      icon: <Globe size={48} />, 
      title: t.credentials.items.partnerships.title, 
      description: t.credentials.items.partnerships.description 
    },
  ];

  return (
    <section id="credentials" className="py-20 bg-[#E6F3FF]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          {t.credentials.title}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {credentials.map((credential) => (
            <div key={credential.id} className="bg-white rounded-lg p-8 shadow-md transform transition-transform hover:scale-105">
              <div className="flex justify-center mb-6 text-[#4A90E2]">
                {credential.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                {credential.title}
              </h3>
              <p className="text-gray-600 text-center">
                {credential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;