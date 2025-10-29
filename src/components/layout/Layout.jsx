import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      {/* Add padding-top to main to account for fixed navbar height */}
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;