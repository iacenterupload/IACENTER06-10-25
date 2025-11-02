import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import { UserCheck, Users, TrendingUp, CheckCircle, AlertTriangle, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Article21 = () => {
  const seoData = {
    title: "Manager 2025 nouvelles compétences maîtriser leadership management",
    description: "Manager en 2025 : les nouvelles compétences à maîtriser. Leadership moderne, management agile, compétences manager futur. Guide management PME 2025.",
    keywords: "compétences manager 2025, leadership moderne, management agile, manager futur, nouvelles compétences management, management PME, leadership transformation",
    canonicalUrl: "https://iacenter.fr/blog/manager-2025-nouvelles-competences",
    ogImage: "https://iacenter.fr/favicon.png",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Manager en 2025 : les nouvelles compétences à maîtriser",
      "description": "Guide sur les compétences managériales essentielles à développer en 2025.",
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
      "mainEntityOfPage": "https://iacenter.fr/blog/manager-2025-nouvelles-competences",
      "keywords": "management, leadership, compétences manager"
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
            Manager en 2025 : les nouvelles compétences à maîtriser
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
            Le management évolue rapidement : travail hybride, quête de sens, digitalisation, IA, générations Y/Z... Ces transformations redéfinissent les compétences managériales nécessaires pour diriger efficacement en 2025.
          </p>
          <p>
            Les managers d'aujourd'hui doivent évoluer pour rester performants : nouvelles compétences relationnelles, méthodes de leadership modernes, maîtrise du digital, intelligence émotionnelle renforcée.
          </p>
          <p>
            Cet article explore les nouvelles compétences managériales essentielles à développer en 2025 pour diriger efficacement dans un monde du travail transformé.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <UserCheck className="h-8 w-8 mr-3 text-primary" />
            1. L'intelligence émotionnelle renforcée
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              L'intelligence émotionnelle devient critique : empathie, écoute active, gestion du stress collectif, bien-être équipes. Ces compétences relationnelles sont essentielles.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">L'empathie et l'écoute</h3>
            <p>
              Écouter activement, comprendre les émotions, adapter sa communication. Cette empathie renforce la confiance.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">La gestion du bien-être</h3>
            <p>
              Prévenir burn-out, reconnaître les signaux, promouvoir équilibre vie pro/perso. Cette attention améliora l'engagement.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Users className="h-8 w-8 mr-3 text-primary" />
            2. Le management hybride et distant
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Le travail hybride nécessite de nouvelles compétences : piloter à distance, maintenir cohésion, communication asynchrone, autonomie équipes.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Piloter des équipes à distance</h3>
            <p>
              Outils collaboratifs, réunions efficaces, suivi objectifs clairs. Ce pilotage assure performance malgré distance.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <TrendingUp className="h-8 w-8 mr-3 text-primary" />
            3. Le leadership collaboratif
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Leadership moderne : moins hiérarchique, plus collaboratif. Co-construire, déléguer, autonomiser, reconnaître contributions.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <CheckCircle className="h-8 w-8 mr-3 text-primary" />
            4. La digitalisation managériale
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Maîtriser outils digitaux pour manager : data analytics, KPIs, collaboration, automation. Ces compétences augmentent l'efficacité.
            </p>
          </div>
        </section>

        <section className="mb-12 bg-silver-light border border-silver-medium rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">
            Conclusion : manager en 2025
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Les compétences managériales évoluent : intelligence émotionnelle, management hybride, leadership collaboratif, digitalisation. Formez vos managers à ces nouvelles compétences.
            </p>
            <p className="text-lg font-semibold mb-4">
              Investissez dans la formation managériale moderne : le management performant se construit sur les compétences de 2025.
            </p>
          </div>
        </section>

        <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">
            Prêt à former vos managers aux compétences de 2025 ?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            IA Center propose des formations certifiées Qualiopi aux compétences managériales modernes pour diriger efficacement en 2025.
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
              <p className="font-semibold mt-2">Comment faire évoluer ses collaborateurs sans les démotiver</p>
            </Link>
            <Link to="/blog/culture-digitale-priorite-entreprise" className="p-4 border border-silver-medium rounded-lg hover:bg-silver-light transition-colors">
              <span className="text-sm text-muted-foreground">Article précédent</span>
              <p className="font-semibold mt-2">Pourquoi la culture digitale doit devenir une priorité d'entreprise</p>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Article21;

