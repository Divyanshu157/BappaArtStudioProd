import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      title: "Behind the Brand",
      items: [
        { label: "Vision & Values", path: "/vision-values" },
        { label: "The Faces Behind", path: "/faces-behind" },
        { label: "Testimonials", path: "/testimonials" }
      ]
    },
    {
      title: "What We Stand For",
      items: [
        { label: "Why We Exist", path: "/why-we-exist" },
        { label: "Where We're Going", path: "/where-were-going" }
      ]
    },
    {
      title: "Studio Services",
      items: [
        { label: "Signature Crafting", path: "/signature-crafting" },
        { label: "Heritage Restoration", path: "/heritage-restoration" },
        { label: "Care & Maintenance", path: "/care-maintenance" }
      ]
    },
    { label: "Products", path: "/products" },
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" }
  ];

  const isHome = location.pathname === '/';
  const isTransparent = (transparent || isHome) && !scrolled && !isOpen;

  return (
    <nav className={cn(
      "fixed top-0 w-full z-[100] transition-all duration-500 px-6 py-4",
      isTransparent ? "bg-transparent" : "bg-black/90 shadow-lg py-2 backdrop-blur-md"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group">
          <img 
            src="/assets/images/logo.png" 
            alt="Bappa Art Studio Logo"
            className="h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-white font-serif font-bold text-xl tracking-tight leading-none">
              Bappa Art
            </span>
            <span className="text-accent font-sans text-[10px] uppercase tracking-[0.2em] font-bold">
              Studio
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            'items' in link ? (
              <div key={i} className="relative group">
                <button className="text-white hover:text-accent flex items-center gap-1 font-medium transition-colors cursor-pointer">
                  {link.title} <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {link.items.map((item, j) => (
                    <Link
                      key={j}
                      to={item.path}
                      className="block px-4 py-3 text-sm text-neutral-800 hover:bg-neutral-100 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={i}
                to={link.path}
                className="text-white hover:text-accent font-medium transition-colors"
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 border-t border-white/10 p-6 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              'items' in link ? (
                <div key={i} className="flex flex-col gap-3">
                  <span className="text-accent font-serif text-lg">{link.title}</span>
                  {link.items.map((item, j) => (
                    <Link
                      key={j}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="text-white/80 hover:text-white pl-4"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={i}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-xl font-serif"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
