import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { Users, Zap, Settings, Database, Award, Star, Heart, HelpCircle, Plus, X } from 'lucide-react';

const AboutPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 } },
  };
   const itemVariants = {
     hidden: { opacity: 0, y: 20 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Données FAQ pour le référencement
  const faqData = [
    {
      question: "Quel niveau est requis pour suivre les formations ?",
      answer: "Nos formations sont accessibles à tout niveau, nous adaptons le programme selon vos besoins."
    },
    {
      question: "Proposez-vous un accompagnement pour les personnes en situation de handicap ?",
      answer: "Oui, notre organisme de formation s'engage à accueillir et accompagner les personnes en situation de handicap. Nous adaptons nos formations et proposons des solutions personnalisées pour répondre à vos besoins spécifiques. Contactez-nous pour plus d'informations."
    },
    {
      question: "Comment garantir la qualité des formations proposées ?",
      answer: "Toutes nos formations suivent un processus rigoureux de conception, de mise en œuvre et d'évaluation. Nous réalisons des enquêtes de satisfaction à chaque étape pour nous assurer qu'elles répondent à vos attentes."
    },
    {
      question: "Quelles sont les modalités de financement disponibles ?",
      answer: "Nos formations peuvent être financées par différents dispositifs, comme votre CPF (Compte Personnel de Formation), Pôle Emploi, ou via des financements OPCO. Nous vous aidons à identifier le meilleur moyen de financer votre projet."
    },
    {
      question: "Que faire en cas d'insatisfaction ou de réclamation ?",
      answer: "Votre satisfaction est notre priorité. En cas de problème, vous pouvez déposer une réclamation via notre formulaire dédié en ligne ou nous contacter directement. Toutes les réclamations sont traitées sous 7 jours maximum."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const seoData = {
    title: "À propos IA Center | Centre Formation IA Certifié Qualiopi | Expertise IA",
    description: "Découvrez IA Center, centre de formation intelligence artificielle certifié Qualiopi. Expertise IA, accompagnement PME, transition numérique, outils IA (ChatGPT, Midjourney). Paris, France.",
    keywords: "IA Center, centre formation IA, organisme formation IA, formation intelligence artificielle, certification Qualiopi, expertise IA, accompagnement PME, transition numérique, outils IA, ChatGPT, Midjourney, formation Paris, formation France",
    canonicalUrl: "https://iacenter.fr/a-propos",
    ogImage: "https://iacenter.fr/favicon.png",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "À propos IA Center | Centre de Formation Intelligence Artificielle",
      "description": "Découvrez IA Center, centre de formation intelligence artificielle certifié Qualiopi. Expertise IA, accompagnement PME, transition numérique.",
      "url": "https://iacenter.fr/a-propos",
      "mainEntity": {
        "@type": "EducationalOrganization",
        "name": "IA Center",
        "description": "Centre de formation intelligence artificielle certifié Qualiopi. Nous accompagnons les entrepreneurs et entreprises dans la transformation numérique avec l'IA.",
        "foundingDate": "2024",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "40 Rue Alexandre Dumas",
          "addressLocality": "Paris",
          "postalCode": "75011",
          "addressCountry": "FR"
        },
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "name": "Certification Qualiopi",
          "credentialCategory": "certification"
        },
        "faq": faqData.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    }
  };
  useSEO(seoData);

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className="section-padding"
    >
      <div className="container-minimal space-y-20 md:space-y-28">
        {/* Slogan & Mission */}
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
          <Users className="h-12 w-12 mx-auto mb-5 text-muted-foreground" />
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-2">
            À propos de IA Center - Centre de Formation Intelligence Artificielle
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
            Façonnons l'Avenir Digital propulsé par l'Intelligence Artificielle
          </h2>
        </motion.div>

        {/* Qui sommes-nous ? */}
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Qui sommes-nous ?</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Chez IA Center, nous sommes bien plus qu'un simple centre de formation.<br />
            Nous accompagnons les entrepreneurs, les entreprises et les porteurs de projets dans la transformation numérique de leur activité.<br />
            Que vous souhaitiez lancer votre business en ligne ou optimiser vos processus internes, nous mettons à votre disposition des solutions innovantes pour booster votre productivité et maximiser vos résultats.
          </p>
        </motion.div>

        {/* Nos Services */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center p-6 bg-secondary rounded-lg shadow-sm">
            <Zap className="h-10 w-10 mb-4 text-primary mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Création de Business en Ligne</h3>
            <p className="text-muted-foreground">
              Transformez vos idées en un projet rentable grâce à nos formations et notre expertise personnalisée.
            </p>
          </div>
          <div className="text-center p-6 bg-secondary rounded-lg shadow-sm">
            <Settings className="h-10 w-10 mb-4 text-primary mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Digitalisation et Automatisation</h3>
            <p className="text-muted-foreground">
              Adoptez des outils intelligents et des systèmes d'IA pour moderniser vos opérations.
             </p>
           </div>
          <div className="text-center p-6 bg-secondary rounded-lg shadow-sm">
            <Database className="h-10 w-10 mb-4 text-primary mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Solution CRM Avancée</h3>
            <p className="text-muted-foreground">
              Gagnez en efficacité avec notre solution CRM spécialement conçue pour améliorer la gestion de vos clients.
            </p>
           </div>
        </motion.div>

        {/* Pourquoi choisir IA Center ? */}
        <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto">
          <Award className="h-10 w-10 mb-4 text-primary mx-auto" />
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Pourquoi Choisir IA Center ?</h2>
          <p className="text-lg text-muted-foreground">
            Rejoignez IA Center et prenez une longueur d'avance sur la concurrence.<br />
            Ensemble, construisons l'avenir de votre entreprise grâce à la puissance du digital et des nouvelles technologies.
          </p>
        </motion.div>

        {/* Nos Atouts */}
        <motion.div variants={itemVariants} className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Nos Atouts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez ce qui fait la force d'IA Center et pourquoi nous sommes votre partenaire de confiance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/20 hover:border-primary/20 group"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Expertise de Pointe</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Maîtrise des dernières technologies numériques et d'IA pour vous propulser vers l'avenir.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/20 hover:border-primary/20 group"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-6 group-hover:bg-green-100 transition-colors duration-300">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Accompagnement Sur Mesure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Des solutions personnalisées adaptées à vos objectifs et votre secteur d'activité.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/20 hover:border-primary/20 group"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-50 rounded-full mb-6 group-hover:bg-purple-100 transition-colors duration-300">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Résultats Concrets</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Des outils et formations qui génèrent une réelle valeur ajoutée pour votre entreprise.
                </p>
           </div>
            </motion.div>
           </div>
        </motion.div>

        {/* Section FAQ pour le référencement */}
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Questions Fréquemment Posées
            </h2>
            <p className="text-lg text-muted-foreground">
              Trouvez rapidement les réponses à vos questions sur nos formations et services
            </p>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-secondary rounded-lg shadow-sm overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md"
                onClick={() => toggleFaq(index)}
              >
                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFaqIndex === index ? (
                      <X className="h-6 w-6 text-primary" />
                    ) : (
                      <Plus className="h-6 w-6 text-primary" />
                    )}
                  </div>
                </div>
                
                {openFaqIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    className="px-6 pb-6"
                  >
                    <div className="pt-4 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;