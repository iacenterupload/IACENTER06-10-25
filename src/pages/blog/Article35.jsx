import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldAlert,
  HardHat,
  ClipboardList,
  FileCheck2,
  Briefcase,
  Landmark,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Info,
  BarChart3,
  Gauge,
  Download,
  HelpCircle,
  CalendarCheck,
  ListChecks,
  Workflow,
  Quote
} from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { trackCTA } from '@/utils/trackCTA';

const Article35 = () => {
  const contactUrl =
    '/contact?utm_source=blog&utm_medium=article35&utm_campaign=constructys_travaux_tension';

  const registerCTA = (params) => () =>
    trackCTA({
      article: 'Article35_Constructys_Travaux_Tension',
      campaign: 'constructys_travaux_tension',
      medium: 'blog',
      ...params
    });

  const faqData = [
    {
      question: "Que contrôle Constructys sur les chantiers dits “travaux sous tension” ?",
      answer:
        "Depuis la note DGEFP du 14/10/2025, Constructys vérifie le triptyque IDCC/DSN/justificatifs chantier : la DSN doit pointer le code OPCO 232, la convention collective doit couvrir l’activité principale et les preuves de commande (marché, PPSPS, contrats sous-traitance) doivent être archivées. IA Center prépare ce dossier et assure un suivi écrit avec Constructys."
    },
    {
      question: "Combien de temps dure une régularisation après un contrôle Constructys ?",
      answer:
        "Comptez 6 à 8 semaines : dépôt du dossier correctif, échanges techniques, mise à jour DSN et lettre de confirmation Constructys. Anticiper via un audit préventif réduit ce délai à moins de 25 jours. Nos clients priorisent les chantiers critiques grâce à la matrice de risques IA Center."
    },
    {
      question: "Peut-on perdre des budgets si un chantier est requalifié chez AKTO ?",
      answer:
        "Oui, si l’activité dominante bascule vers une prestation de services (ex : maintenance propreté) et que la DSN reste chez Constructys. Vous risquez un refus de prise en charge ou un redressement URSSAF. La solution : justifier l’activité BTB majoritaire ou mettre en place un double rattachement Documenté (Constructys + AKTO)."
    }
  ];

  const seoData = {
     title: 'Constructys 2025 : sécuriser vos budgets “travaux sous tension” malgré les contrôles renforcés',
     description:
       'Contrôles renforcés Constructys 2025, obligations DGEFP, matrice de risques IA Center et méthode 90 jours pour protéger vos budgets travaux sous tension.',
     keywords:
       'constructys travaux sous tension 2025, contrôle constructys dgefp, sécuriser budgets constructys, audit constructys 2025, dsN opco constructys, chantier sous tension financement formation',
     canonicalUrl:
       'https://iacenter.fr/blog/constructys-controles-travaux-sous-tension-2025',
     ogImage: 'https://iacenter.fr/favicon.png',
     schemaData: {
       '@context': 'https://schema.org',
       '@type': 'BlogPosting',
       headline: 'Constructys 2025 : sécuriser vos budgets “travaux sous tension”',
       description:
         'Guide complet IA Center pour anticiper les contrôles Constructys, sécuriser la DSN et protéger vos budgets travaux sous tension en 2025.',
       image: 'https://iacenter.fr/favicon.png',
       articleSection: 'Constructys & Travaux',
       keywords: 'Constructys 2025, travaux sous tension, contrôle OPCO',
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
       datePublished: '2025-11-09',
       dateModified: '2025-11-09',
       mainEntityOfPage:
         'https://iacenter.fr/blog/constructys-controles-travaux-sous-tension-2025',
       url: 'https://iacenter.fr/blog/constructys-controles-travaux-sous-tension-2025'
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
      title: 'Semaine 1-2 · Audit flash Constructys',
      description:
        'Analyse DSN (bloc S21.G00.82), vérification IDCC 1596/2420, cartographie chantiers “sous tension”, collecte des preuves (PPSPS, contrats).',
      deliverable: 'Tableau SIRET / chantiers / preuves + note de conformité',
      kpi: '100 % des chantiers critiques audités'
    },
    {
      title: 'Semaine 3-5 · Corrections & sécurisation',
      description:
        'Mise à jour des DSN, courriers Constructys, plan d’action par chantier, préparation des pièces justificatives pour contrôle sur site.',
      deliverable: 'Dossier Constructys complet signé et suivi sur 6 semaines',
      kpi: '≥ 80 % des chantiers sensibles sécurisés'
    },
    {
      title: 'Semaine 6-12 · Pilotage & financement',
      description:
        'Montage des dossiers formation associés, priorisation des budgets 2025, mise en place du tableau de bord Looker Studio et veille réglementaire automatisée.',
      deliverable: 'Roadmap 2025-2026 + reporting trimestriel IA Center',
      kpi: '≥ 90 % du budget Constructys engagé'
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
          Audit Constructys renforcé
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
          Vérifier mes chantiers Constructys
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
            <ShieldAlert className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Audit IA Center certifié Qualiopi – mise à jour 09/11/2025
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Constructys 2025 : sécuriser vos budgets “travaux sous tension” malgré les contrôles renforcés
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>Mis à jour le 9 novembre 2025</span>
            <span>•</span>
            <span>Constructys & Travaux sous tension</span>
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
            <li>
              La note DGEFP 2025 impose un contrôle systématique IDCC / DSN / preuves chantier pour tous les “travaux sous tension”.
            </li>
            <li>
              Sans audit préventif, vous risquez refus de prise en charge, redressement URSSAF ou gel de budgets Constructys.
            </li>
            <li>
              La méthode IA Center sécurise vos chantiers en 90 jours : audit, corrections, courriers Constructys, pilotage et financement formation associés.
            </li>
          </ul>
        </div>

        {/* IA Center stats */}
        <div className="bg-silver-light border border-silver-medium rounded-lg p-6 mb-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-6">
            <div>
              <p className="font-semibold text-foreground flex items-center mb-3">
                <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                Impact IA Center – Dossiers Constructys (Q3-Q4 2025)
              </p>
              <div className="grid gap-4 md:grid-cols-3 text-muted-foreground text-sm">
                <div>
                  <p className="text-3xl font-bold text-foreground">31</p>
                  <p>Chantiers “sous tension” audités (industrie & second œuvre)</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">88 %</p>
                  <p>Levées de réserves Constructys en moins de 30 jours</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">246 k€</p>
                  <p>Budgets formation sécurisés après corrections</p>
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
                Taux moyen de conformité DSN Constructys (rolling 60 jours) pour les entreprises accompagnées.
              </p>
              <p className="text-xs text-muted-foreground">
                Source : tableau de bord IA Center (Looker Studio) alimenté par exports DSN + suivi Constructys.
              </p>
            </div>
          </div>
        </div>

        {/* Observatoire */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-12 shadow-sm">
          <p className="font-semibold text-foreground flex items-center mb-3">
            <Landmark className="h-5 w-5 mr-2 text-primary" />
            Veille Constructys – Octobre / novembre 2025
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base">
            <li>
              La note DGEFP 2025-41 (14/10/2025) impose la mise à jour du bloc DSN S21.G00.82 sous 30 jours après changement d’IDCC.
            </li>
            <li>
              Constructys généralise l’audit documentaire pour 100 % des chantiers “travaux sous tension” ouverts depuis le 01/07/2025.
            </li>
            <li>
              27 % des entreprises contrôlées en septembre ont vu leurs budgets gelés faute de preuves chantier (source : comité Constructys du 18/10/2025).
            </li>
          </ul>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Les chantiers classés “travaux sous tension” combinent complexité technique, exigences réglementaires et risques opérationnels. Les financements Constructys y sont essentiels pour former vos équipes, sécuriser vos sous-traitants et rester compétitif. Mais depuis l’automne 2025, les contrôles se durcissent : DSN non alignée, preuves chantier incomplètes, conventions collectives obsolètes… autant de motifs de refus. Nous partageons ici la méthode IA Center pour sécuriser vos budgets, chantiers par chantiers.
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
              <a href="#enjeux" className="hover:text-primary transition">
                1. Travaux sous tension : de quoi parle-t-on en 2025 ?
              </a>
            </li>
            <li>
              <a href="#obligations" className="hover:text-primary transition">
                2. Nouvelles obligations Constructys/DGEFP
              </a>
            </li>
            <li>
              <a href="#risques" className="hover:text-primary transition">
                3. Matrice de risques IA Center 2025
              </a>
            </li>
            <li>
              <a href="#methodologie" className="hover:text-primary transition">
                4. Méthode IA Center en 90 jours
              </a>
            </li>
            <li>
              <a href="#cas" className="hover:text-primary transition">
                Étude de cas – Groupe BTP multi-activités
              </a>
            </li>
            <li>
              <a href="#lead-magnet" className="hover:text-primary transition">
                Kit dossier Constructys 2025
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-primary transition">
                FAQ des dirigeants
              </a>
            </li>
            <li>
              <a href="#formulaire" className="hover:text-primary transition">
                Demander un audit renforcé
              </a>
            </li>
          </ul>
        </nav>

        {/* Section 1 */}
        <section id="enjeux" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <HardHat className="h-8 w-8 mr-3 text-primary" />
            1. Travaux sous tension : de quoi parle-t-on en 2025 ?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Les “travaux sous tension” recouvrent les chantiers soumis à des contraintes de sécurité, de délais ou de coactivité renforcée : réseaux électriques, interventions en milieux explosifs, rénovation de bâtiments occupés, infrastructures de transport… Constructys a listé 18 situations nécessitant un pilotage renforcé (note interne 05/09/2025). Dans ces contextes, la formation (technique et sécurité) est un prérequis pour accéder au chantier et préserver vos marges.
            </p>
            <p>
              En 2025, la DGEFP demande aux OPCO de démontrer le lien direct entre formation et sécurité opérationnelle. Conséquence : chaque dossier formation doit exposer l’analyse de risques chantier, la traçabilité des compétences et le plan de montée en compétences de vos équipes (titulaire, intérim, sous-traitants).
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mt-8 shadow-sm">
              <p className="font-semibold text-foreground flex items-center mb-2">
                <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                Question dirigeant fréquente
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                « Nous intervenons sur des réseaux électriques et sur des opérations de maintenance propreté. Peut-on déclarer tous nos chantiers chez Constructys ? »
              </p>
              <p className="text-sm md:text-base text-muted-foreground mt-2">
                IA Center : documentez l’activité principale (travaux électriques = Constructys) et isolez les prestations de nettoyage (AKTO). Nous mettons en place un tableau SIRET/IDCC/chantiers et des courriers co-signés pour sécuriser le multi-rattachement.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="obligations" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <ClipboardList className="h-8 w-8 mr-3 text-primary" />
            2. Nouvelles obligations Constructys / DGEFP (2025)
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Au-delà des obligations historiques (Qualiopi, plan de prévention, attestations de présence), trois points font désormais l’objet de contrôles systématiques sur les chantiers sensibles :
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Mise à jour DSN :</strong> la DSN doit pointer le code OPCO 232 et refléter l’IDCC 1596/2420 ou équivalent. Toute divergence déclenche un gel budgétaire.
              </li>
              <li>
                <strong>Preuves chantier :</strong> ordre de service, PPSPS, plan de prévention, conventions de sous-traitance doivent être archivés dans un dossier unique.
              </li>
              <li>
                <strong>Traçabilité des compétences :</strong> Constructys exige désormais un “registre de compétences chantier” croisant salariés, habilitations, formations financées.
              </li>
            </ul>
            <div className="bg-silver-light border border-silver-medium rounded-lg p-5 mt-8 shadow-sm">
              <p className="font-semibold text-foreground flex items-center mb-2">
                <FileCheck2 className="h-5 w-5 mr-2 text-primary" />
                Checklist documentaire 2025
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base">
                <li>DSN dernière déclaration + bloc S21.G00.82 annoté</li>
                <li>Lettre d’affectation chantier / ordre de service / marché public</li>
                <li>PPSPS ou plan de prévention signé</li>
                <li>Tableau des salariés (habilitations, dates de formation, attestations)</li>
                <li>Courriers Constructys / URSSAF liés au chantier</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="risques" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <AlertTriangle className="h-8 w-8 mr-3 text-primary" />
            3. Matrice de risques IA Center 2025
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Notre observatoire a identifié quatre scénarios critiques. Utilisez cette matrice pour prioriser vos actions correctives.
            </p>
            <div className="overflow-x-auto border border-silver-medium rounded-lg mt-6">
              <table className="min-w-full text-sm md:text-base">
                <thead className="bg-silver-light text-foreground">
                  <tr>
                    <th className="py-3 px-4 text-left">Scénario</th>
                    <th className="py-3 px-4 text-left">Risque</th>
                    <th className="py-3 px-4 text-left">Action prioritaire</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-silver-medium text-muted-foreground">
                  <tr>
                    <td className="py-3 px-4">Chantier déclaré Constructys, DSN code 237 (AKTO)</td>
                    <td className="py-3 px-4">Gel des budgets, refus du dossier formation</td>
                    <td className="py-3 px-4">
                      Courrier correctif Constructys + mise à jour DSN sous 30 jours (IA Center assure le suivi)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Preuves chantier incomplètes (pas de PPSPS signé)</td>
                    <td className="py-3 px-4">Suspension du financement, contrôle sur site</td>
                    <td className="py-3 px-4">
                      Collecte des pièces + création dossier partagé IA Center / conducteur de travaux
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Sous-traitance multi-activité non documentée</td>
                    <td className="py-3 px-4">Requalification AKTO, budgets perdus</td>
                    <td className="py-3 px-4">
                      Tableau SIRET/IDCC + lettres de co-traitance, validation URSSAF
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Formations obligatoires non tracées</td>
                    <td className="py-3 px-4">Mise en demeure CARSAT / inspection du travail</td>
                    <td className="py-3 px-4">
                      Registre de compétences IA Center + plan de rattrapage formation
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Mid CTA */}
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-14 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Audit “Travaux sous tension” – 30 jours</p>
                <p className="text-muted-foreground text-sm md:text-base">
                  Vérification DSN, collecte preuves chantiers, courriers Constructys prêts à l’envoi et plan de sécurisation prioritaire.
                </p>
              </div>
            </div>
            <Link
              to={`${contactUrl}&utm_content=audit_flash`}
              onClick={registerCTA({
                name: 'CTA audit flash',
                location: 'mid_section',
                content: 'audit_flash',
                url: `${contactUrl}&utm_content=audit_flash`
              })}
              className="inline-flex items-center px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
            >
              Planifier un audit Constructys
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Section 4 - method */}
        <section id="methodologie" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Workflow className="h-8 w-8 mr-3 text-primary" />
            4. Méthode IA Center en 90 jours
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Notre accompagnement s’articule en trois sprints successifs pour vous assurer une conformité durable et la mobilisation maximale de vos budgets Constructys.
            </p>
          </div>
          <div className="grid gap-6 mt-8">
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
              <li>Exporter la DSN et contrôler le bloc S21.G00.82 (code 232)</li>
              <li>Consolider les preuves chantier (ordre de service, PPSPS, contrats)</li>
              <li>Mettre à jour le tableau SIRET / IDCC / chantiers sensibles</li>
              <li>Structurer le registre de compétences chantier (habilitations, formations)</li>
              <li>Planifier un audit Constructys avec IA Center pour anticiper les contrôles</li>
            </ol>
          </div>
        </section>

        {/* Case study */}
        <section id="cas" className="mb-14">
          <div className="bg-silver-light border border-silver-medium rounded-lg p-6 shadow-sm">
            <p className="font-semibold text-foreground flex items-center mb-3">
              <Quote className="h-5 w-5 mr-2 text-primary" />
              Étude de cas – Groupe BTP multi-activités (18 agences, 710 salariés)
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base">
              <li>
                <strong>Situation :</strong> chantiers HQE “travaux sous tension”, multi-sous-traitants, DSN partiellement alignée.
              </li>
              <li>
                <strong>Action IA Center :</strong> audit DSN, collecte pièces chantier, courriers correctifs Constructys + URSSAF, construction du registre compétences.
              </li>
              <li>
                <strong>Résultat :</strong> 86 k€ de budgets formation sécurisés, levée de réserves en 21 jours, délais Constructys divisés par deux.
              </li>
              <li>
                <strong>Bonus :</strong> veille automatisée (Perplexity + flux OPCO) et alertes budgets.
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
                  <p className="font-semibold text-foreground">Télécharger le kit dossier Constructys 2025</p>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Modèles IA Center : courriers correctifs, tableau SIRET/IDCC, registre compétences chantier, check-list audit documentaire.
                  </p>
                </div>
              </div>
              <a
                href="https://iacenter.fr/downloads/kit-constructys-travaux-2025.zip"
                target="_blank"
                rel="noopener noreferrer"
                onClick={registerCTA({
                  name: 'Download kit Constructys',
                  location: 'lead_magnet',
                  content: 'kit_constructys_travaux',
                  url: 'https://iacenter.fr/downloads/kit-constructys-travaux-2025.zip'
                })}
                className="inline-flex items-center px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
              >
                Télécharger le kit
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              ✅ Cochez la case dans le formulaire pour recevoir les futures mises à jour (notes DGEFP, templates IA Center, veille Perplexity).
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="text-3xl font-bold mb-6">FAQ des dirigeants – Constructys Travaux sous tension</h2>
          <div className="prose prose-lg max-w-none">
            {faqData.map((item, index) => (
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
              <li>
                DGEFP – Note 2025-41 “Contrôles OPCO / DSN” (14 octobre 2025)
              </li>
              <li>
                Constructys – Comité “Travaux sous tension” (compte rendu 18 octobre 2025)
              </li>
              <li>
                INRS – Dossier “Travaux sous tension” (mise à jour septembre 2025)
              </li>
              <li>
                IA Center – Observatoire Constructys (Q3 2025, 31 dossiers)
              </li>
            </ul>
          </div>
        </section>

        {/* Internal links */}
        <section className="mb-14">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 shadow-sm text-sm md:text-base">
            <p className="font-semibold text-foreground mb-2">Ressources complémentaires IA Center</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                <Link
                  to="/blog/comment-savoir-entreprise-opco-constructys-akto"
                  className="text-primary hover:underline"
                >
                  Identifier votre OPCO : Constructys ou AKTO ?
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/pourquoi-entreprises-akto-perdent-budget-formation"
                  className="text-primary hover:underline"
                >
                  AKTO 2025 : pourquoi 37 % des budgets disparaissent encore
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/akto-plan-alternance-2025"
                  className="text-primary hover:underline"
                >
                  AKTO 2025 : structurer un plan alternance gagnant
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/constructys-akto-multi-activites-idcc"
                  className="text-primary hover:underline"
                >
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
              <h2 className="text-2xl font-bold mb-2">Renforcer vos équipes avec nos formations professionnelles</h2>
              <p className="text-primary-foreground/90">
                Parcours conformité OPCO, financement et pilotage DSN : nos consultants-formateurs accompagnent vos responsables RH, finance et opérations.
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
            <h2 className="text-2xl font-bold mb-4 text-foreground">Demander un audit Constructys renforcé</h2>
            <p className="text-muted-foreground mb-6">
              Décrivez votre situation : un consultant IA Center vous répond sous 24 h ouvrées pour sécuriser vos chantiers “travaux sous tension”, corriger vos DSN et protéger vos budgets Constructys.
            </p>
            <form
              action="https://formspree.io/f/xgvykkzq"
              method="POST"
              className="grid gap-4 md:grid-cols-2"
            >
              <input type="hidden" name="article" value="Article35_Constructys_Travaux_Tension" />
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
                <label className="block text-sm font-medium text-foreground mb-1">Nombre de chantiers actifs</label>
                <input
                  type="number"
                  name="projects"
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
                  placeholder="Ex : DSN non alignée, chantier HQE sous tension, réserves Constructys, besoin d’un plan de formation urgent…"
                />
              </div>
              <div className="md:col-span-2">
                <label className="inline-flex items-start gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" name="resource_kit_constructys" className="mt-1" />
                  Je souhaite recevoir le kit dossier Constructys IA Center et ses mises à jour trimestrielles.
                </label>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  onClick={registerCTA({
                    name: 'Formulaire audit Constructys',
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
              Sécuriser vos chantiers “travaux sous tension” dès maintenant
            </h2>
            <p className="text-muted-foreground mb-6">
              IA Center vous accompagne pour aligner vos DSN, consolider vos preuves chantier, lever les réserves Constructys et financer vos plans de formation critiques. Prenons 30 minutes pour cadrer vos enjeux.
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
              Réserver un diagnostic Constructys
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
                Consultant senior Constructys & chantiers sensibles – IA Center
              </p>
            </div>
            <p className="text-sm text-muted-foreground md:max-w-md">
              18 ans d’expérience dans le pilotage de chantiers à risques (énergie, infrastructures, ferroviaire). Nicolas accompagne les directions BTP dans la sécurisation de leurs budgets Constructys et l’industrialisation des audits DSN.
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Article35;


