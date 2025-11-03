import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import { BookOpen, Users, TrendingUp, CheckCircle, AlertTriangle, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Article25 = () => {
  const seoData = {
    title: "Culture apprentissage continu équipe: formation permanente entreprise",
    description: "Comment instaurer une culture d'apprentissage continu dans votre équipe. Formation permanente, culture apprentissage, développement continu. Guide PME 2025.",
    keywords: "culture apprentissage, formation permanente, apprentissage continu, culture formation, développement continu, learning culture, formation continue entreprise",
    canonicalUrl: "https://iacenter.fr/blog/culture-apprentissage-continu-equipe",
    ogImage: "https://iacenter.fr/favicon.png",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Comment instaurer une culture d'apprentissage continu dans votre équipe",
      "description": "Guide pour créer et maintenir une culture d'apprentissage continu dans votre entreprise.",
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
      "mainEntityOfPage": "https://iacenter.fr/blog/culture-apprentissage-continu-equipe",
      "keywords": "apprentissage continu, culture formation, développement"
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
            Comment instaurer une culture d'apprentissage continu dans votre équipe
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
            Dans un monde du travail en évolution constante, l'apprentissage ne peut plus être ponctuel : il doit devenir continu et intégré à la culture d'entreprise. Instaurer cette culture d'apprentissage continu transforme votre entreprise en organisation apprenante et performante.
          </p>
          <p>
            Cet article vous guide dans la construction d'une culture d'apprentissage continu qui développe durablement les compétences de vos équipes et améliore votre compétitivité.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <BookOpen className="h-8 w-8 mr-3 text-primary" />
            1. Leadership et exemplarité
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Le dirigeant doit montrer l'exemple : formez-vous régulièrement, valorisez l'apprentissage, communiquez sur vos formations. Cette exemplarité crée la norme culturelle.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Users className="h-8 w-8 mr-3 text-primary" />
            2. Intégrer l'apprentissage au quotidien
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Créez des rituels d'apprentissage : veille partagée, partage connaissances, formations courtes régulières, moments d'échange. Cette intégration normalise apprentissage.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <TrendingUp className="h-8 w-8 mr-3 text-primary" />
            3. Valoriser et reconnaître
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Célébrez les apprentissages, reconnaissez effort et progression, intégraz formation dans évaluations. Cette valorisation motive et entretient culture.
            </p>
          </div>
        </section>

        <section className="mb-12 bg-silver-light border border-silver-medium rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">
            Conclusion : créer une culture apprenante
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              La culture d'apprentissage continu transforme votre entreprise : leadership exemplaire, intégration quotidienne, valorisation permanente créent organisation apprenante.
            </p>
            <p className="text-lg font-semibold mb-4">
              Instaurez dès maintenant une culture d'apprentissage continu : votre compétitivité future en dépend.
            </p>
          </div>
        </section>

        <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">
            Prêt à créer une culture d'apprentissage continu ?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            IA Center accompagne les entreprises dans la construction d'une culture d'apprentissage via formations certifiées Qualiopi et accompagnement stratégique.
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
              <p className="font-semibold mt-2">La formation, moteur de la cohésion d'équipe et de l'innovation</p>
            </Link>
            <Link to="/blog/soft-skills-developper-entreprise-maintenant" className="p-4 border border-silver-medium rounded-lg hover:bg-silver-light transition-colors">
              <span className="text-sm text-muted-foreground">Article précédent</span>
              <p className="font-semibold mt-2">Les soft skills à développer dans votre entreprise dès maintenant</p>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Article25;

