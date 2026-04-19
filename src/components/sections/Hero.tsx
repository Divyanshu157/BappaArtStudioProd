import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const slides = [
  {
    image: "/assets/images/ganesh/g1.jpeg",
    title: "The Soul of Marble",
    subtitle: "Meticulously handcrafted using timeless techniques passed through generations."
  },
  {
    image: "/assets/images/saraswati/s1.jpeg",
    title: "Bespoke Divine Creations",
    subtitle: "Tailored to your space and devotion, bringing spiritual energy to your home."
  },
  {
    image: "/assets/images/mama.png",  
    title: "Ancient Art Meets Modern Grace",
    subtitle: "Crafting divine sculptures for over five decades with unwavering devotion."
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden" aria-label="Hero slideshow featuring marble sculptures">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
            role="img"
            aria-label={slides[current].title}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <motion.h1 
          key={`h1-${current}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 max-w-5xl leading-tight text-shadow"
        >
          {slides[current].title}
        </motion.h1>
        <motion.p 
          key={`p-${current}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl text-white/90 font-light max-w-3xl text-shadow mb-10"
        >
          {slides[current].subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-4"
        >
          <Link to="/products" className="px-8 py-4 bg-accent text-black font-bold rounded-full hover:scale-105 transition-transform shadow-lg">
            Explore Gallery
          </Link>
          <Link to="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all">
            Custom Commission
          </Link>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 z-20">
        <button onClick={prev} className="p-0 md:p-3 rounded-none md:rounded-full bg-transparent md:bg-black/20 hover:bg-accent hover:text-black text-white transition-all backdrop-blur-sm cursor-pointer">
          <ChevronLeft size={32} />
        </button>
        <button onClick={next} className="p-0 md:p-3 rounded-none md:rounded-full bg-transparent md:bg-black/20 hover:bg-accent hover:text-black text-white transition-all backdrop-blur-sm cursor-pointer">
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "w-3 h-3 rounded-full transition-all cursor-pointer",
              current === i ? "bg-accent w-8" : "bg-white/50"
            )}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 right-10 z-20 text-white/50 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold rotate-90 mb-8 origin-right">Scroll</span>
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;
