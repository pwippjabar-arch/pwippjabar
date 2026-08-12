'use client';

import { useEffect, useState } from 'react';
import { getTasykilData, TasykilItem } from '@/lib/api';

export default function TasykilClient() {
  const [tasykilList, setTasykilList] = useState<TasykilItem[]>([]);
  const [filteredList, setFilteredList] = useState<TasykilItem[]>([]);
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTasykilData()
      .then((data) => {
        setTasykilList(data);
        setFilteredList(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Gagal memuat data tasykil.');
        setLoading(false);
      });
  }, []);

  const handleFilter = (filterKey: string) => {
    setActiveFilter(filterKey);
    if (filterKey === 'Semua') {
      setFilteredList(tasykilList);
    } else {
      const filtered = tasykilList.filter((item) => {
        const itemBidang = (item.bidang || '').toLowerCase();
        const keyLower = filterKey.toLowerCase();
        return itemBidang.indexOf(keyLower) !== -1;
      });
      setFilteredList(filtered);
    }
  };

  const filters = [
    { label: 'Semua', key: 'Semua' },
    { label: 'Exofficio', key: 'Exofficio' },
    { label: 'Pendidikan & Dakwah', key: 'Pendidikan' },
    { label: 'Organisasi & Kelembagaan', key: 'Organisasi' },
    { label: 'Kaderisasi', key: 'Kaderisasi' },
    { label: 'PSDM', key: 'PSDM' },
    { label: 'Ekonomi & Kewirausahaan', key: 'Ekonomi' },
    { label: 'Kominfo', key: 'Komunikasi' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">Struktur Tasykil</h1>
          <p className="mt-4 text-gray-600">Jajaran Pengurus Pimpinan Wilayah Ikatan Pelajar Persis Jawa Barat.</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => handleFilter(f.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeFilter === f.key
                  ? 'bg-brand-red text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-12 text-gray-500 font-medium animate-pulse">Memuat data tasykil...</div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center max-w-md mx-auto my-8">
            <h4 className="font-bold text-red-800 mb-1">Gagal Memuat Tasykil</h4>
            <p className="text-xs text-red-600">{error}</p>
          </div>
        ) : filteredList.length === 0 ? (
          <div className="text-center py-12 text-gray-500">Tidak ada pengurus pada kategori ini.</div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
            {filteredList.map((item, idx) => (
              <div
                key={item.id || idx}
                className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-sm hover:shadow-md transition text-center flex flex-col items-center justify-between"
              >
                <div className="w-full flex flex-col items-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-3 border-2 border-brand-red/20 shadow-sm bg-gray-50 flex items-center justify-center">
                    <img
                      src={item.foto || 'https://via.placeholder.com/300x300?text=No+Foto'}
                      alt={item.nama}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x300?text=No+Foto';
                      }}
                    />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-brand-dark leading-snug mb-1 line-clamp-2">
                    {item.nama}
                  </h3>
                  <p className="text-brand-red text-xs sm:text-sm font-semibold mb-1">{item.jabatan}</p>
                </div>
                <span className="inline-block mt-2 px-2.5 py-0.5 text-[10px] sm:text-xs font-medium text-gray-500 bg-gray-100 rounded-full">
                  {item.bidang}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
