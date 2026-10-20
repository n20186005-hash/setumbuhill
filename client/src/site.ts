export type Language = "id" | "en";
export const site = { name:"Punthuk Setumbu Magelang — Panduan Wisata", url:"https://setumbuhill.com", analyticsId:"G-HXM22WWPKP" };
export const siteUrl = (path="/") => `${site.url}${path}`;
export const languagePath = (language:Language, page="") => `${language === "en" ? "/en" : ""}/${page}${page ? "/" : ""}`;
