import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import { Eye, Users, TrendingUp, CheckCircle, AlertCircle, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Article19 = () => {
  const seoData = {
    title: "Avenir du travail formations anticiper: compétences futurs 2025",
    description: "L'avenir du travail : quelles formations anticiper dès aujourd'hui. Compétences futurs, tendances marché emploi, transformation travail. Prospective formation PME.",
    keywords: "avenir du travail, compétences futurs, formations anticiper, futur emploi, transformation travail, compétences 2030, prospective formation",
    canonicalUrl: "https://iacenter.fr/blog/avenir-travail-formations-anticiper",
    ogImage: "https://iacenter.fr/favicon.png",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "L'avenir du travail : quelles formations anticiper dès aujourd'hui",
      "description": "Guide prospectif sur les compétences et formations à anticiper pour préparer l'avenir du travail.",
      "author": {
        "@type": "Organization",
        "name": "IA Center"
      },
      "publisher": {
        "@type": "EducationalOrganization",
        "name": "IA Center"
      },
      "datePublished": "2025-01-29",
      "dateModified": "2025-01-29",
      "mainEntityOfPage": "https://iacenter.fr/blog/avenir-travail-formations-anticiper",
      "keywords": "avenir travail, compétences futurs, prospective"
    }
  };
  useSEO(seoData);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="section-padding"
    >
      <div className="container-minimal max-w-4xl">
        <div className="mb-8">
          <Link to="/actualites" className="text-primary hover:underline inline-flex items-center mb-6">
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
            Retour aux actualités
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            L'avenir du travail : quelles formations anticiper dès aujourd'hui
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>29 janvier 2025</span>
            <span>•</span>
            <span>Transformation Digitale & IA</span>
            <span>•</span>
            <span>Temps de lecture : 30 min</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Le monde du travail évolue rapidement : intelligence artificielle, automatisation, télétravail généralisé, économie de la connaissance... Ces transformations modifient profondément les compétences nécessaires et les chemins de carrière.
          </p>
          <p>
            Anticiper ces évolutions via la formation n'est plus optionnel : c'est une nécessité stratégique pour maintenir la compétitivité et protéger l'employabilité.
          </p>
          <p>
            Cet article explore les tendances de l'avenir du travail et les formations à anticiper dès maintenant pour préparer vos équipes et votre entreprise aux défis de demain.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Eye className="h-8 w-8 mr-3 text-primary" />
            1. Les tendances qui transforment le travail
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Automatisation, IA généralisée, économie de la connaissance, quête de sens, durabilité. Ces tendances redéfinissent les compétences nécessaires.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Automatisation et IA</h3>
            <p>
              L'IA et l'automatisation transforment les métiers : compétences digitales et collaboration avec l'IA deviennent essentielles.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Économie de la connaissance</h3>
            <p>
              La valeur se crée dans l'innovation, la créativité, l'expertise : formation continue devient permanente.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Quête de sens et durabilité</h3>
            <p>
              Les talents recherchent du sens : RSE, durabilité, impact positif deviennent attractifs.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Users className="h-8 w-8 mr-3 text-primary" />
            2. Les compétences transversales de demain
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Littératie numérique, adaptabilité, créativité, intelligence émotionnelle, résolution de problèmes complexes. Ces compétences transversales deviennent universelles.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Digital literacy</h3>
            <p>
              Maîtrise du digital devient aussi basique que lecture-écriture : formation continue essentielle.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Adaptabilité et résilience</h3>
            <p>
              Compétences humaines critiques face aux changements rapides : formation comportementale clé.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <TrendingUp className="h-8 w-8 mr-3 text-primary" />
            3. Anticiper via la formation
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Investissez massivement dans les compétences transversales et digitales dès maintenant : anticipation = compétitivité durable.
            </p>
          </div>
        </section>

        <section className="mb-12 bg-silver-light border border-silver-medium rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">
            Conclusion : former pour l'avenir
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Anticiper l'avenir du travail via la formation prépare vos équipes aux défis de demain : investissez dès maintenant dans les compétences transversales et digitales.
            </p>
            <p className="text-lg font-semibold mb-4">
              Formez aujourd'hui pour compétiter demain : l'avenir du travail se prépare par la formation anticipée.
            </p>
          </div>
        </section>

        <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">
            Prêt à former pour l'avenir du travail ?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            IA Center propose des formations certifiées Qualiopi prospectives pour préparer vos équipes aux compétences de demain.
          </p>
          <Link 
            to="/formations-professionnels"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Découvrir nos formations professionnelles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </section>

        <div className="mt-12 pt-8 border-t border-silver-medium">
          <p className="text-sm text-muted-foreground mb-4">Suggestions de lecture</p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/actualites" className="p-4 border border-silver-medium rounded-lg hover:bg-silver-light transition-colors">
              <span className="text-sm text-muted-foreground">Prochain article</span>
              <p className="font-semibold mt-2">Pourquoi la culture digitale doit devenir une priorité d'entreprise</p>
            </Link>
            <Link to="/blog/formation-digitale-vs-presentielle-format-equipes" className="p-4 border border-silver-medium rounded-lg hover:bg-silver-light transition-colors">
              <span className="text-sm text-muted-foreground">Article précédent</span>
              <p className="font-semibold mt-2">Formation digitale vs présentielle : quel format pour vos équipes ?</p>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Article19;

