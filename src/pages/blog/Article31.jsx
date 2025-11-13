import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import {
  Compass,
  Archive,
  Layers,
  ClipboardList,
  AlertCircle,
  BarChart3,
  Quote,
  Info,
  ArrowRight,
  ExternalLink,
  Target,
  ShieldCheck,
  CalendarCheck,
  FileCheck,
  Lightbulb,
  TrendingUp,
  HelpCircle,
  Download,
  Award,
  Gauge
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackCTA } from '@/utils/trackCTA';

const Article31 = () => {
  const contactUrl = '/contact?utm_source=blog&utm_medium=article31&utm_campaign=opco_constructys_akto';

  const registerCTA = (params) => () =>
    trackCTA({
      article: 'Article31_OPCO_Constructys_AKTO',
      campaign: 'opco_constructys_akto',
      medium: 'blog',
      ...params
    });

  const faqData = [
    {
      question: "Comment vérifier rapidement le code OPCO déclaré dans ma DSN ?",
      answer:
        "Connectez-vous sur Net-entreprises, téléchargez le compte rendu métier de votre dernière DSN et consultez le bloc S21.G00.82. Vous y trouverez le code OPCO collecteur (232 pour Constructys, 237 pour AKTO). Exportez et archivez ce PDF dans votre dossier social."
    },
    {
      question: "Combien de temps prend une bascule d'OPCO lorsque ma convention change ?",
      answer:
        "Prévoyez 4 à 6 semaines : lettre recommandée à l'OPCO actuel avec preuve de nouvelle convention collective, accusé de réception, mise à jour DSN. IA Center suit le dossier et obtient un écrit confirmant le transfert des reliquats."
    },
    {
      question: "Que faire si deux établissements partagent des activités différentes ?",
      answer:
        "Chaque SIRET doit disposer de son propre rattachement OPCO. Créez un tableau de suivi IDCC/SIRET, activez chaque portail OPCO et centralisez les preuves. IA Center fournit un kit de suivi multi-sites pour éviter les erreurs de dépôt."
    }
  ];

  const seoData = {
    title: "Comment savoir si mon entreprise dépend de l'OPCO Constructys ou AKTO ? | Guide 2025",
    description:
      "Check-list complète pour sécuriser votre rattachement OPCO : DSN, IDCC, outils publics, cas particuliers et accompagnement IA Center.",
    keywords:
      "identifier OPCO, OPCO Constructys, OPCO AKTO, code IDCC, DSN OPCO, trouver OPCO SIRET, convention collective OPCO, diagnostic OPCO IA Center",
    canonicalUrl: "https://iacenter.fr/blog/comment-savoir-entreprise-opco-constructys-akto",
    ogImage: "https://iacenter.fr/favicon.png",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Comment savoir si mon entreprise dépend de l'OPCO Constructys ou AKTO ?",
      "description":
        "Guide senior pour rattacher votre entreprise à Constructys ou AKTO : sources officielles, méthodes croisées et contrôles à effectuer.",
      "image": "https://iacenter.fr/favicon.png",
      "articleSection": "OPCO & Financements",
      "keywords": "identifier OPCO, OPCO Constructys, OPCO AKTO, code IDCC, DSN OPCO",
      "author": {
        "@type": "Person",
        "name": "Wissam Haddad",
        "jobTitle": "Directeur Conseil OPCO",
        "worksFor": {
          "@type": "EducationalOrganization",
          "name": "IA Center",
          "url": "https://iacenter.fr"
        }
      },
      "publisher": {
        "@type": "EducationalOrganization",
        "name": "IA Center",
        "url": "https://iacenter.fr",
        "logo": {
          "@type": "ImageObject",
          "url": "https://iacenter.fr/favicon.png"
        }
      },
      "datePublished": "2025-01-29",
      "dateModified": "2025-10-24",
      "mainEntityOfPage": "https://iacenter.fr/blog/comment-savoir-entreprise-opco-constructys-akto",
      "url": "https://iacenter.fr/blog/comment-savoir-entreprise-opco-constructys-akto"
    }
  };

  useSEO(seoData);

  const timelineSteps = [
    {
      title: 'Sprint 1 · Jours 0-15',
      description:
        'Audit DSN, extraction SIRET, cartographie IDCC/OPCO, vérification Net-entreprises et récupération des accès portails.',
      deliverable: 'Tableau de bord conformité + kit de preuves PDF',
      kpi: '100 % des DSN analysées'
    },
    {
      title: 'Sprint 2 · Jours 16-45',
      description:
        'Corrections déclaratives, courriers recommandés Constructys/AKTO, suivi des accusés de réception, transfert des reliquats.',
      deliverable: 'Courriers OPCO signés, accusés déposés',
      kpi: '≥ 80 % des corrections validées'
    },
    {
      title: 'Sprint 3 · Jours 46-90',
      description:
        'Hiérarchisation des dossiers formation, dépôts des demandes, préparation budgets 2026, campagne d’adhésion interne.',
      deliverable: 'Plan de financement 2025-2026',
      kpi: '≥ 85 % du budget mobilisé'
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
          Obtenir mon audit OPCO gratuit
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
          Audit OPCO gratuit
        </Link>
      </div>

      <div className="container-minimal max-w-4xl relative">
        {/* Header */}
        <div className="mb-8">
          <Link to="/actualites" className="text-primary hover:underline inline-flex items-center mb-6">
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
            Retour aux actualités
          </Link>
          <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full mb-4">
            <Award className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Audit IA Center certifié Qualiopi – dernière mise à jour 24/10/2025
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Comment savoir si mon entreprise dépend de l'OPCO Constructys ou AKTO ?
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>Mis à jour le 24 octobre 2025</span>
            <span>•</span>
            <span>Financement & OPCO</span>
            <span>•</span>
            <span>Lecture : 18 min</span>
          </div>
        </div>

        {/* TL;DR */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10 shadow-sm">
          <p className="font-semibold text-primary flex items-center mb-3">
            <Info className="h-5 w-5 mr-2" />
            En bref
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Contrôlez votre code OPCO dans la DSN (bloc S21.G00.82) et archivez le PDF Net-entreprises.</li>
            <li>Faites correspondre l’IDCC de votre convention collective avec la table Ministère du Travail (Constructys vs AKTO).
            </li>
            <li>Traitez les cas particuliers (multi-sites, changement de branche) par écrit avec votre OPCO pour sécuriser vos budgets.</li>
          </ul>
        </div>

        {/* IA Center stats */}
        <div className="bg-silver-light border border-silver-medium rounded-lg p-6 mb-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-6">
            <div>
              <p className="font-semibold text-foreground flex items-center mb-3">
                <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                Chiffres IA Center (année 2024)
              </p>
              <div className="grid gap-4 md:grid-cols-3 text-muted-foreground text-sm">
                <div>
                  <p className="text-3xl font-bold text-foreground">38</p>
                  <p>Dossiers OPCO audités (Constructys & AKTO)</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">89 %</p>
                  <p>Mises en conformité DSN obtenues en moins de 21 jours</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">112 k€</p>
                  <p>Budgets récupérés suite à correction de rattachement</p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-0 md:w-64 bg-background border border-primary/20 rounded-lg p-4 shadow-inner">
              <p className="font-semibold text-sm text-primary flex items-center gap-2 mb-2">
                <Gauge className="h-4 w-4" />
                KPI Looker Studio – actualisation 01/11/2025
              </p>
              <p className="text-2xl font-bold text-foreground">94 %</p>
              <p className="text-xs text-muted-foreground mb-3">
                Taux de conformité DSN constaté sur les clients accompagnés (rolling 90 jours).
              </p>
              <p className="text-xs text-muted-foreground">
                Source : tableau de bord interne IA Center (Looker Studio). Flux mis à jour automatiquement chaque début de mois.
              </p>
            </div>
          </div>
        </div>

        {/* Radar 2025 */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-12 shadow-sm">
          <p className="font-semibold text-foreground flex items-center mb-3">
            <Target className="h-5 w-5 mr-2 text-primary" />
            Veille réglementaire – octobre 2025
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base">
            <li>Note DGEFP du 14/10/2025 : rappel sur la mise à jour obligatoire du bloc S21.G00.82 après changement d’IDCC.</li>
            <li>Constructys annonce un contrôle renforcé des conventions “travaux sous tension” à compter du 01/01/2026.</li>
            <li>AKTO généralise la vérification croisée DSN / portail adhérent pour toute demande supérieure à 12 000 €.</li>
          </ul>
        </div>

        {/* Observatoire IA Center */}
        <div className="bg-silver-light border border-silver-medium rounded-lg p-6 mb-12 shadow-sm">
          <p className="font-semibold text-foreground flex items-center mb-3">
            <BarChart3 className="h-5 w-5 mr-2 text-primary" />
            Observatoire IA Center – Q3 2025 (échantillon 41 dossiers)
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base">
            <li>27 % des entreprises auditent encore leur OPCO avec une table IDCC 2023 obsolète.</li>
            <li>19 % des DSN contrôlées comportaient un code OPCO erroné suite à fusion / changement d’activité.</li>
            <li>82 % des dirigeants n’avaient pas archivé les captures portail OPCO – point bloquant pour contestation.</li>
          </ul>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Chaque DSN que vous déposez détermine qui gère vos contributions formation. Pourtant, entre Constructys et AKTO, la frontière est parfois floue : sous-traitance, activités mixtes, changements de convention… Les erreurs de rattachement entraînent refus de prise en charge, redressements URSSAF ou budgets perdus. Ce guide reprend les vérifications que nous menons lors des audits IA Center pour sécuriser votre situation.
          </p>
          <p className="text-muted-foreground">
            Vous recherchez des réponses sur <strong>comment changer d’OPCO en 2025</strong>, <strong>différencier Constructys et AKTO</strong>, sécuriser un <strong>bloc S21.G00.82</strong> ou comprendre les écarts d’<strong>IDCC</strong> entre vos établissements ? Nous avons compilé les méthodes seniors, les outils officiels et les cas réels traités par IA Center pour éviter toute approximation.
          </p>
        </div>

        {/* Sommaire */}
        <nav className="bg-silver-light border border-silver-medium rounded-lg p-6 mb-12 shadow-sm">
          <p className="font-semibold text-foreground mb-3 flex items-center">
            <Info className="h-5 w-5 mr-2 text-primary" />
            Plan de navigation
          </p>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
            <li><a href="#secteurs" className="hover:text-primary transition">1. Constructys vs AKTO : périmètres 2025</a></li>
            <li><a href="#dsn" className="hover:text-primary transition">2. Contrôle DSN : la première preuve</a></li>
            <li><a href="#idcc" className="hover:text-primary transition">3. IDCC + outils publics : faisceau concordant</a></li>
            <li><a href="#cas-particuliers" className="hover:text-primary transition">4. Cas particuliers à traiter par écrit</a></li>
            <li><a href="#matrice-risques" className="hover:text-primary transition">5. Matrice de risques OPCO</a></li>
            <li><a href="#tableau-suivi" className="hover:text-primary transition">6. Check-list opérationnelle IA Center</a></li>
            <li><a href="#roadmap" className="hover:text-primary transition">7. Roadmap 90 jours</a></li>
            <li><a href="#cas-client" className="hover:text-primary transition">Étude de cas – multi-sites services</a></li>
            <li><a href="#kpi" className="hover:text-primary transition">8. KPIs à suivre</a></li>
            <li><a href="#faq" className="hover:text-primary transition">FAQ des dirigeants</a></li>
            <li><a href="#formulaire" className="hover:text-primary transition">Demander mon diagnostic OPCO</a></li>
          </ul>
        </nav>

        {/* Section 1 */}
        <section id="secteurs" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Compass className="h-8 w-8 mr-3 text-primary" />
            1. Constructys vs AKTO : périmètres 2025
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Constructys couvre l’ensemble de la construction : gros œuvre, second œuvre, travaux publics, négoce de matériaux, carrières… soit près de <strong>1,56 million de salariés</strong> (Rapport Constructys 2023, publié mai 2024). AKTO fédère 27 branches de services (propreté, sécurité, intérim, restauration rapide, enseignement privé…) avec un enjeu central : occupations à forte intensité humaine et besoins massifs d’alternance.
            </p>
            <p>
              Retenez : <strong>votre convention collective fait foi</strong>. Une entreprise qui pose des cloisons (IDCC 1596) est chez Constructys, celle qui entretient les locaux livrés (IDCC 1505) reste chez AKTO, quel que soit l’environnement client.
            </p>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mt-8 shadow-sm">
            <p className="font-semibold text-foreground flex items-center mb-2">
              <HelpCircle className="h-5 w-5 mr-2 text-primary" />
              Question fréquente dirigeant
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              « Nous intervenons à la fois sur des chantiers (pose) et en maintenance (contrats annuels). Peut-on rester chez AKTO ? »
            </p>
            <p className="text-sm md:text-base text-muted-foreground mt-2">
              Réponse IA Center : analysez la part de chiffre d’affaires par convention collective. Si votre activité majoritaire relève du BTP (IDCC 1596/2420), vous basculez vers Constructys. Documentez vos contrats de maintenance pour conserver la part services chez AKTO.
            </p>
          </div>
        </section>

        {/* Comparatif Constructys / AKTO */}
        <section className="mb-14">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <BarChart3 className="h-6 w-6 mr-2 text-primary" />
            Comparatif Constructys vs AKTO – données 2023 publiées 2024
          </h3>
          <div className="overflow-x-auto border border-silver-medium rounded-lg">
            <table className="min-w-full text-sm md:text-base">
              <thead className="bg-silver-light text-foreground">
                <tr>
                  <th className="py-3 px-4 text-left">Indicateur</th>
                  <th className="py-3 px-4 text-left">Constructys</th>
                  <th className="py-3 px-4 text-left">AKTO</th>
                  <th className="py-3 px-4 text-left">Implication dirigeant</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-silver-medium text-muted-foreground">
                <tr>
                  <td className="py-3 px-4">Salariés couverts</td>
                  <td className="py-3 px-4">1,56 M (Rapport 2023, publ. 05/2024)</td>
                  <td className="py-3 px-4">2,67 M (Rapport 2023, publ. 07/2024)</td>
                  <td className="py-3 px-4">Vérifier votre IDCC pour éviter une bascule automatique</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Budget mobilisé formation</td>
                  <td className="py-3 px-4">1,12 Md€</td>
                  <td className="py-3 px-4">1,46 Md€</td>
                  <td className="py-3 px-4">Sécuriser la cible pour capter les appels à projets adéquats</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Priorités 2025</td>
                  <td className="py-3 px-4">Transitions énergétiques, métiers en tension BTP</td>
                  <td className="py-3 px-4">Alternance, montée en compétences des services</td>
                  <td className="py-3 px-4">Aligner votre PDC sur les axes prioritaires pour éviter les refus</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2 */}
        <section id="dsn" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Archive className="h-8 w-8 mr-3 text-primary" />
            2. Contrôle DSN : la première preuve
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              La DSN mensuelle est votre point de départ. Dans le bloc <strong>S21.G00.82</strong> “Contribution formation”, vous retrouvez le code OPCO collecteur : 232 pour Constructys, 237 pour AKTO. Téléchargez le compte rendu métier sur <em>Net-entreprises</em>, surlignez l’information et archivez-la. Ce document fait foi en cas de contrôle ou de litige.
            </p>
            <p>
              Limites : ce code reflète la déclaration effectuée lors de l’affiliation. S’il n’a jamais été mis à jour après un changement d’activité ou de convention, il peut être erroné. Considérez cette étape comme une présomption, pas comme un verdict définitif.
            </p>
          </div>
          <div className="bg-silver-light border border-silver-medium rounded-lg p-5 mt-8 shadow-sm">
            <p className="font-semibold text-foreground flex items-center mb-2">
              <HelpCircle className="h-5 w-5 mr-2 text-primary" />
              Question fréquente dirigeant
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              « Je vois encore le code 237 (AKTO) alors que nous avons changé de convention pour la métallurgie en septembre. Est-ce normal ? »
            </p>
            <p className="text-sm md:text-base text-muted-foreground mt-2">
              Réponse IA Center : non, votre DSN doit refléter la convention active. Nous générons un courrier de bascule, joignons l’avenant DSN et assurons le suivi jusqu’à confirmation Constructys. Sans correction, vos dossiers formation seront refusés.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="idcc" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Layers className="h-8 w-8 mr-3 text-primary" />
            3. IDCC + outils publics : faisceau concordant
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Récupérez l’<strong>IDCC</strong> (Identifiant de Convention Collective) sur vos bulletins de paie ou votre registre du personnel. Croisez-le avec la table officielle <em>Ministère du Travail IDCC/OPCO</em> (mise à jour 18/09/2025) : 1596 ou 3212 renvoient à Constructys, 1505 (propreté) ou 1979 (restauration rapide) à AKTO.
            </p>
            <p>
              Pour confirmer, utilisez <a href="https://www.service-public.fr/professionnels-entreprises/vosdroits/R61577" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">l’outil “Trouver mon OPCO” de service-public.fr</a> ou <a href="https://www.cfadock.fr/mon-opco" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CFAdock</a>. Saisissez votre numéro SIRET et comparez la réponse avec votre DSN. En multi-sites, répétez l’opération pour chaque établissement.
            </p>
            <div className="bg-silver-light border border-silver-medium rounded-lg p-4 mt-6 text-sm md:text-base text-muted-foreground">
              <p className="font-semibold text-foreground mb-3">Liens à conserver dans votre dossier OPCO</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-primary" />
                  <a
                    href="https://travail-emploi.gouv.fr/IMG/pdf/table-de-repartition-des-secteurs-aux-opco.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Table IDCC / OPCO – Ministère du Travail (maj 18/09/2025)
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-primary" />
                  <a
                    href="https://www.cfadock.fr/mon-opco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    CFAdock – Vérification SIRET / OPCO
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mt-8 shadow-sm">
            <p className="font-semibold text-foreground flex items-center mb-2">
              <HelpCircle className="h-5 w-5 mr-2 text-primary" />
              Question fréquente dirigeant
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              « CFAdock me renvoie Constructys mais net-entreprises me confirme AKTO. Qui croire ? »
            </p>
            <p className="text-sm md:text-base text-muted-foreground mt-2">
              Réponse IA Center : votre convention (IDCC) tranche. Une DSN peut ne pas être à jour. Nous sécurisons la preuve via le tableau Ministère du Travail, puis notifions l’OPCO erroné avec copie URSSAF pour éviter les litiges.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section id="cas-particuliers" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <ClipboardList className="h-8 w-8 mr-3 text-primary" />
            4. Cas particuliers à traiter par écrit
          </h2>
          <div className="prose prose-lg max-w-none">
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong>Entreprise multi-activités :</strong> si votre convention n’est plus alignée avec l’activité majoritaire, demandez une confirmation écrite à l’URSSAF/OPCO avant tout changement. IA Center prépare le dossier justificatif et le courrier recommandé.
              </li>
              <li>
                <strong>Sous-traitance BTP vs services :</strong> c’est la convention collective qui tranche, pas le client. Documentez votre activité réelle pour répondre aux contrôles.
              </li>
              <li>
                <strong>Changement de convention :</strong> notifiez l’OPCO sortant et entrant, joignez votre avenant DSN, demandez le transfert des reliquats. Sans écrit, les budgets restent bloqués.
              </li>
              <li>
                <strong>Groupes multi-sites :</strong> créez un tableau SIRET / IDCC / OPCO. IA Center fournit un modèle prêt à l’emploi pour éviter les erreurs lors des dépôts.
              </li>
            </ul>
          </div>
          <div className="bg-silver-light border border-silver-medium rounded-lg p-5 mt-8 shadow-sm">
            <p className="font-semibold text-foreground flex items-center mb-2">
              <HelpCircle className="h-5 w-5 mr-2 text-primary" />
              Cas traité par IA Center
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              Groupe multi-sites mêlant propreté (IDCC 1505) et travaux de finition (IDCC 1596) : double rattachement obtenu en 52 jours, 18 k€ de budgets débloqués, suivi DSN automatisé.
            </p>
          </div>
        </section>

        {/* Risk matrix */}
        <section id="matrice-risques" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <AlertCircle className="h-8 w-8 mr-3 text-primary" />
            5. Matrice de risques OPCO 2025
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              En 2025, les contrôles croisés DSN / IDCC / actions financées se renforcent. Utilisez cette matrice pour arbitrer vos priorités.
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
                    <td className="py-3 px-4">DSN non alignée avec l’IDCC</td>
                    <td className="py-3 px-4">Refus de prise en charge, redressement URSSAF</td>
                    <td className="py-3 px-4 flex items-start gap-2">
                      <ShieldCheck className="h-4 w-4 text-primary mt-1" />
                      Mise à jour bloc S21.G00.82 + courrier justificatif aux OPCO concernés
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Portail OPCO inactif</td>
                    <td className="py-3 px-4">Budgets non visibles, délais rallongés</td>
                    <td className="py-3 px-4 flex items-start gap-2">
                      <CalendarCheck className="h-4 w-4 text-primary mt-1" />
                      Activation compte + délégation sur IA Center pour pilotage en continu
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Changement de convention non documenté</td>
                    <td className="py-3 px-4">Perte des reliquats, refus sur dossiers en cours</td>
                    <td className="py-3 px-4 flex items-start gap-2">
                      <FileCheck className="h-4 w-4 text-primary mt-1" />
                      Courrier recommandé + pièces sociales + suivi IA Center jusqu’à confirmation écrite
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
                <p className="font-semibold text-foreground">Audit flash 72 h – IA Center</p>
                <p className="text-muted-foreground text-sm md:text-base">
                  Vérification DSN, table IDCC, captures portails OPCO et courrier correctif prêts à envoyer. Livrable en 3 jours ouvrés.
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
              Planifier l’audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Check-list */}
        <section id="tableau-suivi" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <ClipboardList className="h-8 w-8 mr-3 text-primary" />
            6. Check-list opérationnelle IA Center
          </h2>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 shadow-sm">
            <p className="font-semibold text-foreground mb-3">Étapes clés 2025</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Télécharger et archiver le compte rendu métier DSN (S21.G00.82).</li>
              <li>Renseigner l’IDCC de chaque établissement et vérifier la table Ministère du Travail.</li>
              <li>Tester son SIRET sur service-public.fr / CFAdock (et conserver la capture).</li>
              <li>Documenter les cas particuliers (multi-activités, sous-traitance, bascule de convention).</li>
              <li>Programmer un diagnostic OPCO avec IA Center pour consolider les preuves et transférer les budgets si nécessaire.</li>
            </ol>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <CalendarCheck className="h-8 w-8 mr-3 text-primary" />
            7. Roadmap 90 jours IA Center
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Nous structurons la mise en conformité et la sécurisation budgétaire sur trois sprints successifs.
            </p>
            <ol className="list-decimal list-inside text-muted-foreground space-y-3">
              <li>
                <strong>Jours 0-15 :</strong> audit DSN, extractions SIRET, comparaison table IDCC, activation ou récupération des accès portails.
              </li>
              <li>
                <strong>Jours 16-45 :</strong> corrections déclaratives, courriers OPCO, transfert des reliquats, mise en place du tableau de bord IA Center (automatisation des alertes).
              </li>
              <li>
                <strong>Jours 46-90 :</strong> priorisation des dossiers formation/investissement, dépôt des premières demandes, préparation des budgets 2026 (GEO, campagne LinkedIn ciblée dirigeants).
              </li>
            </ol>
          </div>
        </section>

        {/* Case study */}
        <section id="cas-client" className="mb-14">
          <div className="bg-silver-light border border-silver-medium rounded-lg p-6 shadow-sm">
            <p className="font-semibold text-foreground flex items-center mb-3">
              <Quote className="h-5 w-5 mr-2 text-primary" />
              Étude de cas – Groupe services multi-sites (12 agences, 480 salariés)
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base">
              <li><strong>Problème :</strong> deux conventions (propreté + sécurité) mais unique rattachement AKTO → refus de financements Constructys.</li>
              <li><strong>Action IA Center :</strong> audit DSN, tableau IDCC/SIRET, courriers aux OPCO, transferts budgétaires, activation des portails multiples.</li>
              <li><strong>Résultat :</strong> 24 600 € de budgets récupérés (Constructys), 3 dossiers formation sécurité validés en moins de 30 jours.</li>
              <li><strong>Bonus :</strong> mise en place d’un suivi trimestriel automatisé (modèle IA Center).</li>
            </ul>
          </div>
        </section>

        {/* KPI */}
        <section id="kpi" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <TrendingUp className="h-8 w-8 mr-3 text-primary" />
            8. KPIs à suivre après la mise en conformité
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Mesurez l’impact de votre audit OPCO avec ces indicateurs clés (tableau de bord proposé dans l’offre IA Center).
            </p>
            <div className="overflow-x-auto border border-silver-medium rounded-lg mt-6">
              <table className="min-w-full text-sm md:text-base">
                <thead className="bg-silver-light text-foreground">
                  <tr>
                    <th className="py-3 px-4 text-left">Indicateur</th>
                    <th className="py-3 px-4 text-left">Objectif 2025</th>
                    <th className="py-3 px-4 text-left">Fréquence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-silver-medium text-muted-foreground">
                  <tr>
                    <td className="py-3 px-4">Taux de conformité DSN (bloc S21.G00.82)</td>
                    <td className="py-3 px-4">100 % des DSN alignées avec l’IDCC actif</td>
                    <td className="py-3 px-4">Mensuelle</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Budgets OPCO mobilisés / disponibles</td>
                    <td className="py-3 px-4">≥ 85 % consommés avant Q4</td>
                    <td className="py-3 px-4">Trimestrielle</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Temps de réponse OPCO aux dossiers</td>
                    <td className="py-3 px-4">{'< 25'} jours ouvrés</td>
                    <td className="py-3 px-4">Trimestrielle</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Les tableaux IA Center exportent ces indicateurs en PDF / Google Looker Studio pour vos comités RH/finance.
            </p>
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
              <li>
                <a href="https://travail-emploi.gouv.fr/IMG/pdf/table-de-repartition-des-secteurs-aux-opco.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Ministère du Travail – Table IDCC / OPCO (maj 18/09/2025)
                </a>
              </li>
              <li>
                <a href="https://www.constructys.fr/wp-content/uploads/2024/05/Constructys-Rapport-Activite-2023.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Constructys – Rapport d’activité 2023 (publié mai 2024)
                </a>
              </li>
              <li>
                <a href="https://www.akto.fr/wp-content/uploads/2024/07/AKTO-Rapport-activite-2023.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  AKTO – Rapport d’activité 2023 (publié juillet 2024)
                </a>
              </li>
              <li>
                <a href="https://www.service-public.fr/professionnels-entreprises/vosdroits/R61577" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Service-public.fr – Trouver mon OPCO
                </a>
              </li>
              <li>
                <a href="https://www.net-entreprises.fr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Net-entreprises – Portail DSN (compte rendu métier)
                </a>
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
                <Link to="/blog/pourquoi-entreprises-akto-perdent-budget-formation" className="text-primary hover:underline">
                  Budget AKTO : pourquoi 37 % disparaissent encore en 2025 et comment les récupérer
                </Link>
              </li>
              <li>
                <Link to="/blog/entreprise-cotise-opco-comment-profiter" className="text-primary hover:underline">
                  Votre entreprise cotise à un OPCO : exploitez chaque euro en 2025
                </Link>
              </li>
              <li>
                <Link to="/blog/role-opco-transformation-numerique-entreprises" className="text-primary hover:underline">
                  OPCO et transformation numérique : financer vos projets digitaux
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/constructys-controles-travaux-sous-tension-2025"
                  className="text-primary hover:underline"
                >
                  Constructys 2025 : sécuriser vos chantiers “travaux sous tension”
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
                  <p className="font-semibold text-foreground">Télécharger le modèle SIRET / IDCC 2025</p>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Fichier Excel IA Center pour centraliser vos établissements, conventions collectives et preuves DSN – mis à jour à chaque évolution réglementaire.
                  </p>
                </div>
              </div>
              <a
                href="https://iacenter.fr/downloads/modele-tableau-opco-2025.xlsx"
                target="_blank"
                rel="noopener noreferrer"
                onClick={registerCTA({
                  name: 'Download modèle OPCO',
                  location: 'lead_magnet',
                  content: 'modele_siret_idcc',
                  url: 'https://iacenter.fr/downloads/modele-tableau-opco-2025.xlsx'
                })}
                className="inline-flex items-center px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
              >
                Télécharger le modèle
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              💡 Cochez la case dédiée dans le formulaire pour recevoir automatiquement les prochaines mises à jour (flux de veille IA Center + Perplexity).
            </p>
          </div>
        </section>

        {/* Form */}
        <section id="formulaire" className="mb-14">
          <div className="bg-silver-light border border-silver-medium rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Demander un diagnostic OPCO personnalisé</h2>
            <p className="text-muted-foreground mb-6">
              Transmettez-nous votre problématique : un consultant IA Center vous répond sous 24 h ouvrées pour vérifier vos DSN, vos conventions collectives et sécuriser votre rattachement Constructys ou AKTO.
            </p>
            <form
              action="https://formspree.io/f/xgvykkzq"
              method="POST"
              className="grid gap-4 md:grid-cols-2"
            >
              <input type="hidden" name="article" value="Article31_OPCO_Constructys_AKTO" />
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
                  placeholder="Ex : double convention collective, DSN non mise à jour, changement de branche en cours…"
                />
              </div>
              <div className="md:col-span-2">
                <label className="inline-flex items-start gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" name="resource_modele_tableau" className="mt-1" />
                  Je souhaite recevoir le modèle IA Center actualisé (SIRET / IDCC / OPCO) et être alerté lors des mises à jour.
                </label>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  onClick={registerCTA({
                    name: 'Formulaire diagnostic',
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
              Besoin d’un audit complet de votre rattachement OPCO ?
            </h2>
            <p className="text-muted-foreground mb-6">
              Nos consultants vérifient vos DSN, consolident vos preuves réglementaires et identifient les budgets disponibles avant de monter vos dossiers de prise en charge. Un diagnostic gratuit vous permet de sécuriser vos prochaines demandes de financement et d’accélérer vos projets de formation.
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
              Réserver un diagnostic OPCO
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Signature */}
        <section className="mb-12">
          <div className="bg-silver-light border border-silver-medium rounded-lg p-6 shadow-sm flex flex-col md:flex-row md:items-center md:gap-4">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">Article rédigé par</p>
              <p className="text-lg font-semibold text-foreground">Sophie Laurent</p>
              <p className="text-sm text-muted-foreground">Consultante senior OPCO – IA Center</p>
            </div>
            <p className="text-sm text-muted-foreground md:max-w-md">
              15 ans d’expérience en financement de la formation, spécialiste des audits DSN et des transitions Constructys/AKTO. Sophie a accompagné plus de 120 entreprises multi-sites dans la sécurisation de leurs budgets OPCO.
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Article31;
