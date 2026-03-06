import { useDevis } from '@/contexts/DevisContext';
import { Fuel, CheckCircle2, ArrowRight, Phone, Shield, AlertTriangle, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Gaz() {
  const { openDevis } = useDevis();

  const services = [
    'Installation chaudière gaz neuve',
    'Remplacement chaudière gaz existante',
    'Mise aux normes NF DTU 61.1',
    'Diagnostic gaz et sécurité',
    'Contrôle d\'étanchéité',
    'Certification Qualigaz',
    'Remplacement détecteur CO',
    'Conduits et évacuation gaz'
  ];

  const faqs = [
    {
      question: 'Quand faut-il remplacer sa chaudière gaz ?',
      answer: 'Une chaudière gaz a une durée de vie moyenne de 15 à 20 ans. Il est conseillé de la remplacer lorsqu\'elle présente des signes de vieillissement : consommation excessive, pannes fréquentes, bruits anormaux, ou simplement lorsqu\'elle n\'est plus conforme aux normes actuelles. Le remplacement par une chaudière à condensation peut réduire votre facture de chauffage de 20 à 30%.'
    },
    {
      question: 'Qu\'est-ce que la certification Qualigaz ?',
      answer: 'La certification Qualigaz est un label de qualité délivré aux professionnels du gaz qui justifient de compétences techniques et d\'une formation spécifique. Un installateur Qualigaz est habilité à réaliser tous les travaux sur les installations gaz en toute sécurité. Cette certification est obligatoire pour les professionnels et garantit la conformité de l\'installation.'
    },
    {
      question: 'Quel est le prix d\'une installation gaz à Paris ?',
      answer: 'Le coût varie selon le type d\'installation. Comptez environ 2 500€ à 5 000€ pour le remplacement d\'une chaudière gaz à condensation, installation comprise. Pour une installation complète avec réseau de distribution, le budget peut atteindre 8 000€ à 15 000€ selon la surface et la complexité. Nous établissons un devis détaillé gratuitement après visite technique.'
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#0a0f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#d6a527]/10 border border-[#d6a527]/30 rounded-full px-4 py-2 mb-6">
              <Fuel className="w-4 h-4 text-[#d6a527]" />
              <span className="text-sm text-[#d6a527] font-medium">Service Gaz</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-['Chakra_Petch'] mb-6">
              Installation Gaz Paris | <span className="text-[#d6a527]">Mise aux Normes et Sécurité</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Dicko BTP, expert en installation gaz à Paris et Île-de-France. Installation de chaudières, 
              mise aux normes NF DTU 61.1, diagnostic sécurité. Certification Qualigaz.
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

      {/* Safety Alert */}
      <section className="py-8 bg-red-900/20 border-y border-red-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <AlertTriangle className="w-10 h-10 text-red-500" />
            <div>
              <h2 className="text-lg font-bold text-red-400 mb-1">Sécurité gaz avant tout</h2>
              <p className="text-gray-300 text-sm">Tous nos installateurs sont certifiés Qualigaz. Installation conforme aux normes NF DTU 61.1 pour votre sécurité.</p>
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
                Nos prestations <span className="text-[#d6a527]">gaz</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                L\'installation gaz est une opération délicate qui nécessite l\'intervention d\'un professionnel certifié. 
                Chez Dicko BTP, tous nos techniciens sont certifiés Qualigaz et respectent scrupuleusement les normes 
                de sécurité en vigueur pour garantir votre protection.
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
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-[#d6a527]" />
                <h3 className="text-xl font-bold text-white">Certification Qualigaz</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Notre certification Qualigaz est votre garantie de sécurité. Elle atteste de nos compétences 
                techniques et de notre formation aux dernières normes de sécurité gaz.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Shield className="w-5 h-5 text-[#d6a527]" />
                  <span>Installation conforme aux normes</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#d6a527]" />
                  <span>Certificat de conformité délivré</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#d6a527]" />
                  <span>Assurance responsabilité civile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Normes Section */}
      <section className="py-24 bg-[#173344]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-['Chakra_Petch'] text-white text-center mb-12">
            Normes et <span className="text-[#d6a527]">sécurité</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0a0f14] rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#d6a527]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#d6a527] font-bold">NF</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">NF DTU 61.1</h3>
              <p className="text-gray-400 text-sm">
                Norme française définissant les règles de conception, de calcul et d\'exécution des 
                installations gaz dans les bâtiments. Obligatoire pour toute installation neuve ou rénovation.
              </p>
            </div>
            
            <div className="bg-[#0a0f14] rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#d6a527]/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#d6a527]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Contrôle d\'étanchéité</h3>
              <p className="text-gray-400 text-sm">
                Vérification obligatoire de l\'étanchéité de l\'installation gaz lors de la mise en service 
                et lors du remplacement d\'un appareil. Garantit l\'absence de fuite.
              </p>
            </div>
            
            <div className="bg-[#0a0f14] rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#d6a527]/20 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-[#d6a527]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Détecteur de CO</h3>
              <p className="text-gray-400 text-sm">
                Le monoxyde de carbone est un gaz inodore et mortel. Un détecteur de CO est obligatoire 
                dans les logements équipés d\'appareils gaz. Nous installons des détecteurs certifiés.
              </p>
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
            <Link to="/chauffage" className="text-[#d6a527] hover:underline font-medium">Chauffage</Link>
            <span className="text-gray-400">|</span>
            <Link to="/vmc" className="text-[#d6a527] hover:underline font-medium">VMC</Link>
            <span className="text-gray-400">|</span>
            <Link to="/depannage" className="text-[#d6a527] hover:underline font-medium">Dépannage</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0f14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-['Chakra_Petch'] text-white mb-6">
            Besoin d\'un <span className="text-[#d6a527]">installateur gaz à Paris</span> ?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Contactez Dicko BTP pour une installation gaz sécurisée et conforme. Certification Qualigaz.
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
