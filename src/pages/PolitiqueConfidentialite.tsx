import { Shield, Eye, Lock, Server, UserX, Mail, MapPin, Phone } from 'lucide-react';

export default function PolitiqueConfidentialite() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#0a0f14]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#173344]/30 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-[#173344]/60 border border-[#d6a527]/40 rounded-full px-4 py-2 mb-6">
              <span className="text-[#d6a527] text-sm font-medium">Protection des données</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-['Chakra_Petch'] mb-6">
              Politique de <span className="text-[#d6a527]">confidentialité</span>
            </h1>
            <p className="text-gray-400">
              DICKO s'engage à protéger vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-[#0d1419]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="bg-[#173344]/30 border border-[#d6a527]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#d6a527]/10 rounded-lg flex items-center justify-center border border-[#d6a527]/30">
                  <Shield className="w-5 h-5 text-[#d6a527]" />
                </div>
                <h2 className="text-2xl font-bold font-['Chakra_Petch']">Introduction</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  La présente politique de confidentialité décrit comment DICKO collecte, utilise et protège vos données personnelles lorsque vous utilisez notre site web <strong className="text-white">dicko-cvc.fr</strong>.
                </p>
                <p>
                  En utilisant notre site et en nous communiquant vos données personnelles, vous acceptez les termes de cette politique de confidentialité.
                </p>
                <div className="bg-[#0a0f14]/60 rounded-lg p-4 mt-4">
                  <p className="text-sm"><strong className="text-white">Responsable du traitement :</strong></p>
                  <p className="text-sm">DICKO – PLOMBERIE • CHAUFFAGE • VMC</p>
                  <p className="text-sm">25 RUE ARCHEREAU, 75019 PARIS</p>
                  <p className="text-sm">SIRET: 918 120 783 00017</p>
                  <p className="text-sm">Email : contact@dicko-cvc.fr</p>
                  <p className="text-sm">Téléphone : 06 15 03 53 00</p>
                </div>
              </div>
            </div>

            {/* Données collectées */}
            <div className="bg-[#173344]/30 border border-[#d6a527]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#d6a527]/10 rounded-lg flex items-center justify-center border border-[#d6a527]/30">
                  <Eye className="w-5 h-5 text-[#d6a527]" />
                </div>
                <h2 className="text-2xl font-bold font-['Chakra_Petch']">Données collectées</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Nous collectons les données personnelles suivantes :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Identité :</strong> nom, prénom, nom de l'entreprise</li>
                  <li><strong className="text-white">Coordonnées :</strong> adresse email, numéro de téléphone</li>
                  <li><strong className="text-white">Informations professionnelles :</strong> type de projet, localisation du chantier</li>
                  <li><strong className="text-white">Données de navigation :</strong> adresse IP, type de navigateur, pages visitées</li>
                </ul>
                <p>
                  Ces données sont collectées lorsque vous :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Remplissez le formulaire de contact ou de demande de devis</li>
                  <li>Naviguez sur notre site web</li>
                  <li>Nous contactez par email ou téléphone</li>
                </ul>
              </div>
            </div>

            {/* Finalités */}
            <div className="bg-[#173344]/30 border border-[#d6a527]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#d6a527]/10 rounded-lg flex items-center justify-center border border-[#d6a527]/30">
                  <Server className="w-5 h-5 text-[#d6a527]" />
                </div>
                <h2 className="text-2xl font-bold font-['Chakra_Petch']">Finalités du traitement</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Vos données personnelles sont collectées pour les finalités suivantes :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Répondre à vos demandes de contact et de devis</li>
                  <li>Établir des propositions commerciales adaptées à vos besoins</li>
                  <li>Gérer nos relations clients et prospects</li>
                  <li>Respecter nos obligations légales et réglementaires</li>
                  <li>Améliorer notre site web et nos services</li>
                </ul>
              </div>
            </div>

            {/* Base légale */}
            <div className="bg-[#173344]/30 border border-[#d6a527]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#d6a527]/10 rounded-lg flex items-center justify-center border border-[#d6a527]/30">
                  <Lock className="w-5 h-5 text-[#d6a527]" />
                </div>
                <h2 className="text-2xl font-bold font-['Chakra_Petch']">Base légale du traitement</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Le traitement de vos données personnelles est fondé sur :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Votre consentement :</strong> lorsque vous remplissez nos formulaires</li>
                  <li><strong className="text-white">L'exécution d'un contrat :</strong> pour la réalisation de nos prestations</li>
                  <li><strong className="text-white">Notre intérêt légitime :</strong> pour le développement de notre activité</li>
                  <li><strong className="text-white">Le respect d'une obligation légale :</strong> pour nos obligations comptables et fiscales</li>
                </ul>
              </div>
            </div>

            {/* Durée de conservation */}
            <div className="bg-[#173344]/30 border border-[#d6a527]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#d6a527]/10 rounded-lg flex items-center justify-center border border-[#d6a527]/30">
                  <Server className="w-5 h-5 text-[#d6a527]" />
                </div>
                <h2 className="text-2xl font-bold font-['Chakra_Petch']">Durée de conservation</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Vos données personnelles sont conservées pendant les durées suivantes :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Prospects :</strong> 3 ans à compter du dernier contact</li>
                  <li><strong className="text-white">Clients :</strong> 10 ans à compter de la fin de la relation commerciale (obligations comptables)</li>
                  <li><strong className="text-white">Données de navigation :</strong> 13 mois maximum</li>
                </ul>
              </div>
            </div>

            {/* Vos droits */}
            <div className="bg-[#173344]/30 border border-[#d6a527]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#d6a527]/10 rounded-lg flex items-center justify-center border border-[#d6a527]/30">
                  <UserX className="w-5 h-5 text-[#d6a527]" />
                </div>
                <h2 className="text-2xl font-bold font-['Chakra_Petch']">Vos droits</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Droit d'accès :</strong> obtenir la confirmation que des données vous concernant sont traitées et y accéder</li>
                  <li><strong className="text-white">Droit de rectification :</strong> faire corriger des données inexactes ou incomplètes</li>
                  <li><strong className="text-white">Droit à l'effacement :</strong> demander la suppression de vos données dans certains cas</li>
                  <li><strong className="text-white">Droit à la limitation du traitement :</strong> demander la suspension du traitement de vos données</li>
                  <li><strong className="text-white">Droit d'opposition :</strong> vous opposer au traitement de vos données pour des motifs légitimes</li>
                  <li><strong className="text-white">Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                </ul>
                <p>
                  Pour exercer ces droits, vous pouvez nous contacter :
                </p>
                <div className="bg-[#0a0f14]/60 rounded-lg p-4 mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail size={16} className="text-[#d6a527]" />
                    <span className="text-sm"><strong className="text-white">Email :</strong> contact@dicko-cvc.fr</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="text-[#d6a527] mt-0.5" />
                    <div className="text-sm">
                      <strong className="text-white">Courrier :</strong><br />
                      DICKO<br />
                      25 RUE ARCHEREAU<br />
                      75019 PARIS
                    </div>
                  </div>
                </div>
                <p>
                  Nous nous engageons à répondre à votre demande dans un délai maximum d'un mois.
                </p>
              </div>
            </div>

            {/* Sécurité */}
            <div className="bg-[#173344]/30 border border-[#d6a527]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#d6a527]/10 rounded-lg flex items-center justify-center border border-[#d6a527]/30">
                  <Lock className="w-5 h-5 text-[#d6a527]" />
                </div>
                <h2 className="text-2xl font-bold font-['Chakra_Petch']">Sécurité des données</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  DICKO met en œuvre des mesures techniques et organisationnelles appropriées pour garantir la sécurité de vos données personnelles et prévenir leur destruction, perte, altération ou divulgation non autorisée.
                </p>
                <p>
                  Ces mesures incluent :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Le chiffrement des données sensibles</li>
                  <li>La mise en place de pare-feu et systèmes de sécurité</li>
                  <li>La formation de notre personnel aux bonnes pratiques de sécurité</li>
                  <li>La limitation de l'accès aux données aux seules personnes autorisées</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div className="bg-[#173344]/30 border border-[#d6a527]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#d6a527]/10 rounded-lg flex items-center justify-center border border-[#d6a527]/30">
                  <Server className="w-5 h-5 text-[#d6a527]" />
                </div>
                <h2 className="text-2xl font-bold font-['Chakra_Petch']">Cookies</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte stockés sur votre appareil.
                </p>
                <p>
                  <strong className="text-white">Types de cookies utilisés :</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                  <li><strong className="text-white">Cookies de performance :</strong> pour analyser l'utilisation du site et l'améliorer</li>
                </ul>
                <p>
                  Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur. Cependant, cela pourrait affecter le fonctionnement de certaines fonctionnalités du site.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-[#173344]/30 border border-[#d6a527]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#d6a527]/10 rounded-lg flex items-center justify-center border border-[#d6a527]/30">
                  <Mail className="w-5 h-5 text-[#d6a527]" />
                </div>
                <h2 className="text-2xl font-bold font-['Chakra_Petch']">Contact</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Pour toute question relative à notre politique de confidentialité ou pour exercer vos droits, vous pouvez nous contacter :
                </p>
                <div className="bg-[#0a0f14]/60 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail size={16} className="text-[#d6a527]" />
                    <span><strong className="text-white">Par email :</strong> contact@dicko-cvc.fr</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Phone size={16} className="text-[#d6a527]" />
                    <span><strong className="text-white">Par téléphone :</strong> 06 15 03 53 00</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="text-[#d6a527] mt-0.5" />
                    <div>
                      <strong className="text-white">Par courrier :</strong><br />
                      DICKO<br />
                      25 RUE ARCHEREAU<br />
                      75019 PARIS
                    </div>
                  </div>
                </div>
                <p>
                  Si vous estimez que le traitement de vos données personnelles ne respecte pas la réglementation, vous avez le droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL).
                </p>
              </div>
            </div>

            {/* Date de mise à jour */}
            <div className="text-center text-gray-500 text-sm">
              <p>La présente politique de confidentialité a été mise à jour le 19 février 2024.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
