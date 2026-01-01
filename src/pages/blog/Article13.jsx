import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import { Cpu, TrendingUp, CheckCircle, Users, AlertTriangle, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Article13 = () => {
  const seoData = {
    title: "Compétences digitales indispensables 2025: skills numériques PME",
    description: "Les compétences digitales indispensables à développer en 2025. Digital literacy, IA, data analytics, collaboration hybride. Guide compétences modernes pour entreprises PME.",
    keywords: "compétences digitales, skills numériques 2025, digital literacy, compétences indispensables, compétences modernes, maîtrise digitale, littératie numérique, compétences digitales PME",
    canonicalUrl: "https://iacenter.fr/blog/competences-digitales-indispensables-2025",
    ogImage: "https://iacenter.fr/favicon.png",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Les compétences digitales indispensables à développer en 2025",
      "description": "Guide complet sur les compétences digitales essentielles à développer pour rester compétitif en 2025.",
      "image": "https://iacenter.fr/favicon.png",
      "articleSection": "Compétences digitales",
      "keywords": "compétences digitales, digital literacy, compétences modernes",
      "author": {
        "@type": "Person",
        "name": "Wissam Haddad",
        "jobTitle": "Directeur Conseil Digital",
        "worksFor": {
          "@type": "EducationalOrganization",
          "name": "IA Center",
          "url": "https://iacenter.fr"
        }
      },
      "publisher": {
        "@type": "EducationalOrganization",
        "name": "IA Center",
        "url": "https://iacenter.fr",
        "logo": {
          "@type": "ImageObject",
          "url": "https://iacenter.fr/favicon.png"
        }
      },
      "datePublished": "2025-04-11",
      "dateModified": "2025-04-11",
      "mainEntityOfPage": "https://iacenter.fr/blog/competences-digitales-indispensables-2025",
      "url": "https://iacenter.fr/blog/competences-digitales-indispensables-2025",
      "about": ["Compétences digitales", "Digital literacy", "Compétences modernes", "Formation digitale", "PME"]
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
            Les compétences digitales indispensables à développer en 2025
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>11 avril 2025</span>
            <span>•</span>
            <span>Transformation Digitale & IA</span>
            <span>•</span>
            <span>Temps de lecture : 25 min</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Selon une étude récente, <strong>87% des postes nécessitent désormais des compétences digitales</strong>, et 64% des entreprises déclarent que le manque de compétences digitales limite leur croissance. En 2025, la maîtrise du digital n'est plus un avantage concurrentiel : c'est une compétence de base, aussi essentielle que la lecture ou l'écriture.
          </p>
          <p>
            Pourtant, <strong>seulement 42% des professionnels français estiment maîtriser les compétences digitales nécessaires</strong> à leur poste. Face à un paysage technologique en évolution permanente, quelles sont les compétences digitales réellement indispensables ? Lesquelles créeront de la valeur immédiate ? Lesquelles préparent l'avenir ? Identifier les bonnes priorités conditionne le succès de votre stratégie de montée en compétences.
          </p>
          <p>
            Cet article dresse un panorama des <strong>compétences digitales essentielles à développer en 2025</strong>. Vous découvrirez les skills transversaux devenus incontournables (avec des données de pénurie), les compétences émergentes à anticiper (tendances mesurées), et comment prioriser vos investissements formation (matrice de décision) pour maximiser l'impact sur votre compétitivité.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Cpu className="h-8 w-8 mr-3 text-primary" />
            1. La littératie numérique : la base incontournable
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              La littératie numérique (digital literacy) est la capacité de base à utiliser, comprendre et créer du contenu grâce aux technologies numériques. Cette compétence fondamentale devient aussi essentielle que savoir lire et écrire dans l'économie moderne.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Maîtriser les outils bureautiques modernes</h3>
            <p>
              Au-delà des bases Word/Excel, maîtrisez les suites collaboratives (Office 365, Google Workspace), les fonctions avancées, l'automatisation basique, le partage et collaboration en temps réel. Ces compétences accélèrent les process et améliorent la productivité.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Naviguer dans l'écosystème numérique</h3>
            <p>
              Comprenez l'architecture des systèmes digitaux : cloud, stockage, sécurité de base, authentification, gestion des mots de passe. Cette compréhension limite les risques et améliore l'autonomie.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Créer et publier du contenu digital</h3>
            <p>
              Maîtrisez la création de contenus numériques : documents professionnels, présentations, contenus visuels basiques, publication sur plateformes. Cette compétence est essentielle pour la communication interne et externe.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <TrendingUp className="h-8 w-8 mr-3 text-primary" />
            2. Les bases de l'intelligence artificielle
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              L'IA devient omniprésente dans les outils professionnels. Comprendre ses bases et l'utiliser efficacement devient une compétence critique pour rester compétitif.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Comprendre les concepts de base de l'IA</h3>
            <p>
              Maîtrisez les concepts essentiels : machine learning, automatisation, chatbots, IA générative. Cette compréhension permet d'identifier les opportunités d'application dans votre activité.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Utiliser des outils IA intégrés</h3>
            <p>
              Apprenez à exploiter les fonctionnalités IA dans vos outils quotidiens : suggestions automatiques, automatisation des tâches, assistants intelligents, génération de contenu. Cette utilisation pratique accroît immédiatement la productivité.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Évaluer et choisir des solutions IA</h3>
            <p>
              Développez la capacité à évaluer des solutions IA pour votre entreprise : avantages, limites, coûts, intégration. Cette compétence guide vos investissements technologiques.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <CheckCircle className="h-8 w-8 mr-3 text-primary" />
            3. La data literacy : comprendre et utiliser les données
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Les données deviennent l'or noir de l'économie moderne. La capacité à comprendre, analyser et exploiter les données est une compétence de plus en plus précieuse.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Comprendre les bases des données</h3>
            <p>
              Maîtrisez les concepts essentiels : types de données, bases de données, métriques et KPIs, visualisation. Cette compréhension facilite l'exploitation des informations.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Analyser et interpréter des données simples</h3>
            <p>
              Développez la capacité à analyser des données : tableaux croisés Excel, graphiques de base, identification de tendances, formulation de conclusions. Cette analyse guide les décisions.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Prendre des décisions data-driven</h3>
            <p>
              Apprenez à baser vos décisions sur des données plutôt que sur l'intuition : collecte d'informations, analyse, validation, action. Cette approche améliore la qualité des décisions.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Users className="h-8 w-8 mr-3 text-primary" />
            4. La collaboration hybride et distante
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Le travail hybride et distant devient la norme. Maîtriser les outils et méthodes de collaboration digitale est désormais essentiel.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Maîtriser les outils collaboratifs</h3>
            <p>
              Formez-vous aux plateformes collaboratives : Teams, Slack, Trello, Notion, partage de fichiers cloud, co-édition en temps réel. Ces outils facilitent le travail en équipe.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Optimiser la communication asynchrone</h3>
            <p>
              Apprenez à communiquer efficacement à distance : messages structurés, documentation claire, reporting régulier, coordination sans présentiel. Cette communication assure la cohésion d'équipe.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <AlertTriangle className="h-8 w-8 mr-3 text-primary" />
            5. La cybersécurité de base
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Les menaces cyber augmentent. Chaque collaborateur doit maîtriser les bases de la cybersécurité pour protéger l'entreprise.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Bonnes pratiques de sécurité</h3>
            <p>
              Maîtrisez les réflexes essentiels : mots de passe robustes, authentification à deux facteurs, reconnaissance des emails suspects, sauvegarde régulière, mise à jour des logiciels.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Target className="h-8 w-8 mr-3 text-primary" />
            6. Prioriser vos investissements en formation digital
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Concentrez vos investissements formation sur les compétences digitales les plus impactantes pour votre activité : analysez vos besoins, priorisez par urgence et impact, formez progressivement.
            </p>
          </div>
        </section>

        <section className="mb-12 bg-silver-light border border-silver-medium rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">
            Conclusion : développer les compétences digitales essentielles
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Les compétences digitales deviennent progressivement aussi essentielles que les compétences de base. En développant la littératie numérique, les bases de l'IA, la data literacy, la collaboration hybride, et la cybersécurité, vous positionnez votre entreprise pour la compétitivité durable.
            </p>
            <p className="text-lg font-semibold mb-4">
              Investissez dans les compétences digitales essentielles dès maintenant : l'avenir de votre entreprise se joue dans la maîtrise du digital.
            </p>
          </div>
        </section>

        <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">
            Prêt à développer les compétences digitales de vos équipes ?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            IA Center propose des formations certifiées Qualiopi aux compétences digitales essentielles pour moderniser votre entreprise.
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
              <p className="font-semibold mt-2">Intelligence artificielle : comment former ses équipes pour ne pas décrocher</p>
            </Link>
            <Link to="/blog/formation-cle-transformation-digitale-reussie" className="p-4 border border-silver-medium rounded-lg hover:bg-silver-light transition-colors">
              <span className="text-sm text-muted-foreground">Article précédent</span>
              <p className="font-semibold mt-2">Pourquoi la formation est la clé d'une transformation digitale réussie</p>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Article13;

