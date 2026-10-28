/**
 * Topic page for the Punthuk Setumbu guide.
 * Renders a single long-tail topic (sunrise, tickets, transport, food, nearby, itinerary)
 * with a consistent dawn-travel design, breadcrumb, FAQ, related links and accurate JSON-LD.
 * It links back to the core guide and to genuinely helpful adjacent topics.
 */
import { useMemo } from "react";
import { ChevronDown, Compass, ExternalLink } from "lucide-react";

import { site, siteUrl, languagePath, type Language } from "../site";
import {
  getTopic,
  groupLabel,
  topicSlugs,
  type TopicFaq,
  type TopicSection,
} from "../lib/topics";

function TopicFooter({ language }: { language: Language }) {
  const t = language === "id" ? {
    text: "Situs ini adalah proyek informasi pengunjung independen dan nirlaba, tidak berafiliasi dengan pemerintah maupun pengelola resmi mana pun.",
    context: "Sumber lokasi dan konteks: pariwisata Jawa Tengah dan Jadesta. Informasi diperiksa 19 Oktober 2026; layanan, biaya dan akses perlu dikonfirmasi kembali.",
    rights: "Hak foto tetap pada fotografer/pemegang hak masing-masing.",
    copyright: "© 2026 Panduan Punthuk Setumbu.",
    legal: ["Kebijakan privasi", "Ketentuan penggunaan", "Pengaturan cookie"],
  } : {
    text: "This is an independent, non-profit visitor-information project. It is not affiliated with any government body or official operator.",
    context: "Location and context sources: Central Java tourism and Jadesta. Checked on 19 October 2026; services, prices and access still require confirmation.",
    rights: "Photo rights remain with the respective photographers or rights holders.",
    copyright: "© 2026 Punthuk Setumbu Field Guide.",
    legal: ["Privacy policy", "Terms of use", "Cookie settings"],
  };
  return (
    <footer className="footer">
      <img className="footer-arc" src="/images/punthuk-setumbu-sunrise-arc.webp" alt="" />
      <div className="page-container footer-grid">
        <div>
          <a className="brand" href={languagePath(language)} aria-label="Punthuk Setumbu">
            <img src="/images/punthuk-setumbu-logo.webp" alt="" />
            <span>PUNTHUK<br />SETUMBU</span>
          </a>
          <h3>{language === "id" ? "Panduan singkat untuk melihat pagi dengan lebih siap." : "A short guide to meet the morning better prepared."}</h3>
        </div>
        <div><p>{t.text}</p><p>{t.context}</p></div>
        <div className="footer-nav">
          <a href={languagePath(language, "privacy")}>{t.legal[0]}</a>
          <a href={languagePath(language, "terms")}>{t.legal[1]}</a>
          <a href={languagePath(language, "cookies")}>{t.legal[2]}</a>
        </div>
      </div>
      <div className="page-container footer-bottom"><span>{t.rights}</span><span>{t.copyright}</span></div>
    </footer>
  );
}

export default function TopicPage({ slug, language = "id" }: { slug: string; language?: Language }) {
  const topic = getTopic(slug);
  if (!topic) return null;
  const c = topic[language];
  const other = language === "en" ? "id" : "en";
  const route = languagePath(language, slug);
  const url = siteUrl(route);
  const homeUrl = siteUrl(languagePath(language));
  const gl = groupLabel(language, topic.group);

  const relatedTopics = (c.related || [])
    .map((r) => topicSlugs.includes(r) ? getTopic(r) : undefined)
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const structuredData = useMemo(() => {
    const breadcrumb: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: language === "id" ? "Beranda" : "Home", item: homeUrl },
        { "@type": "ListItem", position: 2, name: c.h1 },
      ],
    };
    const webpage: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: c.title,
      description: c.meta,
      inLanguage: language === "en" ? "en-US" : "id-ID",
      isPartOf: { "@type": "WebSite", "@id": `${site.url}#website`, name: site.name, url: site.url },
      breadcrumb: { "@id": `${url}#breadcrumb` },
      about: { "@type": "TouristAttraction", "@id": `${site.url}#attraction` },
    };
    const entities: Record<string, unknown>[] = [webpage, breadcrumb];
    if (c.faqs.length) {
      entities.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: c.faqs.map((f: TopicFaq) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      });
    }
    return entities;
  }, [url, homeUrl, c, language]);

  const sections: TopicSection[] = c.sections;

  return (
    <div className="topic">
      {structuredData.map((entity, i) => (
        <script type="application/ld+json" key={i}>{JSON.stringify(entity)}</script>
      ))}

      <section className="topic-hero">
        <header className="header page-container">
          <a className="brand" href={languagePath(language)} aria-label="Punthuk Setumbu">
            <img src="/images/punthuk-setumbu-logo.webp" alt="" />
            <span>PUNTHUK<br />SETUMBU</span>
          </a>
          <div className="language-switch" aria-label={language === "id" ? "Pilih bahasa" : "Choose language"}>
            <a href={languagePath("id", slug)} hrefLang="id" className={language === "id" ? "is-active" : ""}>ID</a>
            <a href={languagePath("en", slug)} hrefLang="en" className={language === "en" ? "is-active" : ""}>EN</a>
          </div>
        </header>

        <nav className="breadcrumb page-container" aria-label={language === "id" ? "Lokasi halaman" : "Breadcrumb"}>
          <a href={languagePath(language)}>{language === "id" ? "Beranda" : "Home"}</a>
          <span className="sep">/</span>
          <span>{gl}</span>
          <span className="sep">/</span>
          <span aria-current="page">{c.h1}</span>
        </nav>

        <div className="topic-hero-copy page-container">
          <div className="eyebrow"><Compass size={14} /> {gl}</div>
          <h1>{c.h1}</h1>
          <p className="topic-lead">{c.lead}</p>
          {c.updated && <p className="topic-updated">{c.updated}</p>}
        </div>
      </section>

      {c.facts && c.facts.length > 0 && (
        <section className="fact-strip" aria-label={language === "id" ? "Fakta singkat" : "Quick facts"}>
          {c.facts.map(([label, value]) => (
            <div className="quick-fact" key={label}><span>{label}</span><strong>{value}</strong></div>
          ))}
        </section>
      )}

      {sections.map((section, i) => (
        <section className="chapter" key={section.heading}>
          <div className="chapter-label"><span>{String(i + 1).padStart(2, "0")}</span><p>{gl}</p></div>
          <div className="chapter-copy">
            <h2>{section.heading}</h2>
            {section.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
          </div>
        </section>
      ))}

      {c.faqs.length > 0 && (
        <section className="faq-section">
          <div className="faq-grid">
            <div>
              <div className="section-kicker"><Compass size={15} /> FAQ</div>
              <h2 className="section-title">{language === "id" ? "Pertanyaan yang sering muncul" : "Questions that come up"}</h2>
            </div>
            <div className="faq-list">
              {c.faqs.map((f) => (
                <details className="faq-item" key={f.q}>
                  <summary>{f.q}<ChevronDown size={18} /></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedTopics.length > 0 && (
        <section className="topic-related">
          <div className="page-container">
            <div className="section-kicker"><ExternalLink size={15} /> {language === "id" ? "Baca juga" : "Related reading"}</div>
            <h2 className="section-title">{language === "id" ? "Topik sekitar kunjungan" : "Topics around your visit"}</h2>
            <div className="topic-related-grid">
              {relatedTopics.map((rt) => (
                <a className="topic-related-card" key={rt.slug} href={languagePath(language, rt.slug)}>
                  <span>{groupLabel(language, rt.group)}</span>
                  <h3>{rt[language].h1}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <TopicFooter language={language} />
    </div>
  );
}
