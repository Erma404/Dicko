import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  Minus,
  Plus,
  ShieldCheck,
  Wind,
  Wrench,
} from "lucide-react";

import servVmc from "@/assets/service-vmc.jpg";
import { useQuoteModal } from "@/lib/quote-modal-context";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  faqPageJsonLd,
  jsonLdScriptProps,
  serviceJsonLd,
} from "@/lib/seo";

export const Route = createFileRoute("/services/installation-vmc")({
  head: () => ({
    meta: [
      {
        title: "Installation VMC Bâtiment Paris & Île-de-France | Devis Gratuit | DICKO BTP",
      },
      {
        name: "description",
        content:
          "Installation VMC simple et double flux pour bâtiments tertiaires et logements collectifs en Île-de-France. Devis gratuit sous 24h, conformité RE2020, chantiers B2B uniquement.",
      },
      {
        property: "og:title",
        content: "Installation VMC Bâtiment | DICKO BTP Paris & Île-de-France",
      },
      {
        property: "og:description",
        content:
          "VMC simple flux, double flux et rénovation de gaines : installation, mise aux normes et maintenance pour bâtiments professionnels en Île-de-France.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/services/installation-vmc") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/services/installation-vmc") }],
  }),
  component: InstallationVmcPage,
});

const typesVmc = [
  {
    title: "VMC simple flux",
    desc: "Extraction de l'air vicié des pièces humides (cuisine, salle de bain, WC), avec entrées d'air neuf dans les pièces sèches. Solution la plus courante et la plus économique en rénovation comme en logement collectif.",
    points: ["Coût d'installation maîtrisé", "Entretien simple", "Autoréglable ou hygroréglable"],
  },
  {
    title: "VMC double flux",
    desc: "Insuffle de l'air neuf filtré tout en extrayant l'air vicié, avec récupération de chaleur entre les deux flux. Idéale pour les bâtiments tertiaires et les programmes visant une haute performance énergétique.",
    points: ["Récupération de chaleur (jusqu'à 90%)", "Meilleure qualité d'air intérieur", "Conforme RE2020"],
  },
];

const etapes = [
  {
    title: "Étude technique et visite du bâtiment",
    desc: "Un chef de chantier DICKO se déplace pour évaluer la configuration (nombre de logements ou de locaux, gaines existantes, contraintes d'accès) et chiffrer les travaux.",
  },
  {
    title: "Devis détaillé sous 24h ouvrées",
    desc: "Chiffrage précis incluant matériel, main-d'œuvre et délais, sans surprise à la facturation finale.",
  },
  {
    title: "Installation par des techniciens qualifiés",
    desc: "Pose du groupe d'extraction, des gaines et des bouches, raccordements électriques, avec respect des règles de l'art (DTU 68.3) et des délais annoncés.",
  },
  {
    title: "Mise en service et contrôle des débits",
    desc: "Réglage des débits d'air par pièce, contrôle d'étanchéité des réseaux et vérification du bon fonctionnement avant réception du chantier.",
  },
  {
    title: "Maintenance et entretien",
    desc: "Contrat d'entretien préventif disponible pour garantir la performance et la durée de vie de l'installation.",
  },
];

const faqs = [
  {
    q: "La VMC est-elle obligatoire dans un bâtiment professionnel ou un immeuble collectif ?",
    a: "Oui, dans la quasi-totalité des cas. La réglementation française (arrêté du 24 mars 1982 modifié, DTU 68.3) impose une ventilation mécanique dans les logements collectifs comme dans de nombreux locaux professionnels, pour garantir le renouvellement de l'air et limiter l'humidité. Les obligations précises dépendent de l'usage du bâtiment et de sa date de construction.",
  },
  {
    q: "Quelle est la différence entre VMC simple flux et double flux ?",
    a: "La VMC simple flux extrait uniquement l'air vicié des pièces humides, l'air neuf entrant naturellement par des entrées dédiées. La VMC double flux insuffle en plus de l'air neuf filtré et récupère la chaleur de l'air extrait avant de le rejeter, ce qui améliore le confort et réduit les besoins de chauffage, pour un coût d'installation plus élevé.",
  },
  {
    q: "Combien de temps dure l'installation d'une VMC dans un immeuble collectif ?",
    a: "Cela dépend du nombre de logements, de la présence ou non de gaines existantes à réutiliser et de l'accessibilité du chantier. Une estimation précise du délai est communiquée dans le devis, après la visite technique.",
  },
  {
    q: "Qui doit entretenir la VMC dans une copropriété ?",
    a: "L'entretien de la VMC collective relève de la responsabilité du syndic, qui doit faire réaliser un contrôle et un nettoyage périodiques (bouches d'extraction, moteur, gaines) pour garantir le bon fonctionnement et la conformité de l'installation.",
  },
  {
    q: "Peut-on installer une VMC double flux en rénovation ?",
    a: "Oui, mais cela nécessite généralement plus de travaux qu'une simple flux car il faut créer un réseau de gaines double (insufflation et extraction). Une étude technique préalable permet de vérifier la faisabilité selon la configuration du bâtiment.",
  },
  {
    q: "Quels sont les signes d'une VMC défaillante ?",
    a: "Buée persistante sur les vitres, odeurs qui stagnent, moisissures dans les pièces humides, bouches d'extraction qui n'aspirent plus ou bruit anormal du moteur sont les signes les plus courants d'une VMC à réviser ou remplacer.",
  },
  {
    q: "DICKO intervient-il pour des particuliers ?",
    a: "Non, DICKO est une entreprise 100% B2B : nous intervenons exclusivement pour des bâtiments professionnels, des logements collectifs (via syndics et bailleurs) et des infrastructures publiques en Île-de-France.",
  },
];

function InstallationVmcPage() {
  const { openQuoteModal } = useQuoteModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-background text-foreground">
      <script
        {...jsonLdScriptProps(
          serviceJsonLd({
            name: "Installation VMC bâtiment",
            description:
              "Installation, mise aux normes et maintenance de VMC simple et double flux pour bâtiments tertiaires et logements collectifs en Île-de-France.",
            path: "/services/installation-vmc",
            serviceType: "Installation de ventilation mécanique contrôlée (VMC)",
          }),
        )}
      />
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Installation VMC", path: "/services/installation-vmc" },
          ]),
        )}
      />
      <script {...jsonLdScriptProps(faqPageJsonLd(faqs))} />

      {/* HERO */}
      <section className="px-3 pt-3 md:px-5">
        <div className="band-ink dicko-watermark relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-6 py-14 md:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
            <div>
              <nav className="flex items-center gap-2 text-xs text-muted-foreground" aria-label="Fil d'Ariane">
                <Link to="/" className="hover:text-gold">
                  Accueil
                </Link>
                <span>›</span>
                <Link to="/services" className="hover:text-gold">
                  Services
                </Link>
                <span>›</span>
                <span className="text-foreground">Installation VMC</span>
              </nav>
              <span className="eyebrow mt-6 inline-block">Ventilation mécanique contrôlée</span>
              <h1 className="mt-4 text-[2rem] leading-[1.05] font-bold tracking-tight sm:text-4xl lg:text-[3.2rem]">
                Installation <span className="text-gold">VMC</span> pour bâtiments
                professionnels en Île-de-France
              </h1>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                VMC simple flux, double flux, mise aux normes et maintenance : DICKO installe et
                entretient les systèmes de ventilation de vos immeubles collectifs, bureaux et
                bâtiments tertiaires, pour une qualité d'air conforme à la réglementation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button type="button" onClick={openQuoteModal} className="btn-gold">
                  Devis gratuit sous 24h <ArrowUpRight className="h-4 w-4" />
                </button>
                <Link to="/realisations" className="btn-ghost">
                  Voir nos chantiers
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src={servVmc}
                alt="Installation VMC dans un bâtiment professionnel en Île-de-France"
                width={1008}
                height={1200}
                className="h-64 w-full object-cover md:h-80 lg:h-[26rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RÉPONSE DIRECTE */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[900px] px-5 md:px-10">
          <p className="text-lg leading-relaxed font-medium text-foreground/90">
            La <strong>ventilation mécanique contrôlée (VMC)</strong> assure le renouvellement de
            l'air d'un bâtiment en extrayant l'air vicié des pièces humides et en apportant de
            l'air neuf. Elle est <strong>obligatoire</strong> dans la quasi-totalité des logements
            collectifs et locaux professionnels en France depuis 1982, pour limiter l'humidité,
            les moisissures et garantir une qualité d'air conforme aux normes en vigueur (DTU
            68.3). DICKO conçoit, installe et entretient des VMC simple et double flux pour les
            bâtiments tertiaires, logements collectifs et infrastructures publiques d'Île-de-France.
          </p>

          {/* TYPES DE VMC */}
          <h2 className="mt-16 font-display text-2xl font-bold">
            VMC simple flux ou double flux : quelle solution choisir ?
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {typesVmc.map((t) => (
              <div key={t.title} className="rounded-[1.5rem] border border-border bg-card p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                  <Wind className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                <ul className="mt-4 flex flex-col gap-2">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* PROCESSUS */}
          <h2 className="mt-16 font-display text-2xl font-bold">
            Notre processus d'installation
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {etapes.map((e, i) => (
              <div key={e.title} className="flex gap-5">
                <span className="index-num flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold">{e.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RÉGLEMENTATION */}
          <div className="mt-16 rounded-[1.75rem] border-l-4 border-gold bg-card p-8">
            <div className="flex items-start gap-4">
              <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-gold" strokeWidth={1.6} />
              <div>
                <h2 className="font-display text-xl font-bold">
                  Réglementation : ce que dit la loi
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  La VMC est encadrée par l'arrêté du 24 mars 1982 modifié et le DTU 68.3, qui
                  fixent les débits d'air réglementaires selon les pièces et le type de bâtiment.
                  Le syndic ou le gestionnaire d'un immeuble collectif est responsable de la
                  conformité et de l'entretien de l'installation.
                </p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: "vmc-obligatoire-immeuble-reglementation" }}
                  className="mt-4 inline-flex items-center gap-2 font-display text-sm font-semibold text-gold hover:underline"
                >
                  Lire notre guide complet sur la réglementation VMC{" "}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* POURQUOI DICKO */}
          <h2 className="mt-16 font-display text-2xl font-bold">
            Pourquoi confier votre installation VMC à DICKO ?
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              { icon: ClipboardList, title: "Devis sous 24h", desc: "Chiffrage détaillé après visite technique, sans surprise." },
              { icon: Wrench, title: "Techniciens qualifiés", desc: "Pose dans les règles de l'art (DTU 68.3), matériel certifié." },
              { icon: ShieldCheck, title: "100% B2B", desc: "Spécialistes des chantiers tertiaires, collectifs et publics." },
            ].map((f) => (
              <div key={f.title} className="rounded-[1.5rem] border border-border bg-card p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold text-primary-foreground">
                  <f.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="mt-16 font-display text-2xl font-bold">Questions fréquentes</h2>
          <div className="mt-6 flex flex-col gap-3">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q} className="rounded-[1.5rem] border border-border bg-card px-6">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="font-display text-sm font-semibold sm:text-base">{f.q}</span>
                    {isOpen ? (
                      <Minus className="h-5 w-5 shrink-0 text-gold" />
                    ) : (
                      <Plus className="h-5 w-5 shrink-0 text-gold" />
                    )}
                  </button>
                  {isOpen ? (
                    <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  ) : null}
                </div>
              );
            })}
          </div>

          {/* CTA FINAL */}
          <div className="band-ink mt-16 rounded-[1.75rem] p-8 text-center md:p-12">
            <h2 className="font-display text-2xl font-bold">
              Un projet d'installation VMC en Île-de-France ?
            </h2>
            <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted-foreground">
              Décrivez votre bâtiment, nous revenons vers vous avec un devis détaillé sous 24h
              ouvrées.
            </p>
            <button type="button" onClick={openQuoteModal} className="btn-gold mt-6">
              Demander un devis <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
