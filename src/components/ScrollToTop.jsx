import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  const scrollToTop = useCallback(() => {
    // Utilisation de scrollTo avec options de comportement fluide
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    // Délai minimal pour éviter les conflits avec les transitions
    const timer = setTimeout(scrollToTop, 100);
    return () => clearTimeout(timer);
  }, [pathname, scrollToTop]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;