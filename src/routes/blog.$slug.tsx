import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Clock, Mail, Minus, Phone, Plus } from "lucide-react";

import { blogPosts } from "@/data/blog-posts";
import { blogImages } from "@/data/blog-images";
import { useQuoteModal } from "@/lib/quote-modal-context";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const post = loaderData;
    return {
      meta: [
        { title: `${post.title} | Dicko BTP` },
        { name: "description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:url", content: `/blog/${post.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/blog/${post.slug}` }],
    };
  },
  component: BlogPostPage,
  notFoundComponent: () => (
    <main className="bg-background px-5 py-32 text-center text-foreground">
      <h1 className="text-2xl font-bold">Article introuvable</h1>
      <p className="mt-3 text-muted-foreground">Cet article n'existe pas ou plus.</p>
      <Link to="/blog" className="btn-gold mt-8">
        Retour au blog
      </Link>
    </main>
  ),
});

function BlogPostPage() {
  const post = Route.useLoaderData();
  const { openQuoteModal } = useQuoteModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="px-3 pt-3 md:px-5">
        <div className="band-ink relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-6 py-14 md:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
            <div>
              <nav className="flex items-center gap-2 text-xs text-muted-foreground" aria-label="Fil d'Ariane">
                <Link to="/" className="hover:text-gold">
                  Accueil
                </Link>
                <span>›</span>
                <Link to="/blog" className="hover:text-gold">
                  Blog
                </Link>
                <span>›</span>
                <span className="text-foreground">{post.breadcrumb || post.category}</span>
              </nav>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-[11px] tracking-[0.14em] uppercase">
                <span className="rounded-full bg-gold px-4 py-1.5 font-semibold text-primary-foreground">
                  {post.category}
                </span>
                <span className="text-muted-foreground">{post.date}</span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" /> {post.read}
                </span>
              </div>
              <h1 className="mt-6 text-[1.9rem] leading-[1.05] font-bold tracking-tight sm:text-4xl lg:text-[3.2rem]">
                {post.title}
              </h1>
            </div>
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src={blogImages[post.slug]}
                alt={post.title}
                className="h-56 w-full object-cover md:h-72 lg:h-[22rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU + SIDEBAR */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-5 md:px-10 lg:grid-cols-[1.1fr_0.7fr]">
          <article>
            <p className="text-lg leading-relaxed font-medium text-foreground/90">{post.lead}</p>

            <div
              className="article-prose mt-8"
              dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
            />

            <div className="band-ink mt-12 rounded-[1.75rem] border-l-4 border-gold bg-background p-8 text-foreground">
              <h3 className="font-display text-xl font-bold">{post.ctaTitle}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{post.ctaText}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button type="button" onClick={openQuoteModal} className="btn-gold">
                  Demander un devis
                </button>
                <Link to="/services" className="btn-ghost">
                  Nos services <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {post.faqs.length > 0 && (
              <div className="mt-16">
                <h2 className="font-display text-2xl font-bold">Questions fréquentes</h2>
                <div className="mt-6 flex flex-col gap-3">
                  {post.faqs.map((f, i) => {
                    const isOpen = openFaq === i;
                    return (
                      <div key={f.q} className="rounded-[1.5rem] border border-border bg-card px-6">
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : i)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-6 py-5 text-left"
                        >
                          <span className="font-display text-sm font-semibold sm:text-base">
                            {f.q}
                          </span>
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
              </div>
            )}
          </article>

          <aside className="sticky top-24 flex h-fit flex-col gap-6 self-start">
            <div className="rounded-[1.5rem] border border-border bg-card p-6">
              <h4 className="font-display text-sm font-semibold">À propos de DICKO BTP</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Expert en installation et maintenance CVC pour bâtiments professionnels en
                Île-de-France depuis plus de 15 ans.
              </p>
              <Link to="/a-propos" className="btn-outline-gold mt-4 text-xs">
                En savoir plus
              </Link>
            </div>

            <div className="rounded-[1.5rem] border border-border bg-card p-6">
              <h4 className="font-display text-sm font-semibold">Nos autres articles</h4>
              <ul className="mt-3 flex flex-col gap-3">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: o.slug }}
                      className="group flex items-center gap-3"
                    >
                      <img
                        src={blogImages[o.slug]}
                        alt=""
                        aria-hidden="true"
                        className="h-11 w-11 shrink-0 rounded-lg object-cover"
                      />
                      <span className="text-sm text-muted-foreground transition-colors group-hover:text-gold">
                        {o.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="band-ink rounded-[1.5rem] border border-gold/20 bg-background p-6 text-foreground">
              <h4 className="font-display text-sm font-semibold">Besoin d'un devis ?</h4>
              <p className="mt-1 text-xs text-muted-foreground">Réponse sous 24h ouvrées</p>
              <a
                href="https://wa.me/33615035300?text=Bonjour%2C%20je%20souhaite%20obtenir%20un%20devis%20pour%20mes%20travaux%20CVC."
                target="_blank"
                rel="noopener"
                className="mt-4 block font-display text-lg font-bold text-gold"
              >
                <Phone className="mr-2 inline h-4 w-4" />
                06 15 03 53 00
              </a>
              <a
                href="mailto:contact@dicko-pvc.fr"
                className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Mail className="h-4 w-4" /> contact@dicko-pvc.fr
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
