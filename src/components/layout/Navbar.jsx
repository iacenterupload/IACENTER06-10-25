import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/formations', label: 'Formations' },
    { path: '/a-propos', label: 'À propos' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: 'easeInOut' } },
  };

  // Logo local
  const logoUrl = "/favicon.png";

  // Simple component for the logo image
  const LogoComponent = () => (
     <img src={logoUrl} alt="IA Center Logo" className="h-16 w-auto" />
  );


  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-silver-light/90 backdrop-blur-md border-b border-silver-medium">
        <div className="container-minimal h-full flex justify-between items-center px-0">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <LogoComponent />
            <span className="font-semibold text-foreground text-2xl">IA Center</span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-sm font-medium transition-colors duration-200 ease-in-out',
                  location.pathname === item.path
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 top-16 z-40 bg-white md:hidden"
            onClick={toggleMobileMenu} // Close on clicking overlay
          >
            <div className="container-minimal py-8 flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={toggleMobileMenu} // Close on link click
                  className={cn(
                    'text-lg font-medium transition-colors duration-200 ease-in-out py-2 text-center',
                    location.pathname === item.path
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;