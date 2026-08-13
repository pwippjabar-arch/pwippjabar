'use client';

import { useState } from 'react';

export default function KontakClient() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [form, setForm] = useState({ nama: '', asal: '', pesan: '' });

  const handleCopyEmail = () => {
    const email = 'pwippjabar@gmail.com';
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(() => showSuccess());
    } else {
      const tempInput = document.createElement('input');
      tempInput.value = email;
      document.body.appendChild(tempInput);
      tempInput.select();
      try {
        document.execCommand('copy');
        showSuccess();
      } catch {
        alert('Email PW IPP: ' + email);
      }
      document.body.removeChild(tempInput);
    }
  };

  const showSuccess = () => {
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nama.trim() || !form.pesan.trim()) return;
    const msg = `Assalamualaikum PW IPP Jawa Barat,\n\nPerkenalkan, nama saya *${form.nama.trim()}*${form.asal.trim() ? ` dari *${form.asal.trim()}*` : ''}.\n\n${form.pesan.trim()}\n\nTerima kasih.`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/6285923248689?text=${encoded}`, '_blank');
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark dark:text-white">Hubungi Kami</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Sampaikan pertanyaan atau jalin kemitraan dengan Pimpinan Wilayah Ikatan Pelajar Persis Jawa Barat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* 1. Alamat Sekretariat */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition flex flex-col justify-between text-center">
            <div>
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-red-50 dark:bg-red-900/30 text-brand-red flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-brand-dark dark:text-white mb-2">Alamat Sekretariat</h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs font-semibold mb-1">Lantai 2 Kantor PW Persis Jawa Barat</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-6">
                Jl. Peta No.154, Suka Asih, Kec. Bojongloa Kaler, Kota Bandung, Jawa Barat 40232
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/X6iaNXgEHigVYTjD7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-gradient-to-r from-brand-red to-brand-darkred text-white text-xs font-bold rounded-xl shadow-red-glow hover:opacity-95 transition inline-block text-center"
            >
              Buka Google Maps &rarr;
            </a>
          </div>

          {/* 2. Email Resmi */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition flex flex-col justify-between text-center">
            <div>
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-red-50 dark:bg-red-900/30 text-brand-red flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-brand-dark dark:text-white mb-2">Email Resmi</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-6">pwippjabar@gmail.com</p>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className={`w-full py-2.5 px-4 text-xs font-bold rounded-xl shadow-red-glow transition cursor-pointer ${
                copiedEmail
                  ? 'bg-green-600 text-white'
                  : 'bg-gradient-to-r from-brand-red to-brand-darkred text-white hover:opacity-95'
              }`}
            >
              {copiedEmail ? '✓ Berhasil Disalin!' : 'Salin Alamat Email'}
            </button>
          </div>

          {/* 3. Nomor Kontak / WhatsApp */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition flex flex-col justify-between text-center">
            <div>
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-red-50 dark:bg-red-900/30 text-brand-red flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-brand-dark dark:text-white mb-2">Layanan WhatsApp</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-6">+62 859-2324-8689</p>
            </div>
            <a
              href="https://wa.me/6285923248689"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-gradient-to-r from-brand-red to-brand-darkred text-white text-xs font-bold rounded-xl shadow-red-glow hover:opacity-95 transition inline-block text-center"
            >
              Hubungi via WA &rarr;
            </a>
          </div>

          {/* 4. Instagram Resmi */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition flex flex-col justify-between text-center">
            <div>
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-red-50 dark:bg-red-900/30 text-brand-red flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-brand-dark dark:text-white mb-2">Instagram Resmi</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-6">@pw.ippjabar</p>
            </div>
            <a
              href="https://www.instagram.com/pw_ippjabar?igsh=bWdtZTFjcWRuNnBo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-gradient-to-r from-brand-red to-brand-darkred text-white text-xs font-bold rounded-xl shadow-red-glow hover:opacity-95 transition inline-block text-center"
            >
              Kunjungi Instagram &rarr;
            </a>
          </div>
        </div>

        {/* Formulir Pesan WhatsApp Interaktif */}
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 fill-green-600 dark:fill-green-400" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.754z"/>
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-brand-dark dark:text-white">Kirim Pesan via WhatsApp</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Isi formulir, pesan akan terformat otomatis ke WhatsApp admin.</p>
            </div>
          </div>

          <form onSubmit={handleWhatsApp} className="space-y-4">
            <div>
              <label htmlFor="kontak-nama" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Nama Lengkap <span className="text-brand-red">*</span>
              </label>
              <input
                id="kontak-nama"
                type="text"
                required
                value={form.nama}
                onChange={(e) => setForm({ ...form, nama: e.target.value })}
                placeholder="Masukkan nama lengkap Anda"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-brand-dark dark:text-white focus:outline-none focus:border-brand-red dark:focus:border-brand-red transition"
              />
            </div>

            <div>
              <label htmlFor="kontak-asal" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Asal Daerah / Instansi <span className="text-gray-400">(opsional)</span>
              </label>
              <input
                id="kontak-asal"
                type="text"
                value={form.asal}
                onChange={(e) => setForm({ ...form, asal: e.target.value })}
                placeholder="Contoh: PD IPP Kota Bandung"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-brand-dark dark:text-white focus:outline-none focus:border-brand-red dark:focus:border-brand-red transition"
              />
            </div>

            <div>
              <label htmlFor="kontak-pesan" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Pesan <span className="text-brand-red">*</span>
              </label>
              <textarea
                id="kontak-pesan"
                required
                rows={5}
                value={form.pesan}
                onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                placeholder="Tuliskan pesan, pertanyaan, atau keperluan Anda di sini..."
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-brand-dark dark:text-white focus:outline-none focus:border-brand-red dark:focus:border-brand-red transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.754z"/>
              </svg>
              Kirim via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
