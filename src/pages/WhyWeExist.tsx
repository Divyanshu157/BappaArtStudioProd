import React from 'react';
import { motion } from 'motion/react';
import Layout from '@/src/components/layout/Layout';
import PageTransition from '@/src/components/layout/PageTransition';
import { Reveal } from '@/src/components/ui/Reveal';
import { Heart, Sparkles, Shield, Star } from 'lucide-react';

const WhyWeExist = () => {
  return (
    <Layout transparentNavbar>
      <PageTransition>
        <div className="min-h-screen flex flex-col">
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center justify-center text-center px-6 bg-neutral-900 pt-32 pb-12">
            <div className="absolute inset-0 bg-[url('/assets/images/banner3.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
            <div className="relative z-10 max-w-4xl">
              <Reveal>
                <span className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Our Purpose</span>
                <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8">Why We Exist</h1>
                <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
                  To bridge the gap between the earthly and the divine through the timeless medium of marble.
                </p>
              </Reveal>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <Reveal direction="right">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Preserving the Sacred Art of Sculpting</h2>
                    <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                      In a world of mass production, Bappa Art Studio exists to preserve the sanctity of handcrafted spiritual art. We believe that a divine sculpture is not just an object, but a vessel for devotion.
                    </p>
                    <p className="text-xl text-neutral-600 leading-relaxed">
                      Our mission is to ensure that the ancient techniques of marble carving continue to thrive, providing seekers with authentic, soul-stirring representations of the divine.
                    </p>
                  </div>
                </Reveal>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { icon: <Heart className="text-accent" />, title: "Devotion", desc: "Every stroke is an act of prayer." },
                    { icon: <Sparkles className="text-accent" />, title: "Authenticity", desc: "Honoring traditional Vedic forms." },
                    { icon: <Shield className="text-accent" />, title: "Legacy", desc: "Carrying forward 50 years of skill." },
                    { icon: <Star className="text-accent" />, title: "Excellence", desc: "Uncompromising quality in every piece." }
                  ].map((item, i) => (
                    <Reveal key={i} delay={i * 0.1} direction="left">
                      <div className="p-8 bg-neutral-50 rounded-[2rem] border border-neutral-100 h-full">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
                          {item.icon}
                        </div>
                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Philosophy Quote */}
          <section className="py-32 px-6 bg-neutral-950 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-5" />
            <div className="max-w-4xl mx-auto relative z-10">
              <Reveal>
                <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-8 block">The Bappa Philosophy</span>
                <blockquote className="text-3xl md:text-5xl font-serif italic leading-tight mb-12">
                  "We don't just carve stone; we reveal the divinity that already resides within it. Our hands are merely instruments of a higher vision."
                </blockquote>
                <div className="w-20 h-1 bg-accent mx-auto" />
              </Reveal>
            </div>
          </section>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default WhyWeExist;
