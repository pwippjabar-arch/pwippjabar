import type { Metadata } from 'next';
import BidangClient from '@/components/BidangClient';
import PageHeader from '@/components/PageHeader';
import { pageSeoMap, DEFAULT_IMAGE, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: pageSeoMap.bidang.title,
  description: pageSeoMap.bidang.desc,
  openGraph: {
    title: pageSeoMap.bidang.title,
    description: pageSeoMap.bidang.desc,
    url: `${SITE_URL}/bidang`,
    images: [{ url: DEFAULT_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    title: pageSeoMap.bidang.title,
    description: pageSeoMap.bidang.desc,
    images: [DEFAULT_IMAGE],
  },
};

export default function BidangPage() {
  return (
    <>
      <PageHeader
        badge="Pilar Pergerakan"
        title="Bidang-Bidang Organisasi"
        description="Pilar-pilar pergerakan PW IPP Jawa Barat dalam menjalankan fungsi organisasi."
      />
      <BidangClient />
    </>
  );
}

