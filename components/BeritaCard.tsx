import Link from 'next/link';
import { BeritaItem } from '@/lib/api';

interface BeritaCardProps {
  item: BeritaItem;
}

export default function BeritaCard({ item }: BeritaCardProps) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
      {/* Gambar dengan zoom & overlay saat hover */}
      <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
        <img
          src={item.foto || 'https://via.placeholder.com/600x400?text=No+Image'}
          alt={item.judul}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay merah tipis muncul saat hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-red/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-brand-red bg-red-50 dark:bg-red-900/30 px-2.5 py-1 rounded-md">
              {item.author || 'PW IPP'}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500">{item.tanggal || ''}</span>
          </div>
          <h3 className="font-bold text-lg text-brand-dark dark:text-white mb-2 line-clamp-2 group-hover:text-brand-red transition-colors duration-200">
            {item.judul}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 text-justify leading-relaxed">
            {item.snippet}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link
          href={`/berita/${item.id}`}
          className="text-sm font-semibold text-brand-red hover:underline flex items-center gap-1 inline-flex group-hover:gap-2 transition-all duration-200"
        >
          <span>Baca Selengkapnya</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
