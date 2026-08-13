import Link from 'next/link';
import StatCounter from '@/components/StatCounter';
import BeritaCard from '@/components/BeritaCard';
import { getBeritaData, BeritaItem } from '@/lib/api';
import { pageSeoMap, DEFAULT_IMAGE, SITE_URL } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: pageSeoMap.home.title,
  description: pageSeoMap.home.desc,
  openGraph: {
    title: pageSeoMap.home.title,
    description: pageSeoMap.home.desc,
    url: SITE_URL,
    images: [{ url: DEFAULT_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    title: pageSeoMap.home.title,
    description: pageSeoMap.home.desc,
    images: [DEFAULT_IMAGE],
  },
};

export default async function HomePage() {
  let latestNews: BeritaItem[] = [];
  try {
    const allNews = await getBeritaData();
    latestNews = allNews.slice(0, 3);
  } catch (err) {
    console.error('Gagal memuat berita terbaru di beranda:', err);
  }

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50/60 via-white to-gray-50 pt-12 sm:pt-20 pb-16 sm:pb-24">

        {/* Dekorasi Blob Merah Blur */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-brand-red/10 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -right-40 w-[380px] h-[380px] rounded-full bg-brand-darkred/10 blur-3xl" />

        {/* Motif Batik Sunda SVG — sudut kiri bawah */}
        <svg
          className="pointer-events-none absolute bottom-0 left-0 w-48 sm:w-72 opacity-[0.07] text-brand-red"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Motif Kawung — batik Sunda paling khas */}
          {[0,1,2,3].map((row) =>
            [0,1,2,3].map((col) => {
              const cx = 25 + col * 50;
              const cy = 25 + row * 50;
              return (
                <g key={`${row}-${col}`}>
                  <ellipse cx={cx} cy={cy - 12} rx="10" ry="12" stroke="#D90429" strokeWidth="1.5" />
                  <ellipse cx={cx} cy={cy + 12} rx="10" ry="12" stroke="#D90429" strokeWidth="1.5" />
                  <ellipse cx={cx - 12} cy={cy} rx="12" ry="10" stroke="#D90429" strokeWidth="1.5" />
                  <ellipse cx={cx + 12} cy={cy} rx="12" ry="10" stroke="#D90429" strokeWidth="1.5" />
                  <circle cx={cx} cy={cy} r="4" stroke="#D90429" strokeWidth="1" />
                </g>
              );
            })
          )}
        </svg>

        {/* Motif Batik Sunda SVG — sudut kanan atas */}
        <svg
          className="pointer-events-none absolute top-0 right-0 w-48 sm:w-72 opacity-[0.07] text-brand-red rotate-180"
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
                  <ellipse cx={cx} cy={cy - 12} rx="10" ry="12" stroke="#D90429" strokeWidth="1.5" />
                  <ellipse cx={cx} cy={cy + 12} rx="10" ry="12" stroke="#D90429" strokeWidth="1.5" />
                  <ellipse cx={cx - 12} cy={cy} rx="12" ry="10" stroke="#D90429" strokeWidth="1.5" />
                  <ellipse cx={cx + 12} cy={cy} rx="12" ry="10" stroke="#D90429" strokeWidth="1.5" />
                  <circle cx={cx} cy={cy} r="4" stroke="#D90429" strokeWidth="1" />
                </g>
              );
            })
          )}
        </svg>

        {/* Konten Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <span className="inline-block px-3.5 py-1 mb-4 sm:mb-6 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-brand-red bg-red-100/60 rounded-full border border-red-200">
              Kritis · Ilmiah · Responsif
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark dark:text-white tracking-tight leading-tight">
              Membangun Generasi{' '}
              <span className="bg-gradient-to-r from-brand-red to-brand-darkred bg-clip-text text-transparent">
                Ar-Rasikhuna Fil-&apos;Ilmi
              </span>{' '}
              yang berkarakteristik{' '}
              <span className="bg-gradient-to-r from-brand-red to-brand-darkred bg-clip-text text-transparent">
                Ibadurrahman
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed px-2 sm:px-0">
              Pimpinan Wilayah Ikatan Pelajar Persis Jawa Barat berfokus pada pembinaan potensi pelajar dalam pengembangan karakter, keilmuan, dan kepemimpinan.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
              <Link
                href="/about"
                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-brand-red to-brand-darkred text-white font-bold rounded-xl shadow-red-glow hover:opacity-95 transition transform hover:-translate-y-0.5 text-sm sm:text-base text-center"
              >
                Tentang Kami
              </Link>
              <Link
                href="/pendaftaran"
                className="w-full sm:w-auto px-7 py-3.5 bg-white dark:bg-gray-800 text-brand-dark dark:text-white font-bold rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition transform hover:-translate-y-0.5 text-sm sm:text-base text-center"
              >
                Pendaftaran Kegiatan
              </Link>
              <Link
                href="/kontak"
                className="w-full sm:w-auto px-7 py-3.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition text-sm sm:text-base text-center"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTIK ORGANISASI */}
      <StatCounter />

      {/* KABAR TERBARU */}
      {latestNews.length > 0 && (
        <section className="py-16 bg-red-50/10 dark:bg-gray-900/40 border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <span className="text-xs font-semibold text-brand-red uppercase tracking-wider bg-red-50 dark:bg-red-900/30 px-3 py-1 rounded-full">
                  Informasi Terbaru
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark dark:text-white mt-3">
                  Kabar & Berita Terkini
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  Ikuti perkembangan pergerakan dan aktivitas PW IPP Jawa Barat.
                </p>
              </div>
              <Link
                href="/berita"
                className="mt-4 md:mt-0 text-sm font-bold text-brand-red hover:underline flex items-center gap-1.5"
              >
                <span>Lihat Semua Berita</span>
                <span>&rarr;</span>
              </Link>
            </div>

            {/* Mobile Touch Swipe Carousel / Desktop Grid */}
            <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
              {latestNews.map((item) => (
                <div key={item.id} className="min-w-[85%] sm:min-w-[70%] md:min-w-0 snap-center flex flex-col">
                  <BeritaCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
