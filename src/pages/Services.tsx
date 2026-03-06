import { 
  Droplets, 
  Flame, 
  Wind, 
  Fuel,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Wrench,
  Thermometer,
  Fan,
  FlameKindling
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export default function Services() {
  const mainServices = [
    {
      icon: Droplets,
      title: 'Installation Plomberie Bâtiment',
      description: 'Solutions complètes pour vos réseaux hydrauliques en bâtiment tertiaire et logements collectifs.',
      items: [
        'Réseaux eau froide / eau chaude',
        'Colonnes montantes',
        'Réseaux sanitaires',
        'Mise en conformité réglementaire',
        'Dépannage et maintenance',
        'Remplacement de installations vétustes'
      ],
      features: [
        'Respect des normes DTU 60.11',
        'Matériaux certifiés ACS',
        'Garantie décennale'
      ],
      image: '/service-plomberie.jpg'
    },
    {
      icon: Flame,
      title: 'Installation Chauffage Collectif',
      description: 'Installation et maintenance de systèmes de chauffage performants pour immeubles et bâtiments professionnels.',
      items: [
        'Chaufferie collective',
        'Réseau thermique',
        'Distribution chauffage',
        'Installation chaudière collective',
        'Plancher chauffant',
        'Régulation thermique'
      ],
      features: [
        'Conformité RT2012/RE2020',
        'Optimisation énergétique',
        'Contrats de maintenance'
      ],
      image: '/service-chauffage.jpg'
    },
    {
      icon: Wind,
      title: 'Installation VMC Bâtiment',
      description: 'Ventilation mécanique contrôlée pour assurer la qualité de l\'air dans vos bâtiments.',
      items: [
        'Ventilation mécanique contrôlée',
        'VMC simple flux',
        'VMC double flux',
        'Réseau ventilation tertiaire',
        'Mise aux normes ventilation',
        'Entretien et maintenance VMC'
      ],
      features: [
        'Conformité RE2020',
        'Récupération de chaleur',
        'Réduction consommation énergétique'
      ],
      image: '/service-ventilation.jpg'
    },
    {
      icon: Fuel,
      title: 'Réseaux Gaz et Mise en Conformité',
      description: 'Installation et sécurisation de réseaux gaz pour bâtiments professionnels et collectifs.',
      items: [
        'Réseau gaz bâtiment',
        'Conformité réglementaire gaz',
        'Installation gaz logements collectifs',
        'Normes gaz bâtiment',
        'Détecteurs de fuite',
        'Contrôles périodiques'
      ],
      features: [
        'Certification Qualigaz',
        'Conformité NF P 24-301',
        'Contrats d\'entretien annuels'
      ],
      image: '/service-gaz-building.jpg'
    }
  ];

  const additionalServices = [
    {
      icon: Wrench,
      title: 'Maintenance',
      description: 'Contrats d\'entretien préventif et curatif pour tous vos équipements CVC.'
    },
    {
      icon: Thermometer,
      title: 'Dépannage urgent',
      description: 'Intervention rapide sur panne de chauffage, fuite d\'eau ou problème de ventilation.'
    },
    {
      icon: Fan,
      title: 'Conseil technique',
      description: 'Étude personnalisée et recommandations pour optimiser vos installations.'
    },
    {
      icon: FlameKindling,
      title: 'Mise aux normes',
      description: 'Mise en conformité de vos installations aux réglementations en vigueur.'
    }
  ];

  const departments = ['Paris', 'Hauts-de-Seine', 'Seine-Saint-Denis', 'Val-de-Marne', 'Yvelines', 'Essonne', "Val-d'Oise", 'Seine-et-Marne'];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - LIGHT with image */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-[#d6a527]/10 border border-[#d6a527]/40 rounded-full px-4 py-2">
                <span className="text-[#d6a527] text-sm font-medium">Nos Services</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold font-['Chakra_Petch'] text-[#0a0f14]">
                Nos Services en <span className="text-[#d6a527]">Plomberie</span>, <span className="text-[#d6a527]">Chauffage</span> et <span className="text-[#3db75d]">VMC</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Solutions techniques complètes pour vos projets de bâtiment en Île-de-France. De l'étude à la réalisation, nous vous accompagnons à chaque étape.
              </p>
              <Link to="/contact">
                <Button className="bg-[#d6a527] hover:bg-[#b88a1f] text-[#0a0f14] px-8 py-6 font-semibold">
                  Demander un devis
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/engineer-boiler.jpg" 
                  alt="Ingénieur chauffage"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section - DARK */}
      <section className="py-24 bg-[#0d1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden rounded-2xl border border-[#d6a527]/20 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative h-80 lg:h-[450px]">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#173344] to-transparent" />
                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 bg-[#d6a527]/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-[#d6a527]/40">
                        <service.icon className="w-8 h-8 text-[#d6a527]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="text-3xl font-bold font-['Chakra_Petch'] text-white">
                    {service.title}
                  </h2>
                  <p className="text-gray-400 text-lg">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-[#d6a527] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4">
                    {service.features.map((feature, i) => (
                      <span key={i} className="flex items-center gap-2 bg-[#3db75d]/10 border border-[#3db75d]/30 rounded-full px-4 py-2 text-sm text-[#3db75d]">
                        <CheckCircle2 size={16} />
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link to="/contact">
                      <Button 
                        className="bg-[#d6a527] hover:bg-[#b88a1f] text-[#0a0f14] px-8 py-6 text-lg font-semibold transition-all hover:shadow-lg hover:shadow-[#d6a527]/30 group"
                      >
                        Demander un devis
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services - LIGHT */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-['Chakra_Petch'] mb-4 text-[#0a0f14]">
              Services <span className="text-[#d6a527]">complémentaires</span>
            </h2>
            <p className="text-gray-500">
              Des prestations adaptées à tous vos besoins en matière de CVC
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:border-[#d6a527]/50 transition-all group shadow-sm hover:shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-[#d6a527]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#d6a527]/20 transition-colors">
                    <service.icon className="w-7 h-7 text-[#d6a527]" />
                  </div>
                  <h3 className="font-bold font-['Chakra_Petch'] mb-2 text-[#0a0f14]">{service.title}</h3>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention - DARK */}
      <section className="py-24 bg-[#0a0f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-['Chakra_Petch'] mb-4">
              Zone d'<span className="text-[#d6a527]">intervention</span>
            </h2>
            <p className="text-gray-400">
              Nous intervenons dans toute l'Île-de-France
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {departments.map((dept) => (
              <span key={dept} className="bg-[#173344]/40 border border-[#d6a527]/30 rounded-full px-5 py-3 text-gray-300">
                {dept}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - GOLD */}
      <section className="py-24 bg-[#d6a527]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-['Chakra_Petch'] mb-6 text-[#0a0f14]">
            Besoin d'un <span className="text-white">devis</span> ?
          </h2>
          <p className="text-[#0a0f14]/80 text-lg mb-8">
            Contactez-nous pour obtenir une étude personnalisée de votre projet CVC en Île-de-France.
          </p>
          <Link to="/contact">
            <Button 
              size="lg"
              className="bg-[#0a0f14] hover:bg-[#1a1f24] text-white px-10 py-6 text-lg font-semibold transition-all"
            >
              Nous contacter
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
