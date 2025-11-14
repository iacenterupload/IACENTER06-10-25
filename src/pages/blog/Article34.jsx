import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import {
  Zap,
  Building,
  Target,
  Users,
  TrendingUp,
  Lightbulb,
  ArrowRight,
  Info,
  ClipboardList,
  Quote,
  BarChart3,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackCTA } from '@/utils/trackCTA';

const Article34 = () => {
  const contactUrl = '/contact?utm_source=blog&utm_medium=article34&utm_campaign=transformation_numerique_opco';

  const registerCTA = (params) => () =>
    trackCTA({
      article: 'Article34_OPCO_Transformation_Numerique',
      campaign: 'transformation_numerique_opco',
      medium: 'blog',
      ...params
    });

  const faqData = [
    {
      question: "Quels projets digitaux sont finançables par les OPCO en 2025 ?",
      answer:
        "Les OPCO financent les projets de digitalisation des processus (CRM, ERP, automatisation), la montée en compétences digitales (IA, data, cybersécurité) et l’accompagnement au changement. Les thématiques IA et cybersécurité disposent d’abondements spécifiques chez AKTO et Constructys cette année." 
    },
    {
      question: "Combien de temps prend l’obtention d’un financement pour un projet numérique ?",
      answer:
        "Pour un dossier complet aligné sur les priorités 2025, comptez 4 à 6 semaines. IA Center structure le dossier (stratégie, formations, cofinancements) et répond aux demandes de compléments pour tenir le délai court." 
    },
    {
      question: "Peut-on financer l’accompagnement au changement et pas seulement la formation ?",
      answer:
        "Oui. Plusieurs OPCO prennent en charge l’ingénierie, la conduite du changement et le coaching managérial lorsqu’ils sont adossés à un programme de formation. Nous montons des dossiers combinant formation + accompagnement pour maximiser la prise en charge." 
    }
  ];

  const seoData = {
     title: 'Le rôle des OPCO dans la transformation numérique des entreprises | Guide IA Center',
     description:
       'Analyse complète du rôle des OPCO dans l’accompagnement de la transformation numérique des entreprises et des solutions disponibles.',
     keywords:
       'transformation numérique OPCO, financement digitalisation, OPCO Constructys AKTO digital, accompagnement IA Center',
     canonicalUrl: 'https://iacenter.fr/blog/role-opco-transformation-numerique-entreprises',
     ogImage: 'https://iacenter.fr/favicon.png',
     schemaData: {
       '@context': 'https://schema.org',
       '@type': 'BlogPosting',
       headline: 'Le rôle des OPCO dans la transformation numérique des entreprises',
       description:
         'Analyse complète du rôle des OPCO dans l’accompagnement de la transformation numérique des entreprises et des solutions disponibles.',
       image: 'https://iacenter.fr/favicon.png',
       articleSection: 'Transformation digitale & OPCO',
       keywords: 'OPCO transformation numérique, financement digital',
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
       dateModified: '2025-10-14',
       mainEntityOfPage: 'https://iacenter.fr/blog/role-opco-transformation-numerique-entreprises',
       url: 'https://iacenter.fr/blog/role-opco-transformation-numerique-entreprises'
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
          Diagnostic digital financé OPCO
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
          Obtenir mon diagnostic digital
        </Link>
      </div>

      <div className="container-minimal max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link to="/actualites" className="text-primary hover:underline inline-flex items-center mb-6">
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
            Retour aux actualités
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Le rôle des OPCO dans la transformation numérique des entreprises
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>Mis à jour le 14 octobre 2025</span>
            <span>•</span>
            <span>Transformation digitale & OPCO</span>
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
            <li>IA, cybersécurité, data et outils collaboratifs sont des priorités OPCO 2025.</li>
            <li>Les financements couvrent jusqu’à 100 % des formations + accompagnements associés.</li>
            <li>IA Center structure votre feuille de route digitale et monte les dossiers de financement.</li>
          </ul>
        </div>

        {/* IA Center stats */}
        <div className="bg-silver-light border border-silver-medium rounded-lg p-6 mb-10 shadow-sm">
          <p className="font-semibold text-foreground flex items-center mb-3">
            <BarChart3 className="h-5 w-5 mr-2 text-primary" />
            Impact IA Center (2024)
          </p>
          <div className="grid gap-4 md:grid-cols-3 text-muted-foreground text-sm">
            <div>
              <p className="text-3xl font-bold text-foreground">27</p>
              <p>Projets digitaux financés via OPCO</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">84 %</p>
              <p>Dossiers validés en moins de 45 jours</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">410 k€</p>
              <p>Financements cumulés (OPCO + cofinancements)</p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Transformer votre entreprise n’est pas qu’une question d’outil : c’est une trajectoire, des compétences, un accompagnement. Les OPCO ont fait de la digitalisation une priorité 2025 et financent des parcours complets. Ce guide IA Center synthétise les priorités officielles, les financements disponibles et la méthode pour convertir votre cotisation en levier numérique.
          </p>
        </div>

        {/* Sommaire */}
        <nav className="bg-silver-light border border-silver-medium rounded-lg p-6 mb-12 shadow-sm">
          <p className="font-semibold text-foreground mb-3 flex items-center">
            <Info className="h-5 w-5 mr-2 text-primary" />
            Plan de navigation
          </p>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
            <li><a href="#priorites" className="hover:text-primary transition">1. Priorités digitales OPCO 2025</a></li>
            <li><a href="#financements" className="hover:text-primary transition">2. Financements disponibles</a></li>
            <li><a href="#formations" className="hover:text-primary transition">3. Formations digitales finançables</a></li>
            <li><a href="#methodologie" className="hover:text-primary transition">4. Méthode IA Center</a></li>
            <li><a href="#cas-client" className="hover:text-primary transition">Étude de cas</a></li>
            <li><a href="#faq" className="hover:text-primary transition">FAQ</a></li>
            <li><a href="#ressources" className="hover:text-primary transition">Sources</a></li>
            <li><a href="#formulaire" className="hover:text-primary transition">Demander un accompagnement</a></li>
          </ul>
        </nav>

        {/* Section 1 */}
        <section id="priorites" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Zap className="h-8 w-8 mr-3 text-primary" />
            1. Priorités digitales OPCO 2025
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              AKTO, Constructys et l’ensemble des OPCO alignent leurs budgets 2025 sur quatre axes majeurs.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-6 shadow-sm">
              <p className="font-semibold text-foreground mb-3">Axes prioritaires 2025</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>IA & automatisation des processus métiers</li>
                <li>Cybersécurité, protection des données, conformité RGPD</li>
                <li>Outils collaboratifs & travail hybride</li>
                <li>Digitalisation du back-office & des opérations terrain</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4">
                Sources : AKTO – note priorités digitales (sept. 2025) ; Constructys – feuille de route 2025.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="financements" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Building className="h-8 w-8 mr-3 text-primary" />
            2. Financements disponibles
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Les OPCO financent les formations digitales, mais aussi l’ingénierie et l’accompagnement au changement. Voici un aperçu des prises en charge typiques.
            </p>
            <div className="overflow-x-auto border border-silver-medium rounded-lg mt-6">
              <table className="min-w-full text-sm md:text-base">
                <thead className="bg-silver-light text-foreground">
                  <tr>
                    <th className="py-3 px-4 text-left">Dispositif</th>
                    <th className="py-3 px-4 text-left">Taux indicatif</th>
                    <th className="py-3 px-4 text-left">Pièces clés</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-silver-medium text-muted-foreground">
                  <tr>
                    <td className="py-3 px-4">Formations digitales (IA, data, cybersécurité)</td>
                    <td className="py-3 px-4">Jusqu’à 100 % du coût pédagogique</td>
                    <td className="py-3 px-4">Programme détaillé, devis Qualiopi, justification stratégique</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Ingénierie & accompagnement au changement</td>
                    <td className="py-3 px-4">50 à 80 % (selon OPCO)</td>
                    <td className="py-3 px-4">Plan de transformation, livrables, profil des experts</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Investissements digitaux (OPCO + Région + FSE+)</td>
                    <td className="py-3 px-4">Jusqu’à 70 % du projet</td>
                    <td className="py-3 px-4">Budget, ROI attendu, cofinancements identifiés</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Taux variables : se référer aux référentiels de branche et aux dispositifs régionaux.</p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="formations" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Users className="h-8 w-8 mr-3 text-primary" />
            3. Formations digitales finançables
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Les priorités couvrent tout le spectre : compétences de base, IA, cybersécurité, marketing digital. IA Center construit des parcours sur-mesure combinant ces modules.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Compétences digitales de base :</strong> suites collaboratives, RGPD, data literacy.</li>
              <li><strong>IA & automatisation :</strong> IA générative appliquée, automatisation des processus, analytics.</li>
              <li><strong>Cybersécurité :</strong> protection des données, gestion des risques, sensibilisation équipes.</li>
              <li><strong>Marketing digital / e-commerce :</strong> SEO/SEA, réseaux sociaux, CRM, analytics.</li>
            </ul>
          </div>
        </section>

        {/* Section 4 */}
        <section id="methodologie" className="mb-14">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Lightbulb className="h-8 w-8 mr-3 text-primary" />
            4. Méthode IA Center
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Nous orchestrons votre transformation en quatre étapes.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-6 shadow-sm">
              <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                <li><strong>Diagnostic digital & budgétaire :</strong> analyse de votre stratégie, DSN, budgets OPCO, cofinancements potentiels.</li>
                <li><strong>Feuille de route :</strong> priorisation des chantiers (90 jours / 12 mois / 24 mois) avec estimations budgétaires.</li>
                <li><strong>Montage dossiers :</strong> formations, accompagnement, investissements – dépôt et suivi OPCO + partenaires.</li>
                <li><strong>Pilotage :</strong> reporting trimestriel, ajustements, anticipation des nouvelles enveloppes.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Case study */}
        <section id="cas-client" className="mb-14">
          <div className="bg-silver-light border border-silver-medium rounded-lg p-6 shadow-sm">
            <p className="font-semibold text-foreground flex items-center mb-3">
              <Quote className="h-5 w-5 mr-2 text-primary" />
              Étude de cas – Groupe logistique (220 salariés)
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base">
              <li><strong>Situation :</strong> digitalisation du planning terrain, IA pour prévoir les pics d’activité.</li>
              <li><strong>Action IA Center :</strong> diagnostic budgétaire, plan formation IA + outils collaboratifs, montage dossiers AKTO + Région.</li>
              <li><strong>Résultat :</strong> 68 k€ financés (OPCO + Région), déploiement en 6 mois, adoption utilisateurs > 90 %.</li>
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
        <section id="ressources" className="mb-14">
          <div className="bg-silver-light border border-silver-medium rounded-lg p-6 shadow-sm">
            <p className="font-semibold text-foreground mb-3">Sources officielles</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base">
              <li>AKTO – Note priorités digitales (septembre 2025)</li>
              <li>Constructys – feuille de route digitale 2025</li>
              <li>France Compétences – Panorama financement 2024</li>
              <li>Fonds Social Européen Plus (FSE+)</li>
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
                  Budget AKTO : récupérer 100 % de vos droits en 2025
                </Link>
              </li>
              <li>
                <Link to="/blog/entreprise-cotise-opco-comment-profiter" className="text-primary hover:underline">
                  Cotisation OPCO : exploiter chaque euro
                </Link>
              </li>
              <li>
                <Link to="/blog/comment-savoir-entreprise-opco-constructys-akto" className="text-primary hover:underline">
                  Identifier votre OPCO : Constructys vs AKTO
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Formulaire */}
        <section id="formulaire" className="mb-14">
          <div className="bg-silver-light border border-silver-medium rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Demander un diagnostic digital financé</h2>
            <p className="text-muted-foreground mb-6">
              Décrivez votre projet : nous auditons vos budgets, identifions les cofinancements et préparons un plan de déploiement financé OPCO.
            </p>
            <form
              action="https://formspree.io/f/xgvykkzq"
              method="POST"
              className="grid gap-4 md:grid-cols-2"
            >
              <input type="hidden" name="article" value="Article34_OPCO_Transformation_Numerique" />
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
                  placeholder="Ex : CRM + IA pour le service client, déploiement Q2 2026, besoin cofinancement OPCO/FSE+"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  onClick={registerCTA({
                    name: 'Formulaire diagnostic digital',
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
        <section className="mb-12">
          <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Réussissez votre transformation numérique avec l’appui de votre OPCO
            </h2>
            <p className="text-muted-foreground mb-6">
              IA Center vous accompagne pour construire votre feuille de route digitale, identifier les financements et piloter le déploiement. Un diagnostic gratuit vous aide à sécuriser vos budgets et accélérer votre transformation.
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
              Transformer mon entreprise avec l’OPCO
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Signature */}
        <section className="mb-12">
          <div className="bg-silver-light border border-silver-medium rounded-lg p-6 shadow-sm flex flex-col md:flex-row md:items-center md:gap-4">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">Article rédigé par</p>
              <p className="text-lg font-semibold text-foreground">Amine K.</p>
              <p className="text-sm text-muted-foreground">Directeur Transfo Digitale & Financements – IA Center</p>
            </div>
            <p className="text-sm text-muted-foreground md:max-w-md">
              Amine pilote les programmes digitaux d’IA Center. 15 ans d’expérience en déploiement CRM/ERP, financements OPCO & Région, 27 projets accompagnés en 2024.
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Article34;

