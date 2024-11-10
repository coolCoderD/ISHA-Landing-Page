import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeBannerProps {
  text: string;
}

export function MarqueeBanner({ text }: MarqueeBannerProps) {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative font-semibold bg-[#352ef0] py-4 text-white  w-[100.8vw] overflow-clip  text-xl -ml-20">
      <motion.div 
        animate={{
          x: [0, -1000],
        }}
        
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        className="flex  whitespace-nowrap"
      >
        {Array.from({ length: 100 }).map((_, i) => (
          <span key={i} className="mx-4">{text} +</span>
        ))}
      </motion.div>
    </motion.div>
  );
}