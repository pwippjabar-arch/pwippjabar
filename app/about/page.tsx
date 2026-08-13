import type { Metadata } from 'next';
import Image from 'next/image';
import { pageSeoMap, DEFAULT_IMAGE, SITE_URL } from '@/lib/seo';
import PageHeader from '@/components/PageHeader';
import { AksaraSundaOrnament } from '@/components/SundaOrnaments';

export const metadata: Metadata = {
  title: pageSeoMap.about.title,
  description: pageSeoMap.about.desc,
  openGraph: {
    title: pageSeoMap.about.title,
    description: pageSeoMap.about.desc,
    url: `${SITE_URL}/about`,
    images: [{ url: DEFAULT_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    title: pageSeoMap.about.title,
    description: pageSeoMap.about.desc,
    images: [DEFAULT_IMAGE],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="Profil Organisasi"
        title="Tentang PW IPP Jawa Barat"
        description="Mengenal visi, misi, tujuan, semboyan, filosofi, dan identitas pergerakan Ikatan Pelajar Persis Wilayah Jawa Barat."
      />

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* VISI */}
          <div className="relative overflow-hidden bg-gradient-to-br from-brand-red to-brand-darkred rounded-3xl p-8 sm:p-12 text-white shadow-xl">
            {/* Aksara Sunda dekoratif samar di latar */}
            <AksaraSundaOrnament className="absolute right-4 top-4 opacity-[0.07] text-white" />
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-red-200 mb-3 block">Visi</span>
              <blockquote className="text-2xl sm:text-4xl font-extrabold leading-snug italic">
                &ldquo;Terwujudnya generasi Ar-Rasikhuna Fil &lsquo;Ilmi&rdquo;
              </blockquote>
              <p className="mt-4 text-red-100 text-sm">(QS. Ali-Imran: 7) — orang yang mendalam ilmunya.</p>
            </div>
          </div>

          {/* MISI, TUJUAN, SEMBOYAN */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Misi */}
            <div className="relative overflow-hidden bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <AksaraSundaOrnament className="absolute -right-2 -bottom-2 opacity-[0.05] text-brand-red text-3xl" />
              <div className="w-12 h-12 bg-red-50 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-4">Misi</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                <li className="flex gap-2"><span className="text-brand-red font-bold mt-0.5">›</span> Membentuk kader Persis yang militan.</li>
                <li className="flex gap-2"><span className="text-brand-red font-bold mt-0.5">›</span> Melahirkan kader-kader Muhammad Natsir; pemimpin umat.</li>
                <li className="flex gap-2"><span className="text-brand-red font-bold mt-0.5">›</span> Melahirkan kader-kader A. Hassan; ulama umat.</li>
              </ul>
            </div>

            {/* Tujuan */}
            <div className="relative overflow-hidden bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <AksaraSundaOrnament className="absolute -right-2 -bottom-2 opacity-[0.05] text-brand-red text-3xl" />
              <div className="w-12 h-12 bg-red-50 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-4">Tujuan</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Menghimpun, membina dan menggerakan potensi pelajar persis demi terwujudnya kader yang rasikh fil &lsquo;ilmi guna menjalankan syariat Islam sesuai karakteristik Ibadurrahman.
              </p>
            </div>

            {/* Semboyan */}
            <div className="relative overflow-hidden bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <AksaraSundaOrnament className="absolute -right-2 -bottom-2 opacity-[0.05] text-brand-red text-3xl" />
              <div className="w-12 h-12 bg-red-50 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-4">Semboyan</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                <strong className="text-brand-dark dark:text-white">Arrasikhuna fil &lsquo;ilmi</strong> (QS. Ali-Imran: 7) — orang yang mendalam ilmunya. Semboyan ini menjadi jiwa pergerakan setiap kader IPP.
              </p>
            </div>
          </div>

          {/* FILOSOFI LOGO */}
          <div className="bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold text-brand-red uppercase tracking-wider bg-red-50 dark:bg-red-900/30 px-3 py-1 rounded-full">
                Identitas Visual
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark dark:text-white mt-3">Filosofi Logo IPP</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Makna mendalam di balik lambang Ikatan Pelajar Persis.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-red-50 to-white dark:from-red-900/20 dark:to-gray-800 rounded-2xl border border-red-100 dark:border-red-900/30">
                <Image
                  src="https://lh3.googleusercontent.com/d/1DlkHUcjgGAUNNZoqlsV5eYBcvNLGepRJ"
                  alt="Lambang IPP"
                  width={128}
                  height={128}
                  className="w-32 h-32 object-contain mb-4"
                />
                <span className="font-bold text-brand-dark dark:text-white text-sm">Lambang IPP</span>
              </div>

              <div className="md:col-span-2 space-y-4 text-gray-600 dark:text-gray-300 text-sm">
                {[
                  { title: 'Jalur-jalur sinar bintang bersudut 12 berwarna putih:', desc: 'Bermakna warna dasar seorang pelajar yang masih jernih dari pemikiran-pemikiran yang menyimpang.' },
                  { title: 'Tengah lingkaran berwarna merah:', desc: 'Bermakna kesemangatan dan kemewahan pelajar dalam berpikir cerdas dan membangun sebuah pergerakan.' },
                  { title: 'Warna dasar kuning dan merah:', desc: 'Perpaduan antara merah (berpikir cerdas) dengan kuning (keceriaan, semangat, dan optimisme).' },
                  { title: 'Tulisan "Persatuan Islam" dengan huruf Arab:', desc: 'Menandakan bahwa kami bergerak menginduk pada jam\'iyyah Persatuan Islam.' },
                ].map((pt, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                    <div className="w-7 h-7 rounded-lg bg-brand-red flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <strong className="text-brand-dark dark:text-white block mb-0.5">{pt.title}</strong>
                      {pt.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MARS IPP */}
          <div className="bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold text-brand-red uppercase tracking-wider bg-red-50 dark:bg-red-900/30 px-3 py-1 rounded-full">
                Lagu Perjuangan
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark dark:text-white mt-3">Mars Ikatan Pelajar Persis</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Pembangkit semangat pergerakan dan perjuangan kader IPP.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-3">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-md bg-black aspect-video">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/Jhpgej9IIjw"
                    title="Mars Ikatan Pelajar Persis"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <p className="text-xs text-gray-400 text-center">Video resmi Mars Ikatan Pelajar Persis dari YouTube</p>
              </div>

              <div className="bg-gradient-to-b from-red-50 to-white dark:from-red-900/20 dark:to-gray-800 p-6 sm:p-8 rounded-2xl border border-red-100 dark:border-red-900/30">
                <h3 className="font-bold text-lg text-brand-dark dark:text-white mb-4 flex items-center gap-2 pb-3 border-b border-red-100 dark:border-red-900/30">
                  <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                  Lirik Mars IPP
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-medium">
                  <p>IPP Ikatan Pelajar Persis<br />Arrasikhuna Fil &lsquo;Ilmi<br />Bentuk Kader PERSIS yang Militan<br />Laksanakan Intelektualitas<br />Guna Lahirkan Kader Ulama Umat</p>
                  <p>Persatukan Para Pelajar<br />Kembangkan Potensi untuk PERSIS<br />Laksanakan Islam Secara Kaffah</p>
                  <p className="text-brand-red font-bold">Reff:</p>
                  <p>Kamilah Pemimpin Umat<br />Membangun Peradaban Gemilang<br />Ikatan Pelajar Persis<br />Kritis Ilmiah Responsif</p>
                  <p>Kamilah Ulama Umat<br />Bangun Peradaban Gemilang<br />Ikatan Pelajar Persis<br />Kritis Ilmiah Responsif</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
