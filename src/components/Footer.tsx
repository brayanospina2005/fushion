import React from 'react';
import { Link } from 'react-scroll';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../utils/content';
import LogoFooter from '../assets/images/Logofooter.png';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { id: 'mission', label: t.nav.mission },
    { id: 'global', label: t.nav.global },
    { id: 'services', label: t.nav.services },
    { id: 'credentials', label: t.nav.credentials },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={LogoFooter} alt="Fushion Internacional Logo" className="w-20 h-auto" />
            </div>
            <p className="text-gray-400 mb-4 max-w-xs">
              {t.footer.description}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#8a75d9]">{t.footer.links}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-400 hover:text-[#8a75d9] cursor-pointer transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#8a75d9]">{t.footer.contact}</h3>
            <address className="text-gray-400 not-italic">
              123 Import Plaza, Suite 500<br />
              Miami, FL 33131, USA<br /><br />
              <span className="block mb-1">info@fushioninternacional.com</span>
              <span>+1 (555) 123-4567</span>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} FUSHION INTERNACIONAL. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;