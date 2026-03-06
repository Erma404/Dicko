import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    slug: 'comment-choisir-chaudiere-condensation-paris',
    title: 'Comment choisir sa chaudière à condensation à Paris en 2025 ?',
    excerpt: 'Tout savoir sur le choix d\'une chaudière à condensation à Paris : marques, prix, aides MaPrimeRénov\' et installation par un professionnel certifié.',
    date: '15 février 2025',
    readTime: '8 min',
    category: 'Chauffage'
  },
  {
    slug: 'vmc-obligatoire-immeuble-reglementation',
    title: 'VMC en immeuble : est-ce obligatoire ? Ce que dit la loi',
    excerpt: 'La VMC est-elle obligatoire dans votre immeuble ? Découvrez la réglementation française, les obligations des syndics et copropriétaires, et comment faire installer votre VMC à Paris.',
    date: '8 février 2025',
    readTime: '6 min',
    category: 'VMC'
  },
  {
    slug: 'entretien-chaudiere-gaz-obligatoire-paris',
    title: 'Entretien annuel chaudière gaz : obligation légale et prix à Paris',
    excerpt: 'L\'entretien annuel de votre chaudière gaz est obligatoire par la loi. Découvrez pourquoi, combien ça coûte à Paris et comment planifier votre contrat d\'entretien.',
    date: '1er février 2025',
    readTime: '7 min',
    category: 'Chauffage'
  }
];

export default function Blog() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#0a0f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#d6a527]/10 border border-[#d6a527]/30 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-[#d6a527] font-medium">Blog</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-['Chakra_Petch'] mb-6">
              Conseils et actualités <span className="text-[#d6a527]">plomberie & chauffage</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Retrouvez tous nos conseils d\'experts sur la plomberie, le chauffage, la VMC et le gaz à Paris et en Île-de-France.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Link 
                key={index} 
                to={`/blog/${article.slug}`}
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all border border-gray-200 hover:border-[#d6a527]/30"
              >
                <div className="h-48 bg-[#173344] flex items-center justify-center">
                  <span className="text-6xl font-bold text-[#d6a527]/30 font-['Chakra_Petch']">
                    {article.category.charAt(0)}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-[#d6a527]/10 text-[#d6a527] px-2 py-1 rounded">{article.category}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-[#0a0f14] mb-3 group-hover:text-[#d6a527] transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center text-[#d6a527] font-medium text-sm">
                    Lire l'article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
