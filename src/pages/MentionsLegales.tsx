import { Scale, FileText, Shield, Mail, MapPin, Phone } from 'lucide-react';

export default function MentionsLegales() {
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
              <span className="text-[#d6a527] text-sm font-medium">Informations légales</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-['Chakra_Petch'] mb-6">
              Mentions <span className="text-[#d6a527]">légales</span>
            </h1>
            <p className="text-gray-400">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-[#0d1419]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Éditeur du site */}
            <div className="bg-[#173344]/30 border border-[#d6a527]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#d6a527]/10 rounded-lg flex items-center justify-center border border-[#d6a527]/30">
                  <FileText className="w-5 h-5 text-[#d6a527]" />
                </div>
                <h2 className="text-2xl font-bold font-['Chakra_Petch']">Éditeur du site</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-white">DICKO</strong> – PLOMBERIE • CHAUFFAGE • VMC
                </p>
                <p>
                  <strong className="text-white">Forme juridique :</strong> Entreprise individuelle (EI)
                </p>
                <p>
                  <strong className="text-white">SIRET :</strong> 918 120 783 00017
                </p>
                <p>
                  <strong className="text-white">SIREN :</strong> 918 120 783
                </p>
                <p>
                  <strong className="text-white">Code NAF/APE :</strong> 4322A – Travaux d'installation d'eau et de gaz en tous locaux
                </p>
                <div className="flex items-start gap-2 mt-4">
                  <MapPin size={18} className="text-[#d6a527] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Siège social :</strong><br />
                    25 RUE ARCHEREAU<br />
                    75019 PARIS
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-[#d6a527] flex-shrink-0" />
                  <span><strong className="text-white">Téléphone :</strong> 06 15 03 53 00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-[#d6a527] flex-shrink-0" />
                  <span><strong className="text-white">Email :</strong> contact@dicko-cvc.fr</span>
                </div>
              </div>
            </div>

            {/* Hébergement */}
            <div className="bg-[#173344]/30 border border-[#d6a527]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#d6a527]/10 rounded-lg flex items-center justify-center border border-[#d6a527]/30">
                  <Shield className="w-5 h-5 text-[#d6a527]" />
                </div>
                <h2 className="text-2xl font-bold font-['Chakra_Petch']">Hébergement</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Le site <strong className="text-white">dicko-cvc.fr</strong> est hébergé par :
                </p>
                <p>
                  <strong className="text-white">Kimi/Cloudflare</strong><br />
                  Hébergement cloud distribué
                </p>
              </div>
            </div>

            {/* Activité */}
            <div className="bg-[#173344]/30 border border-[#d6a527]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#d6a527]/10 rounded-lg flex items-center justify-center border border-[#d6a527]/30">
                  <Scale className="w-5 h-5 text-[#d6a527]" />
                </div>
                <h2 className="text-2xl font-bold font-['Chakra_Petch']">Activité et classification</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  DICKO est une entreprise spécialisée dans les travaux d'installation de plomberie, chauffage, ventilation mécanique contrôlée (VMC) et réseaux gaz pour bâtiments professionnels en Île-de-France.
                </p>
                <p>
                  <strong className="text-white">Zone d'intervention :</strong> Île-de-France (Paris 75, Hauts-de-Seine 92, Seine-Saint-Denis 93, Val-de-Marne 94, Yvelines 78, Essonne 91, Val-d'Oise 95, Seine-et-Marne 77)
                </p>
                <p>
                  <strong className="text-white">Clientèle :</strong> Entreprises générales, promoteurs immobiliers, collectivités territoriales, marchés publics. Cible 100% B2B – nous ne travaillons pas avec les particuliers.
                </p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="bg-[#173344]/30 border border-[#d6a527]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#d6a527]/10 rounded-lg flex items-center justify-center border border-[#d6a527]/30">
                  <FileText className="w-5 h-5 text-[#d6a527]" />
                </div>
                <h2 className="text-2xl font-bold font-['Chakra_Petch']">Propriété intellectuelle</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  L'ensemble du contenu du site <strong className="text-white">dicko-cvc.fr</strong> (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de DICKO ou de ses partenaires.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de DICKO.
                </p>
                <p>
                  Toute exploitation non autorisée du site ou de l'un des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                </p>
              </div>
            </div>

            {/* Limitation de responsabilité */}
            <div className="bg-[#173344]/30 border border-[#d6a527]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#d6a527]/10 rounded-lg flex items-center justify-center border border-[#d6a527]/30">
                  <Shield className="w-5 h-5 text-[#d6a527]" />
                </div>
                <h2 className="text-2xl font-bold font-['Chakra_Petch']">Limitation de responsabilité</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  DICKO s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur son site. Toutefois, DICKO ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur le site.
                </p>
                <p>
                  En conséquence, DICKO décline toute responsabilité :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site ;</li>
                  <li>pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition sur le site ;</li>
                  <li>et plus généralement, pour tous dommages, directs ou indirects, quelles qu'en soient les causes, origines, natures ou conséquences.</li>
                </ul>
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
                  Pour toute question relative aux mentions légales du site, vous pouvez nous contacter :
                </p>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-[#d6a527] flex-shrink-0" />
                  <span><strong className="text-white">Par email :</strong> contact@dicko-cvc.fr</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-[#d6a527] flex-shrink-0" />
                  <span><strong className="text-white">Par téléphone :</strong> 06 15 03 53 00</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={18} className="text-[#d6a527] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Par courrier :</strong><br />
                    DICKO<br />
                    25 RUE ARCHEREAU<br />
                    75019 PARIS
                  </div>
                </div>
              </div>
            </div>

            {/* Date de mise à jour */}
            <div className="text-center text-gray-500 text-sm">
              <p>Les présentes mentions légales ont été mises à jour le 19 février 2024.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
