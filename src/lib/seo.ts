// Constantes et helpers SEO/GEO partagés — évite de dupliquer l'URL du site
// et les schémas JSON-LD dans chaque route.

export const SITE_URL = "https://dicko-chauffage.com";
export const SITE_NAME = "DICKO BTP";
// Copies non-hashées dans public/ (les fichiers de src/assets/ passent par
// Vite et changent de nom à chaque build — inutilisable pour des URLs SEO
// stables comme og:image ou le logo du schema.org).
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const LOGO_URL = `${SITE_URL}/dicko-logo.png`;

/** Construit une URL absolue à partir d'un chemin (canonical, og:url...). */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Schéma LocalBusiness (Plumber), identique à celui de l'ancien site en
 * prod — couvre Paris + les 8 départements d'Île-de-France desservis
 * (GEO : zone de service explicite pour les moteurs génératifs comme pour
 * les recherches locales classiques).
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    image: DEFAULT_OG_IMAGE,
    description:
      "DICKO BTP, entreprise de plomberie, chauffage collectif et VMC pour bâtiments professionnels à Paris et en Île-de-France.",
    telephone: "+33615035300",
    email: "contact@dicko-pvc.fr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "25 rue Archereau",
      addressLocality: "Paris",
      postalCode: "75019",
      addressCountry: "FR",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Paris (75)" },
      { "@type": "AdministrativeArea", name: "Hauts-de-Seine (92)" },
      { "@type": "AdministrativeArea", name: "Seine-Saint-Denis (93)" },
      { "@type": "AdministrativeArea", name: "Val-de-Marne (94)" },
      { "@type": "AdministrativeArea", name: "Seine-et-Marne (77)" },
      { "@type": "AdministrativeArea", name: "Yvelines (78)" },
      { "@type": "AdministrativeArea", name: "Essonne (91)" },
      { "@type": "AdministrativeArea", name: "Val-d'Oise (95)" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: "€€",
    serviceType: ["Plomberie", "Chauffage collectif", "VMC", "Installation gaz"],
  };
}

export function serviceJsonLd(service: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: absoluteUrl(service.path),
    serviceType: service.serviceType,
    provider: { "@type": "Plumber", name: SITE_NAME, url: SITE_URL },
    areaServed: { "@type": "AdministrativeArea", name: "Île-de-France" },
  };
}

export function faqPageJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleJsonLd(post: {
  slug: string;
  title: string;
  description: string;
  dateISO: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    url: absoluteUrl(`/blog/${post.slug}`),
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Rendu d'un bloc JSON-LD — usage : <JsonLd data={organizationJsonLd()} /> */
export function jsonLdScriptProps(data: unknown) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  };
}
