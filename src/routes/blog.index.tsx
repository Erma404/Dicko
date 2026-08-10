import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";

import { blogPosts } from "@/data/blog-posts";
import { blogImages } from "@/data/blog-images";

export const Route = createFileRoute("/blog/")({
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
  const featured = blogPosts[0]!;
  const rest = blogPosts.slice(1);

  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="px-3 pt-3 md:px-5">
        <div className="band-ink dicko-watermark relative overflow-hidden rounded-[2rem] px-6 py-20 md:rounded-[2.5rem] md:px-12 lg:py-28">
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
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group mt-6 grid grid-cols-1 overflow-hidden rounded-[2rem] border border-border bg-card lg:grid-cols-[1fr_1.1fr]"
          >
            <img
              src={blogImages[featured.slug]}
              alt={featured.title}
              className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] lg:h-full"
            />
            <div className="p-8 md:p-12">
              <Meta cat={featured.category} date={featured.date} read={featured.read} />
              <h3 className="mt-6 max-w-3xl text-2xl leading-tight transition-colors group-hover:text-gold sm:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                {featured.description}
              </p>
              <span className="btn-gold mt-8">
                Lire l'article <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* GRILLE */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 px-5 md:grid-cols-2 md:px-10 lg:grid-cols-3">
          {rest.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card transition-transform duration-500 hover:-translate-y-1.5"
            >
              <img
                src={blogImages[p.slug]}
                alt={p.title}
                className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="flex flex-1 flex-col p-8">
                <Meta cat={p.category} date={p.date} read={p.read} />
                <h3 className="mt-6 text-lg leading-snug transition-colors group-hover:text-gold sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-gold">
                  Lire l'article <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 py-6 md:px-5">
        <div className="band-ink dicko-watermark overflow-hidden rounded-[2rem] px-6 py-20 text-center md:rounded-[2.5rem] md:px-12 lg:py-28">
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
