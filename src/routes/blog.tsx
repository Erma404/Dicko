import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog Plomberie Chauffage Paris | Conseils & Actualités | Dicko BTP" },
      {
        name: "description",
        content:
          "Retrouvez tous nos conseils d'experts sur la plomberie, le chauffage, la VMC et le gaz à Paris et en Île-de-France.",
      },
      { property: "og:title", content: "Blog Plomberie Chauffage Paris | Dicko BTP" },
      {
        property: "og:description",
        content:
          "Conseils et actualités plomberie & chauffage : réglementation, entretien, dépannage et bonnes pratiques à Paris.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const featured = {
  cat: "Gaz",
  date: "20 juillet 2026",
  read: "6 min",
  title: "Détecteur de monoxyde de carbone obligatoire à Paris : ce que dit la loi",
  desc: "Réglementation du détecteur de CO, installations à risque et bonnes pratiques pour éviter l'intoxication dans votre logement.",
};

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
    title: "Chauffage collectif en copropriété : obligations du syndic et calendrier d'entretien",
    desc: "Dates de la trêve de chauffe, obligations d'entretien du syndic et répartition des charges de chauffage collectif.",
  },
  {
    cat: "Plomberie",
    date: "10 juin 2026",
    read: "6 min",
    title: "Colonne montante qui fuit dans un immeuble haussmannien : diagnostic et réparation",
    desc: "Causes fréquentes, responsabilité syndic/copropriétaire et solutions face à une fuite sur colonne montante.",
  },
  {
    cat: "Chauffage",
    date: "20 mai 2026",
    read: "7 min",
    title: "Chaudière qui ne chauffe plus : les 7 causes les plus fréquentes",
    desc: "Pression basse, défaut d'allumage, vanne bloquée : les causes à vérifier avant d'appeler un chauffagiste.",
  },
  {
    cat: "Plomberie",
    date: "5 mai 2026",
    read: "5 min",
    title: "WC ou canalisation bouchée : que faire avant d'appeler un plombier ?",
    desc: "Les gestes à tester, les erreurs à éviter et quand l'intervention professionnelle devient indispensable.",
  },
  {
    cat: "Plomberie",
    date: "25 mars 2026",
    read: "7 min",
    title: "Dépannage plomberie urgence à Paris : tarifs, délais et bons réflexes",
    desc: "Tarifs réels de nuit et week-end, pièges à éviter, gestes d'urgence et comment identifier un vrai professionnel fiable à Paris.",
  },
  {
    cat: "Chauffage",
    date: "18 mars 2026",
    read: "8 min",
    title: "Prix d'une installation de chaudière gaz à Paris en 2026 : tout savoir",
    desc: "Prix selon les modèles, aides MaPrimeRénov' et CEE, TVA réduite et reste à charge réel. Tout ce qu'il faut savoir avant d'investir.",
  },
  {
    cat: "Plomberie",
    date: "10 mars 2026",
    read: "6 min",
    title: "Fuite d'eau en appartement à Paris : que faire et qui appeler ?",
    desc: "Gestes d'urgence, responsabilités locataire/propriétaire, déclaration assurance et comment choisir un plombier fiable à Paris.",
  },
  {
    cat: "Chauffage",
    date: "15 février 2026",
    read: "8 min",
    title: "Comment choisir sa chaudière à condensation à Paris en 2026 ?",
    desc: "Tout savoir sur le choix d'une chaudière à condensation à Paris : marques, prix, aides MaPrimeRénov' et installation par un professionnel certifié.",
  },
  {
    cat: "VMC",
    date: "8 février 2026",
    read: "6 min",
    title: "VMC en immeuble : est-ce obligatoire ? Ce que dit la loi",
    desc: "La VMC est-elle obligatoire dans votre immeuble ? Découvrez la réglementation française, les obligations des syndics et copropriétaires, et comment faire installer votre VMC à Paris.",
  },
  {
    cat: "Chauffage",
    date: "1er février 2026",
    read: "7 min",
    title: "Entretien annuel chaudière gaz : obligation légale et prix à Paris",
    desc: "L'entretien annuel de votre chaudière gaz est obligatoire par la loi. Découvrez pourquoi, combien ça coûte à Paris et comment planifier votre contrat d'entretien.",
  },
];

function Meta({ cat, date, read }: { cat: string; date: string; read: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-[11px] tracking-[0.14em] uppercase">
      <span className="rounded-full bg-gold px-4 py-1.5 font-semibold text-primary-foreground">
        {cat}
      </span>
      <span className="text-muted-foreground">{date}</span>
      <span className="inline-flex items-center gap-1.5 text-muted-foreground">
        <Clock className="h-3.5 w-3.5" /> {read}
      </span>
    </div>
  );
}

function BlogPage() {
  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="px-3 pt-3 md:px-5">
        <div className="band-ink dicko-pattern relative overflow-hidden rounded-[2rem] px-6 py-20 md:rounded-[2.5rem] md:px-12 lg:py-28">
          <div className="mx-auto max-w-[1400px]">
            <span className="eyebrow">Blog</span>
            <h1 className="mt-6 max-w-4xl text-[2.2rem] leading-[1.02] font-bold tracking-tight sm:text-5xl lg:text-[4rem]">
              Conseils et actualités{" "}
              <span className="text-gold">plomberie &amp; chauffage</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Retrouvez tous nos conseils d'experts sur la plomberie, le chauffage, la VMC et le gaz
              à Paris et en Île-de-France.
            </p>
          </div>
        </div>
      </section>

      {/* À LA UNE */}
      <section className="pt-20 pb-6">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <h2 className="eyebrow">À la une</h2>
          <article className="mt-6 rounded-[2rem] border border-border bg-card p-8 md:p-12">
            <Meta cat={featured.cat} date={featured.date} read={featured.read} />
            <h3 className="mt-6 max-w-3xl text-2xl leading-tight sm:text-4xl">{featured.title}</h3>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{featured.desc}</p>
            <span className="btn-gold mt-8">
              Lire l'article <ArrowUpRight className="h-4 w-4" />
            </span>
          </article>
        </div>
      </section>

      {/* GRILLE */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 px-5 md:grid-cols-2 md:px-10 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-[1.75rem] border border-border bg-card p-8 transition-transform duration-500 hover:-translate-y-1.5"
            >
              <Meta cat={p.cat} date={p.date} read={p.read} />
              <h3 className="mt-6 text-lg leading-snug sm:text-xl">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-gold">
                Lire l'article <ArrowUpRight className="h-4 w-4" />
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 py-6 md:px-5">
        <div className="band-ink dicko-pattern overflow-hidden rounded-[2rem] px-6 py-20 text-center md:rounded-[2.5rem] md:px-12 lg:py-28">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl leading-tight sm:text-5xl">
              Besoin d'un <span className="text-gold">professionnel</span> ?
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Découvrez nos services en plomberie, chauffage, VMC et gaz pour vos projets en
              Île-de-France.
            </p>
            <Link to="/services" className="btn-gold mt-10">
              Voir nos services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
