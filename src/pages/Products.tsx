import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '@/src/data';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter, Search } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import Layout from '@/src/components/layout/Layout';
import PageTransition from '@/src/components/layout/PageTransition';
import { Reveal } from '@/src/components/ui/Reveal';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Ganesha", "Radha Krishna", "Hanuman", "Shiva", "Durga", "Ram", "Sai Baba", "Laxmi", "Vishnu", "Kartikeya", "Temple", "Abstract", "Portrait"];

  const shuffledProducts = useMemo(() => {
    return [...PRODUCTS].sort(() => Math.random() - 0.5);
  }, []);

  const filteredProducts = shuffledProducts.filter(p => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout transparentNavbar>
      <PageTransition>
        <div className="min-h-screen bg-neutral-50 flex flex-col">
          {/* Header Section */}
          <section className="relative min-h-[30vh] flex items-center justify-center text-center px-6 bg-neutral-900 pt-24 pb-8">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/gallery-hero/1920/1080')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
            <div className="relative z-10 max-w-4xl">
              <Reveal>
                <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-2 block">Our Collection</span>
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-3">Gallery of Divinity</h1>
                <p className="text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
                  Explore our hand-carved marble masterpieces, crafted with spiritual devotion.
                </p>
              </Reveal>
            </div>
          </section>

          {/* Filter & Search Bar */}
          <section className="py-8 px-6 -mt-10 relative z-20">
            <div className="max-w-7xl mx-auto">
              <Reveal>
                <div className="bg-white p-4 md:p-6 rounded-[2rem] shadow-xl shadow-neutral-200/50 border border-neutral-100 flex flex-col lg:flex-row gap-6 items-center justify-between">
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {categories.map((cat) => (
                      <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={cn(
                          "px-8 py-3 rounded-full border transition-all font-bold text-sm cursor-pointer",
                          activeCategory === cat 
                            ? "bg-accent border-accent text-black shadow-lg shadow-accent/20" 
                            : "border-neutral-100 bg-neutral-50 text-neutral-500 hover:border-accent hover:text-accent"
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative w-full lg:w-96">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                    <input 
                      type="text"
                      placeholder="Search masterpieces..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-14 pr-8 py-4 rounded-full bg-neutral-50 border border-neutral-100 focus:border-accent focus:bg-white outline-none transition-all font-medium"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Grid */}
          <section className="py-4 pb-24 px-4">
            <div className="max-w-[1800px] mx-auto">
              <div className="min-h-[400px]">
                <motion.div 
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
                >
                  <AnimatePresence mode="popLayout" initial={false}>
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        className="group block bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-neutral-100 hover:shadow-2xl transition-all duration-500"
                      >
                        <motion.div
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ 
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            opacity: { duration: 0.2 }
                          }}
                        >
                          <div className="aspect-square overflow-hidden relative">
                            <img 
                              src={product.imageUrl} 
                              alt={product.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                              <span className="text-accent text-[10px] font-bold uppercase tracking-widest mb-1">{product.category}</span>
                              <h3 className="text-white text-lg font-bold mb-2">{product.title}</h3>
                              <div className="text-accent text-xs font-bold flex items-center gap-2">
                                View Details <ArrowRight size={14} />
                              </div>
                            </div>
                            <div className="absolute top-3 left-3 group-hover:opacity-0 transition-opacity">
                              <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-white text-[9px] font-bold rounded-full uppercase tracking-[0.2em]">
                                {product.category}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>

              {filteredProducts.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-32"
                >
                  <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Search size={40} className="text-neutral-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-400 italic">No masterpieces found matching your criteria.</h3>
                  <button 
                    onClick={() => {setActiveCategory("All"); setSearchQuery("");}}
                    className="mt-8 text-accent font-bold hover:underline"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              )}
            </div>
          </section>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default Products;
