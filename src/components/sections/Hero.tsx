import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-500">
      {/* Vimeo Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <iframe 
            src="https://player.vimeo.com/video/1097212920?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1"
            className="absolute top-1/2 left-1/2 w-full h-full object-cover"
            style={{
              width: '100vw',
              height: '56.25vw', // 16:9 aspect ratio
              minHeight: '100vh',
              minWidth: '177.78vh', // 16:9 aspect ratio
              transform: 'translate(-50%, -50%)',
            }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            title="ZephyrEvents"
          />
        </div>
        
        {/* Elegant Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/30 via-transparent to-neutral-900/40" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-light mb-6 tracking-wide">
            Weddings Made
            <span className="block font-normal text-primary-300">Extraordinary</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-light mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Creating unforgettable moments with elegant design, flawless execution, 
            and personalized touches that make your special day truly yours.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-primary-900 text-white px-8 py-4 text-lg font-medium tracking-wide hover:bg-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl">
              Plan With Us
            </button>
            <button className="border-2 border-white text-white px-8 py-4 text-lg font-medium tracking-wide hover:bg-white hover:text-neutral-900 transition-all duration-300">
              View Our Work
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;