import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Laptop, Target, Award, ArrowRight, Flame, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const FormationCard = ({ formation, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut"
      },
    },
  };

  // Mapping des titres vers les slugs réels
  const getFormationSlug = (title) => {
    const slugMap = {
      'Transition Numérique': 'transition-numerique',
      'Créer son business en ligne': 'creer-business-en-ligne',
      'Gestion de Projet': 'gestion-projet-agile',
      'Management d\'Équipe à l\'Ère Digitale': 'management-equipe-digitale',
      'Stratégie Marketing B2B & Lead Generation': 'strategie-marketing-b2b',
      'Cybersécurité pour les Équipes Non Techniques': 'cybersecurite-non-techniques',
      'Communication Interpersonnelle & Prise de Parole': 'communication-interpersonnelle',
      'Initiation à l\'Intelligence Artificielle': 'initiation-intelligence-artificielle',
      'Créer son Site Web Personnel': 'creer-site-web-personnel',
      'Maîtriser les Outils Bureautiques Modernes': 'maitriser-outils-bureautiques',
      'Cybersécurité : Les Fondamentaux': 'cybersecurite-fondamentaux'
    };
    
    return slugMap[title] || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };
  
  // Utiliser le slug personnalisé s'il existe, sinon générer depuis le titre
  const formationUrl = formation.slug 
    ? (formation.slug.startsWith('/') ? formation.slug : `/${formation.slug}`)
    : `/formations/${getFormationSlug(formation.title)}`;

  // Détection des badges
  let badge = null;
  if (formation.title.includes("Initiation à l'Intelligence Artificielle")) {
    badge = (
      <span className="absolute top-4 right-4 bg-gradient-to-r from-primary to-blue-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1"><Sparkles className="h-4 w-4" /> Nouveau</span>
    );
  } else if (formation.title.includes('Gestion de Projet Agile')) {
    badge = (
      <span className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1"><Flame className="h-4 w-4" /> Populaire</span>
    );
  }

  // Mini-timeline pour 'Gestion de Projet Agile'
  const showTimeline = formation.title.includes('Gestion de Projet Agile');
  const timelineSteps = [
    { icon: <TrendingUp className="h-4 w-4 text-primary" />, label: 'Découverte' },
    { icon: <TrendingUp className="h-4 w-4 text-primary" />, label: 'Pratique' },
    { icon: <TrendingUp className="h-4 w-4 text-primary" />, label: 'Certification' },
  ];

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(60, 80, 180, 0.10)', transition: { duration: 0.2, ease: 'easeOut' } }}
      className="h-full group relative"
    >
      {/* Badge si besoin */}
      {badge}
      <Card className="h-full flex flex-col bg-card shadow-none hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-transparent group-hover:border-border rounded-lg">
        <CardHeader className="p-6">
          <CardTitle className="text-xl font-semibold text-foreground mb-2">{formation.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0 flex-grow space-y-3">
          <div className="flex items-center text-sm text-muted-foreground space-x-2">
            <Clock className="h-4 w-4 text-primary/80 shrink-0" />
            <span>{formation.duration}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground space-x-2">
            <Laptop className="h-4 w-4 text-primary/80 shrink-0" />
            <span>{formation.format}</span>
          </div>
          {(formation.description || formation.objective) && (
            <div className="flex items-start text-sm text-muted-foreground space-x-2">
              <Target className="h-4 w-4 text-primary/80 mt-0.5 shrink-0" />
              <span>{formation.description || formation.objective}</span>
            </div>
          )}
          <div className="flex items-center text-sm text-muted-foreground space-x-2">
            <Award className="h-4 w-4 text-primary/80 shrink-0" />
            <span>{formation.certification}</span>
          </div>
        </CardContent>
        {/* Mini-timeline pour la formation Agile */}
        {showTimeline && (
          <div className="flex justify-center items-center gap-3 pb-2">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="bg-primary/10 rounded-full p-2 mb-1">{step.icon}</div>
                <span className="text-xs text-muted-foreground">{step.label}</span>
                {idx < timelineSteps.length - 1 && <div className="w-6 h-0.5 bg-primary/20 mx-auto" />}
              </div>
            ))}
          </div>
        )}
        <CardFooter className="p-6 pt-0">
          <Link to={formationUrl} className="text-primary hover:text-primary/80 text-sm font-medium flex items-center group">
            En savoir plus <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default FormationCard;