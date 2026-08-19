/**
 * 雾谷晨行设计提醒：此文件是本站唯一的 URL 配置入口；未配置域名时必须优雅省略绝对 URL。
 */
export const site = {
  name: "Punthuk Setumbu Field Guide",
  url: (import.meta.env.VITE_SITE_URL ?? "").replace(/\/$/, ""),
  analyticsId: "G-HXM22WWPKP",
};

export const siteUrl = (path = "/") => (site.url ? `${site.url}${path}` : undefined);
