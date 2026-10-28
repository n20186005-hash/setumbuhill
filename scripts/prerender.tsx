import React from "react";
import {renderToString} from "react-dom/server";
import {readFileSync,writeFileSync,mkdirSync} from "node:fs";
import path from "node:path";
import App from "../client/src/App";
import { topicSlugs, getTopic } from "../client/src/lib/topics";

const root=path.resolve("dist/public"),base="https://setumbuhill.com";
const shell=readFileSync(path.join(root,"index.html"),"utf8");
const assets=[...shell.matchAll(/<(?:script\b[^>]*src=[^>]*><\/script>|link\b[^>]*(?:stylesheet|modulepreload)[^>]*>)/g)].map(x=>x[0]).join("");
const escape=(s:string)=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));

const staticPages=["","privacy","terms","cookies"];
const titles={id:["Punthuk Setumbu Magelang: Sunrise, Lokasi & Persiapan","Kebijakan Privasi — Punthuk Setumbu","Ketentuan Penggunaan — Punthuk Setumbu","Pengaturan Cookie — Punthuk Setumbu"],en:["Punthuk Setumbu Hill: Sunrise, Location & Visitor Guide","Privacy Policy — Punthuk Setumbu","Terms of Use — Punthuk Setumbu","Cookie Settings — Punthuk Setumbu"]};
const descriptions={id:["Panduan independen Punthuk Setumbu di Karangrejo, Magelang: lokasi, rute, persiapan sunrise, cuaca serta hal yang perlu dikonfirmasi sebelum berangkat.","Cara panduan Punthuk Setumbu menggunakan penyimpanan persetujuan, Google Maps, font dan analitik opsional.","Ketentuan panduan independen Punthuk Setumbu, batas informasi perjalanan dan hak gambar.","Atur atau cabut persetujuan analitik Google pada panduan Punthuk Setumbu."],en:["Independent Punthuk Setumbu visitor guide for Karangrejo, Magelang: location, routes, sunrise preparation, weather and details to confirm before departure.","How the Punthuk Setumbu guide uses consent storage, Google Maps, fonts and optional analytics.","Terms for the independent Punthuk Setumbu guide, travel-information limits and image rights.","Manage or withdraw Google Analytics consent on the Punthuk Setumbu guide."]};

const allPages=[...staticPages,...topicSlugs];

function pageMeta(pageKey:string, lang:"id"|"en") {
  if (topicSlugs.includes(pageKey)) {
    const t=getTopic(pageKey)!;
    return { title:t[lang].title, description:t[lang].meta };
  }
  const i=staticPages.indexOf(pageKey);
  return { title:titles[lang][i], description:descriptions[lang][i] };
}

const urls:string[]=[];
for(const lang of ["id","en"] as const)for(const pageKey of allPages){
  const route=`${lang==="en"?"/en":""}/${pageKey}${pageKey?"/":""}`;
  const canonical=base+route;
  urls.push(canonical);
  const pair=(l:string)=>`${base}${l==="en"?"/en":""}/${pageKey}${pageKey?"/":""}`;
  const { title, description }=pageMeta(pageKey, lang);
  const head=`<title>${escape(title)}</title><meta name="description" content="${escape(description)}"/><meta name="robots" content="index, follow"/><link rel="canonical" href="${canonical}"/>${["id","en","x-default"].map(l=>`<link rel="alternate" hreflang="${l}" href="${pair(l==="en"?"en":"id")}"/>`).join("")}<meta property="og:type" content="website"/><meta property="og:title" content="${escape(title)}"/><meta property="og:description" content="${escape(description)}"/><meta property="og:url" content="${canonical}"/><meta property="og:locale" content="${lang==="en"?"en_US":"id_ID"}"/><meta name="twitter:card" content="summary"/>`;
  const html=`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>${head}<link rel="icon" href="/favicon.svg"/><link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=IBM+Plex+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>${assets}</head><body><div id="root" data-path="${route}">${renderToString(<App path={route}/>)}</div></body></html>`;
  const out=path.join(root,route,"index.html");mkdirSync(path.dirname(out),{recursive:true});writeFileSync(out,html);
}

writeFileSync(path.join(root,"404.html"),`<!doctype html><html lang="id"><head><meta charset="utf-8"/><meta name="viewport" content="initial-scale=1"/><meta name="robots" content="noindex, follow"/><title>404 — Halaman tidak ditemukan / Page not found</title></head><body><h1>404 — Halaman tidak ditemukan / Page not found</h1><p><a href="/">Panduan Indonesia</a> · <a href="/en/">English guide</a></p></body></html>`);
writeFileSync(path.join(root,"sitemap.xml"),`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(u=>`<url><loc>${u}</loc></url>`).join("")}</urlset>`);
writeFileSync(path.join(root,"robots.txt"),`User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`);
console.log(`Prerendered ${urls.length} bilingual pages (incl. ${topicSlugs.length*2} topic pages) and a noindex 404.`);
