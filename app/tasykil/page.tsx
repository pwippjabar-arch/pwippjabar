import type { Metadata } from 'next';
import TasykilClient from '@/components/TasykilClient';
import { pageSeoMap, DEFAULT_IMAGE, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: pageSeoMap.tasykil.title,
  description: pageSeoMap.tasykil.desc,
  openGraph: {
    title: pageSeoMap.tasykil.title,
    description: pageSeoMap.tasykil.desc,
    url: `${SITE_URL}/tasykil`,
    images: [{ url: DEFAULT_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    title: pageSeoMap.tasykil.title,
    description: pageSeoMap.tasykil.desc,
    images: [DEFAULT_IMAGE],
  },
};

export default function TasykilPage() {
  return <TasykilClient />;
}
