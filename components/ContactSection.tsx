
import React, { forwardRef } from 'react';
import ContactForm from './ContactForm';

const ContactSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="kontak" ref={ref} className="bg-gray-50/70 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">
            Mulai Proyek Digital Anda
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Langkah pertama Anda menuju kesuksesan digital dimulai di sini. Isi formulir di bawah, dan mari kita wujudkan ide Anda.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <ContactForm />
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
