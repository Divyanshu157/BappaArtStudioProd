import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  key?: React.Key;
}

export const Reveal = ({ children, width = "100%", className = "", delay = 0.25, direction = "up" }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 75 : direction === "down" ? -75 : 0,
      x: direction === "left" ? 75 : direction === "right" ? -75 : 0,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0
    },
  };

  return (
    <div ref={ref} className={className} style={{ position: "relative", width }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
