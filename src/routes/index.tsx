import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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

import heroImg from "@/assets/hero-cvc.jpg";
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
          "Installation plomberie, chauffage collectif, VMC et réseaux gaz pour bâtiments professionnels en Île-de-France. Entreprise CVC 100% B2B.",
      },
      { property: "og:title", content: "DICKO — Plombier Chauffagiste Paris & Île-de-France" },
      {
        property: "og:description",
        content:
          "Votre partenaire technique en installation CVC pour bâtiments professionnels en Île-de-France.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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

const posts = [
  {
    cat: "Gaz",
    date: "20 juillet 2026",
    read: "6 min",
    title: "Détecteur de monoxyde de carbone obligatoire à Paris : ce que dit la loi",
    desc: "Réglementation du détecteur de CO, installations à risque et bonnes pratiques pour éviter l'intoxication dans votre logement.",
  },
  {
    cat: "Plomberie",
    date: "10 juillet 2026",
    read: "5 min",
    title: "Chauffagiste ou plombier : qui appeler selon votre panne ?",
    desc: "Fuite, panne de chaudière, robinet qui goutte : le guide pour ne plus se tromper de corps de métier à Paris.",
  },
  {
    cat: "Chauffage",
    date: "25 juin 2026",
    read: "7 min",
    title: "Chauffage collectif en copropriété : obligations du syndic",
    desc: "Dates de la trêve de chauffe, obligations d'entretien du syndic et répartition des charges de chauffage collectif.",
  },
];

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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-10">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-xl font-bold tracking-[0.24em] text-foreground">
              DICKO
            </span>
            <span className="hidden text-[10px] tracking-[0.28em] text-muted-foreground uppercase sm:inline">
              CVC · IDF
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {[
              ["Expertises", "#services"],
              ["À propos", "#apropos"],
              ["Réalisations", "#realisations"],
              ["Blog", "#blog"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="font-display text-[13px] font-semibold tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:text-gold"
              >
                {label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn-gold !px-5 !py-2.5 text-xs">
            Demander un devis
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate overflow-hidden pt-16">
        <div className="absolute inset-0 -z-20">
          <img
            src={heroImg}
            alt="Techniciens CVC au travail"
            width={1600}
            height={1104}
            className="h-full w-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="blueprint absolute inset-0 -z-10 opacity-60" />

        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-5 pt-20 pb-16 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:pt-32 lg:pb-24">
          <div className="rise">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-border px-4 py-2">
              <span className="h-1.5 w-1.5 animate-pulse bg-gold" />
              <span className="eyebrow">Entreprise B2B Île-de-France</span>
            </div>
            <h1 className="max-w-3xl text-[2.6rem] leading-[0.98] font-bold tracking-tight sm:text-6xl lg:text-[5rem]">
              Plombier
              <br />
              Chauffagiste{" "}
              <span className="text-gold">
                Paris
                <br />& Île-de-France
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Votre partenaire technique en installation CVC pour bâtiments professionnels en
              Île-de-France.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-gold">
                Demander un devis <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#realisations" className="btn-ghost">
                Nos réalisations
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="h-px w-6 bg-gold" />
                15+ ans d'expérience
              </span>
              <span className="flex items-center gap-2">
                <span className="h-px w-6 bg-gold" />
                200+ projets réalisés
              </span>
              <span className="flex items-center gap-2">
                <span className="h-px w-6 bg-gold" />
                Intervention IDF
              </span>
            </div>
          </div>

          {/* Technical spec card */}
          <div className="corner-ticks panel hidden self-end p-8 lg:block">
            <p className="eyebrow mb-6">Lots techniques</p>
            <ul className="divide-y divide-border">
              {[
                ["Plomberie", "Réseaux & colonnes"],
                ["Chauffage", "Chaufferie collective"],
                ["VMC", "Simple / double flux"],
                ["Gaz", "Mise en conformité"],
              ].map(([k, v], i) => (
                <li key={k} className="flex items-center justify-between py-4">
                  <span className="flex items-center gap-4">
                    <span className="index-num text-xs">0{i + 1}</span>
                    <span className="font-display text-base font-semibold">{k}</span>
                  </span>
                  <span className="text-xs text-muted-foreground">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden border-y border-border bg-secondary/40 py-4">
          <div className="marquee-track">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center">
                {departements.concat(departements).map((d, i) => (
                  <span
                    key={`${dup}-${i}`}
                    className="flex items-center gap-6 px-6 font-display text-sm tracking-[0.18em] whitespace-nowrap text-muted-foreground uppercase"
                  >
                    {d}
                    <span className="h-1 w-1 bg-gold" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="band-cream pt-20 lg:pt-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 px-5 md:px-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`border-border py-12 lg:py-16 ${i % 2 === 1 ? "border-l pl-6" : "pr-6"} ${i < 2 ? "border-b lg:border-b-0" : ""} ${i === 2 ? "lg:border-l lg:pl-6" : ""} ${i === 3 ? "lg:pl-6" : ""}`}
            >
              <div className="font-display text-4xl leading-none font-bold text-gold sm:text-5xl lg:text-6xl">
                {s.value}
              </div>
              <div className="mt-3 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                {s.label}
              </div>
            </div>
          ))}
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
                  <div key={title as string} className="rounded-2xl bg-card p-6">
                    <I className="h-5 w-5 text-gold" strokeWidth={1.5} />
                    <h3 className="mt-4 text-base">{title as string}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{desc as string}</p>
                  </div>
                );
              })}
            </div>

            <a href="#services" className="btn-ghost mt-10">
              En savoir plus <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b border-border py-24 lg:py-32">
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

          <div className="mt-16 flex flex-col">
            {services.map((s) => (
              <article
                key={s.num}
                className="group grid grid-cols-1 items-center gap-8 border-t border-border py-10 lg:grid-cols-[80px_1.2fr_1fr_260px] lg:gap-10"
              >
                <div className="index-num text-3xl transition-colors group-hover:text-gold">
                  {s.num}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <s.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                    <h3 className="text-xl sm:text-2xl">{s.title}</h3>
                  </div>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
                <ul className="grid gap-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-1 w-3 shrink-0 bg-gold/70" />
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={s.img}
                    alt={s.alt}
                    width={1000}
                    height={1200}
                    loading="lazy"
                    className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-36"
                  />
                </div>
              </article>
            ))}
            <div className="border-t border-border" />
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="eyebrow">Nous intervenons dans toute l'Île-de-France :</span>
            {departements.map((d) => (
              <span
                key={d}
                className="rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section className="relative border-b border-border py-24 lg:py-32">
        <div className="blueprint pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
          <SectionLabel index="03">Pourquoi nous choisir</SectionLabel>
          <div className="mt-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <h2 className="text-3xl sm:text-5xl">Pourquoi choisir DICKO ?</h2>
            <p className="text-sm text-muted-foreground">
              Votre partenaire CVC de confiance en Île-de-France
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <div key={w.title} className="panel p-8">
                <div className="flex items-start justify-between">
                  <w.icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
                  <span className="index-num text-xs">0{i + 1}</span>
                </div>
                <h3 className="mt-8 text-lg leading-snug">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RÉALISATIONS */}
      <section id="realisations" className="border-b border-border py-24 lg:py-32">
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
              <article key={p.title} className="group">
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
              </article>
            ))}
          </div>

          <a href="#contact" className="btn-ghost mt-14">
            Voir toutes nos réalisations <ArrowUpRight className="h-4 w-4" />
          </a>
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
              <article key={p.title} className="group flex flex-col rounded-2xl bg-card p-8">
                <div className="flex items-center gap-3 text-[11px] tracking-[0.16em] uppercase">
                  <span className="text-gold">{p.cat}</span>
                  <span className="text-muted-foreground">{p.date}</span>
                  <span className="text-muted-foreground">{p.read}</span>
                </div>
                <h3 className="mt-6 text-lg leading-snug transition-colors group-hover:text-gold">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 font-display text-xs font-semibold tracking-[0.14em] text-gold uppercase">
                  Lire l'article <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </article>
            ))}
          </div>

          <a href="#blog" className="btn-ghost mt-14">
            Voir tous les articles <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-border py-24 lg:py-32">
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
      <section id="contact" className="relative overflow-hidden py-28 lg:py-36">
        <div className="blueprint absolute inset-0 opacity-70" />
        <div className="absolute inset-x-0 top-0 hairline-y" />
        <div className="relative mx-auto max-w-[1400px] px-5 text-center md:px-10">
          <h2 className="mx-auto max-w-3xl text-3xl leading-tight sm:text-5xl lg:text-6xl">
            Prêt à démarrer votre projet <span className="text-gold">CVC</span> ?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Contactez-nous pour obtenir un devis personnalisé pour vos travaux de plomberie,
            chauffage ou VMC en Île-de-France.
          </p>
          <a href="#contact" className="btn-gold mt-10">
            Nous contacter <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-5 text-xs text-muted-foreground md:flex-row md:px-10">
          <span className="font-display tracking-[0.24em] text-foreground">DICKO</span>
          <span>Plomberie · Chauffage · VMC · Gaz — Île-de-France</span>
          <span>© {new Date().getFullYear()} DICKO</span>
        </div>
      </footer>
    </div>
  );
}
