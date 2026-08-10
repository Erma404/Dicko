import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Building2, CheckCircle2, Landmark, Users } from "lucide-react";
import { absoluteUrl } from "@/lib/seo";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations CVC Paris Île-de-France | Dicko BTP" },
      {
        name: "description",
        content:
          "Nos réalisations en plomberie, chauffage collectif et VMC : immeubles, bureaux et bâtiments publics en Île-de-France. Projets menés par DICKO BTP.",
      },
      { property: "og:title", content: "Réalisations CVC Paris Île-de-France | Dicko BTP" },
      {
        property: "og:description",
        content:
          "Projets de plomberie, chauffage collectif, VMC et réseaux gaz réalisés par DICKO en Île-de-France.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/realisations") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/realisations") }],
  }),
  component: RealisationsPage,
});

const stats = [
  { value: "45", label: "Projets Plomberie" },
  { value: "38", label: "Projets Chauffage" },
  { value: "32", label: "Projets VMC" },
  { value: "28", label: "Projets Gaz" },
];

const projets = [
  {
    tag: "Plomberie",
    lieu: "Paris (75)",
    annee: "2024",
    title: "Installation plomberie immeuble collectif",
    problematique:
      "Remplacement complet du réseau de plomberie vieillissant dans un immeuble de 120 logements.",
    solution:
      "Installation de nouvelles colonnes montantes et réseaux sanitaires aux normes, avec mise en conformité complète.",
    resultat:
      "Chantier livré dans les délais, mise en conformité totale du bâtiment et satisfaction des copropriétaires.",
    tags: ["Colonnes montantes", "Réseaux sanitaires", "Mise en conformité"],
    lire: [
      { title: "Colonne montante qui fuit en immeuble haussmannien", slug: "colonne-montante-fuite-immeuble-haussmannien" },
      { title: "Fuite d'eau en appartement à Paris", slug: "fuite-eau-appartement-paris" },
    ],
    img: project1,
  },
  {
    tag: "Chauffage",
    lieu: "Hauts-de-Seine (92)",
    annee: "2023",
    title: "Réseau chauffage bâtiment tertiaire",
    problematique:
      "Installation d'un système de chauffage au sol pour un nouveau bâtiment de bureaux de 2 500 m².",
    solution:
      "Pose de plancher chauffant avec régulation individuelle par zone et installation de la chaufferie.",
    resultat:
      "Efficacité énergétique optimale, confort thermique homogène et réduction des coûts énergétiques.",
    tags: ["Plancher chauffant", "Chaufferie", "Régulation"],
    lire: [
      { title: "Chauffage collectif en copropriété", slug: "chauffage-collectif-copropriete-obligations-syndic" },
      { title: "Chaudière qui ne chauffe plus : les causes", slug: "chaudiere-ne-chauffe-plus-causes-paris" },
    ],
    img: project2,
  },
  {
    tag: "VMC",
    lieu: "Seine-et-Marne (77)",
    annee: "2024",
    title: "Installation VMC résidence",
    problematique:
      "Mise en place d'une ventilation mécanique contrôlée pour une résidence de 80 appartements.",
    solution:
      "Installation VMC double flux avec récupération de chaleur et réseau de ventilation optimisé.",
    resultat:
      "Qualité d'air optimale, économies d'énergie significatives et conformité aux normes RE2020.",
    tags: ["VMC double flux", "Récupération chaleur", "RE2020"],
    lire: [{ title: "VMC en immeuble : est-ce obligatoire ?", slug: "vmc-obligatoire-immeuble-reglementation" }],
    img: project3,
  },
  {
    tag: "Gaz",
    lieu: "Essonne (91)",
    annee: "2023",
    title: "Réseau gaz infrastructure publique",
    problematique:
      "Installation du réseau gaz pour un complexe sportif public avec contraintes de sécurité élevées.",
    solution:
      "Réseau gaz complet avec stations de régulation, sécurité intégrée et conformité réglementaire.",
    resultat:
      "Conformité totale aux normes gaz bâtiment, certification obtenue et mise en service sans incident.",
    tags: ["Réseau gaz", "Sécurité", "Certification"],
    lire: [{ title: "Détecteur de CO obligatoire à Paris ?", slug: "detecteur-monoxyde-carbone-obligatoire-paris" }],
    img: project4,
  },
];

const clients = [
  {
    icon: Building2,
    title: "Entreprises générales",
    desc: "Travaux en sous-traitance pour des projets de construction et rénovation.",
  },
  {
    icon: Users,
    title: "Promoteurs immobiliers",
    desc: "Partenariat sur des programmes neufs de logements collectifs et bureaux.",
  },
  {
    icon: Landmark,
    title: "Collectivités",
    desc: "Intervention sur marchés publics pour des équipements publics.",
  },
];

function RealisationsPage() {
  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="px-3 pt-3 md:px-5">
        <div className="band-ink dicko-watermark relative overflow-hidden rounded-[2rem] px-6 py-20 md:rounded-[2.5rem] md:px-12 lg:py-28">
          <div className="mx-auto max-w-[1400px]">
            <span className="eyebrow">Nos Réalisations</span>
            <h1 className="mt-6 max-w-4xl text-[2.2rem] leading-[1.02] font-bold tracking-tight sm:text-5xl lg:text-[4rem]">
              Nos <span className="text-gold">Réalisations CVC</span> en Île-de-France
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Découvrez nos projets récents en plomberie, chauffage et VMC pour bâtiments
              professionnels.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-3 pt-3 md:px-5">
        <div className="band-cream rounded-[2rem] px-6 py-12 md:px-12 lg:py-16">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-2 text-center">
                <div className="font-display text-4xl leading-none font-bold sm:text-5xl lg:text-6xl">
                  {s.value}
                </div>
                <div className="mt-3 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 md:px-10">
          {projets.map((p, i) => (
            <article
              key={p.title}
              className="grid grid-cols-1 gap-8 overflow-hidden rounded-[2rem] border border-border bg-card p-3 lg:grid-cols-[0.85fr_1.15fr]"
            >
              <div className={`overflow-hidden rounded-[1.6rem] ${i % 2 ? "lg:order-2" : ""}`}>
                <img
                  src={p.img}
                  alt={p.title}
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="h-72 w-full object-cover lg:h-full"
                />
              </div>

              <div className="px-4 pb-8 lg:px-8 lg:py-10">
                <div className="flex flex-wrap items-center gap-3 text-[11px] tracking-[0.14em] uppercase">
                  <span className="rounded-full bg-gold px-4 py-1.5 font-semibold text-primary-foreground">
                    {p.tag}
                  </span>
                  <span className="text-muted-foreground">{p.lieu}</span>
                  <span className="text-muted-foreground">{p.annee}</span>
                </div>

                <h2 className="mt-6 text-2xl sm:text-3xl">{p.title}</h2>

                <dl className="mt-7 space-y-5">
                  {[
                    ["Problématique", p.problematique],
                    ["Solution technique", p.solution],
                    ["Résultat", p.resultat],
                  ].map(([label, text]) => (
                    <div key={label} className="border-l-2 border-gold pl-5">
                      <dt className="font-display text-xs font-semibold tracking-[0.16em] uppercase">
                        {label}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {text}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-7 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-secondary px-4 py-1.5 text-[11px] tracking-[0.1em] uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 border-t border-border pt-6">
                  <h3 className="text-sm font-semibold">À lire aussi</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {p.lire.map((l) => (
                      <li key={l.slug}>
                        <Link
                          to="/blog/$slug"
                          params={{ slug: l.slug }}
                          className="transition-colors hover:text-gold"
                        >
                          {l.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SATISFACTION */}
      <section className="px-3 py-6 md:px-5">
        <div className="band-ink dicko-watermark overflow-hidden rounded-[2rem] px-6 py-20 md:rounded-[2.5rem] md:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 lg:grid-cols-2">
            <h2 className="text-3xl leading-tight sm:text-5xl">
              La <span className="text-gold">satisfaction client</span> au cœur de notre métier
            </h2>
            <div>
              <p className="leading-relaxed text-muted-foreground">
                Chaque projet que nous réalisons est une nouvelle opportunité de démontrer notre
                engagement envers la qualité et le service. Notre équipe met tout en œuvre pour
                livrer des installations conformes, durables et adaptées à vos besoins.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Plus de 200 projets réalisés avec succès",
                  "Taux de satisfaction client de 98%",
                  "Garantie décennale sur nos installations",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <h2 className="text-3xl leading-tight sm:text-5xl">
            Nos <span className="text-gold">clients</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Nous travaillons avec différents types d'acteurs du bâtiment en Île-de-France
          </p>
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {clients.map((c) => (
              <article key={c.title} className="rounded-[1.75rem] border border-border bg-card p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-primary-foreground">
                  <c.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 text-xl">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 py-6 md:px-5">
        <div className="band-ink dicko-watermark overflow-hidden rounded-[2rem] px-6 py-20 text-center md:rounded-[2.5rem] md:px-12 lg:py-28">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl leading-tight sm:text-5xl">Vous avez un projet ?</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <Link to="/contact" className="btn-gold mt-10">
              Nous contacter <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
