import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { formationsPro, formationsParticuliers } from './FormationsData';
import { motion } from 'framer-motion';
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
  Accessibility
} from 'lucide-react';

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
            <h2 className="text-3xl font-bold text-foreground mb-8">Programme détaillé</h2>
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

  // Page standard pour les autres formations
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="section-padding"
    >
      <div className="container-minimal max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{formation.title}</h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-foreground mb-2">Objectif</h2>
          <p className="text-muted-foreground">{formation.objective}</p>
        </div>
        <Link to="/formations" className="inline-block mt-4 text-primary underline">← Retour à la liste des formations</Link>
      </div>
    </motion.div>
  );
};

export default FormationDetailPage;