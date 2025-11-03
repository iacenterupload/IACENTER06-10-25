import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import { Shield, Users, TrendingUp, CheckCircle, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Article28 = () => {
  const seoData = {
    title: "Former managers IA intelligence artificielle: priorité RH 2025",
    description: "Former ses managers à l'ère de l'IA : nouvelle priorité RH ? Management IA, compétences managers IA, formation managers. Guide RH PME 2025.",
    keywords: "former managers IA, management IA, compétences managers, formation managers, RH IA, management intelligence artificielle, managers 2025",
    canonicalUrl: "https://iacenter.fr/blog/former-managers-ere-ia-priorite-rh",
    ogImage: "https://iacenter.fr/favicon.png",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Former ses managers à l'ère de l'IA : nouvelle priorité RH ?",
      "description": "Guide sur l'importance de former vos managers à l'intelligence artificielle.",
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
      "mainEntityOfPage": "https://iacenter.fr/blog/former-managers-ere-ia-priorite-rh",
      "keywords": "formation managers, IA, management"
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
            Former ses managers à l'ère de l'IA : nouvelle priorité RH ?
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>29 janvier 2025</span>
            <span>•</span>
            <span>Management & Performance</span>
            <span>•</span>
            <span>Temps de lecture : 30 min</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            L'intelligence artificielle transforme le management : nouvelles façons de piloter, décisions data-driven, collaboration avec IA, automatisation process. Former vos managers à l'IA devient priorité RH absolue.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Shield className="h-8 w-8 mr-3 text-primary" />
            1. Pourquoi former les managers à l'IA ?
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Managers doivent comprendre IA, l'utiliser efficacement, accompagner équipes face à IA. Ces compétences conditionnent performance managériale.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Users className="h-8 w-8 mr-3 text-primary" />
            2. Les compétences IA managériales clés
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Comprendre IA, utiliser outils IA, piloter avec données, accompagner équipes transition IA. Ces compétences transforment management.
            </p>
          </div>
        </section>

        <section className="mb-12 bg-silver-light border border-silver-medium rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">
            Conclusion : former managers à l'IA
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Former managers à l'IA est priorité RH : investissez massivement pour compétitivité managériale.
            </p>
            <p className="text-lg font-semibold mb-4">
              Formez vos managers à l'IA dès maintenant : c'est la nouvelle priorité RH.
            </p>
          </div>
        </section>

        <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">
            Prêt à former vos managers à l'IA ?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            IA Center propose des formations certifiées Qualiopi pour former vos managers à l'intelligence artificielle et moderniser le management.
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
              <p className="font-semibold mt-2">Comment accompagner la reconversion interne de vos salariés</p>
            </Link>
            <Link to="/blog/formation-avantage-concurrentiel-recruter" className="p-4 border border-silver-medium rounded-lg hover:bg-silver-light transition-colors">
              <span className="text-sm text-muted-foreground">Article précédent</span>
              <p className="font-semibold mt-2">Pourquoi la formation est un avantage concurrentiel pour recruter</p>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Article28;

