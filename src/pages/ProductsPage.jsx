import React from 'react';
import ProductCard from '@/components/ProductCard'; // Renamed from FormationCard
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react'; // Changed icon

// Renamed from formationsData to productsData
const productsData = [
  {
    title: 'Minimalist Desk Lamp',
    description: 'Éclairage LED ajustable avec design épuré.',
    imageDesc: 'Sleek modern desk lamp with adjustable arm',
  },
  {
    title: 'Wireless Ergonomic Mouse',
    description: 'Confort et précision pour une productivité accrue.',
    imageDesc: 'White ergonomic computer mouse side view',
  },
  {
    title: 'Portable Bluetooth Speaker',
    description: 'Son immersif dans un format compact et élégant.',
    imageDesc: 'Small cylindrical bluetooth speaker in grey',
  },
   {
    title: 'Smart Water Bottle',
    description: 'Suivi d\'hydratation intelligent et design moderne.',
    imageDesc: 'Clean white smart water bottle with glowing indicator',
  },
   {
    title: 'Noise-Cancelling Headphones',
    description: 'Immersion sonore totale, confort exceptionnel.',
    imageDesc: 'Over-ear noise cancelling headphones in black',
  },
   {
    title: 'Minimalist Wallet',
    description: 'Portefeuille fin en aluminium pour cartes essentielles.',
    imageDesc: 'Slim metal card holder wallet',
  },
];

// Renamed from FormationsPage to ProductsPage
const ProductsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="section-padding" // Use consistent padding
    >
      <div className="container-minimal">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            className="inline-block p-3 bg-secondary rounded-full mb-5"
          >
            <ShoppingBag className="h-8 w-8 text-foreground/80" />
          </motion.div>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-4"
          >
            Nos Produits
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Explorez notre sélection d'articles conçus pour allier esthétique et fonctionnalité.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {productsData.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductsPage;