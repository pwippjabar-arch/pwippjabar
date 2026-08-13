import type { Metadata } from 'next';
import { getBeritaData, BeritaItem } from '@/lib/api';
import BeritaClient from '@/components/BeritaClient';
import PageHeader from '@/components/PageHeader';
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
  let beritaList: BeritaItem[] = [];

  try {
    beritaList = await getBeritaData();
  } catch (err: any) {
    console.error('Gagal memuat berita:', err);
  }

  return (
    <>
      <PageHeader
        badge="Informasi Terkini"
        title="Kabar & Berita"
        description="Berita terbaru seputar agenda pergerakan dan aktivitas PW IPP Jawa Barat."
      />
      <BeritaClient initialList={beritaList} />
    </>
  );
}

