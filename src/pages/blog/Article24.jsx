import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import { Heart, Users, TrendingUp, CheckCircle, AlertTriangle, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Article24 = () => {
  const seoData = {
    title: "Soft skills développer entreprise: compétences comportementales 2025",
    description: "Les soft skills à développer dans votre entreprise dès maintenant. Compétences comportementales, intelligence émotionnelle, collaboration. Guide PME 2025.",
    keywords: "soft skills, compétences comportementales, intelligence émotionnelle, collaboration, communication, résolution problèmes, créativité, agilité",
    canonicalUrl: "https://iacenter.fr/blog/soft-skills-developper-entreprise-maintenant",
    ogImage: "https://iacenter.fr/favicon.png",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Les soft skills à développer dans votre entreprise dès maintenant",
      "description": "Guide sur les compétences comportementales essentielles à développer dans votre entreprise.",
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
      "mainEntityOfPage": "https://iacenter.fr/blog/soft-skills-developper-entreprise-maintenant",
      "keywords": "soft skills, compétences comportementales, intelligence émotionnelle"
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
            Les soft skills à développer dans votre entreprise dès maintenant
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
            Dans un monde du travail de plus en plus complexe et incertain, les compétences techniques seules ne suffisent plus. Les soft skills (compétences comportementales) deviennent critiques pour la performance individuelle et collective.
          </p>
          <p>
            Cet article identifie les soft skills prioritaires à développer dans votre entreprise pour améliorer la collaboration, l'adaptabilité et la performance globale.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Heart className="h-8 w-8 mr-3 text-primary" />
            1. Intelligence émotionnelle et empathie
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Comprendre et gérer ses émotions et celles des autres, écouter activement, adapter sa communication. Ces compétences renforcent relations et collaboration.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Users className="h-8 w-8 mr-3 text-primary" />
            2. Communication et collaboration
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Communiquer clairement, collaborer efficacement, résoudre conflits, construire consensus. Ces compétences améliorent fonctionnement d'équipe.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <TrendingUp className="h-8 w-8 mr-3 text-primary" />
            3. Adaptabilité et résilience
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              S'adapter aux changements, gérer incertitudes, rebondir après échecs. Ces compétences permettent performance dans contextes complexes.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <CheckCircle className="h-8 w-8 mr-3 text-primary" />
            4. Résolution de problèmes complexes
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Analyser situations complexes, identifier solutions créatives, décider efficacement. Ces compétences augmentent valeur ajoutée.
            </p>
          </div>
        </section>

        <section className="mb-12 bg-silver-light border border-silver-medium rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">
            Conclusion : investir dans les soft skills
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Les soft skills deviennent aussi critiques que les compétences techniques : investissez dans leur développement via formations comportementales ciblées.
            </p>
            <p className="text-lg font-semibold mb-4">
              Développez les soft skills de vos équipes dès maintenant : elles conditionnent la performance de demain.
            </p>
          </div>
        </section>

        <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">
            Prêt à développer les soft skills de vos équipes ?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            IA Center propose des formations certifiées Qualiopi aux compétences comportementales pour améliorer la collaboration et la performance.
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
              <p className="font-semibold mt-2">Comment instaurer une culture d'apprentissage continu dans votre équipe</p>
            </Link>
            <Link to="/blog/former-deleguer-levier-productivite" className="p-4 border border-silver-medium rounded-lg hover:bg-silver-light transition-colors">
              <span className="text-sm text-muted-foreground">Article précédent</span>
              <p className="font-semibold mt-2">Former pour mieux déléguer : un levier de productivité souvent oublié</p>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Article24;

