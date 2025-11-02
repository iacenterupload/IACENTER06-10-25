import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { Newspaper, Calendar, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ActualitesPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 } },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const seoData = {
    title: "Actualités IA Center | News Formation IA | Innovation & Tendances",
    description: "Découvrez les dernières actualités IA Center : innovations en intelligence artificielle, tendances formation, actualités certification Qualiopi, événements et nouveautés. Centre formation IA France.",
    keywords: "actualités IA Center, news intelligence artificielle, tendances IA, innovation formation, actualités Qualiopi, événements formation IA, nouveautés IA, blog formation professionnelle, France",
    canonicalUrl: "https://iacenter.fr/actualites",
    ogImage: "https://iacenter.fr/favicon.png",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Actualités IA Center | News Formation IA",
      "description": "Découvrez les dernières actualités, innovations et tendances en intelligence artificielle et formation professionnelle avec IA Center.",
      "url": "https://iacenter.fr/actualites",
      "publisher": {
        "@type": "EducationalOrganization",
        "name": "IA Center",
        "description": "Centre de formation intelligence artificielle certifié Qualiopi"
      }
    }
  };
  useSEO(seoData);

  // Données d'actualités
  const actualites = [
    {
      date: "29 janvier 2025",
      category: "Management & Performance",
      title: "Formation et bien-être au travail : un duo gagnant pour 2025",
      excerpt: "Comment allier formation et bien-être au travail pour créer un environnement professionnel épanouissant et performant. Qualité de vie, performance durable.",
      link: "/blog/formation-bien-etre-travail-duo-gagnant-2025",
      readingTime: "30 min"
    },
    {
      date: "29 janvier 2025",
      category: "Management & Performance",
      title: "Comment accompagner la reconversion interne de vos salariés",
      excerpt: "Guide complet sur l'accompagnement de la reconversion interne pour fidéliser et développer vos talents. Mobilité, formation, stratégie gagnant-gagnant.",
      link: "/blog/accompagner-reconversion-interne-salaries",
      readingTime: "30 min"
    },
    {
      date: "29 janvier 2025",
      category: "Management & Performance",
      title: "Former ses managers à l'ère de l'IA : nouvelle priorité RH ?",
      excerpt: "Pourquoi former vos managers à l'intelligence artificielle est devenu une priorité RH absolue. Management IA, compétences modernes, transformation RH.",
      link: "/blog/former-managers-ere-ia-priorite-rh",
      readingTime: "30 min"
    },
    {
      date: "29 janvier 2025",
      category: "Management & Performance",
      title: "Pourquoi la formation est un avantage concurrentiel pour recruter",
      excerpt: "La formation professionnelle comme avantage concurrentiel dans la guerre des talents. Attractivité employeur, recrutement, différenciation.",
      link: "/blog/formation-avantage-concurrentiel-recruter",
      readingTime: "30 min"
    },
    {
      date: "29 janvier 2025",
      category: "Management & Performance",
      title: "La formation, moteur de la cohésion d'équipe et de l'innovation",
      excerpt: "Comment la formation professionnelle renforce la cohésion d'équipe et stimule l'innovation collective dans votre entreprise.",
      link: "/blog/formation-moteur-cohesion-equipe-innovation",
      readingTime: "30 min"
    },
    {
      date: "29 janvier 2025",
      category: "Management & Performance",
      title: "Comment instaurer une culture d'apprentissage continu dans votre équipe",
      excerpt: "Guide pour créer et maintenir une culture d'apprentissage continu qui développe durablement les compétences de vos équipes.",
      link: "/blog/culture-apprentissage-continu-equipe",
      readingTime: "30 min"
    },
    {
      date: "29 janvier 2025",
      category: "Management & Performance",
      title: "Les soft skills à développer dans votre entreprise dès maintenant",
      excerpt: "Guide sur les compétences comportementales essentielles à développer pour améliorer la collaboration, l'adaptabilité et la performance.",
      link: "/blog/soft-skills-developper-entreprise-maintenant",
      readingTime: "30 min"
    },
    {
      date: "29 janvier 2025",
      category: "Management & Performance",
      title: "Former pour mieux déléguer : un levier de productivité souvent oublié",
      excerpt: "Comment former vos collaborateurs pour pouvoir déléguer en confiance et libérer votre temps dirigeant. Productivité management.",
      link: "/blog/former-deleguer-levier-productivite",
      readingTime: "25 min"
    },
    {
      date: "29 janvier 2025",
      category: "Management & Performance",
      title: "Comment faire évoluer ses collaborateurs sans les démotiver",
      excerpt: "Guide sur l'art subtil de faire évoluer vos collaborateurs tout en préservant leur motivation et leur engagement.",
      link: "/blog/faire-evoluer-collaborateurs-sans-demotiver",
      readingTime: "30 min"
    },
    {
      date: "29 janvier 2025",
      category: "Management & Performance",
      title: "Manager en 2025 : les nouvelles compétences à maîtriser",
      excerpt: "Guide sur les compétences managériales essentielles à développer en 2025 pour diriger efficacement dans un monde transformé.",
      link: "/blog/manager-2025-nouvelles-competences",
      readingTime: "30 min"
    },
    {
      date: "29 janvier 2025",
      category: "Transformation Digitale & IA",
      title: "Pourquoi la culture digitale doit devenir une priorité d'entreprise",
      excerpt: "Guide sur l'importance de développer une culture digitale forte dans votre entreprise pour réussir votre transformation.",
      link: "/blog/culture-digitale-priorite-entreprise",
      readingTime: "30 min"
    },
    {
      date: "29 janvier 2025",
      category: "Transformation Digitale & IA",
      title: "L'avenir du travail : quelles formations anticiper dès aujourd'hui",
      excerpt: "Tendances de l'avenir du travail et formations à anticiper pour préparer vos équipes aux défis de demain.",
      link: "/blog/avenir-travail-formations-anticiper",
      readingTime: "30 min"
    },
    {
      date: "29 janvier 2025",
      category: "Transformation Digitale & IA",
      title: "Formation digitale vs présentielle : quel format pour vos équipes ?",
      excerpt: "Comparatif objectif des différents formats de formation pour choisir celui adapté à vos équipes et contraintes.",
      link: "/blog/formation-digitale-vs-presentielle-format-equipes",
      readingTime: "30 min"
    },
    {
      date: "29 janvier 2025",
      category: "Transformation Digitale & IA",
      title: "Les freins à la digitalisation des PME (et comment les lever)",
      excerpt: "Cartographie complète des freins courants à la digitalisation et solutions concrètes pour les lever efficacement.",
      link: "/blog/freins-digitalisation-pme-comment-lever",
      readingTime: "25 min"
    },
    {
      date: "29 janvier 2025",
      category: "Transformation Digitale & IA",
      title: "Automatisation et productivité : quelles compétences développer en interne ?",
      excerpt: "Guide sur les compétences d'automatisation essentielles à développer pour améliorer votre productivité.",
      link: "/blog/automatisation-productivite-competences-interne",
      readingTime: "30 min"
    },
    {
      date: "29 janvier 2025",
      category: "Transformation Digitale & IA",
      title: "Comment accompagner ses salariés dans la digitalisation des process internes",
      excerpt: "Guide méthodologique pour accompagner efficacement vos équipes dans la digitalisation des processus internes.",
      link: "/blog/accompagner-digitalisation-process-internes",
      readingTime: "30 min"
    },
    {
      date: "29 janvier 2025",
      category: "Transformation Digitale & IA",
      title: "Intelligence artificielle : comment former ses équipes pour ne pas décrocher",
      excerpt: "Guide pour former vos équipes à l'IA et éviter le décrochage technologique. Compétences IA, adoption, performance.",
      link: "/blog/ia-former-equipes-eviter-dec-rochage",
      readingTime: "30 min"
    },
    {
      date: "29 janvier 2025",
      category: "Transformation Digitale & IA",
      title: "Les compétences digitales indispensables à développer en 2025",
      excerpt: "Panorama des compétences digitales essentielles pour rester compétitif : littératie numérique, IA, data analytics, collaboration hybride, cybersécurité.",
      link: "/blog/competences-digitales-indispensables-2025",
      readingTime: "25 min"
    },
    {
      date: "29 janvier 2025",
      category: "Transformation Digitale & IA",
      title: "Pourquoi la formation est la clé d'une transformation digitale réussie",
      excerpt: "Analyse stratégique de l'importance de la formation dans les transformations digitales. Adoption outils, réussite projet.",
      link: "/blog/formation-cle-transformation-digitale-reussie",
      readingTime: "30 min"
    },
    {
      date: "29 janvier 2025",
      category: "Transformation Digitale & IA",
      title: "Transformation digitale : par où commencer quand on est une PME ?",
      excerpt: "Guide pratique pour débuter la transformation digitale dans votre PME. Étapes concrètes, priorités, outils essentiels.",
      link: "/blog/transformation-digitale-ou-commencer-pme",
      readingTime: "30 min"
    },
    {
      date: "29 janvier 2025",
      category: "Formation & Entreprise",
      title: "Le rôle du dirigeant dans la montée en compétences de ses collaborateurs",
      excerpt: "Guide complet sur le rôle essentiel du dirigeant dans l'accompagnement et le développement des compétences. Leadership et pilotage.",
      link: "/blog/role-dirigeant-montee-competences-collaborateurs",
      readingTime: "30 min"
    },
    {
      date: "29 janvier 2025",
      category: "Formation & Entreprise",
      title: "Pourquoi les TPE ont tout à gagner à former leurs salariés",
      excerpt: "Les avantages spécifiques de la formation professionnelle pour les TPE. Financements, ROI démultiplié, compétitivité locale.",
      link: "/blog/pourquoi-tpe-gagner-former-salaries",
      readingTime: "25 min"
    },
    {
      date: "29 janvier 2025",
      category: "Formation & Entreprise",
      title: "Quelles formations proposer à ses équipes pour anticiper les évolutions du marché",
      excerpt: "Guide stratégique pour identifier les formations prioritaires et anticiper les mutations. Veille prospective, compétences futurs.",
      link: "/blog/quelles-formations-anticiper-evolutions-marche",
      readingTime: "30 min"
    },
    {
      date: "29 janvier 2025",
      category: "Formation & Entreprise",
      title: "Comment mesurer l'impact réel d'une formation en entreprise",
      excerpt: "Guide méthodologique complet pour mesurer l'impact réel des formations. Modèle Kirkpatrick, KPIs, calcul ROI.",
      link: "/blog/comment-mesurer-impact-formation-entreprise",
      readingTime: "30 min"
    },
    {
      date: "29 janvier 2025",
      category: "Formation & Entreprise",
      title: "Formation continue : obligation ou opportunité pour l'entreprise ?",
      excerpt: "Analyse des enjeux de la formation continue : entre obligation légale et opportunité stratégique.",
      link: "/blog/formation-continue-obligation-opportunite-entreprise",
      readingTime: "25 min"
    },
    {
      date: "29 janvier 2025",
      category: "Formation & Entreprise",
      title: "Les 5 erreurs fréquentes des dirigeants face à la formation professionnelle",
      excerpt: "Évitez les pièges courants en formation professionnelle : identifier et corriger les erreurs qui réduisent l'efficacité.",
      link: "/blog/5-erreurs-frequentes-dirigeants-formation-professionnelle",
      readingTime: "30 min"
    },
    {
      date: "29 janvier 2025",
      category: "Formation & Entreprise",
      title: "Former ses salariés : un levier de fidélisation et de performance",
      excerpt: "Comment la formation professionnelle devient un levier puissant de fidélisation et de performance. Turnover, engagement.",
      link: "/blog/former-salaries-levier-fidelisation-performance",
      readingTime: "30 min"
    },
    {
      date: "29 janvier 2025",
      category: "Formation & Entreprise",
      title: "Budget OPCO : comment l'utiliser intelligemment avant la fin de l'année",
      excerpt: "Guide complet pour exploiter intelligemment votre budget OPCO. Stratégies, bonnes pratiques et optimisations PME.",
      link: "/blog/budget-opco-comment-utiliser-intelligemment",
      readingTime: "25 min"
    },
    {
      date: "29 janvier 2025",
      category: "Formation & Entreprise",
      title: "Comment construire un plan de développement des compétences efficace en 2025",
      excerpt: "Guide méthodologique complet pour créer un plan de développement adapté. Étapes, outils et bonnes pratiques dirigeants PME.",
      link: "/blog/comment-construire-plan-developpement-competences-efficace-2025",
      readingTime: "30 min"
    },
    {
      date: "29 janvier 2025",
      category: "Formation & Entreprise",
      title: "Pourquoi investir dans la formation professionnelle est devenu stratégique pour les PME",
      excerpt: "Analyse complète du ROI, de la fidélisation, et des enjeux de compétitivité. Investissement stratégique majeur PME 2025.",
      link: "/blog/pourquoi-investir-formation-professionnelle-strategique-pme",
      readingTime: "25 min"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="section-padding"
    >
      <div className="container-minimal">
        {/* Header Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-6">
            <Newspaper className="h-16 w-16 mx-auto text-primary" />
          </motion.div>
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Actualités IA Center
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Restez informé des dernières innovations en intelligence artificielle, des tendances de formation et des actualités de notre centre certifié Qualiopi.
          </motion.p>
        </motion.section>

        {/* Actualités Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {actualites.length === 0 ? (
            <motion.div 
              variants={itemVariants}
              className="text-center py-20 bg-silver-light rounded-lg border border-silver-medium"
            >
              <TrendingUp className="h-20 w-20 mx-auto text-muted-foreground mb-6 opacity-50" />
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Restez connecté !
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                Les actualités seront bientôt disponibles. Revenez régulièrement pour découvrir nos dernières nouveautés, formations et innovations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 p-4 bg-background rounded-lg border border-silver-medium"
                >
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-medium">Actualités à venir</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 p-4 bg-background rounded-lg border border-silver-medium"
                >
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-medium">Événements</span>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <div className="grid gap-8">
              {actualites.map((actualite, index) => (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  className="bg-background rounded-lg border border-silver-medium p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-16 w-16 bg-silver-light rounded-lg flex items-center justify-center">
                        <Newspaper className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm text-muted-foreground">
                          {actualite.date}
                        </span>
                        {actualite.category && (
                          <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                            {actualite.category}
                          </span>
                        )}
                        {actualite.readingTime && (
                          <span className="text-sm text-muted-foreground">
                            • {actualite.readingTime}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {actualite.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {actualite.excerpt}
                      </p>
                      {actualite.link && (
                        <Link
                          to={actualite.link}
                          className="inline-block mt-4 text-primary hover:underline font-medium"
                        >
                          Lire la suite →
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </motion.section>

        {/* Info Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="bg-silver-light rounded-lg border border-silver-medium p-8 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Ne manquez aucune actualité
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Suivez-nous sur nos réseaux sociaux ou contactez-nous pour être informé en premier de nos dernières formations, innovations et événements.
            </p>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default ActualitesPage;
