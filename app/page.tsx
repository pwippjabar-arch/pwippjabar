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

        {/* Motif Mega Mendung — batik khas Sunda/Cirebon, sudut kiri bawah */}
        <svg
          className="pointer-events-none absolute bottom-0 left-0 w-48 sm:w-72 opacity-[0.08] text-brand-red"
          viewBox="0 0 220 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Awan 1 — berlapis dari luar ke dalam */}
          <path d="M-5,70 C15,38 35,52 55,42 C68,18 88,30 108,22 C120,4 138,16 155,22 C175,30 195,18 215,42 C225,52 225,62 225,70" stroke="#D90429" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M-5,78 C15,48 35,61 55,51 C68,28 88,39 108,31 C120,14 138,25 155,31 C175,39 195,28 215,51 C225,61 225,70 225,78" stroke="#D90429" strokeWidth="2" strokeLinecap="round" />
          <path d="M-5,86 C15,58 35,70 55,60 C68,38 88,48 108,40 C120,24 138,34 155,40 C175,48 195,38 215,60 C225,70 225,79 225,86" stroke="#D90429" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M-5,94 C15,68 35,79 55,69 C68,48 88,57 108,49 C120,34 138,43 155,49 C175,57 195,48 215,69 C225,79 225,88 225,94" stroke="#D90429" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M-5,102 C15,78 35,88 55,78 C68,58 88,66 108,58 C120,44 138,52 155,58 C175,66 195,58 215,78 C225,88 225,97 225,102" stroke="#D90429" strokeWidth="1" strokeLinecap="round" />
          {/* Awan 2 — di bawah, sedikit bergeser */}
          <path d="M-5,148 C20,118 42,130 62,120 C75,98 95,110 115,102 C128,86 146,96 163,102 C183,110 203,98 220,120 C225,128 225,138 225,148" stroke="#D90429" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M-5,156 C20,128 42,139 62,129 C75,108 95,118 115,110 C128,95 146,104 163,110 C183,118 203,108 220,129 C225,137 225,147 225,156" stroke="#D90429" strokeWidth="2" strokeLinecap="round" />
          <path d="M-5,164 C20,138 42,148 62,138 C75,118 95,127 115,119 C128,105 146,113 163,119 C183,127 203,118 220,138 C225,146 225,156 225,164" stroke="#D90429" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M-5,172 C20,148 42,157 62,147 C75,128 95,136 115,128 C128,115 146,122 163,128 C183,136 203,128 220,147 C225,155 225,165 225,172" stroke="#D90429" strokeWidth="1.3" strokeLinecap="round" />
        </svg>

        {/* Motif Mega Mendung — sudut kanan atas (dibalik) */}
        <svg
          className="pointer-events-none absolute top-0 right-0 w-48 sm:w-72 opacity-[0.08] text-brand-red rotate-180"
          viewBox="0 0 220 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M-5,70 C15,38 35,52 55,42 C68,18 88,30 108,22 C120,4 138,16 155,22 C175,30 195,18 215,42 C225,52 225,62 225,70" stroke="#D90429" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M-5,78 C15,48 35,61 55,51 C68,28 88,39 108,31 C120,14 138,25 155,31 C175,39 195,28 215,51 C225,61 225,70 225,78" stroke="#D90429" strokeWidth="2" strokeLinecap="round" />
          <path d="M-5,86 C15,58 35,70 55,60 C68,38 88,48 108,40 C120,24 138,34 155,40 C175,48 195,38 215,60 C225,70 225,79 225,86" stroke="#D90429" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M-5,94 C15,68 35,79 55,69 C68,48 88,57 108,49 C120,34 138,43 155,49 C175,57 195,48 215,69 C225,79 225,88 225,94" stroke="#D90429" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M-5,102 C15,78 35,88 55,78 C68,58 88,66 108,58 C120,44 138,52 155,58 C175,66 195,58 215,78 C225,88 225,97 225,102" stroke="#D90429" strokeWidth="1" strokeLinecap="round" />
          <path d="M-5,148 C20,118 42,130 62,120 C75,98 95,110 115,102 C128,86 146,96 163,102 C183,110 203,98 220,120 C225,128 225,138 225,148" stroke="#D90429" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M-5,156 C20,128 42,139 62,129 C75,108 95,118 115,110 C128,95 146,104 163,110 C183,118 203,108 220,129 C225,137 225,147 225,156" stroke="#D90429" strokeWidth="2" strokeLinecap="round" />
          <path d="M-5,164 C20,138 42,148 62,138 C75,118 95,127 115,119 C128,105 146,113 163,119 C183,127 203,118 220,138 C225,146 225,156 225,164" stroke="#D90429" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M-5,172 C20,148 42,157 62,147 C75,128 95,136 115,128 C128,115 146,122 163,128 C183,136 203,128 220,147 C225,155 225,165 225,172" stroke="#D90429" strokeWidth="1.3" strokeLinecap="round" />
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
