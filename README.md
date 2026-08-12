# PW IPP Jawa Barat - Website & Backend Integration

Project ini telah disesuaikan agar dapat di-host di **GitHub Pages** dan di-publish ke **Vercel**, sembari tetap mengambil data secara live dari **Google Spreadsheet** dan **Google Docs / Drive** melalui Google Apps Script Web App.

---

## 🛠️ Langkah-Langkah Setup & Deployment

### 1. Update & Deploy Google Apps Script (Backend)
1. Buka project **Google Apps Script** Anda di [script.google.com](https://script.google.com/).
2. Salin seluruh isi file [`code.gs`](./code.gs) dan paste ke editor Google Apps Script.
3. Klik tombol **Deploy** (Terapkan) di sudut kanan atas > pilih **New Deployment** (Terapkan baru).
4. Pilih tipe: **Web App** (Aplikasi Web).
5. Atur konfigurasi sebagai berikut:
   - **Execute as (Jalankan sebagai):** `Me (Saya)`
   - **Who has access (Siapa yang memiliki akses):** `Anyone (Siapa saja)` *(Sangat penting agar Vercel/GitHub bisa mengakses API tanpa login)*
6. Klik **Deploy** dan berikan izin otorisasi Google jika diminta.
7. **Salin Web App URL** yang dihasilkan (contoh format: `https://script.google.com/macros/s/AKfycbx.../exec`).

---

### 2. Hubungkan URL API ke `index.html`
1. Buka file [`index.html`](./index.html).
2. Cari variabel `API_URL` pada bagian `<script>` (sekitar baris 418):
   ```javascript
   var API_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";
   ```
3. Ganti `"YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL"` dengan URL Web App yang sudah Anda salin di Langkah 1:
   ```javascript
   var API_URL = "https://script.google.com/macros/s/AKfycbx.../exec";
   ```
4. Simpan file `index.html`.

---

### 3. Push ke GitHub
Jalankan perintah berikut di terminal komputer Anda:
```bash
git init
git add .
git commit -m "Initial commit for Vercel deployment"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

---

### 4. Publish ke Vercel
1. Buka dashboard [Vercel](https://vercel.com/) dan login dengan akun GitHub Anda.
2. Klik tombol **"Add New"** > **"Project"**.
3. Import repository GitHub **WEB-PW-IPP-JABAR**.
4. Di bagian Framework Preset, pilih **Other** (atau biarkan default HTML/Static).
5. Klik **Deploy**.
6. Website PW IPP Jawa Barat Anda kini telah live dan terkoneksi secara real-time ke Google Spreadsheet & Google Drive! 🎉
