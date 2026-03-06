import { 
  Building2,
  HardHat,
  Clock,
  Award,
  CheckCircle2,
  Target,
  Users,
  TrendingUp,
  MapPin,
  ArrowRight,
  Heart
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Expertise technique',
      description: 'Une équipe qualifiée et formée aux dernières normes du bâtiment.'
    },
    {
      icon: Clock,
      title: 'Respect des délais',
      description: 'Maîtrise du planning chantier et livraison dans les temps.'
    },
    {
      icon: Users,
      title: 'PME réactive',
      description: 'Flexibilité et adaptabilité à vos contraintes de projet.'
    },
    {
      icon: TrendingUp,
      title: 'Qualité certifiée',
      description: 'Respect strict des normes en vigueur et conformité réglementaire.'
    }
  ];

  const expertise = [
    {
      title: 'Bâtiments tertiaires',
      description: 'Bureaux, commerces, entrepôts et espaces professionnels',
      icon: Building2
    },
    {
      title: 'Logements collectifs',
      description: 'Résidences, immeubles et copropriétés',
      icon: HardHat
    },
    {
      title: 'Infrastructures publiques',
      description: 'Équipements publics et marchés publics',
      icon: Award
    }
  ];

  const stats = [
    { value: '15+', label: "Années d'expérience" },
    { value: '200+', label: 'Projets réalisés' },
    { value: '50+', label: 'Clients B2B' },
    { value: '8', label: 'Départements IDF' }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - LIGHT with team image */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="inline-block bg-[#d6a527]/10 border border-[#d6a527]/40 rounded-full px-4 py-2">
                <span className="text-[#d6a527] text-sm font-medium">À propos de nous</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold font-['Chakra_Petch'] text-[#0a0f14]">
                DICKO – <span className="text-[#d6a527]">PLOMBERIE</span> • <span className="text-[#d6a527]">CHAUFFAGE</span> • <span className="text-[#3db75d]">VMC</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Votre partenaire technique en installation CVC pour bâtiments professionnels en Île-de-France depuis plus de 15 ans.
              </p>
              <p className="text-gray-500 leading-relaxed">
                DICKO est une entreprise spécialisée en installation de <strong className="text-[#0a0f14]">plomberie</strong>, <strong className="text-[#0a0f14]">chauffage</strong> et <strong className="text-[#0a0f14]">VMC</strong> pour les bâtiments tertiaires, logements collectifs et infrastructures publiques en Île-de-France.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Nous accompagnons entreprises générales, promoteurs immobiliers et collectivités dans la réalisation de leurs projets techniques. Notre expertise couvre l'ensemble des travaux CVC.
              </p>

              <div className="flex items-start gap-2 text-sm text-gray-500 pt-2">
                <MapPin size={18} className="text-[#d6a527] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#0a0f14] font-medium">25 RUE ARCHEREAU, 75019 PARIS</p>
                  <p className="text-xs">SIRET: 918 120 783 00017</p>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/contact">
                  <Button className="bg-[#d6a527] hover:bg-[#b88a1f] text-[#0a0f14] px-8 py-6 font-semibold">
                    Nous contacter
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image - human team */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/team-photo.jpg" 
                  alt="Équipe DICKO"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#d6a527] rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-[#0a0f14] font-['Chakra_Petch']">15+</div>
                <div className="text-sm text-[#0a0f14]/80">Ans d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - DARK */}
      <section className="py-24 bg-[#0a0f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-[#173344]/30 rounded-xl border border-[#d6a527]/20">
                <div className="text-4xl font-bold text-[#d6a527] font-['Chakra_Petch']">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teamwork Section - LIGHT with image */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/teamwork-pipes.jpg" 
                  alt="Équipe au travail"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl font-bold font-['Chakra_Petch'] text-[#0a0f14]">
                Une équipe <span className="text-[#d6a527]">à taille humaine</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Chez DICKO, nous croyons que la réussite d'un projet repose avant tout sur les hommes et les femmes qui le portent. Notre équipe de techniciens qualifiés met son savoir-faire au service de vos projets avec passion et professionnalisme.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#d6a527] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-600">Intervention sur toute l'Île-de-France (8 départements)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#d6a527] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-600">Respect strict des normes en vigueur</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#d6a527] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-600">Maîtrise des délais chantier</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#d6a527] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-600">PME réactive et flexible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section - DARK */}
      <section className="py-24 bg-[#0d1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-['Chakra_Petch'] mb-4">
              Notre <span className="text-[#d6a527]">expertise</span> sectorielle
            </h2>
            <p className="text-gray-400">
              Nous intervenons sur différents types de bâtiments professionnels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <Card key={index} className="bg-[#173344]/30 border-[#d6a527]/20 hover:border-[#d6a527]/50 transition-all">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#d6a527]/10 rounded-xl flex items-center justify-center mx-auto mb-6 border border-[#d6a527]/30">
                    <item.icon className="w-8 h-8 text-[#d6a527]" />
                  </div>
                  <h3 className="text-xl font-bold font-['Chakra_Petch'] mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proximité Client Section - LIGHT with image */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="w-14 h-14 bg-[#d6a527]/10 rounded-xl flex items-center justify-center border border-[#d6a527]/30">
                <Heart className="w-7 h-7 text-[#d6a527]" />
              </div>
              <h2 className="text-3xl font-bold font-['Chakra_Petch'] text-[#0a0f14]">
                La <span className="text-[#d6a527]">proximité</span> avec nos clients
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Chez DICKO, nous plaçons la relation client au cœur de notre métier. Notre taille de PME nous permet d'être réactifs, disponibles et à l'écoute de vos besoins spécifiques. Chaque projet est unique, et nous y accordons la même attention, quelle que soit son envergure.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Nous croyons en une collaboration transparente et durable. De la première prise de contact à la livraison finale, vous avez un interlocuteur dédié qui connaît votre projet dans les moindres détails. Pas de standardisation, pas de déshumanisation : juste un service technique de qualité, porté par des hommes et des femmes passionnés.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="bg-gray-100 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#d6a527]" />
                  Interlocuteur unique
                </span>
                <span className="bg-gray-100 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#d6a527]" />
                  Réactivité garantie
                </span>
                <span className="bg-gray-100 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#d6a527]" />
                  Suivi personnalisé
                </span>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <img 
                  src="/proximite-sans-branding.jpg" 
                  alt="Équipe DICKO en réunion de chantier"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#d6a527] rounded-xl p-4 shadow-xl">
                <div className="text-2xl font-bold text-[#0a0f14] font-['Chakra_Petch']">100%</div>
                <div className="text-sm text-[#0a0f14]/80">Clients satisfaits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - DARK */}
      <section className="py-24 bg-[#0a0f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-['Chakra_Petch'] mb-4">
              Nos <span className="text-[#d6a527]">valeurs</span>
            </h2>
            <p className="text-gray-400">
              Les principes qui guident notre engagement au quotidien
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-[#173344]/30 border-[#d6a527]/20 hover:border-[#d6a527]/50 transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#d6a527]/10 rounded-lg flex items-center justify-center mb-4 border border-[#d6a527]/30">
                    <value.icon className="w-6 h-6 text-[#d6a527]" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-400">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Section - LIGHT */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-[#d6a527] mb-4">Notre expertise technique</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              En tant qu'<strong className="text-gray-700">entreprise plomberie Île-de-France</strong>, nous maîtrisons les 
              <strong className="text-gray-700"> réseaux hydrauliques</strong>, les <strong className="text-gray-700">colonnes montantes</strong> et les 
              <strong className="text-gray-700"> réseaux sanitaires</strong>. Notre expertise en <strong className="text-gray-700">installation chauffage collectif</strong> 
              couvre la <strong className="text-gray-700">chaufferie</strong>, le <strong className="text-gray-700">réseau thermique</strong> et la 
              <strong className="text-gray-700"> distribution chauffage</strong>. Pour la <strong className="text-gray-700">ventilation mécanique contrôlée</strong>, 
              nous installons des systèmes <strong className="text-gray-700">VMC simple flux</strong> et <strong className="text-gray-700">double flux</strong>. 
              En matière de <strong className="text-gray-700">réseau gaz</strong>, nous assurons la <strong className="text-gray-700">mise en conformité</strong> 
              et le respect des <strong className="text-gray-700">normes gaz bâtiment</strong>. Nous intervenons sur le 
              <strong className="text-gray-700"> bâtiment tertiaire</strong>, le <strong className="text-gray-700">logement collectif</strong> et les 
              <strong className="text-gray-700"> marchés publics</strong> en tant que <strong className="text-gray-700">sous-traitant plomberie IDF</strong> 
              pour le <strong className="text-gray-700">lot plomberie CVC</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
