import type { Metadata } from 'next';
import { getPendaftaranData } from '@/lib/api';
import { pageSeoMap, DEFAULT_IMAGE, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: pageSeoMap.pendaftaran.title,
  description: pageSeoMap.pendaftaran.desc,
  openGraph: {
    title: pageSeoMap.pendaftaran.title,
    description: pageSeoMap.pendaftaran.desc,
    url: `${SITE_URL}/pendaftaran`,
    images: [{ url: DEFAULT_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    title: pageSeoMap.pendaftaran.title,
    description: pageSeoMap.pendaftaran.desc,
    images: [DEFAULT_IMAGE],
  },
};

export default async function PendaftaranPage() {
  let list = [];
  let errorMsg = null;

  try {
    list = await getPendaftaranData();
  } catch (err: any) {
    errorMsg = err.message || 'Gagal memuat agenda pendaftaran.';
  }

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">Pendaftaran Kegiatan</h1>
          <p className="mt-4 text-gray-600">
            Pilih agenda atau kegiatan PW IPP Jawa Barat yang sedang dibuka untuk melakukan pendaftaran.
          </p>
        </div>

        {errorMsg ? (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center max-w-md mx-auto my-8">
            <h4 className="font-bold text-red-800 mb-1">Gagal Memuat Agenda Pendaftaran</h4>
            <p className="text-xs text-red-600">{errorMsg}</p>
          </div>
        ) : list.length === 0 ? (
          <div className="text-center py-12 text-gray-500">Belum ada agenda pendaftaran kegiatan saat ini.</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {list.map((item, idx) => {
              const statusLower = (item.status || '').toLowerCase();
              const isBuka = statusLower.includes('buka') || statusLower.includes('open');

              return (
                <div
                  key={item.id || idx}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      {isBuka ? (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                          Pendaftaran Dibuka
                        </span>
                      ) : (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-500">
                          Pendaftaran Ditutup
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">{item.namaKegiatan}</h3>
                    <p className="text-gray-600 text-sm mb-6">{item.deskripsi}</p>

                    <div className="space-y-2 mb-6 border-t border-b border-gray-50 py-4 text-xs text-gray-600">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-brand-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>
                          <strong>Waktu:</strong> {item.tanggal}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-brand-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span>
                          <strong>Tempat:</strong> {item.tempat}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    {isBuka ? (
                      <a
                        href={item.linkGForm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center py-3 px-4 bg-gradient-to-r from-brand-red to-brand-darkred text-white font-bold rounded-xl shadow-red-glow hover:opacity-95 transition text-sm"
                      >
                        Isi Formulir Pendaftaran &rarr;
                      </a>
                    ) : (
                      <button
                        disabled
                        className="w-full text-center py-3 px-4 bg-gray-200 text-gray-400 font-bold rounded-xl cursor-not-allowed text-sm"
                      >
                        Pendaftaran Ditutup
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
