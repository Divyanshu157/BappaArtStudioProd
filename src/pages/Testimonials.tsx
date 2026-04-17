import React from 'react';
import { motion } from 'motion/react';
import Layout from '@/src/components/layout/Layout';
import PageTransition from '@/src/components/layout/PageTransition';
import { Reveal } from '@/src/components/ui/Reveal';
import { Star, Quote, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh K. Sharma",
    role: "Temple Trustee, Jaipur",
    text: "The Ganesha moorti we commissioned is beyond words. The level of detail and the divine aura it radiates is truly exceptional. Bappa Art Studio is a gem.",
    image: "https://picsum.photos/seed/t1/200/200"
  },
  {
    name: "Anjali Mehta",
    role: "Homeowner, Mumbai",
    text: "I wanted a custom mandala for my meditation room. The team understood my vision perfectly and delivered a piece that has transformed the energy of my home.",
    image: "https://picsum.photos/seed/t2/200/200"
  },
  {
    name: "Dr. Vikram Singh",
    role: "Art Collector, Delhi",
    text: "As a collector of traditional Indian art, I find Bappa Art Studio's work to be of the highest caliber. They maintain the soul of the craft in every piece.",
    image: "https://picsum.photos/seed/t3/200/200"
  },
  {
    name: "Sanjay Singhania",
    role: "Architect, Bangalore",
    text: "Working with Bappa Art Studio on our latest temple project was a seamless experience. Their understanding of architectural scale and Vastu is commendable.",
    image: "https://picsum.photos/seed/t4/200/200"
  },
  {
    name: "Priya Das",
    role: "Interior Designer, Kolkata",
    text: "The finishing on their marble portraits is incredibly lifelike. My clients were moved to tears by the sculpture of their late grandfather.",
    image: "https://picsum.photos/seed/t5/200/200"
  },
  {
    name: "Amitabh Bachchan (Fan)",
    role: "Collector, Mumbai",
    text: "The quality of Makrana marble they use is superior. The translucency and the 'glow' are exactly what you expect from world-class artisans.",
    image: "https://picsum.photos/seed/t6/200/200"
  }
];

const Testimonials = () => {
  return (
    <Layout transparentNavbar>
      <PageTransition>
        <div className="min-h-screen flex flex-col bg-neutral-50">
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center justify-center text-center px-6 bg-neutral-900 pt-32 pb-12">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/testimonials-hero/1920/1080')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
            <div className="relative z-10 max-w-4xl">
              <Reveal>
                <span className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Client Stories</span>
                <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8">Voices of Devotion</h1>
                <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
                  Real stories from those who have brought a piece of Bappa Art into their lives.
                </p>
              </Reveal>
            </div>
          </section>

          {/* Testimonials Grid */}
          <section className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {testimonials.map((testimonial, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-neutral-100 relative h-full flex flex-col">
                      <Quote className="text-accent/10 absolute top-10 right-10" size={64} />
                      <div className="flex gap-1 mb-8 text-accent">
                        {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                      </div>
                      <p className="text-neutral-600 italic mb-10 leading-relaxed text-xl flex-grow">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent/20">
                          <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-neutral-400 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Share Your Story CTA */}
          <section className="py-32 px-6 bg-white text-center">
            <div className="max-w-4xl mx-auto">
              <Reveal>
                <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center text-accent mx-auto mb-10">
                  <MessageSquare size={40} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Have a Story to Share?</h2>
                <p className="text-neutral-500 text-xl mb-12 leading-relaxed">
                  We are humbled by the connection our clients feel with their sculptures. If you'd like to share your experience with Bappa Art Studio, we'd love to hear from you.
                </p>
                <a href="/contact" className="px-12 py-6 bg-neutral-900 text-white font-bold rounded-full hover:bg-accent hover:text-black transition-all inline-block shadow-xl">
                  Send Us Your Feedback
                </a>
              </Reveal>
            </div>
          </section>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default Testimonials;
