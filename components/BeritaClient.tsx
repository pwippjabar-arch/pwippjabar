'use client';

import { useState } from 'react';
import { BeritaItem } from '@/lib/api';
import BeritaCard from '@/components/BeritaCard';

interface BeritaClientProps {
  initialList: BeritaItem[];
}

export default function BeritaClient({ initialList }: BeritaClientProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredList = initialList.filter((item) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const judul = (item.judul || '').toLowerCase();
    const snippet = (item.snippet || '').toLowerCase();
    const author = (item.author || '').toLowerCase();
    return judul.includes(query) || snippet.includes(query) || author.includes(query);
  });

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark dark:text-white">
            Kabar & Informasi
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Berita terbaru seputar agenda dan aktivitas PW IPP Jawa Barat.
          </p>
        </div>

        {/* Search Bar Input */}
        <div className="max-w-md mx-auto mb-12 relative">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari judul berita atau kata kunci..."
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm focus:outline-none focus:border-brand-red dark:focus:border-brand-red text-sm text-brand-dark dark:text-white transition"
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute left-4 top-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-3.5 text-xs text-gray-400 hover:text-brand-red"
              >
                ✕ Hapus
              </button>
            )}
          </div>
        </div>

        {filteredList.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            {searchQuery ? (
              <p>Tidak ditemukan berita yang cocok dengan kata kunci &quot;{searchQuery}&quot;.</p>
            ) : (
              <p>Belum ada berita yang diterbitkan.</p>
            )}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {filteredList.map((item) => (
              <BeritaCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
