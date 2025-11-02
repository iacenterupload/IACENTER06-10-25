import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import { Users, TrendingUp, CheckCircle, Target, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Article26 = () => {
  const seoData = {
    title: "Formation moteur cohesion équipe innovation: performance collective",
    description: "La formation, moteur de la cohésion d'équipe et de l'innovation. Formation cohésion équipe, innovation, performance collective. Guide PME 2025.",
    keywords: "formation cohésion équipe, innovation formation, performance collective, formation équipe, cohésion, innovation entreprise, dynamique équipe",
    canonicalUrl: "https://iacenter.fr/blog/formation-moteur-cohesion-equipe-innovation",
    ogImage: "https://iacenter.fr/favicon.png",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "La formation, moteur de la cohésion d'équipe et de l'innovation",
      "description": "Guide sur le rôle de la formation dans la cohésion d'équipe et l'innovation.",
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
      "mainEntityOfPage": "https://iacenter.fr/blog/formation-moteur-cohesion-equipe-innovation",
      "keywords": "formation, cohésion, innovation"
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
            La formation, moteur de la cohésion d'équipe et de l'innovation
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
            La formation professionnelle dépasse le développement individuel : elle constitue un formidable outil de cohésion d'équipe et de stimulation de l'innovation collective.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Users className="h-8 w-8 mr-3 text-primary" />
            1. Formation et cohésion d'équipe
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Formations communes créent moments partagés, culture commune, compréhension mutuelle. Ces moments renforcent cohésion et confiance.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <TrendingUp className="h-8 w-8 mr-3 text-primary" />
            2. Formation et innovation
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Nouvelles compétences, connaissances croisées, possibilité expérimentation. Ces leviers stimulent innovation et créativité.
            </p>
          </div>
        </section>

        <section className="mb-12 bg-silver-light border border-silver-medium rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">
            Conclusion : former pour unir et innover
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              La formation développe individus, renforce équipes et stimule innovation. Investissez massivement pour cohésion et performance.
            </p>
            <p className="text-lg font-semibold mb-4">
              Faites de la formation un moteur de cohésion et d'innovation dans votre entreprise.
            </p>
          </div>
        </section>

        <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">
            Prêt à renforcer la cohésion et l'innovation via la formation ?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            IA Center propose des formations certifiées Qualiopi conçues pour renforcer la cohésion d'équipe et stimuler l'innovation.
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
              <p className="font-semibold mt-2">Pourquoi la formation est un avantage concurrentiel pour recruter</p>
            </Link>
            <Link to="/blog/culture-apprentissage-continu-equipe" className="p-4 border border-silver-medium rounded-lg hover:bg-silver-light transition-colors">
              <span className="text-sm text-muted-foreground">Article précédent</span>
              <p className="font-semibold mt-2">Comment instaurer une culture d'apprentissage continu dans votre équipe</p>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Article26;

