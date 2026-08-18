import Link from 'next/link';
import StatCounter from '@/components/StatCounter';
import BeritaCard from '@/components/BeritaCard';
import FaqSection from '@/components/FaqSection';
import { getBeritaData, getPendaftaranData, getPengumumanData, BeritaItem, PendaftaranItem, PengumumanItem } from '@/lib/api';
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
  let openAgendas: PendaftaranItem[] = [];
  let pengumumanList: PengumumanItem[] = [];

  try {
    const allNews = await getBeritaData();
    latestNews = allNews.slice(0, 3);
  } catch (err) {
    console.error('Gagal memuat berita terbaru di beranda:', err);
  }

  try {
    const allPendaftaran = await getPendaftaranData();
    openAgendas = allPendaftaran.filter((p) => (p.status || '').toLowerCase().includes('buka')).slice(0, 3);
    if (openAgendas.length === 0 && allPendaftaran.length > 0) {
      openAgendas = allPendaftaran.slice(0, 2);
    }
  } catch (err) {
    console.error('Gagal memuat agenda pendaftaran di beranda:', err);
  }

  try {
    pengumumanList = await getPengumumanData();
  } catch (err) {
    console.error('Gagal memuat pengumuman di beranda:', err);
  }

  return (
    <>
      {/* ===== 1. HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50/60 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 pt-12 sm:pt-20 pb-16 sm:pb-24">
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
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3].map((col) => {
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
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3].map((col) => {
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
            <span className="inline-block px-3.5 py-1 mb-4 sm:mb-6 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-brand-red bg-red-100/60 dark:bg-red-900/30 rounded-full border border-red-200 dark:border-red-800">
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

      {/* ===== 2. STATISTIK ORGANISASI ===== */}
      <StatCounter />

      {/* ===== 3. KILAS SIARAN PERS & MAKLUMAT RESMI ===== */}
      <section className="py-14 sm:py-18 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-semibold text-brand-red uppercase tracking-wider bg-red-50 dark:bg-red-900/30 px-3 py-1 rounded-full flex items-center gap-1.5 w-fit">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-ping inline-block" />
                Maklumat & Siaran Pers
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark dark:text-white mt-3">
                Kilas Maklumat Resmi PW IPP Jawa Barat
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                Informasi resmi, maklumat pimpinan, dan siaran pers terverifikasi dari Pimpinan Wilayah.
              </p>
            </div>
          </div>

          {pengumumanList.length === 0 ? (
            <div className="bg-gradient-to-r from-red-50/70 via-gray-50 to-red-50/40 dark:from-gray-800/80 dark:via-gray-800 dark:to-gray-850 rounded-3xl p-6 sm:p-8 border border-red-100 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-red text-white flex items-center justify-center flex-shrink-0 shadow-red-glow">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-brand-dark dark:text-white">
                    Papan Maklumat & Siaran Pers Terpusat
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Seluruh maklumat penting dan rilis sikap resmi pimpinan wilayah akan disiarkan secara berkala di sini.
                  </p>
                </div>
              </div>
              <Link
                href="/berita"
                className="px-6 py-3 bg-brand-red hover:bg-brand-darkred text-white text-xs sm:text-sm font-bold rounded-xl shadow-red-glow transition flex-shrink-0 text-center"
              >
                Baca Kabar & Rilis Lengkap &rarr;
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pengumumanList.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200/80 dark:border-gray-700 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider bg-red-50 text-brand-red dark:bg-red-900/30">
                        {item.kategori || 'Maklumat'}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500">{item.tanggal}</span>
                    </div>
                    <h3 className="font-bold text-base text-brand-dark dark:text-white mb-2 line-clamp-2">
                      {item.judul}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-xs line-clamp-3 leading-relaxed mb-4">
                      {item.isi}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 dark:border-gray-700/80">
                    {item.linkDokumen && item.linkDokumen !== '#' ? (
                      <a
                        href={item.linkDokumen}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-brand-red hover:underline flex items-center gap-1"
                      >
                        <span>Unduh / Baca Dokumen Resmi</span>
                        <span>&rarr;</span>
                      </a>
                    ) : (
                      <Link
                        href="/berita"
                        className="text-xs font-bold text-brand-red hover:underline flex items-center gap-1"
                      >
                        <span>Lihat Selengkapnya</span>
                        <span>&rarr;</span>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== 4. AGENDA & PENDAFTARAN TERBUKA ===== */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-semibold text-brand-red uppercase tracking-wider bg-red-50 dark:bg-red-900/30 px-3 py-1 rounded-full">
                Agenda & Pelatihan
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark dark:text-white mt-3">
                Pendaftaran Kegiatan Terdekat
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                Ikuti berbagai agenda pembinaan, kaderisasi, dan kegiatan resmi PW IPP Jawa Barat.
              </p>
            </div>
            <Link
              href="/pendaftaran"
              className="mt-4 md:mt-0 text-sm font-bold text-brand-red hover:underline flex items-center gap-1.5"
            >
              <span>Lihat Semua Pendaftaran</span>
              <span>&rarr;</span>
            </Link>
          </div>

          {openAgendas.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 text-center max-w-2xl mx-auto shadow-sm">
              <div className="w-12 h-12 mx-auto rounded-full bg-red-50 dark:bg-red-900/30 text-brand-red flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-base text-brand-dark dark:text-white mb-1">Belum Ada Pendaftaran yang Dibuka</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-5">
                Pantau terus portal ini untuk informasi jadwal pendaftaran kegiatan mendatang.
              </p>
              <Link
                href="/pendaftaran"
                className="inline-block px-5 py-2.5 bg-brand-red text-white text-xs font-bold rounded-xl shadow-red-glow hover:opacity-95 transition"
              >
                Buka Halaman Pendaftaran
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {openAgendas.map((item, idx) => {
                const isOpen = (item.status || '').toLowerCase().includes('buka');
                return (
                  <div
                    key={item.id || idx}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span
                          className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 ${
                            isOpen
                              ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                          }`}
                        >
                          {isOpen && <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping inline-block" />}
                          {isOpen ? 'Pendaftaran Dibuka' : 'Pendaftaran Tutup'}
                        </span>
                      </div>
                      <h3 className="font-bold text-base text-brand-dark dark:text-white mb-2 line-clamp-2">
                        {item.namaKegiatan}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-xs line-clamp-2 mb-4">
                        {item.deskripsi || 'Kegiatan resmi Pimpinan Wilayah Ikatan Pelajar Persis Jawa Barat.'}
                      </p>

                      <div className="space-y-1.5 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-3">
                        <div className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-brand-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{item.tanggal || '-'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-brand-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="truncate">{item.tempat || '-'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-3">
                      {isOpen && item.linkGForm && item.linkGForm !== '#' ? (
                        <a
                          href={item.linkGForm}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 px-4 bg-gradient-to-r from-brand-red to-brand-darkred text-white text-xs font-bold rounded-xl shadow-red-glow hover:opacity-95 transition text-center block"
                        >
                          Daftar Sekarang &rarr;
                        </a>
                      ) : (
                        <Link
                          href="/pendaftaran"
                          className="w-full py-2.5 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition text-center block"
                        >
                          Lihat Detail Agenda
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ===== 5. KABAR & BERITA TERKINI ===== */}
      {latestNews.length > 0 && (
        <section className="py-16 sm:py-20 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <span className="text-xs font-semibold text-brand-red uppercase tracking-wider bg-red-50 dark:bg-red-900/30 px-3 py-1 rounded-full">
                  Informasi Terbaru
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark dark:text-white mt-3">
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

      {/* ===== 6. TANYA JAWAB (FAQ) INTERAKTIF ===== */}
      <FaqSection />
    </>
  );
}
