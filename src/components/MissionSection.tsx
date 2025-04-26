import React from 'react';
import { Target, Compass } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../utils/content';

const MissionSection: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          {t.mission.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-[#E6F3FF] rounded-lg p-8 transform transition-transform hover:scale-105">
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-full shadow-md">
                <Target size={40} className="text-[#4A90E2]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
              {t.mission.missionTitle}
            </h3>
            <p className="text-gray-600 text-center">
              {t.mission.missionText}
            </p>
          </div>
          
          <div className="bg-[#E6F3FF] rounded-lg p-8 transform transition-transform hover:scale-105">
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-full shadow-md">
                <Compass size={40} className="text-[#4A90E2]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
              {t.mission.visionTitle}
            </h3>
            <p className="text-gray-600 text-center">
              {t.mission.visionText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;