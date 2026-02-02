
import React from 'react';
import Button from './Button';
import { WhatsAppIcon } from './IconComponents';

interface HeroProps {
  onShowContactForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShowContactForm }) => {

  const handleWhatsAppClick = () => {
    const targetPhoneNumber = '6285717600058';
    const messageText = 'Halo Jalur Web, saya tertarik dengan layanan Anda dan ingin berkonsultasi lebih lanjut.';
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${targetPhoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-blue font-semibold mb-2">JALUR WEB</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-dark mb-6 leading-tight">
            Website Profesional, Hasil Maksimal.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Kami bukan sekadar pembuat website. Kami adalah partner strategis Anda dalam menavigasi dunia digital.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onShowContactForm} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-base rounded-lg shadow-md transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-brand-orange text-white hover:bg-orange-600 focus:ring-brand-orange">
              Mulai Konsultasi Gratis
            </button>
            <Button variant="secondary" className="w-full sm:w-auto" leftIcon={<WhatsAppIcon className="w-5 h-5" />} onClick={handleWhatsAppClick}>
              Hubungi via WhatsApp
            </Button>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            <span className="font-semibold">Rute Tercepat Menuju Digital.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;