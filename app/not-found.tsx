import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-red-50/40 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-xl w-full text-center space-y-8 animate-fade-up">
        {/* Logo IPP */}
        <div className="flex justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 flex items-center justify-center p-3.5">
            <Image
              src="https://lh3.googleusercontent.com/d/1DlkHUcjgGAUNNZoqlsV5eYBcvNLGepRJ"
              alt="Logo PW IPP Jawa Barat"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* 404 Code & Heading */}
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-red bg-red-100/60 dark:bg-red-900/40 px-4 py-1.5 rounded-full border border-red-200 dark:border-red-800">
            Error 404 · Tidak Ditemukan
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark dark:text-white mt-4 tracking-tight">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mt-3 max-w-md mx-auto leading-relaxed">
            Afwan, halaman yang Anda tuju tidak tersedia atau telah dipindahkan ke alamat lain.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-brand-red to-brand-darkred text-white text-xs sm:text-sm font-bold rounded-xl shadow-red-glow hover:opacity-95 transition transform hover:-translate-y-0.5 text-center"
          >
            &larr; Kembali ke Beranda
          </Link>
          <Link
            href="/berita"
            className="w-full sm:w-auto px-7 py-3.5 bg-white dark:bg-gray-800 text-brand-dark dark:text-white text-xs sm:text-sm font-bold rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition transform hover:-translate-y-0.5 text-center"
          >
            Lihat Kabar & Berita
          </Link>
          <Link
            href="/kontak"
            className="w-full sm:w-auto px-7 py-3.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs sm:text-sm font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition text-center"
          >
            Hubungi Admin
          </Link>
        </div>
      </div>
    </main>
  );
}
