import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Youtube, MessageCircle, CheckCircle2 } from 'lucide-react';
import Layout from '@/src/components/layout/Layout';
import PageTransition from '@/src/components/layout/PageTransition';
import { Reveal } from '@/src/components/ui/Reveal';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <Layout transparentNavbar>
      <Helmet>
        <title>Contact Bappa Art Studio - Commission Custom Marble Sculptures</title>
        <meta name="description" content="Get in touch with Bappa Art Studio for custom marble sculptures. Commission divine art, heritage restoration, and premium sculptures from Jaipur, India." />
        <meta name="keywords" content="contact Bappa Art Studio, custom sculptures, commission art, marble sculptures, Jaipur" />
        <link rel="canonical" href="https://www.bappaartstudio.com/contact" />
      </Helmet>
      <PageTransition>
        <div className="min-h-screen bg-[#050505] text-white">
          <section className="relative overflow-hidden bg-[#080808]">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/contact-hero/1920/1080')] bg-cover bg-center opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
            <div className="relative z-10 px-6 py-24 lg:py-32">
              <div className="max-w-6xl mx-auto text-center">
                <Reveal>
                  <p className="text-sm uppercase tracking-[0.4em] text-orange-300 mb-6">Get in Touch</p>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">Bring Your Vision to Life</h1>
                  <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                    Commission your divine sculpture with Jaipur's master artisans. We create premium marble works for homes, temples, and collectors worldwide.
                  </p>
                </Reveal>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {[
                    'Custom Sizes',
                    'Premium Marble',
                    'Worldwide Shipping',
                    'Handcrafted Finish',
                  ].map((item) => (
                    <Reveal key={item} delay={0.2}>
                      <div className="rounded-[2rem] border border-white/10 bg-white/5 px-5 py-4 text-sm text-neutral-200">
                        {item}
                      </div>
                    </Reveal>
                  ))}
                </div>

                <Reveal delay={0.3}>
                  <div className="mt-10 flex justify-center">
                    <button
                      type="button"
                      onClick={() => document.getElementById('commission-form')?.scrollIntoView({ behavior: 'smooth' })}
                      className="rounded-full bg-orange-500 px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black shadow-xl shadow-orange-500/20 hover:bg-orange-400 transition"
                    >
                      Start Your Commission
                    </button>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          <section className="px-6 py-20 lg:py-24">
            <div className="max-w-7xl mx-auto">
              <div className="grid gap-6 xl:grid-cols-3">
                <Reveal direction="up">
                  <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.35em] text-orange-300 mb-4">Contact Details</p>
                    <h2 className="text-2xl font-semibold mb-6">Reach Our Studio</h2>
                    <div className="space-y-5 text-neutral-300">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-300">
                          <MapPin size={20} />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">Address</p>
                          <p className="mt-2 text-white font-medium">Khejron ka rasta, Chandpole bazar jaipur,302001</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-300">
                          <Phone size={20} />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">Phone</p>
                          <p className="mt-2 text-white font-medium">+91 76657 72090</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-300">
                          <Mail size={20} />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">Email</p>
                          <p className="mt-2 text-white font-medium">sharmapriyanshi584@gmail.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 flex items-center gap-3">
                      <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2] text-white hover:bg-blue-600 transition">
                        <Facebook size={18} />
                      </a>
                      <a href="https://www.instagram.com/bappa_arts/" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E1306C] text-white hover:bg-pink-500 transition">
                        <Instagram size={18} />
                      </a>
                      <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF0000] text-white hover:bg-red-600 transition">
                        <Youtube size={18} />
                      </a>
                    </div>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={0.1}>
                  <div className="rounded-[2.5rem] border border-white/10 bg-[#0f0f0f] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.35em] text-orange-300 mb-4">Talk to Our Studio</p>
                    <h2 className="text-2xl font-semibold text-white mb-4">Need a quick response?</h2>
                    <p className="text-neutral-400 leading-relaxed mb-8">Chat directly with our art consultants via WhatsApp for instant guidance and custom order support.</p>
                    <a href="https://wa.me/917665772090" target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-emerald-500 px-6 py-4 text-sm font-semibold text-black hover:bg-emerald-400 transition">
                      <MessageCircle size={18} />
                      WhatsApp us for instant quote
                    </a>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={0.2}>
                  <div className="rounded-[2.5rem] border border-white/10 bg-white/5 overflow-hidden shadow-2xl shadow-black/20 backdrop-blur-xl">
                    <div className="p-8">
                      <p className="text-xs uppercase tracking-[0.35em] text-orange-300 mb-4">Visit Our Studio</p>
                      <h2 className="text-2xl font-semibold text-white mb-4">Studio Map</h2>
                      <p className="text-neutral-400 leading-relaxed mb-6">Plan your visit to Jaipur studio and explore our marble craftsmanship in person.</p>
                    </div>
                    <div className="h-72 bg-black/50">
                      <iframe
                        title="studio-location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.4292246075!2d75.8113670778282!3d26.921603976641926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db1c03875a0d9%3A0xdd308243962bce8e!2sBappa%20art%20studio!5e0!3m2!1sen!2sin!4v1776077888290!5m2!1sen!2sin"
                        className="w-full h-full border-0"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="mt-16 grid gap-6 lg:grid-cols-[1.35fr_0.95fr] items-start">
                <Reveal direction="up" delay={0.1}>
                  <div id="commission-form" className="rounded-[3rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.35em] text-orange-300 mb-4">Send Your Request</p>
                    <h2 className="text-3xl font-semibold text-white mb-6">Tell us about your sculpture</h2>
                    <p className="text-neutral-400 leading-relaxed mb-10">Share your vision, preferred marble, size and timeline for a handcrafted quote from our senior artisans.</p>

                    <AnimatePresence mode="wait">
                      {isSubmitted ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="rounded-[2rem] bg-black/60 p-8 text-center"
                        >
                          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
                            <CheckCircle2 size={40} />
                          </div>
                          <h3 className="text-2xl font-semibold text-white">Request Sent</h3>
                          <p className="mt-3 text-neutral-400">Thank you for your request. Our team will connect with you soon.</p>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                          <div className="grid gap-5 md:grid-cols-2">
                            <input
                              required
                              type="text"
                              placeholder="Full Name"
                              className="rounded-[1.75rem] border border-white/10 bg-black/30 px-5 py-4 text-white placeholder:text-neutral-500 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10"
                            />
                            <input
                              required
                              type="tel"
                              placeholder="Phone Number"
                              className="rounded-[1.75rem] border border-white/10 bg-black/30 px-5 py-4 text-white placeholder:text-neutral-500 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10"
                            />
                          </div>
                          <div className="grid gap-5 md:grid-cols-2">
                            <input
                              required
                              type="email"
                              placeholder="Email Address"
                              className="rounded-[1.75rem] border border-white/10 bg-black/30 px-5 py-4 text-white placeholder:text-neutral-500 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10"
                            />
                            <select className="rounded-[1.75rem] border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10">
                              <option>Material Preference</option>
                              <option>White Marble</option>
                              <option>Black Marble</option>
                              <option>Traditional Sandstone</option>
                            </select>
                          </div>
                          <textarea
                            required
                            rows={5}
                            placeholder="Describe your sculpture idea, dimensions, location..."
                            className="w-full rounded-[1.75rem] border border-white/10 bg-black/30 px-5 py-4 text-white placeholder:text-neutral-500 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 resize-none"
                          />
                          <button
                            disabled={isSubmitting}
                            type="submit"
                            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-black shadow-xl shadow-orange-500/20 transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-70"
                          >
                            {isSubmitting ? 'Sending...' : 'Send Request'}
                            <Send size={18} />
                          </button>
                        </form>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={0.2}>
                  <div className="rounded-[3rem] border border-white/10 bg-white/5 overflow-hidden shadow-2xl shadow-black/20 backdrop-blur-xl">
                    <div className="relative h-full min-h-[28rem]">
                      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/sculpture-art/800/1200')] bg-cover bg-center" />
                      <div className="absolute inset-0 bg-black/50" />
                      <div className="relative p-8 h-full flex flex-col justify-between">
                        <div>
                          <span className="text-xs uppercase tracking-[0.35em] text-orange-300">Studio Preview</span>
                          <h3 className="mt-4 text-3xl font-semibold text-white">Studio Craftsmanship</h3>
                          <p className="mt-4 text-neutral-300 leading-relaxed">Experience handcrafted marble sculptures made by Jaipur artisans with decades of expertise.</p>
                        </div>
                        <a href="#commission-form" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-neutral-200 transition">
                          Send Request
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default Contact;
