import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import Hero from '@/src/components/sections/Hero';
import { PRODUCTS } from '@/src/data';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Hammer, Sparkles, Quote, CheckCircle2 } from 'lucide-react';
import Layout from '@/src/components/layout/Layout';
import PageTransition from '@/src/components/layout/PageTransition';
import { Reveal } from '@/src/components/ui/Reveal';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const featuredProducts = useMemo(() => {
    return [...PRODUCTS].sort(() => Math.random() - 0.5).slice(0, 4);
  }, []);

  return (
    <Layout transparentNavbar>
      <Helmet>
        <title>Bappa Art Studio - Premium Marble Sculptures & Divine Artistry</title>
        <meta name="description" content="Discover Bappa Art Studio's premium marble sculptures. Over 50 years of divine artistry, custom sculptures, heritage restoration, and spiritual art from Jaipur, India." />
        <meta name="keywords" content="marble sculptures, divine art, Bappa Art Studio, Jaipur, custom sculptures, heritage restoration, spiritual art" />
        <link rel="canonical" href="https://www.bappaartstudio.com/" />
      </Helmet>
      <PageTransition>
        <div className="flex flex-col">
          <Hero />

          {/* Featured Work */}
          <section className="py-24 px-6 bg-neutral-100" aria-labelledby="featured-work-title">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <Reveal direction="right">
                  <div className="max-w-2xl">
                    <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Exquisite Collection</span>
                    <h2 id="featured-work-title" className="text-4xl md:text-5xl font-bold mb-6">Featured Masterpieces</h2>
                    <p className="text-neutral-600 text-lg">
                      A glimpse into our world of divine marble artistry, where every piece tells a story of devotion and meticulous craftsmanship.
                    </p>
                  </div>
                </Reveal>
                <Reveal direction="left">
                  <Link to="/products" className="flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all group">
                    View Full Gallery <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Reveal>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredProducts.map((product, i) => (
                  <Reveal key={product.id} delay={i * 0.1}>
                    <Link 
                      to={`/products/${product.slug}`}
                      className="group relative block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-full"
                    >
                      <div className="aspect-[4/5] overflow-hidden">
                        <img 
                          src={product.imageUrl} 
                          alt={product.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="p-8">
                        <span className="text-accent text-[10px] uppercase tracking-widest font-bold mb-2 block">{product.category}</span>
                        <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                        <p className="text-neutral-500 text-sm mb-6 line-clamp-2">{product.description}</p>
                        <div className="text-neutral-900 font-bold text-sm flex items-center gap-2 group/link">
                          View Details <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Legacy Section */}
          <section className="py-32 px-6 bg-white" aria-labelledby="legacy-title">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <Reveal direction="right">
                <div className="relative">
                  <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl w-[90%] max-w-[40rem] h-[34rem] mx-auto">
                    <img 
                      src="/assets/images/Priyanshu.png" 
                      alt="Craftsman at work"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-8 bg-accent p-8 rounded-[2rem] shadow-2xl hidden md:block z-20">
                    <p className="text-black font-serif text-6xl font-bold mb-2">50+</p>
                    <p className="text-black/80 font-bold uppercase tracking-widest text-sm">Years of Divine Legacy</p>
                  </div>
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
                </div>
              </Reveal>
              
              <div className="space-y-8">
                <Reveal direction="left">
                  <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs">Our Heritage</span>
                  <h2 className="text-4xl md:text-6xl font-bold leading-tight">Crafting Devotion Through Generations</h2>
                  <p className="text-xl text-neutral-600 leading-relaxed">
                    For over five decades, Bappa Art Studio has been a sanctuary of spiritual artistry. We don't just carve stone; we breathe life into marble, preserving ancient traditions while embracing modern aesthetics.
                  </p>
                </Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-6">
                  <Reveal direction="left" delay={0.3}>
                    <div className="flex gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                        <Star size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Purity of Stone</h4>
                        <p className="text-sm text-neutral-500 leading-relaxed">We source only the finest Makrana and Sangemarmar marble for eternal radiance.</p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal direction="left" delay={0.4}>
                    <div className="flex gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                        <Shield size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Vedic Precision</h4>
                        <p className="text-sm text-neutral-500 leading-relaxed">Our sculptures adhere to sacred proportions and ancient Vastu principles.</p>
                      </div>
                    </div>
                  </Reveal>
                </div>
                <Reveal direction="left" delay={0.5}>
                  <div className="pt-8">
                    <Link to="/vision-values" className="px-10 py-5 bg-neutral-900 text-white font-bold rounded-full hover:bg-accent hover:text-black transition-all shadow-xl">
                      Our Vision & Values
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* The Sacred Journey (Process) */}
          <section className="py-32 px-6 bg-neutral-950 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10" />
            <div className="max-w-7xl mx-auto relative z-10">
              <Reveal>
                <div className="text-center mb-24">
                  <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">The Sacred Journey</span>
                  <h2 className="text-4xl md:text-6xl font-bold mb-8">How Divinity Takes Form</h2>
                  <p className="text-neutral-400 max-w-3xl mx-auto text-lg">
                    Every masterpiece at Bappa Art Studio undergoes a meditative journey from a raw block of stone to a radiant divine form.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {[
                  { 
                    title: "Selection", 
                    desc: "Handpicking the perfect block of marble based on grain, purity, and spiritual energy.",
                    icon: <Shield size={32} />
                  },
                  { 
                    title: "Vision", 
                    desc: "Skilled artisans sketch the divine form, ensuring sacred proportions are honored.",
                    icon: <Sparkles size={32} />
                  },
                  { 
                    title: "Carving", 
                    desc: "Meticulous hand-carving using traditional chisels, revealing the soul within the stone.",
                    icon: <Hammer size={32} />
                  },
                  { 
                    title: "Refinement", 
                    desc: "Weeks of delicate polishing and detailing to achieve that signature divine glow.",
                    icon: <Star size={32} />
                  }
                ].map((step, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="relative group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                      <div className="text-6xl font-serif font-bold text-white/5 absolute top-6 right-8 group-hover:text-accent/10 transition-colors">
                        0{i + 1}
                      </div>
                      <div className="w-20 h-20 rounded-3xl bg-accent/20 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                      <p className="text-neutral-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-32 px-6 bg-neutral-50">
            <div className="max-w-7xl mx-auto">
              <Reveal>
                <div className="text-center mb-20">
                  <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Client Stories</span>
                  <h2 className="text-4xl md:text-5xl font-bold">Voices of Devotion</h2>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  {
                    name: "Rajesh K. Sharma",
                    role: "Temple Trustee, Jaipur",
                    text: "The Ganesha moorti we commissioned is beyond words. The level of detail and the divine aura it radiates is truly exceptional. Bappa Art Studio is a gem."
                  },
                  {
                    name: "Anjali Mehta",
                    role: "Homeowner, Mumbai",
                    text: "I wanted a custom mandala for my meditation room. The team understood my vision perfectly and delivered a piece that has transformed the energy of my home."
                  },
                  {
                    name: "Dr. Vikram Singh",
                    role: "Art Collector, Delhi",
                    text: "As a collector of traditional Indian art, I find Bappa Art Studio's work to be of the highest caliber. They maintain the soul of the craft in every piece."
                  }
                ].map((testimonial, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-neutral-100 relative h-full">
                      <Quote className="text-accent/20 absolute top-8 right-8" size={48} />
                      <div className="flex gap-1 mb-6 text-accent">
                        {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                      </div>
                      <p className="text-neutral-600 italic mb-8 leading-relaxed text-lg">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-neutral-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal>
                <div className="mt-16 text-center">
                  <Link to="/testimonials" className="text-accent font-bold hover:underline inline-flex items-center gap-2">
                    Read More Stories <ArrowRight size={20} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 px-6">
            <Reveal>
              <div className="max-w-7xl mx-auto bg-accent rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-accent/20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
                
                <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-4xl md:text-6xl font-bold text-black mb-8 leading-tight">Bring Home a Masterpiece of Devotion</h2>
                  <p className="text-black/70 text-xl mb-12 font-medium">
                    Whether you need a custom moorti for your home or a grand installation for a temple, our artisans are ready to bring your vision to life.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact" className="w-full sm:w-auto px-8 py-6 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform shadow-xl text-center">
                      Contact Us Today
                    </Link>
                    <Link to="/products" className="w-full sm:w-auto px-8 py-6 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-xl text-center">
                      Browse Gallery
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default Home;
