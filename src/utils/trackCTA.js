import { trackingConfig } from '@/config/trackingConfig';

const buildEventPayload = (params) => {
  const timestamp = new Date().toISOString();
  return {
    event_category: 'CTA',
    event_label: `${params.article || 'generic'} | ${params.location || 'unspecified'}`,
    value: params.url || '',
    cta_name: params.name,
    article: params.article,
    location: params.location,
    medium: params.medium,
    campaign: params.campaign,
    content: params.content,
    timestamp
  };
};

export const trackCTA = ({
  name,
  article,
  location,
  medium = 'blog',
  campaign,
  content,
  url,
  linkedinConversionId,
  metaEventName
}) => {
  if (typeof window === 'undefined') {
    return;
  }

  const payload = buildEventPayload({
    name,
    article,
    location,
    medium,
    campaign,
    content,
    url
  });

  // Google Analytics est chargé directement dans index.html
  // On peut envoyer des événements si gtag existe
  if (window.gtag) {
    window.gtag('event', 'cta_click', payload);
  }

  if (window.fbq && trackingConfig.metaPixelId) {
    window.fbq('trackCustom', metaEventName || trackingConfig.metaEventName, {
      ...payload,
      pixel_id: trackingConfig.metaPixelId
    });
  }

  if (window.lintrk && trackingConfig.linkedinPartnerId) {
    window.lintrk('track', {
      conversion_id: linkedinConversionId || trackingConfig.linkedinConversionDefault,
      ...payload
    });
  }

  if (window.console && import.meta.env && import.meta.env.DEV) {
    console.debug('[Tracking] CTA', payload);
  }
};

