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
  cx: number;
  cy: number;
  wilayah: string;
  defaultKetua: string;
  defaultInstagram: string;
  defaultKontak: string;
}

const MAP_NODES: MapNode[] = [
  {
    id: 'kota-bandung',
    nama: 'PD IPP Kota Bandung',
    altNames: ['kota bandung', 'bandung kota'],
    cx: 395,
    cy: 215,
    wilayah: 'Bandung Raya',
    defaultKetua: 'Ketua PD IPP Kota Bandung',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'kab-bandung',
    nama: 'PD IPP Kab. Bandung',
    altNames: ['kab. bandung', 'kabupaten bandung', 'bandung'],
    cx: 390,
    cy: 250,
    wilayah: 'Bandung Raya',
    defaultKetua: 'Ketua PD IPP Kab. Bandung',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'kbb',
    nama: 'PD IPP Kab. Bandung Barat',
    altNames: ['kbb', 'bandung barat', 'kab. bandung barat'],
    cx: 350,
    cy: 195,
    wilayah: 'Bandung Raya',
    defaultKetua: 'Ketua PD IPP Kab. Bandung Barat',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'cimahi',
    nama: 'PD IPP Kota Cimahi',
    altNames: ['cimahi', 'kota cimahi'],
    cx: 375,
    cy: 205,
    wilayah: 'Bandung Raya',
    defaultKetua: 'Ketua PD IPP Kota Cimahi',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'garut',
    nama: 'PD IPP Kab. Garut',
    altNames: ['garut', 'kab. garut', 'kabupaten garut'],
    cx: 450,
    cy: 275,
    wilayah: 'Priangan Timur',
    defaultKetua: 'Ketua PD IPP Kab. Garut',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'kab-tasik',
    nama: 'PD IPP Kab. Tasikmalaya',
    altNames: ['kab. tasikmalaya', 'kabupaten tasikmalaya', 'tasikmalaya'],
    cx: 510,
    cy: 295,
    wilayah: 'Priangan Timur',
    defaultKetua: 'Ketua PD IPP Kab. Tasikmalaya',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'kota-tasik',
    nama: 'PD IPP Kota Tasikmalaya',
    altNames: ['kota tasikmalaya', 'tasik kota'],
    cx: 525,
    cy: 270,
    wilayah: 'Priangan Timur',
    defaultKetua: 'Ketua PD IPP Kota Tasikmalaya',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'ciamis',
    nama: 'PD IPP Kab. Ciamis',
    altNames: ['ciamis', 'kab. ciamis', 'kabupaten ciamis'],
    cx: 575,
    cy: 265,
    wilayah: 'Priangan Timur',
    defaultKetua: 'Ketua PD IPP Kab. Ciamis',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'sumedang',
    nama: 'PD IPP Kab. Sumedang',
    altNames: ['sumedang', 'kab. sumedang', 'kabupaten sumedang'],
    cx: 455,
    cy: 195,
    wilayah: 'Priangan Timur',
    defaultKetua: 'Ketua PD IPP Kab. Sumedang',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'majalengka',
    nama: 'PD IPP Kab. Majalengka',
    altNames: ['majalengka', 'kab. majalengka', 'kabupaten majalengka'],
    cx: 515,
    cy: 185,
    wilayah: 'Ciayumajakuning',
    defaultKetua: 'Ketua PD IPP Kab. Majalengka',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'cirebon',
    nama: 'PD IPP Kab. Cirebon',
    altNames: ['cirebon', 'kab. cirebon', 'kota cirebon'],
    cx: 565,
    cy: 150,
    wilayah: 'Ciayumajakuning',
    defaultKetua: 'Ketua PD IPP Kab. Cirebon',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
  {
    id: 'bogor',
    nama: 'PD IPP Kab. Bogor',
    altNames: ['bogor', 'kab. bogor', 'kota bogor'],
    cx: 200,
    cy: 155,
    wilayah: 'Bogor Raya',
    defaultKetua: 'Ketua PD IPP Kab. Bogor',
    defaultInstagram: 'https://instagram.com/pw.ippjabar',
    defaultKontak: '6285923248689',
  },
];

export default function PetaJabarInteraktif({ serverDaerahList }: PetaJabarInteraktifProps) {
  const [selectedId, setSelectedId] = useState<string>('kota-bandung');

  const selectedNode = MAP_NODES.find((n) => n.id === selectedId) || MAP_NODES[0];

  // Cari data dinamis dari Spreadsheet jika ada
  const dynamicMatch = serverDaerahList.find((d) => {
    const dNama = (d.nama || '').toLowerCase();
    return (
      dNama.includes(selectedNode.nama.toLowerCase()) ||
      selectedNode.altNames.some((alt) => dNama.includes(alt))
    );
  });

  const displayNama = dynamicMatch?.nama || selectedNode.nama;
  const displayKetua = dynamicMatch?.ketua || selectedNode.defaultKetua;
  const displayWilayah = dynamicMatch?.wilayah || selectedNode.wilayah;
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
      {/* ===== KOLOM KIRI: PETA INTERAKTIF SVG JAWA BARAT ===== */}
      <div className="lg:col-span-7 bg-white dark:bg-gray-800/90 rounded-3xl p-4 sm:p-6 border border-gray-200/80 dark:border-gray-700 shadow-md relative overflow-hidden">
        {/* Header Peta */}
        <div className="flex items-center justify-between mb-4 border-b border-gray-100 dark:border-gray-700 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
            <span className="text-xs font-bold text-brand-dark dark:text-white uppercase tracking-wider">
              Peta Sebaran 12 Pimpinan Daerah
            </span>
          </div>
          <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400">
            Klik titik pin untuk melihat detail
          </span>
        </div>

        {/* Container Peta SVG */}
        <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-red-50/30 via-gray-50 to-red-50/20 dark:from-gray-900/60 dark:via-gray-800 dark:to-gray-900/40 rounded-2xl p-2 border border-gray-100 dark:border-gray-700/60">
          <svg
            viewBox="0 0 760 420"
            className="w-full h-full drop-shadow-sm select-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="jabarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f87171" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#D90429" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#b91c1c" stopOpacity="0.2" />
              </linearGradient>
              <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Siluet Vektor Wilayah Jawa Barat */}
            <path
              d="M 60,110 Q 120,80 180,105 T 270,120 T 360,115 T 450,110 T 560,135 T 670,165 Q 690,195 680,240 T 640,300 T 580,330 T 490,340 T 400,320 T 300,310 T 190,290 T 110,260 T 60,200 Z"
              fill="url(#jabarGradient)"
              stroke="#D90429"
              strokeWidth="2.5"
              strokeDasharray="6 4"
              className="transition-colors duration-500"
            />

            {/* Garis-garis konektivitas jaringan antar-daerah (Network Nodes) */}
            {MAP_NODES.map((node) => (
              <line
                key={`line-${node.id}`}
                x1="395"
                y1="215"
                x2={node.cx}
                y2={node.cy}
                stroke="#D90429"
                strokeWidth={selectedId === node.id ? '2' : '0.8'}
                strokeOpacity={selectedId === node.id ? '0.7' : '0.2'}
                strokeDasharray={selectedId === node.id ? 'none' : '3 3'}
                className="transition-all duration-300"
              />
            ))}

            {/* Titik Pusat: PW IPP Jawa Barat (Bandung) */}
            <circle cx="395" cy="215" r="14" fill="#D90429" fillOpacity="0.2" className="animate-ping" />
            <circle cx="395" cy="215" r="8" fill="#D90429" stroke="#ffffff" strokeWidth="2.5" />

            {/* Titik-Titik Pimpinan Daerah Interaktif */}
            {MAP_NODES.map((node) => {
              const isSelected = selectedId === node.id;
              return (
                <g
                  key={node.id}
                  onClick={() => setSelectedId(node.id)}
                  className="cursor-pointer group"
                >
                  {/* Outer Radar Glow if selected */}
                  {isSelected && (
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r="18"
                      fill="#D90429"
                      fillOpacity="0.25"
                      className="animate-ping"
                    />
                  )}

                  {/* Hover Hitbox / Circle */}
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={isSelected ? '9' : '6.5'}
                    fill={isSelected ? '#D90429' : '#ffffff'}
                    stroke="#D90429"
                    strokeWidth={isSelected ? '3' : '2'}
                    className="transition-all duration-300 group-hover:scale-125"
                  />

                  {/* Label Nama Daerah Singkat di Peta */}
                  <text
                    x={node.cx}
                    y={node.cy - 12}
                    textAnchor="middle"
                    className={`text-[10px] font-bold select-none pointer-events-none transition-all duration-300 ${
                      isSelected
                        ? 'fill-brand-red font-extrabold text-[11px]'
                        : 'fill-gray-600 dark:fill-gray-300 group-hover:fill-brand-red'
                    }`}
                  >
                    {node.nama.replace('PD IPP ', '')}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Legend Peta */}
        <div className="mt-3 flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400 px-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red inline-block" />
            <span>Pusat PW IPP (Bandung)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full border-2 border-brand-red bg-white inline-block" />
            <span>Titik Pimpinan Daerah (12 PD)</span>
          </div>
        </div>
      </div>

      {/* ===== KOLOM KANAN: KARTU PROFIL DAERAH TERPILIH ===== */}
      <div className="lg:col-span-5 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 border border-gray-200/80 dark:border-gray-700 shadow-lg relative">
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
              className="py-2.5 px-3 rounded-xl bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-100 text-xs font-bold transition flex items-center justify-center gap-1.5 border border-green-200/60 dark:border-green-800"
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
              className="py-2.5 px-3 rounded-xl bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 hover:bg-pink-100 text-xs font-bold transition flex items-center justify-center gap-1.5 border border-pink-200/60 dark:border-pink-800"
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
