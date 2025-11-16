import { useEffect } from 'react';
import { trackingConfig } from '@/config/trackingConfig';

const injectScript = (id, src, innerHTML) => {
  if (document.getElementById(id)) {
    return;
  }

  const script = document.createElement('script');
  script.id = id;
  if (src) {
    script.src = src;
    script.async = true;
  }

  if (innerHTML) {
    script.innerHTML = innerHTML;
  }

  document.head.appendChild(script);
};

const TrackingProvider = ({ children }) => {
  useEffect(() => {
    // Vérifier que window et document existent
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    try {
      const { ga4MeasurementId, metaPixelId, linkedinPartnerId } = trackingConfig;

      // Google Analytics est maintenant chargé directement dans index.html
      // On vérifie seulement si gtag existe pour les événements personnalisés
      // Si le script n'est pas déjà chargé (variable d'environnement), on le charge dynamiquement
      if (ga4MeasurementId && !window.gtag && !window.dataLayer) {
        window.dataLayer = window.dataLayer || [];
        window.gtag =
          window.gtag ||
          function gtag() {
            window.dataLayer.push(arguments);
          };

        injectScript(
          'ga4-script',
          `https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`
        );

        window.gtag('js', new Date());
        window.gtag('config', ga4MeasurementId);
      }

      if (metaPixelId && !window.fbq) {
        window.fbq =
          window.fbq ||
          function fbq() {
            window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments);
          };

        if (!window._fbq) {
          window._fbq = window.fbq;
        }

        window.fbq.push = window.fbq;
        window.fbq.loaded = true;
        window.fbq.version = '2.0';
        window.fbq.queue = [];

        injectScript('meta-pixel-script', 'https://connect.facebook.net/en_US/fbevents.js');
        window.fbq('init', metaPixelId);
      }

      if (linkedinPartnerId && !window._linkedin_data_partner_ids) {
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(linkedinPartnerId);

        injectScript(
          'linkedin-insight-script',
          'https://snap.licdn.com/li.lms-analytics/insight.min.js'
        );
      }
    } catch (error) {
      console.error('TrackingProvider error:', error);
    }
  }, []);

  return <>{children}</>;
};

export default TrackingProvider;

