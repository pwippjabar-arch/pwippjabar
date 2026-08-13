'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const STATIC_PAGES = [
  { name: 'Beranda', href: '/', desc: 'Halaman utama PW IPP Jawa Barat' },
  { name: 'Tentang Kami', href: '/about', desc: 'Profil, Visi, Misi, dan Sejarah IPP' },
  { name: 'Bidang Organisasi', href: '/bidang', desc: 'Bidang Pendidikan, Kaderisasi, Kominfo, dll' },
  { name: 'Tasykil / Pengurus', href: '/tasykil', desc: 'Struktur kepengurusan PW IPP Jawa Barat' },
  { name: 'Daerah & Cabang', href: '/daerah', desc: 'Direktori PD dan BKC se-Jawa Barat' },
  { name: 'Kabar & Berita', href: '/berita', desc: 'Berita dan informasi terbaru' },
  { name: 'Galeri Kegiatan', href: '/galeri', desc: 'Dokumentasi foto kegiatan kader IPP' },
  { name: 'Pendaftaran', href: '/pendaftaran', desc: 'Daftar kegiatan dan pelatihan IPP' },
  { name: 'Hubungi Kami', href: '/kontak', desc: 'Kontak, lokasi, dan media sosial resmi IPP' },
];

export default function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = STATIC_PAGES.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.desc.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === 'Escape') {
        setOpen(false);
        setQuery('');
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [open]);

  return (
    <>
      {/* Trigger Button */}
      <button
        id="global-search-btn"
        type="button"
        onClick={() => setOpen(true)}
        title="Cari Halaman (Ctrl+K)"
        className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
        aria-label="Buka Pencarian Global"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>

      {/* Modal Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setOpen(false);
            }
          }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Search Panel */}
          <div className="relative w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden z-10">
            {/* Input */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 dark:border-gray-700">
              <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari halaman..."
                className="flex-1 text-sm text-brand-dark dark:text-white bg-transparent focus:outline-none placeholder-gray-400"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md transition cursor-pointer"
              >
                ESC
              </button>
            </div>

            {/* Results */}
            <div className="max-h-72 overflow-y-auto py-2">
              {filtered.length === 0 ? (
                <p className="text-center text-xs text-gray-400 py-8">Tidak ditemukan halaman yang sesuai.</p>
              ) : (
                filtered.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-4 px-5 py-3 hover:bg-red-50 dark:hover:bg-gray-700 transition group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-900/30 text-brand-red flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red group-hover:text-white transition">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-sm font-semibold text-brand-dark dark:text-white">{page.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{page.desc}</p>
                    </div>
                  </Link>
                ))
              )}
            </div>

            {/* Footer hint */}
            <div className="px-5 py-3 border-t border-gray-50 dark:border-gray-700 flex justify-between">
              <span className="text-xs text-gray-400">Tekan <kbd className="bg-gray-100 dark:bg-gray-700 px-1 rounded text-gray-500 dark:text-gray-300 text-xs">Ctrl K</kbd> kapan saja untuk membuka pencarian</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
