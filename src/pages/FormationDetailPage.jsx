import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { formationsPro, formationsParticuliers } from './FormationsData';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { 
  Brain, 
  Users, 
  Target, 
  TrendingUp, 
  UserCheck, 
  Award, 
  Star,
  Zap,
  Database,
  MessageSquare,
  BarChart3,
  DollarSign,
  Tag,
  ClipboardCheck,
  Lightbulb,
  Layout,
  Calculator,
  Settings,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Accessibility,
  Globe,
  Mail,
  Phone,
  MapPin,
  FileText
} from 'lucide-react';

// Helper pour générer les données SEO optimisées
const getSEOData = (formation, specificData = {}) => {
  const baseUrl = 'https://iacenter.fr';
  const canonicalUrl = `${baseUrl}/formations/${formation.slug}`;
  
  const defaultTitle = `${formation.title} | Formation Professionnelle IA | IA Center`;
  const defaultDescription = `${formation.description} Formation certifiée Qualiopi pour entreprises en France. Inscription et financement OPCO disponibles.`;
  const defaultKeywords = `formation ${formation.title.toLowerCase()}, formation professionnelle France, formation entreprise, formation OPCO, formation certifiée Qualiopi, formation digitale, formation TPE PME, formation en ligne France`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": formation.title,
    "description": specificData.description || defaultDescription,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "IA Center",
      "url": baseUrl,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "FR"
      },
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "name": "Certification Qualiopi",
        "credentialCategory": "certification"
      }
    },
    "educationalLevel": "professional",
    "courseCode": formation.slug,
    "inLanguage": "fr-FR",
    "availableLanguage": ["fr"],
    "teaches": specificData.skills || [],
    "educationalCredentialAwarded": formation.certification,
    "timeRequired": formation.duration,
    "url": canonicalUrl
  };

  return {
    title: specificData.title || defaultTitle,
    description: specificData.description || defaultDescription,
    keywords: specificData.keywords || defaultKeywords,
    canonicalUrl,
    ogImage: `${baseUrl}/favicon.png`,
    schemaData: schema
  };
};

const FormationDetailPage = () => {
  const { slug } = useParams();
  const formation = formationsPro.find(f => f.slug === slug) || formationsParticuliers.find(f => f.slug === slug);

  if (!formation) {
    return (
      <div className="section-padding text-center">
        <h1 className="text-3xl font-bold mb-4">Formation introuvable</h1>
        <Link to="/formations" className="text-primary underline">Retour aux formations</Link>
      </div>
    );
  }

  // Contenu spécial pour la formation Transition Numérique
  if (formation.slug === 'transition-numerique') {
    const seoData = getSEOData(formation, {
      title: "Formation Transition Numérique FSE+ | IA et CRM Entreprise | Transformation Digitale | IA Center",
      description: "Formation transition numérique financée FSE+ : intégrez l'IA et les outils CRM pour transformer votre entreprise. Optimisez vos processus et augmentez votre compétitivité. Certification Qualiopi.",
      keywords: "formation transition numérique FSE+, formation IA entreprise, formation CRM, formation transformation digitale, formation innovation digitale, formation FSE+, formation Qualiopi, formation entreprise France",
      skills: [
        "Intégrer l'intelligence artificielle dans vos processus",
        "Utiliser les outils CRM efficacement",
        "Optimiser les processus métier",
        "Améliorer la productivité"
      ]
    });
    useSEO(seoData);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="section-padding"
      >
        <div className="container-minimal max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-silver-accent rounded-full mb-6">
              <Zap className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Transition Numérique
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Formation financée par le FSE+ - Transformez votre entreprise avec l'innovation digitale
            </p>
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium">
              Formation financée par le FSE+
            </div>
          </div>

          {/* Pourquoi suivre cette formation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Pourquoi suivre cette formation ?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <Brain className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Optimisez vos processus grâce à l'IA</h3>
                </div>
                <p className="text-muted-foreground">
                  L'intelligence artificielle vous permet d'automatiser les tâches répétitives et de prendre des décisions éclairées basées sur des analyses prédictives. Elle libère du temps pour des actions à plus forte valeur ajoutée. Gagnez en efficacité et réduisez les erreurs humaines en intégrant des solutions IA adaptées à vos besoins spécifiques.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-green-100 rounded-lg mr-4">
                    <Database className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">CRM sur mesure</h3>
                </div>
                <p className="text-muted-foreground">
                  Un progiciel CRM performant centralise toutes les données de vos clients, vous permettant de suivre les ventes, de personnaliser l'expérience client et d'améliorer la gestion de la relation client. Optimisez vos processus de vente, personnalisez vos interactions et boostez la fidélité de vos clients.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg mr-4">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Outils collaboratifs</h3>
                </div>
                <p className="text-muted-foreground">
                  Grâce à des outils numériques adaptés, vous pourrez faciliter la communication entre vos équipes, organiser vos projets de manière fluide et garder une visibilité constante sur l'avancement des tâches. Réduisez les silos d'informations et maximisez la collaboration pour des résultats plus rapides.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-orange-100 rounded-lg mr-4">
                    <TrendingUp className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Améliorez votre prise de décision et vos profits</h3>
                </div>
                <p className="text-muted-foreground">
                  L'IA vous aide à analyser des données complexes et à anticiper les évolutions du marché. Vous pouvez ainsi prendre des décisions stratégiques basées sur des informations précises et actuelles. Automatisez des tâches répétitives, améliorez la gestion des ventes et la fidélisation des clients pour réduire les coûts d'exploitation tout en augmentant vos revenus.
                </p>
              </div>
            </div>
          </div>

          {/* Une Formation à Fort Impact */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Une Formation à Fort Impact
            </h2>
            
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">À qui s'adresse cette formation ?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Entrepreneurs et dirigeants souhaitant intégrer des solutions numériques pour moderniser leurs opérations et rester compétitifs.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Responsables commerciaux et marketing désireux de maîtriser les outils CRM pour optimiser leur gestion client et maximiser les ventes.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Équipes opérationnelles cherchant à gagner en productivité grâce à l'introduction de l'IA et des outils numériques.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">📈 Les bénéfices à long terme</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span><strong>Gain de temps :</strong> Automatisez les processus et libérez du temps pour des tâches à plus forte valeur ajoutée.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span><strong>Amélioration continue :</strong> Restez agile et capable de vous adapter aux nouvelles tendances du marché.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span><strong>Compétences renforcées :</strong> Vos équipes seront prêtes à gérer l'évolution numérique avec des compétences solides dans l'utilisation de l'IA et des CRM.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">🎯 Pourquoi Choisir Notre Formation ?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span><strong>Formation financée par le FSE+ :</strong> Profitez de l'aide du Fonds Social Européen pour réaliser cette transition sans alourdir vos budgets.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span><strong>Accompagnement personnalisé :</strong> Chaque module est conçu pour être directement applicable à votre entreprise, avec des conseils sur mesure.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span><strong>Outils pratiques :</strong> Vous repartirez avec des connaissances concrètes et des outils directement opérationnels.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-8">
            <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Nous contacter
            </Link>
          </div>

          <div className="text-center">
            <Link to="/formations" className="inline-block mt-8 text-primary underline text-lg">← Retour à la liste des formations</Link>
          </div>
        </div>
      </motion.div>
    );
  }

  // Contenu spécial pour la formation Créer son business en ligne
  if (formation.slug === 'creer-business-en-ligne') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="section-padding"
      >
        <div className="container-minimal max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-silver-accent rounded-full mb-6">
              <Briefcase className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Créer son business en ligne
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Formation complète pour entrepreneurs ambitieux
            </p>
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium">
              Entre 15h et 35h • 100% en ligne
            </div>
          </div>

          {/* Objectif */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Objectif</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cette formation vous accompagne dans la création et le développement de votre business en ligne. 
                Vous apprendrez à identifier une niche rentable, créer votre offre, développer votre présence digitale 
                et générer vos premiers revenus en ligne.
              </p>
            </div>
          </div>

          {/* Programme détaillé */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Programme de formation détaillé</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-4">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 1 : Identifier votre niche</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Analyse de marché et recherche de niches rentables</li>
                  <li>• Définition de votre persona cible</li>
                  <li>• Validation de votre idée business</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-green-100 rounded-lg mr-4">
                    <Layout className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 2 : Créer votre offre</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Développement de votre proposition de valeur</li>
                  <li>• Création de votre offre principale et complémentaire</li>
                  <li>• Stratégie de pricing et monétisation</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg mr-4">
                    <MessageSquare className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 3 : Développer votre présence digitale</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Création de votre site web et landing pages</li>
                  <li>• Stratégie de contenu et marketing digital</li>
                  <li>• Optimisation SEO et conversion</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg mr-4">
                    <DollarSign className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 4 : Générer vos premiers revenus</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Stratégies de vente et acquisition clients</li>
                  <li>• Automatisation des processus de vente</li>
                  <li>• Gestion financière et suivi des performances</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prérequis */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">PRÉREQUIS</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <ul className="text-muted-foreground space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Être dans une démarche de création d'entreprise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Maîtriser la langue française</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Avoir un projet viable</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Accessibilité Handicap */}
          <div className="mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 rounded-lg mr-4">
                  <Accessibility className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Accessibilité Handicap</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li>• Formation accessible aux personnes en situation de handicap</li>
                <li>• Adaptation des supports et des méthodes pédagogiques</li>
                <li>• Accompagnement personnalisé</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-8">
            <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Nous contacter
            </Link>
          </div>

          <div className="text-center">
            <Link to="/formations" className="inline-block mt-8 text-primary underline text-lg">← Retour à la liste des formations</Link>
          </div>
        </div>
      </motion.div>
    );
  }

  // Contenu spécial pour la formation Les réseaux sociaux pour les entreprises
  if (formation.slug === 'reseaux-sociaux-entreprises') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="section-padding"
      >
        <div className="container-minimal max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-silver-accent rounded-full mb-6">
              <MessageSquare className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Les Réseaux Sociaux pour les Entreprises : Se rendre visible sans être Expert
            </h1>
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium">
              Entre 15h et 35h • 100% en ligne
            </div>
          </div>

          {/* Objectif */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">🎯 Objectif</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cette formation vous permet de développer la visibilité de votre entreprise sur les principaux réseaux sociaux sans compétences techniques préalables. Vous apprendrez à maîtriser les stratégies de communication et de marketing digital sur Instagram, Facebook, Messenger, TikTok et YouTube, afin d'attirer, engager et fidéliser votre audience.
              </p>
            </div>
          </div>

          {/* Programme détaillé */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">📘 Programme détaillé</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-4">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 1 : Les bases du marketing digital appliquées aux réseaux sociaux</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Comprendre le rôle stratégique des réseaux sociaux pour une entreprise</li>
                  <li>• Identifier les avantages marketing et commerciaux du social media</li>
                  <li>• Construire une présence authentique et humaine centrée sur la relation client</li>
                  <li>• Découvrir le concept de Return on Relationship (ROR) pour fidéliser et engager sa communauté</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-pink-100 rounded-lg mr-4">
                    <Star className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 2 : Instagram – Créer une image de marque attractive</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Optimiser son profil et rédiger une bio percutante</li>
                  <li>• Créer un feed visuel cohérent et professionnel</li>
                  <li>• Utiliser les Stories, Reels et hashtags pour maximiser la portée</li>
                  <li>• Construire une stratégie d'engagement durable avec son audience</li>
                  <li>• Développer sa communauté et convertir ses abonnés en clients</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 3 : Facebook – Stratégies de communication et de publicité</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Créer et configurer une page professionnelle performante</li>
                  <li>• Publier du contenu engageant et gérer les interactions clients</li>
                  <li>• Mettre en place des campagnes publicitaires ciblées</li>
                  <li>• Analyser les résultats grâce à Facebook Insights et au Pixel Facebook</li>
                  <li>• Optimiser sa visibilité et amplifier ses campagnes</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-green-100 rounded-lg mr-4">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 4 : Messenger – Le marketing conversationnel</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Comprendre l'importance du canal Messenger dans la relation client</li>
                  <li>• Créer des publicités Click-to-Messenger efficaces</li>
                  <li>• Automatiser les échanges via chatbot (ManyChat)</li>
                  <li>• Mettre en œuvre une communication personnalisée et réactive</li>
                  <li>• Fidéliser les prospects grâce à une expérience client directe et humaine</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg mr-4">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 5 : TikTok – Créer du contenu viral et authentique</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Comprendre les codes et la culture TikTok</li>
                  <li>• Optimiser son profil professionnel</li>
                  <li>• Concevoir des vidéos courtes, percutantes et engageantes</li>
                  <li>• Suivre les tendances et exploiter les sons viraux</li>
                  <li>• Construire une stratégie de croissance et collaborer avec des créateurs</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg mr-4">
                    <BarChart3 className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 6 : Stratégie globale et cohérence multi-plateformes</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Harmoniser sa communication sur tous les réseaux</li>
                  <li>• Mettre en place un calendrier éditorial efficace</li>
                  <li>• Utiliser les outils d'analyse et de planification</li>
                  <li>• Définir des indicateurs de performance (KPI) adaptés à ses objectifs</li>
                  <li>• Établir une stratégie long terme de visibilité et de conversion</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Compétences développées */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">🧠 Compétences développées</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <ul className="text-muted-foreground space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Gérer professionnellement la présence digitale d'une marque</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Créer du contenu engageant et pertinent selon chaque plateforme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Lancer et analyser des campagnes publicitaires performantes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Développer une communauté fidèle et active</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Maîtriser la communication multicanale et les outils de pilotage digital</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Prérequis */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">🔧 PRÉREQUIS</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <ul className="text-muted-foreground space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Être entrepreneur, communicant, ou salarié souhaitant développer la visibilité d'une entreprise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Maîtriser les bases de l'outil informatique et d'Internet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Être à l'aise avec les réseaux sociaux (usage personnel minimum)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Accessibilité Handicap */}
          <div className="mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 rounded-lg mr-4">
                  <Accessibility className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Accessibilité Handicap</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li>• Formation accessible aux personnes en situation de handicap</li>
                <li>• Adaptation des supports et des méthodes pédagogiques</li>
                <li>• Accompagnement personnalisé</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-8">
            <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Nous contacter
            </Link>
          </div>

          <div className="text-center">
            <Link to="/formations" className="inline-block mt-8 text-primary underline text-lg">← Retour à la liste des formations</Link>
          </div>
        </div>
      </motion.div>
    );
  }

  // Contenu spécial pour Démarrer sa présence en ligne
  if (formation.slug === 'demarrer-presence-en-ligne') {
    const seoData = getSEOData(formation, {
      title: "Formation Démarrer sa présence en ligne TPE/PME | Digitalisation Entreprise | IA Center",
      description: "Formation professionnelle pour TPE/PME : développez votre présence digitale et votre visibilité en ligne. 2 jours (14h) en distanciel. Certification Qualiopi. Financement OPCO disponible en France.",
      keywords: "formation présence en ligne TPE PME, formation digitalisation entreprise, formation visibilité digitale, formation site web entreprise, formation réseaux sociaux entreprise, formation référencement local, formation identité digitale, formation OPCO, formation Qualiopi, formation distanciel France",
      skills: [
        "Identifier les canaux digitaux adaptés à leur activité",
        "Mettre en place les premiers outils de visibilité en ligne",
        "Définir une identité digitale cohérente",
        "Structurer un plan d'action digital"
      ]
    });
    useSEO(seoData);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="section-padding"
      >
        <div className="container-minimal max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-silver-accent rounded-full mb-6">
              <Globe className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Démarrer sa présence en ligne : base indispensable pour TPE/PME
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Base indispensable pour TPE/PME
            </p>
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium">
              2 jours (14 heures)
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Objectif de la formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Accompagner les entreprises dans leurs premiers pas vers le digital. Cette formation permet aux dirigeants et à leurs collaborateurs de comprendre les leviers essentiels pour exister sur Internet, renforcer leur visibilité et valoriser leur image auprès de leurs clients.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Public concerné par cette formation professionnelle</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Dirigeants, responsables communication, employés polyvalents, ou toute personne chargée du développement de la visibilité d'une entreprise non digitale (commerce, artisanat, restauration, services).
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Compétences développées en formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground mb-4">À l'issue de la formation, les participants seront capables de :</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Identifier les canaux digitaux adaptés à leur activité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Mettre en place les premiers outils de visibilité en ligne (site, fiche locale, réseaux sociaux)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Définir une identité digitale cohérente et professionnelle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Structurer un plan d'action simple pour développer leur présence numérique</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Programme de formation détaillé</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-4">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 1 — Comprendre les enjeux du digital</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Pourquoi la présence en ligne est devenue indispensable</li>
                  <li>• Les comportements clients à l'ère du numérique</li>
                  <li>• Panorama des principaux canaux de visibilité</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-green-100 rounded-lg mr-4">
                    <Layout className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 2 — Construire son identité digitale</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Image de marque et cohérence visuelle</li>
                  <li>• Charte graphique, ton de communication et storytelling</li>
                  <li>• Bonnes pratiques pour une image professionnelle et rassurante</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg mr-4">
                    <Settings className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 3 — Créer sa présence en ligne</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Présenter son activité de manière claire et attractive</li>
                  <li>• Créer ou optimiser sa fiche établissement en ligne</li>
                  <li>• Présentation des solutions accessibles (site vitrine, page pro, réseaux)</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg mr-4">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 4 — Développer sa visibilité</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Comment être trouvé par les bons clients</li>
                  <li>• Premières actions de référencement local</li>
                  <li>• Notions essentielles sur la gestion des avis et la réputation en ligne</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-pink-100 rounded-lg mr-4">
                    <ClipboardCheck className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 5 — Mettre en place son plan d'action digital</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Définir ses objectifs et priorités</li>
                  <li>• Établir un calendrier simple et réaliste</li>
                  <li>• Mesurer ses premiers résultats et ajuster sa stratégie</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Modalités pédagogiques de la formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Alternance entre apports théoriques, études de cas concrets et ateliers pratiques personnalisés selon le secteur d'activité des participants.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Modalités d'évaluation et certification</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Mise en situation pratique, QCM final et plan d'action individuel présenté en fin de formation.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Certification Qualiopi de la formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Attestation de formation délivrée par IA Center, centre certifié Qualiopi.
              </p>
            </div>
          </div>

          <div className="text-center mb-8">
            <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Nous contacter
            </Link>
          </div>

          <div className="text-center">
            <Link to="/formations-professionnels" className="inline-block mt-8 text-primary underline text-lg">← Retour à la liste des formations</Link>
          </div>
        </div>
      </motion.div>
    );
  }

  // Contenu pour Sécuriser vos données et vos pratiques en ligne
  if (formation.slug === 'securiser-donnees-pratiques-ligne') {
    const seoData = getSEOData(formation, {
      title: "Formation Cybersécurité Entreprise | Sécuriser les Données | Formation RGPD | IA Center",
      description: "Formation cybersécurité pour entreprises : protégez vos données et adoptez les bonnes pratiques de sécurité informatique. Conformité RGPD. 2 jours (14h) en distanciel. Certification Qualiopi. Financement OPCO France.",
      keywords: "formation cybersécurité entreprise, formation sécurité informatique, formation protection données, formation RGPD entreprise, formation sécurité réseau, formation phishing, formation rançongiciel, formation OPCO, formation Qualiopi France",
      skills: [
        "Identifier les menaces informatiques",
        "Adopter les bons comportements de sécurité",
        "Mettre en place des procédures de protection",
        "Gérer les accès et mots de passe",
        "Comprendre les obligations RGPD"
      ]
    });
    useSEO(seoData);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="section-padding"
      >
        <div className="container-minimal max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-silver-accent rounded-full mb-6">
              <ShieldCheck className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Sécuriser vos données et vos pratiques en ligne
            </h1>
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium">
              2 jours (14 heures)
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Objectif de la formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sensibiliser et former les entreprises aux bonnes pratiques de cybersécurité afin de protéger leurs données, leurs outils numériques et leur image de marque. Cette formation donne aux collaborateurs les réflexes essentiels pour travailler en toute sécurité dans un environnement digital, tout en respectant la conformité réglementaire (RGPD).
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Public concerné par cette formation professionnelle</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Dirigeants, responsables informatiques, salariés utilisant des outils numériques (messagerie, cloud, CRM, réseaux sociaux, etc.), ou toute personne souhaitant adopter de bons réflexes face aux risques cyber.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Compétences développées en formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground mb-4">À l'issue de la formation, les participants seront capables de :</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Identifier les principales menaces informatiques et leurs conséquences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Adopter les bons comportements pour sécuriser leurs données et leurs outils</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Mettre en place des procédures internes simples de protection des données</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Gérer les accès, mots de passe et partages de manière sécurisée</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Comprendre les obligations légales liées au RGPD</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Programme de formation détaillé</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-4">
                    <ShieldCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 1 — Comprendre les enjeux de la cybersécurité</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Les risques numériques pour les entreprises (phishing, rançongiciels, fuites de données)</li>
                  <li>• Impacts économiques et réputationnels d'une faille de sécurité</li>
                  <li>• Pourquoi la sécurité concerne chaque collaborateur</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-green-100 rounded-lg mr-4">
                    <Settings className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 2 — Sécuriser ses outils du quotidien</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Bonnes pratiques pour les messageries, navigateurs et outils collaboratifs</li>
                  <li>• Gestion sécurisée des mots de passe et authentification à deux facteurs</li>
                  <li>• Reconnaître les tentatives de fraude et les arnaques courantes</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg mr-4">
                    <Database className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 3 — Protéger ses données professionnelles</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Sauvegarde, chiffrement et stockage sécurisé des documents</li>
                  <li>• Partage de fichiers : comment éviter les erreurs humaines</li>
                  <li>• Gestion des accès utilisateurs et droits d'administration</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg mr-4">
                    <MessageSquare className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 4 — Sécurité mobile et travail à distance</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Sécuriser les connexions Wi-Fi, VPN et terminaux personnels</li>
                  <li>• Bonnes pratiques en mobilité : télétravail, smartphones et tablettes</li>
                  <li>• Sensibilisation aux risques liés aux réseaux sociaux</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-pink-100 rounded-lg mr-4">
                    <FileText className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 5 — RGPD et conformité</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Comprendre les principes du RGPD</li>
                  <li>• Obligations de l'entreprise et responsabilités des salariés</li>
                  <li>• Gérer les données clients et prospects en toute conformité</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg mr-4">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 6 — Mettre en place une culture de sécurité</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Élaborer un plan de sécurité adapté à la taille de l'entreprise</li>
                  <li>• Créer une charte informatique interne</li>
                  <li>• Sensibiliser durablement les équipes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Modalités pédagogiques de la formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Alternance de présentations illustrées, d'ateliers de mise en situation (analyse de mails suspects, gestion d'incidents fictifs) et d'échanges autour de cas réels rencontrés en entreprise.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Modalités d'évaluation et certification</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                QCM de validation + étude de cas finale sur la mise en place d'un plan de sécurité interne.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Certification Qualiopi de la formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Attestation de formation délivrée par IA Center, centre certifié Qualiopi.
              </p>
            </div>
          </div>

          <div className="text-center mb-8">
            <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Nous contacter
            </Link>
          </div>

          <div className="text-center">
            <Link to="/formations-professionnels" className="inline-block mt-8 text-primary underline text-lg">← Retour à la liste des formations</Link>
          </div>
        </div>
      </motion.div>
    );
  }

  // Contenu pour les autres formations professionnelles - version simplifiée
  if (formation.slug === 'opportunites-marketing-digital') {
    const seoData = getSEOData(formation, {
      title: "Formation Marketing Digital Entreprise | Acquisition Clients | Stratégie Digitale | IA Center",
      description: "Formation marketing digital pour entreprises : développez votre clientèle avec les leviers du digital (SEO, SEA, réseaux sociaux, email). 3 jours (21h) en distanciel. Certification Qualiopi. Financement OPCO disponible en France.",
      keywords: "formation marketing digital entreprise, formation acquisition clients, formation SEO SEA, formation stratégie digitale, formation campagnes publicitaires, formation conversion digitale, formation ROI marketing, formation OPCO, formation Qualiopi France",
      skills: [
        "Comprendre les leviers du marketing digital",
        "Identifier les canaux performants",
        "Mettre en place une stratégie d'acquisition",
        "Créer des campagnes ciblées",
        "Convertir les prospects en clients"
      ]
    });
    useSEO(seoData);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="section-padding"
      >
        <div className="container-minimal max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Créer de nouvelles opportunités grâce au marketing digital
            </h1>
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium">
              3 jours (21 heures)
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Objectif de la formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Permettre aux entreprises de comprendre et d'exploiter les leviers du marketing digital pour développer leur clientèle, générer des opportunités commerciales et renforcer leur présence sur le web. Cette formation donne aux participants les clés pour mettre en place une stratégie d'acquisition efficace, adaptée à leur budget et à leurs objectifs.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Public concerné par cette formation professionnelle</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Dirigeants, responsables marketing, commerciaux, responsables communication ou toute personne souhaitant contribuer à la croissance de l'entreprise par les outils digitaux.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Compétences développées en formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground mb-4">À l'issue de la formation, les participants seront capables de :</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Comprendre les principaux leviers du marketing digital</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Identifier les canaux les plus performants pour leur activité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Mettre en place une stratégie d'acquisition adaptée à leurs ressources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Créer des campagnes ciblées et mesurables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Convertir les prospects en clients grâce à un parcours digital optimisé</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Programme de formation détaillé</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-4">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 1 — Introduction au marketing digital</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Le rôle du digital dans la stratégie commerciale moderne</li>
                  <li>• Panorama des leviers : SEO, SEA, réseaux sociaux, email, contenu</li>
                  <li>• Identifier les leviers les plus pertinents selon son activité et son marché</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-green-100 rounded-lg mr-4">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 2 — Comprendre le parcours client numérique</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Les étapes clés du parcours d'achat en ligne</li>
                  <li>• Adapter son message selon la maturité du client (découverte, décision, fidélisation)</li>
                  <li>• L'importance de l'expérience utilisateur (UX) dans la conversion</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg mr-4">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 3 — Construire sa stratégie d'acquisition</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Définir ses objectifs marketing et son budget</li>
                  <li>• Choisir les canaux adaptés : publicité, référencement, campagnes sociales</li>
                  <li>• Élaborer une offre claire et un message percutant</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg mr-4">
                    <DollarSign className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 4 — Attirer et convertir ses prospects</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Créer du contenu à forte valeur ajoutée</li>
                  <li>• Mettre en place des actions concrètes pour attirer du trafic qualifié</li>
                  <li>• Optimiser ses pages web pour transformer les visiteurs en clients</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-pink-100 rounded-lg mr-4">
                    <BarChart3 className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 5 — Mesurer et optimiser ses performances</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Identifier les bons indicateurs (KPI) selon ses objectifs</li>
                  <li>• Analyser les résultats de ses campagnes</li>
                  <li>• Ajuster sa stratégie pour maximiser le retour sur investissement</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg mr-4">
                    <Zap className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 6 — Développer une démarche marketing durable</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Automatiser certaines actions marketing</li>
                  <li>• Fidéliser ses clients grâce au digital</li>
                  <li>• Anticiper les évolutions du marketing numérique</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Modalités pédagogiques de la formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Alternance d'apports théoriques et d'ateliers pratiques : création d'une mini-campagne digitale, étude de cas concrets, élaboration d'un plan marketing complet pour l'entreprise participante.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Modalités d'évaluation et certification</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Réalisation d'un plan marketing digital et présentation du projet devant le formateur.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Certification Qualiopi de la formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Attestation de formation délivrée par IA Center, centre certifié Qualiopi.
              </p>
            </div>
          </div>

          <div className="text-center mb-8">
            <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Nous contacter
            </Link>
          </div>
          <div className="text-center">
            <Link to="/formations-professionnels" className="inline-block mt-8 text-primary underline text-lg">← Retour à la liste des formations</Link>
          </div>
        </div>
      </motion.div>
    );
  }

  // Contenu pour Développer une stratégie de communication digitale efficace
  if (formation.slug === 'strategie-communication-digitale') {
    const seoData = getSEOData(formation, {
      title: "Formation Communication Digitale Entreprise | Stratégie Réseaux Sociaux | Plan Communication | IA Center",
      description: "Formation stratégie de communication digitale : construisez un plan de communication efficace pour votre entreprise (réseaux sociaux, site web, newsletters). 4 jours (28h) en distanciel. Certification Qualiopi. Financement OPCO France.",
      keywords: "formation communication digitale, formation stratégie réseaux sociaux, formation plan communication, formation ligne éditoriale, formation storytelling, formation KPI communication, formation OPCO, formation Qualiopi, formation marketing digital France",
      skills: [
        "Construire une stratégie de communication cohérente",
        "Identifier les bons canaux et formats",
        "Créer une ligne éditoriale efficace",
        "Planifier sa communication",
        "Mesurer les performances"
      ]
    });
    useSEO(seoData);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="section-padding"
      >
        <div className="container-minimal max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-silver-accent rounded-full mb-6">
              <MessageSquare className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Développer une stratégie de communication digitale efficace
            </h1>
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium">
              4 jours (28 heures)
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Objectif de la formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Accompagner les entreprises dans la conception et la mise en œuvre d'une stratégie de communication digitale globale, cohérente avec leurs objectifs commerciaux et leur identité de marque. Cette formation permet d'acquérir les connaissances et les méthodes nécessaires pour planifier, piloter et mesurer la performance de sa communication sur le web et les réseaux sociaux.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Public concerné par cette formation professionnelle</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Dirigeants, responsables marketing ou communication, collaborateurs impliqués dans le développement commercial, ou toute personne souhaitant professionnaliser la communication digitale de son entreprise.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Compétences développées en formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground mb-4">À l'issue de la formation, les participants seront capables de :</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Comprendre les enjeux et leviers de la communication digitale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Construire une stratégie cohérente alignée sur les objectifs de l'entreprise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Identifier les bons canaux et formats pour chaque cible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Créer une ligne éditoriale et un calendrier de publication efficaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Mettre en place des indicateurs de performance et mesurer les résultats</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Programme de formation détaillé</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-4">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 1 — Comprendre les fondements de la communication digitale</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Panorama des outils et canaux digitaux</li>
                  <li>• Évolution des comportements clients et nouvelles attentes</li>
                  <li>• Le rôle stratégique de la communication dans la croissance de l'entreprise</li>
                  <li>• Les erreurs les plus fréquentes à éviter</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-green-100 rounded-lg mr-4">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 2 — Définir sa stratégie et ses objectifs</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Identifier les cibles et leurs besoins</li>
                  <li>• Définir un positionnement clair et différenciant</li>
                  <li>• Fixer des objectifs SMART (visibilité, acquisition, fidélisation)</li>
                  <li>• Construire une stratégie cohérente entre les canaux online et offline</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg mr-4">
                    <Layout className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 3 — Élaborer son plan de communication digitale</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Définir les axes de communication et les messages clés</li>
                  <li>• Sélectionner les canaux adaptés (site web, réseaux sociaux, newsletters, publicité, SEO)</li>
                  <li>• Créer une ligne éditoriale solide</li>
                  <li>• Planifier sa communication sur 3 à 6 mois</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg mr-4">
                    <Zap className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 4 — Produire et diffuser ses contenus</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Structurer ses contenus selon les objectifs (notoriété, engagement, conversion)</li>
                  <li>• Notions de storytelling et copywriting digital</li>
                  <li>• Adapter le ton et le format selon le canal</li>
                  <li>• Organiser la production de contenu en interne ou via des prestataires</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-pink-100 rounded-lg mr-4">
                    <BarChart3 className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 5 — Piloter et mesurer la performance</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Introduction aux KPI de la communication digitale</li>
                  <li>• Mise en place d'outils de suivi (tableaux de bord, reporting)</li>
                  <li>• Lecture et interprétation des données</li>
                  <li>• Ajuster la stratégie selon les résultats observés</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg mr-4">
                    <TrendingUp className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 6 — Construire une stratégie pérenne</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Capitaliser sur ses succès et corriger les axes faibles</li>
                  <li>• Automatiser certaines actions pour gagner du temps</li>
                  <li>• Mettre en place une veille pour anticiper les tendances digitales</li>
                  <li>• Impliquer les équipes dans la continuité de la stratégie</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Modalités pédagogiques de la formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Alternance d'apports théoriques, d'ateliers de co-construction et de cas pratiques : élaboration d'une stratégie réelle appliquée à l'entreprise des participants. Remise d'un plan d'action personnalisé à la fin de la formation.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Modalités d'évaluation et certification</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Étude de cas complète + présentation orale du plan de communication digitale réalisé pendant la formation.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Certification Qualiopi de la formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Attestation de formation délivrée par IA Center, centre certifié Qualiopi.
              </p>
            </div>
          </div>

          <div className="text-center mb-8">
            <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Nous contacter
            </Link>
          </div>
          <div className="text-center">
            <Link to="/formations-professionnels" className="inline-block mt-8 text-primary underline text-lg">← Retour à la liste des formations</Link>
          </div>
        </div>
      </motion.div>
    );
  }

  // Contenu pour Digitaliser vos process internes
  if (formation.slug === 'digitaliser-process-internes') {
    const seoData = getSEOData(formation, {
      title: "Formation Digitalisation Process Internes | Automatisation Entreprise | Outils Collaboratifs | IA Center",
      description: "Formation digitalisation des processus internes : automatisez vos tâches et améliorez la productivité avec des outils simples. 3 jours (21h) en distanciel. Certification Qualiopi. Financement OPCO disponible en France.",
      keywords: "formation digitalisation process, formation automatisation entreprise, formation outils collaboratifs, formation productivité entreprise, formation workflow, formation no-code, formation SaaS, formation OPCO, formation Qualiopi France",
      skills: [
        "Identifier les process à digitaliser",
        "Choisir les bons outils",
        "Mettre en place des automatisations",
        "Centraliser les informations",
        "Piloter la transformation numérique"
      ]
    });
    useSEO(seoData);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="section-padding"
      >
        <div className="container-minimal max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-silver-accent rounded-full mb-6">
              <Settings className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Digitaliser vos process internes
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Simplement et efficacement
            </p>
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium">
              3 jours (21 heures)
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Objectif de la formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Accompagner les entreprises dans la mise en place d'outils numériques simples et accessibles pour gagner du temps, réduire les erreurs et améliorer la productivité. Cette formation permet de comprendre comment digitaliser progressivement les tâches administratives, commerciales ou collaboratives, sans investissement lourd ni compétences techniques.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Public concerné par cette formation professionnelle</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Dirigeants de TPE/PME, responsables d'équipe, collaborateurs administratifs, RH, commerciaux ou toute personne souhaitant simplifier et automatiser ses processus internes.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Compétences développées en formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground mb-4">À l'issue de la formation, les participants seront capables de :</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Identifier les process internes pouvant être digitalisés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Choisir les bons outils selon les besoins et le niveau de compétence de l'équipe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Mettre en place des automatisations simples pour gagner du temps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Centraliser les informations pour une meilleure collaboration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Piloter la transformation numérique de leur structure de manière progressive et sereine</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Programme de formation détaillé</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-4">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 1 — Comprendre la digitalisation des process</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Définition et enjeux de la digitalisation interne</li>
                  <li>• Identifier les freins et leviers du changement</li>
                  <li>• Les bénéfices concrets pour les équipes et la direction</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-green-100 rounded-lg mr-4">
                    <Layout className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 2 — Cartographier et prioriser ses process</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Analyse des tâches répétitives et chronophages</li>
                  <li>• Identifier les points de friction actuels</li>
                  <li>• Sélectionner les process à digitaliser en priorité</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg mr-4">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 3 — Découvrir les outils accessibles</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Panorama des solutions simples et économiques (no-code, SaaS, cloud collaboratif)</li>
                  <li>• Présentation d'outils selon les besoins : gestion, RH, communication, ventes, suivi client</li>
                  <li>• Critères de choix : simplicité, coût, compatibilité, sécurité</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg mr-4">
                    <Settings className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 4 — Mettre en œuvre sa digitalisation</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Étapes clés d'un projet de digitalisation interne</li>
                  <li>• Impliquer les collaborateurs dans la mise en place des outils</li>
                  <li>• Méthode de déploiement progressif (phase test, retours, ajustements)</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-pink-100 rounded-lg mr-4">
                    <ClipboardCheck className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 5 — Automatiser et centraliser ses tâches</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Introduction aux automatisations simples (Make, Zapier, Google Workspace)</li>
                  <li>• Création de flux de travail automatisés</li>
                  <li>• Comment connecter les différents outils entre eux</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg mr-4">
                    <BarChart3 className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 6 — Suivre et améliorer ses process digitalisés</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Mettre en place des indicateurs de performance internes</li>
                  <li>• Maintenir la cohérence et la sécurité des données</li>
                  <li>• Mettre à jour et faire évoluer les outils dans le temps</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Modalités pédagogiques de la formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Apports théoriques et ateliers pratiques : cartographie réelle des process de l'entreprise, création de mini-automatisations, tests d'outils collaboratifs. Chaque participant repart avec un plan d'action concret et un guide de mise en œuvre.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Modalités d'évaluation et certification</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Étude de cas + validation d'un plan de digitalisation interne adapté à la structure du participant.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Certification Qualiopi de la formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Attestation de formation délivrée par IA Center, centre certifié Qualiopi.
              </p>
            </div>
          </div>

          <div className="text-center mb-8">
            <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Nous contacter
            </Link>
          </div>
          <div className="text-center">
            <Link to="/formations-professionnels" className="inline-block mt-8 text-primary underline text-lg">← Retour à la liste des formations</Link>
          </div>
        </div>
      </motion.div>
    );
  }

  // Contenu pour Fiche Google Business Profile
  if (formation.slug === 'fiche-google-business-profile') {
    const seoData = getSEOData(formation, {
      title: "Formation Google Business Profile | Référencement Local | Visibilité Géolocalisée | IA Center",
      description: "Formation Google Business Profile : optimisez votre présence locale sur Google Maps et attractez plus de clients dans votre zone. 1 jour (7h) en distanciel. Certification Qualiopi. Financement OPCO France.",
      keywords: "formation Google Business Profile, formation référencement local, formation Google Maps, formation visibilité locale, formation commerce local, formation e-réputation, formation avis clients, formation OPCO, formation Qualiopi France",
      skills: [
        "Créer ou optimiser sa fiche Google Business Profile",
        "Comprendre le référencement local",
        "Optimiser pour la visibilité géolocalisée",
        "Gérer les avis et interactions",
        "Améliorer sa visibilité locale"
      ]
    });
    useSEO(seoData);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="section-padding"
      >
        <div className="container-minimal max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-silver-accent rounded-full mb-6">
              <MapPin className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Fiche Google Business Profile : être visible localement
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Être visible localement
            </p>
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium">
              1 jour (7 heures)
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Objectif de la formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Permettre aux entreprises locales d'optimiser leur présence sur Google afin d'attirer davantage de clients dans leur zone géographique. Les participants apprendront à créer, configurer et exploiter efficacement leur fiche Google Business Profile pour améliorer leur référencement local et leur e-réputation.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Public concerné par cette formation professionnelle</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Dirigeants, gérants d'établissements, responsables communication, salariés ou indépendants souhaitant développer la visibilité locale de leur entreprise (restauration, artisanat, services, commerce de proximité, etc.).
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Compétences développées en formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground mb-4">À l'issue de la formation, les participants seront capables de :</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Créer ou revendiquer leur fiche Google Business Profile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Comprendre les facteurs qui influencent la visibilité locale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Optimiser leur fiche pour le référencement géolocalisé</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Gérer efficacement les avis et interactions clients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Mettre à jour régulièrement leur profil pour attirer de nouveaux clients</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Programme de formation détaillé</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-4">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 1 — Comprendre la visibilité locale</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Le rôle de Google dans la recherche locale</li>
                  <li>• Comment les clients trouvent une entreprise sur Google Maps</li>
                  <li>• Les éléments clés du référencement local</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-green-100 rounded-lg mr-4">
                    <Settings className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 2 — Création et configuration de la fiche</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Création, validation et prise en main de sa fiche</li>
                  <li>• Informations essentielles à renseigner (nom, horaires, contact, site web, services)</li>
                  <li>• Gestion des catégories et des zones de chalandise</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg mr-4">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 3 — Optimiser sa fiche pour la performance</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Ajouter des photos professionnelles et cohérentes avec son image</li>
                  <li>• Publier régulièrement des posts et actualités</li>
                  <li>• Exploiter les statistiques de performance de la fiche</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg mr-4">
                    <Star className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 4 — Gérer les avis et interactions clients</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Importance des avis dans le choix des consommateurs</li>
                  <li>• Répondre de manière professionnelle et stratégique aux commentaires</li>
                  <li>• Mettre en place une méthode pour collecter plus d'avis positifs</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-pink-100 rounded-lg mr-4">
                    <BarChart3 className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 5 — Développer et maintenir sa visibilité</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Erreurs à éviter pour ne pas perdre en visibilité</li>
                  <li>• Suivi des performances et mise à jour continue</li>
                  <li>• Construire un mini-plan d'action local pour son établissement</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Modalités pédagogiques de la formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Ateliers pratiques : création ou optimisation réelle de la fiche de l'entreprise participante, exercices de rédaction d'avis et d'actualités, analyse collective de cas concrets.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Modalités d'évaluation et certification</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Évaluation continue lors des exercices + validation finale d'une fiche complète, optimisée et conforme aux bonnes pratiques de référencement local.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Certification Qualiopi de la formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Attestation de formation délivrée par IA Center, centre certifié Qualiopi.
              </p>
            </div>
          </div>

          <div className="text-center mb-8">
            <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Nous contacter
            </Link>
          </div>
          <div className="text-center">
            <Link to="/formations-professionnels" className="inline-block mt-8 text-primary underline text-lg">← Retour à la liste des formations</Link>
          </div>
        </div>
      </motion.div>
    );
  }

  // Contenu pour Instagram et Facebook pour commerces de proximité
  if (formation.slug === 'instagram-facebook-commerces') {
    const seoData = getSEOData(formation, {
      title: "Formation Instagram Facebook Commerces | Réseaux Sociaux Locaux | Social Media Local | IA Center",
      description: "Formation Instagram et Facebook pour commerces de proximité : développez votre communauté locale et fidélisez vos clients. 2 jours (14h) en distanciel. Certification Qualiopi. Financement OPCO disponible en France.",
      keywords: "formation Instagram Facebook, formation réseaux sociaux commerce, formation social media local, formation commerce de proximité, formation community management local, formation contenu visuel, formation engagement réseaux sociaux, formation OPCO, formation Qualiopi France",
      skills: [
        "Créer et configurer des comptes professionnels",
        "Créer du contenu engageant",
        "Développer une communauté locale",
        "Interagir avec ses clients",
        "Utiliser les statistiques pour améliorer"
      ]
    });
    useSEO(seoData);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="section-padding"
      >
        <div className="container-minimal max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-silver-accent rounded-full mb-6">
              <MessageSquare className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Instagram et Facebook pour commerces de proximité
            </h1>
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium">
              2 jours (14 heures)
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Objectif de la formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Aider les entreprises locales à tirer pleinement parti de Facebook et Instagram pour accroître leur visibilité, fidéliser leur clientèle et attirer de nouveaux clients. Cette formation permet d'apprendre à publier efficacement, à créer du contenu attractif et à comprendre les bonnes pratiques de communication sur les réseaux sociaux les plus utilisés par le grand public.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Public concerné par cette formation professionnelle</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Dirigeants, responsables communication, employés en charge de la communication ou de la relation client dans les commerces, restaurants, salons, entreprises de services, artisans, etc.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Compétences développées en formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground mb-4">À l'issue de la formation, les participants seront capables de :</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Comprendre les spécificités de Facebook et Instagram pour une activité locale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Créer et paramétrer une page professionnelle cohérente avec l'image de l'entreprise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Concevoir et publier des contenus visuels engageants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Développer et animer une communauté locale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Utiliser les statistiques pour améliorer les performances des publications</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Programme de formation détaillé</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-4">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 1 — Comprendre les réseaux sociaux pour une activité locale</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Rôle des réseaux sociaux dans la communication moderne</li>
                  <li>• Différences et complémentarités entre Facebook et Instagram</li>
                  <li>• Les comportements clients sur les plateformes sociales</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-green-100 rounded-lg mr-4">
                    <Settings className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 2 — Créer et configurer ses comptes professionnels</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Création et paramétrage d'une page Facebook et d'un compte Instagram pro</li>
                  <li>• Lier les deux comptes pour une gestion simplifiée</li>
                  <li>• Optimiser les informations : bio, visuels, coordonnées, boutons d'action</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg mr-4">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 3 — Créer du contenu engageant</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Identifier les types de contenus qui attirent les clients (photo, vidéo, story, publication)</li>
                  <li>• Structurer ses messages pour capter l'attention</li>
                  <li>• Mettre en avant ses produits, services ou savoir-faire</li>
                  <li>• Rythme de publication et calendrier éditorial</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg mr-4">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 4 — Développer sa communauté et interagir avec ses clients</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Stratégies pour augmenter sa portée locale</li>
                  <li>• Répondre efficacement aux messages et commentaires</li>
                  <li>• Fidéliser grâce à une communication authentique et régulière</li>
                  <li>• Encourager les clients à partager et à interagir</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-pink-100 rounded-lg mr-4">
                    <BarChart3 className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Module 5 — Suivre ses résultats et ajuster sa stratégie</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Utiliser les statistiques Facebook et Instagram</li>
                  <li>• Identifier les publications qui fonctionnent le mieux</li>
                  <li>• Adapter sa stratégie selon les retours des abonnés</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Modalités pédagogiques de la formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Alternance d'apports théoriques et d'ateliers pratiques : création réelle de publications, analyse de comptes existants, exercices de planification et retouches d'images simples.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Modalités d'évaluation et certification</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Évaluation continue à travers les ateliers + présentation d'une mini-stratégie social media en fin de formation.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Certification Qualiopi de la formation</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-muted-foreground">
                Attestation de formation délivrée par IA Center, centre certifié Qualiopi.
              </p>
            </div>
          </div>

          <div className="text-center mb-8">
            <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Nous contacter
            </Link>
          </div>
          <div className="text-center">
            <Link to="/formations-professionnels" className="inline-block mt-8 text-primary underline text-lg">← Retour à la liste des formations</Link>
          </div>
        </div>
      </motion.div>
    );
  }

  // Page générique standardisée pour toutes les formations professionnelles restantes
  const defaultSeoData = getSEOData(formation);
  useSEO(defaultSeoData);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="section-padding"
    >
      <div className="container-minimal max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            {formation.title}
          </h1>
          <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium">
            {formation.duration}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Objectif</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {formation.objective}
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Description</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {formation.description}
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Durée</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <p className="text-lg text-muted-foreground">
              {formation.duration}
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Format</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <p className="text-lg text-muted-foreground">
              {formation.format}
            </p>
          </div>
        </div>

        <div className="text-center mb-8">
          <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Nous contacter
          </Link>
        </div>

        <div className="text-center">
          <Link to="/formations-professionnels" className="inline-block mt-8 text-primary underline text-lg">← Retour à la liste des formations</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FormationDetailPage;