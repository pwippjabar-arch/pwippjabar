'use client';

import { useState } from 'react';
import Link from 'next/link';
import { DaerahItem } from '@/lib/api';

interface PetaJabarInteraktifProps {
  serverDaerahList: DaerahItem[];
}

interface DistrictOption {
  id: string;
  nama: string;
  mapQuery: string;
  defaultKetua: string;
  defaultInstagram: string;
  defaultKontak: string;
}

const DISTRICT_OPTIONS: DistrictOption[] = [
  {
    id: 'kota-bandung',
    nama: 'PD IPP Kota Bandung',
    mapQuery: 'Kantor+PW+Persis+Jawa+Barat+Jl+Peta+Bandung',
    defaultKetua: 'Ketua PD IPP Kota Bandung',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'kab-bandung',
    nama: 'PD IPP Kab. Bandung',
    mapQuery: 'Soreang+Kabupaten+Bandung+Jawa+Barat',
    defaultKetua: 'Ketua PD IPP Kab. Bandung',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'kbb',
    nama: 'PD IPP Kab. Bandung Barat',
    mapQuery: 'Padalarang+Kabupaten+Bandung+Barat',
    defaultKetua: 'Ketua PD IPP Kab. Bandung Barat',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'cimahi',
    nama: 'PD IPP Kota Cimahi',
    mapQuery: 'Kota+Cimahi+Jawa+Barat',
    defaultKetua: 'Ketua PD IPP Kota Cimahi',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'garut',
    nama: 'PD IPP Kab. Garut',
    mapQuery: 'Kabupaten+Garut+Jawa+Barat',
    defaultKetua: 'Ketua PD IPP Kab. Garut',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'kab-tasik',
    nama: 'PD IPP Kab. Tasikmalaya',
    mapQuery: 'Singaparna+Kabupaten+Tasikmalaya',
    defaultKetua: 'Ketua PD IPP Kab. Tasikmalaya',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'kota-tasik',
    nama: 'PD IPP Kota Tasikmalaya',
    mapQuery: 'Kota+Tasikmalaya+Jawa+Barat',
    defaultKetua: 'Ketua PD IPP Kota Tasikmalaya',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'ciamis',
    nama: 'PD IPP Kab. Ciamis',
    mapQuery: 'Kabupaten+Ciamis+Jawa+Barat',
    defaultKetua: 'Ketua PD IPP Kab. Ciamis',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'sumedang',
    nama: 'PD IPP Kab. Sumedang',
    mapQuery: 'Kabupaten+Sumedang+Jawa+Barat',
    defaultKetua: 'Ketua PD IPP Kab. Sumedang',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'majalengka',
    nama: 'PD IPP Kab. Majalengka',
    mapQuery: 'Kabupaten+Majalengka+Jawa+Barat',
    defaultKetua: 'Ketua PD IPP Kab. Majalengka',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'cirebon',
    nama: 'PD IPP Kab. Cirebon',
    mapQuery: 'Sumber+Kabupaten+Cirebon+Jawa+Barat',
    defaultKetua: 'Ketua PD IPP Kab. Cirebon',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'bogor',
    nama: 'PD IPP Kab. Bogor',
    mapQuery: 'Cibinong+Kabupaten+Bogor+Jawa+Barat',
    defaultKetua: 'Ketua PD IPP Kab. Bogor',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
];

export default function PetaJabarInteraktif({ serverDaerahList }: PetaJabarInteraktifProps) {
  const [selectedId, setSelectedId] = useState<string>('kota-bandung');

  const selectedOption = DISTRICT_OPTIONS.find((d) => d.id === selectedId) || DISTRICT_OPTIONS[0];

  // Integrasi dinamis dengan data Spreadsheet jika tersedia
  const dynamicMatch = serverDaerahList.find((d) => {
    const dNama = (d.nama || '').toLowerCase();
    const optNama = selectedOption.nama.toLowerCase();
    return dNama.includes(optNama) || optNama.includes(dNama);
  });

  const displayNama = dynamicMatch?.nama || selectedOption.nama;
  const displayKetua = dynamicMatch?.ketua || selectedOption.defaultKetua;
  const rawInstagram = dynamicMatch?.instagram || selectedOption.defaultInstagram;
  const displayInstagram = rawInstagram.startsWith('http')
    ? rawInstagram
    : rawInstagram
    ? `https://instagram.com/${rawInstagram.replace('@', '')}`
    : 'https://instagram.com/pw.ippjabar';

  const rawKontak = dynamicMatch?.kontak || selectedOption.defaultKontak;
  const cleanPhone = rawKontak.replace(/\D/g, '').replace(/^0/, '62') || '6285923248689';

  const mapEmbedUrl = `https://maps.google.com/maps?q=${selectedOption.mapQuery}&t=&z=11&ie=UTF8&iwloc=&output=embed`;
  const fullMapUrl = `https://www.google.com/maps/search/?api=1&query=${selectedOption.mapQuery}`;

  return (
    <div className="grid lg:grid-cols-12 gap-8 items-start">
      {/* ===== KOLOM KIRI: PETA GOOGLE MAPS ASLI INTERAKTIF ===== */}
      <div className="lg:col-span-7 bg-white dark:bg-gray-800 rounded-3xl p-4 sm:p-6 border border-gray-200/80 dark:border-gray-700 shadow-xl">
        {/* Header Peta */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-gray-100 dark:border-gray-700 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
            <span className="text-xs font-bold text-brand-dark dark:text-white uppercase tracking-wider">
              Peta Lokasi Resmi Wilayah Jawa Barat
            </span>
          </div>
          <a
            href={fullMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold text-brand-red hover:underline inline-flex items-center gap-1"
          >
            <span>Buka di Aplikasi Google Maps</span>
            <span>&rarr;</span>
          </a>
        </div>

        {/* Frame Peta Google Maps Asli */}
        <div className="relative w-full aspect-[16/10] bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-inner">
          <iframe
            key={selectedOption.id}
            title={`Peta Lokasi ${displayNama}`}
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>

        {/* Quick Selector Pills 12 Pimpinan Daerah */}
        <div className="mt-4">
          <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 mb-2">
            Pilih Pimpinan Daerah untuk memusatkan peta:
          </p>
          <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto p-1 scrollbar-none">
            {DISTRICT_OPTIONS.map((opt) => {
              const isSelected = selectedId === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedId(opt.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-brand-red text-white shadow-sm scale-105'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isSelected ? 'bg-white' : 'bg-brand-red'
                    }`}
                  />
                  <span>{opt.nama.replace('PD IPP ', '')}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===== KOLOM KANAN: KARTU PROFIL DAERAH TERPILIH ===== */}
      <div className="lg:col-span-5 bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 border border-gray-200/80 dark:border-gray-700 shadow-xl flex flex-col justify-between">
        <div>
          {/* Status Kepengurusan */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="text-xs font-bold text-brand-red bg-red-50 dark:bg-red-900/30 px-3 py-1 rounded-full uppercase tracking-wider">
              Pimpinan Daerah (PD)
            </span>
            <span className="text-xs font-semibold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Kepengurusan Aktif
            </span>
          </div>

          {/* Nama Daerah */}
          <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark dark:text-white mb-2 leading-tight">
            {displayNama}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
            Pimpinan Daerah otonom di bawah koordinasi PW IPP Jawa Barat.
          </p>

          {/* Info Detail */}
          <div className="space-y-3.5 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 mb-6">
            {/* Ketua */}
            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <div className="w-8 h-8 rounded-lg bg-red-100/80 dark:bg-red-900/40 text-brand-red flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-semibold">
                  Pimpinan / Ketua PD
                </span>
                <span className="font-bold text-brand-dark dark:text-white">{displayKetua}</span>
              </div>
            </div>
          </div>

          {/* Tombol Kontak WhatsApp & Instagram */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <a
              href={`https://wa.me/${cleanPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/50 text-xs font-bold transition flex items-center justify-center gap-1.5 border border-green-200/60 dark:border-green-800 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.754z" />
              </svg>
              <span>Chat WA</span>
            </a>

            <a
              href={displayInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 hover:bg-pink-100 dark:hover:bg-pink-900/50 text-xs font-bold transition flex items-center justify-center gap-1.5 border border-pink-200/60 dark:border-pink-800 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* CTA Buka Direktori Lengkap */}
        <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
          <Link
            href="/daerah"
            className="w-full py-3 px-4 bg-gradient-to-r from-brand-red to-brand-darkred text-white text-xs sm:text-sm font-bold rounded-xl shadow-red-glow hover:opacity-95 transition text-center flex items-center justify-center gap-2"
          >
            <span>Buka Direktori Lengkap 12 PD</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
