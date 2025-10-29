import React from 'react';
import { formationsPro } from './FormationsData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';

const FormationsProPage = () => {
  const seoData = {
    title: "Formations Professionnelles IA | Entreprises | Certifiées Qualiopi | IA Center",
    description: "8 formations professionnelles IA pour entreprises. Marketing digital, communication digitale, cybersécurité, digitalisation. Financement OPCO, certification Qualiopi. En distanciel, France.",
    keywords: "formations professionnelles IA, formation entreprise, formation OPCO, formation marketing digital entreprise, formation communication digitale, formation cybersécurité entreprise, formation digitalisation, formation Google Business Profile, formation Instagram Facebook commerce, formation qualiopi entreprise, formation France",
    canonicalUrl: "https://iacenter.fr/formations-professionnels",
    ogImage: "https://iacenter.fr/favicon.png",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Formations Professionnelles Intelligence Artificielle",
      "description": "8 formations IA professionnelles pour entreprises, certifiées Qualiopi, éligibles financement OPCO",
      "url": "https://iacenter.fr/formations-professionnels",
      "numberOfItems": 8
    }
  };
  useSEO(seoData);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="section-padding"
    >
      {/* Schema.org supplémentaire pour liste détaillée */}
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Formations Professionnelles IA | Entreprises | IA Center",
        "description": "Formations IA professionnelles pour entreprises. Formation intelligence artificielle financée OPCO, transition numérique PME, outils IA (ChatGPT, Midjourney), automatisation.",
        "url": "https://iacenter.fr/formations-professionnels",
        "mainEntity": {
          "@type": "ItemList",
          "name": "Formations Professionnelles Intelligence Artificielle",
          "description": "Formations IA destinées aux entreprises et professionnels",
          "itemListElement": [
            {
              "@type": "Course",
              "name": "Formation Transition Numérique",
              "description": "Formation IA entreprises financée FSE+. Transformez votre entreprise avec l'innovation digitale.",
              "provider": {
                "@type": "Organization",
                "name": "IA Center"
              }
            },
            {
              "@type": "Course",
              "name": "Démarrer sa présence en ligne : base indispensable pour TPE/PME",
              "description": "Comprendre les leviers essentiels pour exister sur Internet et valoriser votre image. 2 jours (14 heures).",
              "provider": {
                "@type": "Organization",
                "name": "IA Center"
              }
            },
            {
              "@type": "Course",
              "name": "Créer de nouvelles opportunités grâce au marketing digital",
              "description": "Exploiter les leviers du marketing digital pour développer votre clientèle. 3 jours (21 heures).",
              "provider": {
                "@type": "Organization",
                "name": "IA Center"
              }
            },
            {
              "@type": "Course",
              "name": "Développer une stratégie de communication digitale efficace",
              "description": "Concevoir et mettre en œuvre une stratégie de communication digitale globale. 4 jours (28 heures).",
              "provider": {
                "@type": "Organization",
                "name": "IA Center"
              }
            },
            {
              "@type": "Course",
              "name": "Digitaliser vos process internes simplement et efficacement",
              "description": "Mettre en place des outils numériques simples pour gagner du temps et améliorer la productivité. 3 jours (21 heures).",
              "provider": {
                "@type": "Organization",
                "name": "IA Center"
              }
            },
            {
              "@type": "Course",
              "name": "Fiche Google Business Profile : être visible localement",
              "description": "Optimiser votre présence sur Google pour attirer davantage de clients localement. 1 jour (7 heures).",
              "provider": {
                "@type": "Organization",
                "name": "IA Center"
              }
            },
            {
              "@type": "Course",
              "name": "Instagram et Facebook pour commerces de proximité",
              "description": "Tirer pleinement parti de Facebook et Instagram pour fidéliser et attirer de nouveaux clients. 2 jours (14 heures).",
              "provider": {
                "@type": "Organization",
                "name": "IA Center"
              }
            },
            {
              "@type": "Course",
              "name": "Sécuriser vos données et vos pratiques en ligne",
              "description": "Sensibiliser aux bonnes pratiques de cybersécurité et protéger vos données. 2 jours (14 heures).",
              "provider": {
                "@type": "Organization",
                "name": "IA Center"
              }
            }
          ]
        }
      })}
      </script>
      <div className="container-minimal max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-12 text-center">Formations Professionnelles Intelligence Artificielle</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {formationsPro.map((formation) => (
            <Link to={`/formations/${formation.slug}`} key={formation.slug} className="block group">
              <div className="bg-card rounded-xl shadow hover:shadow-lg transition p-6 h-full flex flex-col justify-between border border-border/40 group-hover:border-primary">
                <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition">{formation.title}</h2>
                <p className="text-muted-foreground text-sm mb-4">{formation.description}</p>
                <span className="text-xs text-primary-foreground bg-primary rounded-full px-3 py-1 self-start">{formation.duration}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FormationsProPage; 