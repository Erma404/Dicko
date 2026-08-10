import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuoteModal } from "@/lib/quote-modal-context";
import { absoluteUrl } from "@/lib/seo";
import {
  ArrowUpRight,
  CheckCircle2,
  Droplets,
  Flame,
  Fuel,
  Gauge,
  LifeBuoy,
  ScrollText,
  Wind,
  Wrench,
} from "lucide-react";

import servPlomberie from "@/assets/service-plomberie.jpg";
import servChauffage from "@/assets/service-chauffage.jpg";
import servVmc from "@/assets/service-vmc.jpg";
import servGaz from "@/assets/service-gaz.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services Plomberie Chauffage VMC | Dicko BTP Paris Île-de-France" },
      {
        name: "description",
        content:
          "Services CVC pour professionnels en Île-de-France : installation plomberie, chauffage collectif, VMC et réseaux gaz. Devis détaillé sous 24h ouvrées.",
      },
      { property: "og:title", content: "Services Plomberie Chauffage VMC | Dicko BTP" },
      {
        property: "og:description",
        content:
          "De l'étude à la réalisation, DICKO vous accompagne à chaque étape de vos projets CVC en Île-de-France.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/services") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/services") }],
  }),
  component: ServicesPage,
});

const services = [
  {
    num: "01",
    icon: Droplets,
    title: "Installation Plomberie Bâtiment",
    desc: "Solutions complètes pour vos réseaux hydrauliques en bâtiment tertiaire et logements collectifs.",
    items: [
      "Réseaux eau froide / eau chaude",
      "Colonnes montantes",
      "Réseaux sanitaires",
      "Mise en conformité réglementaire",
      "Dépannage et maintenance",
      "Remplacement d'installations vétustes",
    ],
    plus: ["Respect des normes DTU 60.11", "Matériaux certifiés ACS", "Garantie décennale"],
    conseilsTitle: "Nos conseils plomberie",
    conseils: [
      "Colonne montante qui fuit en immeuble haussmannien",
      "Fuite d'eau en appartement à Paris",
      "Dépannage plomberie urgence à Paris",
    ],
    img: servPlomberie,
  },
  {
    num: "02",
    icon: Flame,
    title: "Installation Chauffage Collectif",
    desc: "Installation et maintenance de systèmes de chauffage performants pour immeubles et bâtiments professionnels.",
    items: [
      "Chaufferie collective",
      "Réseau thermique",
      "Distribution chauffage",
      "Installation chaudière collective",
      "Plancher chauffant",
      "Régulation thermique",
    ],
    plus: ["Conformité RT2012/RE2020", "Optimisation énergétique", "Contrats de maintenance"],
    conseilsTitle: "Nos conseils chauffage",
    conseils: [
      "Chauffage collectif en copropriété",
      "Chaudière qui ne chauffe plus : les causes",
      "Entretien annuel chaudière gaz obligatoire",
    ],
    img: servChauffage,
  },
  {
    num: "03",
    icon: Wind,
    title: "Installation VMC Bâtiment",
    desc: "Ventilation mécanique contrôlée pour assurer la qualité de l'air dans vos bâtiments.",
    items: [
      "Ventilation mécanique contrôlée",
      "VMC simple flux",
      "VMC double flux",
      "Réseau ventilation tertiaire",
      "Mise aux normes ventilation",
      "Entretien et maintenance VMC",
    ],
    plus: ["Conformité RE2020", "Récupération de chaleur", "Réduction consommation énergétique"],
    conseilsTitle: "Notre conseil VMC",
    conseils: ["VMC en immeuble : est-ce obligatoire ?"],
    img: servVmc,
    href: "/services/installation-vmc",
  },
  {
    num: "04",
    icon: Fuel,
    title: "Réseaux Gaz et Mise en Conformité",
    desc: "Installation et sécurisation de réseaux gaz pour bâtiments professionnels et collectifs.",
    items: [
      "Réseau gaz bâtiment",
      "Conformité réglementaire gaz",
      "Installation gaz logements collectifs",
      "Normes gaz bâtiment",
      "Détecteurs de fuite",
      "Contrôles périodiques",
    ],
    plus: ["Certification Qualigaz", "Conformité NF P 24-301", "Contrats d'entretien annuels"],
    conseilsTitle: "Notre conseil gaz",
    conseils: ["Détecteur de CO obligatoire à Paris ?"],
    img: servGaz,
  },
];

const complementaires = [
  {
    icon: Wrench,
    title: "Maintenance",
    desc: "Contrats d'entretien préventif et curatif pour tous vos équipements CVC.",
  },
  {
    icon: LifeBuoy,
    title: "Dépannage urgent",
    desc: "Intervention rapide sur panne de chauffage, fuite d'eau ou problème de ventilation.",
  },
  {
    icon: Gauge,
    title: "Conseil technique",
    desc: "Étude personnalisée et recommandations pour optimiser vos installations.",
  },
  {
    icon: ScrollText,
    title: "Mise aux normes",
    desc: "Mise en conformité de vos installations aux réglementations en vigueur.",
  },
];

const departements = [
  "Paris",
  "Hauts-de-Seine",
  "Seine-Saint-Denis",
  "Val-de-Marne",
  "Yvelines",
  "Essonne",
  "Val-d'Oise",
  "Seine-et-Marne",
];

function ServicesPage() {
  const { openQuoteModal } = useQuoteModal();
  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="px-3 pt-3 md:px-5">
        <div className="band-ink dicko-watermark relative overflow-hidden rounded-[2rem] px-6 py-20 md:rounded-[2.5rem] md:px-12 lg:py-28">
          <div className="mx-auto max-w-[1400px]">
            <span className="eyebrow">Nos Services</span>
            <h1 className="mt-6 max-w-4xl text-[2.2rem] leading-[1.02] font-bold tracking-tight sm:text-5xl lg:text-[4rem]">
              Nos Services en <span className="text-gold">Plomberie</span>,{" "}
              <span className="text-gold">Chauffage</span> et <span className="text-gold">VMC</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Solutions techniques complètes pour vos projets de bâtiment en Île-de-France. De
              l'étude à la réalisation, nous vous accompagnons à chaque étape.
            </p>
            <button type="button" onClick={openQuoteModal} className="btn-gold mt-9">
              Demander un devis <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 md:px-10">
          {services.map((s, i) => (
            <article
              key={s.num}
              className="grid grid-cols-1 gap-8 overflow-hidden rounded-[2rem] border border-border bg-card p-3 lg:grid-cols-2"
            >
              <div className={`overflow-hidden rounded-[1.6rem] ${i % 2 ? "lg:order-2" : ""}`}>
                <img
                  src={s.img}
                  alt={s.title}
                  width={1008}
                  height={1200}
                  loading="lazy"
                  className="h-72 w-full object-cover lg:h-full"
                />
              </div>

              <div className="px-4 pb-8 lg:px-8 lg:py-10">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-primary-foreground">
                    <s.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span className="index-num text-sm">{s.num}</span>
                </div>
                <h2 className="mt-6 text-2xl sm:text-3xl">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.desc}</p>

                <ul className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {it}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {s.plus.map((p) => (
                    <span
                      key={p}
                      className="rounded-full bg-secondary px-4 py-1.5 text-[11px] tracking-[0.1em] uppercase"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button type="button" onClick={openQuoteModal} className="btn-gold">
                    Demander un devis <ArrowUpRight className="h-4 w-4" />
                  </button>
                  {s.href ? (
                    <Link to={s.href} className="btn-ghost">
                      En savoir plus <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>

                <div className="mt-8 border-t border-border pt-6">
                  <h3 className="text-sm font-semibold">{s.conseilsTitle}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {s.conseils.map((c) => (
                      <li key={c}>
                        <Link to="/blog" className="transition-colors hover:text-gold">
                          {c}
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

      {/* COMPLÉMENTAIRES */}
      <section className="band-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <h2 className="text-3xl leading-tight sm:text-5xl">
            Services <span className="text-gold">complémentaires</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Des prestations adaptées à tous vos besoins en matière de CVC
          </p>
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {complementaires.map((c) => (
              <article key={c.title} className="rounded-[1.75rem] border border-border bg-card p-8">
                <c.icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                <h3 className="mt-6 text-lg">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ZONE */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <h2 className="text-3xl leading-tight sm:text-5xl">
            Zone d'<span className="text-gold">intervention</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Nous intervenons dans toute l'Île-de-France</p>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {departements.map((d) => (
              <div
                key={d}
                className="rounded-2xl border border-border bg-card px-6 py-6 text-center font-display font-semibold tracking-[0.06em]"
              >
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 py-6 md:px-5">
        <div className="band-ink dicko-watermark overflow-hidden rounded-[2rem] px-6 py-20 text-center md:rounded-[2.5rem] md:px-12 lg:py-28">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl leading-tight sm:text-5xl">
              Besoin d'un <span className="text-gold">devis</span> ?
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Contactez-nous pour obtenir une étude personnalisée de votre projet CVC en
              Île-de-France.
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
