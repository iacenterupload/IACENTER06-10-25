import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const contactEmail = "contact@iacenter.fr";
  const contactPhone = "05 67 80 25 40"; // Correct phone number

  return (
    <footer className="bg-background text-muted-foreground border-t border-border mt-auto">
      <div className="container-minimal py-12 md:py-16">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 text-sm w-full max-w-6xl">
            {/* Column 1: Navigation */}
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-foreground mb-3">Navigation</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-foreground transition-colors">Accueil</Link></li>
                <li><Link to="/formations" className="hover:text-foreground transition-colors">Formations</Link></li>
                <li><Link to="/a-propos" className="hover:text-foreground transition-colors">À propos</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Column 2: Legal */}
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-foreground mb-3">Légal</h3>
              <ul className="space-y-2">
                <li><Link to="/mentions-legales" className="hover:text-foreground transition-colors">Mentions légales</Link></li>
                <li><Link to="/politique-confidentialite" className="hover:text-foreground transition-colors">Politique de confidentialité</Link></li>
                <li><Link to="/attestation-personnalisation" className="hover:text-foreground transition-colors">Attestation des modalités de personnalisation de la formation</Link></li>
              </ul>
            </div>

            {/* Column 3: Social */}
            <div className="text-center sm:text-left">
               <h3 className="font-semibold text-foreground mb-3">Suivez-nous</h3>
               <div className="flex space-x-4 justify-center sm:justify-start">
                  <a href="https://www.facebook.com/IACenter.fr/" aria-label="Facebook" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer nofollow"><Facebook size={18} /></a>
                  <a href="https://www.linkedin.com/company/iacenterfrance/" aria-label="LinkedIn" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer nofollow"><Linkedin size={18} /></a>
                  <a href="#" aria-label="Instagram" className="hover:text-foreground transition-colors"><Instagram size={18} /></a>
                  <a href="#" aria-label="Twitter" className="hover:text-foreground transition-colors"><Twitter size={18} /></a>
               </div>
            </div>

            {/* Column 4: Contact Snippet */}
             <div className="text-center sm:text-left">
               <h3 className="font-semibold text-foreground mb-3">Contact</h3>
               <a href={`mailto:${contactEmail}`} className="text-xs block hover:text-foreground transition-colors mb-2">{contactEmail}</a>
               <a href={`tel:${contactPhone.replace(/\s/g, '')}`} className="text-xs block hover:text-foreground transition-colors mb-2">{contactPhone}</a>
               <p className="text-xs text-muted-foreground">40 Rue Alexandre Dumas, 75011 Paris</p>
             </div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-6 text-xs text-center space-y-2">
          <p>
            Organisme de formation déclaré auprès de Paris Île-de-France sous le numéro 11757191375. Ce numéro ne vaut pas agrément d'État.
          </p>
          <p>
            &copy; {currentYear} IA Center. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;