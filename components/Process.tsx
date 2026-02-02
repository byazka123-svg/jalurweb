
import React from 'react';

const processSteps = [
  {
    number: '01',
    title: 'Diskusi & Strategi',
    description: 'Memahami tujuan bisnis Anda adalah langkah pertama kami. Kami merancang strategi digital yang paling efektif.',
  },
  {
    number: '02',
    title: 'Desain & Prototyping',
    description: 'Visualisasi ide Anda ke dalam desain yang menarik dan fungsional sebelum masuk ke tahap development.',
  },
  {
    number: '03',
    title: 'Pengembangan & Uji Coba',
    description: 'Proses coding yang presisi dan pengujian menyeluruh untuk memastikan website berjalan dengan performa terbaik.',
  },
  {
    number: '04',
    title: 'Peluncuran & Dukungan',
    description: 'Kami mendampingi Anda saat peluncuran dan memberikan dukungan berkelanjutan untuk kesuksesan jangka panjang.',
  },
];

const Process: React.FC = () => {
  return (
    <section id="proses" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">Proses Kerja Kami</h2>
          <p className="mt-4 text-lg text-gray-600">
            Transparan, Terstruktur, dan Fokus Pada Hasil Terbaik Untuk Anda.
          </p>
        </div>
        <div className="relative">
          {/* Corrected timeline position: set to top-8 (2rem) to vertically center on the h-16 (4rem) circle */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-blue-200"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative text-center md:text-left">
                 <div className="flex justify-center md:justify-start">
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-blue-200 rounded-full">
                        <span className="text-xl font-bold text-brand-blue">{step.number}</span>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mt-6 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
