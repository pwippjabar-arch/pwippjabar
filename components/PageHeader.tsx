import { SigerOrnament } from './SundaOrnaments';

interface PageHeaderProps {
  badge?: string;
  title: string;
  description?: string;
}

/**
 * Banner header premium untuk setiap halaman.
 * Menampilkan gradien merah gelap, judul halaman, dan ornamen Siger Sunda.
 */
export default function PageHeader({ badge, title, description }: PageHeaderProps) {
  return (
    <div className="relative bg-gradient-to-br from-brand-dark via-[#1a0a0e] to-brand-darkred overflow-hidden py-14 sm:py-20">
      {/* Ornamen Siger kanan atas */}
      <SigerOrnament className="absolute -right-8 -top-4 w-64 sm:w-96 text-white opacity-[0.06]" />

      {/* Ornamen Siger kiri bawah (terbalik) */}
      <SigerOrnament className="absolute -left-8 -bottom-6 w-48 sm:w-72 text-white opacity-[0.04] rotate-180" />

      {/* Dot grid dekoratif */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Konten */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <span className="inline-block mb-3 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-red-200 bg-white/10 rounded-full border border-white/20">
            {badge}
          </span>
        )}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-sm sm:text-base text-red-100/80 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
