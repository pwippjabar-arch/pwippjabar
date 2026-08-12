import Link from 'next/link';
import { BeritaItem } from '@/lib/api';

interface BeritaCardProps {
  item: BeritaItem;
}

export default function BeritaCard({ item }: BeritaCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div className="relative w-full h-48 bg-gray-100">
          <img
            src={item.foto || 'https://via.placeholder.com/600x400?text=No+Image'}
            alt={item.judul}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-brand-red bg-red-50 px-2.5 py-1 rounded-md">
              {item.author || 'PW IPP'}
            </span>
            <span className="text-xs text-gray-400">{item.tanggal || ''}</span>
          </div>
          <h3 className="font-bold text-lg text-brand-dark mb-2 line-clamp-2">{item.judul}</h3>
          <p className="text-gray-600 text-sm line-clamp-3 text-justify leading-relaxed">
            {item.snippet}
          </p>
        </div>
      </div>
      <div className="p-6 pt-0">
        <Link
          href={`/berita/${item.id}`}
          className="text-sm font-semibold text-brand-red hover:underline flex items-center gap-1 inline-flex"
        >
          <span>Baca Selengkapnya</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
