import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import HeroSection from '@/components/sections/HeroSection';
import PresentationSection from '@/components/sections/PresentationSection';
import StrengthsSection from '@/components/sections/StrengthsSection';
import FinancementSection from '@/components/sections/FinancementSection';
import CTASection from '@/components/sections/CTASection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FormationCard from '@/components/FormationCard';

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
  const seoData = {
    title: "Formation Intelligence Artificielle IA | Centre Formation Certifié Qualiopi | IA Center",
    description: "Centre de formation intelligence artificielle certifié Qualiopi. Formations IA entreprises financées OPCO & CPF. Transition numérique PME, outils IA (ChatGPT, Midjourney), automatisation. France.",
    keywords: "formation intelligence artificielle, formation IA entreprise, formation IA OPCO, formation IA CPF, centre formation IA, formation transition numérique, formation digitalisation PME, formation outils IA, formation ChatGPT, formation Midjourney, formation automatisation, certification Qualiopi, formation France, formation Toulouse, formation Paris",
    canonicalUrl: "https://iacenter.fr",
    ogImage: "https://iacenter.fr/favicon.png",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "IA Center",
      "description": "Centre de formation intelligence artificielle certifié Qualiopi. Formations IA entreprises, transition numérique PME, outils IA, automatisation.",
      "url": "https://iacenter.fr",
      "logo": "https://iacenter.fr/favicon.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "40 Rue Alexandre Dumas",
        "addressLocality": "Paris",
        "postalCode": "75011",
        "addressCountry": "FR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+33-5-67-80-25-40",
        "contactType": "customer service",
        "email": "contact@iacenter.fr",
        "availableLanguage": ["French"]
      },
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "name": "Certification Qualiopi",
        "credentialCategory": "certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": "France Compétences"
        }
      },
      "offers": {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "Formation Intelligence Artificielle",
          "description": "Formations IA entreprises financées OPCO & CPF. Transition numérique PME, outils IA, automatisation.",
          "provider": {
            "@type": "Organization",
            "name": "IA Center"
          }
        }
      },
      "sameAs": [
        "https://www.facebook.com/IACenter.fr/",
        "https://www.linkedin.com/company/ia-center"
      ]
    }
  };
  useSEO(seoData);

  return (
    <div className="bg-background">
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