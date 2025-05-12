import React, { useRef } from 'react';
import { Target, Compass } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../utils/content';
import { motion, useInView } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const MissionSection: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const inView1 = useInView(ref1, { once: false, amount: 0.3 });
  const inView2 = useInView(ref2, { once: false, amount: 0.3 });

  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          {t.mission.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            ref={ref1}
            variants={fadeUpVariant}
            initial="hidden"
            animate={inView1 ? 'visible' : 'hidden'}
            className="bg-primary/10 rounded-lg p-8 transform transition-transform hover:scale-105"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-full shadow-md">
                <Target size={40} className="text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
              {t.mission.missionTitle}
            </h3>
            <p className="text-gray-600 text-center">
              {t.mission.missionText}
            </p>
          </motion.div>
          
          <motion.div
            ref={ref2}
            variants={fadeUpVariant}
            initial="hidden"
            animate={inView2 ? 'visible' : 'hidden'}
            className="bg-primary/10 rounded-lg p-8 transform transition-transform hover:scale-105"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-full shadow-md">
                <Compass size={40} className="text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
              {t.mission.visionTitle}
            </h3>
            <p className="text-gray-600 text-center">
              {t.mission.visionText}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;