
import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';

const App: React.FC = () => {
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);
  const contactSectionRef = useRef<HTMLElement>(null);

  const handleShowContactForm = () => {
    setIsContactFormVisible(true);
  };

  useEffect(() => {
    if (isContactFormVisible && contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isContactFormVisible]);

  return (
    <div className="bg-white text-brand-dark font-sans antialiased">
      <Header onShowContactForm={handleShowContactForm} />
      <main>
        <Hero onShowContactForm={handleShowContactForm} />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <CTASection onShowContactForm={handleShowContactForm} />
        {isContactFormVisible && <ContactSection ref={contactSectionRef} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
