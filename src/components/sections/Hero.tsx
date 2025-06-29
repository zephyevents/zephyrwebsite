import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Preload video for faster loading
    const video = document.createElement('iframe');
    video.src = "https://player.vimeo.com/video/1097212920?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1&quality=720p";
    video.onload = () => setIsVideoLoaded(true);
  }, []);

  return (
    <section className="hero-section relative h-[92vh] md:h-[90vh] lg:h-screen overflow-hidden w-full">
      {/* Video Background - Optimized */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="relative w-full h-full">
          {/* Loading placeholder */}
          {!isVideoLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-700 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-xl font-heading">Loading Experience...</p>
              </div>
            </div>
          )}
          
          <iframe 
            src="https://player.vimeo.com/video/1097212920?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1&quality=720p"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '100vw',
              height: '56.25vw',
              minHeight: '100vh',
              minWidth: '177.78vh',
            }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="ZephyrEvents"
            loading="eager"
            fetchPriority="high"
            onLoad={() => setIsVideoLoaded(true)}
          />
        </div>
        
        {/* Minimal Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      </div>

      {/* Scroll Indicator - Optimized animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-20 md:bottom-32 lg:bottom-20 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            style={{ willChange: 'transform' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;