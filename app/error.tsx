'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Unhandled application error:', error);
  }, [error]);

  return (
    <main className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-md w-full text-center space-y-6 bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl">
        <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 text-brand-red flex items-center justify-center mx-auto">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold text-brand-dark dark:text-white">
            Terjadi Sedikit Kendala
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">
            Sistem sedang mengalami kendala memuat data dari server. Silakan coba muat ulang halaman.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto px-6 py-3 bg-brand-red hover:bg-brand-darkred text-white text-xs sm:text-sm font-bold rounded-xl shadow-red-glow transition cursor-pointer"
          >
            Muat Ulang Halaman
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs sm:text-sm font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
