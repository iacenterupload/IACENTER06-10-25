import { useEffect } from 'react';

export const useSEO = ({ title, description, keywords, canonicalUrl, ogImage, schemaData, robots = 'index, follow' }) => {
  useEffect(() => {
    // Meta robots (pour Google, Bing, etc.)
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', robots);

    // Googlebot spécifique
    let metaGooglebot = document.querySelector('meta[name="googlebot"]');
    if (!metaGooglebot) {
      metaGooglebot = document.createElement('meta');
      metaGooglebot.setAttribute('name', 'googlebot');
      document.head.appendChild(metaGooglebot);
    }
    metaGooglebot.setAttribute('content', robots);

    // Bingbot spécifique
    let metaBingbot = document.querySelector('meta[name="bingbot"]');
    if (!metaBingbot) {
      metaBingbot = document.createElement('meta');
      metaBingbot.setAttribute('name', 'bingbot');
      document.head.appendChild(metaBingbot);
    }
    metaBingbot.setAttribute('content', robots);

    // Title
    if (title) {
      document.title = title;
    }

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    if (description) {
      metaDescription.setAttribute('content', description);
    }

    // Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    if (keywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    if (canonicalUrl) {
      canonical.setAttribute('href', canonicalUrl);
    }

    // Open Graph
    const setOGMeta = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      if (content) {
        meta.setAttribute('content', content);
      }
    };

    if (title) setOGMeta('og:title', title);
    if (description) setOGMeta('og:description', description);
    if (canonicalUrl) setOGMeta('og:url', canonicalUrl);
    if (ogImage) setOGMeta('og:image', ogImage);
    setOGMeta('og:type', 'website');
    setOGMeta('og:locale', 'fr_FR');

    // Twitter Card
    setOGMeta('twitter:card', 'summary_large_image');
    if (title) setOGMeta('twitter:title', title);
    if (description) setOGMeta('twitter:description', description);
    if (ogImage) setOGMeta('twitter:image', ogImage);

    // Schema.org JSON-LD
    let existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (existingSchema && !existingSchema.id) {
      existingSchema.remove();
    }

    if (schemaData) {
      let schemaScript = document.getElementById('schema-json-ld');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'schema-json-ld';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemaData);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, schemaData, robots]);
};

