import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import { UserPlus, Users, TrendingUp, CheckCircle, AlertTriangle, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Article22 = () => {
  const seoData = {
    title: "Faire évoluer collaborateurs sans démotiver: management développement",
    description: "Comment faire évoluer ses collaborateurs sans les démotiver. Management développement, évolution carrière, motivation équipes. Guide dirigeants PME 2025.",
    keywords: "faire évoluer collaborateurs, développement collaborateur, évolution carrière, motivation équipes, management développement, fidélisation talents, croissance collaborateurs",
    canonicalUrl: "https://iacenter.fr/blog/faire-evoluer-collaborateurs-sans-demotiver",
    ogImage: "https://iacenter.fr/favicon.png",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Comment faire évoluer ses collaborateurs sans les démotiver",
      "description": "Guide sur l'art de faire évoluer vos collaborateurs tout en préservant leur motivation et engagement.",
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
      "mainEntityOfPage": "https://iacenter.fr/blog/faire-evoluer-collaborateurs-sans-demotiver",
      "keywords": "développement collaborateur, évolution carrière, motivation"
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
            Comment faire évoluer ses collaborateurs sans les démotiver
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
            En tant que dirigeant, faire évoluer vos collaborateurs est essentiel pour maintenir leur engagement et améliorer la performance collective. Pourtant, mal géré, le changement peut démotiver, générer du stress, et provoquer des départs.
          </p>
          <p>
            Cet article vous guide dans l'art subtil de faire évoluer vos collaborateurs tout en préservant leur motivation et leur engagement.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <UserPlus className="h-8 w-8 mr-3 text-primary" />
            1. Comprendre les facteurs de motivation et démotivation
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              La motivation repose sur autonomie, maitrise, sens du travail. La démotivation vient du stress excessif, du sentiment d'incompétence, du manque de reconnaissance.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Ce qui motive</h3>
            <p>
              Autonomie accrue, développement compétences, reconnaissance, sens du travail, progression visible.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Ce qui démotiver</h3>
            <p>
              Stress excessif, sentiment d'incompétence, absence de reconnaissance, perte de sens, injonctions contradictoires.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Users className="h-8 w-8 mr-3 text-primary" />
            2. L'approche progressive et bienveillante
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Faites évoluer progressivement avec accompagnement, reconnaissance des acquis, espace d'apprentissage, communication transparente.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Progressivité</h3>
            <p>
              Petites étapes successives, pas de ruptures brutales, temps d'adaptation respecté. Cette progressivité sécurise.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Accompagnement</h3>
            <p>
              Formation, suivi régulier, disponibilité, valorisation progrès. Cet accompagnement facilite transition.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <CheckCircle className="h-8 w-8 mr-3 text-primary" />
            3. Valoriser et reconnaître
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Reconnaissez les efforts, célébrez les succès, communiquez positivement. Cette reconnaissance maintient motivation.
            </p>
          </div>
        </section>

        <section className="mb-12 bg-silver-light border border-silver-medium rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">
            Conclusion : faire évoluer sans démotiver
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Faire évoluer vos collaborateurs nécessite progressivité, accompagnement, reconnaissance. Cette approche bienveillante maintient motivation et engagement.
            </p>
            <p className="text-lg font-semibold mb-4">
              Investissez dans l'accompagnement pour faire évoluer vos collaborateurs sereinement et maintenir leur engagement.
            </p>
          </div>
        </section>

        <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">
            Prêt à faire évoluer vos collaborateurs positivement ?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            IA Center propose des formations certifiées Qualiopi au management développement pour faire évoluer vos équipes tout en préservant leur motivation.
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
              <p className="font-semibold mt-2">Former pour mieux déléguer : un levier de productivité souvent oublié</p>
            </Link>
            <Link to="/blog/manager-2025-nouvelles-competences" className="p-4 border border-silver-medium rounded-lg hover:bg-silver-light transition-colors">
              <span className="text-sm text-muted-foreground">Article précédent</span>
              <p className="font-semibold mt-2">Manager en 2025 : les nouvelles compétences à maîtriser</p>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Article22;

