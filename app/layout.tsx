import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { pageSeoMap, DEFAULT_IMAGE, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: pageSeoMap.home.title,
  description: pageSeoMap.home.desc,
  keywords: 'IPP, IPP Jabar, PW IPP Jabar, PW IPP, Pimpinan Wilayah Ikatan Pelajar Persis Jawa Barat, PW IPP Jawa Barat, Pelajar Persis Jabar, Ikatan Pelajar Persis, Berita IPP Jabar, Pendaftaran IPP Jabar',
  authors: [{ name: 'PW IPP Jawa Barat' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    siteName: 'PW IPP Jawa Barat',
    url: SITE_URL,
    title: pageSeoMap.home.title,
    description: pageSeoMap.home.desc,
    images: [{ url: DEFAULT_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageSeoMap.home.title,
    description: pageSeoMap.home.desc,
    images: [DEFAULT_IMAGE],
  },
  other: {
    'google-site-verification': '1a08715c358e996b',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="font-sans bg-gray-50 text-brand-dark antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
