import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const FinancementSection = () => {
  const financementOptions = [
    {
      icon: null,
      logo: '/images/partenaires/OPCO-EP-logo.png',
      title: 'OPCO (Opérateurs de Compétences)',
      description: 'Financement de vos formations professionnelles via votre OPCO, selon votre branche d\'activité et vos droits acquis.',
      features: ['Prise en charge totale ou partielle des coûts pédagogiques', 'Accessible aux salariés et aux entreprises', 'Compatible avec la certification Qualiopi']
    },
    {
      icon: null,
      logo: '/images/logo_fonds_social_europeen.png',
      title: 'FSE+ (Fonds Social Européen Plus)',
      description: 'Dispositif de l\'Union Européenne visant à soutenir la formation et l\'insertion professionnelle.',
      features: ['Financement pour certaines actions de formation éligibles', 'Ouvert aux entreprises, salariés et demandeurs d\'emploi', 'Contribue à la montée en compétences et à l\'employabilité']
    },
    {
      icon: null,
      logo: '/images/Fondpropreaccueil.png',
      title: 'Fonds propres',
      description: 'Financement de votre formation directement par vos propres moyens, sans dispositif public.',
      features: ['Liberté totale sur le choix de la formation', 'Aucun critère administratif ou délai d\'acceptation', 'Investissement direct dans votre projet professionnel']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.1,
        type: "tween",
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="section-padding bg-background"
    >
      <div className="container-minimal">
        {/* Titre principal */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Financez votre Formation
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos solutions de financement pour accéder à nos formations certifiées Qualiopi
          </p>
        </motion.div>

        {/* Options de financement */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {financementOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center mb-6">
                {option.logo ? (
                  <div className="mb-4 flex justify-center">
                    <img 
                      src={option.logo} 
                      alt={option.title}
                      className="h-32 md:h-40 w-auto object-contain"
                      onError={(e) => {
                        console.error('Erreur chargement logo:', e.target.src);
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                ) : (
                  <div className="mb-4 flex justify-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full">
                      {option.icon}
                    </div>
                  </div>
                )}
                {!option.logo && (
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {option.title}
                  </h3>
                )}
                <p className="text-muted-foreground">
                  {option.description}
                </p>
              </div>
              
              <ul className="space-y-3">
                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>


      </div>
    </motion.section>
  );
};

export default FinancementSection;
