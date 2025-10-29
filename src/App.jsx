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