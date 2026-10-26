# Blue Desk 3D Portfolio — Achmad Dzaki Habibullah Al Azhar

Portfolio web modern dengan tema kreatif **Meja Belajar Biru (Blue Desk)**: perpaduan estetika cutting mat biru, strip kayu, kertas sobek dengan lubang spiral, kartu project dengan binder clip pink, dan alat tulis 3D (Microsoft Fluent Emoji).

Dibuat menggunakan **React 19 + TypeScript + Vite + Tailwind CSS v4 + Motion + Lucide + Simple Icons**.

---

## 📋 Daftar Data Placeholder `[ISI]`

Sesuai spesifikasi prompt (Bagian 0 & 9), seluruh data terisolasi di folder `src/data/*.ts`. Berikut adalah data yang dapat disesuaikan atau diisi:

1. **`src/data/content.ts`**:
   - `whatsapp`: Nomor WhatsApp aktif untuk tombol chat dan pemesanan layanan (default: `+6281234567890`).
   - `email`: Alamat email kontak (default: `dzakihabibullah7@gmail.com`).
   - `domain`: Domain utama portfolio (default: `dzaki.dev`).
   - `socials`: Tautan URL profil LinkedIn, GitHub, Instagram.
   - `photo` & `photoSecondary`: Tautan URL foto profil pribadi di ID Card.

2. **`src/data/projects.ts`**:
   - `thumb`: Screenshot mockup aplikasi proyek.
   - `live`: Tautan demo live aplikasi di Vercel / domain produksi.
   - `repo`: Tautan repositori kode di GitHub.

3. **`src/data/certificates.ts`**:
   - `image`: Foto / scan sertifikat asli untuk pratinjau modal `<dialog>`.
   - `credentialUrl`: URL verifikasi kredensial sertifikat.

4. **`src/data/services.ts`**:
   - `price`: Estimasi biaya atau penyesuaian paket layanan.

---

## 🚀 Menjalankan Project Secara Lokal

1. **Clone repositori dan masuk ke folder**:
   ```bash
   cd blue-desk-portfolio
   ```

2. **Install dependensi**:
   ```bash
   pnpm install
   ```

3. **Unduh aset 3D (jika belum ada di public/assets/3d/)**:
   ```bash
   pnpm assets
   ```

4. **Jalankan development server**:
   ```bash
   pnpm dev
   ```
   Buka peramban di `http://localhost:5173`.

5. **Build produksi**:
   ```bash
   pnpm build
   ```
   File hasil build tersimpan di folder `dist/`.

---

## 🌐 Cara Deploy ke Vercel / Netlify

### Vercel (Rekomendasi)
Sudah disediakan konfigurasi routing SPA `vercel.json`:
```bash
npx vercel
```
Atau hubungkan repositori GitHub langsung melalui dashboard Vercel.

### Netlify
Tambahkan file `public/_redirects` dengan isi:
```
/*    /index.html   200
```

---

## 📜 Lisensi & Atribusi
Silakan lihat file [`public/CREDITS.md`](./public/CREDITS.md) untuk detail lisensi aset Microsoft Fluent Emoji (MIT License), Google Fonts (SIL OFL), dan pustaka open-source lainnya.
