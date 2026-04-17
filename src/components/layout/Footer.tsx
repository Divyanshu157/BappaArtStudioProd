import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <h3 className="font-serif text-2xl font-bold mb-6 text-accent">Bappa Art Studio</h3>
          <p className="text-neutral-400 leading-relaxed mb-8">
            Crafting divine sculptures for over five decades. Rooted in heritage, refined by experience, and dedicated to spiritual excellence.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:bg-blue-600 transition-all">
              <Facebook size={20} className="text-white" />
            </a>
            <a href="https://www.instagram.com/bappa_arts/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#E1306C] text-white flex items-center justify-center hover:bg-pink-500 transition-all">
              <Instagram size={20} className="text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:bg-red-600 transition-all">
              <Youtube size={20} className="text-white" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-neutral-400">
            <li><a href="/products" className="hover:text-accent transition-colors">Our Gallery</a></li>
            <li><a href="/vision-values" className="hover:text-accent transition-colors">Vision & Values</a></li>
            <li><a href="/testimonials" className="hover:text-accent transition-colors">Testimonials</a></li>
            <li><a href="/contact" className="hover:text-accent transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-neutral-400">
            <li><a href="/signature-crafting" className="hover:text-accent transition-colors">Signature Crafting</a></li>
            <li><a href="/heritage-restoration" className="hover:text-accent transition-colors">Heritage Restoration</a></li>
            <li><a href="/care-maintenance" className="hover:text-accent transition-colors">Care & Maintenance</a></li>
            <li><a href="/faq" className="hover:text-accent transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl font-bold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-neutral-400">
            <li className="flex items-start gap-3">
              <MapPin className="text-accent shrink-0" size={20} />
              <span>Jaipur, Rajasthan 302001, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-accent shrink-0" size={20} />
              <span>+91 76657 72090</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-accent shrink-0" size={20} />
              <span>contact@bappaartstudio.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-neutral-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Bappa Art Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
