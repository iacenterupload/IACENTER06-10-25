import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const logoUrl = "/favicon.png"; // Logo local

  const logoVariants = {
    initial: { scale: 1, opacity: 0 },
    animate: {
      scale: [1, 1.05, 1], // Zoom in slightly then back
      opacity: [0, 1, 1, 1, 0], // Fade in, stay, fade out
      transition: {
        duration: 1.5, // Total duration of the preloader animation
        ease: "easeInOut",
        times: [0, 0.2, 0.8, 0.9, 1] // Timing for opacity changes
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }} // Keep background visible during logo animation
      exit={{ opacity: 0, transition: { duration: 0.3, delay: 1.2 } }} // Fade out background after logo fades
    >
      <motion.img
        src={logoUrl}
        alt="IA Center Loading Logo"
        className="h-28 w-auto" // Increased height from h-20 to h-28
        variants={logoVariants}
        initial="initial"
        animate="animate"
      />
    </motion.div>
  );
};

export default Preloader;