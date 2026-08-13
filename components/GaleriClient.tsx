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
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
          className="relative group overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 break-inside-avoid mb-6 cursor-pointer"
        >
          <img
            src={item.foto || 'https://via.placeholder.com/600x600?text=No+Image'}
            alt={item.judul || 'Kegiatan PW IPP'}
            className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
          />
          {/* Overlay gradient merah yang dramatis saat hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-red/80 via-brand-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-end p-5 rounded-3xl">
            {/* Ikon Perbesar */}
            <div className="mb-3 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
            <p className="text-white text-xs font-semibold leading-snug text-center line-clamp-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
              {item.judul || 'Kegiatan PW IPP'}
            </p>
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
