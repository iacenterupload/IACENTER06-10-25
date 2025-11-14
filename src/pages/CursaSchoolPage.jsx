import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { 
  CheckCircle, 
  Clock, 
  Users, 
  Award, 
  MessageCircle, 
  BookOpen,
  Send,
  Star,
  Zap,
  Shield,
  TrendingUp,
  ArrowDown,
  X
} from 'lucide-react';
import { trackCTA } from '../utils/trackCTA';

const CursaSchoolPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    phone: '',
    niveau: '',
    horaire: '',
    contactTime: '',
    offre: '1',
    objectif: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('registration-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Tracking
      trackCTA({
        name: 'scroll_to_form',
        location: 'cursaschool_landing',
        medium: 'landing_page',
        campaign: 'cursaschool_ads',
        content: 'sticky_button'
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Tracking de la conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'lead_generation',
        event_label: 'cursaschool_landing',
        value: 1
      });
    }

    // Tracking Formspree
    trackCTA({
      name: 'form_submit',
      location: 'cursaschool_landing',
      medium: 'landing_page',
      campaign: 'cursaschool_ads',
      content: 'registration_form'
    });

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('source', 'formation-anglais-oral');
      formDataToSend.append('prenom', formData.prenom || '');
      formDataToSend.append('nom', formData.nom || '');
      formDataToSend.append('email', formData.email || '');
      formDataToSend.append('phone', formData.phone || '');
      formDataToSend.append('niveau', formData.niveau || '');
      formDataToSend.append('horaire', formData.horaire || '');
      formDataToSend.append('contactTime', formData.contactTime || '');
      formDataToSend.append('offre', formData.offre || '');
      formDataToSend.append('objectif', formData.objectif || '');

      const res = await fetch('https://formspree.io/f/mjkjkgyn', {
        method: 'POST',
        body: formDataToSend,
        headers: { 
          'Accept': 'application/json'
        }
      });

      if (res.ok) {
        // Réinitialiser le formulaire
        setFormData({
          prenom: '',
          nom: '',
          email: '',
          phone: '',
          niveau: '',
          horaire: '',
          contactTime: '',
          offre: '1',
          objectif: ''
        });
        
        // Afficher la modale de succès
        setShowSuccessModal(true);
      } else {
        const errorData = await res.json();
        toast({ 
          title: 'Erreur', 
          description: errorData.error || 'L\'envoi a échoué. Réessayez plus tard.',
          variant: 'destructive'
        });
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
      toast({ 
        title: 'Erreur', 
        description: 'Problème réseau. Réessayez plus tard.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    document.body.style.overflow = 'unset';
  };

  // Nettoyer le body scroll lors du démontage du composant
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Gérer le scroll du body lorsque la modale est ouverte/fermée
  useEffect(() => {
    if (showSuccessModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showSuccessModal]);

  const seoData = {
    title: "Formation Communication Anglais Professionnel & Confiance à l'Oral | IA Center",
    description: "Formation en communication anglaise 100% en ligne. 3 mois pour maîtriser l'anglais courant et professionnel. Cours en live, groupes WhatsApp, certificat inclus. Inscription ouverte.",
    keywords: "formation anglais, cours anglais en ligne, formation communication anglaise, anglais professionnel, anglais courant, formation anglais certifiée, formation CPF anglais, cours anglais professionnel en ligne, formation anglais certifiée Qualiopi",
    canonicalUrl: "https://iacenter.fr/formation-anglais-oral",
    ogImage: "https://iacenter.fr/favicon.png",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Anglais Professionnel & Confiance à l'Oral",
      "description": "Formation en communication anglaise 100% en ligne. 3 mois pour maîtriser l'anglais courant et professionnel. Cours en live, groupes WhatsApp, certificat inclus.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "IA Center",
        "url": "https://iacenter.fr",
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
        }
      },
      "educationalLevel": "professional",
      "courseCode": "anglais-professionnel-oral",
      "inLanguage": "fr-FR",
      "availableLanguage": ["fr", "en"],
      "teaches": [
        "Anglais professionnel",
        "Communication orale en anglais",
        "Confiance à l'oral",
        "Anglais courant",
        "Expression orale en anglais"
      ],
      "educationalCredentialAwarded": "Certificat de fin de formation",
      "timeRequired": "PT180H",
      "duration": "P3M",
      "coursePrerequisites": "Niveau minimum requis : capacité à formuler des phrases simples en anglais",
      "url": "https://iacenter.fr/formation-anglais-oral",
      "offers": {
        "@type": "Offer",
        "price": "100",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "100",
          "priceCurrency": "EUR",
          "unitCode": "MON",
          "billingDuration": "P1M"
        },
        "availability": "https://schema.org/InStock",
        "url": "https://iacenter.fr/formation-anglais-oral"
      }
    }
  };
  useSEO(seoData);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen bg-background"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-silver-light py-12 md:py-16">
        <div className="container-minimal max-w-5xl mx-auto px-6">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-block mb-6"
            >
              <img 
                src="/favicon.png" 
                alt="IA Center Logo" 
                className="h-28 w-28 md:h-36 md:w-36 lg:h-40 lg:w-40 mx-auto"
              />
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Formation de Communication
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-6">
              Anglais Professionnel & Confiance à l'Oral
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Maîtrisez l'anglais en 3 mois avec notre formation 100% en ligne
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 text-sm md:text-base"
            >
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="font-medium">Certificat inclus</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-medium">Cours en live</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Zap className="h-5 w-5 text-yellow-500" />
                <span className="font-medium">Accès groupes privés</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-minimal max-w-4xl mx-auto">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Notre Formation
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              La formation en communication s'adresse aux adultes qui ont déjà un niveau moyen en anglais avec des difficultés à communiquer et à s'exprimer correctement. Elle est également recommandée pour ceux qui veulent améliorer leur communication et pratiquer leur expression orale.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              En fonction de votre niveau, vous serez placé dans un groupe d'étudiants de même niveau que vous, afin que votre professeur puisse adapter le programme et que vous puissiez profiter au maximum du cours.
            </p>

            <div className="bg-silver-light border border-silver-medium rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-3xl">🇬🇧</span>
                Niveau minimum requis
              </h3>
              <p className="text-muted-foreground italic">
                "Hello ! My name is Sophie, I live in Paris with my family, I have a son, he is 5 years old, and I work as a marketing manager in a French company"
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Si vous comprenez cette phrase, vous avez le niveau requis pour cette formation.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              À la fin de votre formation, vous serez capable de :
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                <span className="text-muted-foreground">Dialoguer en anglais avec aisance</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                <span className="text-muted-foreground">Comprendre une conversation en anglais</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                <span className="text-muted-foreground">Exprimer votre opinion et prendre la parole</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                <span className="text-muted-foreground">Communiquer en voyage, en entreprise et en public</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              Le programme comprend :
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-silver-light rounded-lg">
                <MessageCircle className="h-7 w-7 text-primary mt-1 shrink-0" />
                <span className="text-muted-foreground">Savoir se présenter, décrire des situations, exprimer son opinion et participer à un débat</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-silver-light rounded-lg">
                <Users className="h-7 w-7 text-primary mt-1 shrink-0" />
                <span className="text-muted-foreground">S'entraîner à parler dans des situations de la vie quotidienne</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-silver-light rounded-lg">
                <TrendingUp className="h-7 w-7 text-primary mt-1 shrink-0" />
                <span className="text-muted-foreground">Savoir s'exprimer en entreprise, prendre un rendez-vous et écrire des e-mails professionnels</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-silver-light rounded-lg">
                <BookOpen className="h-7 w-7 text-primary mt-1 shrink-0" />
                <span className="text-muted-foreground">Réviser des cours indispensables de grammaire et de vocabulaire</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-silver-light rounded-lg">
                <MessageCircle className="h-7 w-7 text-primary mt-1 shrink-0" />
                <span className="text-muted-foreground">Séances d'activités orales et de travail en groupe</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-silver-light rounded-lg">
                <Award className="h-7 w-7 text-primary mt-1 shrink-0" />
                <span className="text-muted-foreground">Examens oraux et tests pour évaluer votre progression</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing & Benefits Section */}
      <section className="py-16 md:py-20 bg-silver-light">
        <div className="container-minimal max-w-4xl mx-auto">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Rejoindre le programme
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Formation 100% en ligne • 2 cours par semaine (2 heures/cours)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-background rounded-xl p-8 border-2 border-silver-medium shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="text-center mb-6">
                <div className="inline-block bg-primary/10 rounded-full p-3 mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Formation complète</h3>
                <p className="text-muted-foreground">3 mois de formation intensive</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-muted-foreground">2 cours par semaine</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-muted-foreground">2 heures par cours</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-muted-foreground">Accès groupes privés Facebook & WhatsApp</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-muted-foreground">Accompagnement 7/7j</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-muted-foreground">Certificat de fin de formation</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-primary text-primary-foreground rounded-xl p-8 border-2 border-primary shadow-xl hover:shadow-2xl relative overflow-hidden transition-all duration-300 cursor-pointer"
            >
              <div className="absolute top-3 right-2 bg-yellow-400 text-yellow-900 px-5 py-1.5 text-sm font-bold transform rotate-12 shadow-md z-10 whitespace-nowrap" style={{ backgroundColor: '#facc14' }}>
                OFFRE SPÉCIALE
              </div>
              <div className="text-center mb-6">
                <div className="inline-block bg-white/20 rounded-full p-3 mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Prix mensuel</h3>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-4xl font-bold">80€</span>
                  <span className="text-xl">/mois</span>
                </div>
                <p className="text-sm text-white/80 line-through mb-2">Au lieu de 100€/mois</p>
                <p className="text-sm font-semibold bg-white/20 rounded-full px-4 py-1 inline-block">
                  <span style={{ color: '#facc14' }}>Économisez 20€/mois (-20%)</span>
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-center font-semibold text-white">
                  Offre valable pour une inscription de 3 mois
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-sm text-center text-white">
                  <strong>Attention :</strong> Places limitées pour la session de Décembre
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -3 }}
            transition={{ duration: 0.3 }}
            className="bg-background rounded-xl p-6 border border-silver-medium hover:border-primary/30 hover:shadow-lg text-center transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
              <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
              <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
              <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
              <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
            </div>
            <p className="text-lg font-semibold text-foreground mb-2">
              Séance d'essai gratuite – sans engagement
            </p>
            <p className="text-muted-foreground">
              Testez notre méthode d'apprentissage avant de rejoindre la formation complète.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="registration-form" className="py-16 md:py-20 bg-gradient-to-br from-silver-light via-background to-primary/5">
        <div className="container-minimal max-w-3xl mx-auto">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div 
              className="inline-block mb-6 cursor-pointer"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img 
                src="/favicon.png" 
                alt="IA Center Logo" 
                className="h-28 w-28 md:h-36 md:w-36 lg:h-40 lg:w-40 mx-auto transition-transform duration-300"
              />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Inscrivez-Vous dès Maintenant
            </h2>
            <p className="text-lg text-muted-foreground">
              Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement
            </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer group">
                <CheckCircle className="h-4 w-4 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">Réponse sous 24h</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer group">
                <Shield className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">100% sécurisé</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer group">
                <Zap className="h-4 w-4 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">Sans engagement</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.01, y: -3 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 md:p-12 border-2 border-primary/20 hover:border-primary/40 shadow-2xl hover:shadow-3xl relative overflow-hidden transition-all duration-300"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="prenom" className="mb-2 block text-sm font-medium text-foreground">
                    Prénom *
                  </Label>
                  <Input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                    placeholder="Votre prénom"
                    className="bg-background border-silver-medium focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <Label htmlFor="nom" className="mb-2 block text-sm font-medium text-foreground">
                    Nom *
                  </Label>
                  <Input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                    className="bg-background border-silver-medium focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="objectif" className="mb-2 block text-sm font-medium text-foreground">
                  Votre objectif *
                </Label>
                <select
                  id="objectif"
                  name="objectif"
                  value={formData.objectif}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-silver-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer text-base"
                  style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                >
                  <option value="">Sélectionnez votre objectif</option>
                  <option value="business">Business</option>
                  <option value="voyage">Voyage</option>
                  <option value="etudes">Études</option>
                  <option value="ameliorer-accent">Améliorer son accent</option>
                  <option value="autres">Autres</option>
                </select>
              </div>

              <div>
                <Label htmlFor="niveau" className="mb-2 block text-sm font-medium text-foreground">
                  Comment évaluez-vous votre niveau en anglais ? *
                </Label>
                <select
                  id="niveau"
                  name="niveau"
                  value={formData.niveau}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-silver-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer text-base"
                  style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                >
                  <option value="">Sélectionnez votre niveau</option>
                  <option value="ne-sais-pas">Je ne sais pas</option>
                  <option value="commence-de-0">Je commence de 0</option>
                  <option value="debutant">Débutant</option>
                  <option value="moyen">Moyen</option>
                  <option value="avance">Avancé</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email *
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                    className="bg-background border-silver-medium focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                    Téléphone *
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="06 12 34 56 78"
                    className="bg-background border-silver-medium focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="horaire" className="mb-2 block text-sm font-medium text-foreground">
                  Quel horaire vous convient le mieux ? *
                </Label>
                <select
                  id="horaire"
                  name="horaire"
                  value={formData.horaire}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-silver-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer text-base"
                  style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                >
                  <option value="">Sélectionnez un horaire</option>
                  <option value="19:30-21:30">19:30 - 21:30</option>
                  <option value="20:00-22:00">20:00 - 22:00</option>
                  <option value="21:00-23:00">21:00 - 23:00</option>
                </select>
              </div>

              <div>
                <Label htmlFor="contactTime" className="mb-2 block text-sm font-medium text-foreground">
                  À quel moment préférez-vous être contacté ? *
                </Label>
                <select
                  id="contactTime"
                  name="contactTime"
                  value={formData.contactTime}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-silver-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer text-base"
                  style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                >
                  <option value="">Sélectionnez un créneau</option>
                  <option value="10:00-12:00">10:00 - 12:00</option>
                  <option value="12:00-15:00">12:00 - 15:00</option>
                  <option value="16:00-19:00">16:00 - 19:00</option>
                  <option value="19:00-21:00">19:00 - 21:00</option>
                </select>
              </div>

              <div>
                <Label htmlFor="offre" className="mb-2 block text-sm font-medium text-foreground">
                  Choisissez l'offre qui vous convient *
                </Label>
                <select
                  id="offre"
                  name="offre"
                  value={formData.offre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-silver-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer text-base"
                  style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                >
                  <option value="1">1 mois : 100€</option>
                  <option value="3">3 mois : 80€/mois (-20%)</option>
                  <option value="6">6 mois : 420€ total (-30%)</option>
                </select>
              </div>

              <div className="mt-8">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground text-lg py-6 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                  onClick={() => trackCTA({
                    name: 'registration_form',
                    location: 'cursaschool_landing',
                    medium: 'landing_page',
                    campaign: 'cursaschool_ads',
                    content: 'form_submit'
                  })}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Envoi en cours...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Valider mon inscription <Send className="h-5 w-5" />
                    </span>
                  )}
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-silver-medium">
                <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-2">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                  En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe. Vos données sont protégées et ne seront jamais partagées.
                </p>
              </div>
            </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container-minimal max-w-4xl mx-auto text-center">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <img 
                src="/favicon.png" 
                alt="IA Center Logo" 
                className="h-28 w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 mx-auto"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Obtenez un certificat à la fin de votre formation
            </h2>
            <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
              À la fin de votre formation, vous aurez toutes les compétences nécessaires pour vous exprimer correctement en public, en voyage et en entreprise. Vous serez capable de défendre vos opinions et d'être à l'aise avec la langue anglaise dans n'importe quelle situation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 rounded-lg px-6 py-3">
                <CheckCircle className="h-5 w-5 inline mr-2 text-white" />
                <span className="text-white font-semibold">Anglais courant et professionnel</span>
              </div>
              <div className="bg-white/20 rounded-lg px-6 py-3">
                <CheckCircle className="h-5 w-5 inline mr-2 text-white" />
                <span className="text-white font-semibold">Programme complet de 3 mois</span>
              </div>
              <div className="bg-white/20 rounded-lg px-6 py-3">
                <CheckCircle className="h-5 w-5 inline mr-2 text-white" />
                <span className="text-white font-semibold">Certificat de fin de formation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky CTA Button */}
      <motion.button
        onClick={scrollToForm}
        className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 bg-primary text-primary-foreground px-4 py-3 sm:px-6 sm:py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2 sm:gap-3 font-semibold text-base sm:text-lg group"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
        <span className="hidden sm:inline">S'inscrire maintenant</span>
        <span className="sm:hidden">S'inscrire</span>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-primary rounded-full -z-10"
        />
      </motion.button>

      {/* Success Modal */}
      {showSuccessModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeSuccessModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 md:p-10 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full -ml-12 -mb-12"></div>
            
            {/* Close button */}
            <button
              onClick={closeSuccessModal}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-silver-light transition-colors duration-200 z-10"
              aria-label="Fermer"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Logo IA Center */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="mb-6"
              >
                <img 
                  src="/favicon.png" 
                  alt="IA Center Logo" 
                  className="h-20 w-20 md:h-24 md:w-24 mx-auto"
                />
              </motion.div>

              {/* Success icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                className="mb-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl font-bold text-foreground mb-4"
              >
                Inscription enregistrée !
              </motion.h2>

              {/* Message */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-muted-foreground mb-6 leading-relaxed"
              >
                Merci pour votre inscription. Notre équipe va vous recontacter dans les <strong className="text-primary">24 heures</strong> pour finaliser votre inscription et répondre à toutes vos questions.
              </motion.p>

              {/* Additional info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-silver-light rounded-lg p-4 mb-6"
              >
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Réponse garantie sous 24h</span>
                </div>
              </motion.div>

              {/* Close button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                onClick={closeSuccessModal}
                className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Parfait, merci !
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CursaSchoolPage;

