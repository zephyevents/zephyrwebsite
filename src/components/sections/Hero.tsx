import React from 'react';
import { motion } from 'framer-motion';
import MuxPlayer from '@mux/mux-player-react';

const Hero = () => {
  return (
    <section className="hero-section relative h-[92vh] md:h-[90vh] lg:h-screen overflow-hidden w-full">
      {/* Mux Video Background with perfect fit */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="relative w-full h-full">
          <style>{`
            mux-player {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 100vw !important;
              height: 56.25vw !important;
              min-width: 177.78vh !important;
              min-height: 100vh !important;
              object-fit: cover !important;
            }
            
            mux-player video {
              object-fit: cover !important;
              width: 100% !important;
              height: 100% !important;
            }
            
            /* Hide Mux controls */
            mux-player .mux-control-bar,
            mux-player .mux-big-play-button {
              display: none !important;
            }
            
            /* Ensure perfect coverage on all devices */
            @media (max-width: 768px) {
              mux-player {
                width: 100vw !important;
                height: 56.25vw !important;
                min-width: 177.78vh !important;
                min-height: 100vh !important;
                transform: translate(-50%, -50%) !important;
              }
            }
            
            /* Portrait orientation handling */
            @media (orientation: portrait) {
              mux-player {
                width: 177.78vh !important;
                height: 100vh !important;
                min-width: 100vw !important;
                min-height: 56.25vw !important;
              }
            }
            
            /* Remove any black borders and ensure seamless loop */
            mux-player,
            mux-player video {
              background: transparent !important;
              border: none !important;
              outline: none !important;
              margin: 0 !important;
              padding: 0 !important;
            }
          `}</style>
          
          <MuxPlayer
            playbackId="FB00u02e3i01WpBTlMf01yJlT3wOWe02XHEyY6vpxg7mMrzs"
            metadata={{
              video_title: 'zephyrhero',
              viewer_user_id: 'Placeholder (optional)',
            }}
            streamType="on-demand"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            style={{
              aspectRatio: '16/9',
              width: '100%',
              height: '100%',
            }}
            preload="auto"
            defaultHiddenCaptions={true}
            poster="https://images.pexels.com/photos/32808870/pexels-photo-32808870.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
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