import type { Metadata } from 'next';
import { getGaleriData, GaleriItem } from '@/lib/api';
import GaleriClient from '@/components/GaleriClient';
import PageHeader from '@/components/PageHeader';
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
  let galeriList: GaleriItem[] = [];

  try {
    galeriList = await getGaleriData();
  } catch (err: any) {
    console.error('Gagal memuat galeri:', err);
  }

  return (
    <>
      <PageHeader
        badge="Dokumentasi"
        title="Galeri Kegiatan"
        description="Dokumentasi foto dan momen perjuangan aktivitas kader PW IPP Jawa Barat."
      />
      <GaleriClient initialList={galeriList} />
    </>
  );
}

