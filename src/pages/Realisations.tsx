import { MapPin, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Realisations() {
  const projects = [
    {
      image: '/project1-boiler.jpg',
      category: 'Plomberie',
      title: 'Installation plomberie immeuble collectif',
      location: 'Paris (75)',
      year: '2024',
      problem: 'Remplacement complet du réseau de plomberie vieillissant dans un immeuble de 120 logements.',
      solution: 'Installation de nouvelles colonnes montantes et réseaux sanitaires aux normes, avec mise en conformité complète.',
      result: 'Chantier livré dans les délais, mise en conformité totale du bâtiment et satisfaction des copropriétaires.',
      tags: ['Colonnes montantes', 'Réseaux sanitaires', 'Mise en conformité']
    },
    {
      image: '/project2-heating.jpg',
      category: 'Chauffage',
      title: 'Réseau chauffage bâtiment tertiaire',
      location: 'Hauts-de-Seine (92)',
      year: '2023',
      problem: 'Installation d\'un système de chauffage au sol pour un nouveau bâtiment de bureaux de 2 500 m².',
      solution: 'Pose de plancher chauffant avec régulation individuelle par zone et installation de la chaufferie.',
      result: 'Efficacité énergétique optimale, confort thermique homogène et réduction des coûts énergétiques.',
      tags: ['Plancher chauffant', 'Chaufferie', 'Régulation']
    },
    {
      image: '/project3-vmc.jpg',
      category: 'VMC',
      title: 'Installation VMC résidence',
      location: 'Seine-et-Marne (77)',
      year: '2024',
      problem: 'Mise en place d\'une ventilation mécanique contrôlée pour une résidence de 80 appartements.',
      solution: 'Installation VMC double flux avec récupération de chaleur et réseau de ventilation optimisé.',
      result: 'Qualité d\'air optimale, économies d\'énergie significatives et conformité aux normes RE2020.',
      tags: ['VMC double flux', 'Récupération chaleur', 'RE2020']
    },
    {
      image: '/batiment-neuf-91.jpg',
      category: 'Gaz',
      title: 'Réseau gaz infrastructure publique',
      location: 'Essonne (91)',
      year: '2023',
      problem: 'Installation du réseau gaz pour un complexe sportif public avec contraintes de sécurité élevées.',
      solution: 'Réseau gaz complet avec stations de régulation, sécurité intégrée et conformité réglementaire.',
      result: 'Conformité totale aux normes gaz bâtiment, certification obtenue et mise en service sans incident.',
      tags: ['Réseau gaz', 'Sécurité', 'Certification']
    }
  ];

  const categories = [
    { name: 'Plomberie', count: 45 },
    { name: 'Chauffage', count: 38 },
    { name: 'VMC', count: 32 },
    { name: 'Gaz', count: 28 }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - LIGHT */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-[#d6a527]/10 border border-[#d6a527]/40 rounded-full px-4 py-2 mb-6">
              <span className="text-[#d6a527] text-sm font-medium">Nos Réalisations</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-['Chakra_Petch'] mb-6 text-[#0a0f14]">
              Nos <span className="text-[#d6a527]">Réalisations CVC</span> en Île-de-France
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Découvrez nos projets récents en plomberie, chauffage et VMC pour bâtiments professionnels.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - DARK */}
      <section className="py-16 bg-[#0d1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <div key={index} className="text-center p-6 bg-[#173344]/30 rounded-xl border border-[#d6a527]/20">
                <div className="text-3xl font-bold text-[#d6a527] font-['Chakra_Petch']">{cat.count}</div>
                <div className="text-sm text-gray-400 mt-1">Projets {cat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - LIGHT */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl overflow-hidden shadow-lg">
                {/* Image */}
                <div className={`relative h-80 lg:h-96 overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#d6a527] text-[#0a0f14] px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} className="text-[#d6a527]" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} className="text-[#d6a527]" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold font-['Chakra_Petch'] text-[#0a0f14] mb-6">
                    {project.title}
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[#d6a527] font-semibold mb-1">Problématique</h4>
                      <p className="text-gray-600">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-[#3db75d] font-semibold mb-1">Solution technique</h4>
                      <p className="text-gray-600">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-[#d6a527] font-semibold mb-1">Résultat</h4>
                      <p className="text-gray-600">{project.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-100 border border-gray-200 rounded-full px-3 py-1 text-sm text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Section - DARK with human image */}
      <section className="py-24 bg-[#0a0f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="/realisation-complete.jpg" 
                  alt="Projet terminé avec client satisfait"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-['Chakra_Petch'] text-white">
                La <span className="text-[#d6a527]">satisfaction client</span> au cœur de notre métier
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Chaque projet que nous réalisons est une nouvelle opportunité de démontrer notre engagement envers la qualité et le service. Notre équipe met tout en œuvre pour livrer des installations conformes, durables et adaptées à vos besoins.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#d6a527] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300">Plus de 200 projets réalisés avec succès</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#d6a527] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300">Taux de satisfaction client de 98%</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#d6a527] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300">Garantie décennale sur nos installations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Types Section - LIGHT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-['Chakra_Petch'] mb-4 text-[#0a0f14]">
              Nos <span className="text-[#d6a527]">clients</span>
            </h2>
            <p className="text-gray-500">
              Nous travaillons avec différents types d'acteurs du bâtiment en Île-de-France
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gray-50 border-gray-200 hover:border-[#d6a527]/50 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#d6a527]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8 text-[#d6a527]" />
                </div>
                <h3 className="text-xl font-bold font-['Chakra_Petch'] mb-3 text-[#0a0f14]">Entreprises générales</h3>
                <p className="text-gray-500">Travaux en sous-traitance pour des projets de construction et rénovation.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-gray-200 hover:border-[#d6a527]/50 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#d6a527]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8 text-[#d6a527]" />
                </div>
                <h3 className="text-xl font-bold font-['Chakra_Petch'] mb-3 text-[#0a0f14]">Promoteurs immobiliers</h3>
                <p className="text-gray-500">Partenariat sur des programmes neufs de logements collectifs et bureaux.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-gray-200 hover:border-[#d6a527]/50 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#d6a527]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8 text-[#d6a527]" />
                </div>
                <h3 className="text-xl font-bold font-['Chakra_Petch'] mb-3 text-[#0a0f14]">Collectivités</h3>
                <p className="text-gray-500">Intervention sur marchés publics pour des équipements publics.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - GOLD */}
      <section className="py-24 bg-[#d6a527]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-['Chakra_Petch'] mb-6 text-[#0a0f14]">
            Vous avez un projet ?
          </h2>
          <p className="text-[#0a0f14]/80 text-lg mb-8">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <Link to="/contact">
            <Button 
              size="lg"
              className="bg-[#0a0f14] hover:bg-[#1a1f24] text-white px-10 py-6 text-lg font-semibold transition-all"
            >
              Nous contacter
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
