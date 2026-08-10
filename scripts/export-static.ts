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

const failed = results.filter((r) => r.route !== "/__route-inexistante-pour-404__" && r.status !== 200);
console.log(`\n${results.length} routes capturées dans dist/client/.`);
if (failed.length > 0) {
  console.error(`${failed.length} route(s) en erreur:`, failed.map((r) => r.route).join(", "));
  process.exit(1);
}
