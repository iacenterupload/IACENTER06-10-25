import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFoundPage = () => {
  const seoData = {
    title: "404 - Page introuvable | IA Center",
    description: "La page que vous recherchez n'existe pas ou a été déplacée.",
    keywords: "404, page introuvable, erreur",
    canonicalUrl: "https://iacenter.fr/404",
    robots: "noindex, follow"
  };
  useSEO(seoData);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="section-padding min-h-screen flex items-center justify-center"
    >
      <div className="container-minimal max-w-2xl text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Page introuvable</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Home className="h-5 w-5 mr-2" />
            Retour à l'accueil
          </Link>
          <Link
            to="/formations"
            className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <Search className="h-5 w-5 mr-2" />
            Voir nos formations
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 border border-silver-medium rounded-lg hover:bg-silver-light transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Page précédente
          </button>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-xl font-semibold mb-4">Pages populaires</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/formations" className="text-primary hover:underline">Formations</Link>
            <Link to="/actualites" className="text-primary hover:underline">Actualités</Link>
            <Link to="/a-propos" className="text-primary hover:underline">À propos</Link>
            <Link to="/contact" className="text-primary hover:underline">Contact</Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;

