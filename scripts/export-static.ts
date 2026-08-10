// Contournement du bug de prerendering natif de TanStack Start/Nitro
// (https://github.com/TanStack/router/issues/6322, ouvert depuis janvier 2026,
// tout /chemin renvoie "Not Found" pendant le crawl). Ce script fait le
// prerendering "à la main" : il invoque directement le handler SSR déjà
// construit (dist/server/server.js) pour chaque route connue du site, et
// écrit le HTML obtenu tel quel dans dist/client/<route>/index.html — qui
// devient alors un export 100% statique, déployable sur GitHub Pages.
//
// Prérequis : `bun run build` (produit dist/client + dist/server).
// Usage     : bun run scripts/export-static.ts

import { mkdir, writeFile, readdir, cp } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { blogPosts } from "../src/data/blog-posts";
import { SITE_URL } from "../src/lib/seo";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const SERVER_ENTRY = join(ROOT, "dist/server/server.js");
const OUT_DIR = join(ROOT, "dist/client");

if (!existsSync(SERVER_ENTRY)) {
  console.error("dist/server/server.js introuvable — lance `bun run build` avant ce script.");
  process.exit(1);
}
if (!existsSync(OUT_DIR)) {
  console.error("dist/client introuvable — lance `bun run build` avant ce script.");
  process.exit(1);
}

const routes = [
  "/",
  "/a-propos",
  "/services",
  "/realisations",
  "/blog",
  "/contact",
  "/mentions-legales",
  "/politique-confidentialite",
  ...blogPosts.map((p) => `/blog/${p.slug}`),
];

const { default: handler } = await import(SERVER_ENTRY);

async function capture(route: string, outPath: string) {
  const request = new Request(`http://localhost${route}`);
  const response = await handler.fetch(request, {}, {});
  const html = await response.text();
  if (response.status >= 400) {
    console.warn(`  ! ${route} -> HTTP ${response.status}`);
  }
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, html, "utf-8");
  return { route, status: response.status, bytes: html.length };
}

console.log(`Capture de ${routes.length} routes...\n`);

const results = [];
for (const route of routes) {
  const outPath =
    route === "/" ? join(OUT_DIR, "index.html") : join(OUT_DIR, route.slice(1), "index.html");
  const result = await capture(route, outPath);
  results.push(result);
  console.log(`  ${result.status === 200 ? "✓" : "✗"} ${route}  (${result.bytes} octets)`);
}

// Page 404 : GitHub Pages sert automatiquement dist/client/404.html pour
// toute route non trouvée (utile pour le routing côté client TanStack Router).
const notFound = await capture("/__route-inexistante-pour-404__", join(OUT_DIR, "404.html"));
console.log(`  ${notFound.status === 404 ? "✓" : "✗"} 404.html  (${notFound.bytes} octets)`);
results.push(notFound);

// .nojekyll : empêche GitHub Pages d'ignorer les dossiers commençant par "_"
// (ex: certains chunks Vite) via son traitement Jekyll par défaut.
await writeFile(join(OUT_DIR, ".nojekyll"), "");

// sitemap.xml : généré à partir des mêmes routes (jamais désynchronisé du
// site réel), avec une priorité/fréquence de changement par type de page et
// la vraie date de publication pour chaque article de blog.
const today = new Date().toISOString().slice(0, 10);
const blogDates = new Map(blogPosts.map((p) => [`/blog/${p.slug}`, p.dateISO]));
const staticPriority: Record<string, { priority: string; changefreq: string }> = {
  "/": { priority: "1.0", changefreq: "monthly" },
  "/a-propos": { priority: "0.8", changefreq: "monthly" },
  "/services": { priority: "0.8", changefreq: "monthly" },
  "/realisations": { priority: "0.7", changefreq: "monthly" },
  "/blog": { priority: "0.8", changefreq: "weekly" },
  "/contact": { priority: "0.7", changefreq: "monthly" },
  "/mentions-legales": { priority: "0.3", changefreq: "yearly" },
  "/politique-confidentialite": { priority: "0.3", changefreq: "yearly" },
};
const sitemapEntries = routes.map((route) => {
  const lastmod = blogDates.get(route) ?? today;
  const { priority, changefreq } = staticPriority[route] ?? { priority: "0.6", changefreq: "monthly" };
  return `  <url>\n    <loc>${SITE_URL}${route}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
});
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.join("\n")}\n</urlset>\n`;
await writeFile(join(OUT_DIR, "sitemap.xml"), sitemapXml, "utf-8");
console.log(`  ✓ sitemap.xml  (${routes.length} URLs)`);

// CNAME : requis par GitHub Pages pour le domaine personnalisé — perdu à
// chaque `rm -rf dist`, donc régénéré ici plutôt qu'ajouté à la main.
await writeFile(join(OUT_DIR, "CNAME"), "dicko-chauffage.com\n", "utf-8");
console.log("  ✓ CNAME");

const failed = results.filter((r) => r.route !== "/__route-inexistante-pour-404__" && r.status !== 200);
console.log(`\n${results.length} routes capturées dans dist/client/.`);
if (failed.length > 0) {
  console.error(`${failed.length} route(s) en erreur:`, failed.map((r) => r.route).join(", "));
  process.exit(1);
}
