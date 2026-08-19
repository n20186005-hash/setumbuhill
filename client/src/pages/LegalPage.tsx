/**
 * 雾谷晨行设计提醒：法律页延续拂晓靛蓝、雾白与琥珀的旅行手册语气；内容克制、双语完整且无语言混杂。
 */
import { ArrowLeft, Check, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { site } from "../site";

type Language = "id" | "en";
type LegalKind = "privacy" | "terms" | "cookies";

const legalContent = {
  id: {
    privacy: {
      label: "Informasi penting",
      title: "Kebijakan privasi",
      intro: "Ringkasan tentang data minimum yang mungkin diproses saat Anda menggunakan panduan ini.",
      sections: [
        ["Pembaruan", ["Dokumen ini berlaku sejak Agustus 2026. Kami meninjau isi kebijakan bila cara kerja situs berubah."]],
        ["Informasi yang mungkin dikumpulkan", ["Kami hanya memproses data minimum yang diperlukan untuk mengoperasikan situs, seperti data penjelajahan teknis (alamat IP, jenis peramban, serta halaman yang dibuka), cookie dan teknologi sejenis, serta informasi yang Anda kirimkan secara sukarela melalui kontak."]],
        ["Cara penggunaan", ["Data digunakan untuk menjaga dan menyempurnakan pengalaman membaca, memahami pola penggunaan secara agregat, menanggapi permintaan, serta memenuhi kewajiban hukum yang berlaku."]],
        ["Layanan pihak ketiga", ["Peta Google dapat digunakan untuk menunjukkan lokasi, dan Google Analytics hanya dimuat jika Anda memberi persetujuan untuk cookie analitik. Layanan tersebut memiliki kebijakan privasinya sendiri."]],
        ["Hak Anda", ["Sesuai peraturan yang relevan, Anda dapat meminta akses, perbaikan, atau penghapusan data pribadi, menolak pemrosesan tertentu, serta mengajukan keluhan kepada otoritas pengawas yang berwenang."]],
      ],
    },
    terms: {
      label: "Informasi penting",
      title: "Ketentuan penggunaan",
      intro: "Ketentuan sederhana untuk menggunakan panduan informasi wisata independen ini secara bertanggung jawab.",
      sections: [
        ["Pembaruan", ["Dokumen ini berlaku sejak Agustus 2026."]],
        ["Penggunaan situs", ["Dengan mengakses panduan ini, Anda setuju menggunakan informasi sebagai bahan orientasi perjalanan, bukan sebagai pengganti konfirmasi langsung dari pengelola atau otoritas setempat."]],
        ["Status independen", ["Situs ini adalah proyek informasi wisata pihak ketiga yang independen dan nirlaba. Kami tidak berafiliasi dengan pengelola Punthuk Setumbu, instansi pemerintah, atau pelaku usaha mana pun."]],
        ["Ketepatan informasi", ["Kami berupaya merujuk pada sumber terbuka yang dapat diperiksa, tetapi akses, cuaca, jadwal, biaya, dan layanan dapat berubah. Konfirmasi informasi penting langsung sebelum berangkat."]],
        ["Hak cipta dan tanggung jawab", ["Teks orisinal dan rancangan situs dilindungi oleh hak cipta. Hak atas foto tetap berada pada fotografer atau pemegang haknya. Situs disediakan sebagaimana adanya dan tidak menjamin ketersediaan, kelengkapan, maupun kecocokan untuk keputusan perjalanan tertentu."]],
      ],
    },
    cookies: {
      label: "Kontrol pilihan",
      title: "Pengaturan cookie",
      intro: "Atur cookie yang digunakan untuk menjaga situs berjalan dan, bila Anda setuju, memahami penggunaan secara anonim.",
      sections: [
        ["Cookie yang diperlukan", ["Cookie ini menyimpan pilihan dasar seperti bahasa dan persetujuan cookie. Cookie ini diperlukan agar fungsi pilihan Anda dapat berjalan."]],
        ["Cookie analitik", ["Jika diaktifkan, Google Analytics membantu kami memahami kunjungan secara agregat. Data analitik tidak digunakan untuk membuat rekomendasi komersial atau iklan yang dipersonalisasi."]],
        ["Cookie preferensi", ["Cookie preferensi menyimpan bahasa yang Anda pilih agar kunjungan berikutnya lebih nyaman."]],
        ["Cookie pemasaran", ["Kami tidak mengaktifkan cookie pemasaran atau iklan yang dipersonalisasi di situs ini."]],
      ],
    },
  },
  en: {
    privacy: {
      label: "Important information",
      title: "Privacy policy",
      intro: "A clear outline of the minimum data that may be processed when you use this guide.",
      sections: [
        ["Updates", ["This document applies from August 2026. We review it when the way this website operates changes."]],
        ["Information we may collect", ["We process only the minimum information needed to operate the site, such as technical browsing data (IP address, browser type and pages viewed), cookies and similar technologies, and information you voluntarily provide through contact."]],
        ["How we use it", ["Data is used to maintain and improve the reading experience, understand aggregate usage patterns, respond to requests, and meet applicable legal obligations."]],
        ["Third-party services", ["Google Maps may be used to show location, and Google Analytics is loaded only when you consent to analytics cookies. These services maintain their own privacy policies."]],
        ["Your rights", ["Under relevant regulations, you may request access to, correction of, or deletion of personal data; object to certain processing; and lodge a complaint with the appropriate supervisory authority."]],
      ],
    },
    terms: {
      label: "Important information",
      title: "Terms of use",
      intro: "Simple terms for using this independent visitor-information guide responsibly.",
      sections: [
        ["Updates", ["This document applies from August 2026."]],
        ["Using this site", ["By accessing this guide, you agree to use the information as travel orientation, not as a replacement for confirmation with local operators or authorities."]],
        ["Independent status", ["This website is an independent, non-profit third-party visitor-information project. It is not affiliated with Punthuk Setumbu management, any government body, or any business operator."]],
        ["Accuracy of information", ["We aim to reference checkable public sources, but access, weather, timings, charges and services may change. Confirm important details directly before departure."]],
        ["Copyright and liability", ["Original text and site design are protected by copyright. Rights to photographs remain with their photographers or rights holders. The site is provided as-is, without a guarantee of availability, completeness or suitability for a particular travel decision."]],
      ],
    },
    cookies: {
      label: "Choice controls",
      title: "Cookie settings",
      intro: "Choose the cookies used to keep the site working and, with your consent, understand aggregate use.",
      sections: [
        ["Essential cookies", ["These cookies store basic choices, including language and cookie consent. They are required for your selected settings to work."]],
        ["Analytics cookies", ["When enabled, Google Analytics helps us understand visits in aggregate. Analytics data is not used for commercial recommendations or personalised advertising."]],
        ["Preference cookies", ["Preference cookies retain your selected language to make a later visit more comfortable."]],
        ["Marketing cookies", ["We do not enable marketing cookies or personalised advertising on this site."]],
      ],
    },
  },
} as const;

export default function LegalPage({ kind }: { kind: LegalKind }) {
  const [language, setLanguage] = useState<Language>(() => (typeof window !== "undefined" && localStorage.getItem("punthuk-language") === "en" ? "en" : "id"));
  const [analytics, setAnalytics] = useState(() => typeof window !== "undefined" && localStorage.getItem("punthuk-cookie-consent") === "analytics");
  const content = legalContent[language][kind];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = `${content.title} — Punthuk Setumbu`;
    localStorage.setItem("punthuk-language", language);
  }, [content.title, language]);

  const saveCookies = (value: "essential" | "analytics") => {
    localStorage.setItem("punthuk-cookie-consent", value);
    setAnalytics(value === "analytics");
  };

  return (
    <main className="legal-shell">
      <div className="legal-topline" />
      <header className="legal-header page-container">
        <Link href="/" className="brand brand--dark" aria-label="Kembali ke halaman utama">
          <img src="/images/punthuk-setumbu-logo.png" alt="" />
          <span>PUNTHUK<br />SETUMBU</span>
        </Link>
        <div className="language-switch" aria-label="Pilih bahasa">
          <button className={language === "id" ? "is-active" : ""} onClick={() => setLanguage("id")}>ID</button>
          <button className={language === "en" ? "is-active" : ""} onClick={() => setLanguage("en")}>EN</button>
        </div>
      </header>

      <section className="legal-hero page-container">
        <img className="legal-terrain" src="/images/punthuk-setumbu-contours.png" alt="" />
        <Link href="/" className="back-link"><ArrowLeft size={16} /> {language === "id" ? "Kembali ke panduan" : "Back to guide"}</Link>
        <div className="legal-composition">
          <div>
            <div className="legal-kicker"><ShieldCheck size={15} /> {content.label}</div>
            <h1>{content.title}</h1>
            <p>{content.intro}</p>
          </div>
          <aside className="legal-field-stamp" aria-label={language === "id" ? "Catatan lapangan" : "Field note"}>
            <span>07°36′31″ S</span><i /> <span>110°10′36″ E</span><b>{language === "id" ? "CATATAN LAPANGAN" : "FIELD NOTE"}</b>
          </aside>
        </div>
      </section>

      <section className="legal-content page-container">
        <div className="legal-rule" />
        {content.sections.map(([heading, paragraphs]) => (
          <article className="legal-article" key={heading}>
            <span className="legal-index">{String(heading).padStart(2, "0")}</span>
            <div>
              <h2>{heading}</h2>
              {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
        ))}

        {kind === "cookies" && (
          <section className="cookie-panel" aria-label={language === "id" ? "Pilihan cookie" : "Cookie choices"}>
            <div>
              <span className="eyebrow">{language === "id" ? "Pilihan Anda" : "Your choice"}</span>
              <h2>{language === "id" ? "Kelola analitik" : "Manage analytics"}</h2>
              <p>{language === "id" ? "Cookie penting tetap aktif. Anda dapat memilih apakah analitik anonim boleh diaktifkan." : "Essential cookies remain active. Choose whether anonymous analytics may be enabled."}</p>
            </div>
            <div className="cookie-controls">
              <button className={analytics ? "toggle-card is-on" : "toggle-card"} onClick={() => setAnalytics(!analytics)} aria-pressed={analytics}>
                <span><Check size={16} /></span>{analytics ? (language === "id" ? "Analitik aktif" : "Analytics enabled") : (language === "id" ? "Analitik nonaktif" : "Analytics disabled")}
              </button>
              <div className="cookie-actions">
                <button className="button button--ink" onClick={() => saveCookies(analytics ? "analytics" : "essential")}>{language === "id" ? "Simpan pilihan" : "Save preferences"}</button>
                <button className="text-button" onClick={() => saveCookies("essential")}>{language === "id" ? "Tolak semua yang tidak penting" : "Reject non-essential"}</button>
              </div>
            </div>
          </section>
        )}
      </section>

      <footer className="legal-footer page-container">
        <p>{language === "id" ? "Panduan pengunjung independen dan nirlaba untuk Punthuk Setumbu." : "An independent, non-profit visitor guide to Punthuk Setumbu."}</p>
        <p>© 2026 {site.name}</p>
      </footer>
    </main>
  );
}
