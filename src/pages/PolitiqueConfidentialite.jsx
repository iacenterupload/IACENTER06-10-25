import React from 'react';
import { motion } from 'framer-motion';

const PolitiqueConfidentialite = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="section-padding"
    >
      {/* SEO Meta pour politique de confidentialité */}
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Politique de Confidentialité | IA Center - Formation IA",
        "description": "Politique de confidentialité IA Center. Protection des données personnelles, RGPD, formation intelligence artificielle certifié Qualiopi.",
        "url": "https://iacenter.fr/politique-confidentialite",
        "mainEntity": {
          "@type": "Organization",
          "name": "IA Center",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "40 Rue Alexandre Dumas",
            "addressLocality": "Paris",
            "postalCode": "75011",
            "addressCountry": "FR"
          }
        }
      })}
      </script>
      <div className="container-minimal max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-10 text-center">Politique de confidentialité</h1>
        
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 md:p-12">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            
            <article className="space-y-8">
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">ARTICLE PRÉLIMINAIRE – PRÉAMBULE</h2>
                <p className="leading-relaxed">
                  La présente politique de confidentialité s'adresse aux utilisateurs (ci-après « l'Utilisateur ») du site internet https://iacenter.fr (ci-après le « Site ») édité par la société IA CENTER SAS, société par actions simplifiée au capital de 10 000 euros, dont le siège social est situé 40 rue Alexandre Dumas – 75011 Paris, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 937 888 121 00020, (ci-après « le Prestataire ») et a pour objectif de présenter à l'Utilisateur la teneur des traitements des données à caractère personnel mis en œuvre sur le Site.
                </p>
                
                <p className="leading-relaxed mt-4">
                  Les présentes politiques de confidentialité viennent compléter les dispositions applicables à la relation entre le Prestataire et l'Utilisateur, et doivent donc être lues en parallèle avec les autres conditions applicables accessibles depuis le Site.
                </p>
                
                <p className="leading-relaxed mt-4">
                  Le Prestataire s'engage en tout état de cause à respecter les quatre principes essentiels suivants :
                </p>
                
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Collecter uniquement les données strictement nécessaires au regard de leur finalité</li>
                  <li>L'Utilisateur reste propriétaire de ses données à caractère personnel</li>
                  <li>Les données sont traitées de manière transparente, confidentielle et sécurisée</li>
                  <li>Les données sont conservées uniquement pendant une durée n'excédant pas celle nécessaire au regard des finalités pour lesquelles elles sont traitées.</li>
                </ul>
                
                <p className="leading-relaxed mt-6">
                  Le traitement des données à caractère personnel est régi par :
                </p>
                
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>La Loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés</li>
                  <li>Le Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016, entré en vigueur le 25 mai 2018 (ci-après « RGPD »)</li>
                  <li>L'article L.6353-9 du Code du Travail dans le cadre de la formation professionnelle</li>
                </ul>
                
                <p className="leading-relaxed mt-6">
                  Aux termes de l'article L.223-2 du Code de la consommation, il est rappelé que l'Utilisateur peut user de son droit à s'inscrire sur la liste d'opposition au démarchage téléphonique Bloctel : <a href="https://www.bloctel.gouv.fr/" target="_blank" rel="noopener noreferrer" className="text-primary underline font-semibold">https://www.bloctel.gouv.fr/</a>
                </p>
              </section>
            </article>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PolitiqueConfidentialite; 