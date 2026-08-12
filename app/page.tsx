import Link from 'next/link';
import StatCounter from '@/components/StatCounter';
import BeritaCard from '@/components/BeritaCard';
import { getBeritaData } from '@/lib/api';
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
  let latestNews = [];
  try {
    const allNews = await getBeritaData();
    latestNews = allNews.slice(0, 3);
  } catch (err) {
    console.error('Gagal memuat berita terbaru di beranda:', err);
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-red-50/50 via-white to-gray-50 pt-10 sm:pt-16 pb-14 sm:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3.5 py-1 mb-4 sm:mb-6 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-brand-red bg-red-100/60 rounded-full border border-red-200">
              Kritis, Ilmiah, Responsif
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-tight">
              Membangun Generasi{' '}
              <span className="bg-gradient-to-r from-brand-red to-brand-darkred bg-clip-text text-transparent">
                Ar-Rasikhuna Fil-&apos;Ilmi
              </span>{' '}
              yang berkarakteristik{' '}
              <span className="bg-gradient-to-r from-brand-red to-brand-darkred bg-clip-text text-transparent">
                Ibadurrahman
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-600 leading-relaxed px-2 sm:px-0">
              Pimpinan Wilayah Ikatan Pelajar Persis Jawa Barat berfokus pada pembinaan potensi pelajar dalam pengembangkan karakter, keilmuan, dan juga kepemimpinan, selain itu Kami juga berusaha menciptakan ruang inklusif dan juga aman bagi semua pelajar.
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
                className="w-full sm:w-auto px-7 py-3.5 bg-white text-brand-dark font-bold rounded-xl border border-gray-200 shadow-sm hover:bg-gray-50 transition transform hover:-translate-y-0.5 text-sm sm:text-base text-center"
              >
                Pendaftaran Kegiatan
              </Link>
              <Link
                href="/kontak"
                className="w-full sm:w-auto px-7 py-3.5 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition text-sm sm:text-base text-center"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTIK ORGANISASI (Count Up Animation on Scroll) */}
      <StatCounter />

      {/* KABAR TERBARU SECTION WITH CONTRASTING BG */}
      {latestNews.length > 0 && (
        <section className="py-16 bg-red-50/10 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <span className="text-xs font-semibold text-brand-red uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full">
                  Informasi Terbaru
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mt-3">
                  Kabar & Berita Terkini
                </h2>
                <p className="text-gray-500 text-sm mt-1">
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

            <div className="grid md:grid-cols-3 gap-8">
              {latestNews.map((item) => (
                <BeritaCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
