import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <motion.section
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.4 }}
       variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
       }}
      className="section-padding bg-secondary" // Light gray background
    >
      <div className="container-minimal text-center max-w-2xl mx-auto">
        {/* Logo Qualiopi cliquable */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="mb-8"
        >
          <Link to="/certification-qualiopi" className="inline-block">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              {/* Image officielle du logo Qualiopi */}
              <img 
                src="/images/LogoQualiopi.png" 
                alt="Logo Qualiopi officiel - Processus certifié par la République Française"
                className="w-full h-auto max-w-xs mx-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Link>
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-5">
          Prêt à développer vos compétences ? {/* Updated Title */}
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Découvrez nos formations et lancez-vous dès maintenant dans votre nouvelle carrière. {/* Updated Text */}
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
           <Button size="lg" asChild className="bg-blue-600 text-white hover:bg-blue-700 shadow-xl font-bold text-lg px-8 py-4 border-2 border-blue-500">
            <Link to="/formations">
              Nos Formations <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Financez facilement votre formation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
        }}
        className="mt-16 max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Financez facilement votre formation</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Activez vos dispositifs de prise en charge (OPCO, France Travail…) et construisez votre parcours de formation en toute simplicité.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center justify-items-center">
          {/* Logo Constructys */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-[220px] h-[140px] bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/20 hover:border-primary/40 flex items-center justify-center p-6 group"
          >
            <img
              src="/images/partenaires/CONSTRUCTYS_LOGO_BD.jpg"
              alt="Constructys - OPCO BTP"
              className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              onError={(e) => {
                console.error('Erreur chargement Constructys:', e.target.src);
                e.target.style.display = 'none';
              }}
              onLoad={() => console.log('Constructys chargé avec succès')}
            />
          </motion.div>

          {/* Logo AKTO */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-[220px] h-[140px] bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/20 hover:border-primary/40 flex items-center justify-center p-6 group"
          >
            <img
              src="/images/partenaires/logo_akto.png"
              alt="AKTO - OPCO Services"
              className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              onError={(e) => {
                console.error('Erreur chargement AKTO:', e.target.src);
                e.target.style.display = 'none';
              }}
              onLoad={() => console.log('AKTO chargé avec succès')}
            />
          </motion.div>

          {/* Logo OPCO-EP */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-[220px] h-[140px] bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/20 hover:border-primary/40 flex items-center justify-center p-6 group"
          >
            <img
              src="/images/partenaires/OPCO-EP-logo.png"
              alt="OPCO-EP"
              className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              onError={(e) => {
                console.error('Erreur chargement OPCO-EP:', e.target.src);
                e.target.style.display = 'none';
              }}
              onLoad={() => console.log('OPCO-EP chargé avec succès')}
            />
          </motion.div>

          {/* Logo France Travail */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-[220px] h-[140px] bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/20 hover:border-primary/40 flex items-center justify-center p-6 group"
          >
            <img
              src="/images/partenaires/francetravailogo.png"
              alt="France Travail"
              className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              onError={(e) => {
                console.error('Erreur chargement France Travail:', e.target.src);
                e.target.style.display = 'none';
              }}
              onLoad={() => console.log('France Travail chargé avec succès')}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default CTASection;