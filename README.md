# Punthuk Setumbu visitor guide

Independent Indonesian and English visitor information. React/Vite produces eight directly readable static pages plus a genuine noindex 404. Each language has its own guide and privacy, terms and cookie pages with canonical URLs, matching language alternates and an eight-URL sitemap.

```sh
corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

The build prerenders into `dist/public`; `dist/index.js` is an optional local Express server. Cloudflare uses `server/worker.ts` with the ASSETS binding, worker-first routing and `404-page` handling. HTTP and www entrances redirect to HTTPS apex while retaining path and query. Unknown URLs remain 404 with an X-Robots-Tag noindex header.

Google Analytics loads only after explicit consent saved in local storage. Revocation reloads the page; browser settings can clear existing third-party cookies. Language follows the page URL. Maps and Google Fonts load as disclosed third-party resources. There are no accounts, bookings, contact forms or email submission channels. Obsolete debug collectors, storage proxies and unused login/map integration code have been removed.

See [public sources](PUBLIC_SOURCES.md) for dated visitor facts and limitations and [asset provenance](ASSET_MANIFEST.md) for inherited image credits and unresolved permissions. Large original decorative PNGs are retained under `assets/originals`, while smaller WebP derivatives are served.

Build output is ignored by default; include the complete generated output explicitly if committing a deployment snapshot. Local checks do not confirm a production deployment.
