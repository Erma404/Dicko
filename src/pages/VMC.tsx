import { useDevis } from '@/contexts/DevisContext';
import { Wind, CheckCircle2, ArrowRight, Phone, Building, Home, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function VMC() {
  const { openDevis } = useDevis();

  const services = [
    'VMC simple flux autoréglable',
    'VMC simple flux hygroréglable',
    'VMC double flux haut rendement',
    'Installation réseau ventilation',
    'Entretien et nettoyage des bouches',
    'Mise aux normes RE2020',
    'Remplacement de VMC existante',
    'Diagnostic qualité d\'air'
  ];

  const faqs = [
    {
      question: 'La VMC est-elle obligatoire dans mon logement ?',
      answer: 'Oui, depuis 1982, la VMC est obligatoire dans tous les logements neufs et les logements existants lors de travaux importants (rénovation de cuisine ou salle de bain). La RE2020 a renforcé ces obligations avec des exigences de performance énergétique plus strictes. Pour les immeubles collectifs, le syndic de copropriété est responsable de la mise en conformité des parties communes.'
    },
    {
      question: 'Quelle différence entre VMC simple et double flux ?',
      answer: 'La VMC simple flux extrait l\'air vicié et fait entrer l\'air neuf par des entrées d\'air. Elle est économique et adaptée aux petits logements. La VMC double flux récupère la chaleur de l\'air extrait pour chauffer l\'air neuf entrant, ce qui réduit les pertes de chaleur et améliore le confort. Elle est plus performante mais aussi plus coûteuse à l\'installation.'
    },
    {
      question: 'Quel budget pour installer une VMC à Paris ?',
      answer: 'Le coût dépend du type de VMC et de la configuration de votre logement. Comptez environ 800€ à 1 500€ pour une VMC simple flux hygroréglable, et 4 000€ à 8 000€ pour une VMC double flux avec réseau de distribution. Pour les immeubles collectifs, le coût est à étudier au cas par cas selon le nombre de logements et la complexité des réseaux. Nous établissons un devis personnalisé gratuitement.'
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#0a0f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#d6a527]/10 border border-[#d6a527]/30 rounded-full px-4 py-2 mb-6">
              <Wind className="w-4 h-4 text-[#d6a527]" />
              <span className="text-sm text-[#d6a527] font-medium">Service VMC</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-['Chakra_Petch'] mb-6">
              Installation VMC Paris | <span className="text-[#d6a527]">Ventilation Mécanique Contrôlée Immeuble</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Dicko BTP, expert en installation de VMC à Paris et Île-de-France. Simple flux, double flux, 
              conformité RE2020. Solutions pour logements collectifs et maisons individuelles.
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

      {/* RE2020 Alert Section */}
      <section className="py-12 bg-[#d6a527]/10 border-y border-[#d6a527]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <FileCheck className="w-10 h-10 text-[#d6a527]" />
            <div>
              <h2 className="text-xl font-bold text-[#0a0f14] mb-1">Conformité RE2020</h2>
              <p className="text-gray-600">Nous installons des VMC conformes à la Réglementation Environnementale 2020 pour tous vos projets neufs et rénovations.</p>
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
                Nos solutions de <span className="text-[#d6a527]">ventilation</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Une bonne ventilation est essentielle pour la qualité de l\'air intérieur et la santé des occupants. 
                Nous installons tous types de VMC adaptés à votre logement et vos besoins, du studio au grand immeuble collectif.
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
              <div className="bg-[#173344] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Home className="w-6 h-6 text-[#d6a527]" />
                  <h3 className="text-lg font-bold text-white">VMC Simple Flux</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Solution économique idéale pour les petits logements. Autoréglable ou hygroréglable selon vos besoins.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[#d6a527] font-semibold">À partir de 800€</span>
                  <span className="text-gray-500 text-sm">Installation comprise</span>
                </div>
              </div>
              
              <div className="bg-[#173344] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-6 h-6 text-[#d6a527]" />
                  <h3 className="text-lg font-bold text-white">VMC Double Flux</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Performance maximale avec récupération de chaleur. Confort optimal et économies d\'énergie.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[#d6a527] font-semibold">À partir de 4 000€</span>
                  <span className="text-gray-500 text-sm">Installation comprise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Info Section */}
      <section className="py-24 bg-[#173344]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-['Chakra_Petch'] text-white text-center mb-12">
            La réglementation <span className="text-[#d6a527]">VMC</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0a0f14] rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#d6a527]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#d6a527] font-bold text-xl">1982</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Obligation légale</h3>
              <p className="text-gray-400 text-sm">
                Depuis 1982, tous les logements neufs doivent être équipés d\'une VMC. 
                Cette obligation s\'étend aux logements existants lors de travaux de rénovation.
              </p>
            </div>
            
            <div className="bg-[#0a0f14] rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#d6a527]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#d6a527] font-bold text-xl">RE2020</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Réglementation Environnementale</h3>
              <p className="text-gray-400 text-sm">
                La RE2020 impose des exigences de performance énergétique strictes pour les bâtiments neufs, 
                notamment sur la ventilation et l\'étanchéité à l\'air.
              </p>
            </div>
            
            <div className="bg-[#0a0f14] rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#d6a527]/20 rounded-lg flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-[#d6a527]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Immeubles collectifs</h3>
              <p className="text-gray-400 text-sm">
                Dans les copropriétés, le syndic est responsable de la maintenance des VMC des parties communes. 
                Les propriétaires doivent entretenir les bouches de leur logement.
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
            Besoin d\'une <span className="text-[#d6a527]">VMC à Paris</span> ?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Contactez-nous pour un devis gratuit. Conformité RE2020 garantie.
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
