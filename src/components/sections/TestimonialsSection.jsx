import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

// Updated testimonials for IA Center
const testimonials = [
  {
    name: 'Julie D.',
    role: 'Apprenante en reconversion',
    quote: 'J\'ai pu me reconvertir facilement grâce à IA Center. L\'accompagnement est top et les formateurs sont vraiment à l\'écoute !',
    image: 'Smiling woman with glasses' // Placeholder description
  },
  {
    name: 'Samir K.',
    role: 'Responsable RH',
    quote: 'Formation claire, utile, et très bien structurée pour nos équipes. Les compétences acquises sont directement applicables. Je recommande.',
    image: 'Modern man portrait' // Placeholder description
  },
  {
    name: 'Marie L.',
    role: 'Entrepreneuse',
    quote: 'IA Center m\'a permis de digitaliser mon entreprise en seulement quelques semaines. Les résultats sont incroyables !',
    image: 'Business woman portrait'
  },
  {
    name: 'Thomas R.',
    role: 'Chef de projet',
    quote: 'Formation excellente sur la gestion de projet agile. J\'ai pu appliquer immédiatement les concepts dans mon équipe.',
    image: 'Professional man portrait'
  },
];

const TestimonialsSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-minimal">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-12 md:mb-16"
        >
          Témoignages
        </motion.h2>
        
        {/* Carrousel de témoignages avec défilement horizontal */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`flex gap-8 md:gap-12 ${
              isHovered ? 'animate-pause' : 'animate-scroll'
            }`}
            style={{
              animationPlayState: isHovered ? 'paused' : 'running'
            }}
          >
            {/* Dupliquer les témoignages pour un défilement infini */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 md:w-96"
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
                  }}
                  className="bg-secondary p-8 rounded-lg text-center border border-border/50 h-full flex flex-col justify-between"
                >
                  <p className="italic text-lg text-foreground mb-5">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <div className="flex justify-center text-yellow-500 mt-3">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;