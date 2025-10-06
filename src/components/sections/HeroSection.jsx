import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2, duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen flex items-center justify-center text-center bg-background section-padding" // Full screen height
    >
      <div className="relative z-10 container-minimal">
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight"
        >
          Préparez votre avenir avec IA Center {/* Updated H1 */}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto" // Increased max-width
        >
          Formations 100 % en ligne, innovantes et accessibles, pour développer vos compétences dès aujourd’hui. {/* Updated P */}
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
           <Button size="lg" asChild className="bg-foreground text-background hover:bg-foreground/80">
            <Link to="/formations">
              Découvrir les formations <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
           <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/80">
             <Link to="/contact">
               Nous contacter
             </Link>
           </Button>
        </motion.div>
      </div>
       {/* Optional: Subtle background element */}
       {/* <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white opacity-50 z-0"></div> */}
    </motion.section>
  );
};

export default HeroSection;