'use client';

import { useState, useEffect } from 'react';
import { GaleriItem } from '@/lib/api';

interface GaleriClientProps {
  initialList: GaleriItem[];
}

export default function GaleriClient({ initialList }: GaleriClientProps) {
  const [selectedItem, setSelectedItem] = useState<GaleriItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark dark:text-white">
            Galeri Kegiatan
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Dokumentasi momen perjuangan dan aktivitas kader PW IPP Jawa Barat. Klik foto untuk memperbesar.
          </p>
        </div>

        {initialList.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            Belum ada foto galeri yang diunggah.
          </div>
        ) : (
          <div className="columns-2 lg:columns-4 gap-3 sm:gap-6 space-y-3 sm:space-y-6">
            {initialList.map((item, idx) => (
              <div
                key={item.id || idx}
                onClick={() => setSelectedItem(item)}
                className="relative group overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition duration-300 border border-gray-100 dark:border-gray-700 break-inside-avoid mb-6 cursor-pointer"
              >
                <img
                  src={item.foto || 'https://via.placeholder.com/600x600?text=No+Image'}
                  alt={item.judul || 'Kegiatan PW IPP'}
                  className="w-full h-auto block group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-5 rounded-3xl">
                  <div className="w-full flex items-center justify-between">
                    <p className="text-white text-xs font-semibold leading-snug text-left line-clamp-2">
                      {item.judul || 'Kegiatan PW IPP'}
                    </p>
                    <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-md ml-2 flex-shrink-0">
                      🔍 Perbesar
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal Preview */}
      {selectedItem && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedItem(null);
          }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-fade-in"
        >
          <button
            type="button"
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
            aria-label="Tutup Pratinjau Foto"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="max-w-4xl max-h-[88vh] overflow-hidden rounded-2xl shadow-2xl relative flex flex-col items-center">
            <img
              src={selectedItem.foto}
              alt={selectedItem.judul}
              className="max-h-[78vh] w-auto max-w-full object-contain rounded-t-2xl"
            />
            <div className="w-full p-4 bg-gray-900/90 text-white text-center border-t border-gray-800">
              <p className="font-semibold text-sm sm:text-base">{selectedItem.judul || 'Kegiatan PW IPP'}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
