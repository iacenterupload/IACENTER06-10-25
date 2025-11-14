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
      "datePublished": "2025-07-30",
      "dateModified": "2025-07-30",
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
            <span>30 juillet 2025</span>
            <span>•</span>
            <span>Management & Performance</span>
            <span>•</span>
            <span>Temps de lecture : 30 min</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Dans un monde du travail de plus en plus complexe et incertain, les compétences techniques seules ne suffisent plus. Les soft skills (compétences comportementales) deviennent progressivement aussi importantes que les compétences techniques, voire plus dans certains contextes. Ces compétences conditionnent la performance individuelle et collective, la collaboration, l'adaptabilité, et la capacité à naviguer dans l'incertitude.
          </p>
          <p>
            Cette évolution s'explique par plusieurs facteurs : l'automatisation réduit le besoin de compétences techniques répétitives, la complexité croissante nécessite des compétences relationnelles et d'adaptation, et les équipes recherchent davantage de sens et de bien-être. Dans ce contexte, les soft skills deviennent des différenciateurs majeurs.
          </p>
          <p>
            Cet article identifie les soft skills prioritaires à développer dans votre entreprise dès maintenant pour améliorer la collaboration, l'adaptabilité, et la performance globale. Vous découvrirez pourquoi l'intelligence émotionnelle devient critique, comment la communication et la collaboration transforment les équipes, pourquoi l'adaptabilité et la résilience sont essentielles, et comment la résolution de problèmes complexes crée de la valeur.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Heart className="h-8 w-8 mr-3 text-primary" />
            1. Intelligence émotionnelle et empathie : l'humain au cœur de la performance
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              L'intelligence émotionnelle devient progressivement aussi importante que l'intelligence cognitive dans le monde du travail moderne. Cette capacité à comprendre et gérer ses émotions et celles des autres, à écouter activement, et à adapter sa communication selon le contexte renforce considérablement les relations et la collaboration. Ces compétences deviennent essentielles dans un contexte où les équipes recherchent du sens, de la reconnaissance, et du bien-être.
            </p>
            <p>
              L'empathie managériale et relationnelle permet de mieux comprendre les besoins, les préoccupations, et les motivations de chacun. Cette compréhension facilite la collaboration, réduit les conflits, et améliore la performance collective. Dans un monde où les tâches techniques sont automatisées, ces compétences humaines deviennent les différenciateurs majeurs.
            </p>
            <p>
              Formation à développer : développement de l'intelligence émotionnelle, techniques d'écoute active, communication adaptative, gestion des émotions, empathie relationnelle. Ces formations transforment les interactions et améliorent la performance collective.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Users className="h-8 w-8 mr-3 text-primary" />
            2. Communication et collaboration : travailler ensemble efficacement
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              La communication claire et la collaboration efficace deviennent essentielles dans un monde du travail de plus en plus interconnecté et complexe. Communiquer clairement (messages précis, feedback constructif, écoute active), collaborer efficacement (travail en équipe, partage de connaissances, co-construction), résoudre les conflits (gestion des tensions, recherche de consensus), et construire le consensus (décisions collectives, alignement) améliorent considérablement le fonctionnement d'équipe.
            </p>
            <p>
              Ces compétences sont particulièrement précieuses dans un contexte de télétravail et de collaboration à distance : elles compensent l'absence de présence physique et maintiennent la cohésion malgré la distance. La qualité de la communication et de la collaboration devient un facteur clé de performance.
            </p>
            <p>
              Formation à développer : communication interpersonnelle, techniques de collaboration, résolution de conflits, construction de consensus, travail en équipe. Ces formations transforment les dynamiques d'équipe et améliorent la performance collective.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <TrendingUp className="h-8 w-8 mr-3 text-primary" />
            3. Adaptabilité et résilience : naviguer dans l'incertitude
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              L'adaptabilité et la résilience deviennent essentielles dans un monde du travail en mutation permanente : s'adapter rapidement aux changements, gérer l'incertitude sans stress excessif, rebondir après les échecs, et maintenir sa performance dans l'adversité. Ces compétences permettent la performance dans des contextes complexes et incertains.
            </p>
            <p>
              Ces compétences sont particulièrement précieuses dans un contexte de transformation digitale, d'évolution des métiers, et d'incertitude économique : elles permettent de naviguer efficacement dans ces changements sans perdre en performance ou en bien-être. L'adaptabilité et la résilience deviennent des avantages concurrentiels majeurs.
            </p>
            <p>
              Formation à développer : gestion du changement, développement de la résilience, techniques d'adaptation rapide, gestion de l'incertitude, stress management. Ces formations renforcent la capacité à faire face aux défis et maintiennent la performance dans l'adversité.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <CheckCircle className="h-8 w-8 mr-3 text-primary" />
            4. Résolution de problèmes complexes : créer de la valeur
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              La capacité à résoudre des problèmes complexes devient progressivement la compétence la plus valorisée : analyser des situations complexes (pensée systémique, analyse approfondie), identifier des solutions créatives (innovation, pensée latérale), et décider efficacement (jugement, prise de risque calculée). Ces compétences augmentent considérablement la valeur ajoutée individuelle et collective.
            </p>
            <p>
              Dans un monde où les problèmes simples sont automatisés, la capacité à résoudre des problèmes complexes devient le différenciateur majeur. Cette compétence nécessite une pensée systémique, une capacité d'analyse approfondie, et une approche créative. Elle devient progressivement la compétence la plus recherchée et la plus valorisée.
            </p>
            <p>
              Formation à développer : pensée systémique, méthodes de résolution de problèmes complexes, techniques créatives, prise de décision en contexte complexe, analyse approfondie. Ces formations développent la capacité à créer de la valeur dans des contextes complexes.
            </p>
          </div>
        </section>

        <section className="mb-12 bg-silver-light border border-silver-medium rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">
            Conclusion : investir massivement dans les soft skills
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Les soft skills deviennent progressivement aussi critiques que les compétences techniques, voire plus dans certains contextes : elles conditionnent la performance individuelle et collective, la collaboration, l'adaptabilité, et la capacité à créer de la valeur dans des contextes complexes. Investir dans leur développement via des formations comportementales ciblées est essentiel pour maintenir la compétitivité et la performance.
            </p>
            <p>
              Cette investissement en soft skills est l'un des plus rentables : il améliore la performance, renforce la collaboration, réduit les conflits, et améliore le bien-être. Les entreprises qui développent les soft skills de leurs équipes obtiennent des résultats significativement supérieurs.
            </p>
            <p className="text-lg font-semibold mb-4">
              Développez les soft skills de vos équipes dès maintenant : elles conditionnent la performance de demain. Investissez dans l'intelligence émotionnelle, la communication, l'adaptabilité, et la résolution de problèmes complexes. Ces compétences sont l'investissement formation le plus sûr pour l'avenir.
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

