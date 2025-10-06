import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import PresentationSection from '@/components/sections/PresentationSection';
import StrengthsSection from '@/components/sections/StrengthsSection'; // Re-added Strengths
import FinancementSection from '@/components/sections/FinancementSection'; // New Financement section
import CTASection from '@/components/sections/CTASection'; // Re-added CTA
import TestimonialsSection from '@/components/sections/TestimonialsSection'; // Re-added Testimonials
import FormationCard from '@/components/FormationCard'; // Use FormationCard

// Example featured formations (using data similar to FormationsPage)
const featuredFormations = [
 {
    title: 'Transition Numérique',
    duration: 'Formation financée par le FSE+',
    format: 'Transformez votre entreprise avec l\'innovation digitale',
    objective: 'Nous contacter',
    certification: 'Formation financée par le FSE+',
  },
  {
    title: 'Créer son business en ligne',
    duration: 'Entre 15h et 35h',
    format: '100% en ligne (Visio-conférence)',
    objective: 'Formation complète pour entrepreneurs ambitieux',
    certification: 'Certificat IA Center',
  },
];

const HomePage = () => {
  return (
    <div className="bg-background">
      {/* SEO Meta pour la page d'accueil */}
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Formation Intelligence Artificielle IA | Centre de Formation Certifié Qualiopi",
        "description": "Formation IA entreprises financée OPCO & CPF. Centre de formation intelligence artificielle certifié Qualiopi. Transition numérique PME, outils IA, automatisation.",
        "url": "https://iacenter.fr",
        "mainEntity": {
          "@type": "EducationalOrganization",
          "name": "IA Center",
          "description": "Centre de formation intelligence artificielle certifié Qualiopi"
        }
      })}
      </script>
      <HeroSection />
      <PresentationSection />
      <StrengthsSection /> {/* Added back */}
      <FinancementSection /> {/* New Financement section */}

      {/* Featured Formations Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } }
        }}
        className="section-padding bg-secondary" // Changed background for contrast
      >
        <div className="container-minimal">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-12 md:mb-16">
            Formations Clés {/* Updated Title */}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {featuredFormations.map((formation, index) => (
              <FormationCard key={index} formation={formation} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      <TestimonialsSection /> {/* Added back */}
      <CTASection /> {/* Added back */}

    </div>
  );
};

export default HomePage;