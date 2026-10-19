import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBeritaById, getBeritaData, BeritaItem } from '@/lib/api';
import BeritaCard from '@/components/BeritaCard';
import ShareButton from './ShareButton';
import { DEFAULT_IMAGE, SITE_URL } from '@/lib/seo';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const item = await getBeritaById(id);

  if (!item) {
    return {
      title: 'Berita Tidak Ditemukan | PW IPP Jawa Barat',
      description: 'Berita yang Anda cari tidak ditemukan.',
    };
  }

  const title = `${item.judul} | PW IPP Jawa Barat`;
  const description = item.snippet || item.fullContent?.substring(0, 160) || '';
  const image = item.foto || DEFAULT_IMAGE;
  const url = `${SITE_URL}/berita/${id}`;

  return {
    title,
    description,
    openGraph: {
      type: 'article',
      siteName: 'PW IPP Jawa Barat',
      url,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: item.judul,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const list = await getBeritaData();
    return list.map((b) => ({ id: String(b.id) }));
  } catch {
    return [];
  }
}

export default async function BeritaDetailPage({ params }: Props) {
  const { id } = await params;
  const item = await getBeritaById(id);

  if (!item) {
    notFound();
  }

  const shareUrl = `${SITE_URL}/berita/${item.id}`;

  let relatedNews: BeritaItem[] = [];
  try {
    const allNews = await getBeritaData();
    relatedNews = allNews.filter((b) => String(b.id) !== String(item.id)).slice(0, 3);
  } catch {
    relatedNews = [];
  }

  return (
    <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Tombol Kembali ke Daftar Berita */}
      <div className="mb-6">
        <Link
          href="/berita"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:underline bg-red-50 dark:bg-red-900/30 px-4 py-2 rounded-xl transition"
        >
          <span>&larr;</span>
          <span>Kembali ke Kabar & Berita</span>
        </Link>
      </div>

      <article className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100 dark:border-gray-700 relative">
        {/* Gambar Utama Artikel */}
        <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden mb-6 bg-gray-100 dark:bg-gray-700">
          <img
            src={item.foto || 'https://via.placeholder.com/800x500?text=No+Image'}
            alt={item.judul}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Metadata Penulis, Tanggal, & Tombol Bagikan */}
        <div className="flex items-center justify-between gap-3 mb-4 flex-wrap border-b border-gray-100 dark:border-gray-700 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-brand-red bg-red-50 dark:bg-red-900/30 px-3 py-1 rounded-md">
              {item.author || 'PW IPP'}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-400">{item.tanggal || ''}</span>
          </div>
          <ShareButton shareUrl={shareUrl} title={item.judul} />
        </div>

        {/* Judul Artikel */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-brand-dark dark:text-white mb-6 leading-tight">
          {item.judul}
        </h1>

        {/* Isi Berita (Formatted HTML) */}
        <div
          className="text-gray-700 dark:text-gray-200 text-sm sm:text-base space-y-4 leading-relaxed border-t border-gray-50 dark:border-gray-700 pt-6"
          dangerouslySetInnerHTML={{ __html: item.fullContent }}
        />
      </article>

      {/* Rekomendasi Berita Lainnya / Baca Juga */}
      {relatedNews.length > 0 && (
        <div className="mt-14 pt-10 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-6 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red inline-block"></span>
            <span>Baca Juga Artikel Lainnya</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedNews.map((relItem) => (
              <BeritaCard key={relItem.id} item={relItem} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
