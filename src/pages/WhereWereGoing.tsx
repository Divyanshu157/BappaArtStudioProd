import React from 'react';
import { motion } from 'motion/react';
import Layout from '@/src/components/layout/Layout';
import PageTransition from '@/src/components/layout/PageTransition';
import { Reveal } from '@/src/components/ui/Reveal';
import { Globe, Zap, Users, TrendingUp } from 'lucide-react';

const WhereWereGoing = () => {
  return (
    <Layout transparentNavbar>
      <PageTransition>
        <div className="min-h-screen flex flex-col">
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center justify-center text-center px-6 bg-neutral-900 pt-32 pb-12">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/future/1920/1080')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
            <div className="relative z-10 max-w-4xl">
              <Reveal>
                <span className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Our Vision</span>
                <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8">Where We're Going</h1>
                <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
                  Expanding the reach of traditional artistry to the global stage while staying rooted in our heritage.
                </p>
              </Reveal>
            </div>
          </section>

          {/* Future Roadmap */}
          <section className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <Reveal>
                <div className="text-center mb-24">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">The Path Ahead</h2>
                  <p className="text-neutral-500 text-lg max-w-2xl mx-auto">Our journey is one of continuous evolution, blending timeless craftsmanship with modern accessibility.</p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  {
                    icon: <Globe size={32} className="text-accent" />,
                    title: "Global Presence",
                    desc: "We aim to bring the beauty of Indian marble artistry to spiritual spaces and homes across every continent, establishing Bappa Art Studio as a global benchmark for quality."
                  },
                  {
                    icon: <Zap size={32} className="text-accent" />,
                    title: "Digital Innovation",
                    desc: "Leveraging technology to provide immersive 3D previews and virtual studio tours, allowing clients to witness the creation of their masterpieces from anywhere in the world."
                  },
                  {
                    icon: <Users size={32} className="text-accent" />,
                    title: "Artisan Empowerment",
                    desc: "Expanding our training programs to mentor the next generation of sculptors, ensuring that these rare skills are not only preserved but elevated."
                  },
                  {
                    icon: <TrendingUp size={32} className="text-accent" />,
                    title: "Sustainable Growth",
                    desc: "Implementing even more eco-friendly sourcing and production methods, ensuring our growth respects the natural resources that make our art possible."
                  }
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="p-12 bg-neutral-50 rounded-[3rem] border border-neutral-100 group hover:bg-white hover:shadow-2xl transition-all duration-500 h-full">
                      <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                      <p className="text-neutral-600 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Future Vision Image Section */}
          <section className="py-32 px-6 bg-neutral-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <Reveal direction="right">
                <div className="relative">
                  <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                    <img src="https://picsum.photos/seed/vision-future/800/800" alt="Future Vision" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
                </div>
              </Reveal>
              <Reveal direction="left">
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-6xl font-bold leading-tight">A Legacy for the Next Century</h2>
                  <p className="text-xl text-neutral-400 leading-relaxed">
                    Our goal is not just to grow, but to deepen the impact of our art. We envision a future where every spiritual space is graced by the serene presence of a Bappa Art Studio masterpiece.
                  </p>
                  <div className="pt-8">
                    <a href="/contact" className="px-10 py-5 bg-accent text-black font-bold rounded-full hover:scale-105 transition-transform inline-block shadow-xl">
                      Join Our Vision
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default WhereWereGoing;
