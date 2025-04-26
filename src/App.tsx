import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import GlobalReachSection from './components/GlobalReachSection';
import ServicesSection from './components/ServicesSection';
import CredentialsSection from './components/CredentialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import './index.css';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <HeroSection />
        <MissionSection />
        <GlobalReachSection />
        <ServicesSection />
        <CredentialsSection />
        <ContactSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;