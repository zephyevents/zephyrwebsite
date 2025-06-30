import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Load Wistia scripts
    const loadWistiaScripts = () => {
      // Load main Wistia player script
      const playerScript = document.createElement('script');
      playerScript.src = 'https://fast.wistia.com/player.js';
      playerScript.async = true;
      document.head.appendChild(playerScript);

      // Load specific video embed script
      const embedScript = document.createElement('script');
      embedScript.src = 'https://fast.wistia.com/embed/2tbxg8pmpq.js';
      embedScript.async = true;
      embedScript.type = 'module';
      document.head.appendChild(embedScript);

      // Wait for scripts to load and configure video
      embedScript.onload = () => {
        setTimeout(() => {
          const video = document.querySelector('wistia-player[media-id="2tbxg8pmpq"]') as any;
          if (video && window.Wistia) {
            // Use Wistia API for configuration instead of direct property assignment
            window.Wistia.api('2tbxg8pmpq', (video: any) => {
              video.mute();
              video.play();
              video.bind('end', () => {
                video.time(0);
                video.play();
              });
            });
            
            setIsVideoLoaded(true);
          }
        }, 1000);
      };
    };

    loadWistiaScripts();

    // Cleanup function
    return () => {
      // Remove scripts if component unmounts
      const scripts = document.querySelectorAll('script[src*="wistia"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <section className="hero-section relative h-[92vh] md:h-[90vh] lg:h-screen overflow-hidden w-full">
      {/* Wistia Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="relative w-full h-full">
          <style>{`
            wistia-player[media-id='2tbxg8pmpq']:not(:defined) { 
              background: center / cover no-repeat url('https://fast.wistia.com/embed/medias/2tbxg8pmpq/swatch'); 
              display: block; 
              filter: blur(5px); 
              padding-top: 56.25%; 
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 100vw;
              height: 56.25vw;
              min-height: 100vh;
              min-width: 177.78vh;
            }
            wistia-player[media-id='2tbxg8pmpq'] {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 100vw;
              height: 56.25vw;
              min-height: 100vh;
              min-width: 177.78vh;
              object-fit: cover;
            }
            wistia-player[media-id='2tbxg8pmpq'] video {
              object-fit: cover !important;
            }
          `}</style>
          
          <wistia-player 
            media-id="2tbxg8pmpq" 
            aspect="1.7777777777777777"
            muted
            autoplay
            loop
            playsinline
            controls={false}
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