'use client';

import { useState } from 'react';

interface FaqItem {
  id: number;
  tanya: string;
  jawab: string;
  kategori: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 1,
    kategori: 'Tentang IPP',
    tanya: 'Apa itu Pimpinan Wilayah Ikatan Pelajar Persis (PW IPP) Jawa Barat?',
    jawab:
      'PW IPP Jawa Barat adalah organisasi otonom di bawah Pimpinan Wilayah Persatuan Islam (Persis) yang menaungi dan membina potensi pelajar di seluruh wilayah Jawa Barat, berlandaskan Al-Qur\'an dan As-Sunnah dengan semboyan Ar-Rasikhuna Fil \'Ilmi.',
  },
  {
    id: 2,
    kategori: 'Keanggotaan',
    tanya: 'Siapa saja yang dapat bergabung menjadi anggota dan kader IPP?',
    jawab:
      'Seluruh pelajar muslim tingkat SMP/MTs, SMA/MA/SMK, santri pesantren, hingga mahasiswa awal yang berdomisili di Jawa Barat dan memiliki tekad untuk membina aqidah, memperdalam keilmuan, dan mengasah jiwa kepemimpinan Islam.',
  },
  {
    id: 3,
    kategori: 'Pendaftaran',
    tanya: 'Bagaimana cara bergabung atau mendaftar di daerah saya?',
    jawab:
      'Anda dapat menghubungi Pimpinan Daerah (PD) di kota/kabupaten Anda melalui laman Direktori PD, atau mendaftar langsung pada kegiatan Masa Ta\'aruf Pelajar (Masta) dan agenda kaderisasi resmi melalui menu Pendaftaran Kegiatan di website ini.',
  },
  {
    id: 4,
    kategori: 'Kegiatan & Program',
    tanya: 'Apa saja agenda dan kegiatan rutin yang diadakan oleh PW IPP Jawa Barat?',
    jawab:
      'Kegiatan meliputi pelatihan kepemimpinan (LDK), bimbingan literasi & riset, safari dakwah pelajar, kajian tsaqafah Islamiyah, workshop teknologi & jurnalistik, festival seni/olahraga, hingga agenda pengabdian masyarakat.',
  },
  {
    id: 5,
    kategori: 'Ideologi',
    tanya: 'Apa makna dari semboyan Ar-Rasikhuna Fil \'Ilmi dan Karakteristik Ibadurrahman?',
    jawab:
      'Ar-Rasikhuna Fil \'Ilmi (QS. Ali-Imran: 7) berarti orang-orang yang mendalam ilmunya dan kokoh pendiriannya. Karakteristik Ibadurrahman (QS. Al-Furqan: 63-77) mencerminkan hamba Allah yang rendah hati, berakhlak mulia, tekun beribadah, dan bijak dalam bertindak.',
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold text-brand-red uppercase tracking-wider bg-red-50 dark:bg-red-900/30 px-3 py-1 rounded-full">
            Tanya Jawab Seputar IPP
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark dark:text-white mt-3">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
            Temukan jawaban lengkap seputar keorganisasian, cara bergabung, dan program pembinaan pelajar di PW IPP Jawa Barat.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/80 dark:border-gray-700/80 overflow-hidden shadow-sm transition-all duration-300 hover:border-brand-red/40 dark:hover:border-brand-red/40"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                    <span className="font-bold text-sm sm:text-base text-brand-dark dark:text-white leading-snug">
                      {item.tanya}
                    </span>
                  </div>
                  <span
                    className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-brand-red text-white rotate-180'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700/60 mt-1">
                    <p>{item.jawab}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bantuan Tambahan */}
        <div className="mt-10 text-center bg-red-50/50 dark:bg-gray-800/60 p-6 rounded-2xl border border-red-100 dark:border-gray-700">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3">
            Punya pertanyaan lain yang belum terjawab di sini?
          </p>
          <a
            href="https://wa.me/6285923248689"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-red text-white text-xs font-bold rounded-xl shadow-red-glow hover:opacity-95 transition"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.754z" />
            </svg>
            <span>Tanyakan Langsung via WhatsApp Admin</span>
          </a>
        </div>
      </div>
    </section>
  );
}
