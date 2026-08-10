// Bannière de consentement cookies — Silktide Consent Manager v2.0.1
// (https://silktide.com/consent-manager/), chargé depuis jsdelivr avec
// intégrité SRI. Rendu tel quel dans <head> (RootShell), avant </body> ne
// convient pas ici car le script doit s'exécuter avant l'affichage de la
// page pour bloquer les cookies non essentiels dès le chargement.
const SILKTIDE_CSS_INTEGRITY =
  "sha384-EdMq+R+YOnsbelo08wPenoTlnxbAyxI11NMIxzugx/qAsbh64KcOkqxYqq6pfvO/";
const SILKTIDE_JS_INTEGRITY =
  "sha384-5Pt34uiIbCsvfiiZXoLi4HRf/YBXjr9c8e+gYeVo9smUaInNHYVtc8NZ8wUnXJIq";

const SILKTIDE_INIT_SCRIPT = `
window.silktideConsentManager.init({
  backdrop: {
    show: true
  },
  icon: {
    position: "bottomLeft"
  },
  prompt: {
    position: "bottomRight"
  },
  consentTypes: [
    {
      id: "essentiel",
      label: "Essentiel",
      description: "<p>Ces cookies sont nécessaires au bon fonctionnement du site Internet et ne peuvent pas être désactivés. Ils vous aident à vous connecter et à définir vos préférences de confidentialité.</p>",
      required: true,
      onAccept: function() {
        console.log('Add logic for the required Essentiel consent type here');
      }
    },
    {
      id: "analytics",
      label: "Analytics",
      description: "<p>Ces cookies nous aident à améliorer le site en suivant les pages les plus populaires et la manière dont les visiteurs naviguent sur le site.</p>",
      required: false,
      gtag: "analytics_storage"
    },
    {
      id: "marketing",
      label: "Marketing",
      description: "<p>Ces cookies sont utilisés par nous et nos partenaires publicitaires pour vous afficher des publicités pertinentes sur ce site et ailleurs, ainsi que pour mesurer la performance de ces campagnes.</p>",
      required: false,
      gtag: [
        "ad_storage",
        "ad_user_data",
        "ad_personalization"
      ]
    }
  ],
  text: {
    prompt: {
      description: "<p>Nous utilisons des cookies sur notre site pour améliorer votre expérience utilisateur, proposer du contenu personnalisé et analyser notre trafic.</p>",
      acceptAllButtonText: "Tout accepter",
      acceptAllButtonAccessibleLabel: "Tout accepter",
      rejectNonEssentialButtonText: "Rejeter ",
      rejectNonEssentialButtonAccessibleLabel: "Tout rejeter",
      preferencesButtonText: "Préferences",
      preferencesButtonAccessibleLabel: "Basculer les préférences"
    },
    preferences: {
      title: "Personnalisez vos préférences de cookies",
      description: "<p>Nous respectons votre droit à la confidentialité. Vous pouvez choisir de ne pas autoriser certains types de cookies. Vos préférences en matière de cookies s'appliqueront à l'ensemble de notre site web.</p>",
      saveButtonText: "Enregistrer et fermer",
      saveButtonAccessibleLabel: "Enregistrer et fermer",
      creditLinkText: "Obtenez cette bannière gratuitement",
      creditLinkAccessibleLabel: "Obtenez cette bannière gratuitement"
    }
  }
});
`;

export function CookieConsentHead() {
  return (
    <>
      <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
      <link
        rel="stylesheet"
        id="silktide-consent-manager-css"
        href="https://cdn.jsdelivr.net/gh/silktide/consent-manager@v2.0.1/silktide-consent-manager.css"
        integrity={SILKTIDE_CSS_INTEGRITY}
        crossOrigin="anonymous"
      />
      <style id="silktide-consent-manager-overrides">{`
#stcm-wrapper {
  --boxShadow: -5px 5px 10px 0px #00000012, 0px 0px 50px 0px #0000001a;
  --fontFamily: Helvetica Neue, Segoe UI, Arial, sans-serif;
  --primaryColor: #DDC446;
  --backgroundColor: #152e3d;
  --textColor: #fafafa;
  --backdropBackgroundColor: #00000033;
  --backdropBackgroundBlur: 0px;
  --iconColor: #152E3D;
  --iconBackgroundColor: #DDC446;
}
      `}</style>
      <script
        src="https://cdn.jsdelivr.net/gh/silktide/consent-manager@v2.0.1/silktide-consent-manager.js"
        integrity={SILKTIDE_JS_INTEGRITY}
        crossOrigin="anonymous"
      />
      <script dangerouslySetInnerHTML={{ __html: SILKTIDE_INIT_SCRIPT }} />
    </>
  );
}
