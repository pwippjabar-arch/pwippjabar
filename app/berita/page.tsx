import type { Metadata } from 'next';
import { getBeritaData } from '@/lib/api';
import BeritaCard from '@/components/BeritaCard';
import { pageSeoMap, DEFAULT_IMAGE, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: pageSeoMap.berita.title,
  description: pageSeoMap.berita.desc,
  openGraph: {
    title: pageSeoMap.berita.title,
    description: pageSeoMap.berita.desc,
    url: `${SITE_URL}/berita`,
    images: [{ url: DEFAULT_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    title: pageSeoMap.berita.title,
    description: pageSeoMap.berita.desc,
    images: [DEFAULT_IMAGE],
  },
};

export default async function BeritaPage() {
  let beritaList = [];
  let errorMsg = null;

  try {
    beritaList = await getBeritaData();
  } catch (err: any) {
    errorMsg = err.message || 'Gagal memuat berita.';
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">Kabar & Informasi</h1>
          <p className="mt-4 text-gray-600">Berita terbaru seputar agenda dan aktivitas PW IPP Jawa Barat.</p>
        </div>

        {errorMsg ? (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center max-w-md mx-auto my-8">
            <h4 className="font-bold text-red-800 mb-1">Gagal Memuat Berita</h4>
            <p className="text-xs text-red-600">{errorMsg}</p>
          </div>
        ) : beritaList.length === 0 ? (
          <div className="text-center py-12 text-gray-500">Belum ada berita yang diterbitkan.</div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {beritaList.map((item) => (
              <BeritaCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
