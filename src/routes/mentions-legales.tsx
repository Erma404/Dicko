import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales | Dicko BTP" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: "/mentions-legales" }],
  }),
  component: MentionsLegalesPage,
});

function MentionsLegalesPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="px-3 pt-3 md:px-5">
        <div className="band-ink relative overflow-hidden rounded-[2rem] px-6 py-16 md:rounded-[2.5rem] md:px-12">
          <div className="mx-auto max-w-[900px]">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Mentions légales</h1>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="legal-prose mx-auto max-w-[820px] px-5 md:px-10">
          <h2>Éditeur du site</h2>
          <p>
            <strong>Raison sociale :</strong> DICKO BTP
          </p>
          <p>
            <strong>SIRET :</strong> 918 120 783 00017
          </p>
          <p>
            <strong>Adresse :</strong> 25 Rue Archereau, 75019 Paris, France
          </p>
          <p>
            <strong>Téléphone :</strong> 06 15 03 53 00
          </p>
          <p>
            <strong>Email :</strong>{" "}
            <a href="mailto:contact@dicko-pvc.fr">contact@dicko-pvc.fr</a>
          </p>

          <h2>Directeur de la publication</h2>
          <p>Le directeur de la publication est le représentant légal de DICKO BTP.</p>

          <h2>Hébergement</h2>
          <p>
            Ce site est hébergé via GitHub Pages par GitHub, Inc., 88 Colin P Kelly Jr St, San
            Francisco, CA 94107, États-Unis.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, graphismes) est la propriété
            exclusive de DICKO BTP, sauf mention contraire. Toute reproduction, même partielle,
            est interdite sans autorisation préalable.
          </p>

          <h2>Responsabilité</h2>
          <p>
            DICKO BTP s'efforce d'assurer l'exactitude des informations diffusées sur ce site.
            Toutefois, nous ne pouvons garantir l'exactitude, la complétude et l'actualité des
            informations. DICKO BTP décline toute responsabilité pour les dommages directs ou
            indirects résultant de l'utilisation de ce site.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Les informations collectées via les formulaires de contact sont utilisées uniquement
            pour répondre à vos demandes. Pour en savoir plus, consultez notre{" "}
            <Link to="/politique-confidentialite">politique de confidentialité</Link>.
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site peut utiliser des cookies à des fins statistiques (Google Analytics). Vous
            pouvez configurer votre navigateur pour refuser les cookies.
          </p>
        </div>
      </section>
    </main>
  );
}
