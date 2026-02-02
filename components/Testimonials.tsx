
import React from 'react';

const testimonials = [
  {
    quote: "Tim Jalur Web benar-benar mengerti visi kami. Website baru kami tidak hanya cantik, tapi juga berhasil meningkatkan penjualan online hingga 40%. Luar biasa!",
    name: "Andi Pratama",
    title: "Owner, Kopi Senja",
    avatar: 'https://picsum.photos/seed/avatar1/100/100'
  },
  {
    quote: "Profesional, tepat waktu, dan komunikatif. Proses kerjanya sangat terstruktur, membuat kami merasa tenang sepanjang proyek. Sangat direkomendasikan.",
    name: "Citra Lestari",
    title: "Marketing Manager, Bina Karya",
    avatar: 'https://picsum.photos/seed/avatar2/100/100'
  },
  {
    quote: "Sebagai seorang profesional, saya butuh website yang simpel tapi powerful. Jalur Web memberikan solusi yang tepat, cepat, dan hasilnya melebihi ekspektasi.",
    name: "Budi Santoso",
    title: "Konsultan Keuangan",
    avatar: 'https://picsum.photos/seed/avatar3/100/100'
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimoni" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">Apa Kata Mereka?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Kepuasan klien adalah prioritas utama kami. Dengarkan langsung dari mereka yang telah merasakan dampaknya.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50/70 p-8 rounded-xl shadow-lg flex flex-col">
              <div className="flex-grow">
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center mt-6 pt-6 border-t border-gray-200">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <p className="font-bold text-brand-dark">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
