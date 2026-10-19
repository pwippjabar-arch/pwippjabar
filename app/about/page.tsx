import type { Metadata } from 'next';
import Image from 'next/image';
import { pageSeoMap, DEFAULT_IMAGE, SITE_URL } from '@/lib/seo';

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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">Tentang PW IPP Jawa Barat</h1>
            <p className="mt-4 text-gray-600">
              Mengenal visi, misi, tujuan, semboyan, filosofi, dan identitas pergerakan Ikatan Pelajar Persis Wilayah Jawa Barat.
            </p>
          </div>

          {/* VISI, MISI, TUJUAN & SEMBOYAN */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-card-soft border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-red mb-4">Visi</h3>
              <p className="text-gray-600 leading-relaxed">Terwujudnya generasi Ar-Rasikhuna Fil ‘Ilmi</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-card-soft border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-red mb-4">Misi</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
                <li>Membentuk kader Persis yang militan.</li>
                <li>Melahirkan kader-kader Muhammad Natsir; pemimpin umat</li>
                <li>Melahirkan kader-kader A. Hassan; ulama umat</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-card-soft border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-red mb-4">Tujuan</h3>
              <p className="text-gray-600 leading-relaxed">
                Menghimpun, membina dan menggerakan potensi pelajar persis demi terwujudnya kader yang rasikh fil ‘ilmi guna menjalankan syariat islam dalam segala aspek kehidupan yang sesuai dengan karakteristik Ibadurrahman.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-card-soft border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-red mb-4">Semboyan</h3>
              <p className="text-gray-600 leading-relaxed">
                Semboyan IPP adalah <strong>Arrasikhuna fil ‘ilmi</strong> (QS. Ali-Imran: 7) yang mempunyai arti orang yang dalam ilmunya.
              </p>
            </div>
          </div>
        </div>

        {/* FILOSOFI LOGO */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-card-soft border border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold text-brand-red uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full">
              Identitas Visual
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mt-2">Filosofi Logo IPP</h2>
            <p className="text-gray-500 text-sm mt-1">Makna mendalam di balik lambang Ikatan Pelajar Persis.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <Image
                src="https://lh3.googleusercontent.com/d/1DlkHUcjgGAUNNZoqlsV5eYBcvNLGepRJ"
                alt="Lambang IPP"
                width={128}
                height={128}
                className="w-32 h-32 object-contain mb-4"
              />
              <span className="font-bold text-brand-dark text-sm">Lambang IPP</span>
            </div>

            <div className="md:col-span-2 space-y-4 text-gray-600 text-sm">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-brand-red mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-brand-dark block text-base">
                    Jalur-jalur sinar yang berbentuk bintang bersudut 12 berwarna putih:
                  </strong>
                  Bermakna warna dasar seorang pelajar yang masih jernih dari pemikiran-pemikiran yang menyimpang.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-brand-red mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-brand-dark block text-base">Tengah lingkaran berwarna merah:</strong>
                  Bermakna kesemangatan dan kemewahan pelajar dalam berpikir cerdas dan membangun sebuah pergerakan.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-brand-red mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-brand-dark block text-base">Warna dasar kuning dan warna dasar dalam merah:</strong>
                  Merupakan perpaduan antara merah sebagai identitas pelajar yang berpikir cerdas dengan kuning sebagai warna yang menunjukan keceriaan, semangat dan optimisme agar tercipta pemikiran pelajar yang sesuai dengan hakikat seorang pelajar.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-brand-red mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-brand-dark block text-base">
                    Di lingkaran tengahnya bertuliskan “Persatuan Islam” dengan huruf Arab:
                  </strong>
                  Menandakan bahwa kami bergerak menginduk pada jam'iyyah Persatuan Islam.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MARS IPP */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-card-soft border border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold text-brand-red uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full">
              Lagu Perjuangan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mt-2">Mars Ikatan Pelajar Persis</h2>
            <p className="text-gray-500 text-sm mt-1">Pembangkit semangat pergerakan dan perjuangan kader IPP.</p>
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
                ></iframe>
              </div>
              <p className="text-xs text-gray-400 text-center">Video resmi Mars Ikatan Pelajar Persis dari YouTube</p>
            </div>

            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-lg text-brand-dark mb-4 border-b border-gray-200 pb-2 flex items-center space-x-2">
                <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                <span>Lirik Mars IPP</span>
              </h3>

              <div className="space-y-4 text-gray-700 text-sm leading-relaxed font-medium">
                <p>
                  IPP Ikatan Pelajar Persis<br />
                  Arrasikhuna Fil ‘Ilmi<br />
                  Bentuk Kader PERSIS yang Militan<br />
                  Laksanakan Intelektualitas<br />
                  Guna Lahirkan Kader Ulama Umat
                </p>
                <p>
                  Persatukan Para Pelajar<br />
                  Kembangkan Potensi untuk PERSIS<br />
                  Laksanakan Islam Secara Kaffah
                </p>
                <p className="text-brand-red font-bold">Reff:</p>
                <p>
                  Kamilah Pemimpin Umat<br />
                  Membangun Peradaban Gemilang<br />
                  Ikatan Pelajar Persis<br />
                  Kritis Ilmiah Responsif
                </p>
                <p>
                  Kamilah Ulama Umat<br />
                  Bangun Peradaban Gemilang<br />
                  Ikatan Pelajar Persis<br />
                  Kritis Ilmiah Responsif
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
