import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut"
      },
    },
  };

  // Placeholder for potential future link generation
  const productSlug = product.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const productUrl = `/produits/${productSlug}`; // Currently unused, but prepared

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2, ease: 'easeOut' } }}
      className="h-full group"
    >
      <Card className="h-full flex flex-col bg-card shadow-none hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-transparent group-hover:border-border rounded-lg">
        <CardHeader className="p-0 aspect-square overflow-hidden bg-secondary flex items-center justify-center">
          {/* Image Placeholder */}
          <img  class="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-105" alt={product.title} src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
        </CardHeader>
        <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
          <CardTitle className="text-xl font-semibold text-foreground mb-2">{product.title}</CardTitle>
          <p className="text-sm text-muted-foreground mb-4 flex-grow">{product.description}</p>
          {/* Removed asChild prop here */}
          <Button variant="link" size="sm" className="text-primary hover:text-primary/80 p-0 h-auto text-sm">
             {/* Link currently disabled */}
             {/* <Link to={productUrl}> */}
               En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
             {/* </Link> */}
          </Button>
        </CardContent>
        {/* Optional Footer for Price/Buy Button */}
        {/* <CardFooter className="p-4 bg-secondary/30">
           <Button size="sm" className="w-full">Acheter</Button>
        </CardFooter> */}
      </Card>
    </motion.div>
  );
};

export default ProductCard;