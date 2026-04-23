import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Hero from '@/src/components/sections/Hero';
import { PRODUCTS } from '@/src/data';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Hammer, Sparkles, Quote, CheckCircle2, Globe, Zap, Users, Truck, HelpCircle, Award } from 'lucide-react';
import Layout from '@/src/components/layout/Layout';
import PageTransition from '@/src/components/layout/PageTransition';
import { Reveal } from '@/src/components/ui/Reveal';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const featuredProducts = useMemo(() => {
    return [...PRODUCTS].sort(() => Math.random() - 0.5).slice(0, 4);
  }, []);

  return (
    <Layout transparentNavbar>
      <Helmet>
        <title>Bappa Art Studio - Premium Marble Sculptures & Divine Artistry</title>
        <meta name="description" content="Discover Bappa Art Studio's premium marble sculptures. Over 50 years of divine artistry, custom sculptures, heritage restoration, and spiritual art from Jaipur, India. Worldwide shipping available." />
        <meta name="keywords" content="marble sculptures, divine art, Bappa Art Studio, Jaipur, custom sculptures, heritage restoration, spiritual art, marble idols" />
        <link rel="canonical" href="https://www.bappaartstudio.com/" />
      </Helmet>
      <PageTransition>
        <div className="flex flex-col">
          {/* SECTION 1: HERO WITH PROPER H1 */}
          <Hero />
          
          {/* SECTION 2: TRUST SIGNALS BAR */}
          <section className="py-4 px-4 bg-white border-b border-neutral-100">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <Reveal>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</p>
                  <p className="text-sm text-neutral-600 font-medium">Years of Craftsmanship</p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-accent mb-2">1000+</p>
                  <p className="text-sm text-neutral-600 font-medium">Satisfied Customers</p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</p>
                  <p className="text-sm text-neutral-600 font-medium">Countries Served</p>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</p>
                  <p className="text-sm text-neutral-600 font-medium">Premium Marble</p>
                </div>
              </Reveal>
            </div>
          </section>

          {/* SECTION 3: FEATURED CATEGORIES - HORIZONTAL SCROLL */}
          <section className="py-10 px-4 bg-white" aria-labelledby="categories-title">
            <div className="max-w-7xl mx-auto">
              <Reveal>
                <div className="text-center mb-6">
                  <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Divine Collection</span>
                  <h2 id="categories-title" className="text-4xl md:text-5xl font-bold mb-6">Browse Divine Forms</h2>
                  <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                    Every deity carries unique spiritual significance. Explore our curated collection of handcrafted marble sculptures.
                  </p>
                </div>
              </Reveal>

              <div className="relative">
                {/* Scrollable container */}
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                  {[
                    { 
                      name: "Ganesha", 
                      desc: "Remover of obstacles, prosperity, and new beginnings", 
                      count: "7+ Designs",
                      image: "/assets/images/ganesh/g1.jpeg"
                    },
                    { 
                      name: "Radha Krishna", 
                      desc: "Divine love, eternal devotion, and celestial romance", 
                      count: "7+ Designs",
                      image: "/assets/images/radha-krishna/rk1.jpeg"
                    },
                    { 
                      name: "Shiva", 
                      desc: "Meditation, transformation, and cosmic consciousness", 
                      count: "1+ Designs",
                      image: "/assets/images/shiva/m1.jpeg"
                    },
                    { 
                      name: "Ram", 
                      desc: "Dharma, righteousness, and divine leadership", 
                      count: "3+ Designs",
                      image: "/assets/images/ram/r1.jpeg"
                    },
                    { 
                      name: "Durga", 
                      desc: "Goddess of strength, protection, and victory", 
                      count: "3+ Designs",
                      image: "/assets/images/durga/d1.jpeg"
                    },
                    { 
                      name: "Saraswati", 
                      desc: "Wisdom, knowledge, music, and creative arts", 
                      count: "2+ Designs",
                      image: "/assets/images/saraswati/s1.jpeg"
                    }
                  ].map((cat, i) => (
                    <Reveal key={i} delay={i * 0.08}>
                      <Link 
                        to="/products"
                        className="group relative flex-shrink-0 w-80 overflow-hidden rounded-[2rem] bg-white border border-neutral-100 hover:border-accent transition-all duration-300 shadow-sm hover:shadow-xl snap-center"
                      >
                        {/* Image */}
                        <div className="aspect-[4/5] overflow-hidden relative">
                          <img 
                            src={cat.image} 
                            alt={`${cat.name} marble sculpture category`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                          
                          {/* Count badge */}
                          <div className="absolute top-4 left-4">
                            <span className="bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                              {cat.count}
                            </span>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-accent transition-colors">
                            {cat.name}
                          </h3>
                          <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-2">
                            {cat.desc}
                          </p>
                          <div className="text-accent font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                            Explore <ArrowRight size={16} />
                          </div>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
                
                {/* Scroll indicators */}
                <div className="flex justify-center mt-2 gap-2">
                  <div className="text-xs text-neutral-400">← Scroll to explore more categories →</div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: FEATURED PRODUCTS */}
          <section className="py-8 px-4 bg-white" aria-labelledby="featured-work-title">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                <Reveal direction="right">
                  <div className="max-w-2xl">
                    <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Best Sellers</span>
                    <h2 id="featured-work-title" className="text-4xl md:text-5xl font-bold mb-6">Featured Masterpieces</h2>
                    <p className="text-neutral-600 text-lg">
                      Handpicked sculptures that embody our finest craftsmanship. Each piece is a testament to centuries-old traditions and modern artistry.
                    </p>
                  </div>
                </Reveal>
                <Reveal direction="left">
                  <Link to="/products" className="flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all group">
                    View Full Gallery <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Reveal>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {featuredProducts.map((product, i) => (
                  <Reveal key={product.id} delay={i * 0.1}>
                    <Link 
                      to={`/products/${product.slug}`}
                      className="group relative block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-full border border-neutral-100"
                    >
                      <div className="aspect-[4/5] overflow-hidden">
                        <img 
                          src={product.imageUrl} 
                          alt={`${product.title} - ${product.category} marble sculpture`}
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

          {/* SECTION 5: HERITAGE & LEGACY */}
          <section className="py-20 px-6 bg-neutral-50" aria-labelledby="legacy-title">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <Reveal direction="right">
                <div className="relative">
                  <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl w-[90%] max-w-[40rem] h-[34rem] mx-auto">
                    <img 
                      src="/assets/images/Priyanshu.png" 
                      alt="Master craftsman sculpting marble at Bappa Art Studio workshop"
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
                  <h2 id="legacy-title" className="text-4xl md:text-6xl font-bold leading-tight">Crafting Devotion Through Generations</h2>
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
                        <h3 className="font-bold text-lg mb-2">Purity of Stone</h3>
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
                        <h3 className="font-bold text-lg mb-2">Vedic Precision</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed">Our sculptures adhere to sacred proportions and ancient Vastu principles.</p>
                      </div>
                    </div>
                  </Reveal>
                </div>
                <Reveal direction="left" delay={0.5}>
                  <div className="pt-8">
                    <Link to="/vision-values" className="px-10 py-5 bg-neutral-900 text-white font-bold rounded-full hover:bg-accent hover:text-black transition-all shadow-xl inline-block">
                      Our Vision & Values
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* SECTION 6: WHY CHOOSE US (Trust Section) */}
          <section className="py-20 px-6 bg-white" aria-labelledby="why-choose-title">
            <div className="max-w-7xl mx-auto">
              <Reveal>
                <div className="text-center mb-20">
                  <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Why Choose Bappa</span>
                  <h2 id="why-choose-title" className="text-4xl md:text-6xl font-bold mb-6">What Sets Us Apart</h2>
                  <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                    In a world of mass production, we stand as guardians of authentic craftsmanship and spiritual excellence.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Award size={32} />,
                    title: "Jaipur Heritage Masters",
                    desc: "Rooted in Jaipur's legendary marble craftsmanship tradition with 50+ years of expertise."
                  },
                  {
                    icon: <Zap size={32} />,
                    title: "100% Custom Creations",
                    desc: "Every sculpture is handcrafted to your exact vision—size, pose, details, and spiritual intent."
                  },
                  {
                    icon: <Globe size={32} />,
                    title: "Global Shipping",
                    desc: "Safely delivered to 50+ countries with secure packaging and international logistics expertise."
                  },
                  {
                    icon: <Star size={32} />,
                    title: "Premium Marble Only",
                    desc: "We exclusively use Makrana and Sangemarmar marble—no compromises on material quality."
                  },
                  {
                    icon: <Shield size={32} />,
                    title: "Heritage Restoration",
                    desc: "Expert restoration of ancient sculptures and temple installations with reverence and precision."
                  },
                  {
                    icon: <Users size={32} />,
                    title: "1000+ Happy Customers",
                    desc: "Trusted by temples, collectors, and homes worldwide for our dedication to excellence."
                  }
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <div className="p-8 bg-neutral-50 rounded-[2rem] border border-neutral-100 hover:border-accent hover:shadow-lg transition-all">
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 7: CRAFTSMANSHIP PROCESS */}
          <section className="py-20 px-6 bg-neutral-950 text-white relative overflow-hidden" aria-labelledby="process-title">
            <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10" />
            <div className="max-w-7xl mx-auto relative z-10">
              <Reveal>
                <div className="text-center mb-24">
                  <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">The Sacred Journey</span>
                  <h2 id="process-title" className="text-4xl md:text-6xl font-bold mb-8">How Divinity Takes Form</h2>
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

          {/* SECTION 8: TESTIMONIALS - AUTO SCROLLING MARQUEE */}
          <section className="py-10 px-0 bg-neutral-50 overflow-hidden" aria-labelledby="testimonials-title">
            <div className="max-w-7xl mx-auto mb-8">
              <Reveal>
                <div className="text-center mb-8 px-4">
                  <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Client Stories</span>
                  <h2 id="testimonials-title" className="text-4xl md:text-5xl font-bold">Voices of Devotion</h2>
                </div>
              </Reveal>
            </div>
            
            {/* Infinite scrolling marquee */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-50 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-50 to-transparent z-10"></div>
              
              <div className="flex animate-marquee">
                {[
                  {
                    name: "Rajesh K. Sharma",
                    role: "Temple Trustee, Jaipur",
                    text: "The Ganesha moorti we commissioned is beyond words. The level of detail and the divine aura it radiates is truly exceptional."
                  },
                  {
                    name: "Anjali Mehta",
                    role: "Homeowner, Mumbai",
                    text: "I wanted a custom mandala for my meditation room. The team understood my vision perfectly and delivered a piece that transformed my home."
                  },
                  {
                    name: "Dr. Vikram Singh",
                    role: "Art Collector, Delhi",
                    text: "As a collector of traditional Indian art, I find Bappa Art Studio's work to be of the highest caliber. They maintain the soul of the craft."
                  },
                  {
                    name: "Priya Patel",
                    role: "Interior Designer, Bangalore",
                    text: "Working with Bappa Art Studio was a revelation. Their understanding of spiritual art combined with modern aesthetics is unmatched."
                  },
                  {
                    name: "Mahesh Joshi",
                    role: "Temple Committee, Udaipur",
                    text: "We commissioned 5 marble idols for our temple. The craftsmanship exceeded all expectations. Truly divine artistry."
                  },
                  {
                    name: "Sunita Rao",
                    role: "Spiritual Guide, Chennai",
                    text: "The Radha Krishna sculpture from Bappa Art Studio has become the centerpiece of our ashram. Its presence is deeply spiritual."
                  }
                ].map((testimonial, i) => (
                  <motion.div
                    key={`first-${i}`}
                    className="flex-shrink-0 w-[320px] md:w-[380px] p-6 mx-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="bg-white rounded-[2.5rem] shadow-sm border border-neutral-100 p-6 md:p-8 relative h-full">
                      <Quote className="text-accent/20 absolute top-6 right-6" size={40} />
                      <div className="flex gap-1 mb-4 text-accent">
                        {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                      </div>
                      <p className="text-neutral-600 italic mb-5 leading-relaxed text-sm md:text-base">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <h4 className="font-bold text-base">{testimonial.name}</h4>
                        <p className="text-neutral-400 text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
                {[
                  {
                    name: "Rajesh K. Sharma",
                    role: "Temple Trustee, Jaipur",
                    text: "The Ganesha moorti we commissioned is beyond words. The level of detail and the divine aura it radiates is truly exceptional."
                  },
                  {
                    name: "Anjali Mehta",
                    role: "Homeowner, Mumbai",
                    text: "I wanted a custom mandala for my meditation room. The team understood my vision perfectly and delivered a piece that transformed my home."
                  },
                  {
                    name: "Dr. Vikram Singh",
                    role: "Art Collector, Delhi",
                    text: "As a collector of traditional Indian art, I find Bappa Art Studio's work to be of the highest caliber. They maintain the soul of the craft."
                  },
                  {
                    name: "Priya Patel",
                    role: "Interior Designer, Bangalore",
                    text: "Working with Bappa Art Studio was a revelation. Their understanding of spiritual art combined with modern aesthetics is unmatched."
                  },
                  {
                    name: "Mahesh Joshi",
                    role: "Temple Committee, Udaipur",
                    text: "We commissioned 5 marble idols for our temple. The craftsmanship exceeded all expectations. Truly divine artistry."
                  },
                  {
                    name: "Sunita Rao",
                    role: "Spiritual Guide, Chennai",
                    text: "The Radha Krishna sculpture from Bappa Art Studio has become the centerpiece of our ashram. Its presence is deeply spiritual."
                  }
                ].map((testimonial, i) => (
                  <motion.div
                    key={`second-${i}`}
                    className="flex-shrink-0 w-[320px] md:w-[380px] p-6 mx-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="bg-white rounded-[2.5rem] shadow-sm border border-neutral-100 p-6 md:p-8 relative h-full">
                      <Quote className="text-accent/20 absolute top-6 right-6" size={40} />
                      <div className="flex gap-1 mb-4 text-accent">
                        {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                      </div>
                      <p className="text-neutral-600 italic mb-5 leading-relaxed text-sm md:text-base">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <h4 className="font-bold text-base">{testimonial.name}</h4>
                        <p className="text-neutral-400 text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <Reveal>
              <div className="mt-12 text-center px-4">
                <Link to="/testimonials" className="text-accent font-bold hover:underline inline-flex items-center gap-2">
                  Read More Stories <ArrowRight size={20} />
                </Link>
              </div>
            </Reveal>
          </section>

          {/* SECTION 9: GLOBAL SHIPPING & EXPORT TRUST */}
          <section className="py-16 px-6 bg-white" aria-labelledby="shipping-title">
            <div className="max-w-7xl mx-auto">
              <Reveal>
                <div className="text-center mb-16">
                  <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Worldwide Delivery</span>
                  <h2 id="shipping-title" className="text-4xl md:text-5xl font-bold mb-6">Shipping to 50+ Countries</h2>
                  <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                    From Jaipur to the world. We handle secure international packaging, customs, and logistics for worry-free delivery.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Reveal>
                  <div className="text-center p-8">
                    <div className="text-5xl mb-4">🌍</div>
                    <h3 className="text-xl font-bold mb-3">Global Reach</h3>
                    <p className="text-neutral-600">Safe delivery to North America, Europe, Middle East, Southeast Asia, and more.</p>
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="text-center p-8">
                    <div className="text-5xl mb-4">📦</div>
                    <h3 className="text-xl font-bold mb-3">Premium Packaging</h3>
                    <p className="text-neutral-600">Custom wooden crates and protective padding ensure your sculpture arrives perfect.</p>
                  </div>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="text-center p-8">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-xl font-bold mb-3">Customs Ready</h3>
                    <p className="text-neutral-600">All documentation prepared for seamless international customs clearance.</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* SECTION 10: FINAL CTA */}
          <section className="py-16 px-6">
            <Reveal>
              <div className="max-w-7xl mx-auto bg-accent rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-accent/20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
                
                <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-4xl md:text-6xl font-bold text-black mb-8 leading-tight">Bring Home a Masterpiece of Devotion</h2>
                  <p className="text-black/70 text-xl mb-12 font-medium">
                    Whether you need a custom moorti for your home, a grand installation for a temple, or restoration of a heritage piece, our artisans are ready to serve you with devotion and excellence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact" className="w-full sm:w-auto px-8 py-6 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform shadow-xl text-center">
                      Request Custom Sculpture
                    </Link>
                    <Link to="/products" className="w-full sm:w-auto px-8 py-6 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-xl text-center">
                      Browse Our Gallery
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
