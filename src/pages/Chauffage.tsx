import { useDevis } from '@/contexts/DevisContext';
import { Flame, CheckCircle2, ArrowRight, Phone, Thermometer, Home, Euro, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Chauffage() {
  const { openDevis } = useDevis();

  const services = [
    'Installation chaudière gaz à condensation',
    'Pompe à chaleur air/eau et air/air',
    'Plancher chauffant et chauffage au sol',
    'Entretien annuel obligatoire',
    'Contrat de maintenance',
    'Aides MaPrimeRénov\' et CEE',
    'Certification RGE Qualibat',
    'Dépannage chaudière 7j/7'
  ];

  const faqs = [
    {
      question: 'Quelle chaudière choisir pour ma maison à Paris ?',
      answer: 'Le choix dépend de plusieurs facteurs : surface à chauffer, isolation, nombre de pièces et budget. La chaudière à condensation gaz est idéale pour les logements parisiens connectés au réseau gaz. Pour les maisons ou les projets sans gaz, la pompe à chaleur air/eau est une excellente alternative écologique. Nous réalisons une étude thermique gratuite pour vous conseiller la meilleure solution.'
    },
    {
      question: 'Quelles aides financières sont disponibles en 2025 ?',
      answer: 'Plusieurs aides existent : MaPrimeRénov\' (jusqu\'à 4 000€ pour une chaudière à condensation), le CEE (Certificat d\'Économie d\'Énergie), l\'éco-PTZ à taux zéro, et les aides locales de la Ville de Paris. En tant qu\'entreprise certifiée RGE, nous vous accompagnons dans l\'ensemble des démarches administratives pour maximiser vos aides.'
    },
    {
      question: 'L\'entretien annuel de chaudière est-il obligatoire ?',
      answer: 'Oui, l\'entretien annuel est obligatoire par la loi pour tous les appareils de chauffage de plus de 15 kW. Cette obligation concerne les chaudières individuelles et collectives. L\'entretien doit être réalisé par un professionnel qualifié et donne lieu à la délivrance d\'un certificat de contrôle. En cas de non-respect, vous exposez à une amende et votre assurance peut refuser de couvrir un sinistre.'
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#0a0f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#d6a527]/10 border border-[#d6a527]/30 rounded-full px-4 py-2 mb-6">
              <Flame className="w-4 h-4 text-[#d6a527]" />
              <span className="text-sm text-[#d6a527] font-medium">Service Chauffage</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-['Chakra_Petch'] mb-6">
              Installation Chauffage Paris | <span className="text-[#d6a527]">Chaudière, PAC, Plancher Chauffant</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Dicko BTP, expert en installation de chauffage à Paris et Île-de-France. Chaudières à condensation, 
              pompes à chaleur, plancher chauffant. Aides MaPrimeRénov\' et certification RGE.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={openDevis}
                className="bg-[#d6a527] hover:bg-[#b88a1f] text-[#0a0f14] px-8 py-6 text-lg font-semibold"
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2" />
              </Button>
              <a href="tel:0615035300">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-[#d6a527] text-[#d6a527] hover:bg-[#d6a527]/10 px-8 py-6 text-lg"
                >
                  <Phone className="mr-2" />
                  06 15 03 53 00
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-['Chakra_Petch'] text-[#0a0f14] mb-6">
                Nos solutions de <span className="text-[#d6a527]">chauffage</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nous installons et entretenons tous types de systèmes de chauffage à Paris et en Île-de-France. 
                De la chaudière gaz traditionnelle à la pompe à chaleur dernière génération, nous vous conseillons 
                la solution la plus adaptée à votre logement et votre budget.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#d6a527] flex-shrink-0" />
                    <span className="text-[#0a0f14]">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#173344] rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d6a527]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Thermometer className="w-6 h-6 text-[#d6a527]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Chaudière à condensation</h3>
                  <p className="text-gray-400 text-sm">Jusqu\'à 30% d\'économie d\'énergie. Installation rapide et aides disponibles.</p>
                </div>
              </div>
              
              <div className="bg-[#173344] rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d6a527]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Home className="w-6 h-6 text-[#d6a527]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Pompe à chaleur</h3>
                  <p className="text-gray-400 text-sm">Solution écologique et économique. Air/eau ou air/air selon vos besoins.</p>
                </div>
              </div>
              
              <div className="bg-[#173344] rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d6a527]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Euro className="w-6 h-6 text-[#d6a527]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Aides MaPrimeRénov\'</h3>
                  <p className="text-gray-400 text-sm">Accompagnement complet pour obtenir vos aides. Jusqu\'à 4 000€ de prime.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-24 bg-[#173344]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#d6a527]/20 rounded-full px-4 py-2 mb-4">
                <Award className="w-4 h-4 text-[#d6a527]" />
                <span className="text-sm text-[#d6a527] font-medium">Certification RGE Qualibat</span>
              </div>
              <h2 className="text-3xl font-bold font-['Chakra_Petch'] text-white mb-4">
                Entreprise certifiée RGE
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Dicko BTP est certifiée RGE Qualibat, ce qui vous permet de bénéficier de toutes les aides 
                de l\'État pour vos travaux de rénovation énergétique. Notre certification est votre garantie 
                d\'un travail professionnel conforme aux normes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#d6a527]" />
                  MaPrimeRénov\' éligible
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#d6a527]" />
                  CEE (Certificats d\'Économie d\'Énergie)
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#d6a527]" />
                  Éco-PTZ à taux zéro
                </li>
              </ul>
            </div>
            <div className="bg-[#0a0f14] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Nos engagements</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#d6a527]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#d6a527] font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Étude thermique gratuite</h4>
                    <p className="text-gray-400 text-sm">Dimensionnement précis de votre installation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#d6a527]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#d6a527] font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Devis détaillé sous 24h</h4>
                    <p className="text-gray-400 text-sm">Prix transparents sans surprise</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#d6a527]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#d6a527] font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Accompagnement aides</h4>
                    <p className="text-gray-400 text-sm">Nous gérons vos dossiers de A à Z</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-['Chakra_Petch'] text-[#0a0f14] text-center mb-12">
            Questions <span className="text-[#d6a527]">fréquentes</span>
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-[#0a0f14] font-semibold py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Cross Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-4">Voir aussi :</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/plomberie" className="text-[#d6a527] hover:underline font-medium">Plomberie</Link>
            <span className="text-gray-400">|</span>
            <Link to="/vmc" className="text-[#d6a527] hover:underline font-medium">VMC</Link>
            <span className="text-gray-400">|</span>
            <Link to="/gaz" className="text-[#d6a527] hover:underline font-medium">Gaz</Link>
            <span className="text-gray-400">|</span>
            <Link to="/depannage" className="text-[#d6a527] hover:underline font-medium">Dépannage</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0f14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-['Chakra_Petch'] text-white mb-6">
            Besoin d\'un <span className="text-[#d6a527]">chauffagiste à Paris</span> ?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Demandez votre devis gratuit et bénéficiez de nos aides MaPrimeRénov\'. Certification RGE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={openDevis}
              className="bg-[#d6a527] hover:bg-[#b88a1f] text-[#0a0f14] px-8 py-6 text-lg font-semibold"
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2" />
            </Button>
            <a href="https://wa.me/33615035300" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                variant="outline"
                className="border-[#3db75d] text-[#3db75d] hover:bg-[#3db75d]/10 px-8 py-6 text-lg"
              >
                <Phone className="mr-2" />
                WhatsApp 06 15 03 53 00
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
