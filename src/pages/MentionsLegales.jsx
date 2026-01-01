import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';

const MentionsLegales = () => {
  const seoData = {
    title: "Mentions Légales IA Center | Informations Légales | RGPD",
    description: "Mentions légales IA Center SAS - RCS Paris 937 888 121. Centre de formation intelligence artificielle certifié Qualiopi. 40 Rue Alexandre Dumas, 75011 Paris. RGPD, cookies, données personnelles.",
    keywords: "mentions légales IA Center, RGPD IA Center, cookies IA Center, données personnelles, propriété intellectuelle, informations légales formation",
    canonicalUrl: "https://iacenter.fr/mentions-legales",
    ogImage: "https://iacenter.fr/favicon.png",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Mentions Légales | IA Center - Formation Intelligence Artificielle",
      "description": "Mentions légales IA Center. Centre de formation intelligence artificielle certifié Qualiopi.",
      "url": "https://iacenter.fr/mentions-legales",
      "mainEntity": {
        "@type": "Organization",
        "name": "IA Center",
        "legalName": "IA CENTER SAS",
        "foundingDate": "2024",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "40 Rue Alexandre Dumas",
          "addressLocality": "Paris",
          "postalCode": "75011",
          "addressCountry": "FR"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "contact@iacenter.fr",
          "contactType": "legal"
        }
      }
    }
  };
  useSEO(seoData);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="section-padding"
    >
      <div className="container-minimal max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-10 text-center">Mentions légales – IA Center</h1>
        
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 md:p-12">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            
            <article className="space-y-8">
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">ARTICLE 1 – COORDONNÉES</h2>
                <p className="leading-relaxed">
                  Le site internet accessible via le lien https://iacenter.fr (ci-après le « Site ») est édité par la société IA CENTER SAS, société par actions simplifiée au capital de 10 000 euros, dont le siège social est situé 40 rue Alexandre Dumas, 75011 Paris, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 937 888 121, représentée par son représentant légal en exercice M. Ait Omar Boujemaa, dûment habilité à l'effet des présentes (ci-après « le Prestataire »). Adresse e-mail : <a href="mailto:contact@iacenter.fr" className="text-primary underline font-semibold">contact@iacenter.fr</a>
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">ARTICLE 2 – SITE</h2>
                <p className="leading-relaxed">
                  Le Prestataire est le directeur éditorial du Site et en est également le directeur de publication. Le Site est hébergé par : <strong>IONOS</strong><br />
                  Siège social : 7 place de la Gare, 57200 Sarreguemines<br />
                  Contact France : 0970 808 911 (composez le +33 970 808 911) (d'après le site internet de IONOS)
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">ARTICLE 3 – ACCESSIBILITÉ</h2>
                <p className="leading-relaxed">
                  Le Site est par principe accessible aux utilisateurs 24h/24 et 7j/7, sauf interruption, programmée ou non, pour des besoins de maintenance ou en cas de force majeure. En cas d'impossibilité d'accès au Site, le Prestataire s'engage à faire son maximum afin d'en rétablir l'accès. Le Prestataire ne saurait être tenu pour responsable de tout dommage, quelle qu'en soit la nature, résultant de son indisponibilité.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">ARTICLE 4 – POLITIQUE DE COOKIES</h2>
                <p className="leading-relaxed">
                  Le Prestataire a éventuellement recours aux techniques de cookies lui permettant de traiter des statistiques et informations sur le trafic, de faciliter la navigation et d'améliorer le service pour le confort de l'utilisateur. Conformément à la législation européenne, le Prestataire a mis à jour sa politique de confidentialité en matière de cookies. L'utilisateur est libre d'accepter ou de refuser tout ou partie des cookies du Site à partir d'un dispositif de collecte du consentement s'affichant dès la première visite sur le Site. S'il a accepté les cookies, l'utilisateur est également libre de retirer ou d'aménager son consentement à partir du centre de préférences du Site. Le consentement de l'utilisateur est explicite ; la non-réponse au dispositif de collecte du consentement vaut refus des cookies. La navigation sur le Site est susceptible de provoquer l'installation de cookie(s) sur l'ordinateur de l'utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l'identification directe de l'utilisateur, mais qui enregistre des informations relatives à la navigation d'un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le Site, et ont également vocation à permettre diverses mesures de fréquentation. Le refus d'installation d'un cookie peut entraîner l'impossibilité d'accéder à certains services. L'utilisateur peut toutefois configurer son navigateur pour refuser l'installation des cookies. Le Prestataire déclare être à jour des dernières réglementations en matière de cookies.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">ARTICLE 5 – MODIFICATION DES MENTIONS LÉGALES</h2>
                <p className="leading-relaxed">
                  Les présentes mentions légales peuvent être modifiées à tout moment. Ces modifications sont publiées par leur mise en ligne et sont réputées acceptées sans réserve lorsque l'utilisateur accède au Site postérieurement à leur mise en ligne.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">ARTICLE 6 – LITIGES</h2>
                <p className="leading-relaxed">
                  Les présentes mentions légales sont régies par le droit français, notamment par les dispositions de la Loi du 21 juin 2004 pour la confiance dans l'économie numérique ainsi que par la Loi n°78-17 du 6 janvier 1978 modifiée par la Loi n°2004-801 du 6 août 2004 dite « Informatique et Libertés ». Tous les litiges auxquels les présentes mentions légales pourraient donner lieu, concernant tant leur validité, leur interprétation, leur exécution, leur résiliation, leurs conséquences et leurs suites, seront soumis aux tribunaux compétents dans le ressort duquel se trouve le lieu de résidence de l'utilisateur.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">ARTICLE 7 – COLLECTE ET TRAITEMENT DES DONNÉES</h2>
                <p className="leading-relaxed">
                  Conformément aux dispositions de la Loi n°78-17 du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), l'utilisateur bénéficie d'un droit d'accès, de rectification et de suppression de tout ou partie des données personnelles le concernant. L'utilisateur bénéficie également d'un droit d'opposition, d'un droit à la limitation du traitement et d'un droit à la portabilité de ses données personnelles. L'utilisateur pourra exercer ses droits sur simple demande accompagnée d'une copie d'un justificatif d'identité en cours de validité :
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Soit par l'envoi d'un mail à l'adresse suivante : <a href="mailto:contact@iacenter.fr" className="text-primary underline font-semibold">contact@iacenter.fr</a></li>
                  <li>Soit par l'envoi d'un courrier à l'adresse suivante : IA CENTER SAS, 40 rue Alexandre Dumas, 75011 Paris</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  L'utilisateur bénéficie également du droit d'introduire une réclamation auprès d'une autorité de contrôle, et en particulier auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés). Adresse de la CNIL : 3 Place de Fontenoy – TSA 80715 – 75334 PARIS CEDEX 07<br />
                  Site internet de la CNIL : <a href="https://www.cnil.fr/" target="_blank" rel="noopener noreferrer" className="text-primary underline font-semibold">https://www.cnil.fr/</a>
                </p>
                <p className="leading-relaxed mt-4">
                  Des informations supplémentaires sur la façon dont les données personnelles de l'utilisateur sont traitées sont accessibles dans l'onglet « Politique de confidentialité » du Site. Enfin, conformément à l'article L.223-2 du Code de la consommation, il est rappelé que l'utilisateur du Site peut faire usage de son droit à s'inscrire sur la liste d'opposition au démarchage téléphonique BLOCTEL, sur le site internet officiel <a href="https://www.bloctel.gouv.fr/" target="_blank" rel="noopener noreferrer" className="text-primary underline font-semibold">https://www.bloctel.gouv.fr/</a>.
                </p>
              </section>
            </article>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MentionsLegales; 