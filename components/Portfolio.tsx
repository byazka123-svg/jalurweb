
import React from 'react';

const projects = [
  {
    image: 'https://picsum.photos/seed/project1/800/600',
    category: 'E-Commerce',
    title: 'Toko Kopi Senja',
    description: 'Platform e-commerce modern untuk brand kopi lokal ternama.'
  },
  {
    image: 'https://picsum.photos/seed/project2/800/600',
    category: 'Company Profile',
    title: 'Bina Karya Konstruksi',
    description: 'Website korporat yang elegan untuk perusahaan konstruksi nasional.'
  },
  {
    image: 'https://picsum.photos/seed/project3/800/600',
    category: 'Landing Page',
    title: 'Acara Virtual TechFest 2024',
    description: 'Landing page informatif dengan tingkat konversi registrasi tinggi.'
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="bg-gray-50/70 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">Klien yang Telah Kami Bantu</h2>
          <p className="mt-4 text-lg text-gray-600">
            Kami bangga menjadi bagian dari perjalanan digital berbagai brand di Indonesia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-brand-blue mb-1">{project.category}</p>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
