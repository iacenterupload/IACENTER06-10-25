import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Building2,
  Network,
  ClipboardList,
  CalendarDays,
  Lightbulb,
  ArrowRight,
  Info,
  BarChart3,
  Download,
  HelpCircle,
  Gauge,
  LineChart,
  Users,
  Workflow,
  ListChecks
} from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { trackCTA } from '@/utils/trackCTA';

const Article36 = () => {
  const contactUrl =
    '/contact?utm_source=blog&utm_medium=article36&utm_campaign=akto_alternance_2025';

  const registerCTA = (params) => () =>
    trackCTA({
      article: 'Article36_AKTO_Alternance_2025',
      campaign: 'akto_alternance_2025',
      medium: 'blog',
      ...params
    });

  const faqData = [
    {
      question: 'Combien de temps AKTO met-il pour valider un contrat d’alternance en 2025 ?',
      answer:
        "Les dossiers conformes aux priorités 2025 sont instruits en 10 à 15 jours ouvrés. En cas de pièces manquantes ou d'effectif multi-sites mal identifié, comptez 4 à 5 semaines. IA Center prépare l'ensemble des justificatifs (DSN, fiches de poste, organigrammes multi-sites) pour rester dans la fourchette basse."
    },
    {
      question: 'Peut-on mutualiser les budgets alternance au niveau du groupe ?',
      answer:
        "Oui, si l’on démontre le lien juridique (conventions de mise à disposition, délégation de pouvoir) et que chaque SIRET dispose de sa DSN alignée. Nous mettons en place un tableau de mutualisation AKTO + une lettre de délégation pour sécuriser le pilotage centralisé."
    },
    {
      question: 'Que faire si AKTO refuse un dossier alternance ?',
      answer:
        "Analysez la lettre de refus : causes fréquentes (pièces manquantes, non-alignement DSN, formation hors priorité 2025). Nous reprenons le dossier en 72 h : correction des pièces, argumentaire sur l’axe prioritaire, dépôt prioritaire via l’espace conseiller AKTO."
    }
  ];

  const seoData = {
     title: 'AKTO 2025 : structurer un plan alternance gagnant (multi-branches, multi-sites)',
     description:
       'Méthode IA Center pour capter les abondements AKTO, piloter l’alternance multi-sites et sécuriser chaque contrat en 2025.',
     keywords:
       'akto alternance 2025, plan alternance multi sites, abondement alternance akto, mutualisation alternance groupe, dsN alternance akto, feuille route alternance 2025',
     canonicalUrl: 'https://iacenter.fr/blog/akto-plan-alternance-2025',
     ogImage: 'https://iacenter.fr/favicon.png',
     schemaData: {
       '@context': 'https://schema.org',
       '@type': 'BlogPosting',
       headline: 'AKTO 2025 : structurer un plan alternance gagnant',
       description:
         'Méthode IA Center pour capter les abondements AKTO, piloter l’alternance multi-sites et sécuriser chaque contrat en 2025.',
       image: 'https://iacenter.fr/favicon.png',
       articleSection: 'Alternance & OPCO',
       keywords: 'AKTO alternance, abondements alternance, multi-sites',
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
      datePublished: '2025-11-05',
      dateModified: '2025-11-05',
       mainEntityOfPage: 'https://iacenter.fr/blog/akto-plan-alternance-2025',
       url: 'https://iacenter.fr/blog/akto-plan-alternance-2025'
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
      title: 'Semaine 1-2 · Audit & cadrage alternance',
      description:
        'Cartographie DSN multi-sites, identification des besoins métiers, collecte des données RH (effectifs, taux d’encadrement), inventaire des contrats en cours.',
      deliverable: 'Tableau SIRET / branches / besoins alternance + note de cadrage',
      kpi: '100 % des sites analysés et hiérarchisés'
    },
    {
      title: 'Semaine 3-6 · Montage et mutualisation des dossiers',
      description:
        'Sélection des formations prioritaires AKTO 2025, constitution des dossiers, plan de mutualisation groupe, dépôts via l’espace conseiller.',
      deliverable: 'Pack dossiers alternance validés (contrats, pièces, argumentaires)',
      kpi: '≥ 80 % des dossiers complets déposés sous 30 jours'
    },
    {
      title: 'Semaine 7-12 · Pilotage et abondements',
      description:
        'Suivi des validations, collecte des abondements, mise en place du tableau de bord Looker Studio et plan de communication interne.',
      deliverable: 'Dashboard alternance + roadmap 12 mois (recrutements, budgets)',
      kpi: '≥ 90 % des financements confirmés'
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

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
          Audit alternance AKTO 2025
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
          Structurer mon alternance AKTO
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
            <GraduationCap className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Audit IA Center certifié Qualiopi – mise à jour 05/11/2025
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AKTO 2025 : structurer un plan alternance gagnant (multi-branches, multi-sites)
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>Mis à jour le 5 novembre 2025</span>
            <span>•</span>
            <span>Alternance & budgets AKTO</span>
            <span>•</span>
            <span>Lecture : 22 min</span>
          </div>
        </div>

        {/* TL;DR */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10 shadow-sm">
          <p className="font-semibold text-primary flex items-center mb-3">
            <Info className="h-5 w-5 mr-2" />
            En bref
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>AKTO finance l’alternance à 100 % sur les métiers en tension 2025 (service, sécurité, propreté, restauration rapide, intérim).</li>
            <li>Les groupes multi-sites doivent mutualiser leurs budgets via des conventions et une DSN alignée.</li>
            <li>La méthode IA Center sécurise chaque dossier en 90 jours : audit DSN, mutualisation, dépôts accélérés et tableau de bord alternance.</li>
          </ul>
        </div>

        {/* IA Center stats */}
        <div className="bg-silver-light border border-silver-medium rounded-lg p-6 mb-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-6">
            <div>
              <p className="font-semibold text-foreground flex items-center mb-3">
                <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                Impact IA Center – Alternance AKTO (2024-2025)
              </p>
              <div className="grid gap-4 md:grid-cols-3 text-muted-foreground text-sm">
                <div>
                  <p className="text-3xl font-bold text-foreground">64</p>
                  <p>Contrats alternance multi-sites sécurisés</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">95 %</p>
                  <p>Dossiers validés au premier dépôt</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">312 k€</p>
                  <p>Abondements alternance obtenus (AKTO + région)</p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-0 md:w-64 bg-background border border-primary/20 rounded-lg p-4 shadow-inner">
              <p className="font-semibold text-sm text-primary flex items-center gap-2 mb-2">
                <Gauge className="h-4 w-4" />
                KPI Looker Studio – actualisation 01/11/2025
              </p>
              <p className="text-2xl font-bold text-foreground">78 %</p>
              <p className="text-xs text-muted-foreground mb-3">
                Taux moyen de mutualisation budgétaire atteint par les groupes accompagnés (rolling 6 mois).
              </p>
              <p className="text-xs text-muted-foreground">
                Source : dashboard IA Center (Looker Studio) alimenté par exports AKTO + DSN multi-sites.
              </p>
            </div>
          </div>
        </div>

        {/* Observatoire */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-12 shadow-sm">
          <p className="font-semibold text-foreground flex items-center mb-3">
            <LineChart className="h-5 w-5 mr-2 text-primary" />
            Observatoire alternance AKTO – Octobre 2025 (panel 46 entreprises)
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base">
            <li>62 % des refus AKTO proviennent d’un dossier incomplet (pièces manquantes, mauvais rattachement DSN).</li>
            <li>73 % des groupes multi-sites n’ont pas formalisé de convention de mutualisation budgétaire.</li>
            <li>Les branches sécurité, propreté et restauration rapide obtiennent des abondements jusqu’à +30 % en 2025.</li>
          </ul>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            L’alternance reste un levier majeur pour sécuriser vos compétences et absorber les tensions de recrutement. AKTO, qui couvre 27 branches de services, intensifie son soutien en 2025 : abondements ciblés, accélération des délais d’instruction, contrôle renforcé des DSN multi-sites. Sans gouvernance solide, les groupes laissent filer des dizaines de contrats et autant de financements. Voici la méthode IA Center pour structurer un plan alternance gagnant, quelle que soit votre taille ou votre complexité organisationnelle.
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
              <a href="#priorites" className="hover:text-primary transition">
                1. Priorités alternance AKTO 2025
              </a>
            </li>
            <li>
              <a href="#mutualisation" className="hover:text-primary transition">
                2. Mutualiser les budgets multi-sites
              </a>
            </li>
            <li>
              <a href="#calendrier" className="hover:text-primary transition">
                3. Calendrier alternance 2025 (chronologie IA Center)
              </a>
            </li>
            <li>
              <a href="#methodologie" className="hover:text-primary transition">
                4. Méthode IA Center : piloter l’alternance en 90 jours
              </a>
            </li>
            <li>
              <a href="#cas" className="hover:text-primary transition">
                Étude de cas – Groupe services 45 sites
              </a>
            </li>
            <li>
              <a href="#lead-magnet" className="hover:text-primary transition">
                Feuille de route alternance IA Center
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-primary transition">
                FAQ dirigeants
              </a>
            </li>
            <li>
              <a href="#formulaire" className="hover:text-primary transition">
                Demander un sprint alternance
              </a>
            </li>
          </ul>
        </nav>

        {/* Section 1 */}
        <section id="priorites" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Building2 className="h-8 w-8 mr-3 text-primary" />
            1. Priorités alternance AKTO 2025
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Les branches AKTO ont identifié quatre axes majeurs pour 2025. Vos dossiers doivent expliciter le lien avec ces priorités pour obtenir un traitement accéléré et des abondements complémentaires.
            </p>
            <div className="overflow-x-auto border border-silver-medium rounded-lg mt-6">
              <table className="min-w-full text-sm md:text-base">
                <thead className="bg-silver-light text-foreground">
                  <tr>
                    <th className="py-3 px-4 text-left">Branche / axe</th>
                    <th className="py-3 px-4 text-left">Priorités alternance 2025</th>
                    <th className="py-3 px-4 text-left">Abondements indicatifs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-silver-medium text-muted-foreground">
                  <tr>
                    <td className="py-3 px-4">Sécurité privée</td>
                    <td className="py-3 px-4">Agents cynophiles, sûreté aéroportuaire, SSIAP</td>
                    <td className="py-3 px-4">Jusqu’à 6 000 € par contrat (abondement AKTO + FSE+</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Propreté & services associés</td>
                    <td className="py-3 px-4">Chefs d’équipe, techniciens spécialisés, QHSE</td>
                    <td className="py-3 px-4">Prise en charge 100 % du coût pédagogique + forfait matériel</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Restauration rapide / collective</td>
                    <td className="py-3 px-4">Management de sites, digitalisation, hygiène</td>
                    <td className="py-3 px-4">Abondement 1 500 € / contrat (campagne nationale AKTO)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Travail temporaire / intérim</td>
                    <td className="py-3 px-4">Reconversion vers métiers pénuriques, digitalisation</td>
                    <td className="py-3 px-4">Appels à projets trimestriels (jusqu’à 50 % du coût salarial)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Sources : AKTO – Conseil d’administration 18/09/2025, CPNE branche sécurité 02/10/2025, CPNE propreté 05/10/2025, CPNE restauration rapide 09/10/2025.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="mutualisation" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Network className="h-8 w-8 mr-3 text-primary" />
            2. Mutualiser les budgets alternance quand on est multi-sites
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Piloter l’alternance dans un groupe multi-sites impose un double niveau de gouvernance : une vision consolidée (budget, volumétrie, priorités) et un suivi DSN site par site.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Aligner les DSN :</strong> chaque SIRET doit pointer le code OPCO 237 et l’IDCC correct. IA Center réalise un audit DSN avant toute mutualisation.
              </li>
              <li>
                <strong>Convention de mutualisation :</strong> formalisez la délégation de gestion (modèle IA Center) pour piloter les budgets depuis le siège.
              </li>
              <li>
                <strong>Tableau de bord groupe :</strong> centralisez contrats, taux de rupture, abondements, coûts de formation. Nous mettons en place un tableau Looker Studio alimenté par AKTO + DSN.
              </li>
            </ul>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mt-8 shadow-sm">
              <p className="font-semibold text-foreground flex items-center mb-2">
                <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                Point de vigilance
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                « Nous avons un contrat alternance signé sur un site mais le siège gère les factures. Est-ce accepté ? »
              </p>
              <p className="text-sm md:text-base text-muted-foreground mt-2">
                Oui, si la convention de mutualisation est jointe au dossier AKTO et que chaque site conserve ses preuves (contrats, attestations). IA Center fournit la trame de convention et le guide de dépôt.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="calendrier" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <CalendarDays className="h-8 w-8 mr-3 text-primary" />
            3. Calendrier alternance 2025 : la chronologie IA Center
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              L’alternance se pilote sur 12 mois, avec des jalons incontournables. Voici le calendrier que nous appliquons pour nos clients pour éviter les embouteillages administratifs.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                <strong>Décembre 2024 – Janvier 2025 :</strong> audit DSN, cadrage besoins métiers, choix des CFA partenaires.
              </li>
              <li>
                <strong>Février – Mars :</strong> lancement des recrutements alternance (jobdating, partenariats écoles), pré-dépôt des dossiers.
              </li>
              <li>
                <strong>Avril – Juin :</strong> dépôts massifs des dossiers (campagne AKTO), obtention des abondements.
              </li>
              <li>
                <strong>Juillet – Septembre :</strong> intégration des alternants, parcours d’onboarding, suivi des périodes d’essai.
              </li>
              <li>
                <strong>Octobre – Novembre :</strong> évaluation des parcours, renouvellement contrats, pilotage budgets 2026.
              </li>
            </ul>
          </div>
        </section>

        {/* Mid CTA */}
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-14 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Sprint alternance AKTO – 45 jours</p>
                <p className="text-muted-foreground text-sm md:text-base">
                  Audit DSN, mutualisation budgétaire, montage de 15 dossiers priorisés, dépôts accélérés et suivi des validations.
                </p>
              </div>
            </div>
            <Link
              to={`${contactUrl}&utm_content=audit_flash`}
              onClick={registerCTA({
                name: 'CTA sprint alternance',
                location: 'mid_section',
                content: 'audit_flash',
                url: `${contactUrl}&utm_content=audit_flash`
              })}
              className="inline-flex items-center px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
            >
              Réserver un sprint alternance
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Methodology */}
        <section id="methodologie" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Workflow className="h-8 w-8 mr-3 text-primary" />
            4. Notre méthode en 90 jours (multi-sites, multi-branches)
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
              <li>Vérifier et corriger chaque DSN (code OPCO 237 + IDCC de la branche).</li>
              <li>Cartographier besoins alternance par site (effectifs, métiers, tuteurs).</li>
              <li>Signer la convention de mutualisation budgétaire (modèle IA Center).</li>
              <li>Constituer le pack dossier AKTO : contrat, programme, fiche de poste, argumentaire priorité 2025.</li>
              <li>Suivre validations et abondements via le tableau de bord Looker Studio.</li>
            </ol>
          </div>
        </section>

        {/* Case study */}
        <section id="cas" className="mb-14">
          <div className="bg-silver-light border border-silver-medium rounded-lg p-6 shadow-sm">
            <p className="font-semibold text-foreground flex items-center mb-3">
              <Users className="h-5 w-5 mr-2 text-primary" />
              Étude de cas – Groupe services multi-sites (45 sites, 1 850 salariés)
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base">
              <li><strong>Situation :</strong> 28 contrats alternance refusés, DSN non alignées, aucune mutualisation formalisée.</li>
              <li><strong>Action IA Center :</strong> audit DSN, convention groupe, montage de 34 dossiers priorisés (sécurité, propreté, QHSE).</li>
              <li><strong>Résultat :</strong> 32 contrats validés en 30 jours, 82 k€ d’abondements obtenus, tableau de bord partagé.</li>
              <li><strong>Bonus :</strong> kit onboarding alternants + script managers pour réduire les ruptures.</li>
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
                  <p className="font-semibold text-foreground">Télécharger la feuille de route alternance 2025</p>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Fichier IA Center (Excel + Notion) pour piloter vos recrutements, budgets, mutualisation et reporting alternance AKTO.
                  </p>
                </div>
              </div>
              <a
                href="https://iacenter.fr/downloads/feuille-route-alternance-akto-2025.xlsx"
                target="_blank"
                rel="noopener noreferrer"
                onClick={registerCTA({
                  name: 'Download feuille de route alternance',
                  location: 'lead_magnet',
                  content: 'feuille_route_alternance',
                  url: 'https://iacenter.fr/downloads/feuille-route-alternance-akto-2025.xlsx'
                })}
                className="inline-flex items-center px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
              >
                Télécharger la feuille de route
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              ✅ Cochez la case dédiée dans le formulaire pour recevoir les mises à jour trimestrielles (priorités AKTO, appels à projets, templates IA Center).
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="text-3xl font-bold mb-6">FAQ dirigeants – Alternance AKTO</h2>
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
              <li>AKTO – Conseil d’administration 18/09/2025 (priorités alternance)</li>
              <li>CPNE Sécurité privée – note alternance 02/10/2025</li>
              <li>CPNE Propreté – feuille de route alternance 2025</li>
              <li>CPNE Restauration rapide – campagne alternance 09/10/2025</li>
              <li>France Compétences – Panorama alternance 2024 (sept. 2025)</li>
              <li>IA Center – Observatoire alternance (Q3 2025, 46 entreprises)</li>
            </ul>
          </div>
        </section>

        {/* Internal links */}
        <section className="mb-14">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 shadow-sm text-sm md:text-base">
            <p className="font-semibold text-foreground mb-2">Ressources complémentaires IA Center</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                <Link to="/blog/pourquoi-entreprises-akto-perdent-budget-formation" className="text-primary hover:underline">
                  AKTO : pourquoi 37 % des budgets disparaissent encore en 2025
                </Link>
              </li>
              <li>
                <Link to="/blog/constructys-controles-travaux-sous-tension-2025" className="text-primary hover:underline">
                  Constructys 2025 : sécuriser vos chantiers “travaux sous tension”
                </Link>
              </li>
              <li>
                <Link to="/blog/constructys-akto-multi-activites-idcc" className="text-primary hover:underline">
                  Constructys x AKTO : gérer les multi-activités et changements d’IDCC
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
              <h2 className="text-2xl font-bold mb-2">Former vos équipes RH & managers à l’alternance</h2>
              <p className="text-primary-foreground/90">
                IA Center propose des parcours opérationnels pour professionnaliser vos responsables alternance, finance et managers de proximité.
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
            <h2 className="text-2xl font-bold mb-4 text-foreground">Demander un sprint alternance IA Center</h2>
            <p className="text-muted-foreground mb-6">
              Détaillez vos enjeux : nous auditons vos DSN, structurons la mutualisation groupe et montons vos dossiers alternance pour capter 100 % des financements AKTO.
            </p>
            <form
              action="https://formspree.io/f/xgvykkzq"
              method="POST"
              className="grid gap-4 md:grid-cols-2"
            >
              <input type="hidden" name="article" value="Article36_AKTO_Alternance_2025" />
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
                <label className="block text-sm font-medium text-foreground mb-1">Nombre de sites</label>
                <input
                  type="number"
                  name="sites"
                  className="w-full rounded-md border border-silver-medium bg-background px-4 py-2 focus:border-primary focus:outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-1">Votre projet alternance*</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-md border border-silver-medium bg-background px-4 py-2 focus:border-primary focus:outline-none"
                  placeholder="Ex : 50 alternants à recruter, mutualisation groupe, dossiers refusés, besoin d’abondements priorités sécurité/propreté…"
                />
              </div>
              <div className="md:col-span-2">
                <label className="inline-flex items-start gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" name="resource_feuille_route_alternance" className="mt-1" />
                  Je souhaite recevoir la feuille de route alternance IA Center et ses mises à jour.
                </label>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  onClick={registerCTA({
                    name: 'Formulaire sprint alternance',
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
              Transformer votre alternance en avantage stratégique
            </h2>
            <p className="text-muted-foreground mb-6">
              IA Center vous aide à capter les abondements, structurer vos recrutements et piloter vos alternants pour 2025-2026. Planifions 30 minutes pour cartographier vos besoins par site et vos objectifs de montée en compétences.
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
              Réserver un diagnostic alternance
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
              <p className="text-lg font-semibold text-foreground">Léa Martin</p>
              <p className="text-sm text-muted-foreground">
                Consultante senior Alternance & OPCO – IA Center
              </p>
            </div>
            <p className="text-sm text-muted-foreground md:max-w-md">
              12 ans d’expérience en pilotage alternance multi-branches. Léa a structuré plus de 300 dossiers AKTO et accompagne les groupes nationaux dans la mutualisation de leurs budgets alternance.
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Article36;

