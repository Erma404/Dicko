import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, Minus, Phone, Plus } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Dicko BTP – Plombier Chauffagiste Paris Île-de-France" },
      {
        name: "description",
        content:
          "Contactez DICKO pour vos projets de plomberie, chauffage et VMC en Île-de-France. Devis et étude personnalisée sous 24h ouvrées.",
      },
      { property: "og:title", content: "Contact | Dicko BTP – Plombier Chauffagiste Paris" },
      {
        property: "og:description",
        content:
          "Pour vos projets de plomberie, chauffage et VMC en Île-de-France, DICKO vous accompagne de l'étude à la réalisation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const coordonnees = [
  {
    icon: Phone,
    title: "Téléphone / WhatsApp",
    value: "06 15 03 53 00",
    sub: "Du lundi au vendredi, 8h-18h",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@dicko-pvc.fr",
    sub: "Réponse sous 24h ouvrées",
  },
  {
    icon: Clock,
    title: "Horaires",
    value: "Lun - Ven : 8h - 18h",
    sub: "Intervention sur chantier selon planning",
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

const fieldClass =
  "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold";

function ContactPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="px-3 pt-3 md:px-5">
        <div className="band-ink dicko-pattern relative overflow-hidden rounded-[2rem] px-6 py-20 md:rounded-[2.5rem] md:px-12 lg:py-28">
          <div className="mx-auto max-w-[1400px]">
            <span className="eyebrow">Contact</span>
            <h1 className="mt-6 max-w-4xl text-[2.2rem] leading-[1.02] font-bold tracking-tight sm:text-5xl lg:text-[4rem]">
              Contactez votre <span className="text-gold">entreprise CVC</span> en Île-de-France
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Pour vos projets de plomberie, chauffage et VMC en Île-de-France, DICKO vous
              accompagne de l'étude à la réalisation.
            </p>
          </div>
        </div>
      </section>

      {/* COORDONNÉES + FORMULAIRE */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl leading-tight sm:text-4xl">
              Nos <span className="text-gold">coordonnées</span>
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              N'hésitez pas à nous contacter pour discuter de votre projet. Nous vous répondrons
              dans les plus brefs délais.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {coordonnees.map((c) => (
                <div
                  key={c.title}
                  className="flex items-start gap-5 rounded-[1.5rem] border border-border bg-card p-6"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold text-primary-foreground">
                    <c.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold">{c.title}</h3>
                    <p className="mt-1 font-display text-lg font-semibold">{c.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{c.sub}</p>
                  </div>
                </div>
              ))}
              <address className="rounded-[1.5rem] border border-border bg-card p-6 text-sm tracking-[0.12em] uppercase not-italic">
                25 rue Archereau, 75019 Paris
              </address>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-card p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl">Demander un devis</h2>
            <form className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="text-sm">
                Nom de l'entreprise *
                <input required type="text" name="entreprise" className={fieldClass} />
              </label>
              <label className="text-sm">
                Nom du contact *
                <input required type="text" name="contact" className={fieldClass} />
              </label>
              <label className="text-sm">
                Email *
                <input required type="email" name="email" className={fieldClass} />
              </label>
              <label className="text-sm">
                Téléphone
                <input type="tel" name="telephone" className={fieldClass} />
              </label>
              <label className="text-sm">
                Type de projet *
                <select required name="projet" defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Sélectionnez
                  </option>
                  <option>Plomberie</option>
                  <option>Chauffage</option>
                  <option>VMC</option>
                  <option>Gaz</option>
                  <option>CVC complet</option>
                </select>
              </label>
              <label className="text-sm">
                Localisation *
                <input required type="text" name="localisation" className={fieldClass} />
              </label>
              <label className="text-sm sm:col-span-2">
                Description du projet
                <textarea name="description" rows={5} className={fieldClass} />
              </label>
              <div className="sm:col-span-2">
                <button type="submit" className="btn-gold">
                  Envoyer ma demande
                </button>
                <p className="mt-4 text-xs text-muted-foreground">
                  * Champs obligatoires. En soumettant ce formulaire, vous acceptez notre politique
                  de confidentialité.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="band-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[900px] px-5 md:px-10">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-5 text-3xl leading-tight sm:text-5xl">
            Questions <span className="text-gold">fréquentes</span>
          </h2>

          <div className="mt-12 flex flex-col gap-3">
            {faq.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="rounded-[1.5rem] border border-border bg-card px-6">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-base font-semibold sm:text-lg">{f.q}</span>
                    {isOpen ? (
                      <Minus className="h-5 w-5 shrink-0 text-gold" />
                    ) : (
                      <Plus className="h-5 w-5 shrink-0 text-gold" />
                    )}
                  </button>
                  {isOpen ? (
                    <p className="pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
