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
      {/* Dekorasi Motif Kawung Batik Sunda di Footer */}
      <svg
        className="pointer-events-none absolute bottom-0 right-0 w-48 sm:w-64 opacity-[0.04]"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {[0,1,2,3].map((row) =>
          [0,1,2,3].map((col) => {
            const cx = 25 + col * 50;
            const cy = 25 + row * 50;
            return (
              <g key={`${row}-${col}`}>
                <ellipse cx={cx} cy={cy - 12} rx="10" ry="12" stroke="white" strokeWidth="1.5" />
                <ellipse cx={cx} cy={cy + 12} rx="10" ry="12" stroke="white" strokeWidth="1.5" />
                <ellipse cx={cx - 12} cy={cy} rx="12" ry="10" stroke="white" strokeWidth="1.5" />
                <ellipse cx={cx + 12} cy={cy} rx="12" ry="10" stroke="white" strokeWidth="1.5" />
                <circle cx={cx} cy={cy} r="4" stroke="white" strokeWidth="1" />
              </g>
            );
          })
        )}
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
