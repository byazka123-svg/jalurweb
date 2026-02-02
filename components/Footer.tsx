
import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = ['Facebook', 'Instagram', 'LinkedIn', 'Twitter'];
  const footerLinks = [
    { title: 'Layanan', href: '#layanan' },
    { title: 'Proses', href: '#proses' },
    { title: 'Portfolio', href: '#portfolio' },
    { title: 'Kontak', href: '#' },
  ];

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-extrabold text-white">
              Jalur<span className="text-brand-blue">Web</span>.
            </h3>
            <p className="mt-2 text-gray-400">Rute Tercepat Menuju Digital.</p>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((link) => (
                <a key={link} href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">{link}</span>
                  {/* Placeholder for actual icons */}
                  <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-gray-200">Navigasi</h4>
              <ul className="mt-4 space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.title}><a href={link.href} className="text-gray-400 hover:text-white">{link.title}</a></li>
                ))}
              </ul>
            </div>
             <div>
              <h4 className="font-semibold text-gray-200">Kontak</h4>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li><a href="mailto:halo@jalurweb.com" className="hover:text-white">halo@jalurweb.com</a></li>
                <li><a href="tel:085717600058" className="hover:text-white">0857 1760 0058</a></li>
              </ul>
            </div>
             <div>
              <h4 className="font-semibold text-gray-200">Alamat</h4>
              <p className="mt-4 text-gray-400">
                Jalan Digital No. 123,
                <br />
                Jakarta, Indonesia
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Jalur Web. Semua hak dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
