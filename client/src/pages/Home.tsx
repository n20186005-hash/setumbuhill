/**
 * 雾谷晨行设计提醒：以真实风景摄影引导一条清晨抵达的叙事；正文双语完整切换，琥珀色只服务于方向与行动。
 */
import { useMemo } from "react";
import {
  Accessibility, ArrowDownRight, ArrowUpRight, BedDouble, CarFront, ChevronDown, CircleParking,
  Clock3, CloudSun, Compass, ExternalLink, Fuel, Globe2, MapPinned, Mountain, Plane,
  ShoppingBag, Ticket, TrainFront, UtensilsCrossed,
} from "lucide-react";

import { site, siteUrl, languagePath, type Language } from "../site";
import { groupTopics, groupLabel, type TopicGroup } from "../lib/topics";



const photoSources = {
  mountain: "https://chrisandwrensworld.com/punthuk-setumbu-sunrise/",
  mist: "https://chrisandwrensworld.com/punthuk-setumbu-sunrise/",
  sunrise: "https://www.arowisata.com/sunrise-at-punthuk-setumbu-tour/",
};

const content = {
  id: {
    nav: ["Gambaran", "Persiapan", "Rute", "Peta", "Tanya jawab", "Topik"],
    eyebrow: "Panduan pengunjung independen · Kabupaten Magelang",
    hero: "Punthuk Setumbu: <em>sunrise</em> di Magelang.",
    intro: "Punthuk Setumbu adalah bukit pandang di Pegunungan Menoreh untuk menyaksikan pagi menyapu Candi Borobudur, Dataran Kedu, serta siluet Merapi–Merbabu—bila cuaca mengizinkan.",
    explore: "Rencanakan kunjungan", map: "Buka peta", vertical: "Karangrejo · Borobudur · Jawa Tengah",
    facts: [["Lokasi", "Karangrejo, Magelang"], ["Akses sunrise", "Konfirmasi sebelum berangkat"], ["Tiket", "Tanyakan tarif hari ini"], ["Pemandangan", "Bergantung cuaca"]],
    chapters: { overview: ["01", "Mengapa datang sebelum terang", "Sebuah bukit kecil dengan pandangan yang luas"], essentials: ["02", "Sebelum melangkah", "Hal-hal kecil yang membuat pagi lebih mudah"], route: ["03", "Tiba dengan tenang", "Rute menuju Punthuk Setumbu"], nearby: ["04", "Lanjutkan perjalanan", "Dekat, tetapi bukan terburu-buru"] },
    overview: "Dari area parkir, jalur batu dan tanah menanjak menuju titik pandang terbuka. Saat fajar, pengunjung datang bukan untuk mengejar kepastian pemandangan, tetapi untuk memberi ruang pada perubahan cahaya: kabut dapat membingkai Borobudur, atau menutupnya sepenuhnya. Itulah sebabnya persiapan cuaca sama pentingnya dengan waktu berangkat.",
    annotationTitle: "Catatan lapangan", annotation: "Panduan pariwisata Jawa Tengah menggambarkan kunjungan fajar, tetapi bukan konfirmasi bahwa pintu masuk buka dini hari saat ini. Hubungi pengelola sebelum mengatur perjalanan gelap.",
    photoCredit: "Gambar referensi · sumber lama", photoSource: "Chris & Wren’s World", photoUse: "Kredit lama dipertahankan; lisensi penggunaan belum terverifikasi. Bukan bukti kondisi hari ini.",
    cards: [
      ["Waktu terbaik", "Konfirmasi akses fajar lebih dahulu. Periksa prakiraan cuaca; matahari, Borobudur, Merapi, Merbabu, dan kabut tidak dijamin terlihat."],
      ["Durasi yang masuk akal", "Berikan waktu untuk perjalanan, pemeriksaan tiket, jalan menanjak dan kembali. Lama kunjungan bergantung kondisi fisik, cuaca, antrean dan akses hari itu."],
      ["Biaya masuk", "Tarif terkini dan kategori tiket belum terverifikasi. Tanyakan harga untuk rombongan Anda, parkir, layanan tambahan dan ketentuan pemesanan sebelum membayar."],
      ["Kondisi jalur", "Sumber pariwisata provinsi menjelaskan jalan menanjak berbatu dan tanah. Kondisi terkini dapat berubah; tanyakan akses, kemiringan dan permukaan sebelum mulai."],
    ],
    routeIntro: "Tidak ada kebutuhan untuk tergesa-gesa. Gunakan Borobudur sebagai simpul orientasi, lalu lanjutkan ke Karangrejo dengan kendaraan yang sesuai dengan waktu tiba dan jumlah rombongan.",
    routes: [
      ["Dari bandara", "Dari Bandara Internasional Yogyakarta atau bandara di kawasan Semarang, lanjutkan perjalanan darat menuju Borobudur/Magelang. Untuk keberangkatan sebelum subuh, atur kendaraan terlebih dahulu dan sisakan waktu untuk kondisi jalan malam hari."],
      ["Bus antarkota", "Turun di simpul transportasi Yogyakarta atau Magelang, lalu sambung dengan kendaraan lokal menuju kawasan Borobudur. Layanan umum pada dini hari mungkin terbatas; periksa jadwal terkini langsung pada operator."],
      ["Taksi & sewa kendaraan", "Tanyakan kepada penyedia kendaraan apakah mereka melayani pintu masuk yang benar pada waktu rencana Anda. Sepakati titik turun, penjemputan dan perjalanan pulang; jangan mengandalkan ketersediaan spontan."],
      ["Dari Borobudur", "Gunakan pin Punthuk Setumbu di Kurahan, Karangrejo, bukan pintu masuk Candi Borobudur. Periksa rute jalan dan lokasi turun terbaru dengan pengemudi setempat."],
    ],
    routeNote: "Catatan keselamatan: pada perjalanan dini hari, gunakan lampu saku atau lampu ponsel, berjalan bersama rombongan bila memungkinkan, dan ikuti arahan pengelola lokasi.",
    essentialsIntro: "Layanan di area wisata dapat berubah menurut jam kedatangan, cuaca, dan kondisi operasional. Daftar ini adalah panduan orientasi, bukan jaminan layanan.",
    essentialList: [
      ["Fasilitas dasar", "Tanyakan kondisi toilet, tempat istirahat dan jalur yang sesuai kebutuhan mobilitas Anda. Daftar wisata lama tidak menjamin fasilitas beroperasi atau rute bebas tangga."],
      ["Parkir", "Konfirmasi lokasi, jam akses dan biaya parkir serta ruang untuk jenis kendaraan Anda. Ikuti petunjuk petugas; jangan berasumsi parkir termasuk tiket."],
      ["Makan & minum", "Bawa air minum dan kebutuhan pribadi. Tanyakan waktu layanan warung; jangan mengandalkan penjualan makanan sebelum fajar. Bawa kembali sampah."],
      ["Akomodasi", "Pilihan penginapan beragam tersedia di kawasan Borobudur. Untuk kunjungan fajar, pilih lokasi yang memungkinkan keberangkatan lebih awal tanpa mengganggu waktu istirahat."],
      ["Kebutuhan perjalanan", "Stok kebutuhan, isi bahan bakar, atau pengisian daya sebaiknya diselesaikan di pusat layanan yang lebih besar sebelum menuju kawasan pada malam hari."],
    ],
    planTitle: "Urutan pagi yang sederhana", plan: "Konfirmasi pintu masuk dan waktu akses, periksa cuaca, atur transportasi pulang, lalu berjalan sesuai kondisi. Rencana ke Candi Borobudur memerlukan aturan dan tiket terpisah.",
    nearby: [
      ["Candi Borobudur", "Warisan budaya yang terlihat dari kejauhan saat kondisi cerah. Periksa aturan kunjungan dan tiket secara terpisah; pengalaman di bukit pandang ini bukan tiket masuk ke kompleks candi."],
      ["Bukit Rhema", "Calon tujuan terpisah di Menoreh. Periksa alamat, rute, akses dan tiketnya sendiri; panduan ini belum memverifikasi jalur penghubung atau izin masuk saat ini."],
      ["Bukit Barede", "Calon titik pandang untuk ditelusuri lebih lanjut. Konfirmasikan lokasi, status buka, rute dan tiket secara terpisah sebelum menambahkannya ke perjalanan."],
    ],
    mapText: "Peta digunakan untuk orientasi lokasi. Ikuti arahan jalan setempat dan perbarui rute Anda sebelum berangkat.",
    faqTitle: "Pertanyaan yang biasanya muncul sebelum fajar", faqs: [
      ["Kapan sebaiknya tiba?", "Tanyakan jam akses dan syarat kunjungan sunrise kepada pengelola sebelum berangkat. Google Maps yang diperiksa 19 Oktober 2026 tidak menampilkan jam buka; panduan fajar lama bukan jaminan pintu masuk buka dini hari."],
      ["Apakah matahari terbit dan Borobudur pasti terlihat?", "Tidak. Awan, kabut, dan jarak pandang berubah cepat. Kabut adalah bagian dari pengalaman lanskap, tetapi dapat menutup pandangan ke candi maupun gunung."],
      ["Seberapa sulit pendakiannya?", "Sumber provinsi menggambarkan jalur menanjak berbatu dan tanah. Waktu berjalan serta kelayakan akses bergantung kondisi dan kemampuan Anda; tanyakan alternatif kepada petugas, tanpa menganggap rute bebas tangga."],
      ["Apakah tiket Punthuk Setumbu sama dengan tiket Borobudur?", "Tidak. Punthuk Setumbu adalah titik pandang di luar kompleks Candi Borobudur. Akses, jam, dan biaya perlu dipastikan masing-masing."],
      ["Apa yang perlu dibawa?", "Senter kecil atau lampu ponsel, lapisan pakaian hangat, air minum, dan alas kaki dengan cengkeraman baik adalah pilihan yang praktis. Bawa pulang sampah pribadi."],
    ],
    sourceLabel: "Sumber & batasan", sourceTitle: "Dibaca seperti panduan, bukan janji.", sourceText: "Fakta kunjungan di halaman ini diringkas dari sumber publik. Informasi praktis dapat berubah; periksa pengelola dan kanal resmi sebelum melakukan perjalanan.",
    sources: ["Visit Jawa Tengah — konteks bukit dan jalur", "Jadesta — lokasi Desa Wisata Karangrejo", "Google Maps — lokasi, diperiksa 19 Oktober 2026"],
    footerTitle: "Panduan singkat untuk melihat pagi dengan lebih siap.",
    footerText: "Situs ini adalah proyek informasi pengunjung independen dan nirlaba, tidak berafiliasi dengan pemerintah maupun pengelola resmi mana pun.",
    footerContext: "Sumber lokasi dan konteks: pariwisata Jawa Tengah dan Jadesta. Informasi diperiksa 19 Oktober 2026; layanan, biaya dan akses perlu dikonfirmasi kembali.",
    rights: "Hak foto tetap pada fotografer/pemegang hak masing-masing.", copyright: "© 2026 Panduan Punthuk Setumbu.", legal: ["Kebijakan privasi", "Ketentuan penggunaan", "Pengaturan cookie"],
  },
  en: {
    nav: ["Overview", "Essentials", "Route", "Map", "FAQ", "Topics"],
    eyebrow: "Independent visitor guide · Magelang Regency",
    hero: "Punthuk Setumbu: a <em>sunrise</em> viewpoint.",
    intro: "Punthuk Setumbu is a Menoreh Hills viewpoint for watching morning settle over Borobudur, the Kedu Plain, and the Merapi–Merbabu silhouettes—when weather allows.",
    explore: "Plan your visit", map: "Open map", vertical: "Karangrejo · Borobudur · Central Java",
    facts: [["Location", "Karangrejo, Magelang"], ["Sunrise access", "Confirm before departure"], ["Admission", "Ask for today’s tariff"], ["Views", "Weather dependent"]],
    chapters: { overview: ["01", "Why arrive before daylight", "A small hill with a wide horizon"], essentials: ["02", "Before you step out", "Small details that make morning easier"], route: ["03", "Arrive unhurried", "Getting to Punthuk Setumbu"], nearby: ["04", "Continue the journey", "Close by, without rushing"] },
    overview: "From the parking area, a stone-and-earth path climbs to an open viewpoint. At dawn, visitors are not chasing a guaranteed scene; they are making space for changing light. Mist may frame Borobudur, or cover it entirely. That is why weather preparation matters just as much as departure time.",
    annotationTitle: "Field note", annotation: "Central Java tourism guidance describes dawn visits, but does not establish current pre-dawn gate access. Confirm entry with local management before arranging travel in the dark.",
    photoCredit: "Reference image · inherited source", photoSource: "Chris & Wren’s World", photoUse: "Inherited credit retained; reuse permission is unverified. This is not evidence of today’s conditions.",
    cards: [
      ["Best timing", "Confirm dawn access first. Check the forecast; sunrise, Borobudur, Merapi, Merbabu and mist are never guaranteed to be visible."],
      ["A sensible duration", "Allow time for travel, ticket checks, the uphill walk and return. Duration depends on fitness, weather, queues and access on the day."],
      ["Admission", "Current tariffs and ticket categories are unverified. Ask for the price applying to your party, parking, extras and any booking conditions before paying."],
      ["Trail surface", "Provincial tourism guidance describes an uphill stone-and-earth route. Conditions can change; ask about access, gradients and the surface before starting."],
    ],
    routeIntro: "There is no need to rush. Use Borobudur as your orientation point, then continue to Karangrejo by a vehicle suited to your arrival time and group size.",
    routes: [
      ["From an airport", "From Yogyakarta International Airport or an airport in the Semarang area, continue overland toward Borobudur/Magelang. For a pre-dawn arrival, arrange transport in advance and allow for night-road conditions."],
      ["Intercity bus", "Alight at a Yogyakarta or Magelang transport hub, then continue by local vehicle toward the Borobudur area. Public services may be limited before dawn; check current timings directly with operators."],
      ["Taxi & hired vehicle", "Ask transport providers whether they serve the correct entrance at your intended time. Agree a drop-off, collection point and return journey; do not depend on spontaneous availability."],
      ["From Borobudur", "Use the Punthuk Setumbu pin in Kurahan, Karangrejo, rather than a Borobudur Temple entrance. Confirm current road access and the drop-off point with your driver."],
    ],
    routeNote: "Safety note: for pre-dawn travel, use a small torch or phone light, walk with companions where practical, and follow guidance from on-site staff.",
    essentialsIntro: "Visitor services can vary with arrival time, weather and operating conditions. This is an orientation list, not a guarantee of service.",
    essentialList: [
      ["Basic facilities", "Ask about toilets, rest areas and a route suitable for your mobility needs. Older tourism listings do not guarantee operating facilities or a step-free route."],
      ["Parking", "Confirm parking location, access hours, charges and space for your vehicle. Follow staff directions; do not assume parking is included in admission."],
      ["Food & drink", "Carry drinking water and personal essentials. Ask when food vendors operate; do not rely on pre-dawn sales. Take your rubbish away."],
      ["Accommodation", "A range of stays is available around Borobudur. For a sunrise visit, choose a location that supports an early departure without compromising rest."],
      ["Travel necessities", "Stock supplies, refuel, or charge devices in larger service centres before travelling into the area at night."],
    ],
    planTitle: "A simple morning sequence", plan: "Confirm the entrance and access time, check the weather, arrange return transport, then walk according to conditions. A Borobudur Temple visit has separate rules and tickets.",
    nearby: [
      ["Borobudur Temple", "A cultural landmark visible in the distance in clear conditions. Check visit rules and tickets separately; this viewpoint experience is not entry to the temple complex."],
      ["Bukit Rhema", "A separate destination to consider in Menoreh. Check its address, route, access and tickets independently; this guide has not verified a connecting path or current admission."],
      ["Bukit Barede", "A candidate viewpoint to investigate separately. Confirm its location, opening status, route and tickets before adding it to your trip."],
    ],
    mapText: "This map is for location orientation. Follow local road guidance and refresh your route before leaving.",
    faqTitle: "Questions that tend to come up before dawn", faqs: [
      ["When should I arrive?", "Ask management about access times and sunrise-entry conditions before departure. Google Maps checked on 19 October 2026 did not show opening hours; older dawn guidance is not a guarantee of pre-dawn entry."],
      ["Are sunrise and Borobudur guaranteed to be visible?", "No. Cloud, mist and visibility shift quickly. Mist is part of the landscape experience, but can conceal the temple and mountains."],
      ["How difficult is the walk?", "Provincial guidance describes an uphill stone-and-earth path. Walking time and suitability depend on conditions and your ability; ask staff about alternatives without assuming step-free access."],
      ["Is Punthuk Setumbu admission the same as Borobudur admission?", "No. Punthuk Setumbu is a viewpoint outside the Borobudur Temple complex. Access, timings and costs should be checked independently."],
      ["What should I bring?", "A small torch or phone light, a warm layer, drinking water and grippy footwear are practical choices. Take personal waste home with you."],
    ],
    sourceLabel: "Sources & limits", sourceTitle: "Read as a guide, not a promise.", sourceText: "Visitor facts here are summarised from public sources. Practical details can change; check with operators and official channels before travel.",
    sources: ["Visit Central Java — hill and walking context", "Jadesta — Karangrejo tourism village location", "Google Maps — location, checked 19 October 2026"],
    footerTitle: "A short guide to meet the morning better prepared.",
    footerText: "This is an independent, non-profit visitor-information project. It is not affiliated with any government body or official operator.",
    footerContext: "Location and context sources: Central Java tourism and Jadesta. Checked on 19 October 2026; services, prices and access still require confirmation.",
    rights: "Photo rights remain with the respective photographers or rights holders.", copyright: "© 2026 Punthuk Setumbu Field Guide.", legal: ["Privacy policy", "Terms of use", "Cookie settings"],
  },
} as const;

const sourceUrls = [
  "https://visitjawatengah.jatengprov.go.id/en/destinations/punthuk-setumbu",
  "https://jadesta.kemenpar.go.id/atraksi/punthuk_setumbu",
  "https://maps.app.goo.gl/NzMFjeMifXDjJ9Xv8",
];

const topicGroups: TopicGroup[] = ["sunrise", "prepare", "transport", "food", "nearby", "itinerary"];

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

export default function Home({language="id"}:{language?:Language}) {
  const t=content[language];
  const structuredData = useMemo(() => {
    const attraction: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      "@id": "https://setumbuhill.com/#attraction",
      name: "Punthuk Setumbu",
      description: language === "id" ? "Titik pandang matahari terbit di Perbukitan Menoreh dekat Borobudur." : "A sunrise viewpoint in the Menoreh Hills near Borobudur.",
      url: "https://setumbuhill.com/",
      hasMap: "https://maps.app.goo.gl/NzMFjeMifXDjJ9Xv8",
      address: { "@type": "PostalAddress", streetAddress:"Kurahan, Karangrejo", addressLocality: "Borobudur, Magelang", addressRegion: "Central Java", postalCode:"56553", addressCountry: "ID" },
      geo: { "@type": "GeoCoordinates", latitude: -7.6093756, longitude: 110.1777919 },

    };
    const url = siteUrl(languagePath(language));
    if (url) attraction.url = url;
    const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: t.faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
    return [attraction, faq];
  }, [language, t.faqs]);

  return (
    <div className="guide">
      <script type="application/ld+json">{JSON.stringify(structuredData[0])}</script>
      <script type="application/ld+json">{JSON.stringify(structuredData[1])}</script>

      <section className="hero">
        <img className="hero-photo" src="/images/punthuk-setumbu-mountains.jpg" alt={language==="id"?"Gambar referensi lanskap; kondisi kunjungan dapat berbeda":"Landscape reference image; visiting conditions can differ"} />
        <img className="contour-overlay" src="/images/punthuk-setumbu-contours.webp" alt="" />
        <header className="header page-container">
          <a className="brand" href="#top" aria-label="Punthuk Setumbu">
            <img src="/images/punthuk-setumbu-logo.webp" alt="" />
            <span>PUNTHUK<br />SETUMBU</span>
          </a>
          <nav className="nav" aria-label={language === "id" ? "Navigasi utama" : "Main navigation"}>
            <a href="#overview">{t.nav[0]}</a><a href="#essentials">{t.nav[1]}</a><a href="#route">{t.nav[2]}</a><a href="#map">{t.nav[3]}</a><a href="#faq">{t.nav[4]}</a><a href="#topics">{t.nav[5]}</a>
          </nav>
          <div className="language-switch" aria-label={language === "id" ? "Pilih bahasa" : "Choose language"}>
            <a href="/" hrefLang="id" className={language === "id" ? "is-active" : ""}>ID</a>
            <a href="/en/" hrefLang="en" className={language === "en" ? "is-active" : ""}>EN</a>
          </div>
        </header><p className="photo-note page-container">{language==="id"?"Gambar referensi — sumber lama: ":"Reference image — inherited source: "}<a href={photoSources.mountain} target="_blank" rel="noreferrer">Chris &amp; Wren’s World</a> · {language==="id"?"bukan kondisi langsung":"not a live view"}</p>
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
            <figure className="photo-figure"><img loading="lazy" decoding="async" src="/images/punthuk-setumbu-mist.jpg" alt={language==="id"?"Gambar referensi kabut dan lanskap":"Mist and landscape reference image"} /><figcaption><span>{t.photoCredit}: <a href={photoSources.mist} target="_blank" rel="noreferrer">{t.photoSource}</a></span><span>{t.photoUse}</span></figcaption></figure>
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
            <aside className="visit-plan"><img src="/images/punthuk-setumbu-waypoint.webp" alt="" /><h3>{t.planTitle}</h3><p>{t.plan}</p></aside>
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
          <p><a className="button button--ink" href="https://maps.app.goo.gl/NzMFjeMifXDjJ9Xv8" target="_blank" rel="noreferrer">{language==="id"?"Buka Google Maps":"Open Google Maps"}</a></p><p>{language==="id"?"Kurahan, Karangrejo, Borobudur, Magelang, Jawa Tengah 56553. Snapshot Google Maps 19 Oktober 2026: 4,6/5 dari 9.284 ulasan pihak ketiga; bukan penilaian situs ini. Jam buka tidak ditampilkan; konfirmasi akses dan tiket hari ini.":"Kurahan, Karangrejo, Borobudur, Magelang, Central Java 56553. Google Maps snapshot, 19 October 2026: 4.6/5 from 9,284 third-party reviews; not this site’s rating. Opening hours were not shown; confirm today’s access and admission."}</p><div className="map-frame"><iframe title={language==="id"?"Peta Punthuk Setumbu":"Punthuk Setumbu map"} src="https://maps.google.com/maps?q=-7.6093756,110.1777919&z=15&output=embed" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /></div>
        </div>
      </section>

      <section id="faq" className="faq-section">
        <div className="faq-grid"><div><div className="section-kicker"><Compass size={15} /> FAQ</div><h2 className="section-title">{t.faqTitle}</h2></div><div className="faq-list">{t.faqs.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}<ChevronDown size={18}/></summary><p>{answer}</p></details>)}</div></div>
      </section>

      <section id="topics" className="topic-related">
        <div className="page-container">
          <div className="section-kicker"><Compass size={15} /> {language === "id" ? "Panduan topik" : "Topic guides"}</div>
          <h2 className="section-title">{language === "id" ? "Rencanakan setiap bagian kunjungan" : "Plan every part of the visit"}</h2>
          {topicGroups.map((group) => (
            <div className="topic-group" key={group}>
              <h3 className="topic-group-title">{groupLabel(language, group)}</h3>
              <div className="topic-related-grid">
                {groupTopics(language, group).map((tk) => (
                  <a className="topic-related-card" key={tk.slug} href={languagePath(language, tk.slug)}>
                    <span>{groupLabel(language, tk.group)}</span>
                    <h3>{tk[language].h1}</h3>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="source-section"><div className="page-container source-grid"><div><div className="eyebrow">{t.sourceLabel}</div><h2>{t.sourceTitle}</h2></div><div><p>{t.sourceText}</p><ul className="source-list">{t.sources.map((source, index) => <li key={source}><span>0{index + 1}</span><a href={sourceUrls[index]} target="_blank" rel="noreferrer">{source} <ExternalLink size={13} aria-label={language === "id" ? "Buka sumber" : "Open source"} /></a></li>)}</ul></div></div></section>

      <footer className="footer"><img className="footer-arc" src="/images/punthuk-setumbu-sunrise-arc.webp" alt="" /><div className="page-container footer-grid"><div><a className="brand" href="#top"><img src="/images/punthuk-setumbu-logo.webp" alt="" /><span>PUNTHUK<br />SETUMBU</span></a><h3>{t.footerTitle}</h3></div><div><p>{t.footerText}</p><p>{t.footerContext}</p></div><div className="footer-nav"><a href={languagePath(language,"privacy")}>{t.legal[0]}</a><a href={languagePath(language,"terms")}>{t.legal[1]}</a><a href={languagePath(language,"cookies")}>{t.legal[2]}</a></div></div><div className="page-container footer-bottom"><span>{t.rights}</span><span>{t.copyright}</span></div></footer>

    </div>
  );
}
