'use client';

import { useEffect } from 'react';

export interface KebijakanInfo {
  title: string;
  content: React.ReactNode;
}

export const kebijakanDataMap: Record<string, KebijakanInfo> = {
  pendidikan: {
    title: "Pendidikan dan Dakwah",
    content: (
      <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
        <div>
          <h5 className="font-bold text-brand-dark mb-2">a. Tujuan</h5>
          <ol className="list-decimal list-inside space-y-1 pl-2">
            <li>Sebagai wadah pengembangan kader yang memiliki intelektualitas yang berpikir secara kritis dan ilmiah dalam berargumen.</li>
            <li>Membina kader menjadi kaum intelek yang kompetitif serta solutif nan progresif terhadap berbagai permasalahan. Dari mulai permasalahan di ranah pelajar, dunia pendidikan, keumatan serta bangsa dan negara.</li>
            <li>Membina kader untuk menjadi pelanjut dakwah islamiyyah yang mampu menjadi solusi bagi permasalahan umat yang terus berkembang.</li>
            <li>Membina kader untuk menjadi pelanjut dakwah Persatuan Islam pada ranah pelajar.</li>
          </ol>
        </div>
        <div>
          <h5 className="font-bold text-brand-dark mb-2">b. Arah Kebijakan</h5>
          <ol className="list-decimal list-inside space-y-1 pl-2">
            <li>Menyelenggarakan kegiatan yang berorientasi pada pengembangan intelektualitas kader, seperti: Diskusi, studium general, pelatihan dsb.</li>
            <li>Menyelenggarakan penelitian sebagai bentuk pendidikan dalam ranah penulisan ilmiah.</li>
            <li>Menumbuhkan nilai-nilai dakwah dalam ranah kepelajaran.</li>
            <li>Membina kader agar siap menjadi pendakwah kapanpun dan dimanapun ia berada.</li>
          </ol>
        </div>
      </div>
    ),
  },
  organisasi: {
    title: "Organisasi dan Kelembagaan",
    content: (
      <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
        <div>
          <h5 className="font-bold text-brand-dark mb-2">a. Tujuan</h5>
          <ol className="list-decimal list-inside space-y-1 pl-2">
            <li>Sebagai wadah penyambung organisasi dengan eksternal organisasi.</li>
            <li>Sebagai wadah pengembangan potensi eksternal organisasi.</li>
            <li>Sebagai evaluator yang membina internal organisasi setelah ex-officio.</li>
            <li>Sebagai wadah pelebaran sayap organisasi.</li>
          </ol>
        </div>
        <div>
          <h5 className="font-bold text-brand-dark mb-2">b. Arah Kebijakan</h5>
          <ol className="list-decimal list-inside space-y-1 pl-2">
            <li>Menyelenggarakan kegiatan diplomatis dengan organisasi eksternal.</li>
            <li>Membuat konsep pengembangan potensi eksternal organisasi.</li>
            <li>Bertanggung jawab melebarkan sayap organisasi.</li>
            <li>Bertanggung jawab mengevaluasi dan membina internal organisasi.</li>
          </ol>
        </div>
      </div>
    ),
  },
  kaderisasi: {
    title: "Kaderisasi",
    content: (
      <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
        <div>
          <h5 className="font-bold text-brand-dark mb-2">a. Tujuan</h5>
          <ol className="list-decimal list-inside space-y-1 pl-2">
            <li>Meningkatkan kuantitas kader dengan mengadakan training.</li>
            <li>Menanamkan nilai-nilai yang menjadi ideologi IPP.</li>
          </ol>
        </div>
        <div>
          <h5 className="font-bold text-brand-dark mb-2">b. Arah Kebijakan</h5>
          <ol className="list-decimal list-inside space-y-1 pl-2">
            <li>Mengoptimalkan setiap jenjang training.</li>
            <li>Menjaring dan menghimpun calon kader.</li>
            <li>Membina dan mengelola Badan Pengelola Training.</li>
          </ol>
        </div>
      </div>
    ),
  },
  psdm: {
    title: "Pengembangan Sumber Daya Manusia",
    content: (
      <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
        <div>
          <h5 className="font-bold text-brand-dark mb-2">a. Tujuan</h5>
          <ol className="list-decimal list-inside space-y-1 pl-2">
            <li>Meningkatkan kualitas mutu talenta kader.</li>
            <li>Meningkatkan dan mengembangkan minat serta bakat individu kader.</li>
            <li>Menumbuhkan kreatifitas, produktifitas serta inovasi kader IPP.</li>
          </ol>
        </div>
        <div>
          <h5 className="font-bold text-brand-dark mb-2">b. Arah Kebijakan</h5>
          <ol className="list-decimal list-inside space-y-1 pl-2">
            <li>Membuat program yang berorientasi pada peningkatan mutu kualitas kader.</li>
            <li>Membuat program yang berorientasi pada pengembangan potensi, minat serta bakat kader.</li>
            <li>Membuat program yang berorientasi pada pengembangan soft skill kader.</li>
          </ol>
        </div>
      </div>
    ),
  },
  kominfo: {
    title: "Komunikasi dan Informasi",
    content: (
      <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
        <div>
          <h5 className="font-bold text-brand-dark mb-2">a. Tujuan</h5>
          <ol className="list-decimal list-inside space-y-1 pl-2">
            <li>Bertugas mengelola media informasi organisasi.</li>
            <li>Bertugas sebagai pusat informasi dan media propaganda organisasi.</li>
          </ol>
        </div>
        <div>
          <h5 className="font-bold text-brand-dark mb-2">b. Arah Kebijakan</h5>
          <ol className="list-decimal list-inside space-y-1 pl-2">
            <li>Mendokumentasikan setiap kegiatan organisasi.</li>
            <li>Menyebar luaskan kegiatan organisasi melalui media massa, media sosial maupun media cetak.</li>
          </ol>
        </div>
      </div>
    ),
  },
  ekonomi: {
    title: "Sosial & Ekonomi",
    content: (
      <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
        <div>
          <h5 className="font-bold text-brand-dark mb-2">a. Tujuan</h5>
          <p>Menunjang kesejahteraan organisasi serta melatih dan menumbuhkan jiwa kewirausahaan kader guna meningkatkan kemandirian finansial.</p>
        </div>
        <div>
          <h5 className="font-bold text-brand-dark mb-2">b. Arah Kebijakan</h5>
          <p>Mengembangkan unit usaha serta program kerja yang mendukung kemandirian ekonomi kader dan organisasi.</p>
        </div>
      </div>
    ),
  },
};

interface KebijakanModalProps {
  bidangKey: string | null;
  onClose: () => void;
}

export default function KebijakanModal({ bidangKey, onClose }: KebijakanModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!bidangKey || !kebijakanDataMap[bidangKey]) return null;

  const data = kebijakanDataMap[bidangKey];

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden transform transition-all">
        <div className="bg-gradient-to-r from-brand-red to-brand-darkred p-6 text-white flex justify-between items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-red-200">
              Tujuan dan Arah Kebijakan
            </span>
            <h3 className="text-xl font-bold">{data.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup Kebijakan Modal"
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 max-h-[70vh] overflow-y-auto">{data.content}</div>
        <div className="bg-gray-50 px-6 py-4 flex justify-end border-t border-gray-100">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-brand-dark text-white font-semibold text-xs rounded-xl hover:bg-gray-800 transition cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
