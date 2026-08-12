import type { Metadata } from 'next';
import { getGaleriData } from '@/lib/api';
import { pageSeoMap, DEFAULT_IMAGE, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: pageSeoMap.galeri.title,
  description: pageSeoMap.galeri.desc,
  openGraph: {
    title: pageSeoMap.galeri.title,
    description: pageSeoMap.galeri.desc,
    url: `${SITE_URL}/galeri`,
    images: [{ url: DEFAULT_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    title: pageSeoMap.galeri.title,
    description: pageSeoMap.galeri.desc,
    images: [DEFAULT_IMAGE],
  },
};

export default async function GaleriPage() {
  let galeriList = [];
  let errorMsg = null;

  try {
    galeriList = await getGaleriData();
  } catch (err: any) {
    errorMsg = err.message || 'Gagal memuat galeri.';
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">Galeri Kegiatan</h1>
          <p className="mt-4 text-gray-600">Dokumentasi momen perjuangan dan aktivitas kader PW IPP Jawa Barat.</p>
        </div>

        {errorMsg ? (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center max-w-md mx-auto my-8">
            <h4 className="font-bold text-red-800 mb-1">Gagal Memuat Galeri</h4>
            <p className="text-xs text-red-600">{errorMsg}</p>
          </div>
        ) : galeriList.length === 0 ? (
          <div className="text-center py-12 text-gray-500">Belum ada foto galeri yang diunggah.</div>
        ) : (
          <div className="columns-2 lg:columns-4 gap-3 sm:gap-6 space-y-3 sm:space-y-6">
            {galeriList.map((item, idx) => (
              <div
                key={item.id || idx}
                className="relative group overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-md transition duration-300 border border-gray-100 break-inside-avoid mb-6"
              >
                <img
                  src={item.foto || 'https://via.placeholder.com/600x600?text=No+Image'}
                  alt={item.judul || 'Kegiatan PW IPP'}
                  className="w-full h-auto block group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-5 rounded-3xl pointer-events-none">
                  <p className="text-white text-xs font-semibold leading-snug text-left">
                    {item.judul || 'Kegiatan PW IPP'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
