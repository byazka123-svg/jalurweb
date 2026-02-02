
import React from 'react';

interface CTASectionProps {
  onShowContactForm: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onShowContactForm }) => {
  return (
    <section className="bg-brand-blue">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Siap Mengambil Rute Tercepat Menuju Digital?
          </h2>
          <p className="mt-4 text-lg text-blue-200 mb-8">
            Jangan tunda lagi. Diskusikan proyek Anda dengan tim ahli kami dan dapatkan analisis kebutuhan serta penawaran khusus hari ini.
          </p>
          <button onClick={onShowContactForm} className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-base rounded-lg shadow-md transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-brand-orange text-white hover:bg-orange-600 focus:ring-brand-orange">
            Hubungi Kami Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;