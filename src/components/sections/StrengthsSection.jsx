import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Award, Users } from 'lucide-react';

const strengths = [
  {
    icon: Laptop,
    title: 'Formations à distance',
    description: 'Flexibilité totale, apprenez où et quand vous voulez.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    hoverBgColor: 'group-hover:bg-blue-100',
  },
  {
    icon: Award,
    title: 'Contenus à jour',
    description: 'Conçus avec des professionnels experts du secteur.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    hoverBgColor: 'group-hover:bg-green-100',
  },
  {
    icon: Users,
    title: 'Accompagnement humain',
    description: 'Un formateur dédié pour chaque parcours et un suivi personnalisé.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    hoverBgColor: 'group-hover:bg-purple-100',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut"
    },
  }),
};

const StrengthsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-minimal">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-12 md:mb-16"
        >
          Nos Atouts
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/20 hover:border-primary/20 group"
            >
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${strength.bgColor} rounded-full mb-6 ${strength.hoverBgColor} transition-colors duration-300`}>
                  <strength.icon className={`h-8 w-8 ${strength.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{strength.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;