import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const whatsappLink = `https://wa.me/33615035300?text=Bonjour,%20je%20souhaite%20obtenir%20un%20devis%20pour%20mes%20travaux%20CVC.%20Pouvez-vous%20me%20recontacter%20?`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone / WhatsApp',
      content: '06 15 03 53 00',
      details: 'Du lundi au vendredi, 8h-18h',
      isWhatsApp: true
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@dicko-pvc.fr',
      details: 'Réponse sous 24h ouvrées',
      isEmail: true
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun - Ven : 8h - 18h',
      details: 'Intervention sur chantier selon planning'
    }
  ];

  const faqs = [
    {
      question: 'Intervenez-vous sur des marchés publics en Île-de-France ?',
      answer: 'Oui, DICKO intervient régulièrement sur des marchés publics en tant qu\'entreprise plomberie CVC. Nous sommes habilités à travailler avec les collectivités territoriales et les organismes publics sur l\'ensemble de l\'Île-de-France.'
    },
    {
      question: 'Réalisez-vous des installations CVC complètes ?',
      answer: 'Absolument. Nous réalisons des installations CVC complètes incluant plomberie, chauffage et VMC. Notre expertise couvre l\'ensemble des lots techniques pour vos projets de bâtiment tertiaire ou logement collectif.'
    },
    {
      question: 'Travaillez-vous en sous-traitance ?',
      answer: 'Oui, nous travaillons en sous-traitance pour des entreprises générales et des promoteurs immobiliers en Île-de-France. Notre PME flexible et réactive s\'intègre parfaitement à vos équipes de chantier.'
    },
    {
      question: 'Quels types de bâtiments prenez-vous en charge ?',
      answer: 'Nous intervenons sur les bâtiments tertiaires (bureaux, commerces), les logements collectifs (résidences, immeubles) et les infrastructures publiques. Notre cible est 100% B2B, nous ne travaillons pas avec les particuliers.'
    },
    {
      question: 'Intervenez-vous sur les logements collectifs ?',
      answer: 'Oui, l\'installation chauffage collectif et la plomberie en logements collectifs font partie de notre cœur de métier. Nous maîtrisons les spécificités des immeubles d\'habitation et des copropriétés.'
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - DARK with new visual */}
      <section className="relative py-24 bg-[#0d1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-[#d6a527]/10 border border-[#d6a527]/40 rounded-full px-4 py-2">
                <span className="text-[#d6a527] text-sm font-medium">Contact</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold font-['Chakra_Petch'] text-white">
                Contactez votre <span className="text-[#d6a527]">entreprise CVC</span> en Île-de-France
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                Pour vos projets de plomberie, chauffage et VMC en Île-de-France, DICKO vous accompagne de l'étude à la réalisation.
              </p>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#d6a527]/20">
                <img 
                  src="/contact-generic.jpg" 
                  alt="Installation technique CVC"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section - LIGHT */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-['Chakra_Petch'] mb-4 text-[#0a0f14]">
                  Nos <span className="text-[#d6a527]">coordonnées</span>
                </h2>
                <p className="text-gray-600">
                  N'hésitez pas à nous contacter pour discuter de votre projet. Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <div className="w-12 h-12 bg-[#d6a527]/10 rounded-lg flex items-center justify-center border border-[#d6a527]/30 flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#d6a527]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0a0f14] mb-1">{item.title}</h4>
                      {item.isWhatsApp ? (
                        <a 
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#3db75d] font-medium hover:underline"
                        >
                          {item.content}
                        </a>
                      ) : item.isEmail ? (
                        <a 
                          href={`mailto:${item.content}`}
                          className="text-[#d6a527] font-medium hover:underline"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-[#d6a527] font-medium">{item.content}</p>
                      )}
                      <p className="text-sm text-gray-500 mt-1">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>


            </div>

            {/* Right - Form */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-[#3db75d]/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#3db75d]/40">
                    <CheckCircle2 className="w-10 h-10 text-[#3db75d]" />
                  </div>
                  <h3 className="text-2xl font-bold font-['Chakra_Petch'] mb-4 text-[#0a0f14]">Message envoyé !</h3>
                  <p className="text-gray-600">
                    Nous avons bien reçu votre demande. Notre équipe vous contactera sous 24h ouvrées.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold font-['Chakra_Petch'] mb-6 text-[#0a0f14]">Demander un devis</h3>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-gray-700">Nom de l'entreprise *</Label>
                        <Input 
                          id="company" 
                          placeholder="Votre entreprise"
                          required
                          className="bg-gray-50 border-gray-300 focus:border-[#d6a527] focus:ring-[#d6a527]/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700">Nom du contact *</Label>
                        <Input 
                          id="name" 
                          placeholder="Votre nom"
                          required
                          className="bg-gray-50 border-gray-300 focus:border-[#d6a527] focus:ring-[#d6a527]/20"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700">Email *</Label>
                        <Input 
                          id="email" 
                          type="email"
                          placeholder="contact@dicko-pvc.fr"
                          required
                          className="bg-gray-50 border-gray-300 focus:border-[#d6a527] focus:ring-[#d6a527]/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700">Téléphone</Label>
                        <Input 
                          id="phone" 
                          type="tel"
                          placeholder="01 23 45 67 89"
                          className="bg-gray-50 border-gray-300 focus:border-[#d6a527] focus:ring-[#d6a527]/20"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="project" className="text-gray-700">Type de projet *</Label>
                        <Select required>
                          <SelectTrigger className="bg-gray-50 border-gray-300 focus:border-[#d6a527] focus:ring-[#d6a527]/20">
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="plomberie">Plomberie</SelectItem>
                            <SelectItem value="chauffage">Chauffage</SelectItem>
                            <SelectItem value="vmc">VMC</SelectItem>
                            <SelectItem value="gaz">Gaz</SelectItem>
                            <SelectItem value="cvc">CVC complet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-gray-700">Localisation du chantier *</Label>
                        <Input 
                          id="location" 
                          placeholder="Ville, Département"
                          required
                          className="bg-gray-50 border-gray-300 focus:border-[#d6a527] focus:ring-[#d6a527]/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700">Description du projet</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Décrivez votre projet (surface, délais, contraintes spécifiques...)"
                        rows={4}
                        className="bg-gray-50 border-gray-300 focus:border-[#d6a527] focus:ring-[#d6a527]/20 resize-none"
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-[#d6a527] hover:bg-[#b88a1f] text-[#0a0f14] py-6 text-lg font-semibold transition-all hover:shadow-lg hover:shadow-[#d6a527]/30"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer ma demande
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      * Champs obligatoires. En soumettant ce formulaire, vous acceptez notre <a href="/politique-confidentialite" className="text-[#d6a527] hover:underline">politique de confidentialité</a>.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - DARK */}
      <section className="py-24 bg-[#0a0f14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#d6a527]/10 border border-[#d6a527]/40 rounded-full px-4 py-2 mb-6">
              <span className="text-[#d6a527] text-sm font-medium">FAQ</span>
            </div>
            <h2 className="text-3xl font-bold font-['Chakra_Petch'] mb-4 text-white">
              Questions <span className="text-[#d6a527]">fréquentes</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-[#173344]/30 border border-[#d6a527]/20 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:text-[#d6a527] py-4 text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
