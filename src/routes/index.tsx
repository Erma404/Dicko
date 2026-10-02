import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useQuoteModal } from "@/lib/quote-modal-context";
import { blogPosts } from "@/data/blog-posts";
import { blogImages } from "@/data/blog-images";
import { SITE_URL } from "@/lib/seo";
import {
  ArrowUpRight,
  Building2,
  CalendarCheck,
  Droplets,
  Flame,
  Fuel,
  Gauge,
  Layers,
  MapPin,
  Minus,
  Plus,
  ShieldCheck,
  Wind,
  Zap,
} from "lucide-react";

import heroBright from "@/assets/hero-bright.jpg";
import aboutImg from "@/assets/about-team.jpg";
import servPlomberie from "@/assets/service-plomberie.jpg";
import servChauffage from "@/assets/service-chauffage.jpg";
import servVmc from "@/assets/service-vmc.jpg";
import servGaz from "@/assets/service-gaz.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DICKO — Plombier Chauffagiste Paris & Île-de-France" },
      {
        name: "description",
        content:
          "Plombier chauffagiste B2B à Paris : plomberie, chauffage collectif, VMC, gaz pour bâtiments professionnels. 15 ans d'expérience, devis sous 24h.",
      },
      { property: "og:title", content: "DICKO — Plombier Chauffagiste Paris & Île-de-France" },
      {
        property: "og:description",
        content:
          "Votre partenaire technique en installation CVC pour bâtiments professionnels en Île-de-France.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Index,
});

const stats = [
  { value: "15+", label: "Années d'expérience" },
  { value: "200+", label: "Projets réalisés" },
  { value: "100%", label: "Clients B2B" },
  { value: "8", label: "Départements IDF" },
];

const services = [
  {
    num: "01",
    icon: Droplets,
    title: "Installation Plomberie Bâtiment",
    desc: "Réseaux eau froide/chaude, colonnes montantes, réseaux sanitaires et mise en conformité.",
    items: [
      "Réseaux eau froide / eau chaude",
      "Colonnes montantes",
      "Réseaux sanitaires",
      "Mise en conformité",
    ],
    img: servPlomberie,
    alt: "Installation Plomberie Bâtiment",
  },
  {
    num: "02",
    icon: Flame,
    title: "Installation Chauffage Collectif",
    desc: "Chaufferie, réseau thermique, distribution chauffage et installation chaudière collective.",
    items: [
      "Chaufferie",
      "Réseau thermique",
      "Distribution chauffage",
      "Installation chaudière collective",
    ],
    img: servChauffage,
    alt: "Installation Chauffage Collectif",
  },
  {
    num: "03",
    icon: Wind,
    title: "Installation VMC Bâtiment",
    desc: "Ventilation mécanique contrôlée, VMC simple/double flux, réseau ventilation tertiaire.",
    items: [
      "Ventilation mécanique contrôlée",
      "VMC simple flux / double flux",
      "Réseau ventilation tertiaire",
      "Mise aux normes ventilation",
    ],
    img: servVmc,
    alt: "Installation VMC Bâtiment",
    href: "/services/installation-vmc",
  },
  {
    num: "04",
    icon: Fuel,
    title: "Réseaux Gaz et Mise en Conformité",
    desc: "Réseau gaz bâtiment, conformité réglementaire, installation gaz logements collectifs.",
    items: [
      "Réseau gaz bâtiment",
      "Conformité réglementaire",
      "Installation gaz logements collectifs",
      "Normes gaz bâtiment",
    ],
    img: servGaz,
    alt: "Réseaux Gaz et Mise en Conformité",
  },
];


const whyUs = [
  {
    icon: MapPin,
    title: "Intervention sur toute l'Île-de-France",
    desc: "Paris et les 7 départements limitrophes",
  },
  {
    icon: ShieldCheck,
    title: "Respect strict des normes",
    desc: "Conformité réglementaire garantie",
  },
  {
    icon: CalendarCheck,
    title: "Maîtrise des délais chantier",
    desc: "Planning respecté, livraison ponctuelle",
  },
  { icon: Zap, title: "PME réactive et flexible", desc: "Adaptabilité à vos contraintes" },
  { icon: Gauge, title: "Expertise technique B2B", desc: "Spécialiste des projets professionnels" },
  { icon: Layers, title: "Travaux CVC complets", desc: "Du lot plomberie à la chaufferie" },
];

const projects = [
  {
    tag: "Plomberie",
    title: "Installation plomberie immeuble collectif",
    desc: "Remplacement complet du réseau de plomberie dans un immeuble de 120 logements à Paris.",
    img: project1,
  },
  {
    tag: "Chauffage",
    title: "Réseau chauffage bâtiment tertiaire",
    desc: "Installation de plancher chauffant pour un bâtiment de bureaux en Hauts-de-Seine.",
    img: project2,
  },
];

const posts = blogPosts.slice(0, 3);

const faq = [
  {
    q: "Intervenez-vous sur des marchés publics en Île-de-France ?",
    a: "Oui, DICKO intervient régulièrement sur des marchés publics en tant qu'entreprise plomberie CVC. Nous sommes habilités à travailler avec les collectivités territoriales et les organismes publics sur l'ensemble de l'Île-de-France.",
  },
  {
    q: "Réalisez-vous des installations CVC complètes ?",
    a: "Absolument. Nous réalisons des installations CVC complètes incluant plomberie, chauffage et VMC. Notre expertise couvre l'ensemble des lots techniques pour vos projets de bâtiment tertiaire ou logement collectif.",
  },
  {
    q: "Travaillez-vous en sous-traitance ?",
    a: "Oui, nous travaillons en sous-traitance pour des entreprises générales et des promoteurs immobiliers en Île-de-France. Notre PME flexible et réactive s'intègre parfaitement à vos équipes de chantier.",
  },
  {
    q: "Quels types de bâtiments prenez-vous en charge ?",
    a: "Nous intervenons sur les bâtiments tertiaires (bureaux, commerces), les logements collectifs (résidences, immeubles) et les infrastructures publiques. Notre cible est 100% B2B, nous ne travaillons pas avec les particuliers.",
  },
  {
    q: "Intervenez-vous sur les logements collectifs ?",
    a: "Oui, l'installation chauffage collectif et la plomberie en logements collectifs font partie de notre cœur de métier. Nous maîtrisons les spécificités des immeubles d'habitation et des copropriétés.",
  },
];

function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="index-num text-sm">{index}</span>
      <span className="h-px w-10 bg-gold/50" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState<number | null>(0);
  const { openQuoteModal } = useQuoteModal();

  return (
    <main className="bg-background text-foreground">

      {/* HERO */}
      <section id="top" className="px-3 pt-3 md:px-5">
        <div className="band-ink dicko-watermark relative isolate overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
          <img
            src={heroBright}
            alt="Technicien DICKO relevant une installation CVC en toiture"
            width={1600}
            height={1104}
            className="absolute inset-0 h-full w-full object-cover object-[62%_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/10" />


          <div className="relative mx-auto flex min-h-[560px] max-w-[1400px] flex-col justify-end px-6 py-14 md:px-12 lg:min-h-[720px] lg:py-20">
            <div className="rise max-w-3xl">
              <h1 className="text-[2.4rem] leading-[0.98] font-bold tracking-tight sm:text-6xl lg:text-[4.6rem]">
                Plombier chauffagiste
                <br />
                <span className="text-gold">au service des pros</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Depuis 15 ans, nos équipes installent la plomberie, le chauffage collectif et la VMC
                des bâtiments d'Île-de-France. Des femmes et des hommes de terrain, pas des
                promesses.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <button type="button" onClick={openQuoteModal} className="btn-gold">
                  Demander un devis <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS / RÉASSURANCE */}
      <section className="px-3 pt-3 md:px-5">
        <div className="band-cream relative overflow-hidden rounded-[2rem] px-6 py-12 md:px-12 lg:py-16">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-10 lg:grid-cols-4">
            {stats.map((s) => {
              const numeric = s.value.replace(/[^0-9]/g, "");
              const suffix = s.value.replace(/[0-9]/g, "");
              return (
                <div key={s.label} className="px-2 text-center">
                  <div className="font-display text-4xl leading-none font-bold text-foreground sm:text-5xl lg:text-6xl">
                    {numeric}
                    <span className="text-gold">{suffix}</span>
                  </div>
                  <div className="mt-3 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* À PROPOS */}
      <section id="apropos" className="band-cream relative py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-5 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Équipe DICKO sur chantier"
              width={1200}
              height={1504}
              loading="lazy"
              className="h-[420px] w-full rounded-2xl object-cover lg:h-[620px]"
            />
            <div className="absolute -right-4 bottom-8 rounded-2xl bg-gold px-8 py-6 text-primary-foreground lg:-right-10">
              <div className="font-display text-5xl leading-none font-bold">15+</div>
              <div className="mt-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
                Ans d'expérience
              </div>
            </div>
          </div>

          <div>
            <SectionLabel index="01">À propos de DICKO</SectionLabel>
            <h2 className="mt-6 max-w-xl text-3xl leading-tight sm:text-5xl">
              Votre partenaire CVC de confiance
            </h2>
            <p className="mt-7 max-w-2xl leading-relaxed text-muted-foreground">
              DICKO est une entreprise spécialisée en installation de{" "}
              <strong className="font-semibold text-foreground">plomberie</strong>,{" "}
              <strong className="font-semibold text-foreground">chauffage</strong> et{" "}
              <strong className="font-semibold text-foreground">VMC</strong> pour les bâtiments
              tertiaires, logements collectifs et infrastructures publiques en Île-de-France.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Nous accompagnons entreprises générales, promoteurs immobiliers et collectivités dans
              la réalisation de leurs projets techniques.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                [Building2, "Bâtiments tertiaires", "Bureaux, commerces, entrepôts"],
                [Layers, "Logements collectifs", "Résidences, immeubles"],
                [CalendarCheck, "Respect des délais", "Maîtrise du planning chantier"],
                [ShieldCheck, "Normes en vigueur", "Conformité réglementaire"],
              ].map(([Icon, title, desc]) => {
                const I = Icon as typeof Building2;
                return (
                  <div key={title as string} className="rounded-2xl border border-border bg-card p-6">
                    <I className="h-5 w-5 text-gold" strokeWidth={1.5} />
                    <h3 className="mt-4 text-base">{title as string}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{desc as string}</p>
                  </div>
                );
              })}
            </div>

            <Link to="/a-propos" className="btn-ghost mt-10">
              En savoir plus <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <SectionLabel index="02">Nos Expertises</SectionLabel>
          <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-2xl text-3xl leading-tight sm:text-5xl">
              Nos Services en Plomberie, Chauffage et VMC
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground">
              Solutions techniques complètes pour vos projets de bâtiment en Île-de-France
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.num}
                to={s.href ?? "/services"}
                className="group block overflow-hidden rounded-[1.75rem] border border-border bg-card p-3 shadow-[0_1px_2px_rgba(20,20,25,0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-32px_rgba(20,20,25,0.35)]"
              >
                <div className="overflow-hidden rounded-[1.35rem]">
                  <img
                    src={s.img}
                    alt={s.alt}
                    width={1008}
                    height={1200}
                    loading="lazy"
                    className="h-60 w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05] lg:h-72"
                  />
                </div>
                <div className="px-5 pt-6 pb-5">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold text-primary-foreground">
                      <s.icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <span className="index-num text-sm">{s.num}</span>
                  </div>
                  <h3 className="mt-5 text-xl transition-colors group-hover:text-gold sm:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-2 h-1 w-3 shrink-0 rounded-full bg-gold" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>



        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section className="px-3 py-6 md:px-5">
        <div className="band-ink dicko-watermark relative overflow-hidden rounded-[2rem] px-6 py-20 md:px-12 lg:py-28">
          <div className="relative mx-auto max-w-[1400px]">
            <SectionLabel index="03">Pourquoi nous choisir</SectionLabel>
            <div className="mt-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <h2 className="text-3xl sm:text-5xl">Pourquoi choisir DICKO ?</h2>
              <p className="text-sm text-muted-foreground">
                Des équipes fidèles, des chefs de chantier qui connaissent vos bâtiments
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {whyUs.map((w, i) => (
                <div key={w.title} className="panel rounded-[1.5rem] p-8">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                      <w.icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span className="index-num text-xs">0{i + 1}</span>
                  </div>
                  <h3 className="mt-8 text-lg leading-snug">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* RÉALISATIONS */}
      <section id="realisations" className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <SectionLabel index="04">Nos Réalisations</SectionLabel>
          <div className="mt-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <h2 className="max-w-2xl text-3xl leading-tight sm:text-5xl">
              Nos Réalisations CVC en Île-de-France
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground">
              Découvrez nos projets récents en plomberie, chauffage et VMC pour bâtiments
              professionnels
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {projects.map((p) => (
              <Link key={p.title} to="/realisations" className="group block">
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1400}
                    height={1000}
                    loading="lazy"
                    className="h-72 w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04] lg:h-[420px]"
                  />
                  <span className="absolute top-5 left-5 rounded-full bg-gold px-4 py-1.5 font-display text-[11px] font-bold tracking-[0.12em] text-primary-foreground uppercase">
                    {p.tag}
                  </span>
                </div>
                <h3 className="mt-6 text-xl transition-colors group-hover:text-gold sm:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </Link>
            ))}
          </div>

          <Link to="/realisations" className="btn-ghost mt-14">
            Voir toutes nos réalisations <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="band-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <SectionLabel index="05">Blog</SectionLabel>
          <div className="mt-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <h2 className="max-w-2xl text-3xl leading-tight sm:text-5xl">
              Conseils et actualités plomberie & chauffage
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground">
              Retrouvez nos conseils d'experts sur la plomberie, le chauffage, la VMC et le gaz à
              Paris
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(20,20,25,0.35)]"
              >
                <img src={blogImages[p.slug]} alt={p.title} className="h-40 w-full object-cover" />
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center gap-3 text-[11px] tracking-[0.16em] uppercase">
                    <span className="text-gold">{p.category}</span>
                    <span className="text-muted-foreground">{p.date}</span>
                    <span className="text-muted-foreground">{p.read}</span>
                  </div>
                  <h3 className="mt-6 text-lg leading-snug transition-colors group-hover:text-gold">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 font-display text-xs font-semibold tracking-[0.14em] text-gold uppercase">
                    Lire l'article <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <Link to="/blog" className="btn-ghost mt-14">
            Voir tous les articles <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-5 md:px-10 lg:grid-cols-[0.6fr_1.4fr]">
          <div>
            <SectionLabel index="06">FAQ</SectionLabel>
            <h2 className="mt-6 text-3xl sm:text-5xl">Questions fréquentes</h2>
          </div>
          <div className="border-t border-border">
            {faq.map((f, i) => (
              <div key={f.q} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-gold"
                >
                  <span className="font-display text-base font-semibold sm:text-lg">{f.q}</span>
                  {open === i ? (
                    <Minus className="h-5 w-5 shrink-0 text-gold" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-gold" />
                  )}
                </button>
                {open === i && (
                  <p className="max-w-3xl pb-7 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-3 py-6 md:px-5">
        <div className="band-ink dicko-watermark relative isolate overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
          <img
            src={aboutImg}
            alt="Équipe DICKO sur chantier en Île-de-France"
            width={1200}
            height={1408}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[60%_30%] opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-12 lg:py-32">
            <h2 className="max-w-3xl text-3xl leading-tight sm:text-5xl lg:text-6xl">
              Parlons de votre chantier avec un{" "}
              <span className="text-gold">homme de métier</span>
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              Un chef de chantier DICKO vous rappelle, visite le site et chiffre vos travaux de
              plomberie, chauffage ou VMC en Île-de-France.
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
