import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import { RefreshCw, Users, TrendingUp, CheckCircle, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Article29 = () => {
  const seoData = {
    title: "Reconversion interne salariés: accompagner mobilité formation entreprise",
    description: "Comment accompagner la reconversion interne de vos salariés. Mobilité interne, reconversion professionnelle, fidélisation talents, formation reconversion. Guide RH PME.",
    keywords: "reconversion interne, mobilité interne, reconversion salarié, formation reconversion, fidélisation talents, évolution carrière, reconversion professionnelle",
    canonicalUrl: "https://iacenter.fr/blog/accompagner-reconversion-interne-salaries",
    ogImage: "https://iacenter.fr/favicon.png",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Comment accompagner la reconversion interne de vos salariés",
      "description": "Guide sur l'accompagnement de la reconversion interne pour fidéliser et développer vos talents.",
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
      "mainEntityOfPage": "https://iacenter.fr/blog/accompagner-reconversion-interne-salaries",
      "keywords": "reconversion, mobilité, fidélisation"
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
            Comment accompagner la reconversion interne de vos salariés
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
            La reconversion interne des salariés représente une opportunité stratégique : fidéliser talents, réorienter compétences, répondre besoins organisationnels. Accompagner ces reconversions développe l'entreprise et l'employé.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <RefreshCw className="h-8 w-8 mr-3 text-primary" />
            1. Reconversion interne : opportunité stratégique
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Conservez talents qui vous connaissent, adaptez compétences aux besoins, renforcez fidélisation. Cette approche gagnant-gagnant valorise tous.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Users className="h-8 w-8 mr-3 text-primary" />
            2. Accompagner la reconversion
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Diagnostic aspirations, formation intensive, accompagnement terrain, suivi personnalisé. Ce soutien garantit réussite reconversion.
            </p>
          </div>
        </section>

        <section className="mb-12 bg-silver-light border border-silver-medium rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">
            Conclusion : reconversion interne gagnante
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Accompagner reconversion interne fidélise talents et développe compétences. Investissez dans accompagnement pour succès gagnant-gagnant.
            </p>
            <p className="text-lg font-semibold mb-4">
              Accompagnez la reconversion interne de vos salariés : c'est une stratégie gagnante.
            </p>
          </div>
        </section>

        <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">
            Prêt à accompagner la reconversion interne ?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            IA Center propose des programmes certifiés Qualiopi pour accompagner la reconversion interne de vos salariés.
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
              <p className="font-semibold mt-2">Formation et bien-être au travail : un duo gagnant pour 2025</p>
            </Link>
            <Link to="/blog/former-managers-ere-ia-priorite-rh" className="p-4 border border-silver-medium rounded-lg hover:bg-silver-light transition-colors">
              <span className="text-sm text-muted-foreground">Article précédent</span>
              <p className="font-semibold mt-2">Former ses managers à l'ère de l'IA : nouvelle priorité RH ?</p>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Article29;

