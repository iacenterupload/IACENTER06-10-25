import React, { useState } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  fallbackSrc = "/images/placeholder.png",
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [imageStatus, setImageStatus] = useState('loading');

  const handleImageLoad = () => {
    setImageStatus('loaded');
  };

  const handleImageError = () => {
    setImageStatus('error');
    setImageSrc(fallbackSrc);
  };

  return (
    <div className={`relative ${className}`}>
      {imageStatus === 'loading' && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
      )}
      
      <img
        src={imageSrc}
        alt={alt}
        className={`w-full h-auto transition-opacity duration-300 ${
          imageStatus === 'loaded' ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        decoding="async"
        onLoad={handleImageLoad}
        onError={handleImageError}
        {...props}
      />
      
      {imageStatus === 'error' && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
          Image non disponible
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
