'use client';

import { DaerahItem } from '@/lib/api';

interface DaerahClientProps {
  pdList: DaerahItem[];
}

function DaerahCard({ item }: { item: DaerahItem }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition p-6 flex flex-col gap-3">
      {/* Badge Tipe */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-bold text-base text-brand-dark dark:text-white leading-snug flex-1">
          {item.nama}
        </h3>
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${
          item.tipe === 'BKC'
            ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
            : 'bg-red-50 dark:bg-red-900/30 text-brand-red'
        }`}>
          {item.tipe}
        </span>
      </div>

      {/* Wilayah */}
      {item.wilayah && (
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{item.wilayah}</span>
        </div>
      )}

      {/* Ketua */}
      {item.ketua && (
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>{item.ketua}</span>
        </div>
      )}

      {/* Tautan */}
      <div className="flex items-center gap-2 mt-auto pt-2 border-t border-gray-50 dark:border-gray-700">
        {item.instagram && (
          <a
            href={item.instagram.startsWith('http') ? item.instagram : `https://instagram.com/${item.instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-pink-600 hover:text-pink-700 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/20 px-3 py-1.5 rounded-lg transition"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Instagram
          </a>
        )}
        {item.kontak && (
          <a
            href={`https://wa.me/${item.kontak.replace(/\D/g, '').replace(/^0/, '62')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-green-700 hover:text-green-800 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-lg transition"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.754z"/>
            </svg>
            WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}

export default function DaerahClient({ pdList }: DaerahClientProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark dark:text-white">
            Pimpinan Daerah
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Direktori lengkap Pimpinan Daerah (PD) Ikatan Pelajar Persis se-Jawa Barat.
          </p>
        </div>

        {/* Cards Grid */}
        {pdList.length === 0 ? (
          <div className="text-center py-16 text-gray-500 dark:text-gray-400">
            <p className="text-sm">Belum ada data Pimpinan Daerah yang tersedia.</p>
            <p className="text-xs mt-2 text-gray-400">Silakan isi data di sheet &quot;Daerah&quot; pada Spreadsheet.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {pdList.map((item) => (
              <DaerahCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
