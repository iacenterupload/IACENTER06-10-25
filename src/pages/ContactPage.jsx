import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send, Building, User } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [userType, setUserType] = useState('entreprise');
  const [formData, setFormData] = useState({
    // Champs communs
    email: '',
    phone: '',
    demande: '',
    message: '',
    // Champs particuliers
    nom: '',
    prenom: '',
    // Champs entreprise
    nomEntreprise: '',
    siret: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Construire manuellement les données pour éviter les problèmes de FormData
      const formDataToSend = new FormData();
      
      // Toujours transmettre le type d'utilisateur et tous les champs à Formspree
      formDataToSend.append('userType', userType);
      formDataToSend.append('email', formData.email || '');
      formDataToSend.append('phone', formData.phone || '');
      formDataToSend.append('demande', formData.demande || '');
      formDataToSend.append('message', formData.message || '');
      formDataToSend.append('nom', formData.nom || '');
      formDataToSend.append('prenom', formData.prenom || '');
      formDataToSend.append('nomEntreprise', formData.nomEntreprise || '');
      formDataToSend.append('siret', formData.siret || '');

      const res = await fetch('https://formspree.io/f/xgvykkzq', {
        method: 'POST',
        body: formDataToSend,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        toast({ title: 'Message envoyé !', description: 'Nous vous répondrons dans les plus brefs délais.' });
        setFormData({
          email: '',
          phone: '',
          demande: '',
          message: '',
          nom: '',
          prenom: '',
          nomEntreprise: '',
          siret: '',
        });
        setIsSubmitting(false);
        return;
      } else {
        let data = null;
        try {
          data = await res.json();
        } catch (_) {}
        const errMsg = data?.errors?.[0]?.message || 'L’envoi a échoué. Réessayez plus tard.';
        toast({ title: 'Erreur', description: errMsg });
      }
    } catch (error) {
      toast({ title: 'Erreur', description: 'Problème réseau. Réessayez plus tard.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const itemVariants = {
     hidden: { opacity: 0, y: 20 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="overflow-hidden" // Prevents horizontal scroll during animation
    >
      {/* SEO Meta pour la page contact */}
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact IA Center | Formation Intelligence Artificielle",
        "description": "Contactez IA Center pour vos formations IA entreprises. Centre de formation intelligence artificielle certifié Qualiopi. Toulouse, Paris, France.",
        "url": "https://iacenter.fr/contact",
        "mainEntity": {
          "@type": "Organization",
          "name": "IA Center",
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
            "email": "contact@iacenter.fr"
          }
        }
      })}
      </script>
      <div className="section-padding">
        <div className="container-minimal">
          <motion.h1
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-semibold text-center mb-4 text-foreground"
          >
            Contactez-nous
          </motion.h1>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
          >
            Prêt à rejoindre notre formation ? Contactez-nous pour plus d'informations ou pour vous inscrire.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Sélection du type d'utilisateur */}
                <div className="mb-8">
                  <Label className="mb-4 block text-sm font-medium text-foreground">Vous êtes :</Label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setUserType('particulier')}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all ${
                        userType === 'particulier'
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-background text-foreground border-border hover:border-primary/50'
                      }`}
                    >
                      <User className="h-5 w-5" />
                      Particulier
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserType('entreprise')}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all ${
                        userType === 'entreprise'
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-background text-foreground border-border hover:border-primary/50'
                      }`}
                    >
                      <Building className="h-5 w-5" />
                      Entreprise
                    </button>
                  </div>
                </div>

                {/* Champs spécifiques selon le type d'utilisateur */}
                {userType === 'particulier' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="nom" className="mb-2 block text-sm font-medium text-foreground">Nom*</Label>
                      <Input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        placeholder="Dupont"
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="prenom" className="mb-2 block text-sm font-medium text-foreground">Prénom*</Label>
                      <Input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        required
                        placeholder="John"
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="nomEntreprise" className="mb-2 block text-sm font-medium text-foreground">Nom de l'entreprise*</Label>
                      <Input
                        type="text"
                        id="nomEntreprise"
                        name="nomEntreprise"
                        value={formData.nomEntreprise}
                        onChange={handleChange}
                        required
                        placeholder="Votre entreprise"
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="siret" className="mb-2 block text-sm font-medium text-foreground">SIRET (facultatif)</Label>
                      <Input
                        type="text"
                        id="siret"
                        name="siret"
                        value={formData.siret}
                        onChange={handleChange}
                        placeholder="123 456 789 00012"
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>
                )}

                {/* Champs communs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                                          <Label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">Email*</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john.dupont@gmail.com"
                        className="bg-background border-border focus:border-primary"
                      />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">Téléphone*</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="06 12 34 56 78"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="demande" className="mb-2 block text-sm font-medium text-foreground">Votre demande</Label>
                  <Input
                    type="text"
                    id="demande"
                    name="demande"
                    value={formData.demande}
                    onChange={handleChange}
                    placeholder="Quelle formation vous intéresse-t-elle ?"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">Message complémentaire</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Détaillez votre demande..."
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                    {isSubmitting ? 'Envoi en cours...' : (
                      <>
                        Envoyer <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-semibold text-foreground">Nos coordonnées</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 mt-1 text-primary shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">IA Center</p>
                    <p>40 Rue Alexandre Dumas, 75011 Paris</p> {/* Updated Address */}
                  </div>
                </div>
                 <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                   <a href="mailto:contact@iacenter.fr" className="hover:text-primary transition-colors">contact@iacenter.fr</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                   <a href="tel:0567802540" className="hover:text-primary transition-colors">05 67 80 25 40</a> {/* Updated Phone */}
                </div>
              </div>

              {/* Placeholder for Map */}
              <div className="aspect-video bg-muted rounded-lg border border-border flex items-center justify-center text-muted-foreground">
                <p>Carte intégrée (bientôt disponible)</p>
                {/* Replace with actual map component when needed */}
                {/* <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=2.38,48.85,2.40,48.86&layer=mapnik&marker=48.855,2.39" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Phrase DREETS au-dessus du footer */}
      <div className="border-t border-border bg-background mt-16">
        <div className="container-minimal py-6 text-center">
          <p className="text-sm text-muted-foreground">
            Organisme de formation déclaré auprès de la DREETS sous le numéro 11757191375. Ce numéro ne vaut pas agrément d'État.
          </p>
        </div>
      </div>

    </motion.div>
  );
};

export default ContactPage;