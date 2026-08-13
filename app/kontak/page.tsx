import type { Metadata } from 'next';
import KontakClient from '@/components/KontakClient';
import { pageSeoMap, DEFAULT_IMAGE, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: pageSeoMap.kontak.title,
  description: pageSeoMap.kontak.desc,
  openGraph: {
    title: pageSeoMap.kontak.title,
    description: pageSeoMap.kontak.desc,
    url: `${SITE_URL}/kontak`,
    images: [{ url: DEFAULT_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    title: pageSeoMap.kontak.title,
    description: pageSeoMap.kontak.desc,
    images: [DEFAULT_IMAGE],
  },
};

export default function KontakPage() {
  return <KontakClient />;
}
