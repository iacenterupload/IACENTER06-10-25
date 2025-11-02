import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import FormationsPage from '@/pages/FormationsPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import Preloader from '@/components/Preloader';
import ScrollToTop from '@/components/ScrollToTop'; // Import ScrollToTop
import { AnimatePresence } from 'framer-motion';
import MentionsLegales from '@/pages/MentionsLegales';
import PolitiqueConfidentialite from '@/pages/PolitiqueConfidentialite';
import FormationsProPage from '@/pages/FormationsProPage';
import FormationsParticuliersPage from '@/pages/FormationsParticuliersPage';
import FormationDetailPage from '@/pages/FormationDetailPage';
import CertificationQualiopiPage from '@/pages/CertificationQualiopiPage';
import AttestationPersonnalisationPage from '@/pages/AttestationPersonnalisationPage';
import ActualitesPage from '@/pages/ActualitesPage';
import Article1 from '@/pages/blog/Article1';
import Article2 from '@/pages/blog/Article2';
import Article3 from '@/pages/blog/Article3';
import Article4 from '@/pages/blog/Article4';
import Article5 from '@/pages/blog/Article5';
import Article6 from '@/pages/blog/Article6';
import Article7 from '@/pages/blog/Article7';
import Article8 from '@/pages/blog/Article8';
import Article9 from '@/pages/blog/Article9';
import Article10 from '@/pages/blog/Article10';
import Article11 from '@/pages/blog/Article11';
import Article12 from '@/pages/blog/Article12';
import Article13 from '@/pages/blog/Article13';
import Article14 from '@/pages/blog/Article14';
import Article15 from '@/pages/blog/Article15';
import Article16 from '@/pages/blog/Article16';
import Article17 from '@/pages/blog/Article17';
import Article18 from '@/pages/blog/Article18';
import Article19 from '@/pages/blog/Article19';
import Article20 from '@/pages/blog/Article20';
import Article21 from '@/pages/blog/Article21';
import Article22 from '@/pages/blog/Article22';
import Article23 from '@/pages/blog/Article23';
import Article24 from '@/pages/blog/Article24';
import Article25 from '@/pages/blog/Article25';
import Article26 from '@/pages/blog/Article26';
import Article27 from '@/pages/blog/Article27';
import Article28 from '@/pages/blog/Article28';
import Article29 from '@/pages/blog/Article29';
import Article30 from '@/pages/blog/Article30';

// Placeholder pages for legal links - Minimalist styling
const PlaceholderPage = ({ title }) => (
  <div className="section-padding">
     <div className="container-minimal">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">{title}</h1>
        <p className="text-muted-foreground max-w-prose">
          Le contenu de cette page sera bientôt disponible. Veuillez revenir ultérieurement pour consulter les informations relatives aux {title.toLowerCase()}.
        </p>
     </div>
  </div>
);

function AppContent() {
  const location = useLocation();

  return (
      <Layout>
        <ScrollToTop /> {/* Add ScrollToTop here */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/formations" element={<FormationsPage />} />
            <Route path="/formations-professionnels" element={<FormationsProPage />} />
            <Route path="/formations-particuliers" element={<FormationsParticuliersPage />} />
            <Route path="/formations/:slug" element={<FormationDetailPage />} />
            <Route path="/actualites" element={<ActualitesPage />} />
            <Route path="/blog/pourquoi-investir-formation-professionnelle-strategique-pme" element={<Article1 />} />
            <Route path="/blog/comment-construire-plan-developpement-competences-efficace-2025" element={<Article2 />} />
            <Route path="/blog/budget-opco-comment-utiliser-intelligemment" element={<Article3 />} />
            <Route path="/blog/former-salaries-levier-fidelisation-performance" element={<Article4 />} />
            <Route path="/blog/5-erreurs-frequentes-dirigeants-formation-professionnelle" element={<Article5 />} />
            <Route path="/blog/formation-continue-obligation-opportunite-entreprise" element={<Article6 />} />
            <Route path="/blog/comment-mesurer-impact-formation-entreprise" element={<Article7 />} />
            <Route path="/blog/quelles-formations-anticiper-evolutions-marche" element={<Article8 />} />
            <Route path="/blog/pourquoi-tpe-gagner-former-salaries" element={<Article9 />} />
            <Route path="/blog/role-dirigeant-montee-competences-collaborateurs" element={<Article10 />} />
            <Route path="/blog/transformation-digitale-ou-commencer-pme" element={<Article11 />} />
            <Route path="/blog/formation-cle-transformation-digitale-reussie" element={<Article12 />} />
            <Route path="/blog/competences-digitales-indispensables-2025" element={<Article13 />} />
            <Route path="/blog/ia-former-equipes-eviter-dec-rochage" element={<Article14 />} />
            <Route path="/blog/accompagner-digitalisation-process-internes" element={<Article15 />} />
            <Route path="/blog/automatisation-productivite-competences-interne" element={<Article16 />} />
            <Route path="/blog/freins-digitalisation-pme-comment-lever" element={<Article17 />} />
            <Route path="/blog/formation-digitale-vs-presentielle-format-equipes" element={<Article18 />} />
            <Route path="/blog/avenir-travail-formations-anticiper" element={<Article19 />} />
            <Route path="/blog/culture-digitale-priorite-entreprise" element={<Article20 />} />
            <Route path="/blog/manager-2025-nouvelles-competences" element={<Article21 />} />
            <Route path="/blog/faire-evoluer-collaborateurs-sans-demotiver" element={<Article22 />} />
            <Route path="/blog/former-deleguer-levier-productivite" element={<Article23 />} />
            <Route path="/blog/soft-skills-developper-entreprise-maintenant" element={<Article24 />} />
            <Route path="/blog/culture-apprentissage-continu-equipe" element={<Article25 />} />
            <Route path="/blog/formation-moteur-cohesion-equipe-innovation" element={<Article26 />} />
            <Route path="/blog/formation-avantage-concurrentiel-recruter" element={<Article27 />} />
            <Route path="/blog/former-managers-ere-ia-priorite-rh" element={<Article28 />} />
            <Route path="/blog/accompagner-reconversion-interne-salaries" element={<Article29 />} />
            <Route path="/blog/formation-bien-etre-travail-duo-gagnant-2025" element={<Article30 />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/certification-qualiopi" element={<CertificationQualiopiPage />} />
            <Route path="/attestation-personnalisation" element={<AttestationPersonnalisationPage />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            {/* Add formation detail routes later if needed */}
            {/* <Route path="/formations/:slug" element={<FormationDetailPage />} /> */}
          </Routes>
        </AnimatePresence>
      </Layout>
  );
}

// Root component to manage preloader and main app content
function RootApp() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Match preloader animation duration

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" />
        ) : (
          <AppContent key="appcontent" />
        )}
      </AnimatePresence>
    </Router>
  );
}

export default RootApp;