/**
 * 雾谷晨行设计提醒：此文件是本站唯一的 URL 配置入口；未配置域名时必须优雅省略绝对 URL。
 */
export const site = {
  // SEO site name format: 景点名称 + 城市 + 旅游指南 (Attraction + City + Travel Guide)
  name: "Punthuk Setumbu Magelang — Panduan Wisata",
  title: {
    id: "Punthuk Setumbu Magelang — Panduan Wisata",
    en: "Punthuk Setumbu Magelang Travel Guide",
  },
  url: (import.meta.env.VITE_SITE_URL ?? "").replace(/\/$/, ""),
  analyticsId: "G-HXM22WWPKP",
};

export const siteUrl = (path = "/") => (site.url ? `${site.url}${path}` : undefined);
