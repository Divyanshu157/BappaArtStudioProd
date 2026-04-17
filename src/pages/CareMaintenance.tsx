import React from 'react';
import { motion } from 'motion/react';
import Layout from '@/src/components/layout/Layout';
import PageTransition from '@/src/components/layout/PageTransition';
import { Reveal } from '@/src/components/ui/Reveal';
import { Droplets, Sun, Wind, ShieldCheck } from 'lucide-react';

const CareMaintenance = () => {
  const tips = [
    {
      icon: <Droplets className="text-accent" size={32} />,
      title: "Cleaning",
      desc: "Use a soft, damp cloth with plain water for regular dusting. For deeper cleaning, use a pH-neutral stone cleaner. Avoid acidic substances like lemon or vinegar."
    },
    {
      icon: <Sun className="text-accent" size={32} />,
      title: "Placement",
      desc: "While marble is durable, prolonged direct sunlight can affect some pigments in painted moortis. Place your sacred art in a well-ventilated, shaded area if possible."
    },
    {
      icon: <Wind className="text-accent" size={32} />,
      title: "Environment",
      desc: "Keep the sculpture away from extreme temperature fluctuations and high humidity to prevent moisture absorption and potential surface staining."
    },
    {
      icon: <ShieldCheck className="text-accent" size={32} />,
      title: "Protection",
      desc: "Avoid using harsh chemicals, abrasive pads, or metal scrapers. If the moorti is used for 'Abhishek', ensure it is dried thoroughly with a soft cotton cloth immediately after."
    }
  ];

  return (
    <Layout transparentNavbar>
      <PageTransition>
        <div className="min-h-screen flex flex-col">
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center justify-center text-center px-6 bg-neutral-900 pt-32 pb-12">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/care/1920/1080')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
            <div className="relative z-10 max-w-4xl">
              <Reveal>
                <span className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Preservation</span>
                <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8">Care & Maintenance</h1>
                <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
                  Ensuring your divine masterpiece remains radiant for generations to come.
                </p>
              </Reveal>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
                <Reveal direction="right">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">The Longevity of Marble</h2>
                  <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                    Marble is a natural, porous stone that breathes. While it is incredibly strong and has survived for millennia in ancient temples, it requires mindful care to maintain its pristine 'divine glow'.
                  </p>
                  <p className="text-xl text-neutral-600 leading-relaxed">
                    At Bappa Art Studio, we use high-quality Makrana marble which is known for its low porosity, but following these simple guidelines will help preserve the intricate details and finish of your sculpture.
                  </p>
                </Reveal>
                <Reveal direction="left">
                  <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                    <img src="https://picsum.photos/seed/marble-detail/800/1000" alt="Marble Detail" className="w-full h-full object-cover" />
                  </div>
                </Reveal>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {tips.map((tip, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="p-12 bg-neutral-50 rounded-[3rem] border border-neutral-100 h-full group hover:bg-white hover:shadow-2xl transition-all duration-500">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform">
                        {tip.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{tip.title}</h3>
                      <p className="text-neutral-600 text-lg leading-relaxed">{tip.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Professional Restoration CTA */}
          <section className="py-32 px-6 bg-neutral-900 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Need Professional Care?</h2>
                <p className="text-neutral-400 text-xl mb-12 leading-relaxed">
                  If your heritage sculpture has significant staining, chips, or has lost its luster over decades, our master restorers can help bring it back to its original glory.
                </p>
                <a href="/heritage-restoration" className="px-12 py-6 bg-accent text-black font-bold rounded-full hover:scale-105 transition-transform inline-block shadow-xl">
                  Explore Restoration Services
                </a>
              </Reveal>
            </div>
          </section>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default CareMaintenance;
