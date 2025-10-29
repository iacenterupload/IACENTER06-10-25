import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react'; // Using Target icon for mission

const PresentationSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const textVariants = {
     hidden: { opacity: 0, y: 20 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' } },
  }

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-secondary py-12 md:py-16 px-6" // Réduit l'espace vertical
    >
      <div className="container-minimal text-center max-w-3xl mx-auto">
         <motion.div variants={textVariants} className="inline-block mb-2"> {/* mb-2 au lieu de mb-4 */}
           <Target className="h-10 w-10 text-primary" />
         </motion.div>
        <motion.h2
          variants={textVariants}
          className="text-3xl md:text-4xl font-semibold text-foreground mb-4"
        >
          Votre partenaire formation nouvelle génération {/* Updated H2 */}
        </motion.h2>
        <motion.p
          variants={textVariants}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-0"
        >
          IA Center est un centre de formation digitale. Nous proposons des parcours certifiants et professionnalisants, pensés pour répondre aux besoins du marché du travail actuel et futur. <br className="hidden md:block"/>
          🎯 Notre mission : vous aider à acquérir les compétences concrètes que les entreprises recherchent. {/* Updated P */}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default PresentationSection;