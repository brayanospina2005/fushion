import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../utils/content';

const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];

  const socialLinks = [
    {
      id: 'facebook',
      icon: <FaFacebookF size={20} />,
      url: 'https://facebook.com/fushioninternacional',
      label: 'Facebook'
    },
    {
      id: 'instagram',
      icon: <FaInstagram size={20} />,
      url: 'https://instagram.com/fushioninternacional',
      label: 'Instagram'
    },
    {
      id: 'linkedin',
      icon: <FaLinkedinIn size={20} />,
      url: 'https://linkedin.com/company/fushioninternacional',
      label: 'LinkedIn'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          {t.contact.title}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/10 rounded-lg p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Información de contacto */}
              <div className="space-y-8" data-aos="fade-up">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  {t.contact.getInTouch}
                </h3>
                
                <div className="space-y-6">
                  <a 
                    href="mailto:info@fushioninternacional.com" 
                    className="flex items-center group hover:text-primary transition-colors"
                  >
                    <div className="bg-white p-3 rounded-full mr-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 group-hover:text-primary">{t.contact.email}</h4>
                      <p className="text-gray-600">info@fushioninternacional.com</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center">
                    <div className="bg-white p-3 rounded-full mr-4 text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{t.contact.phone}</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-white p-3 rounded-full mr-4 text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{t.contact.address}</h4>
                      <p className="text-gray-600">
                        123 Import Plaza, Suite 500<br />
                        Miami, FL 33131, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Redes Sociales */}
              <div data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Síguenos en redes sociales
                </h3>
                
                <div className="space-y-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center group hover:text-primary transition-colors"
                    >
                      <div className="bg-white p-3 rounded-full mr-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        {social.icon}
                      </div>
                      <span className="font-medium text-gray-800 group-hover:text-primary">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>

                <p className="mt-8 text-gray-600 text-center">
                  ¡Conéctate con nosotros y mantente al día con las últimas tendencias en moda!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;