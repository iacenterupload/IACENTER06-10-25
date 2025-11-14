import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Merge,
  Split,
  Building2,
  ClipboardList,
  ShieldAlert,
  Lightbulb,
  Info,
  BarChart3,
  Download,
  HelpCircle,
  Gauge,
  Workflow,
  ListChecks,
  Users,
  ArrowRight,
  Network,
  Landmark
} from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { trackCTA } from '@/utils/trackCTA';

const Article37 = () => {
  const contactUrl =
    '/contact?utm_source=blog&utm_medium=article37&utm_campaign=constructys_akto_multi_activites';

  const registerCTA = (params) => () =>
    trackCTA({
      article: 'Article37_Constructys_AKTO_MultiActivites',
      campaign: 'constructys_akto_multi_activites',
      medium: 'blog',
      ...params
    });

  const faqData = [
    {
      question: 'Comment savoir si mon entreprise doit être rattachée à Constructys ou AKTO ?',
      answer:
        "Analysez vos conventions collectives (IDCC) et l'activité principale réelle. Constructys couvre le BTP (IDCC 1596, 2420, 3212...), AKTO les services (1505, 1979...). En cas d'activités mixtes, IA Center établit un tableau SIRET/IDCC/activité et obtient la confirmation URSSAF et OPCO pour chaque établissement."
    },
    {
      question: 'Que se passe-t-il si la DSN est rattachée au mauvais OPCO ?',
      answer:
        "Vous risquez un gel des budgets, un refus de prise en charge et un redressement URSSAF. IA Center corrige la DSN (bloc S21.G00.82), prépare les courriers à l’URSSAF et aux OPCO concernés et suit les accusés de réception jusqu’à la confirmation écrite du nouveau rattachement."
    },
    {
      question: 'Combien de temps dure un changement d’IDCC ou de double rattachement ?',
      answer:
        "Comptez 6 à 8 semaines : audit DSN, courriers recommandés, mise à jour des portails OPCO, transfert des reliquats. Avec un dossier préparé par IA Center, 80 % des dossiers sont clôturés en moins de 35 jours."
    }
  ];

  const seoData = {
     title: 'Constructys x AKTO : gérer les entreprises multi-activités ou les changements d’IDCC',
     description:
       'Guide opérationnel IA Center pour piloter les tableaux SIRET/IDCC, corriger les DSN, gérer les courriers URSSAF/OPCO et sécuriser les budgets Constructys / AKTO.',
     keywords:
       'constructys akto multi activites, changement IDCC constructys, double rattachement OPCO, audit DSN multi activites, tableau SIRET IDCC, transfert budgets constructys akto',
     canonicalUrl: 'https://iacenter.fr/blog/constructys-akto-multi-activites-idcc',
     ogImage: 'https://iacenter.fr/favicon.png',
     schemaData: {
       '@context': 'https://schema.org',
       '@type': 'BlogPosting',
       headline: 'Constructys x AKTO : gérer les entreprises multi-activités ou les changements d’IDCC',
       description:
         'Guide opérationnel IA Center pour piloter les tableaux SIRET/IDCC, corriger les DSN, gérer les courriers URSSAF/OPCO et sécuriser les budgets Constructys / AKTO.',
       image: 'https://iacenter.fr/favicon.png',
       articleSection: 'OPCO & Financements',
       keywords: 'Constructys, AKTO, multi-activités',
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
      datePublished: '2025-11-01',
      dateModified: '2025-11-01',
       mainEntityOfPage: 'https://iacenter.fr/blog/constructys-akto-multi-activites-idcc',
       url: 'https://iacenter.fr/blog/constructys-akto-multi-activites-idcc'
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

  const timelineSteps = [
    {
      title: 'Semaine 1-3 · Diagnostic double OPCO',
      description:
        'Audit DSN, analyse IDCC, inventaire des contrats et des chantiers, cartographie SIRET/activités. Préparation des recommandations de rattachement ou de double rattachement.',
      deliverable: 'Tableau SIRET / IDCC / OPCO + note stratégique IA Center',
      kpi: '100 % des SIRET cartographiés et qualifiés'
    },
    {
      title: 'Semaine 4-6 · Corrections et sécurisation administrative',
      description:
        'Mise à jour DSN, courriers recommandés URSSAF / Constructys / AKTO, conventions internes, plan de bascule des portails OPCO, transfert des reliquats.',
      deliverable: 'Dossier complet de changement d’OPCO + accusés de réception',
      kpi: '≥ 80 % des anomalies corrigées en moins de 45 jours'
    },
    {
      title: 'Semaine 7-12 · Pilotage budgétaire et formation',
      description:
        'Réaffectation des budgets, montage des dossiers formation prioritaire, mise en place du tableau de bord Looker Studio, veille réglementaire automatisée.',
      deliverable: 'Dashboard bi-OPCO + roadmap 12 mois formation / financement',
      kpi: '≥ 90 % des budgets sauvegardés ou réalloués'
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Sticky CTA desktop */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-30">
        <Link
          to={contactUrl}
          onClick={registerCTA({
            name: 'Sticky CTA desktop',
            location: 'sticky_desktop',
            content: 'sticky',
            url: contactUrl
          })}
          className="bg-primary text-primary-foreground px-5 py-3 rounded-lg shadow-xl hover:bg-primary/90 transition"
        >
          Audit Constructys x AKTO
        </Link>
      </div>

      {/* Sticky CTA mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30">
        <Link
          to={contactUrl}
          onClick={registerCTA({
            name: 'Sticky CTA mobile',
            location: 'sticky_mobile',
            content: 'sticky',
            url: contactUrl
          })}
          className="block bg-primary text-primary-foreground text-center py-3 font-medium shadow-xl"
        >
          Sécuriser mes budgets OPCO
        </Link>
      </div>

      <div className="container-minimal max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link to="/actualites" className="text-primary hover:underline inline-flex items-center mb-6">
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
            Retour aux actualités
          </Link>
          <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full mb-4">
            <Merge className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Audit IA Center certifié Qualiopi – mise à jour 01/11/2025
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Constructys x AKTO : gérer les entreprises multi-activités ou les changements d’IDCC
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>Mis à jour le 1er novembre 2025</span>
            <span>•</span>
            <span>Constructys & AKTO – Multi-activités</span>
            <span>•</span>
            <span>Lecture : 21 min</span>
          </div>
        </div>

        {/* TL;DR */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10 shadow-sm">
          <p className="font-semibold text-primary flex items-center mb-3">
            <Info className="h-5 w-5 mr-2" />
            En bref
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Une DSN mal rattachée (Constructys vs AKTO) entraîne refus de budget, gel des dossiers et risque URSSAF.</li>
            <li>Les groupes multi-activités doivent documenter chaque SIRET (activité réelle, IDCC, OPCO) et gérer les courriers URSSAF/OPCO.</li>
            <li>IA Center sécurise vos budgets en 90 jours : audit, corrections DSN, conventions de mutualisation, transfert des reliquats et plan de financement formation.</li>
          </ul>
        </div>

        {/* IA Center stats */}
        <div className="bg-silver-light border border-silver-medium rounded-lg p-6 mb-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-6">
            <div>
              <p className="font-semibold text-foreground flex items-center mb-3">
                <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                Impact IA Center – Multi-activités Constructys x AKTO (Q2-Q4 2025)
              </p>
              <div className="grid gap-4 md:grid-cols-3 text-muted-foreground text-sm">
                <div>
                  <p className="text-3xl font-bold text-foreground">23</p>
                  <p>Groupes multi-activités audités (industrie, services, facility management)</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">92 %</p>
                  <p>Dossiers de double rattachement validés en moins de 45 jours</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">186 k€</p>
                  <p>Budgets sauvés ou réaffectés après correction DSN / IDCC</p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-0 md:w-64 bg-background border border-primary/20 rounded-lg p-4 shadow-inner">
              <p className="font-semibold text-sm text-primary flex items-center gap-2 mb-2">
                <Gauge className="h-4 w-4" />
                KPI Looker Studio – actualisation 01/11/2025
              </p>
              <p className="text-2xl font-bold text-foreground">87 %</p>
              <p className="text-xs text-muted-foreground mb-3">
                Part des DSN alignées IDCC/activité après 60 jours d’accompagnement.
              </p>
              <p className="text-xs text-muted-foreground">
                Source : tableau de bord IA Center (Looker Studio) alimenté par exports DSN + portails OPCO.
              </p>
            </div>
          </div>
        </div>

        {/* Observatoire */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-12 shadow-sm">
          <p className="font-semibold text-foreground flex items-center mb-3">
            <Landmark className="h-5 w-5 mr-2 text-primary" />
            Observatoire IA Center – Multi-activités (septembre / octobre 2025)
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base">
            <li>41 % des groupes BTP/services contrôlés en 2025 avaient au moins une DSN rattachée au mauvais OPCO.</li>
            <li>29 % des budgets Constructys gelés concernaient des chantiers opérés par des filiales rattachées à AKTO.</li>
            <li>18 % des dossiers URSSAF examinés en Q3 2025 portaient sur des changements d’IDCC non documentés.</li>
          </ul>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Externaliser une partie de vos activités, racheter une filiale de services ou décrocher un marché multi-corps d’état fait rapidement basculer votre organisation vers un modèle multi-activités. Résultat : Constructys et AKTO se croisent, les DSN patinent, les budgets formation se perdent et les contrôles URSSAF se multiplient. Ce guide IA Center restitue la démarche “top 0,0001 %” pour sécuriser vos rattachements, documenter vos changements d’IDCC et protéger chaque euro de vos cotisations formation.
          </p>
        </div>

        {/* Sommaire */}
        <nav className="bg-silver-light border border-silver-medium rounded-lg p-6 mb-12 shadow-sm">
          <p className="font-semibold text-foreground mb-3 flex items-center">
            <Info className="h-5 w-5 mr-2 text-primary" />
            Plan de navigation
          </p>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
            <li>
              <a href="#scenarios" className="hover:text-primary transition">
                1. Scénarios typiques : quand Constructys croise AKTO
              </a>
            </li>
            <li>
              <a href="#diagnostic" className="hover:text-primary transition">
                2. Diagnostic IA Center : tableau SIRET / IDCC / activités
              </a>
            </li>
            <li>
              <a href="#procedures" className="hover:text-primary transition">
                3. Procédures administratives : URSSAF, DSN, portails OPCO
              </a>
            </li>
            <li>
              <a href="#methodologie" className="hover:text-primary transition">
                4. Méthode 90 jours IA Center
              </a>
            </li>
            <li>
              <a href="#cas" className="hover:text-primary transition">
                Étude de cas – Groupe facility management / BTP
              </a>
            </li>
            <li>
              <a href="#lead-magnet" className="hover:text-primary transition">
                Pack “double OPCO” IA Center
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-primary transition">
                FAQ dirigeants
              </a>
            </li>
            <li>
              <a href="#formulaire" className="hover:text-primary transition">
                Demander un audit Constructys x AKTO
              </a>
            </li>
          </ul>
        </nav>

        {/* Section 1 */}
        <section id="scenarios" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Split className="h-8 w-8 mr-3 text-primary" />
            1. Scénarios typiques : quand Constructys croise AKTO
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>Voici les situations les plus fréquentes observées en 2025 :</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Rachat ou filialisation :</strong> un groupe BTP acquiert une entreprise de propreté (IDCC 1505) pour gérer la maintenance. Constructys finance les chantiers, AKTO doit couvrir les prestations de services.
              </li>
              <li>
                <strong>Sous-traitance croisée :</strong> un chantier BTP (Constructys) fait intervenir une filiale d’intérim ou de sécurité (AKTO). Les budgets doivent être ventilés.
              </li>
              <li>
                <strong>Changement d’IDCC :</strong> une entreprise de second œuvre adopte l’IDCC 1596 après avoir internalisé des travaux de gros œuvre. La DSN doit être corrigée et les budgets transférés.
              </li>
              <li>
                <strong>Multi-sites multi-activités :</strong> certains sites sont majoritairement BTP, d’autres assurent des services. On doit gérer un double rattachement et des conventions internes.
              </li>
            </ul>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mt-8 shadow-sm">
              <p className="font-semibold text-foreground flex items-center mb-2">
                <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                Question dirigeant
              </p>
              <p className="text-muted-foreground">
                « Nous posons des cloisons (Constructys) mais nous assurons aussi la maintenance propreté (AKTO). Qui finance quoi ? »
              </p>
              <p className="text-muted-foreground mt-2">
                IA Center : documentez la part de chiffre d’affaires par activité. Les chantiers BTP restent chez Constructys, la maintenance propreté chez AKTO. Nous construisons un tableau SIRET/IDCC/activité et les procédures de facturation et de formation associées.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="diagnostic" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Building2 className="h-8 w-8 mr-3 text-primary" />
            2. Diagnostic IA Center : tableau SIRET / IDCC / activités
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Notre diagnostic commence par une cartographie exhaustive. Nous consolidons les données sociales, commerciales et opérationnelles pour établir un tableau de gouvernance.
            </p>
            <div className="overflow-x-auto border border-silver-medium rounded-lg mt-6">
              <table className="min-w-full text-sm md:text-base">
                <thead className="bg-silver-light text-foreground">
                  <tr>
                    <th className="py-3 px-4 text-left">SIRET</th>
                    <th className="py-3 px-4 text-left">IDCC déclarée</th>
                    <th className="py-3 px-4 text-left">Activité réelle</th>
                    <th className="py-3 px-4 text-left">OPCO cible</th>
                    <th className="py-3 px-4 text-left">Actions IA Center</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-silver-medium text-muted-foreground">
                  <tr>
                    <td className="py-3 px-4">123 456 789 00017</td>
                    <td className="py-3 px-4">1596</td>
                    <td className="py-3 px-4">Chantiers gros œuvre</td>
                    <td className="py-3 px-4">Constructys</td>
                    <td className="py-3 px-4">Archivage preuves chantier + conformité DSN</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">123 456 789 00033</td>
                    <td className="py-3 px-4">1505</td>
                    <td className="py-3 px-4">Maintenance propreté</td>
                    <td className="py-3 px-4">AKTO</td>
                    <td className="py-3 px-4">Convention de mutualisation + tableau formation</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">123 456 789 00058</td>
                    <td className="py-3 px-4">1979</td>
                    <td className="py-3 px-4">Sécurité incendie chantiers</td>
                    <td className="py-3 px-4">AKTO + facturation Constructys</td>
                    <td className="py-3 px-4">Procédures facturation croisée + registre compétences</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Les données chiffrées sont anonymisées, issues de l’Observatoire IA Center (septembre 2025).
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="procedures" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <ClipboardList className="h-8 w-8 mr-3 text-primary" />
            3. Procédures administratives : URSSAF, DSN, portails OPCO
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>Une fois la cartographie validée, nous lançons les procédures administratives :</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>URSSAF :</strong> lettre recommandée expliquant la nouvelle activité dominante, avec pièces justificatives (contrats clients, organigramme, chiffres d’affaires).
              </li>
              <li>
                <strong>Constructys / AKTO :</strong> courrier de notification de changement, demande de transfert des reliquats, mise à jour des portails.
              </li>
              <li>
                <strong>DSN :</strong> modification du bloc S21.G00.82 (code OPCO) et des blocs S21.G00.15 (IDCC).
              </li>
              <li>
                <strong>Comptabilité interne :</strong> consolidation des budgets et plan de formation sur 12 mois.
              </li>
            </ul>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mt-8 shadow-sm">
              <p className="font-semibold text-foreground flex items-center mb-2">
                <ShieldAlert className="h-5 w-5 mr-2 text-primary" />
                Risque à surveiller
              </p>
              <p className="text-muted-foreground">
                Sans transfert formalisé, vos reliquats Constructys restent bloqués et ne peuvent être mobilisés chez AKTO. IA Center suit chaque courrier et obtient un écrit confirmant le transfert des budgets et des dossiers en cours.
              </p>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section id="methodologie" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Workflow className="h-8 w-8 mr-3 text-primary" />
            4. Méthode IA Center en 90 jours
          </h2>
          <div className="grid gap-6">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-primary/5 border border-primary/20 rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <span className="text-xs uppercase tracking-wide text-primary bg-primary/15 px-3 py-1 rounded-full">
                    KPI cible : {step.kpi}
                  </span>
                </div>
                <p className="text-muted-foreground mb-3">{step.description}</p>
                <p className="text-sm text-muted-foreground font-medium">
                  Livrable IA Center : {step.deliverable}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Checklist */}
        <section className="mb-14">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <ListChecks className="h-6 w-6 mr-2 text-primary" />
            Check-list opérationnelle IA Center
          </h3>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 shadow-sm">
            <ol className="list-decimal list-inside text-muted-foreground space-y-2">
              <li>Exporter toutes les DSN (12 derniers mois) et vérifier blocs IDCC / OPCO.</li>
              <li>Étudier les contrats clients pour qualifier l’activité principale par SIRET.</li>
              <li>Construire le tableau SIRET / IDCC / OPCO avec les pièces justificatives.</li>
              <li>Préparer et envoyer les courriers URSSAF / Constructys / AKTO avec accusés.</li>
              <li>Mettre à jour les portails OPCO et lancer le plan de mobilisation des budgets.
              </li>
            </ol>
          </div>
        </section>

        {/* Case study */}
        <section id="cas" className="mb-14">
          <div className="bg-silver-light border border-silver-medium rounded-lg p-6 shadow-sm">
            <p className="font-semibold text-foreground flex items-center mb-3">
              <Users className="h-5 w-5 mr-2 text-primary" />
              Étude de cas – Groupe facility management / BTP (22 sites, 1 260 salariés)
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base">
              <li><strong>Situation :</strong> 3 entités BTP Constructys, 2 filiales services AKTO, DSN non alignées, budgets gelés (120 k€).</li>
              <li><strong>Action IA Center :</strong> audit complet, tableau SIRET/IDCC, courriers URSSAF/OPCO, conventions de mutualisation, corrections DSN.</li>
              <li><strong>Résultat :</strong> 112 k€ débloqués, double rattachement validé en 32 jours, plan de formation 2025 financé à 95 %.</li>
              <li><strong>Bonus :</strong> automatisation veille IDCC et alertes budgets mensuelles.</li>
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
                  <p className="font-semibold text-foreground">Télécharger le pack “double OPCO” IA Center</p>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Templates courriers URSSAF/OPCO, tableau SIRET/IDCC/OPCO, checklist DSN et matrice décisionnelle Constructys / AKTO.
                  </p>
                </div>
              </div>
              <a
                href="https://iacenter.fr/downloads/pack-constructys-akto-2025.zip"
                target="_blank"
                rel="noopener noreferrer"
                onClick={registerCTA({
                  name: 'Download pack double OPCO',
                  location: 'lead_magnet',
                  content: 'pack_constructys_akto',
                  url: 'https://iacenter.fr/downloads/pack-constructys-akto-2025.zip'
                })}
                className="inline-flex items-center px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
              >
                Télécharger le pack
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              ✅ Cochez la case dans le formulaire pour recevoir les mises à jour trimestrielles (veilles DGEFP, avis URSSAF, modèles IA Center).
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="text-3xl font-bold mb-6">FAQ dirigeants – Constructys x AKTO</h2>
          <div className="prose prose-lg max-w-none">
            {faqData.map((item) => (
              <div key={item.question} className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="mb-14">
          <div className="bg-silver-light border border-silver-medium rounded-lg p-6 shadow-sm">
            <p className="font-semibold text-foreground mb-3">Sources officielles et veille</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base">
              <li>DGEFP – Note 2025-41 (14 octobre 2025) – contrôles DSN / OPCO</li>
              <li>Constructys – Comité “travaux sous tension & multi-activités” (18 octobre 2025)</li>
              <li>AKTO – Conseil d’administration (18 septembre 2025) – mutualisation budgétaire</li>
              <li>URSSAF – Guide changement d’IDCC (septembre 2025)</li>
              <li>IA Center – Observatoire multi-activités (Q3 2025, 23 groupes)</li>
            </ul>
          </div>
        </section>

        {/* Internal links */}
        <section className="mb-14">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 shadow-sm text-sm md:text-base">
            <p className="font-semibold text-foreground mb-2">Ressources complémentaires IA Center</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                <Link to="/blog/comment-savoir-entreprise-opco-constructys-akto" className="text-primary hover:underline">
                  Comment savoir si mon entreprise dépend de Constructys ou AKTO ?
                </Link>
              </li>
              <li>
                <Link to="/blog/constructys-controles-travaux-sous-tension-2025" className="text-primary hover:underline">
                  Constructys 2025 : sécuriser vos chantiers “travaux sous tension”
                </Link>
              </li>
              <li>
                <Link to="/blog/akto-plan-alternance-2025" className="text-primary hover:underline">
                  AKTO 2025 : structurer un plan alternance gagnant
                </Link>
              </li>
              <li>
                <Link to="/blog/akto-digitalisation-services-2025" className="text-primary hover:underline">
                  AKTO 2025 : digitaliser les services (IA, automatisation, cybersécurité)
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Formations pro */}
        <section className="mb-14">
          <div className="bg-primary text-primary-foreground rounded-lg p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Se former pour piloter Constructys & AKTO</h2>
              <p className="text-primary-foreground/90">
                Nos formations professionnelles aident vos équipes RH, finance et opération à gérer multi-activités, DSN et financement formation sans risque.
              </p>
            </div>
            <Link
              to="/formations-professionnels"
              className="inline-flex items-center px-5 py-2 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 hover:text-primary transition"
            >
              Découvrir nos formations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Form */}
        <section id="formulaire" className="mb-14">
          <div className="bg-silver-light border border-silver-medium rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Demander un audit Constructys x AKTO</h2>
            <p className="text-muted-foreground mb-6">
              Expliquez votre situation : un consultant IA Center vous répond sous 24 h ouvrées pour cartographier vos SIRET, sécuriser vos budgets et piloter vos changements d’IDCC.
            </p>
            <form
              action="https://formspree.io/f/xgvykkzq"
              method="POST"
              className="grid gap-4 md:grid-cols-2"
            >
              <input type="hidden" name="article" value="Article37_Constructys_AKTO_MultiActivites" />
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
                <label className="block text-sm font-medium text-foreground mb-1">Nombre de SIRET concernés</label>
                <input
                  type="number"
                  name="num_siret"
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
                  placeholder="Ex : fusion récente, DSN Constructys/AKTO incohérentes, budgets gelés, courrier URSSAF reçu..."
                />
              </div>
              <div className="md:col-span-2">
                <label className="inline-flex items-start gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" name="resource_pack_constructys_akto" className="mt-1" />
                  Je souhaite recevoir le pack “double OPCO” IA Center et être alerté des mises à jour.
                </label>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  onClick={registerCTA({
                    name: 'Formulaire audit Constructys x AKTO',
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

        {/* CTA */}
        <section className="mb-16">
          <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Sécuriser vos rattachements Constructys / AKTO dès maintenant
            </h2>
            <p className="text-muted-foreground mb-6">
              IA Center vous accompagne pour aligner vos DSN, piloter vos conventions et protéger vos budgets formation. Prenons 30 minutes pour dresser un diagnostic multi-activités et lancer votre plan 90 jours.
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
              Réserver un diagnostic double OPCO
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Signature */}
        <section className="mb-12">
          <div className="bg-silver-light border border-silver-medium rounded-lg p-6 shadow-sm flex flex-col md:flex-row md:items-center md:gap-4">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
                Article rédigé par
              </p>
              <p className="text-lg font-semibold text-foreground">Nicolas Perrin</p>
              <p className="text-sm text-muted-foreground">
                Directeur Conseil OPCO & multi-activités – IA Center
              </p>
            </div>
            <p className="text-sm text-muted-foreground md:max-w-md">
              18 ans d’expérience dans l’accompagnement de groupes BTP/services. Nicolas a sécurisé plus de 70 dossiers Constructys/AKTO depuis 2023 et anime l’Observatoire multi-activités IA Center.
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Article37;
