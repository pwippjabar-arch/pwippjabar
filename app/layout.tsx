import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { pageSeoMap, DEFAULT_IMAGE, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: pageSeoMap.home.title,
  description: pageSeoMap.home.desc,
  applicationName: 'PW IPP Jawa Barat',
  keywords:
    'IPP, IPP Jabar, PW IPP Jabar, PW IPP, Pimpinan Wilayah Ikatan Pelajar Persis Jawa Barat, PW IPP Jawa Barat, Pelajar Persis Jabar, Ikatan Pelajar Persis, Berita IPP Jabar, Pendaftaran IPP Jabar',
  authors: [{ name: 'PW IPP Jawa Barat' }],
  robots: 'index, follow',
  icons: {
    icon: DEFAULT_IMAGE,
    shortcut: DEFAULT_IMAGE,
    apple: DEFAULT_IMAGE,
  },
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
  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PW IPP Jawa Barat',
    alternateName: [
      'Pimpinan Wilayah Ikatan Pelajar Persis Jawa Barat',
      'PW IPP Jawa Barat',
      'IPP Jabar',
      'Pelajar Persis Jabar',
    ],
    url: SITE_URL,
  };

  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PW IPP Jawa Barat',
    url: SITE_URL,
    logo: DEFAULT_IMAGE,
    description: pageSeoMap.home.desc,
  };

  return (
    <html lang="id">
      <head>
        <link rel="icon" href={DEFAULT_IMAGE} />
        <link rel="apple-touch-icon" href={DEFAULT_IMAGE} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
      <body className="font-sans bg-gray-50 text-brand-dark antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
