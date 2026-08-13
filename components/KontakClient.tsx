'use client';

import { useState } from 'react';

export default function KontakClient() {
  const [copiedEmail, setCopiedEmail] = useState(false);

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

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">Hubungi Kami</h1>
          <p className="mt-4 text-gray-600">
            Sampaikan pertanyaan atau jalin kemitraan dengan Pimpinan Wilayah Ikatan Pelajar Persis Jawa Barat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Alamat Sekretariat */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between text-center">
            <div>
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-red-50 text-brand-red flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-brand-dark mb-2">Alamat Sekretariat</h3>
              <p className="text-gray-600 text-xs font-semibold mb-1">Lantai 2 Kantor PW Persis Jawa Barat</p>
              <p className="text-gray-500 text-xs leading-relaxed mb-6">
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
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between text-center">
            <div>
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-red-50 text-brand-red flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-brand-dark mb-2">Email Resmi</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-6">pwippjabar@gmail.com</p>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className={`w-full py-2.5 px-4 text-xs font-bold rounded-xl shadow-red-glow transition inline-block cursor-pointer ${
                copiedEmail
                  ? 'bg-green-600 text-white'
                  : 'bg-gradient-to-r from-brand-red to-brand-darkred text-white hover:opacity-95'
              }`}
            >
              {copiedEmail ? '✓ Berhasil Disalin!' : 'Salin Alamat Email'}
            </button>
          </div>

          {/* 3. Nomor Kontak / WhatsApp */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between text-center">
            <div>
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-red-50 text-brand-red flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-brand-dark mb-2">Layanan WhatsApp</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-6">+62 859-2324-8689</p>
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
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between text-center">
            <div>
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-red-50 text-brand-red flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke-width="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-brand-dark mb-2">Instagram Resmi</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-6">@pw.ippjabar</p>
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
      </div>
    </section>
  );
}
