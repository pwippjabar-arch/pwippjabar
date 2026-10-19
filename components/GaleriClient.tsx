'use client';

import { useState, useEffect } from 'react';
import { GaleriItem } from '@/lib/api';

interface GaleriClientProps {
  initialList: GaleriItem[];
}

function getOptimizedPhotoUrl(url: string, size = 600, crop = false) {
  if (!url) return 'https://via.placeholder.com/600x600?text=No+Foto';
  const param = crop ? `=s${size}-c` : `=s${size}`;
  if (url.includes('lh3.googleusercontent.com/d/')) {
    const baseUrl = url.split('=')[0];
    return `${baseUrl}${param}`;
  }
  const match = url.match(/[-\w]{25,}/);
  if (url.includes('drive.google.com') && match) {
    return `https://lh3.googleusercontent.com/d/${match[0]}${param}`;
  }
  return url;
}

const PAGE_SIZE = 12;

export default function GaleriClient({ initialList }: GaleriClientProps) {
  const [selectedItem, setSelectedItem] = useState<GaleriItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const visiblePhotos = initialList.slice(0, visibleCount);
  const hasMore = visibleCount < initialList.length;

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold text-brand-red uppercase tracking-wider bg-red-50 dark:bg-red-900/30 px-3.5 py-1 rounded-full border border-red-100 dark:border-red-900/50">
            Arsip Visual & Dokumentasi
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark dark:text-white mt-3">
            Galeri Kegiatan
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            Dokumentasi momen perjuangan, pembinaan, dan aktivitas kader PW IPP Jawa Barat. Klik foto untuk memperbesar tampilan resolusi tinggi.
          </p>
        </div>

        {initialList.length === 0 ? (
          <div className="text-center py-16 text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 rounded-3xl border border-gray-100 dark:border-gray-800">
            <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="font-semibold text-base">Belum Ada Foto Galeri</p>
            <p className="text-xs text-gray-400 mt-1">Foto kegiatan akan ditampilkan setelah diunggah ke spreadsheet.</p>
          </div>
        ) : (
          <>
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
              {visiblePhotos.map((item, idx) => (
                <div
                  key={item.id || idx}
                  onClick={() => setSelectedItem(item)}
                  className="relative group overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 break-inside-avoid mb-4 sm:mb-6 cursor-pointer"
                >
                  <img
                    src={getOptimizedPhotoUrl(item.foto, 600)}
                    alt={item.judul || 'Kegiatan PW IPP'}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay gradient merah saat hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-red/90 via-brand-red/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-5 rounded-3xl">
                    {/* Ikon Perbesar */}
                    <div className="mb-2.5 w-10 h-10 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                    <p className="text-white text-xs font-semibold leading-snug text-center line-clamp-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {item.judul || 'Kegiatan PW IPP'}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tombol Muat Lebih Banyak */}
            {hasMore && (
              <div className="mt-12 sm:mt-16 text-center animate-fade-up">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                  className="px-8 py-3.5 bg-white dark:bg-gray-800 hover:bg-brand-red hover:text-white dark:hover:bg-brand-red text-brand-dark dark:text-white font-bold text-xs sm:text-sm rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3 group cursor-pointer"
                >
                  <span>Muat Lebih Banyak Foto</span>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-red-50 text-brand-red dark:bg-red-900/40 dark:text-red-300 group-hover:bg-white/20 group-hover:text-white transition">
                    +{Math.min(PAGE_SIZE, initialList.length - visibleCount)} dari {initialList.length - visibleCount} lagi
                  </span>
                  <svg
                    className="w-4 h-4 text-brand-red group-hover:text-white group-hover:translate-y-0.5 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Lightbox Modal Preview Resolusi Tinggi */}
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

          <div className="max-w-4xl max-h-[88vh] overflow-hidden rounded-3xl shadow-2xl relative flex flex-col items-center border border-white/10 bg-gray-900">
            <img
              src={getOptimizedPhotoUrl(selectedItem.foto, 1600)}
              alt={selectedItem.judul || 'Foto Kegiatan'}
              className="max-h-[76vh] w-auto max-w-full object-contain rounded-t-3xl"
            />
            <div className="w-full p-4 bg-gray-900/95 text-white text-center border-t border-gray-800">
              <p className="font-semibold text-sm sm:text-base">{selectedItem.judul || 'Kegiatan PW IPP'}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
