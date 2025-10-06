import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, UserCog, Users } from 'lucide-react';

const FormationsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-16 md:pt-20 lg:pt-24 pb-24 md:pb-32 lg:pb-40 px-6"
    >
      {/* SEO Meta pour la page formations */}
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Formations Intelligence Artificielle IA | Centre de Formation Certifié Qualiopi",
        "description": "Découvrez nos formations IA entreprises financées OPCO & CPF. Formation intelligence artificielle, transition numérique PME, outils IA (ChatGPT, Midjourney), automatisation.",
        "url": "https://iacenter.fr/formations",
        "mainEntity": {
          "@type": "ItemList",
          "name": "Formations Intelligence Artificielle",
          "description": "Liste des formations IA disponibles",
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
              "name": "Créer son business en ligne",
              "description": "Formation complète pour entrepreneurs ambitieux. 15h à 35h en ligne.",
              "provider": {
                "@type": "Organization",
                "name": "IA Center"
              }
            }
          ]
        }
      })}
      </script>
      <div className="container-minimal max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
          className="inline-block p-3 bg-secondary rounded-full mb-5"
        >
          <BookOpen className="h-8 w-8 text-primary" />
        </motion.div>
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-foreground mb-4"
        >
          Nos Formations
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
        >
          Choisissez votre parcours selon votre profil&nbsp;: professionnel ou particulier.
        </motion.p>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <Link to="/formations-professionnels" className="flex-1 bg-primary text-primary-foreground rounded-xl px-8 py-8 shadow-lg hover:shadow-xl transition flex flex-col items-center group border border-silver-light">
            <UserCog className="h-10 w-10 mb-4 group-hover:text-white transition" />
            <span className="text-2xl font-semibold mb-2">Formations Professionnels</span>
            <span className="text-white/90 text-base font-medium">Voir toutes les formations professionnelles</span>
          </Link>
          <Link to="/formations-particuliers" className="flex-1 bg-silver-accent text-foreground rounded-xl px-8 py-8 shadow-lg hover:shadow-xl transition flex flex-col items-center group border border-silver-medium">
            <Users className="h-10 w-10 mb-4 group-hover:text-primary transition" />
            <span className="text-2xl font-semibold mb-2">Formations Particuliers</span>
            <span className="text-gray-700 text-base font-medium">Voir toutes les formations particuliers</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FormationsPage;