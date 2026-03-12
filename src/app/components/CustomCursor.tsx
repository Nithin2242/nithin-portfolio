"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { stiffness: 500, damping: 28, mass: 0.5 };
  const dotX = useSpring(mouseX, springConfig);
  const dotY = useSpring(mouseY, springConfig);

  const glowX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const glowY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check if mouse is over the demo container
      const target = e.target as HTMLElement;
      if (target.closest(".featured-demo-container")) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div 
      animate={{ opacity: isVisible ? 1 : 0 }} 
      transition={{ duration: 0.2 }}
    >
      {/* Glow */}
      <motion.div
        className="fixed top-0 left-0 w-[500px] h-[500px] bg-white/[0.04] rounded-full pointer-events-none blur-[100px] z-[9998]"
        style={{ x: glowX, y: glowY, translateX: "-50%", translateY: "-50%" }}
      />
      
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white shadow-[0_0_15px_rgba(255,255,255,1)] rounded-full pointer-events-none z-[9999]"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      />
    </motion.div>
  );
}