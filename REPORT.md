# Laporan Optimasi SEO — setumbuhill.com (Punthuk Setumbu)

Tanggal: 28 Oktober 2026 · Penulis: SEO / riset / pengembang situs (pihak ketiga, non‑profit)

Ringkasan singkat: Situs diposisikan sebagai **panduan pengunjung independen & nirlaba** untuk Punthuk Setumbu (bukit umum di Kurahan, Karangrejo, Borobudur, Magelang, Jawa Tengah). Tidak ada klaim afiliasi dengan pemerintah, pengelola resmi, atau Borobudur. Seluruh konten mencantumkan sumber & tanggal periksa (19 Oktober 2026) dan secara eksplisit meminta pengunjung mengonfirmasi harga/jam/layanan di lokasi karena tidak ada harga resmi yang dapat diverifikasi.

---

## 1. Temuan (Findings)

**Lalu lintas & Search Console (19 Agu – 26 Okt 2026):** 1.046 tayangan, 2 klik, CTR ~0,2%. Kueri puncak: `punthuk setumbu` (497 tayangan, 0 klik), `punthuk setumbu magelang` (372, 0 klik), `bukit setumbu` (36), `punthuk setumbu tiket` (22), `puthuk setumbu` (17 — varian ejaan), `punthuk setumbu sunrise` (14), `punthuk setumbu dari jogja` (14), `punthuk setumbu jam buka` (12), `punthuk setumbu foto` (12).

- **Situs praktis baru / otoritas rendah.** Dengan 2 klik dari 1.046 tayangan, jangan mengharapkan klik instan. Tuas utama saat ini adalah **cakupan topik long‑tail + indeksasi**, bukan penyetelan judul.
- **Kueri ejaan bervariasi** (`punthuk`/`puthuk`/`puntuk`/`putuk`) menunjukkan pencari tidak konsisten — ditangani di dalam konten (halaman sejarah), **bukan** sebagai halaman terpisah.
- **225 tayangan HTTP** adalah agregat historis dari sebelum penegakan HTTPS. Pekerja Cloudflare sudah mengalihkan `http→https` dan `www→apex`; setelah indeks HTTPS menyusul, angka ini akan turun. Ini **bukan** kegagalan teknis saat ini, jadi tidak diubah secara khusus selain memastikan canonical selalu HTTPS.
- **Halaman yang mendasari** (beranda) sudah mengikuti praktik baik: canonical absolut per‑bahasa, hreflang `id`/`en`/`x‑default`, TouristAttraction + FAQPage JSON‑LD, dan cuplikan peringkat Google (9.285 / 4,5) dengan sumber & tanggal. Optimasi yang dilakukan: menambahkan **klaster topik + tautan internal**, dan bahasa kemandirian/non‑afiliasi yang lebih jelas di bawah‑halaman.

## 2. Daftar Optimasi (Existing pages)

- Independensi: footer semua halaman topik menyatakan secara eksplisit “proyek informasi pengunjung independen & nirlaba, tidak berafiliasi dengan pemerintah maupun pengelola resmi mana pun.”
- Tautan internal: beranda kini berisi bagian `#topics` yang menautkan ke **36** panduan topik; setiap topik menautkan kembali ke beranda dan ke topik terkait (`related`).
- Variasi ejaan ditangani di halaman *sejarah* (satu halaman, bukan halaman duplikat).
- Tidak ada ulasan/peringkat/ harga/ jam operasional yang dibuat‑buat; harga & layanan ditulis bingkai “perkiraan + konfirmasi di lokasi”.

## 3. Daftar Halaman Baru (36 topik, id + en)

Semua topik punya slug lintas‑bahasa sama; halaman id di `/<slug>/`, en di `/en/<slug>/`. Di bawah ini H1/ judul per bahasa disarikan.

**A. Matahari terbit & Fotografi (`sunrise`)** — 2
- `sunrise-guide` — Panduan sunrise / Sunrise guide
- `photography` — Fotografi sunrise / Sunrise photography

**B. Tiket & Persiapan Kunjungan (`prepare`)** — 9
- `tickets` — Tiket & biaya masuk / Entry fee & tickets
- `hours` — Jam buka & waktu terbaik / Opening hours & best time
- `weather` — Cuaca & musim / Weather & seasons
- `what-to-bring` — Apa yang dibawa / What to wear & bring
- `how-long` — Berapa lama / How long to spend
- `accessibility` — Aksesibilitas / Accessibility
- `family` — Bersama keluarga / With family
- `history` — Sejarah & nama (variasi ejaan) / History & name
- `first-visit-faq` — FAQ kunjungan pertama / First‑visit FAQ

**C. Transportasi & Cara ke Sini (`transport`)** — 6
- `getting-there` — Cara ke sini / How to get here
- `from-borobudur` — Dari Borobudur / From Borobudur
- `from-yogyakarta` — Dari Yogyakarta / From Yogyakarta
- `from-magelang` — Dari Magelang / From Magelang
- `parking` — Parkir / Parking
- `without-car` — Tanpa kendaraan pribadi / Without a car

**D. Kuliner Sekitar (`food`)** — 3
- `food-after-sunrise` — Makan setelah sunrise / Where to eat after sunrise
- `coffee-near-borobudur` — Kedai kopi dekat Borobudur / Coffee near Borobudur
- `magelang-food` — Kuliner Magelang / Magelang food

**E. Objek & Desa Sekitar (`nearby`)** — 10
- `nearby-overview` — Ikhtisar objek dekat / Things nearby
- `borobudur-combo` — Gabungkan dengan Borobudur / Combine with Borobudur
- `bukit-rhema` — Bukit Rhema (Gereja Ayam) / Bukit Rhema (Chicken Church)
- `bukit-barede` — Bukit Barede / Bukit Barede
- `karangrejo` — Desa Karangrejo / Karangrejo village
- `cycling` — Bersepeda ke sini / Cycling here
- `crafts` — Kerajinan & oleh‑oleh / Local crafts & souvenirs
- `viewpoints` — Titik pandang lain / Other viewpoints
- `family-nearby` — Aktivitas keluarga dekat / Family activities nearby
- `rainy-day` — Saat hujan / If it rains

**F. Rencana & Itinerari (`itinerary`)** — 6
- `half-day` — Rencana setengah hari / Half‑day plan
- `borobudur-day-trip` — Wisata sehari dari Borobudur / Borobudur day trip
- `yogyakarta-day-trip` — Wisata sehari dari Yogyakarta / Yogyakarta day trip
- `stay-near-borobudur` — Menginap dekat Borobudur / Stay near Borobudur
- `budget` — Perkiraan biaya / Budget estimate
- `after-sunrise-borobudur` — Setelah sunrise: ke Borobudur? / After sunrise: Borobudur?

> Total: **36 topik × 2 bahasa = 72 halaman topik** (ditambah 4 halaman statis × 2 = 8 → **80 URL** di sitemap).

## 4. Tabel Verifikasi (Verification)

| Fakta | Status | Catatan |
|---|---|---|
| Lokasi pin peta → Kurahan, Karangrejo (bukan gerbang Borobudur) | Terverifikasi (Google Maps) | Ditekankan di *getting‑there*, *karangrejo*, beranda |
| Koordinat 7.48414, 110.19978 | Terverifikasi (Google Maps) | Dipakai di structured data |
| Bukit umum; tidak ada gerbang/jam resmi; laut awan tidak dijamin | Terverifikasi (sifat publik) | *hours* & *sunrise‑guide* lembut, hindari janji |
| Cuplikan peringkat Google 9.285 / 4,5 | Terverifikasi + sumber + tanggal | Tidak dibuat‑buat ulasan; hanya snapshot + tautan Maps |
| Variasi ejaan (punthuk/puthuk/puntuk/putuk) | Ditangani | Di *history*, bukan halaman terpisah |
| Harga tiket / parkir / jam operasional | **Tidak diverifikasi** | Ditulis “perkiraan + konfirmasi di lokasi”; tidak memuat angka pasti yang tidak dapat dipertanggungjawabkan |
| Nama warung/kedai kopi tertentu | **Tidak diverifikasi** | Sengaja tidak dilist; hanya arah wilayah (sekitar Borobudur) |
| Sumber konteks | Pariwisata Jawa Tengah (visitjawatengah), Jadesta, Google Maps | Dicantumkan di footer & bagian sumber |

## 5. Topik Tidak Dipublikasikan (Unpublished / digabung)

- **Halaman variasi ejaan terpisah** (puthuk/puntuk/putuk) — digabung ke *history*; membuat halaman duplikat = spam kata kunci.
- **Halaman nama warung/kafe spesifik** — tidak dibuat karena tidak dapat diverifikasi; risiko E‑E‑A‑T.
- **Halaman “harga pasti” mandiri** — digabung ke *tickets* dengan bingkai “konfirmasi di lokasi” (tidak ada harga resmi terverifikasi).
- **“Jadwal matahari per bulan” sebagai halaman sendiri** — hanya panduan umum di *sunrise‑guide* / *weather*.
- **“Spot foto bernomor”** — digabung ke *photography*.
- Kandidat yang **tidak punya niat pencarian berbeda** atau **data dapat diandalkan** ditahan; akan dibuat hanya bila GSC menunjukkan permintaan nyata.

## 6. Hasil Pemeriksaan Teknis (Technical checks)

- **Protokol:** `server/worker.ts` sudah 301 `http→https` dan `www→apex`. Canonical selalu `https://setumbuhill.com` (non‑www). ✅
- **225 tayangan HTTP:** historis; bukan kegagalan saat ini (HTTPS ditegakkan). Tidak diubah selain menjamin canonical HTTPS. Pantau penurunannya.
- **Canonical:** absolut per‑bahasa HTTPS non‑www, self‑referencing. ✅
- **hreflang:** `id` / `en` / `x‑default→id` pada semua halaman termasuk 72 halaman topik (di `<head>`). ✅
- **Sitemap:** 80 `<loc>` (4 statis×2 + 36 topik×2). ✅
- **robots.txt:** `Sitemap:` + `Allow: /`. ✅
- **404:** `noindex`. ✅
- **Structured data:** Beranda = TouristAttraction + FAQPage; Topik = WebPage + BreadcrumbList + FAQPage. **Tidak** ada AggregateRating yang dibuat‑buat di halaman topik. ✅
- **Tautan internal:** beranda→36 topik, topik↔topik terkait, topik→beranda. ✅

## 7. Pengujian Build (Build test)

`npm run build` berhasil (exit 0):
- `vite build` → 1.580 modul, `dist/public/index.html` + aset.
- `scripts/prerender.tsx` → **80 halaman bilingual** (72 topik + 8 statis) + `404.html` noindex.
- `esbuild` → `dist/index.js` (worker).
- Verifikasi HTML hasil: `<title>`/`<meta description>`/`canonical`/`hreflang`/`og:locale` benar per bahasa; JSON‑LD (WebPage/BreadcrumbList/FAQPage) ada; 36 kartu tautan topik muncul di beranda; URL topik id dan `/en/...` keduanya ada.

## 8. Rencana Observasi 4–8 Minggu

1. **Minggu 1–2:** Pastikan ke‑80 URL terindeks (URL Inspection / cakupan sitemap); perbaiki crawl error / soft‑404.
2. **Minggu 2–4:** Lacak tayangan & klik untuk kueri long‑tail sasaran: `punthuk setumbu sunrise`, `punthuk setumbu tiket`, `punthuk setumbu dari jogja`, `punthuk setumbu parking`, `punthuk setumbu weather`, `bukit rhema punthuk setumbu`. Jangan berekspektasi klik instan (baseline 2 klik); perbaiki judul/deskripsi hanya bila CTR rendah *setelah* tayangan naik.
3. **Minggu 4–8:** Bandingkan tayangan sebelum/sesudah; identifikasi halaman dengan tayangan tapi 0 klik (uji CTR); tambah topik **hanya** bila GSC menunjukkan permintaan nyata & info dapat diandalkan.
4. **Setiap ~3 bulan:** Verifikasi ulang fakta di lokasi (harga tiket/parkir) dan perbarui catatan “diperbarui”; pertahankan pernyataan kejujuran.
5. **HTTPS:** Pantau penurunan 225 tayangan HTTP seiring Google mengindeks versi HTTPS.

---

### Catatan pengiriman
Berkas yang diubah/dibuat: `client/src/lib/topics-a.ts`, `topics-b.ts`, `topics-c.ts`, `topics.ts` (registry data), `client/src/pages/TopicPage.tsx`, `client/src/pages/Home.tsx` (bagian topik + nav), `client/src/App.tsx` (rute), `scripts/prerender.tsx` (generate topik/sitemap/hreflang), `client/src/index.css` (gaya topik). Build & pra‑render diverifikasi di lokal (Node 24).
