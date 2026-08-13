/**
 * Koleksi ornamen dekoratif khas Sunda untuk PW IPP Jawa Barat.
 * Tiga varian:
 *  - SigerOrnament  : Mahkota Sunda di banner/header halaman
 *  - BilikOrnament  : Anyaman bambu sebagai tekstur latar
 *  - AksaraSundaOrnament : Aksara Sunda di latar card
 */

// ─── 1. Ornamen Siger (Mahkota Sunda) ───────────────────────────────────────
export function SigerOrnament({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none select-none ${className}`}
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Mahkota Siger: dasar setengah elips + gigi mahkota */}
      {/* Alas mahkota */}
      <rect x="20" y="160" width="280" height="18" rx="6" fill="currentColor" />
      {/* Badan mahkota (trapesium) */}
      <path d="M40 160 L60 100 L260 100 L280 160 Z" fill="currentColor" />
      {/* Gigi mahkota tengah (paling tinggi) */}
      <path d="M145 100 L160 30 L175 100 Z" fill="currentColor" />
      {/* Gigi kiri-tengah */}
      <path d="M110 100 L122 55 L136 100 Z" fill="currentColor" />
      {/* Gigi kanan-tengah */}
      <path d="M184 100 L198 55 L210 100 Z" fill="currentColor" />
      {/* Gigi kiri */}
      <path d="M75 100 L84 68 L98 100 Z" fill="currentColor" />
      {/* Gigi kanan */}
      <path d="M222 100 L236 68 L245 100 Z" fill="currentColor" />
      {/* Ornamen lingkaran di atas gigi tengah */}
      <circle cx="160" cy="26" r="7" fill="currentColor" />
      <circle cx="122" cy="51" r="5" fill="currentColor" />
      <circle cx="198" cy="51" r="5" fill="currentColor" />
      <circle cx="84" cy="64" r="4" fill="currentColor" />
      <circle cx="236" cy="64" r="4" fill="currentColor" />
      {/* Hiasan bulat di badan mahkota */}
      <circle cx="160" cy="130" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="120" cy="135" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="200" cy="135" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// ─── 2. Ornamen Anyaman Bilik (Bambu Sunda) ────────────────────────────────
export function BilikOrnament({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none select-none ${className}`}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="bilik-pattern"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          {/* Garis horizontal anyaman */}
          <line x1="0" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="0" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          {/* Garis vertikal anyaman */}
          <line x1="5" y1="0" x2="5" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="15" y1="0" x2="15" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#bilik-pattern)" />
    </svg>
  );
}

// ─── 3. Ornamen Aksara Sunda ───────────────────────────────────────────────
// Karakter aksara Sunda menggunakan Unicode resmi Aksara Sunda (U+1B00–U+1B7F)
export function AksaraSundaOrnament({ className = '' }: { className?: string }) {
  // Beberapa karakter aksara Sunda yang artistik
  const chars = ['ᮃ', 'ᮄ', 'ᮅ', 'ᮇ', 'ᮉ', 'ᮊ', 'ᮌ', 'ᮍ', 'ᮐ', 'ᮔ', 'ᮕ', 'ᮘ'];

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <div className="flex flex-wrap gap-3 justify-center">
        {chars.map((char, i) => (
          <span
            key={i}
            className="text-4xl sm:text-5xl font-bold leading-none"
            style={{ fontFamily: 'serif' }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
