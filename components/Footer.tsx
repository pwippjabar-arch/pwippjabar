import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang Kami', href: '/about' },
  { name: 'Bidang', href: '/bidang' },
  { name: 'Tasykil', href: '/tasykil' },
  { name: 'Direktori PD', href: '/daerah' },
  { name: 'Berita', href: '/berita' },
  { name: 'Galeri', href: '/galeri' },
  { name: 'Pendaftaran', href: '/pendaftaran' },
  { name: 'Kontak', href: '/kontak' },
];

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/pw_ippjabar?igsh=bWdtZTFjcWRuNnBo',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/6285923248689',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.754z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:pwippjabar@gmail.com',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark dark:bg-gray-950 text-white border-t border-gray-800 relative overflow-hidden">
      {/* Dekorasi Motif Mega Mendung di Footer */}
      <svg
        className="pointer-events-none absolute bottom-0 right-0 w-48 sm:w-64 opacity-[0.05]"
        viewBox="0 0 220 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M-5,70 C15,38 35,52 55,42 C68,18 88,30 108,22 C120,4 138,16 155,22 C175,30 195,18 215,42 C225,52 225,62 225,70" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M-5,78 C15,48 35,61 55,51 C68,28 88,39 108,31 C120,14 138,25 155,31 C175,39 195,28 215,51 C225,61 225,70 225,78" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M-5,86 C15,58 35,70 55,60 C68,38 88,48 108,40 C120,24 138,34 155,40 C175,48 195,38 215,60 C225,70 225,79 225,86" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M-5,94 C15,68 35,79 55,69 C68,48 88,57 108,49 C120,34 138,43 155,49 C175,57 195,48 215,69 C225,79 225,88 225,94" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M-5,102 C15,78 35,88 55,78 C68,58 88,66 108,58 C120,44 138,52 155,58 C175,66 195,58 215,78 C225,88 225,97 225,102" stroke="white" strokeWidth="1" strokeLinecap="round" />
        <path d="M-5,148 C20,118 42,130 62,120 C75,98 95,110 115,102 C128,86 146,96 163,102 C183,110 203,98 220,120 C225,128 225,138 225,148" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M-5,156 C20,128 42,139 62,129 C75,108 95,118 115,110 C128,95 146,104 163,110 C183,118 203,108 220,129 C225,137 225,147 225,156" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M-5,164 C20,138 42,148 62,138 C75,118 95,127 115,119 C128,105 146,113 163,119 C183,127 203,118 220,138 C225,146 225,156 225,164" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M-5,172 C20,148 42,157 62,147 C75,128 95,136 115,128 C128,115 146,122 163,128 C183,136 203,128 220,147 C225,155 225,165 225,172" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-10 border-b border-gray-700/60">

          {/* Kolom 1: Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="https://lh3.googleusercontent.com/d/1DlkHUcjgGAUNNZoqlsV5eYBcvNLGepRJ"
                alt="Logo PW IPP Jawa Barat"
                width={44}
                height={44}
                className="w-11 h-11 object-contain rounded-xl"
              />
              <div>
                <span className="font-extrabold text-base tracking-tight block leading-none">PW IPP JAWA BARAT</span>
                <span className="text-xs text-gray-400">Ikatan Pelajar Persis</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
              Pimpinan Wilayah Ikatan Pelajar Persis Jawa Barat. Kritis, Ilmiah, dan Responsif dalam membina generasi pelajar Islam.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-700/60 hover:bg-brand-red text-gray-300 hover:text-white transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">Navigasi Cepat</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white hover:pl-1 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-red opacity-0 group-hover:opacity-100 transition" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs leading-relaxed">Jl. Peta No.154, Bojongloa Kaler, Kota Bandung, Jawa Barat 40232</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-brand-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-xs">pwippjabar@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-brand-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-xs">+62 859-2324-8689</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Baris Bawah */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} PW IPP Jawa Barat. All rights reserved.
          </span>
          <span className="text-xs text-gray-600 italic">
            Kritis · Ilmiah · Responsif
          </span>
        </div>
      </div>
    </footer>
  );
}
