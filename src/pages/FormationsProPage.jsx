import React from 'react';
import { formationsPro } from './FormationsData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FormationsProPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="section-padding"
    >
      {/* SEO Meta pour formations professionnelles */}
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
            }
          ]
        }
      })}
      </script>
      <div className="container-minimal max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-12 text-center">Formations Professionnels</h1>
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