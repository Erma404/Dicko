import { Link } from 'react-router-dom';
import { useDevis } from '@/contexts/DevisContext';
import { 
  Droplets, 
  Flame, 
  Wind, 
  Fuel, 
  ChevronRight,
  CheckCircle2,
  Building2,
  HardHat,
  Clock,
  Award,
  ArrowRight,
  MapPin,
  Shield,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  const services = [
    {
      icon: Droplets,
      title: 'Installation Plomberie Bâtiment',
      description: 'Réseaux eau froide/chaude, colonnes montantes, réseaux sanitaires et mise en conformité.',
      items: ['Réseaux eau froide / eau chaude', 'Colonnes montantes', 'Réseaux sanitaires', 'Mise en conformité'],
      image: '/service-plomberie.jpg',
      link: '/services'
    },
    {
      icon: Flame,
      title: 'Installation Chauffage Collectif',
      description: 'Chaufferie, réseau thermique, distribution chauffage et installation chaudière collective.',
      items: ['Chaufferie', 'Réseau thermique', 'Distribution chauffage', 'Installation chaudière collective'],
      image: '/service-chauffage.jpg',
      link: '/services'
    },
    {
      icon: Wind,
      title: 'Installation VMC Bâtiment',
      description: 'Ventilation mécanique contrôlée, VMC simple/double flux, réseau ventilation tertiaire.',
      items: ['Ventilation mécanique contrôlée', 'VMC simple flux / double flux', 'Réseau ventilation tertiaire', 'Mise aux normes ventilation'],
      image: '/service-vmc.jpg',
      link: '/services'
    },
    {
      icon: Fuel,
      title: 'Réseaux Gaz et Mise en Conformité',
      description: 'Réseau gaz bâtiment, conformité réglementaire, installation gaz logements collectifs.',
      items: ['Réseau gaz bâtiment', 'Conformité réglementaire', 'Installation gaz logements collectifs', 'Normes gaz bâtiment'],
      image: '/service-gaz.jpg',
      link: '/services'
    }
  ];

  const stats = [
    { value: '15+', label: "Années d'expérience" },
    { value: '200+', label: 'Projets réalisés' },
    { value: '100%', label: 'Clients B2B' },
    { value: '8', label: 'Départements IDF' }
  ];

  const trustIndicators = [
    { icon: CheckCircle2, text: "15+ ans d'expérience" },
    { icon: CheckCircle2, text: '200+ projets réalisés' },
    { icon: CheckCircle2, text: 'Intervention IDF' }
  ];

  const reassurance = [
    {
      icon: MapPin,
      title: 'Intervention sur toute\'l\'Île-de-France',
      desc: 'Paris et les 7 départements limitrophes'
    },
    {
      icon: Shield,
      title: 'Respect strict des normes',
      desc: 'Conformité réglementaire garantie'
    },
    {
      icon: Clock,
      title: 'Maîtrise des délais chantier',
      desc: 'Planning respecté, livraison ponctuelle'
    },
    {
      icon: Building2,
      title: 'PME réactive et flexible',
      desc: 'Adaptabilité à vos contraintes'
    },
    {
      icon: Award,
      title: 'Expertise technique B2B',
      desc: 'Spécialiste des projets professionnels'
    },
    {
      icon: HardHat,
      title: 'Travaux CVC complets',
      desc: 'Du lot plomberie à la chaufferie'
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

  const departments = ['Paris', 'Hauts-de-Seine', 'Seine-Saint-Denis', 'Val-de-Marne', 'Yvelines', 'Essonne', "Val-d'Oise", 'Seine-et-Marne'];
  const { openDevis } = useDevis();

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Dark with human image */}
      <section className="relative min-h-screen flex items-center">
        {/* Background with overlay - human workers image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-workers.jpg" 
            alt="Techniciens CVC au travail"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f14] via-[#0a0f14]/85 to-[#0a0f14]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f14] via-transparent to-[#0a0f14]/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#173344]/60 border border-[#d6a527]/40 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-[#d6a527] rounded-full animate-pulse" />
                <span className="text-sm text-[#d6a527] font-medium">Entreprise B2B Île-de-France</span>
              </div>

              {/* H1 */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-['Chakra_Petch']">
                Plombier Chauffagiste <span className="text-[#d6a527]">Paris</span> & <span className="text-[#d6a527]">Île-de-France</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Votre partenaire technique en installation CVC pour bâtiments professionnels en Île-de-France.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={openDevis}
                  className="bg-[#d6a527] hover:bg-[#b88a1f] text-[#0a0f14] px-8 py-6 text-lg font-semibold transition-all hover:shadow-lg hover:shadow-[#d6a527]/30 group"
                >
                  Demander un devis
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link to="/realisations">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
                  >
                    Nos réalisations
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                {trustIndicators.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <item.icon className="text-[#d6a527]" size={20} />
                    <span className="text-sm text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Stats Card */}
            <div className="hidden lg:block">
              <div className="bg-[#173344]/60 backdrop-blur-sm border border-[#d6a527]/30 rounded-2xl p-8 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-[#0a0f14]/60 rounded-xl border border-[#d6a527]/20">
                      <div className="text-4xl font-bold text-[#d6a527] font-['Chakra_Petch']">{stat.value}</div>
                      <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#d6a527]/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#d6a527] rounded-full" />
          </div>
        </div>
      </section>

      {/* About Preview Section - LIGHT background */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image - human team */}
            <AnimatedSection>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/about-team.jpg" 
                    alt="Équipe DICKO sur chantier"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-[#d6a527] rounded-2xl p-6 shadow-xl">
                  <div className="text-3xl font-bold text-[#0a0f14] font-['Chakra_Petch']">15+</div>
                  <div className="text-sm text-[#0a0f14]/80">Ans d'expérience</div>
                </div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <div className="inline-block bg-[#d6a527]/10 border border-[#d6a527]/40 rounded-full px-4 py-2">
                  <span className="text-[#d6a527] text-sm font-medium">À propos de DICKO</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-bold font-['Chakra_Petch'] text-[#0a0f14]">
                  Votre partenaire <span className="text-[#d6a527]">CVC</span> de confiance
                </h2>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  DICKO est une entreprise spécialisée en installation de <strong className="text-[#0a0f14]">plomberie</strong>, <strong className="text-[#0a0f14]">chauffage</strong> et <strong className="text-[#0a0f14]">VMC</strong> pour les bâtiments tertiaires, logements collectifs et infrastructures publiques en Île-de-France.
                </p>
                
                <p className="text-gray-500 leading-relaxed">
                  Nous accompagnons entreprises générales, promoteurs immobiliers et collectivités dans la réalisation de leurs projets techniques. Notre expertise couvre l'ensemble des travaux CVC.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#d6a527]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="text-[#d6a527]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0a0f14]">Bâtiments tertiaires</h4>
                      <p className="text-sm text-gray-500">Bureaux, commerces, entrepôts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#d6a527]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <HardHat className="text-[#d6a527]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0a0f14]">Logements collectifs</h4>
                      <p className="text-sm text-gray-500">Résidences, immeubles</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#d6a527]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-[#d6a527]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0a0f14]">Respect des délais</h4>
                      <p className="text-sm text-gray-500">Maîtrise du planning chantier</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#d6a527]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="text-[#d6a527]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0a0f14]">Normes en vigueur</h4>
                      <p className="text-sm text-gray-500">Conformité réglementaire</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link to="/a-propos">
                    <Button 
                      variant="outline"
                      className="border-[#d6a527] text-[#d6a527] hover:bg-[#d6a527] hover:text-[#0a0f14]"
                    >
                      En savoir plus
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section - DARK background with images */}
      <section className="py-24 bg-[#0d1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-[#173344]/60 border border-[#d6a527]/40 rounded-full px-4 py-2 mb-6">
              <span className="text-[#d6a527] text-sm font-medium">Nos Expertises</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Chakra_Petch'] mb-4">
              Nos Services en <span className="text-[#d6a527]">Plomberie</span>, <span className="text-[#d6a527]">Chauffage</span> et <span className="text-[#3db75d]">VMC</span>
            </h2>
            <p className="text-gray-400">
              Solutions techniques complètes pour vos projets de bâtiment en Île-de-France
            </p>
          </div>

          {/* Services Grid with images */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="bg-[#173344]/30 border-[#d6a527]/20 hover:border-[#d6a527]/50 transition-all group hover:-translate-y-1 overflow-hidden h-full">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173344] to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-[#d6a527]/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-[#d6a527]/40">
                      <service.icon className="w-6 h-6 text-[#d6a527]" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-['Chakra_Petch'] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2 text-gray-400 mb-6">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-[#d6a527] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link} className="block">
                    <Button 
                      variant="outline"
                      className="w-full border-[#d6a527] text-[#d6a527] hover:bg-[#d6a527] hover:text-[#0a0f14] group"
                    >
                      En savoir plus
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Zone d'intervention */}
          <div className="mt-16 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="text-[#d6a527]" size={20} />
              <p className="text-gray-400">Nous intervenons dans toute l'Île-de-France :</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {departments.map((dept) => (
                <span key={dept} className="bg-[#173344]/40 border border-[#d6a527]/30 rounded-full px-4 py-2 text-sm text-gray-300">
                  {dept}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance Section - LIGHT background */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-[#d6a527]/10 border border-[#d6a527]/40 rounded-full px-4 py-2 mb-6">
              <span className="text-[#d6a527] text-sm font-medium">Pourquoi nous choisir</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Chakra_Petch'] mb-4 text-[#0a0f14]">
              Pourquoi choisir <span className="text-[#d6a527]">DICKO</span> ?
            </h2>
            <p className="text-gray-500">
              Votre partenaire CVC de confiance en Île-de-France
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reassurance.map((item, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:border-[#d6a527]/50 transition-all shadow-sm hover:shadow-md">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d6a527]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[#d6a527]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a0f14] mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview Section - LIGHT background */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-[#d6a527]/10 border border-[#d6a527]/40 rounded-full px-4 py-2 mb-6">
              <span className="text-[#d6a527] text-sm font-medium">Nos Réalisations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Chakra_Petch'] mb-4 text-[#0a0f14]">
              Nos <span className="text-[#d6a527]">Réalisations CVC</span> en Île-de-France
            </h2>
            <p className="text-gray-500">
              Découvrez nos projets récents en plomberie, chauffage et VMC pour bâtiments professionnels
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-[#d6a527] transition-all shadow-sm">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/project1-boiler.jpg" 
                    alt="Installation plomberie immeuble collectif"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="bg-[#d6a527] text-[#0a0f14] text-sm font-medium px-3 py-1 rounded-full">Plomberie</span>
                  <h3 className="text-xl font-bold font-['Chakra_Petch'] mt-4 mb-3 text-[#0a0f14]">
                    Installation plomberie immeuble collectif
                  </h3>
                  <p className="text-gray-600 text-sm">Remplacement complet du réseau de plomberie dans un immeuble de 120 logements à Paris.</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-[#d6a527] transition-all shadow-sm">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/project2-heating.jpg" 
                    alt="Réseau chauffage bâtiment tertiaire"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="bg-[#d6a527] text-[#0a0f14] text-sm font-medium px-3 py-1 rounded-full">Chauffage</span>
                  <h3 className="text-xl font-bold font-['Chakra_Petch'] mt-4 mb-3 text-[#0a0f14]">
                    Réseau chauffage bâtiment tertiaire
                  </h3>
                  <p className="text-gray-600 text-sm">Installation de plancher chauffant pour un bâtiment de bureaux en Hauts-de-Seine.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="text-center mt-12">
            <Link to="/realisations">
              <Button 
                variant="outline"
                className="border-[#d6a527] text-[#d6a527] hover:bg-[#d6a527] hover:text-[#0a0f14]"
              >
                Voir toutes nos réalisations
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - DARK background */}
      <section className="py-24 bg-[#0a0f14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#d6a527]/10 border border-[#d6a527]/40 rounded-full px-4 py-2 mb-6">
              <span className="text-[#d6a527] text-sm font-medium">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Chakra_Petch'] mb-4 text-white">
              Questions <span className="text-[#d6a527]">fréquentes</span>
            </h2>
          </div>

          <AnimatedSection>
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
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section - DARK with gold accent */}
      <section className="py-24 bg-[#d6a527]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-['Chakra_Petch'] mb-6 text-[#0a0f14]">
            Prêt à démarrer votre projet CVC ?
          </h2>
          <p className="text-[#0a0f14]/80 text-lg mb-8">
            Contactez-nous pour obtenir un devis personnalisé pour vos travaux de plomberie, chauffage ou VMC en Île-de-France.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-[#0a0f14] hover:bg-[#1a1f24] text-white px-10 py-6 text-lg font-semibold transition-all"
              >
                <Phone className="mr-2" size={20} />
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
