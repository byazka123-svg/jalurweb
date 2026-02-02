
import React from 'react';
import { CodeBracketIcon, PaintBrushIcon, MegaphoneIcon } from './IconComponents';

const services = [
  {
    icon: <CodeBracketIcon className="w-8 h-8 text-brand-blue" />,
    title: 'Pengembangan Website & Aplikasi',
    description: 'Dari landing page hingga e-commerce, kami bangun platform yang cepat, aman, dan mudah digunakan sesuai kebutuhan bisnis Anda.',
  },
  {
    icon: <PaintBrushIcon className="w-8 h-8 text-brand-blue" />,
    title: 'Desain UI/UX & Branding',
    description: 'Tampilan yang tidak hanya indah, tapi juga intuitif. Kami ciptakan pengalaman pengguna yang memikat dan meningkatkan konversi.',
  },
  {
    icon: <MegaphoneIcon className="w-8 h-8 text-brand-blue" />,
    title: 'Optimisasi SEO & Pemasaran Digital',
    description: 'Tingkatkan visibilitas Anda di Google dan jangkau audiens yang tepat sasaran untuk mendorong pertumbuhan bisnis secara online.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="layanan" className="bg-gray-50/70 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">Layanan Kami</h2>
          <p className="mt-4 text-lg text-gray-600">
            Solusi digital lengkap dan terintegrasi untuk setiap skala bisnis, dari UMKM hingga korporasi.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
