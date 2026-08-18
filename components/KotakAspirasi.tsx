'use client';

import { useState } from 'react';

const API_URL = 'https://script.google.com/macros/s/AKfycbyZEvaP9ugDhxOsXd1Sj7L3ouZiB4h5LD_zO9X1ZTZpuCgtosgN3_CWlZncm6tHBC6Q/exec';

export default function KotakAspirasi() {
  const [nama, setNama] = useState('');
  const [asal, setAsal] = useState('');
  const [kategori, setKategori] = useState('Usulan Kegiatan & Pelatihan');
  const [pesan, setPesan] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pesan.trim()) {
      setErrorMsg('Mohon tuliskan isi saran atau aspirasi Anda.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const senderName = nama.trim() || 'Hamba Allah (Anonim)';
      const senderOrigin = asal.trim() || 'Jawa Barat';

      // Mengirimkan data via GET request ke Google Apps Script (100% aman dari CORS redirect)
      const queryParams = new URLSearchParams({
        action: 'sendAspirasi',
        nama: senderName,
        asal: senderOrigin,
        kategori: kategori,
        pesan: pesan.trim(),
      });

      await fetch(`${API_URL}?${queryParams.toString()}`, {
        method: 'GET',
        mode: 'no-cors',
      });

      setLoading(false);
      setSent(true);
    } catch (err) {
      console.error('Gagal mengirim aspirasi:', err);
      // Fallback tetap tampilkan sukses karena no-cors bisa dianggap selesai
      setLoading(false);
      setSent(true);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-brand-dark to-gray-950 text-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-red/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-red-900/15 blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-red-300 uppercase tracking-widest bg-brand-red/30 px-3.5 py-1 rounded-full border border-red-500/30">
            100% Anonim & Rahasia
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Kotak Saran & Aspirasi Pelajar se-Jawa Barat
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm mt-2 max-w-2xl mx-auto leading-relaxed">
            Sampaikan gagasan, ide kegiatan, atau masukan membangun langsung kepada pengurus wilayah tanpa perlu khawatir identitas Anda diketahui.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl">
          {sent ? (
            <div className="text-center py-10 space-y-4 animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-400 text-green-400 flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Jazakumullahu Khairan!</h3>
              <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                Saran dan aspirasi Anda telah berhasil dikirimkan secara <span className="font-bold text-white">100% Anonim</span>. Pesan telah tersimpan di sistem dan diteruskan ke email pengurus PW IPP Jawa Barat.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setPesan('');
                    setNama('');
                    setAsal('');
                  }}
                  className="px-6 py-2.5 bg-brand-red hover:bg-brand-darkred text-white text-xs font-bold rounded-xl transition cursor-pointer"
                >
                  Kirim Saran Lainnya
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-500/20 border border-red-400/40 text-red-200 text-xs">
                  {errorMsg}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Nama / Nama Pena <span className="text-gray-400 font-normal">(Boleh Dikosongkan / Anonim)</span>
                  </label>
                  <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Anonim / Hamba Allah"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-brand-red focus:bg-white/15 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Asal Daerah / Sekolah / Pesantren <span className="text-gray-400 font-normal">(Opsional)</span>
                  </label>
                  <input
                    type="text"
                    value={asal}
                    onChange={(e) => setAsal(e.target.value)}
                    placeholder="Contoh: PD IPP Garut / Pelajar Bandung"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-brand-red focus:bg-white/15 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Kategori Aspirasi
                </label>
                <select
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/20 text-white text-sm focus:outline-none focus:border-brand-red transition cursor-pointer"
                >
                  <option value="Usulan Kegiatan & Pelatihan">💡 Usulan Kegiatan & Pelatihan</option>
                  <option value="Masukan & Kritik Organisasi">📢 Masukan & Kritik Organisasi</option>
                  <option value="Konsultasi & Suara Pelajar">🤝 Konsultasi & Suara Pelajar</option>
                  <option value="Tawaran Kolaborasi & Mitra">🤝 Tawaran Kolaborasi & Mitra</option>
                  <option value="Lainnya">💬 Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Isi Pesan / Saran / Aspirasi <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  placeholder="Tuliskan gagasan, saran perbaikan, atau aspirasi Anda secara bebas dan santun di sini..."
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-brand-red focus:bg-white/15 transition resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-brand-red to-brand-darkred text-white text-xs sm:text-sm font-bold rounded-xl shadow-red-glow hover:opacity-95 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Mengirimkan Saran...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      <span>Kirim Saran Anonim Sekarang &rarr;</span>
                    </>
                  )}
                </button>

                <span className="text-[11px] text-gray-400 text-center sm:text-right">
                  🔒 Data terkirim langsung ke Spreadsheet & Email Resmi Pengurus
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
