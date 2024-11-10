import React from 'react';
import { motion } from 'framer-motion';
import  Scene3D  from './Scene3D';

export function HeroSection() {
  return (
    <motion.section
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }} 
    className=" text-white mt-8 px-4 bg-[#413cdd] m-2 rounded-[4rem] h-[35rem] relative py-24">
      <div className="grid  gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex z-50 absolute inset-8 flex-col  justify-center space-y-4 w-[60%]"
        >
          <h1 className="md:text-8xl md:text-center text-7xl font-semibold tracking-tighter">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Diagnostic
              <br />
              Expert System
              <span className="text-blue-500">.</span>
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-center  text-muted-foreground"
          >
            We develop revolutionary technologies with delivering quality healthcare through medical technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center space-x-4"
          >

          </motion.div>
        </motion.div>
        <div className=' w-1/2 h-full'></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden lg:block "
        >
          <Scene3D />
        </motion.div>
      </div>
    </motion.section>
  );
}