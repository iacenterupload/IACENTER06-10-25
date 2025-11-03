import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import { Building, Users, TrendingUp, CheckCircle, AlertTriangle, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Article20 = () => {
  const seoData = {
    title: "Culture digitale priorité entreprise: transformation culture organisation",
    description: "Pourquoi la culture digitale doit devenir une priorité d'entreprise. Transformation culture organisation, digital culture, modernisation PME. Guide culture digitale.",
    keywords: "culture digitale, digital culture, transformation culture entreprise, culture organisation, modernisation culturelle, culture innovation, digital first, culture transformation",
    canonicalUrl: "https://iacenter.fr/blog/culture-digitale-priorite-entreprise",
    ogImage: "https://iacenter.fr/favicon.png",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Pourquoi la culture digitale doit devenir une priorité d'entreprise",
      "description": "Guide sur l'importance de développer une culture digitale dans votre entreprise.",
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
      "mainEntityOfPage": "https://iacenter.fr/blog/culture-digitale-priorite-entreprise",
      "keywords": "culture digitale, transformation culturelle, innovation"
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
            Pourquoi la culture digitale doit devenir une priorité d'entreprise
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
            Digitaliser votre entreprise ne se limite pas à déployer des outils : c'est transformer profondément la culture organisationnelle pour adopter une mentalité digital-first, innovante et orientée efficacité.
          </p>
          <p>
            La culture digitale devient progressivement aussi critique que les outils eux-mêmes : sans culture favorable, même les meilleurs outils restent inefficaces. Pourtant, de nombreuses entreprises négligent cette dimension culturelle dans leur transformation.
          </p>
          <p>
            Cet article explore l'importance d'une culture digitale forte et vous guide dans sa construction progressive au sein de votre entreprise.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Building className="h-8 w-8 mr-3 text-primary" />
            1. Qu'est-ce qu'une culture digitale ?
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              La culture digitale se caractérise par : innovation permanente, collaboration horizontale, agilité, data-driven decisions, expérimentation et tolérance à l'erreur, excellence client.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Les valeurs clés</h3>
            <p>
              Innovation, rapidité, flexibilité, transparence, orientation résultats. Ces valeurs guident les comportements et décisions.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Users className="h-8 w-8 mr-3 text-primary" />
            2. Pourquoi c'est essentiel
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              La culture digitale facilite l'adoption des outils, accélère l'innovation, attire les talents et améliore la compétitivité.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <TrendingUp className="h-8 w-8 mr-3 text-primary" />
            3. Comment construire une culture digitale
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Leadership digital fort, communication régulière, formation continue, valorisation des innovations, processus agiles.
            </p>
          </div>
        </section>

        <section className="mb-12 bg-silver-light border border-silver-medium rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">
            Conclusion : culture digitale prioritaire
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              La culture digitale est la base de toute transformation réussie : investissez dans son développement via leadership, communication, formation et innovation.
            </p>
            <p className="text-lg font-semibold mb-4">
              Faites de la culture digitale une priorité stratégique : elle conditionne le succès de votre transformation.
            </p>
          </div>
        </section>

        <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">
            Prêt à développer une culture digitale forte ?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            IA Center accompagne les entreprises dans le développement d'une culture digitale via des formations certifiées Qualiopi.
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
              <p className="font-semibold mt-2">Manager en 2025 : les nouvelles compétences à maîtriser</p>
            </Link>
            <Link to="/blog/avenir-travail-formations-anticiper" className="p-4 border border-silver-medium rounded-lg hover:bg-silver-light transition-colors">
              <span className="text-sm text-muted-foreground">Article précédent</span>
              <p className="font-semibold mt-2">L'avenir du travail : quelles formations anticiper dès aujourd'hui</p>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Article20;

