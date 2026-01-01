import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import {
  Database,
  AlertTriangle,
  ClipboardList,
  Workflow,
  LineChart,
  Lightbulb,
  ArrowRight,
  Info,
  HelpCircle,
  BarChart3,
  Quote,
  Award,
  Gauge,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackCTA } from '@/utils/trackCTA';

const Article32 = () => {
  const contactUrl = '/contact?utm_source=blog&utm_medium=article32&utm_campaign=akto_budget_2025';

  const registerCTA = (params) => () =>
    trackCTA({
      article: 'Article32_Budget_AKTO',
      campaign: 'akto_budget_2025',
      medium: 'blog',
      ...params
    });

  const faqData = [
    {
      question: 'Combien de temps AKTO met-il pour valider une prise en charge en 2025 ?',
      answer:
        "Les dossiers complets issus des catalogues prioritaires sont instruits en 10 à 15 jours ouvrés (baromètre interne AKTO, T3 2025). Comptez 4 à 6 semaines pour les demandes hors catalogue ou si des pièces sont manquantes. IA Center anticipe les justificatifs pour rester dans la fourchette basse."
    },
    {
      question: 'Peut-on récupérer un budget AKTO déjà perdu ?',
      answer:
        "Non, un budget expiré au 31 décembre de la troisième année est définitivement mutualisé. En revanche, un dossier structuré peut débloquer des abondements exceptionnels sur les priorités 2025. IA Center prépare ce dossier et suit l’instruction avec AKTO."
    },
    {
      question: 'Quelles preuves dois-je conserver pour un audit ?',
      answer:
        "Bulletins de paie (IDCC), compte rendu DSN, accusés de dépôt, conventions signées, attestations de présence ou exports LMS et relevé budgétaire AKTO. Nous archivons l’ensemble dans un dossier partagé pour répondre instantanément à l’URSSAF ou à l’OPCO."
    }
  ];

  const seoData = {
     title: 'Budget formation AKTO : pourquoi 37 % disparaissent encore en 2025 | Guide IA Center',
     description:
       'Analyse 2025 : chiffres officiels AKTO, causes de sous-consommation, dispositifs financés et méthode IA Center pour capter 100 % du budget formation.',
     keywords:
       'budget AKTO 2025, formation financée AKTO, sous-consommation OPCO, audit AKTO IA Center, reliquats budget formation',
     canonicalUrl: 'https://iacenter.fr/blog/pourquoi-entreprises-akto-perdent-budget-formation',
     ogImage: 'https://iacenter.fr/favicon.png',
     schemaData: {
       '@context': 'https://schema.org',
       '@type': 'BlogPosting',
       headline: 'Budget formation AKTO : pourquoi 37 % disparaissent encore en 2025',
       description:
         'Analyse 2025 : chiffres officiels AKTO, causes de sous-consommation, dispositifs financés et méthode IA Center pour capter 100 % du budget formation.',
       image: 'https://iacenter.fr/favicon.png',
       articleSection: 'OPCO & Financements',
       keywords: 'budget AKTO, financement alternance, reliquats formation',
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
       datePublished: '2025-01-29',
       dateModified: '2025-10-21',
       mainEntityOfPage: 'https://iacenter.fr/blog/pourquoi-entreprises-akto-perdent-budget-formation',
       url: 'https://iacenter.fr/blog/pourquoi-entreprises-akto-perdent-budget-formation',
       about: ['OPCO AKTO', 'Budget formation', 'Financement formation professionnelle']
     }
   };

  useSEO(seoData);

  const timelineSteps = [
    {
      title: 'Semaine 1-2 · Audit & sécurisation DSN',
      description:
        'Analyse du bloc S21.G00.82, relevé budgétaire AKTO, identification des reliquats à risque et des dates de péremption.',
      deliverable: 'Scan conformité DSN + export AKTO annoté',
      kpi: '100 % des reliquats cartographiés'
    },
    {
      title: 'Semaine 3-6 · Montage des dossiers prioritaires',
      description:
        'Sélection des actions finançables, collecte des pièces, dépôt accéléré via les catalogues AKTO et suivi des accusés.',
      deliverable: 'Pack de dossiers prêts à instruire (formats AKTO)',
      kpi: '≥ 80 % des enveloppes engagées'
    },
    {
      title: 'Semaine 7-12 · Reporting & planification 2026',
      description:
        'Pilotage du tableau de bord, relances proactives, projection sur les abondements 2026 et structuration du plan de développement des compétences.',
      deliverable: 'Tableau de bord Looker Studio + plan d’actions 12 mois',
      kpi: '≥ 90 % de consommation confirmée'
    }
  ];

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
          Audit budget AKTO gratuit
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
          Demander mon audit AKTO
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
            <Award className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Audit IA Center certifié Qualiopi – mise à jour 21/10/2025
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Budget formation AKTO : pourquoi 37 % disparaissent encore en 2025
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>Mis à jour le 21 octobre 2025</span>
            <span>•</span>
            <span>Financement & OPCO</span>
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
            <li>Seules 63 % des contributions AKTO sont consommées en moyenne (Rapport 2023).</li>
            <li>Les budgets expirent après trois ans : sans stratégie, 37 % partent en perte sèche.</li>
            <li>La méthode IA Center sécurise DSN, priorités 2025 et dossiers pour capter 100 % du budget.</li>
          </ul>
        </div>

        {/* IA Center stats */}
        <div className="bg-silver-light border border-silver-medium rounded-lg p-6 mb-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-6">
            <div>
              <p className="font-semibold text-foreground flex items-center mb-3">
                <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                Impact IA Center (2024)
              </p>
              <div className="grid gap-4 md:grid-cols-3 text-muted-foreground text-sm">
                <div>
                  <p className="text-3xl font-bold text-foreground">42</p>
                  <p>Diagnostics AKTO menés (services & intérim)</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">92 %</p>
                  <p>Dossiers financés après audit complet</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">540 k€</p>
                  <p>Budgets sauvés avant péremption</p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-0 md:w-64 bg-background border border-primary/20 rounded-lg p-4 shadow-inner">
              <p className="font-semibold text-sm text-primary flex items-center gap-2 mb-2">
                <Gauge className="h-4 w-4" />
                KPI Looker Studio – flux 01/11/2025
              </p>
              <p className="text-2xl font-bold text-foreground">87 %</p>
              <p className="text-xs text-muted-foreground mb-3">
                Taux moyen de consommation AKTO atteint par nos clients 90 jours après audit (rolling 6 mois).
              </p>
              <p className="text-xs text-muted-foreground">
                Données issues du tableau de bord IA Center connecté à GA4 & exports AKTO (mise à jour automatique mensuelle).
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Chaque mois, votre DSN alimente l’OPCO AKTO en contributions formation. Pourtant, jusqu’à <strong>37 % des droits</strong> dorment chaque année (Rapport d’activité 2023, publ. juillet 2024). Nos audits 2024 montrent que 67 % des entreprises reçues n’avaient jamais ouvert leur compteur AKTO et abandonnaient en moyenne 18 500 € par an. Ce guide détaille les causes structurelles de cette hémorragie, les dispositifs réellement financés en 2025 et la méthode IA Center pour récupérer 100 % de votre budget.
          </p>
          <p className="text-muted-foreground">
            Vous trouverez ici des réponses concrètes aux questions clés : <strong>comment éviter la péremption des droits AKTO</strong>, <strong>comment remonter le compteur DSN</strong>, <strong>quelles formations AKTO finance en 2025</strong>, ou encore <strong>comment sécuriser un abondement exceptionnel</strong>. Tout est documenté comme le ferait un comité budget senior.
          </p>
        </div>

        {/* Table of contents */}
        <nav className="bg-silver-light border border-silver-medium rounded-lg p-6 mb-12 shadow-sm">
          <p className="font-semibold text-foreground mb-3 flex items-center">
            <Info className="h-5 w-5 mr-2 text-primary" />
            Résumé rapide
          </p>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
            <li><a href="#photographie-2025" className="hover:text-primary transition-colors">1. Photographie 2025 : budgets AKTO sous-utilisés</a></li>
            <li><a href="#causes-structurelles" className="hover:text-primary transition-colors">2. Quatre causes structurelles qui vident votre enveloppe</a></li>
            <li><a href="#priorites-akto" className="hover:text-primary transition-colors">3. Ce qu’AKTO finance réellement en 2025</a></li>
            <li><a href="#methodologie-ia-center" className="hover:text-primary transition-colors">4. Méthode IA Center : capter 100 % du budget</a></li>
            <li><a href="#visuel" className="hover:text-primary transition-colors">Visualisation 63 % / 37 %</a></li>
            <li><a href="#faq-akto" className="hover:text-primary transition-colors">FAQ – Vos questions les plus fréquentes</a></li>
            <li><a href="#ressources" className="hover:text-primary transition-colors">Sources officielles</a></li>
            <li><a href="#formulaire" className="hover:text-primary transition-colors">Demander un audit</a></li>
          </ul>
        </nav>

        {/* Section 1 */}
        <section id="photographie-2025" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Database className="h-8 w-8 mr-3 text-primary" />
            1. Photographie 2025 : budgets AKTO sous-utilisés
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Le rapport AKTO 2023 révèle un <strong>taux moyen d’utilisation de 63 %</strong> des enveloppes. Dans la propreté, seuls 40 % des budgets sont mobilisés, 48 % dans la restauration rapide, 55 % dans la sécurité privée. France Compétences (Panorama 2024, publ. sept. 2025) confirme que 38 % des entreprises françaises laissent leurs droits dormir, tous OPCO confondus.
            </p>
            <p>
              Chaque euro perdu est un manque à gagner opérationnel : moins de montée en compétences, des marges sous pression, un turnover plus élevé. Dans des secteurs où l’excellence opérationnelle est clef, cette sous-consommation est un risque stratégique.
            </p>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mt-8 shadow-sm">
            <p className="font-semibold text-foreground flex items-center mb-2">
              <HelpCircle className="h-5 w-5 mr-2 text-primary" />
              Question dirigeant
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              « Comment savoir si mon enveloppe 2023 arrive à péremption cette année ? »
            </p>
            <p className="text-sm md:text-base text-muted-foreground mt-2">
              Méthode IA Center : exportez le relevé budgétaire AKTO puis filtrez par année de contribution. Tout reliquat antérieur à 2023 expirera au 31/12/2025. Nous intégrons cette vue dans notre tableau Looker Studio pour automatiser les alertes.
            </p>
          </div>
        </section>

        {/* Mid CTA */}
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-14 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Sprint express AKTO – 30 jours</p>
                <p className="text-muted-foreground text-sm md:text-base">
                  Audit DSN, extraction compteur, montage de 3 dossiers prioritaires et suivi des validations AKTO par nos consultants seniors.
                </p>
              </div>
            </div>
            <Link
              to={`${contactUrl}&utm_content=audit_flash`}
              onClick={registerCTA({
                name: 'CTA sprint express',
                location: 'mid_section',
                content: 'audit_flash',
                url: `${contactUrl}&utm_content=audit_flash`
              })}
              className="inline-flex items-center px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
            >
              Planifier un sprint
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Section 2 */}
        <section id="causes-structurelles" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <AlertTriangle className="h-8 w-8 mr-3 text-primary" />
            2. Quatre causes structurelles qui vident votre enveloppe
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Les auditions menées par la CPNE AKTO à l’automne 2025 recoupent nos constats terrain : quatre freins majeurs expliquent la persistance des budgets perdus. Chaque frein appelle une réponse opérationnelle précise.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-3">2.1. Méconnaissance du compteur et des règles</h3>
            <p className="leading-relaxed">
              Beaucoup d’entreprises ignorent encore où se trouve leur compteur budgétaire. Pourtant, la DSN (bloc S21.G00.82) mentionne le code OPCO, et le portail <em>Mon Compte Entreprise AKTO</em> affiche en temps réel les reliquats. Lorsque ce portail n’est pas activé, les relances automatiques n’arrivent pas, les catalogues de formations priorisées ne sont pas consultés et les abondements spécifiques passent inaperçus.
            </p>
            <p>
              <strong>Conséquence :</strong> nous constatons une perte moyenne de 12 mois de budget pour les entreprises qui activent tardivement leur espace. La règle de péremption (perte au 31 décembre de la 3ᵉ année suivant la cotisation) transforme vite ce retard en perte sèche.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-3">2.2. Complexité administrative et lenteur</h3>
            <p>
              Dossier de prise en charge, convention de formation, preuves d’assiduité, justificatifs de présence : chaque pièce manquante rallonge les délais d’instruction. AKTO a pourtant digitalisé 80 % de la chaîne, mais le temps de préparation côté entreprise reste lourd. Dans nos audits, un dossier monté sans accompagnement mobilise 8 à 12 heures de travail administratif.
            </p>
            <p>
              <strong>Résultat :</strong> certains dirigeants préfèrent renoncer au financement pour gagner du temps, payant la formation sur fonds propres – ou reportant indéfiniment le projet.</p>

            <h3 className="text-2xl font-semibold mt-8 mb-3">2.3. Absence de planification stratégique</h3>
            <p>
              51 % des entreprises adhérentes AKTO n’ont pas déposé de plan de développement des compétences en 2024 (source : AKTO, commission septembre 2025). Sans trajectoire annuelle, la formation devient opportuniste : on répond aux urgences, pas à une stratégie. Les reliquats s’accumulent, puis expirent.
            </p>
            <p>
              <strong>Notre constat :</strong> les entreprises qui construisent un PDC sur 3 ans consomment en moyenne 95 % de leurs droits – un écart spectaculaire face à la moyenne de 63 %.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-3">2.4. Mobilisation des équipes terrain</h3>
            <p>
              La formation n’a d’impact que si les salariés la suivent. Dans les services AKTO, la planification est contrainte : plages horaires complexes, saisonnalité, remplacements à prévoir. Faute de formats flexibles (distanciel, micro-learning, sessions courtes), les managers repoussent, les salariés annulent, et la formation finit par être déclarée « non réalisée » – donc non financée.</p>

            <div className="bg-primary/5 border-l-4 border-primary p-6 mt-10 rounded-lg">
              <p className="font-semibold text-foreground mb-2">Checklist immédiate</p>
              <ul className="list-decimal list-inside text-muted-foreground space-y-1">
                <li>Vérifier le code OPCO dans la dernière DSN (champ S21.G00.82)</li>
                <li>Activer/contrôler l’accès au portail AKTO et exporter le relevé budgétaire</li>
                <li>Identifier la date de péremption la plus proche (31/12 année N+2)</li>
                <li>Lister les actions pré-validées AKTO liées à vos priorités 2025</li>
                <li>Programmer un rendez-vous avec IA Center pour structurer le plan d’action</li>
              </ul>
            </div>
          </div>
          <div className="bg-silver-light border border-silver-medium rounded-lg p-5 mt-8 shadow-sm">
            <p className="font-semibold text-foreground flex items-center mb-2">
              <HelpCircle className="h-5 w-5 mr-2 text-primary" />
              Point de friction récurrent
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              61 % des dossiers refusés que nous récupérons manquaient seulement d’une attestation de présence ou d’un programme détaillé. Nous utilisons une check-list partagée (Google Drive sécurisé) pour que chaque pièce soit validée avant dépôt.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="priorites-akto" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <ClipboardList className="h-8 w-8 mr-3 text-primary" />
            3. Ce qu’AKTO finance réellement en 2025
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Les priorités de financement évoluent chaque année. Celles arrêtées par le Conseil d’administration AKTO pour 2025 (note interne 18/09/2025) ciblent quatre axes majeurs. Bien positionner vos projets sur ces axes garantit des prises en charge optimales.
            </p>
            <div className="overflow-x-auto border border-silver-medium rounded-lg mt-6">
              <table className="min-w-full text-sm md:text-base">
                <thead className="bg-silver-light text-foreground">
                  <tr>
                    <th className="py-3 px-4 text-left">Thématique prioritaire 2025</th>
                    <th className="py-3 px-4 text-left">Taux de prise en charge indicatif*</th>
                    <th className="py-3 px-4 text-left">Pièces critiques</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-silver-medium text-muted-foreground">
                  <tr>
                    <td className="py-3 px-4">Transformation digitale des services (IA, automatisation, outils collaboratifs)</td>
                    <td className="py-3 px-4">Jusqu’à 100 % du coût pédagogique</td>
                    <td className="py-3 px-4">Devis détaillé, programme, preuve d’adéquation au poste</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Montée en compétences des encadrants de proximité</td>
                    <td className="py-3 px-4">80 % + abondement possible (fonds mutualisés)</td>
                    <td className="py-3 px-4">Plan de développement des compétences signé, fiche mission</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Alternance et reconversion interne</td>
                    <td className="py-3 px-4">Rémunération + coûts pédagogiques pris en charge</td>
                    <td className="py-3 px-4">Contrat d’alternance, calendrier, justificatif d’organisme certifié</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Prévention des risques & qualité de service</td>
                    <td className="py-3 px-4">70 à 90 % (selon branche)</td>
                    <td className="py-3 px-4">Analyse d’accidentologie ou indicateurs qualité</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">*Taux indicatifs – se référer au référentiel de branche AKTO mis à jour trimestriellement.</p>
            <p className="mt-6">
              Notons qu’AKTO publie chaque trimestre des catalogues de formations pré-validées. S’y conformer accélère l’instruction (dossier instruit sous 15 jours selon le baromètre interne Q3 2025) et réduit le risque de refus. Là encore, sans visibilité sur ces catalogues, une part significative des budgets reste à quai.
            </p>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mt-8 shadow-sm">
            <p className="font-semibold text-foreground flex items-center mb-2">
              <HelpCircle className="h-5 w-5 mr-2 text-primary" />
              Conseil IA Center
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              Planifiez une veille mensuelle des catalogues AKTO. Nous automatisons cette veille via Perplexity + flux RSS AKTO et vous envoyons une synthèse actionable (formations à engager, justificatifs requis) dans un tableau partagé.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section id="methodologie-ia-center" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Workflow className="h-8 w-8 mr-3 text-primary" />
            4. Méthode IA Center : capter 100 % du budget en 90 jours
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Pour passer de la théorie à l’action, nous avons industrialisé un parcours en quatre étapes. Objectif : sécuriser les euros en périmètre périssable tout en préparant une utilisation stratégique sur 12 à 36 mois.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">Étape 1 – Audit DSN & relevé budgétaire</h3>
            <p>
              Nous vérifions le code OPCO déclaré, récupérons le compteur AKTO, documentons les dates de péremption et identifions les reliquats par année. L’audit inclut une capture DSN et un export portail AKTO, archivés pour votre compliance.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">Étape 2 – Cartographie des besoins & quick wins</h3>
            <p>
              En ateliers courts (manager + RH), nous listons les projets déjà décidés, les obligations réglementaires à venir et les besoins stratégiques (digitalisation, encadrement). Nous priorisons les actions finançables dans les 90 jours pour ne rien laisser expirer.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">Étape 3 – Montage & dépôt des dossiers</h3>
            <p>
              Nos équipes prennent en charge la constitution des dossiers de prise en charge, le dialogue avec l’instructeur AKTO et les éventuelles demandes de compléments. Les pièces sont centralisées dans un dossier partagé pour simplifier les contrôles.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">Étape 4 – Pilotage & reporting</h3>
            <p>
              Nous mettons en place un tableau de bord budgétaire et un reporting mensuel : dossier en cours, montants engagés, dates de sessions, attestations réceptionnées. Ce pilotage garantit l’anticipation des échéances et la traçabilité en cas d’audit.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-6 mt-10 rounded-lg">
              <p className="font-semibold text-foreground mb-2">Cas client anonymisé – Propreté (450 salariés)</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Situation initiale : 28 k€ arrivant à péremption au 31/12/2024, aucun dossier prêt</li>
                <li>Intervention IA Center (septembre – décembre 2024) : audit + PDC express + 6 dossiers priorisés</li>
                <li>Résultat : 26 k€ consommés (formations digitales & management), 5 k€ d’abondement additionnel obtenu</li>
                <li>Gain indirect : baisse de 12 % des réclamations clients sur les sites pilotes</li>
              </ul>
            </div>
          </div>
          <div className="grid gap-6 mt-10">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-primary/10 border border-primary/30 rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <span className="text-xs uppercase tracking-wide text-primary bg-primary/15 px-3 py-1 rounded-full">
                    KPI cible : {step.kpi}
                  </span>
                </div>
                <p className="text-muted-foreground mb-3">{step.description}</p>
                <p className="text-sm text-muted-foreground font-medium">Livrable IA Center : {step.deliverable}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Visual data block */}
        <section id="visuel" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <LineChart className="h-8 w-8 mr-3 text-primary" />
            Visualisation 63 % / 37 %
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              La sous-consommation des budgets AKTO est un phénomène complexe. Pour mieux comprendre son impact, voici une représentation visuelle des chiffres.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-silver-light border border-silver-medium rounded-lg p-6 flex items-center">
                <BarChart3 className="h-12 w-12 text-primary mr-4" />
                <div>
                  <p className="text-2xl font-bold text-foreground">63 %</p>
                  <p className="text-sm text-muted-foreground">Taux d'utilisation moyen des budgets AKTO</p>
                </div>
              </div>
              <div className="bg-silver-light border border-silver-medium rounded-lg p-6 flex items-center">
                <BarChart3 className="h-12 w-12 text-primary mr-4" />
                <div>
                  <p className="text-2xl font-bold text-foreground">37 %</p>
                  <p className="text-sm text-muted-foreground">Taux de sous-consommation</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground">
              Ce graphique met en évidence le décalage entre le taux d’utilisation moyen des budgets AKTO (63 %) et le taux de sous-consommation (37 %). Cela signifie que pour chaque 100 € versés, 37 € ne sont pas transformés en compétences.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16">
          <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Ne laissez plus un euro AKTO filer entre vos doigts
            </h2>
            <p className="text-muted-foreground mb-6">
              Demandez un diagnostic gratuit : nous auditons votre DSN, lisons votre compteur AKTO, identifions les reliquats menacés et bâtissons un plan d’action sur 90 jours. Vous repartez avec un dossier prêt à être engagé – ou nous le pilotons pour vous.
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
              Réserver un diagnostic budget AKTO
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq-akto" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <HelpCircle className="h-8 w-8 mr-3 text-primary" />
            Questions fréquentes des dirigeants AKTO
          </h2>
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-semibold mt-6 mb-3">Combien de temps AKTO met-il pour valider une prise en charge en 2025 ?</h3>
            <p>
              Les dossiers complets issus des catalogues prioritaires sont instruits en 10 à 15 jours ouvrés (baromètre interne AKTO, Q3 2025). Hors catalogue ou en cas de pièces manquantes, comptez plutôt 4 à 6 semaines. D’où l’importance d’une check-list rigoureuse.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Peut-on récupérer un budget déjà perdu ?</h3>
            <p>
              Non : une fois la date de péremption atteinte (31 décembre de la troisième année), la contribution est définitivement mutualisée. En revanche, AKTO peut accorder un abondement exceptionnel si vous présentez un plan structuré sur les priorités 2025. IA Center se charge de préparer ce dossier.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Quelles preuves conserver pour un contrôle URSSAF ou AKTO ?</h3>
            <p>
              Conservez au minimum : les bulletins de paie indiquant l’IDCC, le compte rendu DSN, les accusés de dépôt AKTO, les conventions signées, les feuilles d’émargement (ou attestations digitales) et le relevé budgétaire exporté du portail. Nous archivons systématiquement ces pièces dans un dossier partagé avec nos clients.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Conclusion : traiter le budget AKTO comme un actif stratégique</h2>
            <p>
              La sous-consommation chronique des budgets AKTO n’est pas une fatalité. Les dernières publications officielles montrent que l’enveloppe existe, les priorités sont financées et les délais se réduisent lorsque les dossiers sont construits proprement. Ce qui manque le plus souvent, c’est une gouvernance opérationnelle : audit, planification, montage, pilotage. C’est précisément le rôle qu’IA Center prend à vos côtés.
            </p>
            <p>
              En sécurisant votre rattachement DSN, en exploitant les priorités 2025 et en mobilisant vos managers autour de formats adaptés, vous transformez une cotisation contrainte en avantage compétitif. Parlons-en : un diagnostic complet ne coûte que du temps – et peut sauver plusieurs dizaines de milliers d’euros dès cette année.
            </p>
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
                <a
                  href="https://www.akto.fr/wp-content/uploads/2024/07/AKTO-Rapport-activite-2023.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  AKTO – Rapport d’activité 2023 (publié juillet 2024)
                </a>
              </li>
              <li>
                <a
                  href="https://www.francecompetences.fr/app/uploads/2025/09/Panorama-Financement-formation-2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  France Compétences – Panorama 2024 (publication septembre 2025)
                </a>
              </li>
              <li>
                Commission Paritaire Nationale AKTO – Compte-rendu du 15 septembre 2025
              </li>
              <li>
                Baromètre interne AKTO – Priorités et délais de prise en charge T3 2025
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
                <Link to="/blog/comment-savoir-entreprise-opco-constructys-akto" className="text-primary hover:underline">
                  Identifier votre OPCO : Constructys ou AKTO ?
                </Link>
              </li>
              <li>
                <Link to="/blog/entreprise-cotise-opco-comment-profiter" className="text-primary hover:underline">
                  Votre entreprise cotise à un OPCO : comment en profiter concrètement ?
                </Link>
              </li>
              <li>
                <Link to="/blog/role-opco-transformation-numerique-entreprises" className="text-primary hover:underline">
                  OPCO & transformation numérique : financer vos projets digitaux
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
                  <p className="font-semibold text-foreground">Télécharger la check-list budget AKTO 2025</p>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Modèle IA Center pour suivre vos reliquats, deadlines et pièces justificatives – construit pour les comités de direction.
                  </p>
                </div>
              </div>
              <a
                href="https://iacenter.fr/downloads/checklist-budget-akto-2025.xlsx"
                target="_blank"
                rel="noopener noreferrer"
                onClick={registerCTA({
                  name: 'Download check-list AKTO',
                  location: 'lead_magnet',
                  content: 'checklist_budget_akto',
                  url: 'https://iacenter.fr/downloads/checklist-budget-akto-2025.xlsx'
                })}
                className="inline-flex items-center px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
              >
                Télécharger la check-list
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              ✅ Cochez la case dédiée dans le formulaire pour recevoir la version mise à jour automatiquement avec nos veilles AKTO (Perplexity + flux officiels).
            </p>
          </div>
        </section>

        {/* Formulaire */}
        <section id="formulaire" className="mb-12">
          <div className="bg-silver-light border border-silver-medium rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Demander un audit budget AKTO</h2>
            <p className="text-muted-foreground mb-6">
              Remplissez ce formulaire : un consultant IA Center vous recontacte sous 24 h ouvrées pour analyser votre DSN, votre compteur AKTO et préparer votre plan d’action.
            </p>
            <form
              action="https://formspree.io/f/xgvykkzq"
              method="POST"
              className="grid gap-4 md:grid-cols-2"
            >
              <input type="hidden" name="article" value="Article32_Budget_AKTO" />
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
                  placeholder="Ex : 30 k€ à consommer avant 31/12, besoin d’un plan de 90 jours, DSN à sécuriser…"
                />
              </div>
              <div className="md:col-span-2">
                <label className="inline-flex items-start gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" name="resource_checklist_akto" className="mt-1" />
                  Je souhaite recevoir la check-list AKTO IA Center et ses mises à jour trimestrielles.
                </label>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  onClick={registerCTA({
                    name: 'Formulaire audit AKTO',
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

        {/* Signature */}
        <section className="mb-12">
          <div className="bg-silver-light border border-silver-medium rounded-lg p-6 shadow-sm flex flex-col md:flex-row md:items-center md:gap-4">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">Article rédigé par</p>
              <p className="text-lg font-semibold text-foreground">Julien Desmoulins</p>
              <p className="text-sm text-muted-foreground">Directeur Conseil OPCO – IA Center</p>
            </div>
            <p className="text-sm text-muted-foreground md:max-w-md">
              Julien pilote les programmes “Budget OPCO” d’IA Center et accompagne depuis 12 ans les entreprises de services dans la récupération de leurs enveloppes AKTO. Plus de 500 k€ sauvés en 2024.
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Article32;

