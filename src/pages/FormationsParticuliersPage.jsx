import React from 'react';
import { formationsParticuliers } from './FormationsData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';

const FormationsParticuliersPage = () => {
  const seoData = {
    title: "Formations Particuliers IA | Entrepreneurs | Financement CPF | IA Center",
    description: "Formations IA pour particuliers et entrepreneurs. Créer son business en ligne, réseaux sociaux entreprises. 15h à 35h en ligne, financement CPF disponible. Certification Qualiopi. France.",
    keywords: "formations particuliers IA, formation entrepreneur, formation CPF, formation business en ligne, formation réseaux sociaux entreprise, formation particulier, formation en ligne, formation distanciel, formation certifiée Qualiopi, formation France",
    canonicalUrl: "https://iacenter.fr/formations-particuliers",
    ogImage: "https://iacenter.fr/favicon.png",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Formations Particuliers Intelligence Artificielle",
      "description": "Formations IA destinées aux particuliers et entrepreneurs, éligibles CPF",
      "url": "https://iacenter.fr/formations-particuliers",
      "numberOfItems": 3
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
        "name": "Formations Particuliers IA | Entrepreneurs | IA Center",
        "description": "Formations IA pour particuliers et entrepreneurs. Formation business en ligne, intelligence artificielle, outils IA (ChatGPT, Midjourney), automatisation.",
        "url": "https://iacenter.fr/formations-particuliers",
        "mainEntity": {
          "@type": "ItemList",
          "name": "Formations Particuliers Intelligence Artificielle",
          "description": "Formations IA destinées aux particuliers et entrepreneurs",
          "itemListElement": [
            {
              "@type": "Course",
              "name": "Créer son business en ligne",
              "description": "Formation complète pour entrepreneurs ambitieux. 15h à 35h en ligne.",
              "provider": {
                "@type": "Organization",
                "name": "IA Center"
              }
            },
            {
              "@type": "Course",
              "name": "Les Réseaux Sociaux pour les Entreprises : Se rendre visible sans être Expert",
              "description": "Développez la visibilité de votre entreprise sur les réseaux sociaux. 15h à 35h en ligne.",
              "provider": {
                "@type": "Organization",
                "name": "IA Center"
              }
            },
            {
              "@type": "Course",
              "name": "Formation d'anglais sur mesure : du perfectionnement à la remise à niveau",
              "description": "Améliorez votre niveau d'anglais grâce à un accompagnement individuel personnalisé. 15h à 35h en ligne.",
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
        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-12 text-center">Formations Particuliers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {formationsParticuliers.map((formation) => (
            <Link to={`/formations/${formation.slug}`} key={formation.slug} className="block group">
              <div className="bg-card rounded-xl shadow hover:shadow-lg transition p-6 h-full flex flex-col justify-between border border-border/40 group-hover:border-primary">
                <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition">{formation.title}</h2>
                <p className="text-muted-foreground text-sm mb-4">{formation.objective}</p>
                <span className="text-xs text-primary-foreground bg-primary rounded-full px-3 py-1 self-start">{formation.duration}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FormationsParticuliersPage; 