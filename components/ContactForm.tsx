import React, { useState } from 'react';
import { WhatsAppIcon } from './IconComponents';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    brandName: '',
    websiteType: '',
    whatsappNumber: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const targetPhoneNumber = '6285717600058';
      
      const messageText = `
Halo Jalur Web,

Saya ingin memulai proyek baru dengan detail sebagai berikut:

*Nama Owner:* ${formData.ownerName}
*Nama Brand/Perusahaan:* ${formData.brandName}
*Jenis Website:* ${formData.websiteType}
*Nomor WhatsApp:* ${formData.whatsappNumber}
*Pesan Tambahan:*
${formData.message || '(Tidak ada pesan tambahan)'}

Mohon informasinya lebih lanjut. Terima kasih.
      `.trim();

      const encodedMessage = encodeURIComponent(messageText);
      const whatsappUrl = `https://wa.me/${targetPhoneNumber}?text=${encodedMessage}`;
      
      window.open(whatsappUrl, '_blank');
      
      setFormData({
        ownerName: '',
        brandName: '',
        websiteType: '',
        whatsappNumber: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 300);
  };

  const inputClasses = "bg-white w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-brand-blue placeholder:text-gray-400";

  return (
    <>
      <p className="text-gray-600 text-sm mb-6 text-center">
        Isi detail di bawah ini, dan tim kami akan segera menyusun penawaran untuk Anda.
      </p>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 mb-1">Nama Owner</label>
          <input type="text" name="ownerName" id="ownerName" required className={inputClasses} placeholder="cth: Budi Santoso" value={formData.ownerName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="brandName" className="block text-sm font-medium text-gray-700 mb-1">Nama Brand/Perusahaan</label>
          <input type="text" name="brandName" id="brandName" required className={inputClasses} placeholder="cth: Kopi Senja" value={formData.brandName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="websiteType" className="block text-sm font-medium text-gray-700 mb-1">Jenis Website</label>
          <select name="websiteType" id="websiteType" required className={inputClasses} value={formData.websiteType} onChange={handleChange}>
            <option value="" disabled>Pilih jenis website...</option>
            <option value="Company Profile">Company Profile</option>
            <option value="E-Commerce / Toko Online">E-Commerce / Toko Online</option>
            <option value="Landing Page">Landing Page</option>
            <option value="Blog / Portal Berita">Blog / Portal Berita</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
        <div>
          <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700 mb-1">Nomor WhatsApp Aktif</label>
          <input type="tel" name="whatsappNumber" id="whatsappNumber" required className={inputClasses} placeholder="cth: 081234567890" value={formData.whatsappNumber} onChange={handleChange} />
          <p className="text-xs text-gray-500 mt-1">Pastikan nomor ini terhubung dengan WhatsApp.</p>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan Singkat (Opsional)</label>
          <textarea name="message" id="message" rows={3} className={inputClasses} placeholder="Jelaskan sedikit tentang proyek Anda..." value={formData.message} onChange={handleChange}></textarea>
        </div>
        <div className="pt-2">
          <Button type="submit" variant="secondary" size="thin" className="w-full" leftIcon={<WhatsAppIcon className="w-5 h-5" />} disabled={isSubmitting}>
            {isSubmitting ? 'Mengirim...' : 'Kirim via WhatsApp'}
          </Button>
          <p className="text-xs text-gray-500 mt-3 text-center">Anda akan diarahkan ke aplikasi WhatsApp.</p>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
