import React from 'react';
import { motion } from 'motion/react';
import Layout from '@/src/components/layout/Layout';
import PageTransition from '@/src/components/layout/PageTransition';
import { Reveal } from '@/src/components/ui/Reveal';
import { Target, Shield, Zap, Users, Leaf, Quote } from 'lucide-react';

const VisionValues = () => {
  return (
    <Layout transparentNavbar>
      <PageTransition>
        <div className="min-h-screen flex flex-col">
          {/* Hero Section */}
          <section className="relative min-h-[70vh] flex items-center justify-center text-center px-6 bg-neutral-900 pt-32 pb-12">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/vision-hero/1920/1080')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
            <div className="relative z-10 max-w-4xl">
              <Reveal>
                <span className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Our Philosophy</span>
                <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8">Vision & Values</h1>
                <p className="text-xl md:text-2xl text-white/80 italic font-serif">
                  "Crafting Divine Artistry Since 2011"
                </p>
              </Reveal>
            </div>
          </section>

          {/* Vision Section */}
          <section className="py-32 px-6 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-5" />
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <Reveal>
                <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center text-accent mx-auto mb-10">
                  <Target size={40} />
                </div>
                <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-8">Our Vision</h2>
                <p className="text-3xl md:text-5xl text-neutral-800 leading-tight font-serif italic relative">
                  <Quote className="absolute -top-10 -left-10 text-accent/10" size={80} />
                  "To be the most revered name in spiritual and artistic moorti creation, 
                  where each sculpture is a soulful blend of heritage and creativity."
                </p>
              </Reveal>
            </div>
          </section>

          {/* Values Grid */}
          <section className="py-32 px-6 bg-neutral-50">
            <div className="max-w-7xl mx-auto">
              <Reveal>
                <div className="text-center mb-24">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
                  <p className="text-neutral-500 text-lg max-w-2xl mx-auto">The principles that guide every chisel stroke and every interaction at Bappa Art Studio.</p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                  { 
                    title: "Craftsmanship", 
                    desc: "We believe in the power of the human hand. Every piece is handcrafted with unwavering devotion and technical finesse.",
                    icon: <Zap size={32} />
                  },
                  { 
                    title: "Integrity", 
                    desc: "Rooted in honesty and respect for tradition. We use only authentic materials and honor sacred Vedic proportions.",
                    icon: <Shield size={32} />
                  },
                  { 
                    title: "Innovation", 
                    desc: "While we respect the past, we embrace the future. We blend classic skills with modern styles to create timeless art.",
                    icon: <Target size={32} />
                  },
                  { 
                    title: "Client Focus", 
                    desc: "We don't just sell sculptures; we build relationships. We value your custom needs and spiritual vision above all.",
                    icon: <Users size={32} />
                  },
                  { 
                    title: "Sustainability", 
                    desc: "We are mindful of our impact. We use eco-friendly practices and source materials from responsible quarries.",
                    icon: <Leaf size={32} />
                  },
                  { 
                    title: "Legacy", 
                    desc: "We are custodians of a 50-year heritage, dedicated to passing this divine art form to future generations.",
                    icon: <Quote size={32} />
                  }
                ].map((value, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="p-12 bg-white rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100 group h-full">
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform">
                        {value.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{value.title}</h3>
                      <p className="text-neutral-500 leading-relaxed">{value.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-32 px-6 bg-neutral-900 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Join Our Journey</h2>
                <p className="text-neutral-400 text-xl mb-12 leading-relaxed">
                  Experience the fusion of ancient tradition and modern artistry. Let us help you bring a piece of divinity into your sacred space.
                </p>
                <a href="/contact" className="px-12 py-6 bg-accent text-black font-bold rounded-full hover:scale-105 transition-transform inline-block shadow-xl">
                  Start Your Commission
                </a>
              </Reveal>
            </div>
          </section>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default VisionValues;
