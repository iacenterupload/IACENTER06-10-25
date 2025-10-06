import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CertificationQualiopiPage = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-background"
    >
      {/* SEO Meta pour certification Qualiopi */}
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Certification Qualiopi | IA Center - Formation IA",
        "description": "Certification Qualiopi IA Center. Centre de formation intelligence artificielle certifié Qualiopi. Garantie qualité formations IA, éligible CPF et OPCO.",
        "url": "https://iacenter.fr/certification-qualiopi",
        "mainEntity": {
          "@type": "EducationalOccupationalCredential",
          "name": "Certification Qualiopi",
          "description": "Certification qualité des organismes de formation",
          "credentialCategory": "certification",
          "recognizedBy": {
            "@type": "Organization",
            "name": "France Compétences"
          },
          "about": {
            "@type": "EducationalOrganization",
            "name": "IA Center"
          }
        }
      })}
      </script>
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

      <div className="section-padding">
        <div className="container-minimal max-w-6xl mx-auto">
          {/* Titre de la page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certification Qualiopi
            </h1>
            <p className="text-lg text-muted-foreground">
              Notre organisme de formation est certifié Qualiopi par BCI France
            </p>
          </motion.div>

          {/* Document officiel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden"
          >
            {/* Image du document officiel */}
            <div className="p-8 text-center">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Certificat Qualiopi officiel - IA CENTER
                </h3>
                
                {/* Image du certificat */}
                <div className="bg-white rounded-lg shadow-lg p-4 max-w-4xl mx-auto">
                  <img 
                    src="/images/Certificat_Qualiopi_2025.png" 
                    alt="Certificat Qualiopi officiel de BCI France pour IA Center - Certificat N° CW202524-2607"
                    className="w-full h-auto rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200 shadow-md"
                    onClick={() => window.open('/images/Certificat_Qualiopi_2025.png', '_blank')}
                    title="Cliquez pour agrandir l'image"
                  />
                </div>
                
                <div className="mt-6 text-sm text-gray-600 space-y-2">
                  <p><strong>Certificat N° :</strong> CW202524-2607</p>
                  <p><strong>Organisme :</strong> IA CENTER</p>
                  <p><strong>Valide jusqu'au :</strong> 23/03/2028</p>
                  <p><strong>Délivré par :</strong> BCI France - Bureau de Certification International</p>
                </div>
                
                <p className="text-xs text-gray-500 mt-4">
                  Cliquez sur l'image pour l'agrandir dans un nouvel onglet
                </p>
              </div>
            </div>
          </motion.div>

          {/* Note informative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200"
          >
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              Qu'est-ce que la certification Qualiopi ?
            </h3>
            <p className="text-blue-700 text-sm">
              La certification Qualiopi est un label qualité délivré par l'État français qui garantit 
              la qualité des formations professionnelles. Elle atteste que notre organisme respecte 
              les exigences nationales en matière de formation et s'engage dans une démarche d'amélioration continue.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationQualiopiPage;
