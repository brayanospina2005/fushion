import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../utils/content';

const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    isSubmitted: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would connect to a backend API
    // For demonstration purposes, we'll simulate a successful submission
    setFormStatus({
      message: t.contact.success,
      isError: false,
      isSubmitted: true
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          {t.contact.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              {t.contact.getInTouch}
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#E6F3FF] p-3 rounded-full mr-4 text-[#4A90E2]">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">{t.contact.email}</h4>
                  <p className="text-gray-600">info@globaltrade.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#E6F3FF] p-3 rounded-full mr-4 text-[#4A90E2]">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">{t.contact.phone}</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#E6F3FF] p-3 rounded-full mr-4 text-[#4A90E2]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">{t.contact.address}</h4>
                  <p className="text-gray-600">123 Import Plaza, Suite 500<br />Miami, FL 33131, USA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#E6F3FF] rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              {t.contact.sendMessage}
            </h3>
            
            {formStatus.isSubmitted ? (
              <div className={`mb-6 p-4 rounded ${formStatus.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                {formStatus.message}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">{t.contact.form.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">{t.contact.form.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">{t.contact.form.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-[#4A90E2] text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors flex items-center"
                >
                  <Send size={18} className="mr-2" />
                  {t.contact.form.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;