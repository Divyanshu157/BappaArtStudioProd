import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCTS } from '@/src/data';
import { ArrowLeft, CheckCircle2, Mail, Phone, MessageCircle, Share2, Calendar, MapPin, User, Shield, ArrowRight } from 'lucide-react';
import Layout from '@/src/components/layout/Layout';
import PageTransition from '@/src/components/layout/PageTransition';
import { Reveal } from '@/src/components/ui/Reveal';

const ProductDetails = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === Number(id));

  const handleShare = () => {
    const shareData = {
      title: product?.title || 'Bappa Art Studio',
      text: product ? `Check out this masterpiece: ${product.title}` : 'Discover beautiful marble art.',
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(() => {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard.');
      });
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard.');
    } else {
      alert('Share is not supported in this browser.');
    }
  };

  const handleRequestQuote = () => {
    const subject = encodeURIComponent(`Formal Quote Request: ${product?.title ?? 'Artwork'}`);
    const body = encodeURIComponent(`Hello,%0D%0A%0D%0AI would like a formal quote for the following artwork:%0D%0A${product?.title ?? ''}%0D%0A${window.location.href}%0D%0A%0D%0APlease send pricing and delivery details.%0D%0A%0D%0AThank you.`);
    window.location.href = `mailto:info@bappaartstudio.com?subject=${subject}&body=${body}`;
  };

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    const others = PRODUCTS.filter(p => p.id !== product.id);
    for (let i = others.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [others[i], others[j]] = [others[j], others[i]];
    }
    return others.slice(0, 4);
  }, [product?.id]);

  if (!product) return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Masterpiece Not Found</h2>
          <Link to="/products" className="text-accent font-bold hover:underline">Return to Gallery</Link>
        </div>
      </div>
    </Layout>
  );

  return (
    <Layout transparentNavbar>
      <PageTransition>
        <div className="min-h-screen bg-white flex flex-col">
          {/* Hero Section for Product */}
          <section className="relative min-h-[35vh] md:min-h-[45vh] w-full overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center scale-105 blur-sm opacity-30"
              style={{ backgroundImage: `url(${product.imageUrl})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-white" />
            
            <div className="relative z-10 min-h-[35vh] md:min-h-[45vh] max-w-7xl mx-auto px-6 flex flex-col justify-between py-16 md:py-20">
              <Link to="/products" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-bold group">
                <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" /> Back to Gallery
              </Link>
              <Reveal>
                <div className="mt-8">
                  <span className="px-4 py-2 bg-accent text-black text-[10px] font-bold rounded-full uppercase tracking-[0.2em] mb-4 inline-block">
                    {product.category}
                  </span>
                  <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 text-shadow">{product.title}</h1>
                </div>
              </Reveal>
            </div>
          </section>

          <section className="py-8 md:py-10 px-6 -mt-16 md:-mt-10 relative z-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Image Gallery */}
                <div className="lg:col-span-7 flex flex-col h-full">
                  <Reveal direction="right">
                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-6 border border-neutral-100 aspect-[4/5] lg:aspect-[3/4] max-h-[38rem]">
                      <img 
                        src={product.imageUrl} 
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Reveal>
                  <div className="grid grid-cols-4 gap-6 mt-auto">
                    {relatedProducts.map((related, i) => (
                      <Reveal key={related.id} delay={i * 0.1} direction="right">
                        <Link to={`/products/${related.id}`}>
                          <motion.div 
                            whileHover={{ y: -5 }}
                            className="aspect-square rounded-2xl overflow-hidden border-2 border-neutral-100 hover:border-accent cursor-pointer transition-all shadow-sm"
                          >
                            <img src={related.imageUrl} alt={related.title} className="w-full h-full object-cover" />
                          </motion.div>
                        </Link>
                      </Reveal>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="lg:col-span-5 space-y-12">
                  <Reveal direction="left">
                    <div>
                      <h3 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">The Story</h3>
                      <p className="text-2xl text-neutral-700 leading-relaxed font-serif italic">
                        "{product.story}"
                      </p>
                    </div>
                  </Reveal>

                  <Reveal direction="left" delay={0.1}>
                    <div className="grid grid-cols-2 gap-8 p-10 bg-neutral-50 rounded-[2.5rem] border border-neutral-100">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-neutral-400 mb-1">
                          <MapPin size={14} />
                          <h4 className="text-[10px] uppercase tracking-wider font-bold">Dimensions</h4>
                        </div>
                        <p className="font-bold text-lg">{product.dimensions}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-neutral-400 mb-1">
                          <Shield size={14} />
                          <h4 className="text-[10px] uppercase tracking-wider font-bold">Materials</h4>
                        </div>
                        <p className="font-bold text-lg">{product.materials}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-neutral-400 mb-1">
                          <Calendar size={14} />
                          <h4 className="text-[10px] uppercase tracking-wider font-bold">Year</h4>
                        </div>
                        <p className="font-bold text-lg">{product.year}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-neutral-400 mb-1">
                          <User size={14} />
                          <h4 className="text-[10px] uppercase tracking-wider font-bold">Artist</h4>
                        </div>
                        <p className="font-bold text-lg">Bappa Art Studio</p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal direction="left" delay={0.2}>
                    <div>
                      <h3 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-6">Key Highlights</h3>
                      <ul className="space-y-5">
                        {product.features?.map((f, i) => (
                          <li key={i} className="flex items-start gap-4 text-neutral-600 group">
                            <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5 group-hover:bg-accent group-hover:text-black transition-colors">
                              <CheckCircle2 size={14} />
                            </div>
                            <span className="text-lg font-medium">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>

                  <Reveal direction="left" delay={0.3}>
                    <div className="pt-8 space-y-4">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a 
                          href={`https://wa.me/917665772090?text=I'm interested in the ${product.title} masterpiece.`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-[2] py-6 rounded-2xl bg-green-600 text-white font-bold flex items-center justify-center gap-3 hover:bg-green-700 transition-all shadow-xl shadow-green-600/20"
                        >
                          <MessageCircle size={22} /> WhatsApp Enquiry
                        </a>
                        <button onClick={handleShare} className="flex-1 py-6 rounded-2xl bg-neutral-100 text-neutral-900 font-bold flex items-center justify-center gap-3 hover:bg-neutral-200 transition-all">
                          <Share2 size={20} /> Share
                        </button>
                      </div>
                      <button onClick={handleRequestQuote} className="w-full py-6 rounded-2xl bg-neutral-900 text-white font-bold flex items-center justify-center gap-3 hover:bg-accent hover:text-black transition-all shadow-xl shadow-black/10">
                        <Mail size={20} /> Request Formal Quote
                      </button>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>

          {/* Related Products or More Info */}
          <section className="py-24 px-6 bg-neutral-50">
            <div className="max-w-7xl mx-auto text-center">
              <Reveal>
                <h3 className="text-3xl font-bold mb-12">Interested in a Custom Piece?</h3>
                <p className="text-neutral-500 text-lg max-w-2xl mx-auto mb-10">
                  Every sculpture can be customized to your specific dimensions and material preferences. Our master artisans work closely with you to ensure the final piece resonates with your spiritual vision.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-accent font-bold text-xl hover:gap-4 transition-all">
                  Start a Conversation <ArrowRight size={24} />
                </Link>
              </Reveal>
            </div>
          </section>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default ProductDetails;
