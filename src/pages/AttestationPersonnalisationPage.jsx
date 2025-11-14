import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AttestationPersonnalisationPage = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const seoData = {
    title: "Attestation Personnalisation Formation | IA Center | Adaptation Formation",
    description: "Attestation des modalités de personnalisation de la formation IA Center. Centre de formation intelligence artificielle certifié Qualiopi s'engage à adapter ses formations aux besoins spécifiques.",
    keywords: "attestation personnalisation formation, adaptation formation, formation sur mesure, personnalisation formation, attestation Qualiopi, modalités personnalisation",
    canonicalUrl: "https://iacenter.fr/attestation-personnalisation",
    ogImage: "https://iacenter.fr/favicon.png",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Attestation Personnalisation | IA Center - Formation IA",
      "description": "Attestation des modalités de personnalisation de la formation IA Center.",
      "url": "https://iacenter.fr/attestation-personnalisation",
      "mainEntity": {
        "@type": "EducationalOrganization",
        "name": "IA Center",
        "description": "Centre de formation intelligence artificielle certifié Qualiopi"
      }
    }
  };
  useSEO(seoData);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-background"
    >
      {/* Header avec bouton retour */}
      <div className="bg-background border-b border-border">
        <div className="container-minimal py-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l'accueil
          </Link>
        </div>
      </div>

      {/* Contenu de l'attestation - Affichage de l'image */}
      <div className="section-padding">
        <div className="container-minimal max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-10 text-center">Attestation des modalités de personnalisation de la formation</h1>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 md:p-8">
            <div className="flex justify-center items-center">
              <img 
                src="/images/attestation-personnalisation.png" 
                alt="Attestation des modalités de personnalisation de la formation IA Center"
                className="w-full h-auto max-w-full rounded-lg shadow-md"
                style={{ maxWidth: '800px' }} // Limite la largeur pour une meilleure lisibilité
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Note informative */}
          <div className="mt-10 text-center text-muted-foreground text-sm">
            <p>Ce document atteste de l'engagement de IA Center à adapter ses formations aux besoins spécifiques de chaque stagiaire.</p>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default AttestationPersonnalisationPage;
