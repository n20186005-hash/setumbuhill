// Punthuk Setumbu topic content (part B: topics 13-24). Types are imported from topics-a.

import type { Topic } from "./topics-a";

export const topicsB: Topic[] = [
  {
    slug: "parking",
    group: "transport",
    id: {
      title: "Parkir & jalan terakhir ke Punthuk Setumbu: lokasi, medan, risiko hujan",
      meta: "Parkir di Punthuk Setumbu dan jalan menanjak terakhir: lokasi, medan berbatu, intensitas, dan risiko licin saat hujan.",
      h1: "Parkir & jalan terakhir",
      lead: "Konfirmasikan lokasi dan biaya parkir kepada petugas, lalu lanjutkan jalan menanjak berbatu dan tanah ke titik pandang. Waspadai licin saat lembap.",
      updated: "Diperbarui 28 Oktober 2026 · lokasi parkir konfirmasi",
      sections: [
        {
          heading: "Lokasi parkir",
          paragraphs: [
            "Kami tidak dapat memverifikasi lokasi parkir pasti; panduan lama menyebut area parkir desa. Konfirmasikan lokasi, jam akses, dan biaya kepada petugas di lokasi.",
            "Ikuti petunjuk petugas; jangan mengasumsikan parkir sudah termasuk tiket masuk.",
          ],
        },
        {
          heading: "Jalan menanjak",
          paragraphs: [
            "Dari parkir, jalur batu dan tanah menanjak menuju titik pandang terbuka. Waktu jalan bergantung kondisi dan kecepatan; tanyakan alternatif kepada petugas bila perlu.",
            "Jalur tidak dijamin bebas tangga. Berjalan bersama rombongan dan gunakan lampu saat gelap.",
          ],
        },
        {
          heading: "Risiko hujan",
          paragraphs: [
            "Saat lembap atau hujan, batu dan tanah bisa licin. Pakai alas kaki cengkeraman baik, hindari tepi, dan turun lebih awal bila cuaca memburuk.",
          ],
        },
      ],
      faqs: [
        { q: "Di mana parkirnya?", a: "Konfirmasikan dengan petugas di lokasi; panduan lama menyebut area parkir desa, tetapi lokasi dapat berubah." },
        { q: "Apakah jalurnya curam?", a: "Diggambarkan menanjak berbatu dan tanah. Tingkat kemiringan tanyakan kepada petugas; jangan anggap datar." },
        { q: "Apakah aman saat hujan?", a: "Lebih licin. Gunakan alas kaki cengkeraman baik dan turun lebih awal bila perlu." },
      ],
      related: ["getting-there", "what-to-bring", "tickets", "accessibility"],
    },
    en: {
      title: "Punthuk Setumbu parking & final walk: location, terrain, rain risk",
      meta: "Parking at Punthuk Setumbu and the final uphill walk: location, rocky terrain, intensity, and slippery risk in rain.",
      h1: "Parking & final walk",
      lead: "Confirm parking location and fee with staff, then continue on the uphill stone-and-earth path to the viewpoint. Watch for slips when damp.",
      updated: "Updated 28 October 2026 · confirm parking location",
      sections: [
        {
          heading: "Parking location",
          paragraphs: [
            "We cannot verify the exact parking spot; older guidance mentions a village parking area. Confirm location, access hours and fee with on-site staff.",
            "Follow staff directions; do not assume parking is included in admission.",
          ],
        },
        {
          heading: "Uphill walk",
          paragraphs: [
            "From the car park, a stone-and-earth path climbs to the open viewpoint. Walking time depends on conditions and pace; ask staff about alternatives if needed.",
            "The route is not guaranteed step-free. Walk with companions and use light in the dark.",
          ],
        },
        {
          heading: "Rain risk",
          paragraphs: [
            "When damp or raining, stone and earth can be slippery. Wear grippy footwear, avoid edges, and descend earlier if weather worsens.",
          ],
        },
      ],
      faqs: [
        { q: "Where is the parking?", a: "Confirm with on-site staff; older guidance mentions a village parking area, but the location can change." },
        { q: "Is the path steep?", a: "Described as uphill stone-and-earth. Ask staff about gradient; do not assume flat." },
        { q: "Is it safe in rain?", a: "Slipperier. Wear grippy footwear and descend earlier if needed." },
      ],
      related: ["getting-there", "what-to-bring", "tickets", "accessibility"],
    },
  },

  {
    slug: "without-car",
    group: "transport",
    id: {
      title: "Ke Punthuk Setumbu tanpa mobil: sewa sopir, taksi & transport lokal",
      meta: "Cara mengunjungi Punthuk Setumbu tanpa kendaraan sendiri: sewa dengan sopir, taksi, dan penjadwalan jemput kembali.",
      h1: "Tanpa mobil ke Punthuk Setumbu",
      lead: "Tanpa mobil, pilih sewa kendaraan dengan sopir atau taksi yang mencakup jemput kembali. Untuk fajar, sepakati waktu dan tempat penjemputan sebelumnya.",
      updated: "Diperbarui 28 Oktober 2026 · layanan dini hari terbatas",
      sections: [
        {
          heading: "Sewa dengan sopir",
          paragraphs: [
            "Sewa harian dengan sopir dari Yogyakarta, Magelang, atau Borobudur sering paling simpel untuk kunjungan fajar. Sepakati durasi, titik jemput, dan penjemputan kembali.",
            "Pastikan sopir mengetahui pin Kurahan, Karangrejo, bukan pintu Candi Borobudur.",
          ],
        },
        {
          heading: "Taksi & aplikasi",
          paragraphs: [
            "Taksi atau kendaraan pesan-antar dapat digunakan bila tersedia di kawasan. Konfirmasikan ketersediaan dini hari dan jangan mengandalkan spontan.",
          ],
        },
        {
          heading: "Transport umum",
          paragraphs: [
            "Layanan umum langsung ke bukit pandang tidak terverifikasi untuk waktu subuh. Opsi umum biasanya berhenti di simpul Yogyakarta/Magelang/Borobudur lalu lanjut kendaraan lokal.",
          ],
        },
      ],
      faqs: [
        { q: "Apakah bisa tanpa menyetir sendiri?", a: "Ya, dengan sewa sopir atau taksi yang mencakup jemput kembali." },
        { q: "Apakah ada tur sunrise?", a: "Tidak terverifikasi dari panduan ini. Tanyakan penyedia wisata lokal; pastikan mereka tahu titik Kurahan Karangrejo." },
        { q: "Bagaimana pulang setelah pagi?", a: "Sepakati penjemputan kembali saat penyewaan. Jangan mengandalkan angkutan umum subuh." },
      ],
      related: ["getting-there", "from-yogyakarta", "from-magelang", "from-borobudur"],
    },
    en: {
      title: "To Punthuk Setumbu without a car: driver hire, taxi & local transport",
      meta: "Visiting Punthuk Setumbu without your own vehicle: driver hire, taxi, and scheduling a return pickup.",
      h1: "Without a car to Punthuk Setumbu",
      lead: "Without a car, choose a driver hire or taxi that includes a return pickup. For dawn, agree the time and pickup place in advance.",
      updated: "Updated 28 October 2026 · pre-dawn services limited",
      sections: [
        {
          heading: "Driver hire",
          paragraphs: [
            "A daily hire with driver from Yogyakarta, Magelang or Borobudur is often simplest for a dawn visit. Agree duration, pickup point and return pickup.",
            "Make sure the driver knows the Kurahan, Karangrejo pin, not the Borobudur Temple gate.",
          ],
        },
        {
          heading: "Taxi & apps",
          paragraphs: [
            "A taxi or ride-hailing vehicle can be used where available in the area. Confirm pre-dawn availability and do not rely on spontaneity.",
          ],
        },
        {
          heading: "Public transport",
          paragraphs: [
            "Direct public transport to the viewpoint is not verified for pre-dawn hours. Public options usually stop at Yogyakarta/Magelang/Borobudur hubs then continue by local vehicle.",
          ],
        },
      ],
      faqs: [
        { q: "Can I go without self-driving?", a: "Yes, with a driver hire or taxi that includes a return pickup." },
        { q: "Are there sunrise tours?", a: "Not verified by this guide. Ask local operators; ensure they know the Kurahan Karangrejo point." },
        { q: "How do I get back after morning?", a: "Agree a return pickup at hire. Do not rely on pre-dawn public transport." },
      ],
      related: ["getting-there", "from-yogyakarta", "from-magelang", "from-borobudur"],
    },
  },

  {
    slug: "food-after-sunrise",
    group: "food",
    id: {
      title: "Sarapan & makan setelah sunrise Punthuk Setumbu: area Borobudur & Karangrejo",
      meta: "Di mana makan setelah melihat pagi di Punthuk Setumbu: pilihan umum di sekitar Borobudur, status buka yang perlu dikonfirmasi, dan bawaan cadangan.",
      h1: "Sarapan & makan setelah sunrise",
      lead: "Setelah sunrise, pilihan makan umumnya ada di kawasan Borobudur dan sepanjang jalan menuju candi. Jam buka warung bervariasi; konfirmasikan dan siapkan camilan cadangan.",
      updated: "Diperbarui 28 Oktober 2026 · jam buka belum terverifikasi",
      sections: [
        {
          heading: "Di mana mencari makan",
          paragraphs: [
            "Kawasan Borobudur dan desa di sekitarnya memiliki warung, kedai, dan restoran dengan jam bervariasi. Area ini lebih lengkap daripada bukit pandang itu sendiri.",
            "Jangan menganggap warung di bukit pandang sudah buka saat fajar. Banyak yang baru beroperasi saat terang.",
          ],
        },
        {
          heading: "Status buka & konfirmasi",
          paragraphs: [
            "Kami tidak memverifikasi nama dan jam warung tertentu. Sebutan tempat dapat berubah; konfirmasikan secara langsung atau lewat ulasan terkini sebelum mengandalkan satu tempat.",
            "Untuk rombongan besar atau sarapan terjamin, pertimbangkan penginapan di Borobudur yang menyediakan sarapan lebih awal, lalu lanjut ke bukit.",
          ],
        },
        {
          heading: "Bawaan cadangan",
          paragraphs: [
            "Bawa air dan camilan dari penginapan. Ini mengamankan pagi Anda bila warung belum buka saat Anda turun dari bukit.",
          ],
        },
      ],
      faqs: [
        { q: "Apakah ada sarapan di bukit?", a: "Tidak dijamin. Bawa camilan dan air; warung umumnya baru buka saat terang di kawasan Borobudur." },
        { q: "Ke mana setelah pagi untuk makan?", a: "Kawasan Borobudur dan jalan menuju candi memiliki pilihan lebih lengkap." },
        { q: "Apakah saya bisa memesan tempat?", a: "Tergantung tempat; untuk sarapan terjamin, gunakan penginapan dengan layanan sarapan awal." },
      ],
      related: ["coffee-near-borobudur", "magelang-food", "stay-near-borobudur", "after-sunrise-borobudur"],
    },
    en: {
      title: "Breakfast & food after Punthuk Setumbu sunrise: Borobudur & Karangrejo area",
      meta: "Where to eat after the morning at Punthuk Setumbu: general options around Borobudur, unverified opening status, and backup supplies.",
      h1: "Breakfast & food after sunrise",
      lead: "After sunrise, food options are generally around Borobudur and along the road to the temple. Vendor hours vary; confirm and carry a snack backup.",
      updated: "Updated 28 October 2026 · opening hours unverified",
      sections: [
        {
          heading: "Where to look for food",
          paragraphs: [
            "The Borobudur area and surrounding villages have warungs, cafés and restaurants with varying hours. This area is more complete than the viewpoint itself.",
            "Do not assume a kiosk at the viewpoint is open at dawn. Many open only in daylight.",
          ],
        },
        {
          heading: "Opening status & confirmation",
          paragraphs: [
            "We have not verified specific vendor names and hours. Place names can change; confirm directly or via recent reviews before relying on one spot.",
            "For large groups or a guaranteed breakfast, consider a Borobudur stay with early breakfast, then proceed to the hill.",
          ],
        },
        {
          heading: "Backup supplies",
          paragraphs: [
            "Bring water and a snack from your accommodation. This secures your morning if kiosks are not yet open when you descend.",
          ],
        },
      ],
      faqs: [
        { q: "Is there breakfast on the hill?", a: "Not guaranteed. Bring a snack and water; kiosks generally open in daylight around Borobudur." },
        { q: "Where to eat after the morning?", a: "The Borobudur area and road to the temple offer more complete choices." },
        { q: "Can I reserve a place?", a: "Depends on the venue; for a guaranteed breakfast, use a stay with early breakfast service." },
      ],
      related: ["coffee-near-borobudur", "magelang-food", "stay-near-borobudur", "after-sunrise-borobudur"],
    },
  },

  {
    slug: "coffee-near-borobudur",
    group: "food",
    id: {
      title: "Kopi di sekitar Borobudur: pilihan umum & arah setelah sunrise",
      meta: "Kopi dan kedai di sekitar Borobudur sebagai lanjutan setelah sunrise Punthuk Setumbu: arah umum, jam bervariasi, dan tips memilih.",
      h1: "Kopi di sekitar Borobudur",
      lead: "Kawasan Borobudur memiliki kedai kopi dan warung dengan suasana pagi. Jam buka bervariasi; konfirmasikan sebelum mengandalkan satu tempat.",
      updated: "Diperbarui 28 Oktober 2026 · tempat belum terverifikasi",
      sections: [
        {
          heading: "Arah umum",
          paragraphs: [
            "Setelah turun dari Punthuk Setumbu, arahkan ke kawasan Borobudur dan jalan utama menuju candi. Di sepanjang jalan sering terdapat kedai kopi dan warung pagi.",
            "Pilih kedai yang sudah buka saat Anda tiba; jangan menganggap semua tempat beroperasi sejak subuh.",
          ],
        },
        {
          heading: "Memilih kedai",
          paragraphs: [
            "Tidak semua kedai beroperasi dini hari. Cek ulasan terkini atau tanyakan kepada warga setempat mengenai yang sudah buka saat pagi.",
            "Untuk rombongan, pastikan tempat punya ruang duduk cukup dan tidak hanya layanan bawa pulang.",
          ],
        },
        {
          heading: "Catatan halal & menu",
          paragraphs: [
            "Sebagian besar kedai di kawasan ini menunya halal, tetapi jangan menganggap sertifikasi seragam. Tanyakan bila penting bagi Anda.",
          ],
        },
      ],
      faqs: [
        { q: "Apakah ada kopi dekat bukit?", a: "Lebih lengkap di kawasan Borobudur; bawa camilan dari penginapan bila butuh sebelum warung buka." },
        { q: "Apakah semua kedai buka subuh?", a: "Tidak. Jam bervariasi; konfirmasikan lewat ulasan terkini atau warga setempat." },
        { q: "Apakah menunya halal?", a: "Sebagian besar ya, tetapi jangan anggap seragam; tanyakan bila perlu." },
      ],
      related: ["food-after-sunrise", "magelang-food", "family-nearby", "rainy-day"],
    },
    en: {
      title: "Coffee around Borobudur: general options & direction after sunrise",
      meta: "Cafés and coffee around Borobudur as a follow-up after Punthuk Setumbu sunrise: general direction, varying hours, and choosing tips.",
      h1: "Coffee around Borobudur",
      lead: "The Borobudur area has coffee shops and warungs with a morning atmosphere. Hours vary; confirm before relying on one place.",
      updated: "Updated 28 October 2026 · places unverified",
      sections: [
        {
          heading: "General direction",
          paragraphs: [
            "After descending Punthuk Setumbu, head to the Borobudur area and the main road to the temple. Along the road you often find coffee shops and morning warungs.",
            "Choose a place already open when you arrive; do not assume everything operates from dawn.",
          ],
        },
        {
          heading: "Choosing a café",
          paragraphs: [
            "Not all cafés run early. Check recent reviews or ask locals about what is open in the morning.",
            "For groups, ensure the place has enough seating and is not takeaway-only.",
          ],
        },
        {
          heading: "Halal & menu notes",
          paragraphs: [
            "Most venues in this area serve halal menus, but do not assume uniform certification. Ask if it matters to you.",
          ],
        },
      ],
      faqs: [
        { q: "Is there coffee near the hill?", a: "More complete around Borobudur; bring a snack from your stay if needed before kiosks open." },
        { q: "Are all cafés open at dawn?", a: "No. Hours vary; confirm via recent reviews or locals." },
        { q: "Is the menu halal?", a: "Mostly yes, but do not assume uniform certification; ask if needed." },
      ],
      related: ["food-after-sunrise", "magelang-food", "family-nearby", "rainy-day"],
    },
  },

  {
    slug: "magelang-food",
    group: "food",
    id: {
      title: "Makanan khas Magelang & Borobudur: kuliner lokal untuk wisatawan",
      meta: "Ikhtisar kuliner Magelang dan Borobudur: jenis hidangan lokal, kapan menemukannya, dan catatan halal serta konfirmasi tempat.",
      h1: "Kuliner khas Magelang & Borobudur",
      lead: "Kawasan Magelang–Borobudur dikenal dengan hidangan rumahan Jawa dan jajanan pasar. Pilih berdasarkan selera dan konfirmasikan tempat serta jam buka.",
      updated: "Diperbarui 28 Oktober 2026 · konfirmasi tempat",
      sections: [
        {
          heading: "Jenis hidangan",
          paragraphs: [
            "Secara umum kawasan ini menawarkan nasi, sayur berkuah, ayam kampung, dan jajanan pasar khas Jawa. Hidangan rumahan sering ditemukan di warung keluarga daripada restoran besar.",
            "Kami tidak mencantumkan nama tempat tertentu karena dapat berubah; sebutan dan status buka harus dikonfirmasi secara langsung.",
          ],
        },
        {
          heading: "Kapan menemukannya",
          paragraphs: [
            "Sarapan dan makan siang lebih mudah ditemukan saat siang. Untuk pagi sangat awal setelah sunrise, andalkan warung di kawasan Borobudur yang sudah buka atau bawa camilan.",
          ],
        },
        {
          heading: "Catatan halal",
          paragraphs: [
            "Sebagian besar warung di sini halal, tetapi jangan menganggap sertifikasi seragam. Tanyakan bila penting bagi Anda.",
          ],
        },
      ],
      faqs: [
        { q: "Apa makanan khasnya?", a: "Hidangan rumahan Jawa dan jajanan pasar; warung keluarga lebih umum daripada restoran besar." },
        { q: "Apakah saya perlu reservasi?", a: "Umumnya tidak untuk warung kecil; restoran besar di Borobudur mungkin menerima reservasi." },
        { q: "Apakah halal?", a: "Sebagian besar ya, tetapi jangan anggap seragam; tanyakan bila perlu." },
      ],
      related: ["food-after-sunrise", "coffee-near-borobudur", "family-nearby"],
    },
    en: {
      title: "Magelang & Borobudur local food: regional dishes for visitors",
      meta: "An overview of Magelang and Borobudur cuisine: local dish types, when to find them, and halal notes plus place confirmation.",
      h1: "Magelang & Borobudur local food",
      lead: "The Magelang–Borobudur area is known for home-style Javanese dishes and market snacks. Choose by taste and confirm places and hours.",
      updated: "Updated 28 October 2026 · confirm places",
      sections: [
        {
          heading: "Dish types",
          paragraphs: [
            "Generally the area offers rice, soupy vegetables, free-range chicken, and Javanese market snacks. Home-style dishes are often found at family warungs rather than large restaurants.",
            "We do not list specific place names because they can change; names and opening status must be confirmed directly.",
          ],
        },
        {
          heading: "When to find them",
          paragraphs: [
            "Breakfast and lunch are easier to find in daylight. For very early morning after sunrise, rely on Borobudur-area warungs already open or bring a snack.",
          ],
        },
        {
          heading: "Halal notes",
          paragraphs: [
            "Most warungs here are halal, but do not assume uniform certification. Ask if it matters to you.",
          ],
        },
      ],
      faqs: [
        { q: "What is the local food?", a: "Home-style Javanese dishes and market snacks; family warungs are more common than large restaurants." },
        { q: "Do I need a reservation?", a: "Generally not for small warungs; larger Borobudur restaurants may accept reservations." },
        { q: "Is it halal?", a: "Mostly yes, but do not assume uniform certification; ask if needed." },
      ],
      related: ["food-after-sunrise", "coffee-near-borobudur", "family-nearby"],
    },
  },

  {
    slug: "nearby-overview",
    group: "nearby",
    id: {
      title: "Setelah Punthuk Setumbu: objek wisata sekitar Borobudur & Menoreh",
      meta: "Apa yang bisa dikunjungi setelah Punthuk Setumbu: ringkasan objek sekitar Borobudur, Menoreh, dan desa Karangrejo beserta prioritas.",
      h1: "Setelah Punthuk Setumbu ke mana?",
      lead: "Setelah sunrise, pilihan meliputi Candi Borobudur, Bukit Rhema, Bukit Barede, desa Karangrejo, dan wisata desa Menoreh. Pilih berdasarkan waktu dan tenaga.",
      updated: "Diperbarui 28 Oktober 2026",
      sections: [
        {
          heading: "Prioritas utama",
          paragraphs: [
            "Candi Borobudur adalah warisan budaya paling dikenal di kawasan ini dan sering jadi lanjutan alami setelah sunrise. Akses dan tiket terpisah; perhatikan jam buka resmi candi.",
            "Bukit Rhema (sering disebut Gereja Ayam) dan Bukit Barede adalah titik pandang lain di Menoreh yang bisa dipertimbangkan, masing-masing dengan akses dan tiket sendiri.",
          ],
        },
        {
          heading: "Desa & budaya",
          paragraphs: [
            "Desa Karangrejo dan desa wisata Menoreh menawarkan lanskap, kerajinan, dan kehidupan desa. Ini cocok bila Anda ingin memperlambat hari setelah pagi.",
            "Lihat halaman khusus untuk Karangrejo, kerajinan, dan bersepeda di sekitar Borobudur.",
          ],
        },
        {
          heading: "Cara memilih",
          paragraphs: [
            "Bila waktu terbatas, pilih satu objek utama. Bila sehari penuh, gabungkan sunrise, satu candi atau bukit, lalu desa dan kopi.",
          ],
        },
      ],
      faqs: [
        { q: "Objek apa paling dekat?", a: "Kawasan Borobudur dan bukit-bukit Menoreh; masing-masing dengan jarak dan akses berbeda." },
        { q: "Apakah Borobudur harus dikunjungi?", a: "Tidak wajib. Banyak yang hanya ingin sunrise; Borobudur opsional dengan tiket terpisah." },
        { q: "Bagaimana bila hujan?", a: "Lihat panduan aktivitas cadangan saat hujan di sekitar Borobudur." },
      ],
      related: ["borobudur-combo", "bukit-rhema", "bukit-barede", "karangrejo"],
    },
    en: {
      title: "After Punthuk Setumbu: attractions around Borobudur & Menoreh",
      meta: "What to visit after Punthuk Setumbu: a summary of Borobudur, Menoreh and Karangrejo surroundings with priorities.",
      h1: "After Punthuk Setumbu, where next?",
      lead: "After sunrise, options include Borobudur Temple, Bukit Rhema, Bukit Barede, Karangrejo village and Menoreh village tourism. Choose by time and energy.",
      updated: "Updated 28 October 2026",
      sections: [
        {
          heading: "Top priorities",
          paragraphs: [
            "Borobudur Temple is the best-known cultural heritage here and often a natural follow-up after sunrise. Access and tickets are separate; note the temple's official hours.",
            "Bukit Rhema (often called the Chicken Church) and Bukit Barede are other Menoreh viewpoints worth considering, each with its own access and tickets.",
          ],
        },
        {
          heading: "Villages & culture",
          paragraphs: [
            "Karangrejo village and Menoreh tourism villages offer landscape, crafts and village life. These suit slowing the day down after the morning.",
            "See dedicated pages for Karangrejo, crafts and cycling around Borobudur.",
          ],
        },
        {
          heading: "How to choose",
          paragraphs: [
            "If time is short, pick one main spot. For a full day, combine sunrise, one temple or hill, then village and coffee.",
          ],
        },
      ],
      faqs: [
        { q: "What is closest?", a: "The Borobudur area and Menoreh hills; each with different distance and access." },
        { q: "Must I visit Borobudur?", a: "Not required. Many only want sunrise; Borobudur is optional with separate tickets." },
        { q: "What if it rains?", a: "See the rainy-day alternatives guide around Borobudur." },
      ],
      related: ["borobudur-combo", "bukit-rhema", "bukit-barede", "karangrejo"],
    },
  },

  {
    slug: "borobudur-combo",
    group: "nearby",
    id: {
      title: "Punthuk Setumbu & Candi Borobudur: beda bukit pandang dan kompleks candi",
      meta: "Cara memadukan Punthuk Setumbu dan Candi Borobudur tanpa mencampuradukkan keduanya: urutan, tiket terpisah, dan penyangga waktu.",
      h1: "Punthuk Setumbu & Candi Borobudur",
      lead: "Punthuk Setumbu adalah bukit pandang di luar kompleks candi. Borobudur memiliki tiket, jam, dan aturan sendiri. Urutan umum: sunrise lalu candi saat terang.",
      updated: "Diperbarui 28 Oktober 2026 · tiket terpisah",
      sections: [
        {
          heading: "Beda keduanya",
          paragraphs: [
            "Punthuk Setumbu memberi pandangan ke arah Borobudur dari kejauhan; pengalaman di bukit bukan tiket masuk ke kompleks candi. Jangan menganggap satu tiket berlaku untuk keduanya.",
            "Borobudur adalah candi dengan aturan kunjungan, tiket, dan jam buka resmi. Periksa kanal resmi Borobudur untuk ketentuan terkini.",
          ],
        },
        {
          heading: "Urutan yang masuk akal",
          paragraphs: [
            "Banyak pengunjung melihat sunrise di Punthuk Setumbu lalu mengunjungi Candi Borobudur saat terang. Ini memberi cahaya baik di candi dan menghindari gelap saat naik struktur.",
            "Sisakan penyangga untuk tiket, antrean, dan jalan. Jangan menjadwalkan keduanya tanpa jeda.",
          ],
        },
        {
          heading: "Waktu",
          paragraphs: [
            "Kunjungan candi sendiri umumnya butuh beberapa jam. Gabungkan dengan sunrise dan Anda butuh setengah hingga satu hari penuh tergantung kecepatan.",
          ],
        },
      ],
      faqs: [
        { q: "Apakah satu tiket untuk keduanya?", a: "Tidak. Tiket Borobudur terpisah; Punthuk Setumbu bukan pintu masuk candi." },
        { q: "Urutan mana lebih baik?", a: "Sunrise di bukit lalu Borobudur saat terang adalah urutan umum yang masuk akal." },
        { q: "Berapa lama total?", a: "Setengah hingga satu hari penuh, tergantung kecepatan dan antrean candi." },
      ],
      related: ["after-sunrise-borobudur", "tickets", "hours", "nearby-overview"],
    },
    en: {
      title: "Punthuk Setumbu & Borobudur Temple: different viewpoint vs complex",
      meta: "How to combine Punthuk Setumbu and Borobudur Temple without mixing them: order, separate tickets, and time buffer.",
      h1: "Punthuk Setumbu & Borobudur Temple",
      lead: "Punthuk Setumbu is a viewpoint outside the temple complex. Borobudur has its own tickets, hours and rules. A common order: sunrise then the temple in daylight.",
      updated: "Updated 28 October 2026 · separate tickets",
      sections: [
        {
          heading: "How they differ",
          paragraphs: [
            "Punthuk Setumbu gives a distant view toward Borobudur; the hill experience is not entry to the temple complex. Do not assume one ticket covers both.",
            "Borobudur is a temple with visit rules, tickets and official hours. Check the official Borobudur channel for current terms.",
          ],
        },
        {
          heading: "A sensible order",
          paragraphs: [
            "Many visitors watch sunrise at Punthuk Setumbu then visit Borobudur Temple in daylight. This gives good light at the temple and avoids darkness on the structure.",
            "Keep a buffer for tickets, queues and travel. Do not schedule both without a gap.",
          ],
        },
        {
          heading: "Timing",
          paragraphs: [
            "The temple alone usually takes a few hours. Combined with sunrise you need half to a full day depending on pace.",
          ],
        },
      ],
      faqs: [
        { q: "Is one ticket for both?", a: "No. Borobudur ticket is separate; Punthuk Setumbu is not a temple entrance." },
        { q: "Which order is better?", a: "Sunrise at the hill then Borobudur in daylight is the common, sensible order." },
        { q: "How long total?", a: "Half to a full day, depending on pace and temple queues." },
      ],
      related: ["after-sunrise-borobudur", "tickets", "hours", "nearby-overview"],
    },
  },

  {
    slug: "bukit-rhema",
    group: "nearby",
    id: {
      title: "Punthuk Setumbu & Bukit Rhema (Gereja Ayam): hubungan & rute",
      meta: "Punthuk Setumbu dan Bukit Rhema (Gereja Ayam) sebagai kombinasi: jarak perkiraan, status buka, dan pemisahan akses masing-masing.",
      h1: "Punthuk Setumbu & Bukit Rhema",
      lead: "Bukit Rhema, yang sering disebut Gereja Ayam, adalah objek terpisah di Menoreh. Konfirmasikan alamat, rute, akses, dan tiketnya sendiri sebelum menambahkannya.",
      updated: "Diperbarui 28 Oktober 2026 · akses belum terverifikasi",
      sections: [
        {
          heading: "Apa itu Bukit Rhema",
          paragraphs: [
            "Bukit Rhema adalah bangunan berbentuk unik di kawasan Menoreh yang sering dihubungkan dengan wisata sunrise Borobudur. Pendekatan dan pengalaman berbeda dari Punthuk Setumbu.",
            "Panduan ini belum memverifikasi jalur penghubung atau izin masuk saat ini. Perlakukan sebagai objek terpisah.",
          ],
        },
        {
          heading: "Rute & status",
          paragraphs: [
            "Konfirmasikan alamat, rute jalan, status buka, dan tarif kepada pengelola atau kanal resmi sebelum menambahkannya ke perjalanan.",
            "Jangan menganggap tiket atau jadwal Punthuk Setumbu berlaku juga di sini.",
          ],
        },
        {
          heading: "Cocok untuk siapa",
          paragraphs: [
            "Cocok bagi yang ingin variasi arsitektur dan lanskap setelah sunrise. Sesuaikan dengan waktu dan tenaga rombongan.",
          ],
        },
      ],
      faqs: [
        { q: "Apakah Gereja Ayam sama dengan Bukit Rhema?", a: "Ya, sebutan Gereja Ayam merujuk Bukit Rhema, objek terpisah di Menoreh." },
        { q: "Berapa jauh dari Punthuk Setumbu?", a: "Tidak terverifikasi; konfirmasikan rute dengan pengemudi karena keduanya di kawasan Menoreh." },
        { q: "Apakah satu tiket?", a: "Tidak. Akses dan tiket terpisah; konfirmasikan masing-masing." },
      ],
      related: ["bukit-barede", "viewpoints", "nearby-overview", "karangrejo"],
    },
    en: {
      title: "Punthuk Setumbu & Bukit Rhema (Chicken Church): relation & route",
      meta: "Punthuk Setumbu and Bukit Rhema (Chicken Church) as a combo: rough distance, opening status, and keeping each access separate.",
      h1: "Punthuk Setumbu & Bukit Rhema",
      lead: "Bukit Rhema, often called the Chicken Church, is a separate Menoreh attraction. Confirm its address, route, access and tickets independently before adding it.",
      updated: "Updated 28 October 2026 · access unverified",
      sections: [
        {
          heading: "What is Bukit Rhema",
          paragraphs: [
            "Bukit Rhema is a uniquely shaped building in the Menoreh area often linked with Borobudur sunrise tourism. Its approach and experience differ from Punthuk Setumbu.",
            "This guide has not verified a connecting path or current admission. Treat it as a separate attraction.",
          ],
        },
        {
          heading: "Route & status",
          paragraphs: [
            "Confirm the address, road route, opening status and fee with management or official channels before adding it to your trip.",
            "Do not assume Punthuk Setumbu tickets or schedule also apply here.",
          ],
        },
        {
          heading: "Who it suits",
          paragraphs: [
            "Suited to those wanting architectural and landscape variety after sunrise. Match it to your group's time and energy.",
          ],
        },
      ],
      faqs: [
        { q: "Is the Chicken Church the same as Bukit Rhema?", a: "Yes, the Chicken Church name refers to Bukit Rhema, a separate Menoreh attraction." },
        { q: "How far from Punthuk Setumbu?", a: "Unverified; confirm the route with your driver as both are in the Menoreh area." },
        { q: "Is one ticket?", a: "No. Access and tickets are separate; confirm each." },
      ],
      related: ["bukit-barede", "viewpoints", "nearby-overview", "karangrejo"],
    },
  },

  {
    slug: "bukit-barede",
    group: "nearby",
    id: {
      title: "Punthuk Setumbu vs Bukit Barede: bandingkan panorama & akses",
      meta: "Membandingkan Punthuk Setumbu dan Bukit Barede: panorama, intensitas, dan akses. Tidak menjanjikan pemandangan sunrise terjamin.",
      h1: "Punthuk Setumbu vs Bukit Barede",
      lead: "Bukit Barede adalah titik pandang lain di Menoreh yang kadang dibandingkan dengan Punthuk Setumbu. Konfirmasikan lokasi, status buka, rute, dan tiket sebelum memilih.",
      updated: "Diperbarui 28 Oktober 2026 · belum terverifikasi",
      sections: [
        {
          heading: "Perbedaan pandangan",
          paragraphs: [
            "Keduanya menawarkan lanskap Menoreh, tetapi sudut dan ketinggian berbeda. Kami tidak memverifikasi mana yang memberi pemandangan lebih baik; itu bergantung cuaca dan arah cahaya.",
            "Jangan menganggap salah satu menjamin sunrise atau Borobudur terlihat. Kabut dapat memengaruhi keduanya.",
          ],
        },
        {
          heading: "Akses & tiket",
          paragraphs: [
            "Konfirmasikan lokasi, status buka, rute, dan tarif Bukit Barede secara terpisah. Jangan menganggap tiket atau jadwal Punthuk Setumbu berlaku di sana.",
          ],
        },
        {
          heading: "Cocok untuk siapa",
          paragraphs: [
            "Bila Anda ingin membandingkan sudut pandang atau menghindari keramaian, Bukit Barede bisa dipertimbangkan. Sesuaikan dengan waktu dan tenaga.",
          ],
        },
      ],
      faqs: [
        { q: "Lebih bagus mana?", a: "Tidak dapat kami pastikan; bergantung cuaca dan arah cahaya. Keduanya bisa tertutup kabut." },
        { q: "Apakah satu tiket?", a: "Tidak. Akses terpisah; konfirmasikan masing-masing." },
        { q: "Di mana letaknya?", a: "Di kawasan Menoreh; konfirmasikan pin peta dan rute dengan pengemudi." },
      ],
      related: ["bukit-rhema", "viewpoints", "nearby-overview", "photography"],
    },
    en: {
      title: "Punthuk Setumbu vs Bukit Barede: compare views & access",
      meta: "Comparing Punthuk Setumbu and Bukit Barede: views, intensity, and access. No guaranteed sunrise view promised.",
      h1: "Punthuk Setumbu vs Bukit Barede",
      lead: "Bukit Barede is another Menoreh viewpoint sometimes compared with Punthuk Setumbu. Confirm location, opening status, route and tickets before choosing.",
      updated: "Updated 28 October 2026 · unverified",
      sections: [
        {
          heading: "View differences",
          paragraphs: [
            "Both offer Menoreh landscapes, but angle and elevation differ. We do not verify which gives the better view; it depends on weather and light direction.",
            "Do not assume either guarantees sunrise or Borobudur visibility. Mist can affect both.",
          ],
        },
        {
          heading: "Access & tickets",
          paragraphs: [
            "Confirm Bukit Barede's location, opening status, route and fee separately. Do not assume Punthuk Setumbu tickets or schedule apply there.",
          ],
        },
        {
          heading: "Who it suits",
          paragraphs: [
            "If you want to compare angles or avoid crowds, Bukit Barede can be considered. Match it to your time and energy.",
          ],
        },
      ],
      faqs: [
        { q: "Which is better?", a: "We cannot say; it depends on weather and light direction. Both can be mist-covered." },
        { q: "Is one ticket?", a: "No. Access is separate; confirm each." },
        { q: "Where is it?", a: "In the Menoreh area; confirm the map pin and route with your driver." },
      ],
      related: ["bukit-rhema", "viewpoints", "nearby-overview", "photography"],
    },
  },

  {
    slug: "karangrejo",
    group: "nearby",
    id: {
      title: "Desa Karangrejo & wisata desa di sekitar Punthuk Setumbu",
      meta: "Karangrejo sebagai desa wisata di sekitar Punthuk Setumbu: konteks, aktivitas mungkin, dan cara mengonfirmasi penyediaan layanan.",
      h1: "Desa Karangrejo & sekitarnya",
      lead: "Karangrejo adalah desa tempat Punthuk Setumbu berada, dalam kawasan desa wisata Menoreh. Aktivitas bergantung penyelenggara lokal; konfirmasikan sebelum datang.",
      updated: "Diperbarui 28 Oktober 2026 · aktivitas konfirmasi",
      sections: [
        {
          heading: "Konteks desa",
          paragraphs: [
            "Punthuk Setumbu berada di Kurahan, Karangrejo, yang masuk dalam jaringan desa wisata Menoreh menurut kanal pariwisata nasional. Ini menunjukkan basis desa, bukan objek komersial besar.",
            "Jadesta mencantumkan Karangrejo sebagai lokasi atraksi, mengonfirmasi konteks desa wisata.",
          ],
        },
        {
          heading: "Aktivitas mungkin",
          paragraphs: [
            "Desa wisata Menoreh umumnya menawarkan lanskap, kerajinan, dan kehidupan desa. Aktivitas spesifik, jadwal, dan cara pesan bergantung penyelenggara lokal dan dapat berubah.",
            "Kami tidak mencantumkan nama paket tertentu. Tanyakan kepada pengelola desa atau kanal resmi mengenai yang tersedia saat kedatangan Anda.",
          ],
        },
        {
          heading: "Transportasi",
          paragraphs: [
            "Akses desa dengan kendaraan pribadi atau sewa lebih mudah. Untuk dini hari, atur kendaraan yang mencakup penjemputan kembali.",
          ],
        },
      ],
      faqs: [
        { q: "Di mana Punthuk Setumbu berada?", a: "Di Kurahan, Karangrejo, Borobudur, Magelang, dalam kawasan desa wisata Menoreh." },
        { q: "Apakah ada paket desa?", a: "Tergantung penyelenggara lokal; konfirmasikan dengan pengelola desa atau kanal resmi." },
        { q: "Apakah perlu reservasi?", a: "Untuk aktivitas tertentu mungkin; tanyakan penyelenggara sebelum datang." },
      ],
      related: ["nearby-overview", "crafts", "cycling", "family-nearby"],
    },
    en: {
      title: "Karangrejo village & village tourism around Punthuk Setumbu",
      meta: "Karangrejo as a tourism village around Punthuk Setumbu: context, possible activities, and how to confirm service provision.",
      h1: "Karangrejo village & surroundings",
      lead: "Karangrejo is the village where Punthuk Setumbu sits, within the Menoreh tourism-village network. Activities depend on local providers; confirm before coming.",
      updated: "Updated 28 October 2026 · confirm activities",
      sections: [
        {
          heading: "Village context",
          paragraphs: [
            "Punthuk Setumbu is in Kurahan, Karangrejo, within the Menoreh tourism-village network per national tourism channels. This shows a village base, not a large commercial object.",
            "Jadesta lists Karangrejo as the attraction location, confirming the tourism-village context.",
          ],
        },
        {
          heading: "Possible activities",
          paragraphs: [
            "Menoreh tourism villages generally offer landscape, crafts and village life. Specific activities, schedules and booking depend on local providers and can change.",
            "We do not list specific package names. Ask village management or official channels about what is available on your arrival.",
          ],
        },
        {
          heading: "Transport",
          paragraphs: [
            "Village access is easier by private or hired vehicle. For pre-dawn, arrange a vehicle that includes a return pickup.",
          ],
        },
      ],
      faqs: [
        { q: "Where is Punthuk Setumbu?", a: "In Kurahan, Karangrejo, Borobudur, Magelang, within the Menoreh tourism-village area." },
        { q: "Are there village packages?", a: "Depends on local providers; confirm with village management or official channels." },
        { q: "Do I need a reservation?", a: "Possibly for specific activities; ask the provider before coming." },
      ],
      related: ["nearby-overview", "crafts", "cycling", "family-nearby"],
    },
  },

  {
    slug: "cycling",
    group: "nearby",
    id: {
      title: "Bersepeda & wisata desa di sekitar Borobudur dari Punthuk Setumbu",
      meta: "Opsi bersepeda dan jelajah desa di sekitar Borobudur sebagai lanjutan setelah sunrise: medan, penyewaan, dan konfirmasi operator.",
      h1: "Bersepeda & wisata desa",
      lead: "Kawasan Borobudur dan desa Menoreh cocok untuk bersepeda santai di siang hari. Penyewaan dan rute bergantung operator lokal; konfirmasikan sebelum datang.",
      updated: "Diperbarui 28 Oktober 2026 · operator konfirmasi",
      sections: [
        {
          heading: "Mengapa siang hari",
          paragraphs: [
            "Bersepeda lebih nyaman saat terang dan bukan saat fajar dingin. Jadikan ini lanjutan setelah sunrise atau aktivitas terpisah di siang hari.",
            "Jalur desa bergelombang; pilih rute sesuai kebugaran. Jangan menganggap jalur mulus sepanjang jalan.",
          ],
        },
        {
          heading: "Penyewaan & rute",
          paragraphs: [
            "Kami tidak memverifikasi penyewaan sepeda tertentu. Tanyakan kepada penginapan atau operator wisata lokal di Borobudur mengenai ketersediaan dan rute aman.",
            "Konfirmasikan apakah rute menyambung ke desa Karangrejo atau Menoreh lain, dan berapa jarak perkiraannya.",
          ],
        },
        {
          heading: "Keamanan",
          paragraphs: [
            "Gunakan alat pelindung, bawa air, dan hindari jalan besar saat ramai. Jangan memaksa rute panjang bila cuaca buruk.",
          ],
        },
      ],
      faqs: [
        { q: "Apakah bisa bersepeda dari bukit?", a: "Lebih baik di siang hari dari kawasan Borobudur; jangan saat fajar gelap." },
        { q: "Di mana menyewa?", a: "Tanyakan penginapan atau operator lokal; kami tidak memverifikasi penyewaan tertentu." },
        { q: "Apakah rute aman?", a: "Jalur desa bergelombang; pilih sesuai kebugaran dan konfirmasikan rute aman." },
      ],
      related: ["karangrejo", "crafts", "family-nearby", "rainy-day"],
    },
    en: {
      title: "Cycling & village tours around Borobudur from Punthuk Setumbu",
      meta: "Cycling and village exploration around Borobudur as a follow-up after sunrise: terrain, rental, and operator confirmation.",
      h1: "Cycling & village tours",
      lead: "The Borobudur area and Menoreh villages suit relaxed cycling in daylight. Rental and routes depend on local operators; confirm before coming.",
      updated: "Updated 28 October 2026 · confirm operators",
      sections: [
        {
          heading: "Why daytime",
          paragraphs: [
            "Cycling is more comfortable in daylight, not the cold dawn. Make it a follow-up after sunrise or a separate daytime activity.",
            "Village roads undulate; choose a route by fitness. Do not assume smooth roads throughout.",
          ],
        },
        {
          heading: "Rental & routes",
          paragraphs: [
            "We have not verified specific bike rentals. Ask your accommodation or local Borobudur operators about availability and safe routes.",
            "Confirm whether routes connect to Karangrejo or other Menoreh villages, and the rough distance.",
          ],
        },
        {
          heading: "Safety",
          paragraphs: [
            "Use protection, carry water, and avoid busy main roads at peak times. Do not force a long route in bad weather.",
          ],
        },
      ],
      faqs: [
        { q: "Can I cycle from the hill?", a: "Better in daylight from the Borobudur area; not during the dark dawn." },
        { q: "Where to rent?", a: "Ask your accommodation or local operators; we have not verified specific rentals." },
        { q: "Are routes safe?", a: "Village roads undulate; choose by fitness and confirm safe routes." },
      ],
      related: ["karangrejo", "crafts", "family-nearby", "rainy-day"],
    },
  },

  {
    slug: "crafts",
    group: "nearby",
    id: {
      title: "Kerajinan & budaya di sekitar Borobudur: konteks & cara mengonfirmasi",
      meta: "Kerajinan tangan dan pengalaman budaya di sekitar Borobudur sebagai lanjutan setelah Punthuk Setumbu: konteks, jenis, dan verifikasi penyelenggara.",
      h1: "Kerajinan & budaya sekitar Borobudur",
      lead: "Kawasan Borobudur–Menoreh memiliki tradisi kerajinan dan kehidupan desa. Jenis, lokasi, dan jadwal bergantung penyelenggara lokal; konfirmasikan sebelum datang.",
      updated: "Diperbarui 28 Oktober 2026 · penyelenggara konfirmasi",
      sections: [
        {
          heading: "Konteks budaya",
          paragraphs: [
            "Kawasan di sekitar Borobudur dikenal dengan kerajinan tangan dan warisan budaya Jawa. Ini bagian dari pengalaman desa, bukan atraksi tunggal berpagar.",
            "Kami menyajikan konteks umum; kami tidak mencantumkan nama sanggar atau toko tertentu yang dapat berubah.",
          ],
        },
        {
          heading: "Jenis kegiatan",
          paragraphs: [
            "Contoh umum meliputi kerajinan, kuliner rumahan, dan aktivitas desa. Yang tersedia saat kedatangan Anda bergantung penyelenggara lokal dan musim.",
            "Tanyakan kepada pengelola desa atau kanal resmi mengenai kegiatan yang benar-benar beroperasi.",
          ],
        },
        {
          heading: "Cara mengonfirmasi",
          paragraphs: [
            "Jangan mengandalkan daftar lama. Konfirmasikan lokasi, harga, dan jadwal langsung, atau lewat ulasan terkini sebelum mengandalkan satu tempat.",
          ],
        },
      ],
      faqs: [
        { q: "Apa kerajinan khasnya?", a: "Umumnya kerajinan tangan dan warisan budaya Jawa; jenis bergantung penyelenggara lokal." },
        { q: "Apakah ada sanggar tertentu?", a: "Tidak kami cantumkan karena dapat berubah; tanyakan pengelola desa atau kanal resmi." },
        { q: "Perlu reservasi?", a: "Untuk kegiatan tertentu mungkin; konfirmasikan penyelenggara." },
      ],
      related: ["karangrejo", "cycling", "family-nearby", "nearby-overview"],
    },
    en: {
      title: "Handicrafts & culture around Borobudur: context & verification",
      meta: "Handicrafts and cultural experiences around Borobudur as a follow-up after Punthuk Setumbu: context, types, and provider verification.",
      h1: "Crafts & culture around Borobudur",
      lead: "The Borobudur–Menoreh area has handicraft traditions and village life. Types, locations and schedules depend on local providers; confirm before coming.",
      updated: "Updated 28 October 2026 · confirm providers",
      sections: [
        {
          heading: "Cultural context",
          paragraphs: [
            "The area around Borobudur is known for handcrafts and Javanese cultural heritage. This is part of the village experience, not a single fenced attraction.",
            "We present general context; we do not list specific workshops or shops that may change.",
          ],
        },
        {
          heading: "Activity types",
          paragraphs: [
            "Common examples include handicrafts, home cooking and village activities. What is available on your arrival depends on local providers and season.",
            "Ask village management or official channels about what is actually operating.",
          ],
        },
        {
          heading: "How to verify",
          paragraphs: [
            "Do not rely on old listings. Confirm location, price and schedule directly, or via recent reviews, before relying on one place.",
          ],
        },
      ],
      faqs: [
        { q: "What are the local crafts?", a: "Generally handcrafts and Javanese cultural heritage; types depend on local providers." },
        { q: "Are there specific workshops?", a: "We do not list them because they can change; ask village management or official channels." },
        { q: "Do I need a reservation?", a: "Possibly for specific activities; confirm with the provider." },
      ],
      related: ["karangrejo", "cycling", "family-nearby", "nearby-overview"],
    },
  },
];
