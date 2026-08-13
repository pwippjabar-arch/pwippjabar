import type { Metadata } from 'next';
import { getDaerahData, DaerahItem } from '@/lib/api';
import DaerahClient from '@/components/DaerahClient';
import PageHeader from '@/components/PageHeader';
import { pageSeoMap, DEFAULT_IMAGE, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: pageSeoMap.daerah.title,
  description: pageSeoMap.daerah.desc,
  openGraph: {
    title: pageSeoMap.daerah.title,
    description: pageSeoMap.daerah.desc,
    url: `${SITE_URL}/daerah`,
    images: [{ url: DEFAULT_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    title: pageSeoMap.daerah.title,
    description: pageSeoMap.daerah.desc,
    images: [DEFAULT_IMAGE],
  },
};

export default async function DaerahPage() {
  let allList: DaerahItem[] = [];

  try {
    allList = await getDaerahData();
  } catch (err: any) {
    console.error('Gagal memuat data daerah:', err);
  }

  const pdList = allList;

  return (
    <>
      <PageHeader
        badge="Jaringan Organisasi"
        title="Direktori Pimpinan Daerah"
        description="Direktori lengkap Pimpinan Daerah (PD) Ikatan Pelajar Persis se-Jawa Barat."
      />
      <DaerahClient pdList={pdList} />
    </>
  );
}

