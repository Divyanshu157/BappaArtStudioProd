import React from 'react';
import { motion } from 'motion/react';
import Layout from '@/src/components/layout/Layout';
import PageTransition from '@/src/components/layout/PageTransition';
import { Reveal } from '@/src/components/ui/Reveal';
import { Hammer, Sparkles, ShieldCheck, Heart, ArrowRight, Star, Zap } from 'lucide-react';

const SignatureCrafting = () => {
  const steps = [
    { 
      title: "Divine Vision", 
      desc: "Where the divine form takes shape — sketched with reverence and vision, adhering to sacred Vedic proportions.", 
      icon: <Sparkles size={32} /> 
    },
    { 
      title: "Sacred Selection", 
      desc: "Sacred stone chosen for purity, grain, and energy, handpicked from the most trusted quarries in Rajasthan.", 
      icon: <ShieldCheck size={32} /> 
    },
    { 
      title: "Master Carving", 
      desc: "Each curve and contour revealed with meditative precision by our senior artisans using traditional chisels.", 
      icon: <Hammer size={32} /> 
    },
    { 
      title: "The Final Glow", 
      desc: "Consecrated with Vedic rituals and polished to a divine radiance, ready to inspire devotion in its new home.", 
      icon: <Heart size={32} /> 
    }
  ];

  return (
    <Layout transparentNavbar>
      <PageTransition>
        <div className="min-h-screen flex flex-col">
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center justify-center text-center px-6 bg-neutral-900 pt-32 pb-12">
            <div className="absolute inset-0 bg-[url('/assets/images/banner3.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
            <div className="relative z-10 max-w-4xl">
              <Reveal>
                <span className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Our Process</span>
                <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8">Signature Crafting</h1>
                <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                  Discover the meticulous journey of how a raw block of marble is transformed into a radiant divine masterpiece.
                </p>
              </Reveal>
            </div>
          </section>

          {/* Process Steps */}
          <section className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <Reveal>
                <div className="text-center mb-24">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">The Sacred Journey</h2>
                  <p className="text-neutral-500 text-lg max-w-2xl mx-auto">A blend of spiritual devotion and technical mastery that has been refined over five decades.</p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {steps.map((step, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="text-center group h-full">
                      <div className="w-24 h-24 rounded-[2rem] bg-accent/10 flex items-center justify-center text-accent mx-auto mb-10 group-hover:bg-accent group-hover:text-black transition-all duration-500 shadow-lg shadow-accent/5">
                        {step.icon}
                      </div>
                      <div className="relative">
                        <span className="text-6xl font-serif font-bold text-neutral-100 absolute -top-10 left-1/2 -translate-x-1/2 -z-10">0{i + 1}</span>
                        <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                      </div>
                      <p className="text-neutral-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Detailed Crafting Section */}
          <section className="py-32 px-6 bg-neutral-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <Reveal direction="right">
                <div className="relative">
                  <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                    <img src="/assets/images/banner2.jpg" alt="Detailed Crafting" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10" />
                </div>
              </Reveal>
              <div className="space-y-10">
                <Reveal direction="left">
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight">Attention to the Smallest Detail</h2>
                  <p className="text-xl text-neutral-600 leading-relaxed">
                    Our signature crafting process is defined by what others might overlook. From the delicate curve of a finger to the serene expression in the eyes, we believe the divine is in the details.
                  </p>
                </Reveal>
                <div className="space-y-6">
                  {[
                    { title: "Traditional Tools", desc: "We still use hand-forged chisels for the most delicate work.", icon: <Hammer size={20} /> },
                    { title: "Natural Polishing", desc: "No harsh chemicals; we use traditional stones for a natural glow.", icon: <Star size={20} /> },
                    { title: "Spiritual Intent", desc: "Our artisans maintain a meditative state during the carving process.", icon: <Zap size={20} /> }
                  ].map((item, i) => (
                    <Reveal key={i} delay={i * 0.1} direction="left">
                      <div className="flex gap-6 p-6 bg-white rounded-3xl shadow-sm border border-neutral-100">
                        <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                          <p className="text-neutral-500 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-32 px-6 bg-accent text-black text-center">
            <div className="max-w-4xl mx-auto">
              <Reveal>
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Start Your Journey?</h2>
                <p className="text-black/70 text-xl mb-12 font-medium">
                  Let our master artisans guide you through the process of creating a bespoke divine sculpture for your sacred space.
                </p>
                <a href="/contact" className="px-12 py-6 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform inline-block shadow-xl">
                  Consult with an Artisan
                </a>
              </Reveal>
            </div>
          </section>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default SignatureCrafting;
