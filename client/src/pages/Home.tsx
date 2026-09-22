/**
 * 雾谷晨行设计提醒：以真实风景摄影引导一条清晨抵达的叙事；正文双语完整切换，琥珀色只服务于方向与行动。
 */
import { useEffect, useMemo, useState } from "react";
import {
  Accessibility, ArrowDownRight, ArrowUpRight, BedDouble, CarFront, ChevronDown, CircleParking,
  Clock3, CloudSun, Compass, ExternalLink, Fuel, Globe2, MapPinned, Mountain, Plane,
  ShoppingBag, Ticket, TrainFront, UtensilsCrossed,
} from "lucide-react";
import { Link } from "wouter";
import { site, siteUrl } from "../site";

type Language = "id" | "en";

const photoSources = {
  mountain: "https://chrisandwrensworld.com/punthuk-setumbu-sunrise/",
  mist: "https://chrisandwrensworld.com/punthuk-setumbu-sunrise/",
  sunrise: "https://www.arowisata.com/sunrise-at-punthuk-setumbu-tour/",
};

const content = {
  id: {
    nav: ["Gambaran", "Persiapan", "Rute", "Peta", "Tanya jawab"],
    eyebrow: "Panduan pengunjung independen · Kabupaten Magelang",
    hero: "Menyambut hari <em>sebelum</em> Borobudur terlihat.",
    intro: "Punthuk Setumbu adalah bukit pandang di Pegunungan Menoreh untuk menyaksikan pagi menyapu Candi Borobudur, Dataran Kedu, serta siluet Merapi–Merbabu—bila cuaca mengizinkan.",
    explore: "Rencanakan kunjungan", map: "Buka peta", vertical: "Karangrejo · Borobudur · Jawa Tengah",
    facts: [["Jam terbit", "04.00–17.00 WIB"], ["Jalan kaki", "±15–20 menit ke puncak"], ["Tiket", "Sekitar Rp20.000"], ["Ketinggian", "Sekitar 400 mdpl"]],
    chapters: { overview: ["01", "Mengapa datang sebelum terang", "Sebuah bukit kecil dengan pandangan yang luas"], essentials: ["02", "Sebelum melangkah", "Hal-hal kecil yang membuat pagi lebih mudah"], route: ["03", "Tiba dengan tenang", "Rute menuju Punthuk Setumbu"], nearby: ["04", "Lanjutkan perjalanan", "Dekat, tetapi bukan terburu-buru"] },
    overview: "Dari area parkir, jalur batu dan tanah menanjak menuju titik pandang terbuka. Saat fajar, pengunjung datang bukan untuk mengejar kepastian pemandangan, tetapi untuk memberi ruang pada perubahan cahaya: kabut dapat membingkai Borobudur, atau menutupnya sepenuhnya. Itulah sebabnya persiapan cuaca sama pentingnya dengan waktu berangkat.",
    annotationTitle: "Catatan lapangan", annotation: "Informasi pemerintah daerah menyarankan tiba sebelum pukul 05.00 WIB. Bagi pengunjung yang tidak melanjutkan ke puncak, tersedia gazebo dekat area parkir dengan pandangan lebih jauh.",
    photoCredit: "Foto referensi nyata · kredit sumber", photoSource: "Chris & Wren’s World", photoUse: "Hak foto tetap pada pemegang haknya.",
    cards: [
      ["Waktu terbaik", "Datang sebelum terang untuk memberi waktu berjalan dan menunggu. Langit bersih meningkatkan peluang pandangan jauh, tetapi kabut adalah bagian dari karakter tempat ini."],
      ["Durasi yang masuk akal", "Sediakan sekitar dua jam untuk perjalanan singkat dari Borobudur, pendakian, menunggu matahari, lalu kembali turun dengan aman."],
      ["Biaya masuk", "Rujukan nasional mencantumkan kisaran Rp20.000 per orang. Harga serta ketentuan dapat berubah; konfirmasi di lokasi sebelum berkunjung."],
      ["Kondisi jalur", "Jalur menuju puncak berupa batu padat dan tanah. Kenakan alas kaki dengan cengkeraman baik, terutama ketika permukaan masih basah."],
    ],
    routeIntro: "Tidak ada kebutuhan untuk tergesa-gesa. Gunakan Borobudur sebagai simpul orientasi, lalu lanjutkan ke Karangrejo dengan kendaraan yang sesuai dengan waktu tiba dan jumlah rombongan.",
    routes: [
      ["Dari bandara", "Dari Bandara Internasional Yogyakarta atau bandara di kawasan Semarang, lanjutkan perjalanan darat menuju Borobudur/Magelang. Untuk keberangkatan sebelum subuh, atur kendaraan terlebih dahulu dan sisakan waktu untuk kondisi jalan malam hari."],
      ["Bus antarkota", "Turun di simpul transportasi Yogyakarta atau Magelang, lalu sambung dengan kendaraan lokal menuju kawasan Borobudur. Layanan umum pada dini hari mungkin terbatas; periksa jadwal terkini langsung pada operator."],
      ["Taksi & sewa kendaraan", "Taksi, kendaraan sewa, atau pengemudi lokal dapat mengantar hingga area parkir. Tetapkan titik temu dan waktu penjemputan pulang karena sinyal serta ketersediaan kendaraan dapat berbeda-beda."],
      ["Dari Borobudur", "Punthuk Setumbu berada kira-kira 4 km dari Candi Borobudur. Perjalanan menuju titik awal lebih nyaman ditempuh dengan kendaraan, kemudian dilanjutkan berjalan kaki ke puncak."],
    ],
    routeNote: "Catatan keselamatan: pada perjalanan dini hari, gunakan lampu saku atau lampu ponsel, berjalan bersama rombongan bila memungkinkan, dan ikuti arahan pengelola lokasi.",
    essentialsIntro: "Layanan di area wisata dapat berubah menurut jam kedatangan, cuaca, dan kondisi operasional. Daftar ini adalah panduan orientasi, bukan jaminan layanan.",
    essentialList: [
      ["Fasilitas dasar", "Catatan pariwisata pemerintah mencantumkan toilet, toilet aksesibel, tempat ibadah, area parkir, penjualan tiket, serta makanan dan minuman."],
      ["Parkir", "Parkir tersedia di area awal. Saat akhir pekan atau musim libur, datang lebih awal dan ikuti petunjuk petugas agar jalur keluar masuk tetap lancar."],
      ["Makan & minum", "Pilih kebutuhan praktis seperti air minum dan sarapan ringan di sekitar kawasan. Bawa kembali sampah pribadi agar jalur dan titik pandang tetap bersih."],
      ["Akomodasi", "Pilihan penginapan beragam tersedia di kawasan Borobudur. Untuk kunjungan fajar, pilih lokasi yang memungkinkan keberangkatan lebih awal tanpa mengganggu waktu istirahat."],
      ["Kebutuhan perjalanan", "Stok kebutuhan, isi bahan bakar, atau pengisian daya sebaiknya diselesaikan di pusat layanan yang lebih besar sebelum menuju kawasan pada malam hari."],
    ],
    planTitle: "Urutan pagi yang sederhana", plan: "Tiba di area parkir sebelum fajar, berjalan perlahan menuju titik pandang, tunggu dengan hangat, lalu lanjutkan ke Borobudur atau desa sekitar setelah cahaya cukup.",
    nearby: [
      ["Candi Borobudur", "Warisan budaya yang terlihat dari kejauhan saat kondisi cerah. Periksa aturan kunjungan dan tiket secara terpisah; pengalaman di bukit pandang ini bukan tiket masuk ke kompleks candi."],
      ["Bukit Rhema", "Tujuan lanjutan di perbukitan Menoreh. Jalur penghubung dapat memiliki kemiringan dan permukaan licin; sesuaikan dengan kondisi fisik serta cuaca."],
      ["Bukit Barede", "Titik pandang lain di sekitar Punthuk Setumbu untuk memperpanjang penjelajahan lanskap. Datang dengan ritme yang aman dan hormati aturan setempat."],
    ],
    mapText: "Peta digunakan untuk orientasi lokasi. Ikuti arahan jalan setempat dan perbarui rute Anda sebelum berangkat.",
    faqTitle: "Pertanyaan yang biasanya muncul sebelum fajar", faqs: [
      ["Kapan sebaiknya tiba?", "Sumber pariwisata Jawa Tengah menganjurkan tiba sebelum pukul 05.00 WIB. Berangkat lebih awal membantu memberi waktu untuk parkir, berjalan, dan beradaptasi dengan kondisi gelap."],
      ["Apakah matahari terbit dan Borobudur pasti terlihat?", "Tidak. Awan, kabut, dan jarak pandang berubah cepat. Kabut adalah bagian dari pengalaman lanskap, tetapi dapat menutup pandangan ke candi maupun gunung."],
      ["Seberapa sulit pendakiannya?", "Jalur dari parkir umumnya sekitar 15–20 menit dengan batu dan tanah. Berjalanlah sesuai kemampuan, gunakan alas kaki yang stabil, dan manfaatkan pandangan dari gazebo yang lebih rendah bila diperlukan."],
      ["Apakah tiket Punthuk Setumbu sama dengan tiket Borobudur?", "Tidak. Punthuk Setumbu adalah titik pandang di luar kompleks Candi Borobudur. Akses, jam, dan biaya perlu dipastikan masing-masing."],
      ["Apa yang perlu dibawa?", "Senter kecil atau lampu ponsel, lapisan pakaian hangat, air minum, dan alas kaki dengan cengkeraman baik adalah pilihan yang praktis. Bawa pulang sampah pribadi."],
    ],
    sourceLabel: "Sumber & batasan", sourceTitle: "Dibaca seperti panduan, bukan janji.", sourceText: "Fakta kunjungan di halaman ini diringkas dari sumber publik. Informasi praktis dapat berubah; periksa pengelola dan kanal resmi sebelum melakukan perjalanan.",
    sources: ["Visit Jawa Tengah — Punthuk Setumbu", "Indonesia Travel — destinasi sekitar Borobudur", "Sistem Informasi Pariwisata Nasional — catatan fasilitas"],
    footerTitle: "Panduan singkat untuk melihat pagi dengan lebih siap.",
    footerText: "Situs ini adalah proyek informasi pengunjung independen dan nirlaba, tidak berafiliasi dengan pemerintah maupun pengelola resmi mana pun.",
    footerContext: "Informasi dirujuk silang dengan sumber terbuka dari Pemerintah Kabupaten Magelang, kanal pariwisata Jawa Tengah, dan Kementerian Pariwisata Republik Indonesia. Tidak ada rekomendasi komersial di situs ini.",
    rights: "Hak foto tetap pada fotografer/pemegang hak masing-masing.", copyright: "© 2026 Panduan Punthuk Setumbu.", legal: ["Kebijakan privasi", "Ketentuan penggunaan", "Pengaturan cookie"],
    cookieTitle: "Pilihan cookie Anda", cookieBody: "Kami menggunakan cookie penting untuk menyimpan bahasa. Analitik Google hanya dimuat jika Anda menyetujuinya.", accept: "Izinkan analitik", reject: "Tolak non-esensial", settings: "Atur pilihan",
  },
  en: {
    nav: ["Overview", "Essentials", "Route", "Map", "FAQ"],
    eyebrow: "Independent visitor guide · Magelang Regency",
    hero: "Meet the day <em>before</em> Borobudur appears.",
    intro: "Punthuk Setumbu is a Menoreh Hills viewpoint for watching morning settle over Borobudur, the Kedu Plain, and the Merapi–Merbabu silhouettes—when weather allows.",
    explore: "Plan your visit", map: "Open map", vertical: "Karangrejo · Borobudur · Central Java",
    facts: [["Published hours", "04:00–17:00 WIB"], ["Walking time", "About 15–20 min to summit"], ["Admission", "Around IDR 20,000"], ["Elevation", "About 400 m asl"]],
    chapters: { overview: ["01", "Why arrive before daylight", "A small hill with a wide horizon"], essentials: ["02", "Before you step out", "Small details that make morning easier"], route: ["03", "Arrive unhurried", "Getting to Punthuk Setumbu"], nearby: ["04", "Continue the journey", "Close by, without rushing"] },
    overview: "From the parking area, a stone-and-earth path climbs to an open viewpoint. At dawn, visitors are not chasing a guaranteed scene; they are making space for changing light. Mist may frame Borobudur, or cover it entirely. That is why weather preparation matters just as much as departure time.",
    annotationTitle: "Field note", annotation: "Regional tourism guidance recommends arriving before 05:00 WIB. For visitors who do not continue to the summit, a gazebo near the parking area offers a more distant view.",
    photoCredit: "Real-photo reference · source credit", photoSource: "Chris & Wren’s World", photoUse: "Photo rights remain with their rights holder.",
    cards: [
      ["Best timing", "Arrive before daylight to leave time for the walk and the wait. Clear skies improve long-distance views, while mist is part of this place’s character."],
      ["A sensible duration", "Allow about two hours for a short transfer from Borobudur, the ascent, sunrise waiting time, and a safe walk down."],
      ["Admission", "National tourism information lists an approximate IDR 20,000 per-person admission. Charges and conditions can change; confirm on site before visiting."],
      ["Trail surface", "The route to the summit combines compacted stone and earth. Wear footwear with good grip, particularly while the surface is still wet."],
    ],
    routeIntro: "There is no need to rush. Use Borobudur as your orientation point, then continue to Karangrejo by a vehicle suited to your arrival time and group size.",
    routes: [
      ["From an airport", "From Yogyakarta International Airport or an airport in the Semarang area, continue overland toward Borobudur/Magelang. For a pre-dawn arrival, arrange transport in advance and allow for night-road conditions."],
      ["Intercity bus", "Alight at a Yogyakarta or Magelang transport hub, then continue by local vehicle toward the Borobudur area. Public services may be limited before dawn; check current timings directly with operators."],
      ["Taxi & hired vehicle", "A taxi, hired vehicle or local driver can reach the parking area. Agree a meeting point and return time because signal and vehicle availability can vary."],
      ["From Borobudur", "Punthuk Setumbu lies roughly 4 km from Borobudur Temple. The approach to the trailhead is more comfortable by vehicle, followed by the walk to the summit."],
    ],
    routeNote: "Safety note: for pre-dawn travel, use a small torch or phone light, walk with companions where practical, and follow guidance from on-site staff.",
    essentialsIntro: "Visitor services can vary with arrival time, weather and operating conditions. This is an orientation list, not a guarantee of service.",
    essentialList: [
      ["Basic facilities", "Government tourism records list toilets, accessible toilets, a prayer space, parking, ticket sales, and food-and-drink availability."],
      ["Parking", "Parking is available at the starting area. At weekends or during holidays, arrive earlier and follow staff directions so access stays orderly."],
      ["Food & drink", "Choose practical needs such as drinking water and a light breakfast around the area. Take personal waste away to help keep the trail and viewpoint clear."],
      ["Accommodation", "A range of stays is available around Borobudur. For a sunrise visit, choose a location that supports an early departure without compromising rest."],
      ["Travel necessities", "Stock supplies, refuel, or charge devices in larger service centres before travelling into the area at night."],
    ],
    planTitle: "A simple morning sequence", plan: "Reach the parking area before dawn, walk steadily to the viewpoint, wait warmly, then continue to Borobudur or nearby villages once there is enough light.",
    nearby: [
      ["Borobudur Temple", "A cultural landmark visible in the distance in clear conditions. Check visit rules and tickets separately; this viewpoint experience is not entry to the temple complex."],
      ["Bukit Rhema", "A next stop in the Menoreh Hills. Connecting paths may be steep or slippery; match the route to your fitness and the weather."],
      ["Bukit Barede", "Another nearby viewpoint for extending a landscape-focused visit. Keep a safe pace and respect local rules."],
    ],
    mapText: "This map is for location orientation. Follow local road guidance and refresh your route before leaving.",
    faqTitle: "Questions that tend to come up before dawn", faqs: [
      ["When should I arrive?", "Central Java tourism guidance recommends arriving before 05:00 WIB. Leaving earlier gives time for parking, walking and adapting to dark conditions."],
      ["Are sunrise and Borobudur guaranteed to be visible?", "No. Cloud, mist and visibility shift quickly. Mist is part of the landscape experience, but can conceal the temple and mountains."],
      ["How difficult is the walk?", "The route from parking is typically about 15–20 minutes over stone and earth. Walk to your ability, use stable footwear, and consider the lower gazebo view if needed."],
      ["Is Punthuk Setumbu admission the same as Borobudur admission?", "No. Punthuk Setumbu is a viewpoint outside the Borobudur Temple complex. Access, timings and costs should be checked independently."],
      ["What should I bring?", "A small torch or phone light, a warm layer, drinking water and grippy footwear are practical choices. Take personal waste home with you."],
    ],
    sourceLabel: "Sources & limits", sourceTitle: "Read as a guide, not a promise.", sourceText: "Visitor facts here are summarised from public sources. Practical details can change; check with operators and official channels before travel.",
    sources: ["Visit Central Java — Punthuk Setumbu", "Indonesia Travel — destinations around Borobudur", "National Tourism Information System — facilities record"],
    footerTitle: "A short guide to meet the morning better prepared.",
    footerText: "This is an independent, non-profit visitor-information project. It is not affiliated with any government body or official operator.",
    footerContext: "Information is cross-referenced against public sources from Magelang Regency Government, Central Java tourism channels, and Indonesia’s Ministry of Tourism. No commercial recommendations appear here.",
    rights: "Photo rights remain with the respective photographers or rights holders.", copyright: "© 2026 Punthuk Setumbu Field Guide.", legal: ["Privacy policy", "Terms of use", "Cookie settings"],
    cookieTitle: "Your cookie choice", cookieBody: "We use essential cookies to retain language. Google Analytics loads only if you consent.", accept: "Allow analytics", reject: "Reject non-essential", settings: "Manage choices",
  },
} as const;

const sourceUrls = [
  "https://visitjawatengah.jatengprov.go.id/en/destinations/punthuk-setumbu",
  "https://www.indonesia.travel/id-id/travel-ideas/adventure/7-exciting-destinations-around-borobudur-to-explore-on-foot",
  "https://sisparnas.kemenpar.go.id/p/4597",
];

function IconForCard({ index }: { index: number }) {
  const icons = [<CloudSun key="a" size={18} />, <Clock3 key="b" size={18} />, <Ticket key="c" size={18} />, <Mountain key="d" size={18} />];
  return icons[index];
}

function IconForRoute({ index }: { index: number }) {
  const icons = [<Plane key="a" size={20} />, <TrainFront key="b" size={20} />, <CarFront key="c" size={20} />, <Compass key="d" size={20} />];
  return icons[index];
}

function IconForEssential({ index }: { index: number }) {
  const icons = [<Accessibility key="a" size={19} />, <CircleParking key="b" size={19} />, <UtensilsCrossed key="c" size={19} />, <BedDouble key="d" size={19} />, <Fuel key="e" size={19} />];
  return icons[index];
}

export default function Home() {
  const [language, setLanguage] = useState<Language>(() => (typeof window !== "undefined" && localStorage.getItem("punthuk-language") === "en" ? "en" : "id"));
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [cookieConsent, setCookieConsent] = useState<"unset" | "essential" | "analytics">(() => {
    if (typeof window === "undefined") return "unset";
    const stored = localStorage.getItem("punthuk-cookie-consent");
    return stored === "essential" || stored === "analytics" ? stored : "unset";
  });
  const t = content[language];

  const structuredData = useMemo(() => {
    const attraction: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      "@id": "https://setumbuhill.com/#attraction",
      name: "Punthuk Setumbu",
      description: language === "id" ? "Titik pandang matahari terbit di Perbukitan Menoreh dekat Borobudur." : "A sunrise viewpoint in the Menoreh Hills near Borobudur.",
      url: "https://setumbuhill.com/",
      image: "https://setumbuhill.com/images/punthuk-setumbu-mountains.jpg",
      address: { "@type": "PostalAddress", addressLocality: "Borobudur", addressRegion: "Central Java", addressCountry: "ID" },
      geo: { "@type": "GeoCoordinates", latitude: -7.608743098093699, longitude: 110.17662085684644 },
      openingHours: "Mo-Su 04:00-17:00",
      priceRange: "IDR 20,000 approx.",
      isAccessibleForFree: false,
    };
    const url = siteUrl("/");
    if (url) attraction.url = url;
    const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: t.faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
    return [attraction, faq];
  }, [language, t.faqs]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === "id"
      ? "Punthuk Setumbu Magelang — Panduan Wisata: Titik Pandang Matahari Terbit & Borobudur"
      : "Punthuk Setumbu Magelang Travel Guide: Sunrise Viewpoint & Borobudur";
    const description = language === "id"
      ? "Panduan lengkap Punthuk Setumbu: bukit pandang matahari terbit di Menoreh dekat Borobudur. Cek harga tiket (±Rp20.000), jam buka (04.00–17.00 WIB), rute dari Borobudur, dan kedai kopi terdekat."
      : "Plan your sunrise at Punthuk Setumbu Hill, a Menoreh viewpoint above Borobudur. Ticket price (~IDR 20,000), hours (04:00–17:00 WIB), directions from Borobudur, and nearby cafés.";
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;
    localStorage.setItem("punthuk-language", language);
  }, [language]);

  useEffect(() => {
    if (cookieConsent !== "analytics" || document.getElementById("ga4-script")) return;
    const script = document.createElement("script");
    script.id = "ga4-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${site.analyticsId}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) { window.dataLayer.push(args); }
    gtag("js", new Date());
    gtag("config", site.analyticsId);
  }, [cookieConsent]);

  const setConsent = (choice: "essential" | "analytics") => {
    localStorage.setItem("punthuk-cookie-consent", choice);
    setCookieConsent(choice);
  };

  return (
    <div className="guide">
      <script type="application/ld+json">{JSON.stringify(structuredData[0])}</script>
      <script type="application/ld+json">{JSON.stringify(structuredData[1])}</script>

      <section className="hero">
        <img className="hero-photo" src="/images/punthuk-setumbu-mountains.jpg" alt="Pemandangan nyata matahari terbit dan pegunungan dari kawasan Punthuk Setumbu" />
        <img className="contour-overlay" src="/images/punthuk-setumbu-contours.png" alt="" />
        <header className="header page-container">
          <a className="brand" href="#top" aria-label="Punthuk Setumbu">
            <img src="/images/punthuk-setumbu-logo.png" alt="" />
            <span>PUNTHUK<br />SETUMBU</span>
          </a>
          <nav className="nav" aria-label={language === "id" ? "Navigasi utama" : "Main navigation"}>
            <a href="#overview">{t.nav[0]}</a><a href="#essentials">{t.nav[1]}</a><a href="#route">{t.nav[2]}</a><a href="#map">{t.nav[3]}</a><a href="#faq">{t.nav[4]}</a>
          </nav>
          <div className="language-switch" aria-label={language === "id" ? "Pilih bahasa" : "Choose language"}>
            <button className={language === "id" ? "is-active" : ""} onClick={() => setLanguage("id")}>ID</button>
            <button className={language === "en" ? "is-active" : ""} onClick={() => setLanguage("en")}>EN</button>
          </div>
        </header>
        <div id="top" className="hero-main page-container">
          <div className="hero-copy">
            <div className="eyebrow"><Globe2 size={14} /> {t.eyebrow}</div>
            <h1 dangerouslySetInnerHTML={{ __html: t.hero }} />
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="button button--amber" href="#essentials">{t.explore} <ArrowDownRight size={17} /></a>
              <a className="button button--ghost" href="#map">{t.map} <MapPinned size={16} /></a>
            </div>
          </div>
          <aside className="hero-aside" aria-hidden="true"><span>{t.vertical}</span><i className="line" /></aside>
        </div>
      </section>

      <section className="fact-strip" aria-label={language === "id" ? "Fakta kunjungan" : "Visitor facts"}>
        {t.facts.map(([label, value], index) => <div className="quick-fact" key={label}><IconForCard index={index} /><span>{label}</span><strong>{value}</strong></div>)}
      </section>

      <section id="overview" className="chapter">
        <div className="chapter-label"><span>{t.chapters.overview[0]}</span><p>{t.chapters.overview[1]}</p></div>
        <div className="chapter-copy">
          <h2>{t.chapters.overview[2]}</h2>
          <p>{t.overview}</p>
          <div className="overview-grid">
            <div className="annotation"><strong>{t.annotationTitle}.</strong> {t.annotation}</div>
            <figure className="photo-figure"><img src="/images/punthuk-setumbu-mist.jpg" alt="Kabut pagi nyata di lanskap Punthuk Setumbu" /><figcaption><span>{t.photoCredit}: <a href={photoSources.mist} target="_blank" rel="noreferrer">{t.photoSource}</a></span><span>{t.photoUse}</span></figcaption></figure>
          </div>
        </div>
      </section>

      <section id="essentials" className="chapter">
        <div className="chapter-label"><span>{t.chapters.essentials[0]}</span><p>{t.chapters.essentials[1]}</p></div>
        <div className="chapter-copy">
          <h2>{t.chapters.essentials[2]}</h2>
          <p>{t.essentialsIntro}</p>
          <div className="info-cards">{t.cards.map(([title, text], index) => <article className="info-card" key={title}><div className="icon-holder"><IconForCard index={index} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section id="route" className="route-section">
        <div className="chapter">
          <div className="chapter-label"><span>{t.chapters.route[0]}</span><p>{t.chapters.route[1]}</p></div>
          <div className="chapter-copy">
            <h2>{t.chapters.route[2]}</h2><p>{t.routeIntro}</p>
            <div className="route-list">{t.routes.map(([title, text], index) => <article className="route-item" key={title}><span className="route-num">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><span className="route-icon"><IconForRoute index={index} /></span></article>)}</div>
            <p className="route-note">{t.routeNote}</p>
          </div>
        </div>
      </section>

      <section className="chapter">
        <div className="chapter-label"><span>04</span><p>{language === "id" ? "Kebutuhan di sekitar lokasi" : "Around-site necessities"}</p></div>
        <div className="chapter-copy">
          <h2>{language === "id" ? "Rencanakan hal praktis, bukan hanya fotonya." : "Plan the practicals, not only the photograph."}</h2>
          <div className="essential-grid">
            <ul className="essential-list">{t.essentialList.map(([title, text], index) => <li key={title}><IconForEssential index={index} /><div><strong>{title}</strong><p>{text}</p></div></li>)}</ul>
            <aside className="visit-plan"><img src="/images/punthuk-setumbu-waypoint.png" alt="" /><h3>{t.planTitle}</h3><p>{t.plan}</p></aside>
          </div>
        </div>
      </section>

      <section id="nearby" className="chapter">
        <div className="chapter-label"><span>{t.chapters.nearby[0]}</span><p>{t.chapters.nearby[1]}</p></div>
        <div className="chapter-copy">
          <h2>{language === "id" ? "Beri ruang untuk lanskap di sekitarnya." : "Leave room for the landscape around it."}</h2>
          <div className="nearby-grid">{t.nearby.map(([title, text], index) => <article className="nearby-card" key={title}><span>0{index + 1} · {language === "id" ? "Sekitar Borobudur" : "Around Borobudur"}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section id="map" className="map-section">
        <div className="page-container">
          <div className="map-heading"><div><div className="section-kicker"><MapPinned size={15} /> {language === "id" ? "Orientasi" : "Orientation"}</div><h2 className="section-title">Punthuk Setumbu</h2></div><p>{t.mapText}</p></div>
          <div className="map-frame"><iframe title="Peta Punthuk Setumbu" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3419.158504186966!2d110.17662085684644!3d-7.608743098093699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8d05a1ccd491%3A0x6717b6315e12cdb1!2sPunthuk%20Setumbu!5e1!3m2!1sid!2sid!4v1787106237568!5m2!1sid!2sid" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /></div>
        </div>
      </section>

      <section id="faq" className="faq-section">
        <div className="faq-grid"><div><div className="section-kicker"><Compass size={15} /> FAQ</div><h2 className="section-title">{t.faqTitle}</h2></div><div className="faq-list">{t.faqs.map(([question, answer], index) => <article className="faq-item" key={question}><button aria-expanded={openFaq === index} aria-controls={`faq-${index}`} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><ChevronDown size={18} /></button>{openFaq === index && <p id={`faq-${index}`}>{answer}</p>}</article>)}</div></div>
      </section>

      <section className="source-section"><div className="page-container source-grid"><div><div className="eyebrow">{t.sourceLabel}</div><h2>{t.sourceTitle}</h2></div><div><p>{t.sourceText}</p><ul className="source-list">{t.sources.map((source, index) => <li key={source}><span>0{index + 1}</span><a href={sourceUrls[index]} target="_blank" rel="noreferrer">{source} <ExternalLink size={13} aria-label={language === "id" ? "Buka sumber" : "Open source"} /></a></li>)}</ul></div></div></section>

      <footer className="footer"><img className="footer-arc" src="/images/punthuk-setumbu-sunrise-arc.png" alt="" /><div className="page-container footer-grid"><div><a className="brand" href="#top"><img src="/images/punthuk-setumbu-logo.png" alt="" /><span>PUNTHUK<br />SETUMBU</span></a><h3>{t.footerTitle}</h3></div><div><p>{t.footerText}</p><p>{t.footerContext}</p></div><div className="footer-nav"><Link href="/privacy">{t.legal[0]}</Link><Link href="/terms">{t.legal[1]}</Link><Link href="/cookies">{t.legal[2]}</Link></div></div><div className="page-container footer-bottom"><span>{t.rights}</span><span>{t.copyright}</span></div></footer>

      {cookieConsent === "unset" && <aside className="cookie-notice" aria-label={t.cookieTitle}><span className="eyebrow">{t.cookieTitle}</span><p>{t.cookieBody} <Link href="/cookies">{t.settings}</Link></p><div className="cookie-notice-actions"><button onClick={() => setConsent("analytics")}>{t.accept}</button><button onClick={() => setConsent("essential")}>{t.reject}</button></div></aside>}
    </div>
  );
}

declare global { interface Window { dataLayer: unknown[][]; } }
