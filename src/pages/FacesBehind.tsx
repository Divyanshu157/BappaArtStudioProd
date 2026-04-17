import React from 'react';
import { motion } from 'motion/react';
import Layout from '@/src/components/layout/Layout';
import PageTransition from '@/src/components/layout/PageTransition';
import { Reveal } from '@/src/components/ui/Reveal';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const FacesBehind = () => {
  const artisans = [
    {
      name: "Chandra Prakash Sharma",
      role: "Chief Sculptor & Founder",
      image: "https://picsum.photos/seed/f1/600/800",
      desc: "With over 30 years of experience, Chandra Prakash ji is the visionary behind Bappa Art Studio. He sculpts each murti with divine precision and heartfelt devotion, ensuring every piece carries a soul."
    },
    {
      name: "Priyanshu Sharma",
      role: "Lead Painter & Detailer",
      image: "/assets/images/Priyanshu.png",
      desc: "Priyanshu specializes in traditional colors and intricate detailing. He transforms raw marble sculptures into vibrant expressions of divinity, bringing life to the eyes and grace to the form."
    },
    {
      name: "Divyanshu Sharma",
      role: "Finishing Specialist & Operations",
      image: "/assets/images/Divyanshu.png",
      desc: "From the final polish to ensuring the studio's legacy reaches the world, Divyanshu manages the delicate balance between ancient craft and modern presentation. He ensures each moorti is pristine."
    }
  ];

  return (
    <Layout transparentNavbar>
      <PageTransition>
        <div className="min-h-screen flex flex-col bg-neutral-50">
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center justify-center text-center px-6 bg-neutral-900 pt-32 pb-12">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/artisans-hero/1920/1080')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
            <div className="relative z-10 max-w-4xl">
              <Reveal>
                <span className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-6 block">The Artisans</span>
                <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8">The Faces Behind</h1>
                <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                  Meet the hands and hearts that have been shaping divine art at Bappa Art Studio since 2011, carrying forward a 50-year family legacy.
                </p>
              </Reveal>
            </div>
          </section>

          {/* Artisans Grid */}
          <section className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                {artisans.map((artisan, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="group">
                      <div className="relative aspect-[5/6] max-h-[22rem] rounded-[3rem] overflow-hidden shadow-2xl mb-10 group-hover:scale-[1.02] transition-transform duration-500">
                        <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                          <div className="flex gap-4">
                          <a href="https://www.instagram.com/bappa_arts/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent hover:text-black transition-all">
                              <Instagram size={20} className="text-[#E1306C]" />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent hover:text-black transition-all">
                              <Linkedin size={20} className="text-[#0A66C2]" />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent hover:text-black transition-all">
                              <Mail size={20} />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="px-4">
                        <h3 className="text-3xl font-bold mb-2 group-hover:text-accent transition-colors">{artisan.name}</h3>
                        <p className="text-accent font-bold text-xs uppercase tracking-[0.2em] mb-6">{artisan.role}</p>
                        <p className="text-neutral-500 text-lg leading-relaxed">{artisan.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Studio Culture Section */}
          <section className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <Reveal direction="right">
                <div className="order-2 lg:order-1">
                  <h2 className="text-4xl font-bold mb-8">Our Studio Culture</h2>
                  <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                    At Bappa Art Studio, we believe that the environment in which a divine sculpture is created matters. Our studio is a place of peace, devotion, and continuous learning.
                  </p>
                  <ul className="space-y-6">
                    {[
                      "Daily meditation and prayers before starting work.",
                      "Apprenticeship model to preserve traditional skills.",
                      "Commitment to ethical sourcing and artisan welfare.",
                      "A collaborative space where every hand contributes to the divine."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-neutral-700 font-medium">
                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal direction="left">
                <div className="order-1 lg:order-2 relative">
                  <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                    <img src="https://picsum.photos/seed/studio-culture/800/600" alt="Studio Culture" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10" />
                </div>
              </Reveal>
            </div>
          </section>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default FacesBehind;
