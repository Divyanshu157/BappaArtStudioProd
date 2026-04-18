import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Home from '@/src/pages/Home';
import Products from '@/src/pages/Products';
import ProductDetails from '@/src/pages/ProductDetails';
import VisionValues from '@/src/pages/VisionValues';
import FacesBehind from '@/src/pages/FacesBehind';
import WhyWeExist from '@/src/pages/WhyWeExist';
import WhereWereGoing from '@/src/pages/WhereWereGoing';
import SignatureCrafting from '@/src/pages/SignatureCrafting';
import HeritageRestoration from '@/src/pages/HeritageRestoration';
import CareMaintenance from '@/src/pages/CareMaintenance';
import FAQ from '@/src/pages/FAQ';
import Testimonials from '@/src/pages/Testimonials';
import Contact from '@/src/pages/Contact';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/vision-values" element={<VisionValues />} />
        <Route path="/faces-behind" element={<FacesBehind />} />
        <Route path="/why-we-exist" element={<WhyWeExist />} />
        <Route path="/where-were-going" element={<WhereWereGoing />} />
        <Route path="/signature-crafting" element={<SignatureCrafting />} />
        <Route path="/heritage-restoration" element={<HeritageRestoration />} />
        <Route path="/care-maintenance" element={<CareMaintenance />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}
