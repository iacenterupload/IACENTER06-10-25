import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { BookOpen, UserCog, Users } from 'lucide-react';

const FormationsPage = () => {
  const seoData = {
    title: "Formations Intelligence Artificielle IA | Liste Complète | Certifié Qualiopi | IA Center",
    description: "Découvrez toutes nos formations IA pour entreprises et particuliers. Formations financées OPCO & CPF, certifiées Qualiopi. Transition numérique, marketing digital, cybersécurité, communication digitale. France.",
    keywords: "formations IA, catalogue formations intelligence artificielle, formation entreprise, formation particulier, formation OPCO, formation CPF, formation certifiée Qualiopi, formation transition numérique, formation marketing digital, formation cybersécurité, formation France",
    canonicalUrl: "https://iacenter.fr/formations",
    ogImage: "https://iacenter.fr/favicon.png",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Formations Intelligence Artificielle IA Center",
      "description": "Catalogue complet des formations IA pour entreprises et particuliers. Certifiées Qualiopi, éligibles OPCO et CPF.",
      "url": "https://iacenter.fr/formations",
      "numberOfItems": 10,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Course",
            "name": "Formation Transition Numérique",
            "url": "https://iacenter.fr/formations/transition-numerique",
            "provider": {
              "@type": "Organization",
              "name": "IA Center"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Course",
            "name": "Créer son business en ligne",
            "url": "https://iacenter.fr/formations/creer-business-en-ligne",
            "provider": {
              "@type": "Organization",
              "name": "IA Center"
            }
          }
        }
      ]
    }
  };
  useSEO(seoData);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-16 md:pt-20 lg:pt-24 pb-24 md:pb-32 lg:pb-40 px-6"
    >
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
          Nos Formations Intelligence Artificielle
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