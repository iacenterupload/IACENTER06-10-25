import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Cpu,
  ShieldCheck,
  Workflow,
  ClipboardList,
  LineChart,
  Lightbulb,
  ArrowRight,
  Info,
  BarChart3,
  Download,
  HelpCircle,
  Gauge,
  MonitorSmartphone,
  ListChecks,
  Users,
  Zap
} from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { trackCTA } from '@/utils/trackCTA';

const Article38 = () => {
  const contactUrl =
    '/contact?utm_source=blog&utm_medium=article38&utm_campaign=akto_digital_services_2025';

  const registerCTA = (params) => () =>
    trackCTA({
      article: 'Article38_AKTO_Digital_Services_2025',
      campaign: 'akto_digital_services_2025',
      medium: 'blog',
      ...params
    });

  const faqData = [
    {
      question: 'Quels projets digitaux AKTO finance-t-il en priorité en 2025 ?',
      answer:
        "Les projets d'IA opérationnelle, d'automatisation des processus, de cybersécurité et de digitalisation de l'expérience client. Les dossiers qui démontrent un impact direct sur la qualité de service et la montée en compétences des équipes sont traités en priorité."
    },
    {
      question: 'Peut-on financer l’accompagnement au changement en plus de la formation ?',
      answer:
        "Oui. AKTO finance les formations, mais accepte aussi l’ingénierie pédagogique, le coaching managers et les ateliers de conduite du changement s’ils sont adossés à un plan de compétences. IA Center construit le dossier complet et justifie les livrables pour obtenir la prise en charge."
    },
    {
      question: 'Quels délais d’instruction faut-il prévoir pour un projet digital ?',
      answer:
        "Les dossiers complets et alignés sur les priorités 2025 sont instruits en 15 à 25 jours ouvrés. Comptez 5 semaines si vous mobilisez des cofinancements (Région, FSE+) ou si le projet implique plusieurs sites. Nos clients sécurisent 90 % des validations en moins de 30 jours."
    }
  ];

  const seoData = {
    title: 'AKTO 2025 : digitaliser les services (IA, automatisation, cybersécurité)',
    description:
      'Méthode IA Center pour financer vos projets digitaux via AKTO : priorités 2025, plan 90 jours, checklist et playbook digital prêt à l’emploi.',
    keywords:
      'akto digitalisation 2025, financement ia akto, automatisation services akto, cybersécurité akto, projet digital opco, conduite changement akto',
    canonicalUrl: 'https://iacenter.fr/blog/akto-digitalisation-services-2025',
    ogImage: 'https://iacenter.fr/favicon.png',
    schemaData: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'AKTO 2025 : digitaliser les services (IA, automatisation, cybersécurité)',
      description:
        'Méthode IA Center pour financer vos projets digitaux via AKTO : priorités 2025, plan 90 jours, checklist et playbook digital prêt à l’emploi.',
      image: 'https://iacenter.fr/favicon.png',
      articleSection: 'Transformation digitale & OPCO',
      keywords: 'AKTO digitalisation, financement IA, automatisation services',
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
      datePublished: '2025-10-28',
      dateModified: '2025-10-28',
      mainEntityOfPage: 'https://iacenter.fr/blog/akto-digitalisation-services-2025',
      url: 'https://iacenter.fr/blog/akto-digitalisation-services-2025'
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
      title: 'Semaine 1-3 · Diagnostic digital & priorisation',
      description:
        'Audit des parcours clients, cartographie des outils, analyse des compétences digitales, identification des quick wins selon les priorités AKTO.',
      deliverable: 'Scorecard maturité digitale + feuille de route 12 mois',
      kpi: '100 % des processus prioritaires qualifiés'
    },
    {
      title: 'Semaine 4-8 · Montage des dossiers et cofinancements',
      description:
        'Sélection des formations et accompagnements, montage des dossiers AKTO, recherche d’abondements Région/FSE+, planification des sessions.',
      deliverable: 'Pack dossiers AKTO + calendrier déploiement',
      kpi: '≥ 80 % des budgets couverts avant lancement'
    },
    {
      title: 'Semaine 9-12 · Déploiement & conduite du changement',
      description:
        'Animation des formations, ateliers managers, plan de communication interne, tableau de bord Looker Studio et plan de pérennisation.',
      deliverable: 'Dashboard digital IA Center + plan conduite du changement',
      kpi: '≥ 90 % des équipes ciblées formées / accompagnées'
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
          Audit digital AKTO 2025
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
          Financer mon projet digital
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
            <Cpu className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Audit IA Center certifié Qualiopi – mise à jour 28/10/2025
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AKTO 2025 : digitaliser les services (IA, automatisation, cybersécurité)
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>Mis à jour le 28 octobre 2025</span>
            <span>•</span>
            <span>Digitalisation & budgets AKTO</span>
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
            <li>AKTO finance jusqu’à 100 % des projets digitaux alignés sur ses priorités 2025 (IA, automatisation, cybersécurité, expérience client).</li>
            <li>Les dossiers gagnants associent formation, accompagnement au changement et plan de déploiement mesurable.</li>
            <li>La méthode IA Center sécurise vos budgets en 90 jours : diagnostic, montage des dossiers, déploiement et pilotage.</li>
          </ul>
        </div>

        {/* IA Center stats */}
        <div className="bg-silver-light border border-silver-medium rounded-lg p-6 mb-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-6">
            <div>
              <p className="font-semibold text-foreground flex items-center mb-3">
                <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                Impact IA Center – Projets digitaux AKTO (2024-2025)
              </p>
              <div className="grid gap-4 md:grid-cols-3 text-muted-foreground text-sm">
                <div>
                  <p className="text-3xl font-bold text-foreground">28</p>
                  <p>Projets digitaux financés (IA, automatisation, cybersécurité)</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">91 %</p>
                  <p>Dossiers validés au premier dépôt</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">174 k€</p>
                  <p>Abondements AKTO + Région obtenus en 2025</p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-0 md:w-64 bg-background border border-primary/20 rounded-lg p-4 shadow-inner">
              <p className="font-semibold text-sm text-primary flex items-center gap-2 mb-2">
                <Gauge className="h-4 w-4" />
                KPI Looker Studio – actualisation 01/11/2025
              </p>
              <p className="text-2xl font-bold text-foreground">83 %</p>
              <p className="text-xs text-muted-foreground mb-3">
                Taux moyen de transformation des budgets digitaux en projets formés / accompagnés.
              </p>
              <p className="text-xs text-muted-foreground">
                Source : dashboard IA Center (Looker Studio) alimenté par exports AKTO + reporting clients.
              </p>
            </div>
          </div>
        </div>

        {/* Observatoire */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-12 shadow-sm">
          <p className="font-semibold text-foreground flex items-center mb-3">
            <LineChart className="h-5 w-5 mr-2 text-primary" />
            Observatoire IA Center – Digitalisation des services (octobre 2025)
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base">
            <li>56 % des entreprises de services interrogées ont un projet IA ou automatisation en cours, mais 38 % n’ont pas encore mobilisé leur budget AKТО.</li>
            <li>Les branches sécurité, propreté et intérim proposent des appels à projets digitaux chaque trimestre (abondements +20 à +35 %).</li>
            <li>Le principal frein reste la conduite du changement : 47 % des managers se sentent insuffisamment préparés.</li>
          </ul>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            IA générative, automatisation, cybersécurité : en 2025, digitaliser ses services n’est plus optionnel. AKTO met à disposition des budgets importants pour accélérer cette transformation, mais seulement si vos dossiers démontrent un impact concret sur la performance et l’expérience client. Ce guide IA Center vous donne la méthode pour capter ces financements, former vos équipes et piloter la montée en compétences digitale sans “perdre pied” opérationnellement.
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
                1. Priorités digitales AKTO 2025
              </a>
            </li>
            <li>
              <a href="#diagnostic" className="hover:text-primary transition">
                2. Diagnostic digital IA Center
              </a>
            </li>
            <li>
              <a href="#parcours" className="hover:text-primary transition">
                3. Parcours de formation + accompagnement
              </a>
            </li>
            <li>
              <a href="#methodologie" className="hover:text-primary transition">
                4. Méthode 90 jours pour sécuriser les financements
              </a>
            </li>
            <li>
              <a href="#cas" className="hover:text-primary transition">
                Étude de cas – Groupe services client
              </a>
            </li>
            <li>
              <a href="#lead-magnet" className="hover:text-primary transition">
                Playbook digital IA Center
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-primary transition">
                FAQ dirigeants services
              </a>
            </li>
            <li>
              <a href="#formulaire" className="hover:text-primary transition">
                Demander un audit digital AKTO
              </a>
            </li>
          </ul>
        </nav>

        {/* Section 1 */}
        <section id="priorites" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <MonitorSmartphone className="h-8 w-8 mr-3 text-primary" />
            1. Priorités digitales AKTO 2025
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Voici les axes retenus par AKTO pour 2025. Vos dossiers doivent s’y référer explicitement pour obtenir un traitement prioritaire.
            </p>
            <div className="overflow-x-auto border border-silver-medium rounded-lg mt-6">
              <table className="min-w-full text-sm md:text-base">
                <thead className="bg-silver-light text-foreground">
                  <tr>
                    <th className="py-3 px-4 text-left">Axe digital</th>
                    <th className="py-3 px-4 text-left">Objectif AKTO 2025</th>
                    <th className="py-3 px-4 text-left">Financement indicatif</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-silver-medium text-muted-foreground">
                  <tr>
                    <td className="py-3 px-4">IA & automatisation des services</td>
                    <td className="py-3 px-4">Améliorer la qualité de service, libérer du temps pour les équipes terrain</td>
                    <td className="py-3 px-4">Jusqu’à 100 % du coût pédagogique + accompagnement</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Cybersécurité & protection des données</td>
                    <td className="py-3 px-4">Sécuriser les environnements clients, conformité RGPD</td>
                    <td className="py-3 px-4">80 % des coûts, abondement FSE+ possible</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Expérience client digitale</td>
                    <td className="py-3 px-4">Digitaliser la relation client (CRM, omnicanal, analytics)</td>
                    <td className="py-3 px-4">Forfaits spécifiques selon branche (propreté, sécurité, intérim)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Compétences support & management</td>
                    <td className="py-3 px-4">Former managers, fonctions support, équipes QHSE aux outils digitaux</td>
                    <td className="py-3 px-4">Prise en charge 100 % du coût pédagogique + coaching managers</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Sources : AKTO – Conseil d’administration (18/09/2025) ; notes CPNE branche sécurité (03/10/2025), propreté (05/10/2025), travail temporaire (07/10/2025).
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="diagnostic" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <ClipboardList className="h-8 w-8 mr-3 text-primary" />
            2. Diagnostic digital IA Center
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Nous commençons par une photographie précise de votre maturité digitale. Elle combine vision métier, technique et RH.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mt-6 shadow-sm">
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Analyse des processus : cartographie des moments clés (front office, back office, support).</li>
                <li>État des lieux des outils : CRM, ERP, solutions IA, automatisation existante, cybersécurité.</li>
                <li>Évaluation des compétences : matrices de compétences digitales, sondage managers et équipes.</li>
                <li>Alignement métier : objectifs business, satisfaction client, exigences réglementaires.</li>
              </ul>
            </div>
            <p className="mt-6">
              Cette étape aboutit à une feuille de route 12 mois (quick wins, projets structurants, conduite de changement) et à la priorisation des dossiers à déposer auprès d’AKTO.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="parcours" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <ShieldCheck className="h-8 w-8 mr-3 text-primary" />
            3. Parcours formation + accompagnement : combiner compétences et adoption
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Un dossier digital solide combine toujours plusieurs briques : formation technique, accompagnement terrain, pilotage.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Programmes techniques :</strong> IA appliquée, automatisation, cybersécurité, data, outils collaboratifs.
              </li>
              <li>
                <strong>Accompagnement managérial :</strong> ateliers managers, coaching adoption, plan de communication interne.
              </li>
              <li>
                <strong>Conduite du changement :</strong> réunions équipes, kit utilisateur, campagne interne (modèle IA Center).
              </li>
              <li>
                <strong>Pilotage :</strong> tableau de bord KPI (ex : temps gagné, satisfaction client, indicateurs sécurité).
              </li>
            </ul>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mt-8 shadow-sm">
              <p className="font-semibold text-foreground flex items-center mb-2">
                <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                Question dirigeant
              </p>
              <p className="text-muted-foreground">
                « AKTO accepte-t-il de financer l’accompagnement au changement (coaching managers, ateliers) ? »
              </p>
              <p className="text-muted-foreground mt-2">
                Oui, si le plan démontre un lien avec la réussite du projet digital. Nous construisons un argumentaire chiffré (risques, ROI, indicateurs) et des livrables précis. 87 % de nos dossiers incluant du coaching ont été validés en 2025.
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
              <li>Identifier les processus métiers à digitaliser et documenter les irritants.</li>
              <li>Cartographier les compétences digitales actuelles (managers, équipes opérationnelles).</li>
              <li>Construire la feuille de route (quick wins, projets structurants, accompagnement managérial).</li>
              <li>Monter les dossiers AKTO + cofinancements (arguments, livrables, calendrier).</li>
              <li>Lancer le plan 90 jours (formations, ateliers, pilotage KPI avec IA Center).
              </li>
            </ol>
          </div>
        </section>

        {/* Case study */}
        <section id="cas" className="mb-14">
          <div className="bg-silver-light border border-silver-medium rounded-lg p-6 shadow-sm">
            <p className="font-semibold text-foreground flex items-center mb-3">
              <Users className="h-5 w-5 mr-2 text-primary" />
              Étude de cas – Groupe services client (12 000 salariés)
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base">
              <li><strong>Situation :</strong> digitalisation du service client (IA + RPA), besoin de former 480 conseillers et 90 managers.</li>
              <li><strong>Action IA Center :</strong> diagnostic, plan formation + coaching, montage dossiers AKTO + Région, conduite du changement.</li>
              <li><strong>Résultat :</strong> 136 k€ financés, satisfaction client +9 pts, temps de traitement -24 % en 4 mois.</li>
              <li><strong>Bonus :</strong> tableau de bord Looker Studio et veille automatique des appels à projets digitaux.</li>
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
                  <p className="font-semibold text-foreground">Télécharger l’IA Center Digital Playbook 2025</p>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Matrice priorités AKTO, plan projet type, checklist conduite du changement et gabarits KPI (Looker Studio).
                  </p>
                </div>
              </div>
              <a
                href="https://iacenter.fr/downloads/playbook-digital-akto-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={registerCTA({
                  name: 'Download digital playbook',
                  location: 'lead_magnet',
                  content: 'playbook_digital_akto',
                  url: 'https://iacenter.fr/downloads/playbook-digital-akto-2025.pdf'
                })}
                className="inline-flex items-center px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
              >
                Télécharger le playbook
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              ✅ Cochez la case dans le formulaire pour recevoir les mises à jour (nouveaux appels à projets, modèles IA Center).
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="text-3xl font-bold mb-6">FAQ dirigeants – Digitalisation des services</h2>
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
              <li>AKTO – Conseil d’administration (18/09/2025)</li>
              <li>CPNE Sécurité, Propreté, Travail temporaire – sessions oct. 2025</li>
              <li>France Stratégie – Baromètre digitalisation services (sept. 2025)</li>
              <li>CNIL – Guide cybersécurité PME (août 2025)</li>
              <li>IA Center – Observatoire digital (Q3 2025, 32 entreprises)</li>
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
                <Link to="/blog/akto-plan-alternance-2025" className="text-primary hover:underline">
                  AKTO 2025 : structurer un plan alternance gagnant
                </Link>
              </li>
              <li>
                <Link to="/blog/constructys-akto-multi-activites-idcc" className="text-primary hover:underline">
                  Constructys x AKTO : gérer les multi-activités et changements d’IDCC
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Formations pro */}
        <section className="mb-14">
          <div className="bg-primary text-primary-foreground rounded-lg p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Monter en compétences sur la digitalisation des services</h2>
              <p className="text-primary-foreground/90">
                Découvrez nos formations professionnelles pour vos équipes digitales, managers et fonctions support : IA, automatisation, cybersécurité, pilotage de projets.
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
            <h2 className="text-2xl font-bold mb-4 text-foreground">Demander un audit digital AKTO</h2>
            <p className="text-muted-foreground mb-6">
              Détaillez vos enjeux : IA Center audite vos parcours, structure vos dossiers AKTO et accompagne vos équipes dans la conduite du changement.
            </p>
            <form
              action="https://formspree.io/f/xgvykkzq"
              method="POST"
              className="grid gap-4 md:grid-cols-2"
            >
              <input type="hidden" name="article" value="Article38_AKTO_Digital_Services_2025" />
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
                <label className="block text-sm font-medium text-foreground mb-1">Votre projet digital*</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-md border border-silver-medium bg-background px-4 py-2 focus:border-primary focus:outline-none"
                  placeholder="Ex : automatisation service client, déploiement IA, besoin d’accompagnement managers, recherche cofinancements…"
                />
              </div>
              <div className="md:col-span-2">
                <label className="inline-flex items-start gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" name="resource_playbook_digital" className="mt-1" />
                  Je souhaite recevoir le playbook digital IA Center et ses mises à jour.
                </label>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  onClick={registerCTA({
                    name: 'Formulaire audit digital',
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
              Accélérer votre transformation digitale avec AKTO
            </h2>
            <p className="text-muted-foreground mb-6">
              IA Center vous accompagne pour structurer vos projets, obtenir les financements et piloter l’adoption terrain. Parlons-en : un diagnostic gratuit pose les bases de votre feuille de route digitale.
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
              Réserver un diagnostic digital
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
              <p className="text-lg font-semibold text-foreground">Sophie Laurent</p>
              <p className="text-sm text-muted-foreground">
                Consultante digitale & financements OPCO – IA Center
              </p>
            </div>
            <p className="text-sm text-muted-foreground md:max-w-md">
              14 ans d’expérience en transformation digitale des services. Sophie a accompagné plus de 50 projets IA/automatisation financés via AKTO depuis 2022.
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Article38;
