// Punthuk Setumbu topic content (part A: topics 1-12). Types are defined here and re-exported.

export type Language = "id" | "en";
export type TopicGroup = "sunrise" | "prepare" | "transport" | "food" | "nearby" | "itinerary";

export interface TopicSection {
  heading: string;
  paragraphs: string[];
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicContent {
  title: string;
  meta: string;
  h1: string;
  lead: string;
  updated: string;
  facts?: [string, string][];
  sections: TopicSection[];
  faqs: TopicFaq[];
  related: string[];
}

export interface Topic {
  slug: string;
  group: TopicGroup;
  id: TopicContent;
  en: TopicContent;
}

export const topicsA: Topic[] = [
  {
    slug: "sunrise-guide",
    group: "sunrise",
    id: {
      title: "Panduan sunrise Punthuk Setumbu: kapan berangkat & apa yang mungkin terlihat",
      meta: "Cara merencanakan kunjungan fajar ke Punthuk Setumbu: waktu berangkat, pengalaman di bukit, dan rencana cadangan bila cuaca mendung.",
      h1: "Panduan sunrise Punthuk Setumbu",
      lead: "Datanglah sebelum langit berubah warna, bukan untuk menjamin pemandangan. Siapkan waktu berangkat, cek cuaca, dan biarkan kabut menjadi bagian dari pengalaman.",
      updated: "Diperbarui 28 Oktober 2026 · konfirmasi akses sebelum berangkat",
      sections: [
        {
          heading: "Kapan sebaiknya tiba",
          paragraphs: [
            "Matahari di Magelang terbit sekitar pukul 05.30–05.45 WIB pada bulan-bulan netral, tetapi waktu ini bergeser tiap musim. Untuk fajar, rencanakan tiba di area parkir 45–75 menit sebelum matahari terbit agar sempat jalan menanjak, menemukan titik pandang, dan menunggu cahaya pertama.",
            "Waktu berjalan dari parkir ke titik pandang bergantung kondisi jalur dan kecepatan rombongan; jangan menganggap jalur bebas tangga. Tambahkan penyangga waktu untuk pemeriksaan tiket dan antrean bila ada.",
            "Pintu masuk dan jam akses fajar tidak ditampilkan di Google Maps saat pemeriksaan 28 Oktober 2026. Tanyakan langsung kepada pengelola sebelum mengatur perjalanan gelap.",
          ],
        },
        {
          heading: "Apa yang mungkin terlihat",
          paragraphs: [
            "Punthuk Setumbu menawarkan pandangan ke arah Candi Borobudur, Dataran Kedu, dan siluet Merapi–Merbabu. Pada pagi cerah, sinar pertama dapat menyapu candi dan lembah; pada pagi berkabut, lanskap berubah menjadi lapisan bukit yang samar.",
            "Kabut bukan kegagalan kunjungan. Banyak pengunjung justru menyukai nuansa lapisan awan di atas lembah Menoreh. Borobudur, Merapi, Merbabu, dan matahari tidak dijanjikan akan terlihat.",
          ],
        },
        {
          heading: "Bila cuaca buruk",
          paragraphs: [
            "Hujan atau kabut tebal dapat menutup pandangan sepenuhnya. Siapkan rencana cadangan: lanjutkan ke Borobudur saat siang cerah, jelajahi desa Karangrejo, atau nikmati kopi di kawasan Borobudur sambil menunggu cerah.",
            "Pantau prakiraan cuaca untuk Borobudur/Magelang pada malam sebelumnya dan beberapa jam sebelum berangkat. Jangan mengandalkan kepastian langit cerah.",
          ],
        },
      ],
      faqs: [
        { q: "Apakah matahari terbit dan Borobudur pasti terlihat?", a: "Tidak. Awan, kabut, dan jarak pandang berubah cepat. Kabut adalah bagian dari pengalaman lanskap, tetapi dapat menutup pandangan ke candi maupun gunung." },
        { q: "Jam berapa matahari terbit di sini?", a: "Biasanya sekitar 05.30–05.45 WIB, namun bergeser tiap musim. Cek waktu matahari terbit setempat untuk tanggal kunjungan Anda dan tiba lebih awal." },
        { q: "Apakah aman jalan saat gelap?", a: "Untuk perjalanan dini hari, gunakan senter kecil atau lampu ponsel, berjalan bersama rombongan bila memungkinkan, dan ikuti arahan pengelola." },
      ],
      related: ["photography", "weather", "hours", "getting-there"],
    },
    en: {
      title: "Punthuk Setumbu sunrise guide: when to leave & what you might see",
      meta: "How to plan a dawn visit to Punthuk Setumbu: departure time, the on-site experience, and a backup plan when the weather is cloudy.",
      h1: "Punthuk Setumbu sunrise guide",
      lead: "Arrive before the sky changes colour, not to guarantee a view. Plan your departure, check the weather, and let the mist be part of the experience.",
      updated: "Updated 28 October 2026 · confirm access before departure",
      sections: [
        {
          heading: "When you should arrive",
          paragraphs: [
            "The sun rises around 05:30–05:45 WIB in neutral months near Magelang, but this shifts through the seasons. For dawn, aim to reach the parking area 45–75 minutes before sunrise so you have time for the uphill walk, finding a viewpoint, and waiting for first light.",
            "Walking time from the car park to the viewpoint depends on trail conditions and your group's pace; do not assume a step-free route. Add buffer time for any ticket check and queue.",
            "Entrance and pre-dawn access hours were not shown on Google Maps at the 28 October 2026 check. Ask local management directly before arranging travel in the dark.",
          ],
        },
        {
          heading: "What you might see",
          paragraphs: [
            "Punthuk Setumbu looks toward Borobudur Temple, the Kedu Plain, and the Merapi–Merbabu silhouettes. On a clear morning, first light can sweep across the temple and valley; on a misty morning, the landscape becomes soft layers of Menoreh hills.",
            "Mist is not a failed visit. Many visitors enjoy the layered cloud above the Menoreh valley. Borobudur, Merapi, Merbabu and the sunrise are never promised to be visible.",
          ],
        },
        {
          heading: "If the weather is poor",
          paragraphs: [
            "Rain or thick fog can hide the view completely. Prepare a backup: continue to Borobudur in clearer daylight, explore Karangrejo village, or enjoy coffee around Borobudur while waiting for clearer skies.",
            "Check the Borobudur/Magelang forecast the night before and a few hours before leaving. Do not rely on a guaranteed clear sky.",
          ],
        },
      ],
      faqs: [
        { q: "Are sunrise and Borobudur guaranteed to be visible?", a: "No. Cloud, mist and visibility shift quickly. Mist is part of the landscape experience, but can conceal the temple and mountains." },
        { q: "What time does the sun rise here?", a: "Usually around 05:30–05:45 WIB, but it shifts with the seasons. Check local sunrise time for your visit date and arrive earlier." },
        { q: "Is it safe to walk in the dark?", a: "For pre-dawn travel, use a small torch or phone light, walk with companions where practical, and follow on-site staff guidance." },
      ],
      related: ["photography", "weather", "hours", "getting-there"],
    },
  },

  {
    slug: "photography",
    group: "sunrise",
    id: {
      title: "Panduan fotografi sunrise Punthuk Setumbu: arah, kabut & etika",
      meta: "Tips memotret matahari terbit di Punthuk Setumbu: arah cahaya, kondisi kabut, perlengkapan, serta keselamatan dan etika di bukit pandang umum.",
      h1: "Fotografi sunrise di Punthuk Setumbu",
      lead: "Cahaya pertama datang dari arah timur–tenggara, di mana Borobudur dan lembah Kedu berada. Kabut sering justru memberi lapisan foto yang khas.",
      updated: "Diperbarui 28 Oktober 2026 · pandangan tidak dijamin",
      sections: [
        {
          heading: "Arah dan momen",
          paragraphs: [
            "Bukit pandang menghadap ke timur–tenggara, arah matahari terbit dan Candi Borobudur. Saat langit cerah, menit-menit setelah matahari muncul memberi cahaya hangat ke atas candi dan lembah.",
            "Jangan hanya menunggu satu frame. Menit sebelum dan sesudah terbit sering memberi warna paling kaya, dan kabut yang bergerak memberi variasi tiap detik.",
          ],
        },
        {
          heading: "Perlengkapan praktis",
          paragraphs: [
            "Bawa telepon atau kamera dengan stabilisasi, serta lapisan pakaian hangat karena pagi pegunungan dingin. Tripod membantu cahaya redup, tetapi perhatikan ruang agar tidak menghalangi pengunjung lain.",
            "Baterai dan memori sering luput dipersiapkan saat gelap. Isi daya dan kosongkan memori sebelum berangkat dari penginapan.",
          ],
        },
        {
          heading: "Etika dan keselamatan",
          paragraphs: [
            "Punthuk Setumbu adalah titik pandang umum, bukan studio pribadi. Beri ruang pengunjung lain, jangan mendesak ke tepi tebing, dan ikuti arahan pengelola.",
            "Gunakan lampu redup saat menyusun gambar sebelum terang. Hindari sorot lampu terang ke wajah orang lain.",
          ],
        },
      ],
      faqs: [
        { q: "Ke arah mana saya menghadap untuk memotret Borobudur?", a: "Ke timur–tenggara, arah matahari terbit. Candi Borobudur berada di lembah di sisi itu." },
        { q: "Apakah saya butuh teleobjektif?", a: "Tidak wajib. Telephoto membantu mendekatkan candi, tetapi lanskap lembah dan kabut juga kuat dengan lensa lebar." },
        { q: "Apakah drone diperbolehkan?", a: "Aturan drone bergantung pengelola dan zona udara setempat. Konfirmasikan sebelum membawa drone; jangan menganggap diperbolehkan." },
      ],
      related: ["sunrise-guide", "what-to-bring", "weather"],
    },
    en: {
      title: "Punthuk Setumbu sunrise photography guide: direction, mist & etiquette",
      meta: "Tips for photographing sunrise at Punthuk Setumbu: light direction, mist conditions, gear, plus safety and etiquette at a public viewpoint.",
      h1: "Sunrise photography at Punthuk Setumbu",
      lead: "First light comes from the east–southeast, where Borobudur and the Kedu Plain sit. Mist often gives the photos their characteristic layered look.",
      updated: "Updated 28 October 2026 · views not guaranteed",
      sections: [
        {
          heading: "Direction and timing",
          paragraphs: [
            "The viewpoint faces east–southeast, toward the sunrise and Borobudur Temple. On clear mornings, the minutes after the sun appears give warm light across the temple and valley.",
            "Do not wait for a single frame. The minutes before and after sunrise often carry the richest colour, and moving mist varies the scene every second.",
          ],
        },
        {
          heading: "Practical gear",
          paragraphs: [
            "Bring a phone or camera with stabilisation, plus a warm layer because mountain mornings are cold. A tripod helps in low light, but mind the space so you do not block others.",
            "Batteries and storage are easy to forget in the dark. Charge and clear memory before leaving your accommodation.",
          ],
        },
        {
          heading: "Etiquette and safety",
          paragraphs: [
            "Punthuk Setumbu is a public viewpoint, not a private studio. Give others room, do not crowd the cliff edge, and follow staff guidance.",
            "Use dim light while composing before daylight. Avoid shining bright lights into other people's faces.",
          ],
        },
      ],
      faqs: [
        { q: "Which way do I face to photograph Borobudur?", a: "East–southeast, toward the sunrise. Borobudur Temple sits in the valley on that side." },
        { q: "Do I need a telephoto lens?", a: "Not required. A telephoto helps bring the temple closer, but the valley and mist also work well with a wide lens." },
        { q: "Are drones allowed?", a: "Drone rules depend on management and local airspace. Confirm before bringing one; do not assume permission." },
      ],
      related: ["sunrise-guide", "what-to-bring", "weather"],
    },
  },

  {
    slug: "tickets",
    group: "prepare",
    id: {
      title: "Tiket & biaya Punthuk Setumbu: tarif, parkir & hal yang perlu dikonfirmasi",
      meta: "Ringkasan tiket masuk, parkir, dan biaya lain di Punthuk Setumbu. Tarif belum terverifikasi; tanyakan langsung sebelum membayar.",
      h1: "Tiket & biaya Punthuk Setumbu",
      lead: "Tidak ada daftar harga resmi yang terverifikasi untuk kunjungan ini. Tanyakan tarif berlaku, kategori tiket, parkir, dan layanan tambahan kepada pengelola sebelum membayar.",
      updated: "Diperbarui 28 Oktober 2026 · tarif belum terverifikasi",
      facts: [["Tiket", "Tanyakan tarif hari ini"], ["Parkir", "Konfirmasi lokasi & biaya"], ["Tiket Borobudur", "Terpisah, aturan sendiri"]],
      sections: [
        {
          heading: "Mengapa harganya belum kami tulis",
          paragraphs: [
            "Situs panduan ini merangkum dari sumber terbuka, tetapi tarif masuk, kategori tiket, dan biaya parkir untuk Punthuk Setumbu tidak ditampilkan di kanal publik yang dapat diperiksa saat pemeriksaan 28 Oktober 2026.",
            "Menulis angka yang tidak pasti dapat menyesatkan. Lebih baik Anda menanyakan harga untuk rombongan Anda, parkir, layanan tambahan, dan ketentuan pemesanan langsung kepada pengelola di lokasi.",
          ],
        },
        {
          heading: "Apa yang perlu ditanyakan",
          paragraphs: [
            "Tanyakan apakah ada tiket terpisah untuk dewasa/anak atau warga lokal, apakah parkir sudah termasuk, dan apakah ada layanan tambahan seperti warung atau pemandu.",
            "Jika Anda juga akan ke Candi Borobudur, ingat bahwa tiket kompleks candi terpisah dan memiliki aturan serta harga sendiri. Punthuk Setumbu bukan pintu masuk Borobudur.",
          ],
        },
        {
          heading: "Cara membayar",
          paragraphs: [
            "Siapkan uang tunai dalam pecahan kecil; titik pandang desa kecil sering tidak menerima kartu atau pembayaran nirkontak. Konfirmasikan cara pembayaran yang diterima saat tiba.",
          ],
        },
      ],
      faqs: [
        { q: "Berapa harga tiket Punthuk Setumbu?", a: "Belum terverifikasi. Tanyakan tarif berlaku kepada pengelola di lokasi sebelum membayar; jangan mengandalkan angka dari panduan lama." },
        { q: "Apakah tiket Punthuk Setumbu sama dengan Borobudur?", a: "Tidak. Punthuk Setumbu adalah titik pandang di luar kompleks Candi Borobudur. Akses, jam, dan biaya perlu dipastikan masing-masing." },
        { q: "Apakah parkir sudah termasuk tiket?", a: "Tidak dijamin. Konfirmasikan lokasi, jam akses, dan biaya parkir serta ruang untuk jenis kendaraan Anda kepada petugas." },
      ],
      related: ["hours", "parking", "borobudur-combo", "budget"],
    },
    en: {
      title: "Punthuk Setumbu tickets & fees: admission, parking & what to confirm",
      meta: "A summary of admission, parking and other costs at Punthuk Setumbu. Prices are unverified; ask on site before paying.",
      h1: "Punthuk Setumbu tickets & fees",
      lead: "There is no verified official price list for this visit. Ask the current tariff, ticket categories, parking and extra services from management before paying.",
      updated: "Updated 28 October 2026 · prices unverified",
      facts: [["Admission", "Ask for today's tariff"], ["Parking", "Confirm location & fee"], ["Borobudur ticket", "Separate, own rules"]],
      sections: [
        {
          heading: "Why we have not listed a price",
          paragraphs: [
            "This guide summarises open sources, but Punthuk Setumbu admission, ticket categories and parking charges were not shown on a checkable public channel at the 28 October 2026 check.",
            "Publishing uncertain numbers could mislead. It is better to ask the price for your party, parking, extras and booking terms directly from management on site.",
          ],
        },
        {
          heading: "What to ask",
          paragraphs: [
            "Ask whether there is a separate ticket for adults/children or locals, whether parking is included, and whether extras such as a kiosk or guide exist.",
            "If you will also visit Borobudur Temple, remember its complex has separate tickets, rules and prices. Punthuk Setumbu is not a Borobudur entrance.",
          ],
        },
        {
          heading: "How to pay",
          paragraphs: [
            "Carry small cash; small village viewpoints often do not accept cards or contactless. Confirm accepted payment methods on arrival.",
          ],
        },
      ],
      faqs: [
        { q: "How much is the Punthuk Setumbu ticket?", a: "Unverified. Ask the current tariff from management on site before paying; do not rely on old guide numbers." },
        { q: "Is Punthuk Setumbu admission the same as Borobudur?", a: "No. Punthuk Setumbu is a viewpoint outside the Borobudur Temple complex. Access, timings and costs should be checked independently." },
        { q: "Is parking included in the ticket?", a: "Not guaranteed. Confirm parking location, access hours, charges and space for your vehicle with staff." },
      ],
      related: ["hours", "parking", "borobudur-combo", "budget"],
    },
  },

  {
    slug: "hours",
    group: "prepare",
    id: {
      title: "Jam buka & waktu terbaik Punthuk Setumbu: bedakan jam akses dan waktu sunrise",
      meta: "Bedakan jam buka objek wisata dengan waktu matahari terbit. Punthuk Setumbu tidak menampilkan jam buka resmi; konfirmasi akses sebelum berangkat.",
      h1: "Jam buka & waktu terbaik",
      lead: "Punthuk Setumbu tidak menampilkan jam buka tetap di Google Maps. Kunjungan fajar bergantung akses yang diizinkan pengelola, bukan sekadar jam operasional.",
      updated: "Diperbarui 28 Oktober 2026 · jam buka tidak ditampilkan",
      sections: [
        {
          heading: "Jam buka vs waktu sunrise",
          paragraphs: [
            "Objek wisata sering punya jam operasional siang, tetapi pengalaman sunrise butuh akses saat gelap. Keduanya berbeda. Jangan menganggap jam siang berarti pintu sudah buka saat fajar.",
            "Pada pemeriksaan 28 Oktober 2026, Google Maps tidak menampilkan jam buka untuk Punthuk Setumbu. Tanyakan jam akses fajar kepada pengelola sebelum mengatur perjalanan gelap.",
          ],
        },
        {
          heading: "Waktu terbaik menurut cuaca",
          paragraphs: [
            "Musim kemarau (umumnya Mei–September) cenderung memberi langit lebih cerah, meski kabut tetap mungkin. Musim hujan (umumnya Oktober–April) lebih berawan dan berisiko hujan, tetapi nuansa lembah tetap menarik.",
            "Waktu terbaik bukan jam tertentu, melainkan kombinasi cuaca cerah, tiba cukup awal, dan tidak terburu-buru. Periksa prakiraan untuk tanggal Anda.",
          ],
        },
        {
          heading: "Penyangga waktu",
          paragraphs: [
            "Sisipkan waktu untuk perjalanan malam, pemeriksaan tiket, jalan menanjak, dan antrean. Jangan menjadwalkan kunjungan sunrise berurutan dengan keberangkatan Borobudur yang ketat tanpa penyangga.",
          ],
        },
      ],
      faqs: [
        { q: "Jam berapa Punthuk Setumbu buka?", a: "Tidak ditampilkan secara publik saat pemeriksaan 28 Oktober 2026. Konfirmasikan jam akses, khususnya untuk kunjungan fajar, kepada pengelola." },
        { q: "Bulan apa paling bagus?", a: "Kemarau umumnya lebih cerah, tetapi kabut tetap mungkin. Yang menentukan adalah cuaca hari kunjungan, bukan hanya bulan." },
        { q: "Apakah saya bisa datang siang?", a: "Mungkin, bila akses diizinkan; namun pandangan sunrise hanya ada saat fajar. Konfirmasikan dengan pengelola untuk jam non-fajar." },
      ],
      related: ["sunrise-guide", "weather", "tickets", "getting-there"],
    },
    en: {
      title: "Punthuk Setumbu opening hours & best time: access vs sunrise time",
      meta: "Separate site operating hours from sunrise time. Punthuk Setumbu shows no official opening hours; confirm access before departure.",
      h1: "Opening hours & best time",
      lead: "Punthuk Setumbu shows no fixed opening hours on Google Maps. A dawn visit depends on access permitted by management, not just daytime hours.",
      updated: "Updated 28 October 2026 · hours not shown",
      sections: [
        {
          heading: "Opening hours vs sunrise time",
          paragraphs: [
            "Attractions often have daytime hours, but a sunrise experience needs access in the dark. The two are different. Do not assume daytime hours mean the gate is open at dawn.",
            "At the 28 October 2026 check, Google Maps showed no opening hours for Punthuk Setumbu. Ask management about dawn-access hours before arranging travel in the dark.",
          ],
        },
        {
          heading: "Best time by weather",
          paragraphs: [
            "The dry season (roughly May–September) tends to bring clearer skies, though mist is still possible. The rainy season (roughly October–April) is cloudier with rain risk, but the valley mood remains appealing.",
            "The best time is not a fixed clock but a combination of clear weather, arriving early, and not rushing. Check the forecast for your date.",
          ],
        },
        {
          heading: "Buffer time",
          paragraphs: [
            "Build in time for night travel, ticket checks, the uphill walk and queues. Do not schedule a tight sunrise-to-Borobudur departure without a buffer.",
          ],
        },
      ],
      faqs: [
        { q: "What time does Punthuk Setumbu open?", a: "Not shown publicly at the 28 October 2026 check. Confirm access hours, especially for dawn, with management." },
        { q: "Which month is best?", a: "The dry season is generally clearer, but mist is still possible. Your visit-day weather matters more than the month alone." },
        { q: "Can I come during the day?", a: "Possibly, if access is allowed; but the sunrise view only exists at dawn. Confirm non-dawn hours with management." },
      ],
      related: ["sunrise-guide", "weather", "tickets", "getting-there"],
    },
  },

  {
    slug: "weather",
    group: "prepare",
    id: {
      title: "Musim hujan, kemarau & cuaca Punthuk Setumbu: kabut dan rencana cadangan",
      meta: "Bagaimana musim di Magelang memengaruhi kunjungan Punthuk Setumbu: kabut, hujan, dan aktivitas pengganti saat langit tertutup.",
      h1: "Cuaca & musim di Punthuk Setumbu",
      lead: "Magelang memiliki musim kemarau dan hujan yang longgar. Kabut kerap muncul di pagi Menoreh; hujan dapat menutup pandangan. Siapkan rencana cadangan.",
      updated: "Diperbarui 28 Oktober 2026 · prakiraan periksa sebelum berangkat",
      sections: [
        {
          heading: "Dua musim utama",
          paragraphs: [
            "Secara umum, kemarau berlangsung sekitar Mei–September dan hujan sekitar Oktober–April, meski batasnya tidak kaku. Pagi di pegunungan bisa tetap sejuk dan berawan di kedua musim.",
            "Kabut pagi adalah ciri khas lembah Menoreh, bukan hanya musim hujan. Ia dapat memberi foto lapisan awan yang khas maupun menutup candi sepenuhnya.",
          ],
        },
        {
          heading: "Saat langit tertutup",
          paragraphs: [
            "Bila kabut tebal atau hujan, pandangan terbatas. Alihkan rencana: lanjutkan ke Borobudur saat siang lebih cerah, jelajahi desa Karangrejo, atau nikmati kopi di kawasan Borobudur.",
            "Jangan menganggap hari berkabut sebagai gagal. Banyak pengunjung menikmati nuansa tenang lembah yang tertutup awan.",
          ],
        },
        {
          heading: "Cara memantau",
          paragraphs: [
            "Periksa prakiraan cuaca untuk Borobudur/Magelang pada malam sebelumnya dan beberapa jam sebelum berangkat. Perhatikan suhu pagi yang cenderung dingin di pegunungan.",
          ],
        },
      ],
      faqs: [
        { q: "Bulan apa paling cerah?", a: "Kemarau umumnya lebih cerah, tetapi kabut tetap mungkin di pagi Menoreh. Cek prakiraan untuk tanggal Anda." },
        { q: "Apakah kabut selalu menutup Borobudur?", a: "Tidak selalu. Kabut bergerak; kadang menyingkap candi sesaat, kadang menutupnya sepenuhnya." },
        { q: "Hujan turun saat saya di bukit?", a: "Mungkin. Bawa jas hujan tipis dan hindari tepi licin. Turun lebih awal bila cuaca memburuk." },
      ],
      related: ["sunrise-guide", "hours", "rainy-day", "what-to-bring"],
    },
    en: {
      title: "Punthuk Setumbu seasons & weather: mist and a backup plan",
      meta: "How Magelang's seasons affect a Punthuk Setumbu visit: mist, rain, and alternative activities when the sky is closed.",
      h1: "Weather & seasons at Punthuk Setumbu",
      lead: "Magelang has loose dry and rainy seasons. Mist often forms over the Menoreh morning; rain can hide the view. Prepare a backup plan.",
      updated: "Updated 28 October 2026 · check forecast before departure",
      sections: [
        {
          heading: "Two main seasons",
          paragraphs: [
            "Roughly, the dry season runs May–September and the rainy season October–April, though the boundary is not fixed. Mountain mornings can stay cool and cloudy in both seasons.",
            "Morning mist is characteristic of the Menoreh valley, not only the rainy season. It can give a layered-cloud photo or hide the temple entirely.",
          ],
        },
        {
          heading: "When the sky is closed",
          paragraphs: [
            "If mist is thick or it rains, the view is limited. Shift plans: continue to Borobudur in clearer daylight, explore Karangrejo village, or enjoy coffee around Borobudur.",
            "Do not treat a misty day as failed. Many visitors enjoy the quiet, cloud-covered valley mood.",
          ],
        },
        {
          heading: "How to monitor",
          paragraphs: [
            "Check the Borobudur/Magelang forecast the night before and a few hours before leaving. Note that mountain mornings tend to be cold.",
          ],
        },
      ],
      faqs: [
        { q: "Which month is clearest?", a: "The dry season is generally clearer, but mist is still possible over the Menoreh morning. Check the forecast for your date." },
        { q: "Does mist always hide Borobudur?", a: "Not always. Mist moves; sometimes it briefly reveals the temple, sometimes it covers it fully." },
        { q: "What if it rains while I am on the hill?", a: "Possible. Carry a light rain shell and avoid slippery edges. Descend earlier if weather worsens." },
      ],
      related: ["sunrise-guide", "hours", "rainy-day", "what-to-bring"],
    },
  },

  {
    slug: "what-to-bring",
    group: "prepare",
    id: {
      title: "Bawaan, pakaian & alas kaki ke Punthuk Setumbu: tips pagi dan hujan",
      meta: "Apa yang perlu dibawa ke Punthuk Setumbu: lapisan hangat, alas kaki cengkeraman, senter, air, dan persiapan hujan serta fotografi.",
      h1: "Bawaan, pakaian & alas kaki",
      lead: "Pagi pegunungan dingin, jalur menanjak berbatu dan tanah, serta kemungkinan hujan menentukan bawaan. Siapkan sebelum berangkat dari penginapan.",
      updated: "Diperbarui 28 Oktober 2026",
      sections: [
        {
          heading: "Pakaian & alas kaki",
          paragraphs: [
            "Bawa lapisan hangat karena suhu pagi di Menoreh bisa rendah. Alas kaki dengan cengkeraman baik lebih aman di jalur batu dan tanah yang mungkin licin saat lembap.",
            "Hindari sandal licin untuk jalur menanjak. Sepatu tertutup rendah sudah cukup bagi kebanyakan pengunjung.",
          ],
        },
        {
          heading: "Lampu & air",
          paragraphs: [
            "Sentir kecil atau lampu ponsel penting untuk jalan saat gelap sebelum fajar. Bawa air minum; jangan mengandalkan penjualan sebelum matahari terbit.",
          ],
        },
        {
          heading: "Hujan & foto",
          paragraphs: [
            "Jas hujan tipis berguna di musim hujan dan saat kabut lembap. Untuk fotografi, bawa ponsel atau kamera dengan stabilisasi dan pastikan baterai terisi.",
            "Bawa kembali sampah pribadi. Tidak ada jaminan tempat sampah tersedia di titik pandang.",
          ],
        },
      ],
      faqs: [
        { q: "Apakah saya butuh jaket?", a: "Disarankan. Pagi pegunungan dingin, apalagi saat Anda tidak bergerak menunggu cahaya." },
        { q: "Apakah sandal boleh?", a: "Kurang ideal di jalur menanjak berbatu dan tanah. Gunakan alas kaki dengan cengkeraman baik." },
        { q: "Perlu senter?", a: "Ya, untuk menyusuri jalur saat gelap sebelum fajar. Lampu ponsel sudah cukup sebagai cadangan." },
      ],
      related: ["sunrise-guide", "weather", "photography", "family"],
    },
    en: {
      title: "What to wear & bring to Punthuk Setumbu: morning & rain tips",
      meta: "What to bring to Punthuk Setumbu: warm layer, grippy footwear, torch, water, and rain and photography preparation.",
      h1: "What to wear & bring",
      lead: "Cold mountain mornings, an uphill stone-and-earth path, and possible rain shape your packing. Prepare before leaving your stay.",
      updated: "Updated 28 October 2026",
      sections: [
        {
          heading: "Clothing & footwear",
          paragraphs: [
            "Bring a warm layer because Menoreh mornings can be cold. Footwear with good grip is safer on stone and earth that may be slippery when damp.",
            "Avoid slippery sandals on the uphill path. Low closed shoes are enough for most visitors.",
          ],
        },
        {
          heading: "Light & water",
          paragraphs: [
            "A small torch or phone light matters for walking in the dark before dawn. Carry drinking water; do not rely on vendors before sunrise.",
          ],
        },
        {
          heading: "Rain & photo",
          paragraphs: [
            "A light rain shell helps in the rainy season and damp mist. For photography, bring a phone or camera with stabilisation and ensure batteries are charged.",
            "Take personal rubbish away. There is no guarantee of bins at the viewpoint.",
          ],
        },
      ],
      faqs: [
        { q: "Do I need a jacket?", a: "Recommended. Mountain mornings are cold, especially while you stand waiting for light." },
        { q: "Are sandals okay?", a: "Less ideal on the uphill stone-and-earth path. Use footwear with good grip." },
        { q: "Do I need a torch?", a: "Yes, to follow the path in the dark before dawn. A phone light is enough as backup." },
      ],
      related: ["sunrise-guide", "weather", "photography", "family"],
    },
  },

  {
    slug: "how-long",
    group: "prepare",
    id: {
      title: "Berapa lama wisata Punthuk Setumbu: hanya sunrise vs gabungan sekitar",
      meta: "Perkiraan durasi kunjungan Punthuk Setumbu: hanya melihat sunrise versus menggabungkannya dengan Borobudur dan desa sekitar.",
      h1: "Berapa lama wisata di sini",
      lead: "Kunjungan hanya untuk sunrise biasanya sekitar 1,5–2,5 jam termasuk jalan dan menunggu. Gabungan dengan Borobudur dan sekitarnya bisa menjadi setengah atau satu hari penuh.",
      updated: "Diperbarui 28 Oktober 2026 · durasi bergantung kondisi",
      sections: [
        {
          heading: "Hanya melihat sunrise",
          paragraphs: [
            "Hitung waktu berangkat dari penginapan, perjalanan malam, parkir, jalan menanjak, waktu menunggu cahaya, dan kembali. Secara kasar, alokasikan 1,5–2,5 jam di lokasi sudah mencakup jalan dan foto.",
            "Lama sebenarnya bergantung kecepatan rombongan, cuaca, antrean, dan akses hari itu. Jangan menganggap jalur bebas tangga.",
          ],
        },
        {
          heading: "Gabungan dengan Borobudur",
          paragraphs: [
            "Bila Anda juga ke Candi Borobudur, pisahkan tiket dan waktu. Kunjungan candi sendiri umumnya butuh beberapa jam. Urutan umum: sunrise di Punthuk Setumbu lalu Borobudur saat terang.",
            "Lihat halaman panduan Borobudur untuk pembagian waktu yang lebih rinci dan penyangga keberangkatan.",
          ],
        },
        {
          heading: "Gabungan dengan desa sekitar",
          paragraphs: [
            "Menambah desa Karangrejo, kopi, atau wisata budaya memperpanjang hari. Rencanakan satu hari penuh bila ingin menikmati lanskap tanpa terburu-buru.",
          ],
        },
      ],
      faqs: [
        { q: "Berapa lama di bukit pandangnya?", a: "Sebagai panduan, 1,5–2,5 jam di lokasi sudah mencakup jalan menanjak dan menunggu cahaya, bergantung kecepatan dan kondisi." },
        { q: "Apakah cukup satu pagi untuk Punthuk Setumbu dan Borobudur?", a: "Mungkin, bila Anda berangkat cukup awal dan Borobudur tidak ramai. Tetap sisakan penyangga waktu." },
        { q: "Apakah cocok untuk setengah hari?", a: "Ya, kombinasi sunrise dan satu objek sekitar dapat dijadikan setengah hari yang rileks." },
      ],
      related: ["sunrise-guide", "borobudur-combo", "half-day", "from-borobudur"],
    },
    en: {
      title: "How long to visit Punthuk Setumbu: sunrise only vs combined with nearby",
      meta: "A time estimate for a Punthuk Setumbu visit: sunrise only versus combining it with Borobudur and surrounding villages.",
      h1: "How long to visit",
      lead: "A sunrise-only visit is usually about 1.5–2.5 hours including the walk and waiting. Combining with Borobudur and the surroundings can become a half or full day.",
      updated: "Updated 28 October 2026 · duration depends on conditions",
      sections: [
        {
          heading: "Sunrise only",
          paragraphs: [
            "Count departure from your stay, night travel, parking, the uphill walk, waiting for light, and return. Roughly, 1.5–2.5 hours on site covers the walk and photos.",
            "Actual time depends on group pace, weather, queues and that day's access. Do not assume a step-free route.",
          ],
        },
        {
          heading: "Combined with Borobudur",
          paragraphs: [
            "If you also visit Borobudur Temple, keep tickets and timing separate. The temple itself usually takes a few hours. A common order: sunrise at Punthuk Setumbu, then Borobudur in daylight.",
            "See the Borobudur guide page for a more detailed time split and departure buffer.",
          ],
        },
        {
          heading: "Combined with nearby villages",
          paragraphs: [
            "Adding Karangrejo village, coffee or cultural activities extends the day. Plan a full day if you want to enjoy the landscape without rushing.",
          ],
        },
      ],
      faqs: [
        { q: "How long at the viewpoint itself?", a: "As a guide, 1.5–2.5 hours on site covers the uphill walk and waiting for light, depending on pace and conditions." },
        { q: "Is one morning enough for Punthuk Setumbu and Borobudur?", a: "Possibly, if you leave early enough and Borobudur is not crowded. Still keep a buffer." },
        { q: "Does it suit a half day?", a: "Yes, combining sunrise with one nearby spot makes a relaxed half day." },
      ],
      related: ["sunrise-guide", "borobudur-combo", "half-day", "from-borobudur"],
    },
  },

  {
    slug: "accessibility",
    group: "prepare",
    id: {
      title: "Aksesibilitas Punthuk Setumbu: lansia, kursi roda & keterbatasan",
      meta: "Informasi aksesibilitas Punthuk Setumbu untuk lansia dan pengunjung dengan keterbatasan mobilitas. Jalur belum terverifikasi bebas tangga.",
      h1: "Aksesibilitas & keterbatasan",
      lead: "Kami tidak dapat memverifikasi kondisi aksesibilitas saat ini. Panduan provinsi menyebut jalur menanjak berbatu dan tanah; jangan menganggap rute bebas tangga atau ramah kursi roda.",
      updated: "Diperbarui 28 Oktober 2026 · informasi terbatas",
      sections: [
        {
          heading: "Yang kami ketahui",
          paragraphs: [
            "Sumber pariwisata Jawa Tengah menggambarkan jalur menanjak berbatu dan tanah menuju titik pandang. Ini menunjukkan medan tidak datar dan mungkin berkemiringan.",
            "Kami tidak memiliki informasi terverifikasi tentang ketersediaan rambu, pagar, atau permukaan khusus disabilitas. Informasi lama tidak menjamin fasilitas beroperasi.",
          ],
        },
        {
          heading: "Untuk lansia & anak",
          paragraphs: [
            "Lansia dan anak sebaiknya memperkirakan kecepatan sendiri dan membawa pendamping. Jangan memaksa bila cuaca buruk atau jalur licin.",
            "Tanyakan kepada pengelola tentang alternatif rute, titik istirahat, dan akses yang sesuai kebutuhan mobilitas sebelum berangkat.",
          ],
        },
        {
          heading: "Kursi roda & bantuan",
          paragraphs: [
            "Kami tidak dapat menyatakan Punthuk Setumbu ramah kursi roda. Konfirmasikan secara langsung dengan pengelola mengenai kemungkinan akses dan bantuan sebelum merencanakan kunjungan.",
          ],
        },
      ],
      faqs: [
        { q: "Apakah ramah kursi roda?", a: "Kami tidak dapat memverifikasi. Jalur digambarkan menanjak berbatu dan tanah; konfirmasikan dengan pengelola sebelum datang." },
        { q: "Apakah cocok untuk lansia?", a: "Tergantung kemampuan masing-masing. Jalur menanjak; bawa pendamping dan tanyakan alternatif kepada pengelola." },
        { q: "Apakah ada toiletnya?", a: "Tanyakan kondisi fasilitas dasar kepada pengelola; daftar lama tidak menjamin ketersediaan saat ini." },
      ],
      related: ["what-to-bring", "parking", "family", "tickets"],
    },
    en: {
      title: "Punthuk Setumbu accessibility: seniors, wheelchairs & limits",
      meta: "Accessibility information for seniors and visitors with limited mobility at Punthuk Setumbu. The trail is not verified as step-free.",
      h1: "Accessibility & limits",
      lead: "We cannot verify current accessibility. Provincial tourism describes an uphill stone-and-earth path; do not assume a step-free or wheelchair-friendly route.",
      updated: "Updated 28 October 2026 · limited information",
      sections: [
        {
          heading: "What we know",
          paragraphs: [
            "Central Java tourism guidance describes an uphill stone-and-earth path to the viewpoint. This indicates uneven, possibly sloping terrain.",
            "We have no verified information about disabled-access signage, rails or special surfaces. Older listings do not guarantee operating facilities.",
          ],
        },
        {
          heading: "For seniors & children",
          paragraphs: [
            "Seniors and children should gauge their own pace and bring a companion. Do not push through bad weather or a slippery path.",
            "Ask management about route alternatives, rest points and access suited to your mobility needs before departure.",
          ],
        },
        {
          heading: "Wheelchairs & assistance",
          paragraphs: [
            "We cannot state Punthuk Setumbu is wheelchair friendly. Confirm the possibility of access and assistance directly with management before planning a visit.",
          ],
        },
      ],
      faqs: [
        { q: "Is it wheelchair friendly?", a: "We cannot verify. The path is described as uphill stone-and-earth; confirm with management before coming." },
        { q: "Is it suitable for seniors?", a: "Depends on individual ability. The path is uphill; bring a companion and ask management about alternatives." },
        { q: "Is there a toilet?", a: "Ask management about basic facilities; older listings do not guarantee current availability." },
      ],
      related: ["what-to-bring", "parking", "family", "tickets"],
    },
  },

  {
    slug: "family",
    group: "prepare",
    id: {
      title: "Panduan Punthuk Setumbu untuk keluarga & anak: persiapan pagi",
      meta: "Tips membawa anak ke Punthuk Setumbu: waktu berangkat, medan, usia yang nyaman, dan bawaan praktis untuk keluarga.",
      h1: "Punthuk Setumbu untuk keluarga",
      lead: "Kunjungan sunrise bisa menyenangkan bagi keluarga bila direncanakan: berangkat cukup awal, bawa lapisan hangat, dan sesuaikan jalur dengan usia anak.",
      updated: "Diperbarui 28 Oktober 2026",
      sections: [
        {
          heading: "Usia & kecepatan",
          paragraphs: [
            "Anak yang sudah bisa berjalan menanjak dengan stabil biasanya lebih nyaman. Untuk balita, pertimbangkan gendongan atau tetap di area parkir bila jalur licin.",
            "Jangan membandingkan dengan kunjungan candi datar. Medan menanjak berbatu dan tanah butuh lebih banyak tenaga.",
          ],
        },
        {
          heading: "Persiapan praktis",
          paragraphs: [
            "Bawa lapisan hangat untuk semua orang, air minum, senter kecil, dan camilan. Anak sering kedinginan saat menunggu cahaya sebelum terang.",
            "Siapkan rencana cadangan bila anak lelah: turun lebih awal atau lanjutkan ke kegiatan siang yang lebih mudah di Borobudur.",
          ],
        },
        {
          heading: "Keamanan",
          paragraphs: [
            "Jaga jarak dari tepi tebing dan jangan membiarkan anak berlari di jalur gelap. Ikuti arahan pengelola dan jangan mendekati area tidak bertuan.",
          ],
        },
      ],
      faqs: [
        { q: "Apakah aman untuk anak?", a: "Bila diawasi dan medan disesuaikan. Jalur menanjak; jaga jarak dari tepi dan bawa lampu saat gelap." },
        { q: "Usia berapa nyaman?", a: "Tergantung kemampuan anak. Anak yang stabil berjalan menanjak biasanya lebih mudah; balita butuh gendongan." },
        { q: "Perlu bawa makanan?", a: "Ya, bawa camilan dan air. Jangan mengandalkan warung sebelum matahari terbit." },
      ],
      related: ["what-to-bring", "accessibility", "family-nearby", "half-day"],
    },
    en: {
      title: "Punthuk Setumbu for families & children: morning preparation",
      meta: "Tips for bringing children to Punthuk Setumbu: departure time, terrain, comfortable age, and practical family packing.",
      h1: "Punthuk Setumbu for families",
      lead: "A sunrise visit can be fun for families if planned: leave early enough, bring warm layers, and match the route to the children's ages.",
      updated: "Updated 28 October 2026",
      sections: [
        {
          heading: "Age & pace",
          paragraphs: [
            "Children who can walk uphill steadily are usually more comfortable. For toddlers, consider a carrier or staying near the parking area if the path is slippery.",
            "Do not compare this with a flat temple visit. The uphill stone-and-earth terrain needs more energy.",
          ],
        },
        {
          heading: "Practical prep",
          paragraphs: [
            "Bring a warm layer for everyone, drinking water, a small torch and snacks. Children often get cold while waiting before light.",
            "Prepare a backup if a child tires: descend earlier or continue to an easier daytime activity at Borobudur.",
          ],
        },
        {
          heading: "Safety",
          paragraphs: [
            "Keep distance from cliff edges and do not let children run on the dark path. Follow staff guidance and avoid unmanaged areas.",
          ],
        },
      ],
      faqs: [
        { q: "Is it safe for children?", a: "If supervised and the terrain is matched to them. The path is uphill; keep distance from edges and carry light in the dark." },
        { q: "What age is comfortable?", a: "Depends on the child. Steady uphill walkers are usually easier; toddlers need a carrier." },
        { q: "Should we bring food?", a: "Yes, bring snacks and water. Do not rely on a kiosk before sunrise." },
      ],
      related: ["what-to-bring", "accessibility", "family-nearby", "half-day"],
    },
  },

  {
    slug: "history",
    group: "prepare",
    id: {
      title: "Sejarah & nama Punthuk Setumbu: fakta dan sebutan lokal",
      meta: "Latar belakang nama Punthuk Setumbu dan konteks lembah Menoreh. Membedakan fakta terverifikasi dari sebutan lokal yang beredar.",
      h1: "Sejarah & nama Punthuk Setumbu",
      lead: "Punthuk Setumbu adalah bukit pandang di Kawasan Menoreh, dekat Borobudur. Nama juga ditulis dengan berbagai ejaan; semuanya merujuk bukit yang sama.",
      updated: "Diperbarui 28 Oktober 2026 · bedakan fakta & sebutan",
      sections: [
        {
          heading: "Nama & ejaan",
          paragraphs: [
            "Selain Punthuk Setumbu, nama juga ditulis Puthuk Setumbu, Puntuk Setumbu, atau Putuk Setumbu di berbagai pencarian. Semua merujuk bukit pandang yang sama di Karangrejo, Borobudur.",
            "Penggunaan berbagai ejaan wajar karena penyerapan lisan ke tulisan. Jangan bingung; arah dan pin peta ke Kurahan, Karangrejo adalah rujukannya.",
          ],
        },
        {
          heading: "Konteks Menoreh",
          paragraphs: [
            "Pegunungan Menoreh mengelilingi sisi barat Borobudur dan dikenal dengan lanskap bukit serta lembah. Punthuk Setumbu menjadi satu dari beberapa titik pandang pagi di kawasan ini.",
            "Kami menyajikan konteks geografis, bukan klaim sejarah rinci yang belum terverifikasi. Untuk narasi sejarah mendalam, rujuk kanal resmi pariwisata Jawa Tengah.",
          ],
        },
        {
          heading: "Status kekinian",
          paragraphs: [
            "Punthuk Setumbu adalah titik pandang di luar kompleks Candi Borobudur. Akses, tiket, dan jam pengelolaan berbeda dari candi; konfirmasikan sebelum berangkat.",
          ],
        },
      ],
      faqs: [
        { q: "Punthuk, Puthuk, Puntuk, Putuk — mana yang benar?", a: "Semua merujuk bukit pandang yang sama. Ejaan bervariasi karena penyerapan lisan ke tulisan." },
        { q: "Apakah ini bagian dari Candi Borobudur?", a: "Tidak. Punthuk Setumbu adalah titik pandang di luar kompleks candi, dengan akses dan tiket terpisah." },
        { q: "Di mana letaknya?", a: "Kurahan, Karangrejo, Borobudur, Magelang, Jawa Tengah. Gunakan pin peta ke alamat itu." },
      ],
      related: ["getting-there", "borobudur-combo", "nearby-overview"],
    },
    en: {
      title: "Punthuk Setumbu history & name: facts and local spellings",
      meta: "Background on the name Punthuk Setumbu and the Menoreh valley context. Separating verified facts from circulating local spellings.",
      h1: "History & name of Punthuk Setumbu",
      lead: "Punthuk Setumbu is a viewpoint in the Menoreh area near Borobudur. The name also appears in various spellings; they all refer to the same hill.",
      updated: "Updated 28 October 2026 · separate facts & spellings",
      sections: [
        {
          heading: "Name & spelling",
          paragraphs: [
            "Besides Punthuk Setumbu, the name also appears as Puthuk Setumbu, Puntuk Setumbu, or Putuk Setumbu in various searches. All refer to the same viewpoint in Karangrejo, Borobudur.",
            "Variable spelling is normal from spoken-to-written adaptation. Do not be confused; the map pin to Kurahan, Karangrejo is the reference.",
          ],
        },
        {
          heading: "Menoreh context",
          paragraphs: [
            "The Menoreh range wraps the western side of Borobudur and is known for hills and valleys. Punthuk Setumbu is one of several dawn viewpoints in the area.",
            "We present geographic context, not unverified detailed history. For deeper historical narrative, refer to official Central Java tourism channels.",
          ],
        },
        {
          heading: "Current status",
          paragraphs: [
            "Punthuk Setumbu is a viewpoint outside the Borobudur Temple complex. Access, tickets and management hours differ from the temple; confirm before departure.",
          ],
        },
      ],
      faqs: [
        { q: "Punthuk, Puthuk, Puntuk, Putuk — which is correct?", a: "All refer to the same viewpoint. Spellings vary from spoken-to-written adaptation." },
        { q: "Is this part of Borobudur Temple?", a: "No. Punthuk Setumbu is a viewpoint outside the temple complex, with separate access and tickets." },
        { q: "Where is it?", a: "Kurahan, Karangrejo, Borobudur, Magelang, Central Java. Use the map pin to that address." },
      ],
      related: ["getting-there", "borobudur-combo", "nearby-overview"],
    },
  },

  {
    slug: "getting-there",
    group: "transport",
    id: {
      title: "Cara ke Punthuk Setumbu: rute, pin peta & moda transportasi",
      meta: "Cara menuju Punthuk Setumbu dari mana saja: gunakan pin Kurahan Karangrejo, bukan pintu Candi Borobudur, dan pilih moda sesuai waktu tiba.",
      h1: "Cara ke Punthuk Setumbu",
      lead: "Gunakan pin Punthuk Setumbu di Kurahan, Karangrejo, bukan pintu masuk Candi Borobudur. Pilih kendaraan yang sesuai waktu tiba dan jumlah rombongan.",
      updated: "Diperbarui 28 Oktober 2026 · konfirmasi rute terbaru",
      sections: [
        {
          heading: "Titik tujuan di peta",
          paragraphs: [
            "Arahkan navigasi ke Punthuk Setumbu, Kurahan, Karangrejo, Borobudur. Jangan memasukkan hanya 'Borobudur', karena itu akan membawa Anda ke kompleks candi, bukan bukit pandang ini.",
            "Periksa ulang pin dan lokasi turun dengan pengemudi setempat, karena nama desa dan jalan bisa serupa di sekitar Borobudur.",
          ],
        },
        {
          heading: "Moda transportasi",
          paragraphs: [
            "Opsi meliputi sewa kendaraan, taksi, atau kendaraan lokal dari Yogyakarta/Magelang/Borobudur. Untuk keberangkatan sebelum subuh, atur kendaraan terlebih dahulu dan sepakati titik jemput kembali.",
            "Layanan umum pada dini hari mungkin terbatas. Jangan mengandalkan ketersediaan spontan saat fajar.",
          ],
        },
        {
          heading: "Catatan malam",
          paragraphs: [
            "Perjalanan malam butuh lampu dan kehati-hatian. Isi bahan bakar atau muat daya di pusat layanan lebih besar sebelum masuk kawasan.",
          ],
        },
      ],
      faqs: [
        { q: "Ke mana saya menaruh pin peta?", a: "Ke Punthuk Setumbu, Kurahan, Karangrejo, Borobudur. Jangan ke pintu Candi Borobudur." },
        { q: "Apakah ada angkutan umum langsung?", a: "Tidak terverifikasi untuk dini hari. Gunakan sewa kendaraan atau taksi dan sepakati penjemputan." },
        { q: "Berapa jauh dari Borobudur?", a: "Sekitar beberapa kilometer; konfirmasikan rute jalan terbaru dengan pengemudi karena kedekatan tidak berarti satu jalan." },
      ],
      related: ["from-borobudur", "from-yogyakarta", "from-magelang", "parking"],
    },
    en: {
      title: "How to get to Punthuk Setumbu: route, map pin & transport modes",
      meta: "Getting to Punthuk Setumbu from anywhere: use the Kurahan Karangrejo pin, not the Borobudur Temple gate, and choose a mode by arrival time.",
      h1: "How to get to Punthuk Setumbu",
      lead: "Navigate to the Punthuk Setumbu pin in Kurahan, Karangrejo, not the Borobudur Temple entrance. Choose a vehicle suited to your arrival time and group size.",
      updated: "Updated 28 October 2026 · confirm latest route",
      sections: [
        {
          heading: "Map destination",
          paragraphs: [
            "Set navigation to Punthuk Setumbu, Kurahan, Karangrejo, Borobudur. Do not enter only 'Borobudur', which leads to the temple complex, not this viewpoint.",
            "Re-check the pin and drop-off with your local driver, because village and road names around Borobudur can be similar.",
          ],
        },
        {
          heading: "Transport modes",
          paragraphs: [
            "Options include hired vehicles, taxis, or local transport from Yogyakarta/Magelang/Borobudur. For pre-dawn arrival, arrange transport in advance and agree a pickup point.",
            "Public services may be limited before dawn. Do not rely on spontaneous availability at sunrise.",
          ],
        },
        {
          heading: "Night notes",
          paragraphs: [
            "Night travel needs lights and care. Refuel or charge in a larger service centre before entering the area.",
          ],
        },
      ],
      faqs: [
        { q: "Where do I drop the map pin?", a: "At Punthuk Setumbu, Kurahan, Karangrejo, Borobudur. Not the Borobudur Temple gate." },
        { q: "Is there direct public transport?", a: "Not verified for pre-dawn. Use a hired vehicle or taxi and agree a pickup." },
        { q: "How far from Borobudur?", a: "A few kilometres; confirm the latest road route with your driver, as proximity does not mean one road." },
      ],
      related: ["from-borobudur", "from-yogyakarta", "from-magelang", "parking"],
    },
  },

  {
    slug: "from-borobudur",
    group: "transport",
    id: {
      title: "Dari Borobudur ke Punthuk Setumbu: titik berangkat & jemput kembali",
      meta: "Cara menuju Punthuk Setumbu dari kawasan Borobudur: jarak perkiraan, pilihan kendaraan, dan penjadwalan jemput setelah sunrise.",
      h1: "Dari Borobudur ke Punthuk Setumbu",
      lead: "Punthuk Setumbu hanya beberapa kilometer dari kawasan Borobudur, tetapi gunakan pin Kurahan Karangrejo, bukan pintu candi. Atur jemput kembali setelah melihat pagi.",
      updated: "Diperbarui 28 Oktober 2026 · jarak perkiraan",
      sections: [
        {
          heading: "Jarak & rute",
          paragraphs: [
            "Jarak perkiraan dari kawasan Borobudur ke Punthuk Setumbu adalah beberapa kilometer; waktu tempuh bergantung rute jalan dan lalu lintas pagi. Jangan menganggap satu rute tunggal.",
            "Konfirmasikan rute jalan dan titik turun terbaru dengan pengemudi. Nama desa dan jalan di sekitar Borobudur mirip satu sama lain.",
          ],
        },
        {
          heading: "Memilih kendaraan",
          paragraphs: [
            "Bila menginap di Borobudur, sewa kendaraan harian atau taksi dengan perjanjian jemput kembali lebih praktis untuk kunjungan fajar. Sepakati waktu dan tempat penjemputan sebelum matahari terbit.",
            "Untuk rombongan, pastikan kendaraan muat semua orang dan barang serta punya ruang parkir di area bukit.",
          ],
        },
        {
          heading: "Setelah sunrise",
          paragraphs: [
            "Banyak pengunjung melanjutkan ke Candi Borobudur setelah pagi. Atur jemput agar tidak terburu-buru dan sisakan penyangga antrean tiket.",
          ],
        },
      ],
      faqs: [
        { q: "Berapa jauh dari Borobudur?", a: "Beberapa kilometer secara perkiraan; konfirmasikan rute terbaru dengan pengemudi." },
        { q: "Apakah bisa jalan kaki?", a: "Tidak disarankan di pagi gelap dengan waktu terbatas. Gunakan kendaraan dan sepakati jemput kembali." },
        { q: "Bagaimana setelah melihat pagi?", a: "Lanjutkan ke Borobudur saat terang, atau ke desa/kopi sekitar. Atur jemput agar tidak terburu-buru." },
      ],
      related: ["getting-there", "parking", "borobudur-combo", "after-sunrise-borobudur"],
    },
    en: {
      title: "From Borobudur to Punthuk Setumbu: departure point & pickup",
      meta: "Getting to Punthuk Setumbu from the Borobudur area: rough distance, vehicle choice, and scheduling pickup after sunrise.",
      h1: "From Borobudur to Punthuk Setumbu",
      lead: "Punthuk Setumbu is only a few kilometres from the Borobudur area, but use the Kurahan Karangrejo pin, not the temple gate. Arrange pickup after the morning view.",
      updated: "Updated 28 October 2026 · approximate distance",
      sections: [
        {
          heading: "Distance & route",
          paragraphs: [
            "The rough distance from the Borobudur area to Punthuk Setumbu is a few kilometres; travel time depends on the road route and morning traffic. Do not assume a single route.",
            "Confirm the latest road route and drop-off with your driver. Village and road names around Borobudur resemble each other.",
          ],
        },
        {
          heading: "Choosing a vehicle",
          paragraphs: [
            "If staying in Borobudur, a daily hire or taxi with an agreed return pickup is convenient for dawn. Agree time and place before sunrise.",
            "For groups, make sure the vehicle fits everyone and luggage and has parking space at the hill.",
          ],
        },
        {
          heading: "After sunrise",
          paragraphs: [
            "Many visitors continue to Borobudur Temple after the morning. Arrange pickup so you are not rushed and keep a buffer for ticket queues.",
          ],
        },
      ],
      faqs: [
        { q: "How far from Borobudur?", a: "A few kilometres roughly; confirm the latest route with your driver." },
        { q: "Can I walk?", a: "Not advised in the dark pre-dawn with limited time. Use a vehicle and agree a return pickup." },
        { q: "What after the morning view?", a: "Continue to Borobudur in daylight, or to nearby village/coffee. Arrange pickup so you are not rushed." },
      ],
      related: ["getting-there", "parking", "borobudur-combo", "after-sunrise-borobudur"],
    },
  },

  {
    slug: "from-yogyakarta",
    group: "transport",
    id: {
      title: "Dari Yogyakarta ke Punthuk Setumbu: keberangkatan subuh & penyangga waktu",
      meta: "Cara menuju Punthuk Setumbu dari Yogyakarta untuk sunrise: jarak perkiraan, pilihan transportasi, dan penyangga waktu malam.",
      h1: "Dari Yogyakarta ke Punthuk Setumbu",
      lead: "Yogyakarta berjarak puluhan kilometer dari Punthuk Setumbu. Untuk sunrise, berangkat sangat awal dan sisakan penyangga untuk jalan malam serta pemeriksaan.",
      updated: "Diperbarui 28 Oktober 2026 · jarak perkiraan",
      sections: [
        {
          heading: "Jarak & waktu",
          paragraphs: [
            "Jarak perkiraan Yogyakarta ke kawasan Borobudur/Magelang adalah sekitar 40 kilometer, tergantung rute. Waktu tempuh malam biasanya 1–1,5 jam, tetapi berikan penyangga untuk lalu lintas dan kondisi jalan.",
            "Jangan menjadwalkan terlalu mepet matahari terbit. Kelelahan mengemudi malam tidak sebanding dengan beberapa menit lebih awal di bukit.",
          ],
        },
        {
          heading: "Pilihan transportasi",
          paragraphs: [
            "Opsi meliputi sewa kendaraan dengan sopir, taksi, atau kereta/menuju Magelang lalu lanjut kendaraan lokal. Untuk subuh, sewa harian dengan sopir sering paling simpel.",
            "Layanan umum dini hari terbatas. Sepakati titik jemput kembali dan durasi sewa sebelum berangkat.",
          ],
        },
        {
          heading: "Penyangga & istirahat",
          paragraphs: [
            "Bila datang dari Yogyakarta untuk sekadar sunrise lalu pulang, pertimbangkan istirahat singkat. Bawa kopi atau camilan karena warung mungkin belum buka saat fajar.",
          ],
        },
      ],
      faqs: [
        { q: "Berapa jauh dari Yogyakarta?", a: "Sekitar 40 kilometer perkiraan ke kawasan Borobudur/Magelang, tergantung rute." },
        { q: "Berapa lama perjalanan malam?", a: "Biasanya 1–1,5 jam, tetapi sisakan penyangga untuk lalu lintas dan jalan malam." },
        { q: "Apakah bisa pulang hari yang sama?", a: "Ya. Banyak yang datang untuk sunrise lalu kembali; atur waktu istirahat agar tidak lelah mengemudi." },
      ],
      related: ["getting-there", "yogyakarta-day-trip", "without-car", "stay-near-borobudur"],
    },
    en: {
      title: "From Yogyakarta to Punthuk Setumbu: pre-dawn departure & buffer",
      meta: "Getting to Punthuk Setumbu from Yogyakarta for sunrise: rough distance, transport choices, and night-time buffer.",
      h1: "From Yogyakarta to Punthuk Setumbu",
      lead: "Yogyakarta is tens of kilometres from Punthuk Setumbu. For sunrise, leave very early and keep a buffer for night roads and checks.",
      updated: "Updated 28 October 2026 · approximate distance",
      sections: [
        {
          heading: "Distance & time",
          paragraphs: [
            "The rough distance from Yogyakarta to the Borobudur/Magelang area is about 40 kilometres, depending on the route. Night travel is usually 1–1.5 hours, but allow a buffer for traffic and road conditions.",
            "Do not schedule too tight to sunrise. Night-driving fatigue is not worth a few extra minutes on the hill.",
          ],
        },
        {
          heading: "Transport options",
          paragraphs: [
            "Options include a car hire with driver, taxi, or train/bus to Magelang then local transport. For dawn, a daily hire with driver is often simplest.",
            "Pre-dawn public services are limited. Agree a pickup point and hire duration before leaving.",
          ],
        },
        {
          heading: "Buffer & rest",
          paragraphs: [
            "If coming from Yogyakarta just for sunrise then returning, consider a short rest. Bring coffee or a snack because kiosks may not be open at dawn.",
          ],
        },
      ],
      faqs: [
        { q: "How far from Yogyakarta?", a: "About 40 kilometres roughly to the Borobudur/Magelang area, depending on route." },
        { q: "How long is the night drive?", a: "Usually 1–1.5 hours, but keep a buffer for traffic and night roads." },
        { q: "Can I return the same day?", a: "Yes. Many come for sunrise then go back; schedule rest so you are not tired driving." },
      ],
      related: ["getting-there", "yogyakarta-day-trip", "without-car", "stay-near-borobudur"],
    },
  },

  {
    slug: "from-magelang",
    group: "transport",
    id: {
      title: "Dari Magelang ke Punthuk Setumbu: moda utama & catatan rute",
      meta: "Cara menuju Punthuk Setumbu dari Kota Magelang: jarak perkiraan, moda utama, dan catatan rute menuju Karangrejo.",
      h1: "Dari Magelang ke Punthuk Setumbu",
      lead: "Magelang lebih dekat ke Punthuk Setumbu daripada Yogyakarta. Gunakan pin Karangrejo dan pilih moda sesuai waktu tiba.",
      updated: "Diperbarui 28 Oktober 2026 · jarak perkiraan",
      sections: [
        {
          heading: "Jarak & moda",
          paragraphs: [
            "Kota Magelang ke kawasan Borobudur/Punthuk Setumbu berjarak perkiraan belasan kilometer, tergantung rute. Opsi meliputi sewa kendaraan, taksi, ojek, atau angkutan lokal.",
            "Untuk kunjungan fajar, pastikan moda yang dipilih tersedia sebelum subuh dan sepakati penjemputan.",
          ],
        },
        {
          heading: "Catatan rute",
          paragraphs: [
            "Arahkan ke Kurahan, Karangrejo, bukan pintu Candi Borobudur. Konfirmasikan rute terbaru dengan pengemudi karena jalan desa bisa berubah.",
          ],
        },
        {
          heading: "Penyangga waktu",
          paragraphs: [
            "Meski lebih dekat, tetap sisakan waktu untuk pemeriksaan tiket, jalan menanjak, dan antrean. Jangan menganggap perjalanan singkat berarti tiba tepat waktu.",
          ],
        },
      ],
      faqs: [
        { q: "Berapa jauh dari Magelang?", a: "Perkiraan belasan kilometer ke kawasan Borobudur, tergantung rute." },
        { q: "Apakah ada angkutan umum?", a: "Tidak terverifikasi untuk dini hari; gunakan sewa kendaraan atau taksi dan sepakati penjemputan." },
        { q: "Ke mana pin peta?", a: "Ke Kurahan, Karangrejo, Borobudur, bukan pintu Candi Borobudur." },
      ],
      related: ["getting-there", "without-car", "parking", "from-borobudur"],
    },
    en: {
      title: "From Magelang to Punthuk Setumbu: main modes & route notes",
      meta: "Getting to Punthuk Setumbu from Magelang city: rough distance, main modes, and route notes toward Karangrejo.",
      h1: "From Magelang to Punthuk Setumbu",
      lead: "Magelang is closer to Punthuk Setumbu than Yogyakarta. Use the Karangrejo pin and choose a mode by arrival time.",
      updated: "Updated 28 October 2026 · approximate distance",
      sections: [
        {
          heading: "Distance & modes",
          paragraphs: [
            "Magelang city to the Borobudur/Punthuk Setumbu area is roughly a few tens of kilometres, depending on route. Options include hired vehicles, taxis, motorcycle taxis, or local transport.",
            "For a dawn visit, ensure the chosen mode is available before sunrise and agree a pickup.",
          ],
        },
        {
          heading: "Route notes",
          paragraphs: [
            "Navigate to Kurahan, Karangrejo, not the Borobudur Temple gate. Confirm the latest route with your driver, as village roads can change.",
          ],
        },
        {
          heading: "Time buffer",
          paragraphs: [
            "Even though closer, keep time for ticket checks, the uphill walk and queues. Do not assume a short trip means on-time arrival.",
          ],
        },
      ],
      faqs: [
        { q: "How far from Magelang?", a: "Roughly a few tens of kilometres to the Borobudur area, depending on route." },
        { q: "Is there public transport?", a: "Not verified for pre-dawn; use a hired vehicle or taxi and agree a pickup." },
        { q: "Where is the map pin?", a: "At Kurahan, Karangrejo, Borobudur, not the Borobudur Temple gate." },
      ],
      related: ["getting-there", "without-car", "parking", "from-borobudur"],
    },
  },
];
