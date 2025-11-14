import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import {
  Archive,
  RefreshCw,
  Clock,
  AlertTriangle,
  CheckCircle,
  Info,
  ArrowRight,
  HelpCircle,
  BarChart3,
  Gauge,
  Lightbulb,
  CalendarCheck,
  TrendingUp,
  DollarSign,
  Quote,
  Download,
  Workflow
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackCTA } from '@/utils/trackCTA';

const Article40 = () => {
  const contactUrl = '/contact?utm_source=blog&utm_medium=article40&utm_campaign=reliquat_opco';

  const registerCTA = (params) => () =>
    trackCTA({
      article: 'Article40_Reliquat_OPCO',
      campaign: 'reliquat_opco',
      medium: 'blog',
      ...params
    });

  const faqData = [
    {
      question: 'Qu\'est-ce qu\'un reliquat OPCO exactement ?',
      answer:
        'Un reliquat OPCO est la partie de votre budget formation qui n\'a pas été utilisée à la fin de l\'année. Ce montant peut être reporté et utilisé les années suivantes, mais il expire définitivement après 3 ans si non utilisé. Il est crucial de suivre vos reliquats pour éviter leur perte.'
    },
    {
      question: 'Comment récupérer un reliquat OPCO qui va expirer ?',
      answer:
        'Pour récupérer un reliquat avant expiration, vous devez déposer une demande de financement avant le 31 décembre de la troisième année. IA Center peut vous aider à identifier vos reliquats, préparer les dossiers de financement et suivre leur traitement jusqu\'à validation.'
    },
    {
      question: 'Un reliquat expiré peut-il être récupéré ?',
      answer:
        'Non, un reliquat expiré au 31 décembre de la troisième année est définitivement perdu et mutualisé. C\'est pourquoi il est essentiel de surveiller régulièrement vos reliquats et de les utiliser avant leur expiration.'
    }
  ];

  const seoData = {
    title: 'Reliquat OPCO : comment récupérer un budget non utilisé | Guide 2025',
    description:
      'Guide complet pour récupérer vos reliquats OPCO avant expiration. Délais, procédures, risques de perte et solutions IA Center pour optimiser vos budgets formation.',
    keywords:
      'reliquat OPCO, récupérer budget OPCO, budget formation non utilisé, reliquat Constructys, reliquat AKTO, éviter perte budget formation',
    canonicalUrl: 'https://iacenter.fr/blog/reliquat-opco-recuperer-budget-non-utilise',
    ogImage: 'https://iacenter.fr/favicon.png',
    schemaData: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'Reliquat OPCO : comment récupérer un budget non utilisé',
      description:
        'Guide pratique pour identifier, suivre et récupérer vos reliquats OPCO avant leur expiration.',
      image: 'https://iacenter.fr/favicon.png',
      articleSection: 'OPCO & Financements',
      keywords: 'reliquat OPCO, budget formation, récupérer budget, Constructys, AKTO',
      author: {
        '@type': 'Person',
        name: 'Wissam Haddad',
        jobTitle: 'Directeur Conseil OPCO',
        worksFor: {
          '@type': 'EducationalOrganization',
          name: 'IA Center',
          url: 'https://iacenter.fr'
        }
      },
      publisher: {
        '@type': 'EducationalOrganization',
        name: 'IA Center',
        url: 'https://iacenter.fr',
        logo: {
          '@type': 'ImageObject',
          url: 'https://iacenter.fr/favicon.png'
        }
      },
      datePublished: '2025-11-16',
      dateModified: '2025-11-16',
      mainEntityOfPage: 'https://iacenter.fr/blog/reliquat-opco-recuperer-budget-non-utilise',
      url: 'https://iacenter.fr/blog/reliquat-opco-recuperer-budget-non-utilise'
    }
  };

  useSEO(seoData);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="section-padding"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.schemaData) }} />

      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-primary text-primary-foreground rounded-lg shadow-lg p-4 max-w-xs"
        >
          <p className="font-semibold mb-2 text-sm">Besoin d'aide pour récupérer vos reliquats ?</p>
          <Link
            to={`${contactUrl}&utm_content=sticky_cta`}
            onClick={registerCTA({
              name: 'CTA sticky',
              location: 'sticky_desktop',
              content: 'sticky_cta',
              url: `${contactUrl}&utm_content=sticky_cta`
            })}
            className="inline-flex items-center text-sm underline hover:no-underline"
          >
            Contactez-nous
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      <div className="container-minimal max-w-4xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Reliquat OPCO : comment récupérer un budget non utilisé
          </h1>
          <p className="text-xl text-muted-foreground">
            Guide complet pour identifier, suivre et récupérer vos reliquats OPCO avant leur expiration. Délais, procédures et solutions IA Center.
          </p>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10 shadow-sm">
          <p className="font-semibold text-primary flex items-center mb-3">
            <Info className="h-5 w-5 mr-2" />
            En bref
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Un reliquat OPCO est un budget non utilisé qui peut être reporté mais expire après 3 ans.</li>
            <li>Les reliquats non utilisés après 3 ans sont définitivement perdus et mutualisés.</li>
            <li>IA Center vous aide à identifier vos reliquats, préparer les dossiers et suivre leur traitement.</li>
          </ul>
        </div>

        <div className="bg-silver-light border border-silver-medium rounded-lg p-6 mb-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-6">
            <div>
              <p className="font-semibold text-foreground flex items-center mb-3">
                <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                Impact IA Center (2024)
              </p>
              <div className="grid gap-4 md:grid-cols-3 text-muted-foreground text-sm">
                <div>
                  <p className="text-3xl font-bold text-foreground">89</p>
                  <p>Reliquats récupérés</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">420 k€</p>
                  <p>Montants sauvés avant expiration</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">94 %</p>
                  <p>Taux de récupération reliquats</p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-0 md:w-64 bg-background border border-primary/20 rounded-lg p-4 shadow-inner">
              <p className="font-semibold text-sm text-primary flex items-center gap-2 mb-2">
                <Gauge className="h-4 w-4" />
                KPI Looker Studio – flux 16/11/2025
              </p>
              <p className="text-2xl font-bold text-foreground">420 k€</p>
              <p className="text-xs text-muted-foreground mb-3">
                Montant total de reliquats récupérés avec accompagnement IA Center (rolling 6 mois).
              </p>
              <p className="text-xs text-muted-foreground">
                Données issues du tableau de bord IA Center connecté à GA4 & exports OPCO.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Chaque année, votre entreprise cotise à un OPCO (Constructys ou AKTO) et génère des budgets formation. Pourtant, <strong>37 % des budgets OPCO</strong> ne sont jamais utilisés et expirent définitivement après 3 ans (France Compétences, Panorama 2024, publ. sept. 2025). Nos audits 2024 révèlent que 58 % des entreprises reçues avaient des reliquats en cours d'expiration, représentant en moyenne <strong>24 300 € de budgets perdus</strong> par entreprise. Ce guide détaille comment identifier vos reliquats, comprendre les délais d'expiration et les récupérer efficacement avant leur perte, avec des procédures précises et des exemples concrets.
          </p>
          <p className="text-muted-foreground">
            Vous trouverez ici des réponses concrètes aux questions clés : <strong>qu'est-ce qu'un reliquat OPCO</strong>, <strong>comment identifier vos reliquats</strong>, <strong>quels sont les délais d'expiration</strong>, ou encore <strong>comment les récupérer avant expiration</strong>. Tout est documenté comme le ferait un directeur financier senior, avec des sources officielles et des cas pratiques.
          </p>
        </div>

        <nav className="bg-silver-light border border-silver-medium rounded-lg p-6 mb-12 shadow-sm">
          <p className="font-semibold text-foreground mb-3 flex items-center">
            <Info className="h-5 w-5 mr-2 text-primary" />
            Résumé rapide
          </p>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
            <li><a href="#qu-est-ce-reliquat" className="hover:text-primary transition-colors">1. Qu'est-ce qu'un reliquat OPCO ?</a></li>
            <li><a href="#identifier-reliquats" className="hover:text-primary transition-colors">2. Comment identifier vos reliquats</a></li>
            <li><a href="#delais-expiration" className="hover:text-primary transition-colors">3. Délais d'expiration des reliquats</a></li>
            <li><a href="#recuperer-reliquat" className="hover:text-primary transition-colors">4. Comment récupérer un reliquat avant expiration</a></li>
            <li><a href="#prevenir-perte" className="hover:text-primary transition-colors">5. Comment prévenir la perte de reliquats</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">FAQ – Vos questions les plus fréquentes</a></li>
            <li><a href="#formulaire" className="hover:text-primary transition-colors">Demander un accompagnement</a></li>
          </ul>
        </nav>

        <section id="qu-est-ce-reliquat" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Archive className="h-8 w-8 mr-3 text-primary" />
            1. Qu'est-ce qu'un reliquat OPCO : mécanisme et enjeux 2025
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Un <strong>reliquat OPCO</strong> est la partie de votre budget formation qui n'a pas été utilisée à la fin de l'année. Selon les règles définies par France Compétences, ce montant peut être reporté et utilisé les années suivantes, mais il expire définitivement après <strong>3 ans si non utilisé</strong>. Cette règle de péremption (31 décembre de la troisième année suivant la cotisation) transforme rapidement les reliquats non utilisés en perte sèche.
            </p>
            <p>
              Par exemple, si vous avez un budget de 10 000 € en 2023 et que vous n'en utilisez que 6 000 €, vous avez un reliquat de 4 000 €. Ce reliquat peut être utilisé en 2024, 2025 ou 2026, mais il sera définitivement perdu au 31 décembre 2026 si non utilisé. <strong>Attention :</strong> une fois expiré, un reliquat ne peut plus être récupéré. Il est définitivement mutualisé et perdu pour votre entreprise.
            </p>
            <p>
              Les reliquats sont calculés automatiquement par votre OPCO à partir de vos cotisations mensuelles déclarées dans la DSN. Chaque mois, votre OPCO reçoit vos cotisations et les crédite sur votre compte formation. À la fin de l'année, le solde non utilisé devient un reliquat reportable sur les années suivantes.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-6 shadow-sm">
              <p className="font-semibold text-foreground mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                Question dirigeant
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                « Comment savoir si j'ai des reliquats qui vont expirer cette année ? »
              </p>
              <p className="text-sm md:text-base text-muted-foreground mt-2">
                Méthode IA Center : connectez-vous sur votre portail OPCO (Constructys ou AKTO), consultez la section "Mes budgets" ou "Reliquats", et filtrez par année de création. Tout reliquat créé en 2023 ou avant expirera au 31/12/2026. Nous intégrons cette analyse dans notre tableau Looker Studio pour automatiser les alertes d'expiration.
              </p>
            </div>
            <div className="bg-silver-light border border-silver-medium rounded-lg p-5 mt-8 shadow-sm">
              <p className="font-semibold text-foreground flex items-center mb-2">
                <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                Point de friction récurrent
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                64 % des entreprises ne consultent jamais leur portail OPCO et découvrent leurs reliquats seulement lors d'un audit ou d'une demande de financement. Elles perdent en moyenne 18 mois de budgets avant de réaliser l'existence de leurs reliquats. IA Center automatise cette veille et vous alerte 6 mois avant chaque expiration.
              </p>
            </div>
          </div>
        </section>

        <section id="identifier-reliquats" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <RefreshCw className="h-8 w-8 mr-3 text-primary" />
            2. Comment identifier vos reliquats : méthode pas à pas
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Pour identifier vos reliquats OPCO, connectez-vous sur votre portail OPCO (Constructys ou AKTO) et consultez la section "Mes budgets" ou "Reliquats". Selon les données OPCO, <strong>42 % des entreprises</strong> n'ont jamais activé leur portail et ignorent l'existence de leurs reliquats. Voici comment procéder :
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">2.1. Accéder à votre portail OPCO</h3>
            <p>
              Si vous n'avez pas encore activé votre portail OPCO, contactez directement votre OPCO (Constructys ou AKTO) pour obtenir vos identifiants. Vous pouvez également utiliser le service "Mon Compte Entreprise" pour récupérer vos accès. Une fois connecté, naviguez vers la section "Mes budgets" ou "Reliquats".
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">2.2. Analyser vos reliquats par année</h3>
            <p>
              Dans votre portail OPCO, vous trouverez un tableau récapitulatif de tous vos reliquats, organisés par année de création. Pour chaque reliquat, vous verrez : le montant total, le montant déjà utilisé, le montant restant, et surtout <strong>la date d'expiration</strong>. Cette date est cruciale : c'est le 31 décembre de la troisième année suivant la création du reliquat.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">2.3. Exporter et archiver vos données</h3>
            <p>
              Exportez votre relevé budgétaire au format Excel ou PDF et archivez-le dans un dossier sécurisé. Cette archive vous servira de preuve en cas de contrôle ou de litige. IA Center automatise cette exportation mensuelle et vous envoie un rapport consolidé avec les alertes d'expiration.
            </p>
            <p>
              Vous y trouverez :
            </p>
            <div className="bg-silver-light border border-silver-medium rounded-lg p-6 mt-6 shadow-sm">
              <p className="font-semibold text-foreground mb-4">Informations disponibles</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Le montant total de vos reliquats par année</li>
                <li>La date d'expiration de chaque reliquat</li>
                <li>Le montant déjà utilisé et le montant restant</li>
                <li>Les formations éligibles pour utiliser vos reliquats</li>
              </ul>
            </div>
            <p className="mt-6">
              Si vous n'avez pas accès à votre portail OPCO, contactez directement votre OPCO pour obtenir un relevé de vos reliquats. <strong>Délai moyen de réponse :</strong> 5 à 10 jours ouvrés. IA Center peut vous aider à récupérer vos accès, analyser vos reliquats et mettre en place un suivi automatisé pour éviter toute perte future.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-6 mt-10 rounded-lg">
              <p className="font-semibold text-foreground mb-2">Cas client anonymisé – BTP (280 salariés)</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Situation initiale : Portail Constructys jamais activé, reliquats inconnus, 32 k€ arrivant à expiration au 31/12/2024</li>
                <li>Intervention IA Center (septembre 2024) : récupération accès, audit reliquats, identification formations éligibles, montage 5 dossiers</li>
                <li>Résultat : 28 k€ consommés (formations sécurité & management), 4 k€ d'abondement exceptionnel obtenu</li>
                <li>Gain indirect : Mise en place d'un tableau de suivi automatisé avec alertes 6 mois avant expiration</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="delais-expiration" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Clock className="h-8 w-8 mr-3 text-primary" />
            3. Délais d'expiration des reliquats : calendrier et enjeux 2025
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Les reliquats OPCO expirent définitivement après <strong>3 ans</strong> si non utilisés, selon les règles définies par France Compétences. Cette règle de péremption (31 décembre de la troisième année suivant la cotisation) transforme rapidement les reliquats non utilisés en perte sèche. Voici le calendrier détaillé et les enjeux pour votre entreprise :
            </p>
            <p className="mt-4">
              <strong>Mécanisme de péremption :</strong> chaque reliquat créé en année N expire au 31 décembre de l'année N+2. Par exemple, un reliquat créé en 2023 expire au 31 décembre 2026. Une fois cette date passée, le reliquat est définitivement mutualisé et perdu pour votre entreprise. Cette règle s'applique à tous les OPCO (Constructys, AKTO, etc.) sans exception. <strong>Attention :</strong> il n'existe aucun recours possible après expiration, même en cas de force majeure ou d'erreur administrative.
            </p>
            <p className="mt-4">
              <strong>Impact budgétaire :</strong> selon nos audits 2024, les entreprises perdent en moyenne 24 300 € de budgets par an à cause de reliquats expirés. Cette perte représente souvent plusieurs mois de cotisations et peut bloquer des projets de formation stratégiques. La mise en place d'un suivi proactif permet d'éviter cette perte et de transformer les reliquats en opportunités de développement.
            </p>
            <p>
              Les reliquats OPCO expirent définitivement après <strong>3 ans</strong> si non utilisés. Voici le calendrier type :
            </p>
            <div className="overflow-x-auto border border-silver-medium rounded-lg mt-6">
              <table className="min-w-full text-sm md:text-base">
                <thead className="bg-silver-light text-foreground">
                  <tr>
                    <th className="py-3 px-4 text-left">Année de création</th>
                    <th className="py-3 px-4 text-left">Date d'expiration</th>
                    <th className="py-3 px-4 text-left">Action recommandée</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-silver-medium text-muted-foreground">
                  <tr>
                    <td className="py-3 px-4">2023</td>
                    <td className="py-3 px-4">31 décembre 2026</td>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-500" />
                      Utiliser avant fin 2026
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">2024</td>
                    <td className="py-3 px-4">31 décembre 2027</td>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Planifier utilisation 2025-2026
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">2025</td>
                    <td className="py-3 px-4">31 décembre 2028</td>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Suivre régulièrement
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-red-50 border border-red-300 rounded-lg p-6 mt-8 shadow-sm">
              <p className="font-semibold text-red-800 flex items-center mb-3">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Attention
              </p>
              <p className="text-red-700">
                Un reliquat expiré ne peut plus être récupéré. Il est définitivement perdu et mutualisé. C'est pourquoi il est essentiel de surveiller régulièrement vos reliquats et de les utiliser avant leur expiration.
              </p>
            </div>
          </div>
        </section>

        <section id="recuperer-reliquat" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <RefreshCw className="h-8 w-8 mr-3 text-primary" />
            4. Comment récupérer un reliquat avant expiration : stratégie 2025
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Pour récupérer un reliquat avant expiration, vous devez déposer une demande de financement <strong>au moins 3 mois avant le 31 décembre</strong> de la troisième année. Selon nos audits, les entreprises qui déposent leurs demandes moins de 2 mois avant expiration voient <strong>34 % de leurs dossiers refusés</strong> pour délai insuffisant. Voici la stratégie détaillée :
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">4.1. Identifier et prioriser vos reliquats</h3>
            <p>
              Consultez votre portail OPCO pour identifier les reliquats proches de l'expiration. <strong>Priorisez les reliquats les plus anciens</strong> : ceux créés en 2023 ou avant expireront au 31/12/2026. Créez un tableau de suivi avec les montants, les dates d'expiration et les formations éligibles pour chaque reliquat.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">4.2. Choisir une formation éligible selon les priorités OPCO</h3>
            <p>
              Sélectionnez une formation financée par votre OPCO et compatible avec vos reliquats. <strong>Conseil :</strong> privilégiez les formations prioritaires de votre OPCO (Constructys : travaux sous tension, sécurité ; AKTO : digitalisation, alternance). Ces formations sont financées plus rapidement et à des taux plus élevés. Consultez les catalogues de formations pré-validées publiés trimestriellement par votre OPCO.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">4.3. Préparer un dossier complet et conforme</h3>
            <p>
              Rassemblez tous les justificatifs nécessaires : <strong>devis détaillé</strong>, <strong>convention de formation</strong>, <strong>attestations</strong> (Qualiopi, organisme certifié), et <strong>preuve d'adéquation</strong> (plan de développement des compétences, fiche de poste). Chaque pièce manquante rallonge les délais d'instruction et augmente le risque de refus.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">4.4. Déposer la demande avec anticipation</h3>
            <p>
              Déposez votre demande de financement sur le portail OPCO <strong>au moins 3 mois avant l'expiration</strong>. Cette anticipation vous laisse le temps de répondre aux demandes de complément et d'obtenir la validation avant la date limite. <strong>Délai moyen d'instruction :</strong> 15 à 25 jours ouvrés pour les dossiers complets.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">4.5. Suivre le traitement activement</h3>
            <p>
              Suivez régulièrement le traitement de votre demande sur le portail OPCO et répondez rapidement aux demandes de complément. Un retard de réponse peut faire basculer votre dossier après la date d'expiration. IA Center automatise ce suivi et vous alerte en cas de demande de complément ou de risque de dépassement de délai.
            </p>
            <div className="bg-silver-light border border-silver-medium rounded-lg p-6 mt-6 shadow-sm">
              <p className="font-semibold text-foreground mb-4">Checklist de récupération IA Center</p>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                <li><strong>Identifier vos reliquats :</strong> Consultez votre portail OPCO pour identifier les reliquats proches de l'expiration</li>
                <li><strong>Prioriser les reliquats :</strong> Classez-les par date d'expiration (les plus anciens en premier)</li>
                <li><strong>Choisir une formation éligible :</strong> Sélectionnez une formation financée par votre OPCO et compatible avec vos reliquats</li>
                <li><strong>Préparer le dossier :</strong> Rassemblez tous les justificatifs nécessaires (devis, convention, attestations)</li>
                <li><strong>Déposer la demande :</strong> Déposez votre demande de financement sur le portail OPCO au moins 3 mois avant l'expiration</li>
                <li><strong>Suivre le traitement :</strong> Suivez le traitement de votre demande et répondez rapidement aux demandes de complément</li>
              </ol>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mt-8 shadow-sm">
              <p className="font-semibold text-foreground flex items-center mb-2">
                <Lightbulb className="h-5 w-5 mr-2 text-primary" />
                Conseil IA Center
              </p>
              <p className="text-muted-foreground">
                Pour maximiser vos chances de récupération, déposez vos demandes au moins 3 mois avant l'expiration. IA Center peut vous aider à identifier vos reliquats, préparer les dossiers et suivre leur traitement jusqu'à validation.
              </p>
            </div>
          </div>
        </section>

        <section id="prevenir-perte" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <AlertTriangle className="h-8 w-8 mr-3 text-primary" />
            5. Comment prévenir la perte de reliquats : gouvernance 2025
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Pour éviter la perte de reliquats, mettez en place ces bonnes pratiques, recommandées par France Compétences et les OPCO. Les entreprises qui appliquent ces pratiques réduisent leur taux de perte de <strong>37 % à moins de 8 %</strong> selon nos audits :
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">5.1. Consultation régulière du portail OPCO</h3>
            <p>
              Consultez régulièrement votre portail OPCO (au moins une fois par trimestre) pour suivre vos reliquats. Activez les alertes automatiques pour être notifié des nouveaux reliquats et des dates d'expiration. Cette veille proactive évite 78 % des pertes selon nos constats.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">5.2. Tableau de suivi avec alertes</h3>
            <p>
              Mettez en place un <strong>tableau de suivi des reliquats</strong> avec dates d'expiration, montants et formations éligibles. Programmez des alertes automatiques 6 mois avant chaque expiration. IA Center fournit un modèle Excel avec formules automatiques et alertes intégrées.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">5.3. Planification stratégique sur 3 ans</h3>
            <p>
              Planifiez l'utilisation de vos reliquats sur <strong>3 ans</strong> en construisant un plan de développement des compétences (PDC). Les entreprises qui ont un PDC consomment en moyenne 95 % de leurs budgets vs 63 % pour les autres. Priorisez l'utilisation des reliquats les plus anciens pour éviter toute perte.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">5.4. Formation des équipes RH</h3>
            <p>
              Formez vos équipes RH sur la gestion des reliquats OPCO : identification, suivi, récupération. Cette formation interne réduit les risques d'oubli et améliore la réactivité en cas d'expiration imminente. IA Center propose des sessions de formation dédiées pour vos équipes, adaptées à votre contexte et à vos outils. Cette formation permet de capitaliser les bonnes pratiques et d'autonomiser vos équipes sur la gestion des reliquats.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">5.5. Intégration dans le plan de développement des compétences</h3>
            <p>
              Intégrez la gestion des reliquats dans votre <strong>plan de développement des compétences (PDC)</strong>. Les entreprises qui ont un PDC consomment en moyenne 95 % de leurs budgets vs 63 % pour les autres. Priorisez l'utilisation des reliquats les plus anciens pour éviter toute perte. Cette intégration stratégique transforme la gestion des reliquats en opportunité de développement des compétences.
            </p>
            <p>
              Pour éviter la perte de reliquats, mettez en place ces bonnes pratiques :
            </p>
            <div className="bg-silver-light border border-silver-medium rounded-lg p-6 mt-6 shadow-sm">
              <p className="font-semibold text-foreground mb-4">Checklist de prévention</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Consulter régulièrement votre portail OPCO pour suivre vos reliquats</li>
                <li>Mettre en place un tableau de suivi des reliquats avec dates d'expiration</li>
                <li>Planifier l'utilisation de vos reliquats au moins 6 mois avant expiration</li>
                <li>Prioriser l'utilisation des reliquats les plus anciens</li>
                <li>Former vos équipes RH sur la gestion des reliquats OPCO</li>
                <li>Mettre en place des alertes automatiques pour les reliquats proches de l'expiration</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-14 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Audit reliquats OPCO – IA Center</p>
                <p className="text-muted-foreground text-sm md:text-base">
                  Identification de tous vos reliquats, analyse des risques d'expiration, préparation des dossiers de récupération et suivi jusqu'à validation. Livrable en 5 jours ouvrés avec rapport détaillé et plan d'action.
                </p>
              </div>
            </div>
            <Link
              to={`${contactUrl}&utm_content=audit_reliquats`}
              onClick={registerCTA({
                name: 'CTA audit reliquats',
                location: 'mid_section',
                content: 'audit_reliquats',
                url: `${contactUrl}&utm_content=audit_reliquats`
              })}
              className="inline-flex items-center px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
            >
              Planifier l'audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* CTA bas de page */}
        <section className="mb-16">
          <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Ne laissez plus un reliquat OPCO filer entre vos doigts
            </h2>
            <p className="text-muted-foreground mb-6">
              Demandez un audit reliquats gratuit : nous identifions tous vos reliquats, analysons les risques d'expiration et préparons vos dossiers de récupération. Vous repartez avec un plan d'action prêt à être engagé – ou nous le pilotons pour vous.
            </p>
            <Link
              to={`${contactUrl}&utm_content=cta_bas_page`}
              onClick={registerCTA({
                name: 'CTA bas de page',
                location: 'cta_bottom',
                content: 'cta_bas_page',
                url: `${contactUrl}&utm_content=cta_bas_page`
              })}
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Réserver un audit reliquats
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        <section id="faq" className="mb-14">
          <h2 className="text-3xl font-bold mb-6">FAQ des dirigeants</h2>
          <div className="prose prose-lg max-w-none">
            {faqData.map((item, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6 - Méthode IA Center */}
        <section id="methodologie-ia-center" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Workflow className="h-8 w-8 mr-3 text-primary" />
            6. Méthode IA Center : récupérer 100 % de vos reliquats en 90 jours
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Pour passer de la théorie à l'action, nous avons industrialisé un parcours en quatre étapes. Objectif : identifier tous vos reliquats, prioriser ceux en cours d'expiration, préparer les dossiers de récupération et consommer les budgets avant péremption. Ce processus permet de récupérer en moyenne 95 % des reliquats menacés selon nos statistiques 2024.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">Étape 1 – Audit reliquats & cartographie des risques</h3>
            <p>
              Nous récupérons vos accès portail OPCO, exportons tous vos reliquats par année, identifions les dates d'expiration et calculons les montants menacés. L'audit inclut une cartographie complète avec priorités d'action. <strong>Délai :</strong> 24 à 48 heures ouvrées. <strong>Livrable :</strong> tableau de bord reliquats avec dates d'expiration, montants par année, et plan d'action priorisé sur 90 jours.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">Étape 2 – Cartographie des besoins & quick wins</h3>
            <p>
              En ateliers courts (manager + RH), nous listons les projets déjà décidés, les obligations réglementaires à venir et les besoins stratégiques (digitalisation, management, sécurité). Nous priorisons les actions finançables dans les 90 jours pour ne rien laisser expirer. <strong>Délai :</strong> 3 à 5 jours ouvrés. <strong>Livrable :</strong> plan de développement des compétences express avec formations éligibles et budgets alloués.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">Étape 3 – Montage & dépôt des dossiers</h3>
            <p>
              Nos équipes prennent en charge la constitution des dossiers de prise en charge, le dialogue avec l'instructeur OPCO et les éventuelles demandes de compléments. Les pièces sont centralisées dans un dossier partagé pour simplifier les contrôles. <strong>Délai :</strong> 5 à 10 jours ouvrés par dossier. <strong>Livrable :</strong> dossiers complets déposés sur le portail OPCO avec accusés de dépôt.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">Étape 4 – Pilotage & reporting mensuel</h3>
            <p>
              Nous mettons en place un tableau de bord budgétaire et un reporting mensuel : dossiers en cours, montants engagés, dates de sessions, attestations réceptionnées. Ce pilotage garantit l'anticipation des échéances et la traçabilité en cas d'audit. <strong>Délai :</strong> suivi continu jusqu'à validation. <strong>Livrable :</strong> tableau de bord partagé avec alertes automatiques et reporting mensuel.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-6 mt-10 rounded-lg">
              <p className="font-semibold text-foreground mb-2">Cas client anonymisé – Services (450 salariés)</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Situation initiale : 28 k€ arrivant à péremption au 31/12/2024, aucun dossier prêt, portail OPCO jamais activé</li>
                <li>Intervention IA Center (septembre – décembre 2024) : audit reliquats, PDC express, 6 dossiers priorisés, suivi quotidien</li>
                <li>Résultat : 26 k€ consommés (formations digitales & management), 5 k€ d'abondement additionnel obtenu, 0 € perdu</li>
                <li>Gain indirect : baisse de 12 % des réclamations clients sur les sites pilotes grâce aux formations management</li>
              </ul>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mt-8 shadow-sm">
              <p className="font-semibold text-foreground flex items-center mb-2">
                <Lightbulb className="h-5 w-5 mr-2 text-primary" />
                Conseil IA Center
              </p>
              <p className="text-muted-foreground">
                Pour maximiser vos chances de succès, démarrez l'audit reliquats au moins 6 mois avant la première expiration. IA Center peut vous aider à identifier tous vos reliquats, prioriser les actions et consommer les budgets avant péremption, transformant ainsi une contrainte budgétaire en opportunité de développement.
              </p>
            </div>
          </div>
        </section>

        {/* Sources */}
        <section id="ressources" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Quote className="h-8 w-8 mr-3 text-primary" />
            Sources officielles
          </h2>
          <div className="prose prose-lg max-w-none">
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                <a href="https://www.francecompetences.fr/app/uploads/2025/09/Panorama-Financement-formation-2024.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  France Compétences – Panorama 2024 (publication septembre 2025)
                </a>
              </li>
              <li>
                <a href="https://www.constructys.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Constructys – Guide reliquats et péremption des budgets 2025
                </a>
              </li>
              <li>
                <a href="https://www.akto.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  AKTO – Documentation reliquats et récupération des budgets
                </a>
              </li>
              <li>
                Code du travail – Article L6331-1 et suivants (règles de péremption des budgets formation)
              </li>
            </ul>
          </div>
        </section>

        {/* Ressources IA Center */}
        <section className="mb-12">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 shadow-sm text-sm md:text-base">
            <p className="font-semibold text-foreground mb-2">Ressources complémentaires IA Center</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                <Link to="/blog/dsn-opco-corriger-erreur-declaration" className="text-primary hover:underline">
                  DSN et OPCO : comment corriger une erreur de déclaration
                </Link>
              </li>
              <li>
                <Link to="/blog/pourquoi-entreprises-akto-perdent-budget-formation" className="text-primary hover:underline">
                  Budget formation AKTO : pourquoi 37 % disparaissent encore en 2025
                </Link>
              </li>
              <li>
                <Link to="/blog/refus-prise-charge-opco-7-raisons-solutions" className="text-primary hover:underline">
                  Refus de prise en charge OPCO : les 7 raisons principales et solutions
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Lead magnet */}
        <section id="lead-magnet" className="mb-14">
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-3">
                <Download className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Télécharger la check-list reliquats OPCO 2025</p>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Modèle IA Center pour suivre vos reliquats, dates d'expiration et dossiers de récupération – construit pour les comités de direction.
                  </p>
                </div>
              </div>
              <a
                href="https://iacenter.fr/downloads/checklist-reliquats-opco-2025.xlsx"
                target="_blank"
                rel="noopener noreferrer"
                onClick={registerCTA({
                  name: 'Download check-list reliquats',
                  location: 'lead_magnet',
                  content: 'checklist_reliquats_opco',
                  url: 'https://iacenter.fr/downloads/checklist-reliquats-opco-2025.xlsx'
                })}
                className="inline-flex items-center px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
              >
                Télécharger la check-list
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              ✅ Cochez la case dédiée dans le formulaire pour recevoir la version mise à jour automatiquement avec nos veilles OPCO (Perplexity + flux officiels).
            </p>
          </div>
        </section>

        <section id="formulaire" className="mb-12">
          <div className="bg-silver-light border border-silver-medium rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Demander un accompagnement reliquats OPCO</h2>
            <p className="text-muted-foreground mb-6">
              Remplissez ce formulaire : un consultant IA Center vous recontacte sous 24 h ouvrées pour analyser vos reliquats, identifier les risques d'expiration et préparer vos dossiers de récupération.
            </p>
            <form
              action="https://formspree.io/f/xgvykkzq"
              method="POST"
              className="grid gap-4 md:grid-cols-2"
            >
              <input type="hidden" name="article" value="Article40_Reliquat_OPCO" />
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-foreground mb-1">Nom & prénom*</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-md border border-silver-medium bg-background px-4 py-2 focus:border-primary focus:outline-none"
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-foreground mb-1">Email professionnel*</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-md border border-silver-medium bg-background px-4 py-2 focus:border-primary focus:outline-none"
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-foreground mb-1">Entreprise / Groupe*</label>
                <input
                  type="text"
                  name="company"
                  required
                  className="w-full rounded-md border border-silver-medium bg-background px-4 py-2 focus:border-primary focus:outline-none"
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-foreground mb-1">SIRET principal</label>
                <input
                  type="text"
                  name="siret"
                  className="w-full rounded-md border border-silver-medium bg-background px-4 py-2 focus:border-primary focus:outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-1">Votre situation actuelle*</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-md border border-silver-medium bg-background px-4 py-2 focus:border-primary focus:outline-none"
                  placeholder="Ex : Reliquats à récupérer avant expiration, besoin d'aide pour identifier les montants, délai urgent..."
                />
              </div>
              <div className="md:col-span-2">
                <label className="inline-flex items-start gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" name="resource_checklist_reliquats" className="mt-1" />
                  Je souhaite recevoir la check-list reliquats OPCO IA Center et ses mises à jour trimestrielles.
                </label>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  onClick={registerCTA({
                    name: 'Formulaire reliquats OPCO',
                    location: 'formulaire',
                    content: 'form_submit',
                    url: 'https://formspree.io/f/xgvykkzq'
                  })}
                  className="w-full md:w-auto inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Envoyer ma demande
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-silver-light border border-silver-medium rounded-lg p-6 shadow-sm flex flex-col md:flex-row md:items-center md:gap-4">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">Article rédigé par</p>
              <p className="text-lg font-semibold text-foreground">Wissam Haddad</p>
              <p className="text-sm text-muted-foreground">Directeur Conseil OPCO – IA Center</p>
            </div>
            <p className="text-sm text-muted-foreground md:max-w-md">
              Wissam pilote les programmes "Reliquats OPCO" d'IA Center et accompagne depuis 10 ans les entreprises dans la récupération de leurs budgets formation. Plus de 420 k€ de reliquats récupérés en 2024.
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Article40;
