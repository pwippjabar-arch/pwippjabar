'use client';

import { useState } from 'react';
import KebijakanModal from '@/components/KebijakanModal';

export default function BidangClient() {
  const [selectedBidang, setSelectedBidang] = useState<string | null>(null);

  const bidangList = [
    {
      key: 'pendidikan',
      title: 'Pendidikan dan Dakwah',
      desc: 'Berupaya melakukan segala bentuk kegiatan pendidikan serta dakwah dan terus menambah wawasan keilmuan kader yang ditinjau dalam perspektif islam dan ilmu pengetahuan, sehingga tercetak kader yang kritis dalam berpikir, ilmiah dalam berargumentasi, dan responsif dalam Gerakan.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      ),
    },
    {
      key: 'organisasi',
      title: 'Organisasi dan Kelembagaan',
      desc: 'Berupaya menjalin relasi yang baik dengan organisasi internal jam\'iyyah maupun eksternal. Sehingga mampu menciptakan hubungan yang harmonis, guna melebarkan sayap IPP lebih luas serta mampu mengembangkan potensi internal dan eksternal organisasi.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H9m4 0v10" />
      ),
    },
    {
      key: 'kaderisasi',
      title: 'Kaderisasi',
      desc: 'Berupaya melakukan pengkaderan yang berorientasi pada pembentukan kader yang memiliki ideologi Ar-Rasikhuna fil \'Ilmi dan negarawan yang memiliki jati diri Ibadurrahman sebagai penerus perjuangan Dakwah Islamiyyah dan penerus bangsa.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      ),
    },
    {
      key: 'psdm',
      title: 'Pengembangan Sumber Daya Manusia',
      desc: 'Berupaya mengembangkan potensi, minat serta bakat yang dimiliki kader Ikatan Pelajar Persis, sehingga mampu mewujudkan kader yang dapat bersaing di ranah nasional maupun internasional.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      ),
    },
    {
      key: 'kominfo',
      title: 'Komunikasi dan Informasi',
      desc: 'Bertanggung jawab atas penyebaran dakwah dan melakukan propaganda sosial Ikatan Pelajar Persis serta kegiatan di bidang media dan informasi, juga sebagai pusat informasi resmi di Ikatan Pelajar Persis.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
    },
    {
      key: 'ekonomi',
      title: 'Sosial & Ekonomi',
      desc: 'Berupaya menunjang kesejahteraan organisasi, melatih serta menumbuhkan jiwa kewirausahaan kader guna meningkatkan kemandirian dalam pengembangan finansial baik secara individu maupun organisasi.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
    },
  ];

  return (
    <>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">Bidang-Bidang Organisasi</h1>
            <p className="mt-4 text-gray-600">
              Pilar-pilar pergerakan PW IPP Jawa Barat dalam menjalankan fungsi organisasi.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bidangList.map((bidang) => (
              <div
                key={bidang.key}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 mb-4 rounded-xl bg-red-50 text-brand-red flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {bidang.icon}
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-brand-dark mb-2">{bidang.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{bidang.desc}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedBidang(bidang.key)}
                  className="w-full py-2.5 px-4 bg-brand-red hover:bg-red-700 text-white font-semibold text-xs rounded-xl shadow-sm hover:shadow transition flex items-center justify-center space-x-1 cursor-pointer"
                >
                  <span>Lihat Tujuan dan Arah Kebijakan</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <KebijakanModal bidangKey={selectedBidang} onClose={() => setSelectedBidang(null)} />
    </>
  );
}
