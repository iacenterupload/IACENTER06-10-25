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
              Voir toutes les formations <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTASection;