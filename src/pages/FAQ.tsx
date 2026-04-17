import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Layout from '@/src/components/layout/Layout';
import PageTransition from '@/src/components/layout/PageTransition';
import { Reveal } from '@/src/components/ui/Reveal';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to carve a custom moorti?",
    answer: "The timeline depends on the size and complexity. Typically, a standard 2-foot moorti takes 4-6 weeks, while larger temple installations can take 3-6 months. We prioritize quality and spiritual precision over speed."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship our masterpieces worldwide. We use specialized wooden crate packaging and moisture-proof wrapping to ensure the sculpture reaches you in pristine condition. We handle all logistics and insurance."
  },
  {
    question: "What type of marble do you use?",
    answer: "We primarily use premium Makrana Marble (the same used for the Taj Mahal) and high-quality Sangemarmar. These are chosen for their purity, durability, and the beautiful translucent 'glow' they exhibit when polished."
  },
  {
    question: "Can I customize the features and ornaments of the moorti?",
    answer: "Absolutely. Every custom commission begins with a detailed consultation. You can specify the posture, facial expression, ornaments, and even the specific Vedic iconography you wish to incorporate."
  },
  {
    question: "Do you provide Vastu consultation for placement?",
    answer: "While we are master artisans, we have deep knowledge of traditional Vastu principles for moorti placement. We can guide you on the ideal direction and height for your sacred art within your home or temple."
  },
  {
    question: "Is it possible to restore an old, damaged moorti?",
    answer: "Yes, we have a specialized Heritage Restoration team. We can repair chips, remove deep stains, and re-carve lost details while maintaining the original soul and style of the piece."
  }
];

const FAQItem = ({ question, answer, index }: { question: string, answer: string, index: number, key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Reveal delay={index * 0.05}>
      <div className="border-b border-neutral-200">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-8 flex justify-between items-center text-left group cursor-pointer"
        >
          <span className="text-xl md:text-2xl font-bold text-neutral-800 group-hover:text-accent transition-colors">{question}</span>
          <ChevronDown className={`text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : ''}`} size={24} />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="pb-8 text-lg text-neutral-600 leading-relaxed max-w-4xl">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
};

const FAQ = () => {
  return (
    <Layout transparentNavbar>
      <PageTransition>
        <div className="min-h-screen flex flex-col bg-neutral-50">
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center justify-center text-center px-6 pt-32 pb-12">
            <div className="absolute inset-0 bg-neutral-900" />
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative z-10 max-w-4xl">
              <Reveal>
                <span className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Assistance</span>
                <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8">Frequently Asked Questions</h1>
              </Reveal>
            </div>
          </section>

          {/* FAQ List */}
          <section className="py-32 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="mb-20 text-center">
                <HelpCircle className="text-accent mx-auto mb-6" size={48} />
                <h2 className="text-3xl font-bold mb-4">Common Inquiries</h2>
                <p className="text-neutral-500 text-lg">Everything you need to know about commissioning and owning a Bappa Art masterpiece.</p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} index={i} {...faq} />
                ))}
              </div>

              <div className="mt-24 p-12 bg-neutral-50 rounded-[3rem] text-center border border-neutral-100">
                <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                <p className="text-neutral-600 text-lg mb-8">Our team is here to help you with any specific requirements or doubts.</p>
                <a href="/contact" className="px-10 py-5 bg-neutral-900 text-white font-bold rounded-full hover:bg-accent hover:text-black transition-all shadow-lg">
                  Contact Support
                </a>
              </div>
            </div>
          </section>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default FAQ;
