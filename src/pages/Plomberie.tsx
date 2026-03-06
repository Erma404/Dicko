import { useDevis } from '@/contexts/DevisContext';
import { Droplets, CheckCircle2, ArrowRight, Phone, MapPin, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Plomberie() {
  const { openDevis } = useDevis();

  const services = [
    'Installation sanitaire complète',
    'Réparation de fuites d\'eau',
    'Débouchage de canalisations',
    'Rénovation de salle de bain',
    'Mise en conformité NF DTU',
    'Remplacement de colonnes montantes',
    'Installation de robinetterie',
    'Dépannage urgent 7j/7'
  ];

  const zones = ['Paris 19', 'Paris 18', 'Paris 20', 'Paris 10', 'Paris 11', 'Pantin', 'Bagnolet', 'Montreuil'];

  const faqs = [
    {
      question: 'Quel délai pour une intervention en urgence à Paris ?',
      answer: 'Pour les fuites d\'eau et urgences plomberie à Paris et proche banlieue, nous intervenons sous 1 à 2 heures. Notre équipe est disponible 7j/7 pour les dépannages urgents dans les arrondissements 18, 19, 20 et communes limitrophes.'
    },
    {
      question: 'Quels types de travaux de plomberie réalisez-vous ?',
      answer: 'Nous réalisons tous types de travaux de plomberie : installation sanitaire neuve et rénovation, réparation de fuites, débouchage de canalisations, remplacement de colonnes montantes, installation de robinetterie, mise aux normes NF DTU 60.11 et 60.12 pour les réseaux eau froide et eau chaude.'
    },
    {
      question: 'Intervenez-vous dans les immeubles collectifs ?',
      answer: 'Oui, nous sommes spécialisés dans les interventions en immeubles collectifs à Paris. Nous gérons les travaux en copropriété avec respect des règles de sécurité, coordination avec les syndics et respect des horaires pour minimiser les désagréments aux résidents.'
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#0a0f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#d6a527]/10 border border-[#d6a527]/30 rounded-full px-4 py-2 mb-6">
              <Droplets className="w-4 h-4 text-[#d6a527]" />
              <span className="text-sm text-[#d6a527] font-medium">Service Plomberie</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-['Chakra_Petch'] mb-6">
              Plomberie Paris & Île-de-France | <span className="text-[#d6a527]">Installation et Dépannage</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Dicko BTP, votre plombier professionnel à Paris et en Île-de-France. Installation sanitaire, 
              réparation de fuites, débouchage et rénovation de salle de bain. Intervention rapide et devis gratuit.
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
                Nos prestations <span className="text-[#d6a527]">plomberie</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Depuis plus de 15 ans, Dicko BTP accompagne les particuliers et professionnels de Paris et 
                l\'Île-de-France pour tous leurs travaux de plomberie. De l\'installation neuve à la rénovation, 
                nous garantissons un travail soigné conforme aux normes NF DTU.
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
            
            <div className="bg-[#173344] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#d6a527]" />
                Zones d\'intervention
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {zones.map((zone, index) => (
                  <span key={index} className="bg-[#d6a527]/20 text-[#d6a527] px-3 py-1 rounded-full text-sm">
                    {zone}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                Nous intervenons sur l\'ensemble de Paris et la petite couronne. 
                Contactez-nous pour vérifier votre zone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#173344]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d6a527]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#d6a527]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Intervention rapide</h3>
              <p className="text-gray-400">Dépannage sous 1-2h à Paris et proche banlieue pour les urgences.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d6a527]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#d6a527]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Conformité NF DTU</h3>
              <p className="text-gray-400">Tous nos travaux respectent les normes en vigueur pour votre sécurité.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d6a527]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-[#d6a527]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Devis gratuit</h3>
              <p className="text-gray-400">Étude et devis sans engagement sous 24h ouvrées.</p>
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
            <Link to="/chauffage" className="text-[#d6a527] hover:underline font-medium">Chauffage</Link>
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
            Besoin d\'un <span className="text-[#d6a527]">plombier à Paris</span> ?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Contactez Dicko BTP pour un devis gratuit sous 24h. Intervention rapide garantie.
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
