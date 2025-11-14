const env = import.meta.env || {};

export const trackingConfig = {
  ga4MeasurementId: env.VITE_GA4_ID || null,
  metaPixelId: env.VITE_META_PIXEL_ID || null,
  metaEventName: env.VITE_META_CTA_EVENT || 'CTA Click',
  linkedinPartnerId: env.VITE_LINKEDIN_PARTNER_ID || null,
  linkedinConversionDefault: env.VITE_LINKEDIN_CONVERSION_ID || null
};

