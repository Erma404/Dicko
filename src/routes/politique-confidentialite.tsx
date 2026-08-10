import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/politique-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité | Dicko BTP" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: "/politique-confidentialite" }],
  }),
  component: PolitiqueConfidentialitePage,
});

function PolitiqueConfidentialitePage() {
  return (
    <main className="bg-background text-foreground">
      <section className="px-3 pt-3 md:px-5">
        <div className="band-ink relative overflow-hidden rounded-[2rem] px-6 py-16 md:rounded-[2.5rem] md:px-12">
          <div className="mx-auto max-w-[900px]">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Politique de confidentialité
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="legal-prose mx-auto max-w-[820px] px-5 md:px-10">
          <p>
            <strong>Date de dernière mise à jour :</strong> Mars 2026
          </p>

          <h2>1. Responsable du traitement</h2>
          <p>
            DICKO BTP, 25 Rue Archereau, 75019 Paris —{" "}
            <a href="mailto:contact@dicko-pvc.fr">contact@dicko-pvc.fr</a>
          </p>

          <h2>2. Données collectées</h2>
          <p>
            Lors de l'utilisation de nos formulaires de contact ou de demande de devis, nous
            collectons :
          </p>
          <ul>
            <li>Nom et prénom</li>
            <li>Nom de l'entreprise</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Informations relatives à votre projet (localisation, type de travaux, surface)</li>
          </ul>

          <h2>3. Finalités du traitement</h2>
          <p>Ces données sont collectées pour :</p>
          <ul>
            <li>Répondre à vos demandes de devis et d'information</li>
            <li>Vous contacter dans le cadre de notre relation commerciale</li>
            <li>Améliorer nos services</li>
          </ul>

          <h2>4. Base légale</h2>
          <p>
            Le traitement de vos données est fondé sur votre consentement (article 6.1.a du RGPD)
            et sur l'intérêt légitime de DICKO BTP à répondre aux demandes de ses prospects.
          </p>

          <h2>5. Durée de conservation</h2>
          <p>
            Vos données sont conservées pendant une durée maximale de 3 ans à compter de notre
            dernier contact.
          </p>

          <h2>6. Destinataires des données</h2>
          <p>
            Vos données ne sont pas transmises à des tiers à des fins commerciales. Elles peuvent
            être partagées avec nos prestataires techniques (hébergeur) dans le strict cadre de la
            fourniture de leurs services.
          </p>

          <h2>7. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul>
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement ("droit à l'oubli")</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité</li>
            <li>Droit d'opposition</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à :{" "}
            <a href="mailto:contact@dicko-pvc.fr">contact@dicko-pvc.fr</a>
          </p>
          <p>
            Vous avez également le droit d'introduire une réclamation auprès de la CNIL
            (www.cnil.fr).
          </p>

          <h2>8. Cookies</h2>
          <p>
            Ce site utilise Google Analytics pour mesurer l'audience. Ces cookies peuvent être
            refusés via les paramètres de votre navigateur. Les cookies ne contiennent pas
            d'informations personnelles identifiantes.
          </p>

          <h2>9. Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
            protéger vos données contre tout accès non autorisé, perte ou destruction.
          </p>
        </div>
      </section>
    </main>
  );
}
