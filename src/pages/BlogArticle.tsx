import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const articles: Record<string, {
  title: string;
  metaDescription: string;
  date: string;
  readTime: string;
  category: string;
  content: React.ReactNode;
}> = {
  'comment-choisir-chaudiere-condensation-paris': {
    title: 'Comment choisir sa chaudière à condensation à Paris en 2025 ?',
    metaDescription: 'Tout savoir sur le choix d\'une chaudière à condensation à Paris : marques, prix, aides MaPrimeRénov\' et installation par un professionnel certifié.',
    date: '15 février 2025',
    readTime: '8 min',
    category: 'Chauffage',
    content: (
      <>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Le remplacement d\'une chaudière est un investissement important pour tout propriétaire parisien. 
          Avec les nouvelles réglementations environnementales et les nombreuses aides disponibles, 
          choisir une chaudière à condensation est aujourd\'hui la solution la plus avantageuse. 
          Dans cet article, nos experts vous guident pas à pas pour faire le meilleur choix.
        </p>

        <h2 className="text-2xl font-bold text-[#0a0f14] mb-4 font-['Chakra_Petch']">Qu\'est-ce qu\'une chaudière à condensation ?</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Une chaudière à condensation est un appareil de chauffage qui récupère la chaleur contenue dans les 
          fumées d\'évacuation, habituellement perdue avec les chaudières traditionnelles. Cette technologie 
          permet d\'atteindre des rendements allant jusqu\'à 109%, soit 30% d\'économie d\'énergie par rapport 
          à une chaudière ancienne.
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Le principe est simple : les gaz de combustion refroidissent au contact d\'un échangeur secondaire, 
          libérant ainsi la chaleur latente de condensation de la vapeur d\'eau présente dans les fumées. 
          Cette chaleur est alors récupérée pour chauffer l\'eau du circuit de chauffage.
        </p>

        <h2 className="text-2xl font-bold text-[#0a0f14] mb-4 font-['Chakra_Petch']">Quels critères choisir ?</h2>
        
        <h3 className="text-xl font-semibold text-[#0a0f14] mb-3">La puissance adaptée</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          La puissance d\'une chaudière se calcule en kilowatts (kW) et dépend de plusieurs facteurs : 
          la surface à chauffer, l\'isolation du logement, le nombre de pièces et la localisation géographique. 
          À Paris, comptez environ 80 à 100 W/m² pour un appartement ancien mal isolé, et 60 à 80 W/m² 
          pour un logement rénové. Un surdimensionnement entraîne des cycles de marche/arrêt fréquents 
          qui réduisent la durée de vie de l\'appareil.
        </p>

        <h3 className="text-xl font-semibold text-[#0a0f14] mb-3">Les marques recommandées</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Les principales marques présentes sur le marché français sont Vaillant, Viessmann, Frisquet, 
          Chaffoteaux et Saunier Duval. Chez Dicko BTP, nous travaillons principalement avec Vaillant et 
          Viessmann pour leur fiabilité, leur service après-vente réactif et la disponibilité des pièces détachées. 
          Ces marques proposent des gammes adaptées à tous les budgets, des entrées de gamme aux modèles 
          haut de gamme avec régulation connectée.
        </p>

        <h3 className="text-xl font-semibold text-[#0a0f14] mb-3">La garantie et le SAV</h3>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Une chaudière à condensation représente un investissement sur le long terme. Privilégiez les 
          modèles avec une garantie pièces et main d\'œuvre d\'au moins 2 ans, idéalement 3 à 5 ans pour 
          les gammes supérieures. Vérifiez également la présence d\'un réseau de SAV dans votre région. 
          À Paris, toutes les grandes marques disposent de techniciens agréés.
        </p>

        <h2 className="text-2xl font-bold text-[#0a0f14] mb-4 font-['Chakra_Petch']">Les aides financières disponibles en 2025</h2>
        
        <h3 className="text-xl font-semibold text-[#0a0f14] mb-3">MaPrimeRénov\'</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          MaPrimeRénov\' est la principale aide pour le remplacement d\'une chaudière. En 2025, les montants 
          sont les suivants : jusqu\'à 4 000€ pour une chaudière à condensation gaz, et jusqu\'à 5 000€ pour 
          une pompe à chaleur. Le montant exact dépend de vos revenus et de la performance énergétique 
          de votre logement. Pour bénéficier de MaPrimeRénov\', vous devez faire appel à un professionnel 
          certifié RGE (Reconnu Garant de l\'Environnement) comme Dicko BTP.
        </p>

        <h3 className="text-xl font-semibold text-[#0a0f14] mb-3">Le CEE (Certificats d\'Économie d\'Énergie)</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Les CEE permettent de financer une partie des travaux via des primes énergie versées par les 
          fournisseurs d\'énergie. Pour une chaudière à condensation, la prime peut aller de 400€ à 1 200€ 
          selon les caractéristiques de l\'installation. Nous nous occupons de toutes les démarches 
          administratives pour vous.
        </p>

        <h3 className="text-xl font-semibold text-[#0a0f14] mb-3">L\'éco-PTZ</h3>
        <p className="text-gray-600 mb-8 leading-relaxed">
          L\'éco-prêt à taux zéro permet de financer jusqu\'à 50 000€ de travaux de rénovation énergétique 
          sans frais d\'intérêt. Le remplacement d\'une chaudière est éligible, à condition que les travaux 
          soient réalisés par un professionnel RGE. La durée de remboursement peut aller jusqu\'à 20 ans.
        </p>

        <h2 className="text-2xl font-bold text-[#0a0f14] mb-4 font-['Chakra_Petch']">Combien coûte l\'installation à Paris ?</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Le coût total d\'une installation de chaudière à condensation à Paris se décompose comme suit : 
          la chaudière elle-même (1 500€ à 4 000€ selon la marque et les options), la main d\'œuvre 
          (800€ à 1 500€), les matériaux et raccordements (300€ à 800€), et la mise en service (200€ à 400€). 
          Au total, comptez entre 3 000€ et 7 000€ TTC pour un remplacement complet.
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Avec les aides MaPrimeRénov\' et CEE, le coût final pour le propriétaire peut être réduit de 
          50% à 80%. Chez Dicko BTP, nous vous accompagnons dans l\'optimisation de vos aides pour 
          minimiser votre reste à charge.
        </p>

        <h2 className="text-2xl font-bold text-[#0a0f14] mb-4 font-['Chakra_Petch']">Pourquoi faire appel à un professionnel certifié ?</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          L\'installation d\'une chaudière gaz est une opération réglementée qui doit être réalisée par 
          un professionnel certifié Qualigaz. Une installation non conforme peut entraîner des risques 
          pour la sécurité (fuite de gaz, intoxication au monoxyde de carbone) et invalider votre assurance habitation.
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          En choisissant Dicko BTP, vous bénéficiez d\'une installation conforme aux normes NF DTU 61.1, 
          d\'un certificat de conformité délivré à l\'issue des travaux, et d\'une garantie décennale. 
          Notre certification RGE vous permet également d\'accéder à toutes les aides financières.
        </p>

        <div className="bg-[#d6a527]/10 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-[#0a0f14] mb-4">Besoin de conseils personnalisés ?</h3>
          <p className="text-gray-600 mb-6">
            Nos experts sont à votre disposition pour étudier votre projet et vous établir un devis gratuit 
            et personnalisé. Nous vous accompagnons dans toutes les démarches d\'obtention des aides.
          </p>
          <Link to="/chauffage">
            <Button className="bg-[#d6a527] hover:bg-[#b88a1f] text-[#0a0f14]">
              Découvrir nos services chauffage
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </>
    )
  },
  'vmc-obligatoire-immeuble-reglementation': {
    title: 'VMC en immeuble : est-ce obligatoire ? Ce que dit la loi',
    metaDescription: 'La VMC est-elle obligatoire dans votre immeuble ? Découvrez la réglementation française, les obligations des syndics et copropriétaires, et comment faire installer votre VMC à Paris.',
    date: '8 février 2025',
    readTime: '6 min',
    category: 'VMC',
    content: (
      <>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          La qualité de l\'air intérieur est un enjeu majeur de santé publique, particulièrement dans les 
          grandes villes comme Paris où les logements sont souvent anciens et mal ventilés. La Ventilation 
          Mécanique Contrôlée (VMC) est l\'une des solutions les plus efficaces pour assainir l\'air de 
          votre logement. Mais est-elle vraiment obligatoire ? Nos experts vous éclairent sur la réglementation.
        </p>

        <h2 className="text-2xl font-bold text-[#0a0f14] mb-4 font-['Chakra_Petch']">VMC obligatoire : que dit la loi française ?</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          L\'obligation de ventilation mécanique contrôlée date de 1982. Depuis cette date, tous les logements 
          neufs construits en France doivent être équipés d\'un système de ventilation. Cette obligation 
          s\'applique également aux logements existants lors de travaux importants touchant aux pièces 
          humides (cuisine, salle de bain).
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          La réglementation a été renforcée avec la RE2020 (Réglementation Environnementale 2020) qui impose 
          des exigences de performance énergétique et de qualité d\'air encore plus strictes pour les 
          constructions neuves. Les VMC doivent désormais atteindre des rendements minimums et être 
          accompagnées d\'un réseau de distribution performant.
        </p>

        <h2 className="text-2xl font-bold text-[#0a0f14] mb-4 font-['Chakra_Petch']">Quels types de VMC pour un immeuble parisien ?</h2>
        
        <h3 className="text-xl font-semibold text-[#0a0f14] mb-3">VMC simple flux</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          La VMC simple flux est la solution la plus répandue dans les immeubles parisiens. Elle fonctionne 
          en extrait l\'air vicié des pièces humides (cuisine, salle de bain) et fait entrer l\'air neuf 
          par des entrées d\'air situées dans les pièces de vie (salon, chambres). Il existe deux types : 
          l\'autoréglable (débit constant) et l\'hygroréglable (débit variable selon l\'humidité). 
          Cette dernière est plus économique et plus silencieuse.
        </p>

        <h3 className="text-xl font-semibold text-[#0a0f14] mb-3">VMC double flux</h3>
        <p className="text-gray-600 mb-8 leading-relaxed">
          La VMC double flux est la solution haut de gamme. Elle récupère la chaleur de l\'air extrait 
          pour chauffer l\'air neuf entrant, ce qui permet de réduire les pertes de chaleur et d\'améliorer 
          le confort thermique. Son installation est plus complexe et coûteuse, mais elle est idéale pour 
          les logements bien isolés et les constructions neuves conformes à la RE2020.
        </p>

        <h2 className="text-2xl font-bold text-[#0a0f14] mb-4 font-['Chakra_Petch']">Qui est responsable : propriétaire ou syndic ?</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Dans les immeubles collectifs, la répartition des responsabilités est claire : le syndic de 
          copropriété est responsable de l\'entretien et du remplacement des parties communes de la VMC 
          (soufflante, gaines, bouches d\'extraction dans les parties communes). Les propriétaires doivent 
          quant à eux entretenir les bouches situées dans leur logement privé.
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          En cas de non-conformité, c\'est l\'ensemble de la copropriété qui est concernée. Le syndic doit 
          donc veiller à la bonne maintenance du système et programmer le remplacement des appareils 
          obsolètes. Les assemblées générales de copropriété sont l\'occasion d\'aborder ces questions 
          et de voter les travaux nécessaires.
        </p>

        <h2 className="text-2xl font-bold text-[#0a0f14] mb-4 font-['Chakra_Petch']">Quel budget prévoir pour l\'installation d\'une VMC ?</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Le coût d\'installation d\'une VMC varie considérablement selon le type choisi et la configuration 
          du logement. Pour une VMC simple flux hygroréglable dans un appartement parisien standard, 
          comptez entre 800€ et 1 500€ TTC, installation comprise. Pour une VMC double flux avec réseau 
          de distribution, le budget peut atteindre 4 000€ à 8 000€.
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Dans les immeubles collectifs, le coût doit être étudié au cas par car selon le nombre de 
          logements desservis, la complexité des réseaux existants et les contraintes techniques du bâtiment. 
          Chez Dicko BTP, nous réalisons une étude gratuite et établissons un devis détaillé pour chaque projet.
        </p>

        <h2 className="text-2xl font-bold text-[#0a0f14] mb-4 font-['Chakra_Petch']">Comment se passe l\'intervention chez Dicko BTP ?</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Notre processus d\'intervention commence par une visite technique gratuite pour évaluer l\'existant 
          et définir la solution la plus adaptée. Nous étudions la configuration de votre logement, 
          l\'emplacement optimal pour le groupe de ventilation, et le tracé des gaines pour minimiser 
          les nuisances sonores.
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          L\'installation proprement dite se déroule généralement en une journée pour une VMC simple flux, 
          et en 2 à 3 jours pour une VMC double flux. Nos techniciens respectent votre logement et nettoient 
          soigneusement après intervention. Une notice d\'utilisation vous est remise et nous restons 
          disponibles pour toute question.
        </p>

        <div className="bg-[#d6a527]/10 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-[#0a0f14] mb-4">Vous avez des questions sur la VMC ?</h3>
          <p className="text-gray-600 mb-6">
            Nos experts sont à votre disposition pour étudier votre situation et vous conseiller sur 
            la meilleure solution pour votre logement. Devis gratuit et sans engagement.
          </p>
          <Link to="/vmc">
            <Button className="bg-[#d6a527] hover:bg-[#b88a1f] text-[#0a0f14]">
              Découvrir nos services VMC
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </>
    )
  },
  'entretien-chaudiere-gaz-obligatoire-paris': {
    title: 'Entretien annuel chaudière gaz : obligation légale et prix à Paris',
    metaDescription: 'L\'entretien annuel de votre chaudière gaz est obligatoire par la loi. Découvrez pourquoi, combien ça coûte à Paris et comment planifier votre contrat d\'entretien.',
    date: '1er février 2025',
    readTime: '7 min',
    category: 'Chauffage',
    content: (
      <>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          L\'entretien annuel de la chaudière est une obligation légale souvent méconnue des propriétaires 
          et locataires. Pourtant, cette visite d\'entretien est essentielle pour garantir la sécurité, 
          la performance et la longévité de votre installation de chauffage. Nos experts vous expliquent 
          tout ce que vous devez savoir sur l\'entretien de votre chaudière gaz à Paris.
        </p>

        <h2 className="text-2xl font-bold text-[#0a0f14] mb-4 font-['Chakra_Petch']">Qu\'est-ce que l\'entretien annuel d\'une chaudière ?</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          L\'entretien annuel d\'une chaudière gaz est une visite technique réalisée par un professionnel 
          qualifié. Elle comprend un ensemble de vérifications et de réglages destinés à assurer le bon 
          fonctionnement de l\'appareil, optimiser son rendement énergétique et garantir la sécurité des occupants.
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Cette visite doit être effectuée une fois par an, idéalement avant le début de la saison de 
          chauffe, pour s\'assurer que la chaudière fonctionne correctement aux moments où vous en avez 
          le plus besoin. Un carnet d\'entretien est établi et remis au propriétaire ou au locataire.
        </p>

        <h2 className="text-2xl font-bold text-[#0a0f14] mb-4 font-['Chakra_Petch']">Que vérifie le technicien lors de la visite ?</h2>
        
        <h3 className="text-xl font-semibold text-[#0a0f14] mb-3">Vérification de la combustion</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Le technicien analyse les gaz de combustion pour s\'assurer que la chaudière brûle correctement 
          le gaz. Une combustion incomplète peut entraîner un rendement diminué et la production de 
          monoxyde de carbone, un gaz toxique et mortel. Les taux de CO et de CO2 sont mesurés et 
          comparés aux valeurs de référence du constructeur.
        </p>

        <h3 className="text-xl font-semibold text-[#0a0f14] mb-3">Nettoyage des composants</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Le brûleur, l\'échangeur et le corps de chauffe sont démontés et nettoyés pour éliminer les 
          dépôts de suie et de calcaire qui réduisent l\'efficacité de la chaudière. Les filtres sont 
          également nettoyés ou remplacés si nécessaire. Cette opération permet de restaurer le rendement 
          initial de l\'appareil.
        </p>

        <h3 className="text-xl font-semibold text-[#0a0f14] mb-3">Contrôle des équipements de sécurité</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Tous les dispositifs de sécurité sont testés : thermostat, pressostat, soupape de sécurité, 
          détecteur de flamme, etc. Le technicien vérifie également l\'étanchéité de l\'installation gaz 
          et le bon fonctionnement de l\'évacuation des fumées.
        </p>

        <h3 className="text-xl font-semibold text-[#0a0f14] mb-3">Réglages et optimisation</h3>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Le technicien effectue les réglages nécessaires pour optimiser le fonctionnement de la chaudière : 
          pression d\'eau, température de chauffe, débit du circulateur, etc. Ces réglages permettent 
          d\'améliorer le confort thermique et de réduire la consommation d\'énergie.
        </p>

        <h2 className="text-2xl font-bold text-[#0a0f14] mb-4 font-['Chakra_Petch']">Quelles sanctions en cas de non-entretien ?</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Le non-respect de l\'obligation d\'entretien annuel peut entraîner plusieurs sanctions. 
          D\'abord, en cas de sinistre (incendie, explosion, intoxication), votre assurance peut refuser 
          de vous indemniser si vous ne pouvez pas présenter le carnet d\'entretien à jour. Cette clause 
          est présente dans la plupart des contrats d\'assurance habitation.
        </p>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Ensuite, l\'absence d\'entretien peut constituer une infraction pénale punie d\'une amende. 
          Le propriétaire ou le locataire responsable de l\'entretien de la chaudière peut être condamné 
          à une amende de 150€ en cas de contrôle.
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Enfin, une chaudière mal entretenue présente des risques réels pour la sécurité : fuite de gaz, 
          intoxication au monoxyde de carbone, incendie. Ces risques justifient pleinement l\'obligation 
          légale d\'entretien.
        </p>

        <h2 className="text-2xl font-bold text-[#0a0f14] mb-4 font-['Chakra_Petch']">Quel est le prix d\'un entretien chaudière à Paris ?</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Le prix d\'un entretien annuel de chaudière gaz à Paris varie généralement entre 120€ et 200€ TTC, 
          selon le type de chaudière et les prestations incluses. Chez Dicko BTP, nous proposons un forfait 
          entretien à 150€ TTC pour les chaudières standards, incluant la visite complète, le nettoyage, 
          les réglages et l\'établissement du carnet d\'entretien.
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Pour les chaudières à condensation haut de gamme ou les installations complexes, le tarif peut 
          être légèrement supérieur. Nous établissons toujours un devis détaillé avant intervention, 
          sans surprise sur la facture finale.
        </p>

        <h2 className="text-2xl font-bold text-[#0a0f14] mb-4 font-['Chakra_Petch']">Comment souscrire un contrat d\'entretien avec Dicko BTP ?</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Souscrire un contrat d\'entretien avec Dicko BTP est simple et rapide. Contactez-nous par 
          téléphone au 06 15 03 53 00 ou via WhatsApp pour convenir d\'un rendez-vous. Notre technicien 
          se déplace à votre domicile pour réaliser la première visite d\'entretien.
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          À l\'issue de cette première visite, nous vous proposons un contrat d\'entretien annuel qui 
          comprend : la visite d\'entretien obligatoire, une priorité d\'intervention en cas de panne, 
          et des tarifs préférentiels sur les pièces de rechange. Vous recevez un rappel automatique 
          chaque année pour planifier votre prochain entretien.
        </p>

        <div className="bg-[#d6a527]/10 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-[#0a0f14] mb-4">Votre chaudière n\'a pas été entretenue cette année ?</h3>
          <p className="text-gray-600 mb-6">
            Ne attendez plus et prenez rendez-vous pour votre entretien annuel. Nos techniciens 
            interviennent rapidement à Paris et en Île-de-France.
          </p>
          <Link to="/chauffage">
            <Button className="bg-[#d6a527] hover:bg-[#b88a1f] text-[#0a0f14]">
              Découvrir nos services chauffage
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </>
    )
  }
};

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug] : null;

  if (!article) {
    return (
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-[#0a0f14] mb-4">Article non trouvé</h1>
          <Link to="/blog" className="text-[#d6a527] hover:underline">
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#0a0f14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-[#d6a527] mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au blog
          </Link>
          
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            <span className="bg-[#d6a527]/20 text-[#d6a527] px-3 py-1 rounded-full">{article.category}</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-['Chakra_Petch'] text-white">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            {article.content}
          </article>
        </div>
      </section>

      {/* Schema.org Article */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": article.title,
          "description": article.metaDescription,
          "datePublished": article.date,
          "author": {
            "@type": "Organization",
            "name": "Dicko BTP"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Dicko BTP",
            "logo": {
              "@type": "ImageObject",
              "url": "https://dicko-chauffage.com/logo-dicko.png"
            }
          }
        })}
      </script>
    </div>
  );
}
