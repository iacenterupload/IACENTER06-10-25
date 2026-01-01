import React, { useState } from 'react';
import { formationsParticuliers } from './FormationsData';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';

const FormationsParticuliersPage = () => {
  const [activeFilter, setActiveFilter] = useState('toutes');

  // Définition des catégories de filtres
  const filterCategories = [
    { id: 'toutes', label: 'Toutes les formations' },
    { id: 'business', label: 'Business & Entrepreneuriat' },
    { id: 'marketing', label: 'Marketing & Communication' },
    { id: 'langues', label: 'Langues' }
  ];

  // Mapping des formations par catégorie
  const formationCategories = {
    business: [
      'creer-business-en-ligne',
      'business-developer-independant'
    ],
    marketing: [
      'reseaux-sociaux-entreprises'
    ],
    langues: [
      'anglais-sur-mesure',
      'anglais-oral' // Formation anglais oral (landing page)
    ]
  };

  // Filtrer les formations selon la catégorie active
  const filteredFormations = activeFilter === 'toutes'
    ? formationsParticuliers
    : formationsParticuliers.filter(formation => 
        formationCategories[activeFilter]?.includes(formation.slug)
      );

  // Vérifier si la formation anglais oral doit être affichée
  const showAnglaisOral = activeFilter === 'toutes' || activeFilter === 'langues';
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
      "numberOfItems": 5
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
            },
            {
              "@type": "Course",
              "name": "Business Developer Indépendant",
              "description": "Acquérir toutes les compétences nécessaires pour exercer en tant que Business Developer indépendant. À partir de 20h en ligne.",
              "provider": {
                "@type": "Organization",
                "name": "IA Center"
              }
            },
            {
              "@type": "Course",
              "name": "Anglais Professionnel & Confiance à l'Oral",
              "description": "Maîtrisez l'anglais en 3 mois avec notre formation 100% en ligne. Cours en live, certificat inclus.",
              "provider": {
                "@type": "Organization",
                "name": "IA Center"
              },
              "url": "https://iacenter.fr/formation-anglais-oral"
            }
          ]
        }
      })}
      </script>
      <div className="container-minimal max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-12 text-center">Formations Particuliers</h1>
        
        {/* Filtres style Apple - Design exact */}
        <div className="mb-12 flex justify-center">
          <div 
            className="inline-flex rounded-full p-1.5"
            style={{
              backgroundColor: 'rgb(232, 232, 237)', // Exact Apple gray
            }}
          >
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`
                  px-5 py-2.5 rounded-full text-base font-normal transition-all duration-200 ease-out
                  ${activeFilter === category.id
                    ? 'text-white'
                    : 'text-[rgb(29,29,31)] hover:text-[rgb(29,29,31)]'
                  }
                `}
                style={activeFilter === category.id ? {
                  backgroundColor: 'rgb(29, 29, 31)', // Exact Apple dark/black
                } : {
                  backgroundColor: 'transparent'
                }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des formations filtrées avec animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            {filteredFormations.map((formation) => (
              <Link to={`/formations/${formation.slug}`} key={formation.slug} className="block group">
                <div className="bg-card rounded-xl shadow hover:shadow-lg transition p-6 h-full flex flex-col justify-between border border-border/40 group-hover:border-primary">
                  <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition">{formation.title}</h2>
                  <p className="text-muted-foreground text-sm mb-4">{formation.objective}</p>
                  <span className="text-xs text-primary-foreground bg-primary rounded-full px-3 py-1 self-start">{formation.duration}</span>
                </div>
              </Link>
            ))}
            
            {/* Landing page formation anglais oral - affichée seulement si filtre "toutes" ou "langues" */}
            {showAnglaisOral && (
              <Link to="/formation-anglais-oral" className="block group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl shadow-lg hover:shadow-xl transition p-6 h-full flex flex-col justify-between border-2 border-primary/30 group-hover:border-primary"
                >
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition">Anglais Professionnel & Confiance à l'Oral</h2>
                    <p className="text-muted-foreground text-sm mb-4">Maîtrisez l'anglais en 3 mois avec notre formation 100% en ligne. Cours en live, certificat inclus.</p>
                  </div>
                  <span className="text-xs text-primary-foreground bg-primary rounded-full px-3 py-1 self-start font-semibold">3 mois • 2 cours/semaine</span>
                </motion.div>
              </Link>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default FormationsParticuliersPage; 