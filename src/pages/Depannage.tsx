import { Phone, Clock, MapPin, AlertTriangle, Droplets, Flame, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Depannage() {

  const urgences = [
    {
      icon: Droplets,
      title: 'Fuite d\'eau',
      desc: 'Intervention sous 1h à Paris',
      color: 'bg-blue-500/20 text-blue-500'
    },
    {
      icon: Flame,
      title: 'Panne chaudière',
      desc: 'Dépannage 7j/7',
      color: 'bg-orange-500/20 text-orange-500'
    },
    {
      icon: Wind,
      title: 'Canalisation bouchée',
      desc: 'Débouchage rapide',
      color: 'bg-cyan-500/20 text-cyan-500'
    }
  ];

  const zones = [
    'Paris 75', 'Hauts-de-Seine 92', 'Seine-Saint-Denis 93', 'Val-de-Marne 94',
    'Paris 19', 'Paris 18', 'Paris 20', 'Paris 11', 'Paris 10', 'Pantin', 'Bagnolet'
  ];

  const faqs = [
    {
      question: 'Quel délai pour une intervention d\'urgence à Paris ?',
      answer: 'Pour les fuites d\'eau et urgences majeures à Paris intra-muros, nous intervenons en moyenne sous 1 heure. Pour les pannes de chauffage en hiver, notre temps d\'intervention est de 1 à 2 heures. Pour la petite couronne (92, 93, 94), comptez 1 à 3 heures selon le trafic et la localisation exacte.'
    },
    {
      question: 'Quels sont vos horaires de dépannage ?',
      answer: 'Notre service de dépannage est disponible 7j/7, de 7h à 22h pour les interventions standard. Pour les urgences majeures (fuites importantes, risques gaz), nous avons un service d\'astreinte 24h/24. N\'hésitez pas à nous contacter par WhatsApp au 06 15 03 53 00 pour une évaluation rapide de votre situation.'
    },
    {
      question: 'Comment sont facturés les dépannages d\'urgence ?',
      answer: 'Nos tarifs de dépannage sont transparents : déplacement à partir de 80€ TTC sur Paris, main d\'œuvre horaire à 85€ TTC. Les pièces éventuelles sont facturées au prix coûtant. Avant toute intervention, nous vous établissons un devis détaillé que vous devez valider. Pas de surprise sur la facture finale.'
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#0a0f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/40 rounded-full px-4 py-2 mb-6">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span className="text-sm text-red-400 font-medium">Service Urgence 7j/7</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-['Chakra_Petch'] mb-6">
              Dépannage Plomberie Chauffage Paris | <span className="text-[#d6a527]">Intervention Urgence</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Dicko BTP, votre service de dépannage d\'urgence à Paris et en Île-de-France. 
              Fuite d\'eau, panne de chauffage, canalisation bouchée. Intervention rapide 7j/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0615035300">
                <Button 
                  size="lg"
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg font-semibold"
                >
                  <Phone className="mr-2" />
                  Appeler en urgence
                </Button>
              </a>
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
        </div>
      </section>

      {/* Urgences Cards */}
      <section className="py-16 bg-[#173344]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {urgences.map((urgence, index) => (
              <div key={index} className="bg-[#0a0f14] rounded-2xl p-6 text-center">
                <div className={`w-16 h-16 ${urgence.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <urgence.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{urgence.title}</h3>
                <p className="text-gray-400">{urgence.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-['Chakra_Petch'] text-[#0a0f14] mb-6">
                Délai d\'intervention <span className="text-[#d6a527]">garanti</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nous savons qu\'une fuite d\'eau ou une panne de chauffage ne peuvent pas attendre. 
                C\'est pourquoi nous nous engageons sur des délais d\'intervention rapides pour tous 
                vos dépannages d\'urgence à Paris et en petite couronne.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0a0f14] mb-1">Paris intra-muros</h3>
                    <p className="text-gray-600">Intervention sous 1 à 2 heures pour les urgences</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#d6a527]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-[#d6a527]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0a0f14] mb-1">Petite couronne (92, 93, 94)</h3>
                    <p className="text-gray-600">Intervention sous 1 à 3 heures</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#3db75d]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-[#3db75d]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0a0f14] mb-1">Disponible 7j/7</h3>
                    <p className="text-gray-600">Service d\'astreinte pour les urgences majeures</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#173344] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-[#d6a527]" />
                <h3 className="text-xl font-bold text-white">Zones d\'intervention</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {zones.map((zone, index) => (
                  <span key={index} className="bg-[#d6a527]/20 text-[#d6a527] px-3 py-1 rounded-full text-sm">
                    {zone}
                  </span>
                ))}
              </div>
              <div className="border-t border-gray-700 pt-6">
                <p className="text-gray-400 text-sm mb-4">
                  Pour les zones non listées, contactez-nous pour vérifier notre disponibilité.
                </p>
                <a href="tel:0615035300" className="inline-flex items-center gap-2 text-[#d6a527] font-semibold hover:underline">
                  <Phone className="w-5 h-5" />
                  06 15 03 53 00
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#173344]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-['Chakra_Petch'] text-white text-center mb-12">
            Comment ça <span className="text-[#d6a527]">marche</span> ?
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d6a527] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#0a0f14] font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Contactez-nous</h3>
              <p className="text-gray-400 text-sm">Par téléphone ou WhatsApp au 06 15 03 53 00</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d6a527] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#0a0f14] font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Diagnostic</h3>
              <p className="text-gray-400 text-sm">Nous évaluons votre situation et vous donnons un délai</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d6a527] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#0a0f14] font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Intervention</h3>
              <p className="text-gray-400 text-sm">Notre technicien arrive et réalise le dépannage</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d6a527] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#0a0f14] font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Facturation</h3>
              <p className="text-gray-400 text-sm">Devis validé avant intervention, pas de surprise</p>
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
            <Link to="/gaz" className="text-[#d6a527] hover:underline font-medium">Gaz</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0f14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-['Chakra_Petch'] text-white mb-6">
            Urgence <span className="text-red-500">plomberie ou chauffage</span> ?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Nous intervenons rapidement à Paris et en Île-de-France. Appelez-nous maintenant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0615035300">
              <Button 
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg font-semibold"
              >
                <Phone className="mr-2" />
                Appeler maintenant
              </Button>
            </a>
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
