'use client';

import { useState } from 'react';
import Link from 'next/link';
import { DaerahItem } from '@/lib/api';

interface PetaJabarInteraktifProps {
  serverDaerahList: DaerahItem[];
}

interface MapNode {
  id: string;
  nama: string;
  altNames: string[];
  // Persentase posisi pada peta (0% - 100%)
  leftPct: number;
  topPct: number;
  defaultKetua: string;
  defaultInstagram: string;
  defaultKontak: string;
}

const MAP_NODES: MapNode[] = [
  {
    id: 'bogor',
    nama: 'PD IPP Kab. Bogor',
    altNames: ['bogor', 'kab. bogor', 'kota bogor'],
    leftPct: 24,
    topPct: 36,
    defaultKetua: 'Ketua PD IPP Kab. Bogor',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'kbb',
    nama: 'PD IPP Kab. Bandung Barat',
    altNames: ['kbb', 'bandung barat', 'kab. bandung barat'],
    leftPct: 41,
    topPct: 46,
    defaultKetua: 'Ketua PD IPP Kab. Bandung Barat',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'cimahi',
    nama: 'PD IPP Kota Cimahi',
    altNames: ['cimahi', 'kota cimahi'],
    leftPct: 45,
    topPct: 48,
    defaultKetua: 'Ketua PD IPP Kota Cimahi',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'kota-bandung',
    nama: 'PD IPP Kota Bandung',
    altNames: ['kota bandung', 'bandung kota'],
    leftPct: 48,
    topPct: 52,
    defaultKetua: 'Ketua PD IPP Kota Bandung',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'kab-bandung',
    nama: 'PD IPP Kab. Bandung',
    altNames: ['kab. bandung', 'kabupaten bandung', 'bandung'],
    leftPct: 47,
    topPct: 62,
    defaultKetua: 'Ketua PD IPP Kab. Bandung',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'sumedang',
    nama: 'PD IPP Kab. Sumedang',
    altNames: ['sumedang', 'kab. sumedang', 'kabupaten sumedang'],
    leftPct: 56,
    topPct: 46,
    defaultKetua: 'Ketua PD IPP Kab. Sumedang',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'majalengka',
    nama: 'PD IPP Kab. Majalengka',
    altNames: ['majalengka', 'kab. majalengka', 'kabupaten majalengka'],
    leftPct: 64,
    topPct: 42,
    defaultKetua: 'Ketua PD IPP Kab. Majalengka',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'cirebon',
    nama: 'PD IPP Kab. Cirebon',
    altNames: ['cirebon', 'kab. cirebon', 'kota cirebon'],
    leftPct: 73,
    topPct: 34,
    defaultKetua: 'Ketua PD IPP Kab. Cirebon',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'garut',
    nama: 'PD IPP Kab. Garut',
    altNames: ['garut', 'kab. garut', 'kabupaten garut'],
    leftPct: 55,
    topPct: 68,
    defaultKetua: 'Ketua PD IPP Kab. Garut',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'kota-tasik',
    nama: 'PD IPP Kota Tasikmalaya',
    altNames: ['kota tasikmalaya', 'tasik kota'],
    leftPct: 66,
    topPct: 64,
    defaultKetua: 'Ketua PD IPP Kota Tasikmalaya',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'kab-tasik',
    nama: 'PD IPP Kab. Tasikmalaya',
    altNames: ['kab. tasikmalaya', 'kabupaten tasikmalaya', 'tasikmalaya'],
    leftPct: 64,
    topPct: 76,
    defaultKetua: 'Ketua PD IPP Kab. Tasikmalaya',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'ciamis',
    nama: 'PD IPP Kab. Ciamis',
    altNames: ['ciamis', 'kab. ciamis', 'kabupaten ciamis'],
    leftPct: 74,
    topPct: 66,
    defaultKetua: 'Ketua PD IPP Kab. Ciamis',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
];

export default function PetaJabarInteraktif({ serverDaerahList }: PetaJabarInteraktifProps) {
  const [selectedId, setSelectedId] = useState<string>('kota-bandung');

  const selectedNode = MAP_NODES.find((n) => n.id === selectedId) || MAP_NODES[0];

  // Integrasi dinamis dengan Spreadsheet
  const dynamicMatch = serverDaerahList.find((d) => {
    const dNama = (d.nama || '').toLowerCase();
    return (
      dNama.includes(selectedNode.nama.toLowerCase()) ||
      selectedNode.altNames.some((alt) => dNama.includes(alt))
    );
  });

  const displayNama = dynamicMatch?.nama || selectedNode.nama;
  const displayKetua = dynamicMatch?.ketua || selectedNode.defaultKetua;
  const rawInstagram = dynamicMatch?.instagram || selectedNode.defaultInstagram;
  const displayInstagram = rawInstagram.startsWith('http')
    ? rawInstagram
    : rawInstagram
    ? `https://instagram.com/${rawInstagram.replace('@', '')}`
    : 'https://instagram.com/pw.ippjabar';

  const rawKontak = dynamicMatch?.kontak || selectedNode.defaultKontak;
  const cleanPhone = rawKontak.replace(/\D/g, '').replace(/^0/, '62') || '6285923248689';

  return (
    <div className="grid lg:grid-cols-12 gap-8 items-center">
      {/* ===== KOLOM KIRI: PETA ILUSTRASI JAWA BARAT PRESISI ===== */}
      <div className="lg:col-span-7 bg-white dark:bg-gray-800/95 rounded-3xl p-5 sm:p-7 border border-gray-200/80 dark:border-gray-700 shadow-xl relative overflow-hidden">
        {/* Header Peta */}
        <div className="flex items-center justify-between mb-4 border-b border-gray-100 dark:border-gray-700/80 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
            <span className="text-xs font-bold text-brand-dark dark:text-white uppercase tracking-wider">
              Peta Sebaran 12 Pimpinan Daerah
            </span>
          </div>
          <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400 hidden sm:inline">
            Pilih titik kota untuk melihat info
          </span>
        </div>

        {/* Peta Container dengan Background Topografi & Grid Koordinat */}
        <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950 rounded-2xl overflow-hidden border border-gray-800 p-2 shadow-inner select-none">
          {/* Garis-garis Grid Koordinat Peta Digital */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Efek Glow Radar Pusat */}
          <div className="absolute left-[48%] top-[52%] -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-brand-red/15 blur-2xl pointer-events-none" />

          {/* Vektor Siluet Jawa Barat Beresolusi Tinggi */}
          <svg
            viewBox="0 0 800 500"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="jabarHighPrecisionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.28" />
                <stop offset="50%" stopColor="#D90429" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#991b1b" stopOpacity="0.3" />
              </linearGradient>
              <filter id="mapShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000000" floodOpacity="0.6" />
              </filter>
            </defs>

            {/* Kontur Geografis Jawa Barat Presisi */}
            <path
              d="M 120,135 C 165,115 220,130 270,140 C 330,150 395,142 460,132 C 520,125 585,140 645,160 C 685,175 725,200 735,235 C 740,265 720,295 690,325 C 655,360 610,385 560,395 C 495,408 430,395 365,385 C 300,375 235,360 175,335 C 120,310 85,270 80,225 C 75,185 90,150 120,135 Z"
              fill="url(#jabarHighPrecisionGrad)"
              stroke="#D90429"
              strokeWidth="2.5"
              filter="url(#mapShadow)"
            />

            {/* Garis Batas Wilayah Internal Halus */}
            <path
              d="M 270,140 Q 300,240 330,370 M 460,132 Q 470,260 480,395 M 585,140 Q 590,260 600,385"
              stroke="#ef4444"
              strokeWidth="1"
              strokeDasharray="4 6"
              strokeOpacity="0.3"
            />
          </svg>

          {/* Titik Pusat: PW IPP Jawa Barat (Bandung) */}
          <div
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
            style={{ left: '48%', top: '52%' }}
          >
            <span className="w-8 h-8 rounded-full bg-brand-red/30 animate-ping absolute" />
            <span className="w-4 h-4 rounded-full bg-brand-red border-2 border-white shadow-lg relative flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            </span>
          </div>

          {/* Titik-Titik Pimpinan Daerah Interaktif */}
          {MAP_NODES.map((node) => {
            const isSelected = selectedId === node.id;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setSelectedId(node.id)}
                className="absolute z-30 -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none transition-transform duration-300"
                style={{ left: `${node.leftPct}%`, top: `${node.topPct}%` }}
                aria-label={node.nama}
              >
                {/* Ping animation if selected */}
                {isSelected && (
                  <span className="absolute -inset-2.5 rounded-full bg-brand-red/40 animate-ping" />
                )}

                {/* Main Pin Dot */}
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                    isSelected
                      ? 'bg-brand-red border-2 border-white scale-125 ring-4 ring-brand-red/30'
                      : 'bg-white/90 border-2 border-brand-red group-hover:scale-125 group-hover:bg-brand-red'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isSelected ? 'bg-white' : 'bg-brand-red group-hover:bg-white'
                    }`}
                  />
                </div>

                {/* City Tag Label */}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 top-5 px-1.5 py-0.5 rounded text-[9px] font-bold tracking-tight whitespace-nowrap pointer-events-none transition-all duration-300 shadow-sm ${
                    isSelected
                      ? 'bg-brand-red text-white scale-105 opacity-100 z-40'
                      : 'bg-gray-900/80 text-gray-300 border border-gray-700 opacity-75 group-hover:opacity-100 group-hover:bg-brand-dark group-hover:text-white'
                  }`}
                >
                  {node.nama.replace('PD IPP ', '').replace('Kab. ', '').replace('Kota ', '')}
                </span>
              </button>
            );
          })}
        </div>

        {/* Legend Peta Presisi */}
        <div className="mt-3.5 flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400 px-1">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-brand-red border border-white inline-block shadow-sm" />
            <span>Pusat PW IPP Jawa Barat</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full border-2 border-brand-red bg-white inline-block" />
            <span>Titik Pimpinan Daerah (12 PD)</span>
          </div>
        </div>
      </div>

      {/* ===== KOLOM KANAN: KARTU PROFIL DAERAH TERPILIH ===== */}
      <div className="lg:col-span-5 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 border border-gray-200/80 dark:border-gray-700 shadow-xl relative">
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
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-semibold">Pimpinan / Ketua PD</span>
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
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
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

