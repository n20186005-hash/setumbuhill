/**
 * 雾谷晨行设计提醒：法律页延续拂晓靛蓝、雾白与琥珀的旅行手册语气；内容克制、双语完整且无语言混杂。
 */
import { ArrowLeft, Check, ShieldCheck } from "lucide-react";

import { useEffect, useState } from "react";
import { site, languagePath } from "../site";
import { readConsent, saveConsent, consentStatus } from "../privacy";

type Language = "id" | "en";
type LegalKind = "privacy" | "terms" | "cookies";

const legalContent = {
  id: {
    privacy: {
      label: "Informasi penting",
      title: "Kebijakan privasi",
      intro: "Ringkasan tentang data minimum yang mungkin diproses saat Anda menggunakan panduan ini.",
      sections: [
        ["Pembaruan", ["Dokumen ini berlaku sejak 21 Oktober 2026. Kami meninjau isi kebijakan bila cara kerja situs berubah."]],
        ["Informasi yang mungkin dikumpulkan", ["Kami hanya memproses data minimum yang diperlukan untuk mengoperasikan situs, seperti data penjelajahan teknis (alamat IP, jenis peramban, serta halaman yang dibuka), cookie dan teknologi sejenis. Situs ini tidak memiliki akun, pemesanan, formulir kontak, atau alamat email untuk menerima kiriman."]],
        ["Cara penggunaan", ["Data digunakan untuk menjaga dan menyempurnakan pengalaman membaca, memahami pola penggunaan secara agregat, serta memenuhi kewajiban hukum yang berlaku."]],
        ["Kinerja hosting Cloudflare", ["Hosting Cloudflare menyisipkan beacon Cloudflare Insights (RUM) secara terpisah dari Google Analytics. Beacon dapat mengirim metrik kinerja halaman, URL dan perujuk ke Cloudflare. Dokumentasi Cloudflare menyatakan beacon tidak memakai kuki atau penyimpanan peramban dan alamat IP permintaan dibuang di pusat data terdekat. Kontrol Google Analytics situs ini tidak mengendalikan beacon hosting. Keberadaan skrip tidak membuktikan pengiriman metrik berhasil."]],
        ["Layanan pihak ketiga", ["Peta tertanam Google dan font Google dimuat sebagai sumber pihak ketiga, dan Google Analytics hanya dimuat jika Anda memberi persetujuan untuk cookie analitik. Layanan tersebut memiliki kebijakan privasinya sendiri."]],
        ["Hak Anda", ["Anda dapat menolak atau mencabut analitik melalui Pengaturan cookie. Pencabutan segera menonaktifkan pengukuran Google Analytics berikutnya; data yang sudah dikirim tidak ditarik kembali. Gunakan pengaturan peramban untuk menghapus penyimpanan lokal dan cookie pihak ketiga; pilihan tersimpan hanya pada peramban ini."]],
      ],
    },
    terms: {
      label: "Informasi penting",
      title: "Ketentuan penggunaan",
      intro: "Ketentuan sederhana untuk menggunakan panduan informasi wisata independen ini secara bertanggung jawab.",
      sections: [
        ["Pembaruan", ["Dokumen ini berlaku sejak 21 Oktober 2026."]],
        ["Penggunaan situs", ["Dengan mengakses panduan ini, Anda setuju menggunakan informasi sebagai bahan orientasi perjalanan, bukan sebagai pengganti konfirmasi langsung dari pengelola atau otoritas setempat."]],
        ["Status independen", ["Situs ini adalah proyek informasi wisata pihak ketiga yang independen dan nirlaba. Kami tidak berafiliasi dengan pengelola Punthuk Setumbu, instansi pemerintah, atau pelaku usaha mana pun."]],
        ["Ketepatan informasi", ["Kami berupaya merujuk pada sumber terbuka yang dapat diperiksa, tetapi akses, cuaca, jadwal, biaya, dan layanan dapat berubah. Konfirmasi informasi penting langsung sebelum berangkat."]],
        ["Hak cipta dan tanggung jawab", ["Teks orisinal dan rancangan situs dilindungi oleh hak cipta. Hak atas foto tetap berada pada fotografer atau pemegang haknya. Situs disediakan sebagaimana adanya dan tidak menjamin ketersediaan, kelengkapan, maupun kecocokan untuk keputusan perjalanan tertentu."]],
      ],
    },
    cookies: {
      label: "Kontrol pilihan",
      title: "Pengaturan cookie",
      intro: "Atur cookie yang digunakan untuk menyimpan pilihan dan, bila Anda setuju, memahami penggunaan secara agregat.",
      sections: [
        ["Pembaruan", ["21 Oktober 2026. Jika penyimpanan lokal gagal, penolakan dapat berlaku untuk tab ini selama penyimpanan sesi tersedia; bila keduanya gagal, hanya halaman ini. Tab atau peramban lain dapat berbeda."]],
        ["Penyimpanan pilihan", ["Penyimpanan lokal peramban menyimpan pilihan persetujuan. Bahasa ditentukan oleh URL halaman. Penyimpanan ini diperlukan untuk mempertahankan pilihan Anda."]],
        ["Kinerja hosting Cloudflare", ["Hosting Cloudflare menyisipkan beacon Cloudflare Insights (RUM) secara terpisah dari Google Analytics. Beacon dapat mengirim metrik kinerja halaman, URL dan perujuk ke Cloudflare. Dokumentasi Cloudflare menyatakan beacon tidak memakai kuki atau penyimpanan peramban dan alamat IP permintaan dibuang di pusat data terdekat. Kontrol Google Analytics situs ini tidak mengendalikan beacon hosting. Keberadaan skrip tidak membuktikan pengiriman metrik berhasil."]],
        ["Cookie analitik", ["Jika diaktifkan, Google Analytics membantu kami memahami kunjungan secara agregat. Data analitik tidak digunakan untuk membuat rekomendasi komersial atau iklan yang dipersonalisasi."]],
        ["Cookie preferensi", ["Tidak ada cookie bahasa; gunakan tautan ID/EN untuk memilih bahasa."]],
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
        ["Updates", ["This document applies from 21 October 2026. We review it when the way this website operates changes."]],
        ["Information we may collect", ["We process only the minimum information needed to operate the site, such as technical browsing data (IP address, browser type and pages viewed), cookies and similar technologies. This site has no accounts, bookings, contact form or email submission address."]],
        ["How we use it", ["Data is used to maintain and improve the reading experience, understand aggregate usage patterns, and meet applicable legal obligations."]],
        ["Cloudflare hosting performance", ["Cloudflare hosting injects a Cloudflare Insights (RUM) beacon separately from Google Analytics. It may send page performance metrics, URLs and referrers to Cloudflare. Cloudflare documents that the beacon uses no cookies or browser storage and discards the request IP address at its nearest data center. This site’s Google Analytics control does not control the hosting beacon. Script presence does not establish successful metric delivery."]],
        ["Third-party services", ["The embedded Google map and Google Fonts load as third-party resources, and Google Analytics is loaded only when you consent to analytics cookies. These services maintain their own privacy policies."]],
        ["Your rights", ["Reject or withdraw analytics through Cookie settings. Withdrawal immediately disables further Google Analytics measurement; data already sent is not recalled. Use browser settings to clear local storage and third-party cookies; saved choices apply only to this browser."]],
      ],
    },
    terms: {
      label: "Important information",
      title: "Terms of use",
      intro: "Simple terms for using this independent visitor-information guide responsibly.",
      sections: [
        ["Updates", ["This document applies from 21 October 2026."]],
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
        ["Updates", ["21 October 2026. If local storage fails, denial can apply to this tab while session storage works; if both fail, only this page. Other tabs or browsers may differ."]],
        ["Preference storage", ["Browser local storage retains the consent choice. The page URL determines the language. This storage retains your selected consent setting."]],
        ["Cloudflare hosting performance", ["Cloudflare hosting injects a Cloudflare Insights (RUM) beacon separately from Google Analytics. It may send page performance metrics, URLs and referrers to Cloudflare. Cloudflare documents that the beacon uses no cookies or browser storage and discards the request IP address at its nearest data center. This site’s Google Analytics control does not control the hosting beacon. Script presence does not establish successful metric delivery."]],
        ["Analytics cookies", ["When enabled, Google Analytics helps us understand visits in aggregate. Analytics data is not used for commercial recommendations or personalised advertising."]],
        ["Preference cookies", ["There is no language cookie; use the ID/EN links to choose a language."]],
        ["Marketing cookies", ["We do not enable marketing cookies or personalised advertising on this site."]],
      ],
    },
  },
} as const;

export default function LegalPage({ kind, language="id" }: { kind: LegalKind; language?:Language }) {
  const [analytics,setAnalytics]=useState(false);
  const [status,setStatus]=useState("");
  useEffect(()=>{const update=()=>setAnalytics(readConsent()==="analytics");update();window.addEventListener("consent-change",update);return()=>window.removeEventListener("consent-change",update)},[]);
  const content = legalContent[language][kind];

  const saveCookies = (value:"essential"|"analytics") => {
    saveConsent(value); setAnalytics(readConsent()==="analytics");
    setStatus(consentStatus(language));
  };

  return (
    <main className="legal-shell">
      <div className="legal-topline" />
      <header className="legal-header page-container">
        <a href={languagePath(language)} className="brand brand--dark" aria-label="Kembali ke halaman utama">
          <img src="/images/punthuk-setumbu-logo.webp" alt="" />
          <span>PUNTHUK<br />SETUMBU</span>
        </a>
        <div className="language-switch" aria-label="Pilih bahasa">
          <a href={languagePath("id",kind)} hrefLang="id" className={language === "id" ? "is-active" : ""}>ID</a>
          <a href={languagePath("en",kind)} hrefLang="en" className={language === "en" ? "is-active" : ""}>EN</a>
        </div>
      </header>

      <section className="legal-hero page-container">
        <img className="legal-terrain" src="/images/punthuk-setumbu-contours.webp" alt="" />
        <a href={languagePath(language)} className="back-link"><ArrowLeft size={16} /> {language === "id" ? "Kembali ke panduan" : "Back to guide"}</a>
        <div className="legal-composition">
          <div>
            <div className="legal-kicker"><ShieldCheck size={15} /> {content.label}</div>
            <h1>{content.title}</h1>
            <p>{content.intro}</p>
          </div>
          <aside className="legal-field-stamp" aria-label={language === "id" ? "Catatan lapangan" : "Field note"}>
            <span>7.6094° S</span><i /> <span>110.1778° E</span><b>{language === "id" ? "CATATAN LAPANGAN" : "FIELD NOTE"}</b>
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
              <p>{language === "id" ? "Penyimpanan pilihan tetap digunakan. Anda dapat memilih apakah analitik anonim boleh diaktifkan." : "Preference storage remains in use. Choose whether aggregate analytics may be enabled."}</p>
            </div>
            <div className="cookie-controls">
              <button className={analytics ? "toggle-card is-on" : "toggle-card"} onClick={() => setAnalytics(!analytics)} aria-pressed={analytics}>
                <span><Check size={16} /></span>{analytics ? (language === "id" ? "Analitik aktif" : "Analytics enabled") : (language === "id" ? "Analitik nonaktif" : "Analytics disabled")}
              </button>
              <p role="status">{status}</p><div className="cookie-actions">
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
      {kind !== "terms" && <p className="page-container"><a href="https://developers.cloudflare.com/speed/observatory/rum-beacon/" target="_blank" rel="noopener noreferrer">{language === "id" ? "Dokumentasi Cloudflare RUM · diperiksa 21 Oktober 2026" : "Cloudflare RUM documentation · checked 21 October 2026"}</a></p>}
    </main>
  );
}
