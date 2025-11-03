import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import { HeartHandshake, Users, TrendingUp, CheckCircle, Award, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Article30 = () => {
  const seoData = {
    title: "Formation bien-être travail duo gagnant: performance qualité vie 2025",
    description: "Formation et bien-être au travail : un duo gagnant pour 2025. Qualité vie travail, performance bien-être, formation QVT, employeur bienveillant. Guide RH PME.",
    keywords: "formation bien-être travail, QVT qualité vie travail, bien-être salariés, performance bien-être, formation qualité vie, employeur bienveillant, QVT 2025",
    canonicalUrl: "https://iacenter.fr/blog/formation-bien-etre-travail-duo-gagnant-2025",
    ogImage: "https://iacenter.fr/favicon.png",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Formation et bien-être au travail : un duo gagnant pour 2025",
      "description": "Guide sur l'importance d'allier formation et bien-être au travail pour la performance et la qualité de vie.",
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
      "mainEntityOfPage": "https://iacenter.fr/blog/formation-bien-etre-travail-duo-gagnant-2025",
      "keywords": "bien-être travail, qualité vie travail, formation"
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
            Formation et bien-être au travail : un duo gagnant pour 2025
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
            La recherche d'équilibre entre vie professionnelle et personnelle devient centrale pour les talents. Le bien-être au travail n'est plus optionnel : c'est un levier stratégique de performance et de fidélisation.
          </p>
          <p>
            La formation professionnelle et le bien-être au travail forment un duo puissant : formation améliore performance et confiance, bien-être préserve énergie et engagement. Allier les deux développe l'entreprise durablement.
          </p>
          <p>
            Cet article explore comment combiner formation et bien-être au travail pour créer un environnement professionnel épanouissant et performant en 2025.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <HeartHandshake className="h-8 w-8 mr-3 text-primary" />
            1. Formation et performance : mécanisme de bien-être
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              La formation professionnelle génère bien-être via sentiment compétence, confiance accrue, progression visible, reconnaissance valeur. Ces mécanismes préservent engagement et énergie.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Le sentiment de compétence</h3>
            <p>
              Maîtriser ses missions développe confiance et réduit stress. Formation = compétence accrue = bien-être amélioré.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">La reconnaissance et valorisation</h3>
            <p>
              Former = investir dans votre avenir = reconnaissance valeur. Cette valorisation améliore satisfaction et motivation.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Users className="h-8 w-8 mr-3 text-primary" />
            2. Bien-être et performance : cercle vertueux
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Bien-être au travail génère performance : énergie préservée, motivation maintenue, erreurs réduites, productivité accrue. Cette corrélation renforce efficacité collective.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Prévention des risques psychosociaux</h3>
            <p>
              Formation prévient burn-out, désengagement, anxiété via compétences et confiance. Cette prévention protège santé mentale.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Amélioration de la productivité</h3>
            <p>
              Bien-être + formation = productivité maximale. Collaboratrices épanouies et compétentes délivrent performance optimale.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <TrendingUp className="h-8 w-8 mr-3 text-primary" />
            3. Allier formation et bien-être : stratégie intégrée
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Combinez formation et QVT via formations bien-être, organisation flexible, reconnaissance progrès. Cette intégration crée environnement épanouissant.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Formations au bien-être</h3>
            <p>
              Formez gestion stress, équilibre vie pro/perso, communication bienveillante. Ces formations préservent bien-être.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Organisation du travail favorable</h3>
            <p>
              Flexibilité horaires, autonomie accrue, feedback réguliers. Cette organisation préserve énergie et motivation.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <CheckCircle className="h-8 w-8 mr-3 text-primary" />
            4. Mesurer l'impact formation + bien-être
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Mesurez satisfaction, taux absentéisme, turnover, productivité, engagement. Ces indicateurs valident efficacité duo formation + bien-être.
            </p>
          </div>
        </section>

        <section className="mb-12 bg-silver-light border border-silver-medium rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">
            Conclusion : formation + bien-être = performance durable
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Allier formation et bien-être crée performance durable : développez compétences ET préservez bien-être pour excellence organisationnelle.
            </p>
            <p className="text-lg font-semibold mb-4">
              Faites de la formation et du bien-être un duo stratégique : c'est la clé de la performance durable en 2025.
            </p>
          </div>
        </section>

        <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">
            Prêt à allier formation et bien-être au travail ?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            IA Center propose des formations certifiées Qualiopi alliant développement des compétences et préservation du bien-être au travail.
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
              <p className="font-semibold mt-2">D'autres articles sur la formation et l'entreprise</p>
            </Link>
            <Link to="/blog/accompagner-reconversion-interne-salaries" className="p-4 border border-silver-medium rounded-lg hover:bg-silver-light transition-colors">
              <span className="text-sm text-muted-foreground">Article précédent</span>
              <p className="font-semibold mt-2">Comment accompagner la reconversion interne de vos salariés</p>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Article30;

