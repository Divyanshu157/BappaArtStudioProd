import React from 'react';
import { motion } from 'motion/react';
import Layout from '@/src/components/layout/Layout';
import PageTransition from '@/src/components/layout/PageTransition';
import { Reveal } from '@/src/components/ui/Reveal';
import { History, Sparkles, ShieldCheck, Heart } from 'lucide-react';

const HeritageRestoration = () => {
  return (
    <Layout transparentNavbar>
      <PageTransition>
        <div className="min-h-screen flex flex-col">
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center justify-center text-center px-6 bg-neutral-900 pt-32 pb-12">
            <div className="absolute inset-0 bg-[url('/assets/images/banner3.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
            <div className="relative z-10 max-w-4xl">
              <Reveal>
                <span className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Preserving History</span>
                <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8">Heritage Restoration</h1>
                <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
                  Restoring the divine glow to ancient sculptures with reverence and technical mastery.
                </p>
              </Reveal>
            </div>
          </section>

          {/* Restoration Services */}
          <section className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <Reveal direction="right">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Giving New Life to Sacred Artifacts</h2>
                    <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                      Over time, even the most resilient marble can lose its luster or suffer damage. Our restoration service is dedicated to bringing back the original beauty of your cherished sculptures without compromising their historical or spiritual integrity.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Surface Cleaning", desc: "Removing decades of dust, oils, and environmental buildup." },
                        { title: "Structural Repair", desc: "Mending cracks and chips using compatible marble resins." },
                        { title: "Detail Re-carving", desc: "Carefully restoring lost features while matching the original style." },
                        { title: "Traditional Polishing", desc: "Achieving a natural, divine glow using ancient techniques." }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 mt-1">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg">{item.title}</h4>
                            <p className="text-neutral-500">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
                <Reveal direction="left">
                  <div className="relative">
                    <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                      <img src="/assets/images/banner2.jpg" alt="Restoration Detail" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Restoration Process */}
          <section className="py-32 px-6 bg-neutral-50">
            <div className="max-w-7xl mx-auto">
              <Reveal>
                <div className="text-center mb-24">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Restoration Process</h2>
                  <p className="text-neutral-500 text-lg max-w-2xl mx-auto">A delicate balance of science and art, performed with the utmost respect for the artifact.</p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {[
                  { icon: <History size={32} />, title: "Assessment", desc: "Detailed study of the material, damage, and historical context." },
                  { icon: <ShieldCheck size={32} />, title: "Stabilization", desc: "Ensuring the sculpture is structurally sound before work begins." },
                  { icon: <Sparkles size={32} />, title: "Restoration", desc: "The meticulous work of cleaning, repairing, and refining." },
                  { icon: <Heart size={32} />, title: "Preservation", desc: "Applying protective finishes to ensure long-lasting beauty." }
                ].map((step, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="text-center group h-full">
                      <div className="w-20 h-20 rounded-[2rem] bg-white shadow-sm flex items-center justify-center text-accent mx-auto mb-8 group-hover:bg-accent group-hover:text-black transition-all duration-500">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                      <p className="text-neutral-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-32 px-6 bg-accent text-black text-center">
            <div className="max-w-4xl mx-auto">
              <Reveal>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Does Your Sacred Art Need Care?</h2>
                <p className="text-black/70 text-xl mb-12 font-medium leading-relaxed">
                  Consult with our master restorers to discuss how we can preserve your family or temple heritage for generations to come.
                </p>
                <a href="/contact" className="px-12 py-6 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform inline-block shadow-xl">
                  Request a Consultation
                </a>
              </Reveal>
            </div>
          </section>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default HeritageRestoration;
