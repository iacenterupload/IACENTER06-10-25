import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import {
  DollarSign,
  Users,
  FileText,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target,
  TrendingUp,
  Info,
  ClipboardList,
  Quote,
  BarChart3,
  Award,
  Gauge,
  Download,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackCTA } from '@/utils/trackCTA';

const Article33 = () => {
  const contactUrl = '/contact?utm_source=blog&utm_medium=article33&utm_campaign=cotisation_opco_guide';

  const registerCTA = (params) => () =>
    trackCTA({
      article: 'Article33_Cotisation_OPCO',
      campaign: 'cotisation_opco_guide',
      medium: 'blog',
      ...params
    });

  const faqData = [
    {
      question: "Comment savoir si mon budget OPCO arrive à péremption ?",
      answer:
        "Connectez-vous à votre portail OPCO : la plupart affichent un compteur par année. Notez la date de péremption (31 décembre de l’année N+2) et programmez votre plan d’action trimestriel. IA Center fournit un tableau de bord partagé pour suivre chaque enveloppe." 
    },
    {
      question: "Combien de temps prend le montage d’un dossier de financement ?",
      answer:
        "Comptez 5 à 10 jours ouvrés pour un dossier standard (devis, programme, convention, justificatifs). Avec IA Center, nous préparons les pièces, déposons le dossier et gérons les relances pour respecter les priorités 2025."
    },
    {
      question: "Comment bénéficier des cofinancements (FSE+, aides régionales) ?",
      answer:
        "Chaque branche publie ses dispositifs : un plan structuré + un dossier complet permet de cumuler OPCO, FSE+, Région. Nous identifions ces abondements dès l’audit et constituons les demandes complémentaires." 
    }
  ];

  const seoData = {
     title: "Mon entreprise cotise à un OPCO : comment en profiter concrètement ? | Guide IA Center",
     description:
       'Guide complet pour exploiter efficacement votre cotisation OPCO et transformer votre contribution en investissement compétitif.',
     keywords:
       'cotisation OPCO, plan de développement des compétences, financement formation OPCO, audit OPCO IA Center',
     canonicalUrl: 'https://iacenter.fr/blog/entreprise-cotise-opco-comment-profiter',
     ogImage: 'https://iacenter.fr/favicon.png',
     schemaData: {
       '@context': 'https://schema.org',
       '@type': 'BlogPosting',
       headline: "Mon entreprise cotise à un OPCO : comment en profiter concrètement ?",
       description:
         'Guide complet pour exploiter efficacement votre cotisation OPCO et transformer votre contribution en investissement compétitif.',
       image: 'https://iacenter.fr/favicon.png',
       articleSection: 'OPCO & Financements',
       keywords: 'cotisation OPCO, financement formation, PDC',
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
       dateModified: '2025-10-17',
       mainEntityOfPage: 'https://iacenter.fr/blog/entreprise-cotise-opco-comment-profiter',
       url: 'https://iacenter.fr/blog/entreprise-cotise-opco-comment-profiter'
     }
   };

  useSEO(seoData);

  const timelineSteps = [
    {
      title: 'Mois 1 · Diagnostic & cadrage',
      description:
        'Audit des portails OPCO, relevé des reliquats, analyse DSN et entretiens flash avec les directions métier pour cadrer les priorités.',
      deliverable: 'Note stratégique + tableau de bord conformité',
      kpi: 'Cartographie 100 % des enveloppes'
    },
    {
      title: 'Mois 2 · Construction du PDC et quick wins',
      description:
        'Workshops, arbitrage des actions, estimation budgets, priorisation des dossiers à déposer immédiatement avant péremption.',
      deliverable: 'PDC 12-36 mois + 3 dossiers prêts à déposer',
      kpi: '≥ 70 % des budgets engagés'
    },
    {
      title: 'Mois 3 · Déploiement & cofinancements',
      description:
        'Dépôt des dossiers, suivi des validations, activation des abondements FSE+/Région, mise en route du reporting trimestriel.',
      deliverable: 'Plan de financement consolidé + reporting Looker Studio',
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
          Audit cotisation OPCO gratuit
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
          Optimiser ma cotisation OPCO
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
              Audit IA Center certifié Qualiopi – mise à jour 17/10/2025
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mon entreprise cotise à un OPCO : comment en profiter concrètement ?
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>Mis à jour le 17 octobre 2025</span>
            <span>•</span>
            <span>Financement & OPCO</span>
            <span>•</span>
            <span>Lecture : 20 min</span>
          </div>
        </div>

        {/* TL;DR */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10 shadow-sm">
          <p className="font-semibold text-primary flex items-center mb-3">
            <Info className="h-5 w-5 mr-2" />
            En bref
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Activez votre portail OPCO et contrôlez vos reliquats au moins une fois par trimestre.</li>
            <li>Structurez un plan de développement des compétences (PDC) sur 12 à 36 mois pour sécuriser 100 % des budgets.</li>
            <li>Combinez OPCO + cofinancements (FSE+, Région) pour multiplier par 2 ou 3 votre capacité de financement.</li>
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
                  <p className="text-3xl font-bold text-foreground">54</p>
                  <p>Plans PDC construits et financés</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">91 %</p>
                  <p>Clients ayant consommé 95 % de leur budget</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">380 k€</p>
                  <p>Co-financements additionnels obtenus (FSE+, Régions)</p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-0 md:w-64 bg-background border border-primary/20 rounded-lg p-4 shadow-inner">
              <p className="font-semibold text-sm text-primary flex items-center gap-2 mb-2">
                <Gauge className="h-4 w-4" />
                KPI Looker Studio – actualisation 01/11/2025
              </p>
              <p className="text-2xl font-bold text-foreground">93 %</p>
              <p className="text-xs text-muted-foreground mb-3">
                Taux de mobilisation moyenne des budgets OPCO chez nos clients 6 mois après la mission.
              </p>
              <p className="text-xs text-muted-foreground">
                Données consolidées via GA4 + exports OPCO synchronisés. Mise à jour automatique chaque début de mois.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Vous versez chaque année une contribution formation à votre OPCO. Sans pilotage, cette cotisation se transforme en ligne comptable sans retour. En activant votre portail, en planifiant votre plan de développement des compétences et en mobilisant les dispositifs d’abondement, vous convertissez cette obligation en investissement stratégique. Voici comment IA Center procède avec ses clients.
          </p>
          <p className="text-muted-foreground">
            Ce guide répond aux questions que les dirigeants nous posent le plus : <strong>comment utiliser concrètement sa cotisation OPCO</strong>, <strong>comment éviter la péremption des budgets</strong>, <strong>quelles actions de formation prioriser en 2025</strong> ou encore <strong>comment activer des cofinancements FSE+/Région</strong>. Nous y injectons notre méthode terrain et les données 2025 les plus fraîches.
          </p>
        </div>

        {/* Sommaire */}
        <nav className="bg-silver-light border border-silver-medium rounded-lg p-6 mb-12 shadow-sm">
          <p className="font-semibold text-foreground mb-3 flex items-center">
            <Info className="h-5 w-5 mr-2 text-primary" />
            Plan de navigation
          </p>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
            <li><a href="#cotisation" className="hover:text-primary transition">1. Cotisation : comprendre votre investissement</a></li>
            <li><a href="#activation" className="hover:text-primary transition">2. Activer le portail & suivre votre budget</a></li>
            <li><a href="#choisir" className="hover:text-primary transition">3. Sélectionner les formations finançables</a></li>
            <li><a href="#pdc" className="hover:text-primary transition">4. Construire un PDC performant</a></li>
            <li><a href="#optimiser" className="hover:text-primary transition">5. Optimiser grâce aux cofinancements</a></li>
            <li><a href="#checklist" className="hover:text-primary transition">Check-list IA Center</a></li>
            <li><a href="#cas-client" className="hover:text-primary transition">Étude de cas</a></li>
            <li><a href="#faq" className="hover:text-primary transition">FAQ</a></li>
            <li><a href="#formulaire" className="hover:text-primary transition">Demander un accompagnement</a></li>
          </ul>
        </nav>

        {/* Section 1 */}
        <section id="cotisation" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <DollarSign className="h-8 w-8 mr-3 text-primary" />
            1. Cotisation : comprendre votre investissement
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Votre Contribution à la Formation Professionnelle (CFP) représente 0,25 % de la masse salariale (entreprises {'< 50'} salariés) ou 1 % (≥ 50 salariés). Cette cotisation est collectée par votre OPCO et alimente votre budget formation. À cela peuvent s'ajouter des abondements spécifiques (branche, accords sectoriels, FSE+, aides régionales…).
            </p>
            <p>
              Exemple : une PME de 80 salariés avec une masse salariale de 3 M€ cotise 30 k€ par an. Sans planification, 10 à 12 k€ expirent tous les 2 ans. Avec un pilotage structuré, ces 30 k€ financent des parcours métiers, du management ou de la digitalisation.
            </p>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mt-8 shadow-sm">
            <p className="font-semibold text-foreground flex items-center mb-2">
              <HelpCircle className="h-5 w-5 mr-2 text-primary" />
              Question dirigeant
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              « Nous cotisons 45 k€ par an, mais l’OPCO ne finance que 18 k€. Est-ce normal ? »
            </p>
            <p className="text-sm md:text-base text-muted-foreground mt-2">
              Explication IA Center : sans plan structuré, seuls les dossiers déposés sont financés. Les reliquats expirent au 31/12 N+2. Nous récupérons l’historique, priorisons les besoins, déposons des dossiers groupés et activons les abondements pour atteindre 90 % de consommation.
            </p>
          </div>
        </section>

        {/* Mid CTA */}
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-14 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Atelier “Cotisation en action” – 2 heures</p>
                <p className="text-muted-foreground text-sm md:text-base">
                  Diagnostic express de vos portails OPCO, sélection d’actions finançables et plan de dépôt immédiat avec un consultant IA Center.
                </p>
              </div>
            </div>
            <Link
              to={`${contactUrl}&utm_content=atelier_cotisation`}
              onClick={registerCTA({
                name: 'CTA atelier cotisation',
                location: 'mid_section',
                content: 'atelier_cotisation',
                url: `${contactUrl}&utm_content=atelier_cotisation`
              })}
              className="inline-flex items-center px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
            >
              Réserver l’atelier
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Roadmap */}
        <section className="mb-14">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <CheckCircle className="h-6 w-6 mr-2 text-primary" />
            Roadmap IA Center – 90 jours pour mobiliser votre cotisation
          </h3>
          <div className="grid gap-6">
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
                  <h4 className="text-xl font-semibold text-foreground">{step.title}</h4>
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

        {/* Section 2 */}
        <section id="activation" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <FileText className="h-8 w-8 mr-3 text-primary" />
            2. Activer le portail & suivre votre budget
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Activez votre compte entreprise sur le portail OPCO (AKTO, Constructys, Atlas…). Vous y retrouvez : enveloppes disponibles, reliquats par année, catalogues de formations prioritaires, relevés de consommation. Sans activation, vous ne recevez pas les alertes de péremption.
            </p>
            <p>
              <strong>Réflexe IA Center :</strong> exporter le relevé budgétaire, annoter les dates de péremption, intégrer ces données dans un tableau de bord partagé. Les entreprises que nous accompagnons planifient ainsi leurs décisions 90 jours avant l’expiration d’un budget.
            </p>
          </div>
          <div className="bg-silver-light border border-silver-medium rounded-lg p-5 mt-8 shadow-sm">
            <p className="font-semibold text-foreground flex items-center mb-2">
              <HelpCircle className="h-5 w-5 mr-2 text-primary" />
              Bonnes pratiques IA Center
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              Mettre en place un rappel mensuel automatique (Google Agenda ou Notion) pour exporter le relevé budgétaire et contrôler les reliquats. Nous synchronisons ces exports dans Looker Studio afin que le dirigeant visualise les budgets en risque en un coup d’œil.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="choisir" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Users className="h-8 w-8 mr-3 text-primary" />
            3. Sélectionner les formations finançables
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Les formations éligibles doivent être délivrées par un organisme certifié Qualiopi. Priorisez les formations pré-validées dans le catalogue de votre OPCO : elles bénéficient d’un taux de prise en charge connu et d’un traitement accéléré.
            </p>
            <p>
              <strong>Astuce :</strong> combinez formations inter-entreprises (rapides à déployer) et intra-entreprises (sur-mesure). Les sessions intra financent plusieurs salariés en une seule fois et évitent la perte de reliquats.
            </p>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mt-8 shadow-sm">
            <p className="font-semibold text-foreground flex items-center mb-2">
              <HelpCircle className="h-5 w-5 mr-2 text-primary" />
              Conseil IA Center
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              Une fois par trimestre, nous interrogeons Perplexity + bases OPCO pour détecter de nouvelles formations labellisées. Les clients reçoivent un digest “formations à financer” avec taux de prise en charge et pièces attendues.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section id="pdc" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Target className="h-8 w-8 mr-3 text-primary" />
            4. Construire un PDC performant
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Sans plan de développement des compétences, la consommation des budgets reste opportuniste (moins de 60 % en moyenne). En construisant un PDC sur 12 à 36 mois, nos clients consomment 95 % de leurs droits OPCO.
            </p>
            <p>
              Méthodologie IA Center : ateliers métiers (besoins), tri par priorités stratégiques, estimation budgets, calendrier, puis montage des dossiers. Un suivi trimestriel permet d’ajuster selon les nouvelles enveloppes ou les abondements disponibles.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="optimiser" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <TrendingUp className="h-8 w-8 mr-3 text-primary" />
            5. Optimiser grâce aux cofinancements
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Votre OPCO peut cofinancer vos projets : FSE+, Région, accords de branche. Exemple AKTO : abondement jusqu’à 200 % sur la digitalisation ou l’encadrement de proximité. IA Center identifie ces dispositifs, monte le dossier complémentaire et suit les validations.
            </p>
            <p>
              Résultat : certains clients financent 100 % d’un programme de transformation (formations + temps d’accompagnement) sans avance de trésorerie.
            </p>
          </div>
          <div className="bg-silver-light border border-silver-medium rounded-lg p-5 mt-8 shadow-sm">
            <p className="font-semibold text-foreground flex items-center mb-2">
              <HelpCircle className="h-5 w-5 mr-2 text-primary" />
              Focus cofinancements
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              Nous avons constitué une base interne des dispositifs Région/FSE+ actualisée tous les deux mois. Chaque client reçoit une alerte lorsqu’un appel à projets correspond à son périmètre (ex : Transition numérique Île-de-France, HDF Compétences 2025).
            </p>
          </div>
        </section>

        {/* Checklist */}
        <section id="checklist" className="mb-14">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 shadow-sm">
            <p className="font-semibold text-foreground mb-3">Check-list IA Center – Exploiter votre cotisation</p>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2">
              <li>Activer le portail OPCO et exporter le relevé budgétaire.</li>
              <li>Identifier les échéances de péremption (année N, N-1, N-2).</li>
              <li>Cartographier les besoins (stratégiques, réglementaires, opérationnels).</li>
              <li>Construire un PDC sur 12-36 mois et prioriser les actions.</li>
              <li>Monter les dossiers et suivre les cofinancements avec IA Center.</li>
            </ol>
          </div>
        </section>

        {/* Case study */}
        <section id="cas-client" className="mb-14">
          <div className="bg-silver-light border border-silver-medium rounded-lg p-6 shadow-sm">
            <p className="font-semibold text-foreground flex items-center mb-3">
              <Quote className="h-5 w-5 mr-2 text-primary" />
              Étude de cas – PME multi-sites services (320 salariés)
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base">
              <li><strong>Avant IA Center :</strong> aucun suivi, 28 k€ expirés sur 2 ans.</li>
              <li><strong>Action :</strong> audit portails, PDC 24 mois, dossiers multi-sites (management, digitalisation, sécurité).</li>
              <li><strong>Résultat :</strong> 31 k€ financés en 90 jours + 18 k€ d’abondement régional.</li>
              <li><strong>Suivi :</strong> reporting trimestriel + automatisation des relances de péremption.</li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
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

        {/* Sources */}
        <section className="mb-14">
          <div className="bg-silver-light border border-silver-medium rounded-lg p-6 shadow-sm">
            <p className="font-semibold text-foreground mb-3">Sources officielles</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base">
              <li>France Compétences – Panorama financement 2024 (pub. sept. 2025)</li>
              <li>AKTO – Note priorités 2025 (18/09/2025)</li>
              <li>Constructys – Rapport 2023 (mai 2024)</li>
              <li>Région Île-de-France – Dispositif Innov’up formation (2024)</li>
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
                  Budget AKTO : pourquoi 37 % disparaissent encore en 2025
                </Link>
              </li>
              <li>
                <Link to="/blog/comment-savoir-entreprise-opco-constructys-akto" className="text-primary hover:underline">
                  Identifier son OPCO : Constructys ou AKTO
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
                  <p className="font-semibold text-foreground">Télécharger le modèle PDC IA Center 2025</p>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Gabarit Excel + Notion pour piloter vos actions, budgets et cofinancements avec des filtres par OPCO et par échéance.
                  </p>
                </div>
              </div>
              <a
                href="https://iacenter.fr/downloads/modele-pdc-opco-2025.xlsx"
                target="_blank"
                rel="noopener noreferrer"
                onClick={registerCTA({
                  name: 'Download modèle PDC',
                  location: 'lead_magnet',
                  content: 'modele_pdc',
                  url: 'https://iacenter.fr/downloads/modele-pdc-opco-2025.xlsx'
                })}
                className="inline-flex items-center px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
              >
                Télécharger le modèle
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              💡 Ajoutez la case correspondante dans le formulaire pour recevoir les mises à jour trimestrielles (nouveaux dispositifs, taux de prise en charge, alertes IA Center).
            </p>
          </div>
        </section>

        {/* Formulaire */}
        <section id="formulaire" className="mb-14">
          <div className="bg-silver-light border border-silver-medium rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Demander un accompagnement IA Center</h2>
            <p className="text-muted-foreground mb-6">
              Décrivez votre situation : nous auditons vos droits, construisons votre PDC et montons les dossiers de financement. Réponse sous 24 h ouvrées.
            </p>
            <form
              action="https://formspree.io/f/xgvykkzq"
              method="POST"
              className="grid gap-4 md:grid-cols-2"
            >
              <input type="hidden" name="article" value="Article33_Cotisation_OPCO" />
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
                <label className="block text-sm font-medium text-foreground mb-1">Effectif</label>
                <input
                  type="number"
                  name="headcount"
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
                  placeholder="Ex : 45 k€ à consommer, besoin d’un plan 2025-2026, recherche cofinancements Région/FSE+…"
                />
              </div>
              <div className="md:col-span-2">
                <label className="inline-flex items-start gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" name="resource_pdc_modele" className="mt-1" />
                  Je souhaite recevoir le modèle PDC IA Center et ses mises à jour trimestrielles.
                </label>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  onClick={registerCTA({
                    name: 'Formulaire accompagnement OPCO',
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
              <p className="text-lg font-semibold text-foreground">Mélanie Robert</p>
              <p className="text-sm text-muted-foreground">Consultante senior PDC & Financements – IA Center</p>
            </div>
            <p className="text-sm text-muted-foreground md:max-w-md">
              Mélanie accompagne les DRH et dirigeants dans la structuration de leurs plans de développement des compétences. 14 ans d’expérience OPCO, 50 plans PDC financés en 2024.
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Article33;

