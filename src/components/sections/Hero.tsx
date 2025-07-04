import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-section relative h-[92vh] md:h-[90vh] lg:h-screen overflow-hidden w-full">
      {/* Jumpshare Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="relative w-full h-full">
          <style>{`
            #js_video_iframe {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 100vw !important;
              height: 100vh !important;
              min-width: 100vw !important;
              min-height: 100vh !important;
              object-fit: cover !important;
              border: none !important;
              outline: none !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            
            /* Force full coverage on all devices */
            @media (max-width: 768px) {
              #js_video_iframe {
                width: 100vw !important;
                height: 100vh !important;
                min-width: 100vw !important;
                min-height: 100vh !important;
                transform: translate(-50%, -50%) !important;
              }
            }
          `}</style>
          
          {/* Loading placeholder image */}
          <div className="absolute inset-0 w-full h-full bg-neutral-900">
            <img
              src="https://images.pexels.com/photos/32808870/pexels-photo-32808870.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
              alt="Hero Loading"
              className="w-full h-full object-cover"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                minWidth: '100vw',
                minHeight: '100vh',
                zIndex: 1
              }}
            />
          </div>
          
          {/* Jumpshare Video Embed */}
          <div 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%',
              zIndex: 2
            }}
          >
            <iframe 
              id="js_video_iframe" 
              src="https://jumpshare.com/embed/cwGHwQBy1lsAlAgFhtZ3?autoplay=1&muted=1&loop=1&quality=1080p" 
              frameBorder="0" 
              webkitAllowFullScreen 
              mozAllowFullScreen 
              allowFullScreen
              allow="autoplay; fullscreen"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none'
              }}
            />
          </div>
        </div>
        
        {/* Minimal Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 z-10" />
      </div>

      {/* Scroll Indicator - Optimized animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-20 md:bottom-32 lg:bottom-20 left-1/2 transform -translate-x-1/2 z-20"
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