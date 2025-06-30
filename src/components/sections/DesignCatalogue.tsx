import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const DesignCatalogue = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Sample decor images for the carousel
  const decorImages = [
    "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/8108042/pexels-photo-8108042.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  ];

  // Partner brand placeholders (will be replaced with actual brand images)
  const partnerBrands = [
    { name: "Brand 1", logo: "https://via.placeholder.com/120x60/B03F3F/FFFFFF?text=Brand+1" },
    { name: "Brand 2", logo: "https://via.placeholder.com/120x60/B03F3F/FFFFFF?text=Brand+2" },
    { name: "Brand 3", logo: "https://via.placeholder.com/120x60/B03F3F/FFFFFF?text=Brand+3" },
    { name: "Brand 4", logo: "https://via.placeholder.com/120x60/B03F3F/FFFFFF?text=Brand+4" },
    { name: "Brand 5", logo: "https://via.placeholder.com/120x60/B03F3F/FFFFFF?text=Brand+5" },
    { name: "Brand 6", logo: "https://via.placeholder.com/120x60/B03F3F/FFFFFF?text=Brand+6" },
    { name: "Brand 7", logo: "https://via.placeholder.com/120x60/B03F3F/FFFFFF?text=Brand+7" },
    { name: "Brand 8", logo: "https://via.placeholder.com/120x60/B03F3F/FFFFFF?text=Brand+8" }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-rose-50 to-mauve-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-normal text-neutral-800 mb-6">
            A Glimpse Into Our Celebrations
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            From heartfelt weddings to grand corporate galas, each event we craft tells a unique story. 
            Browse through some of our favorite moments, beautifully captured.
          </p>
        </motion.div>

        {/* Decor Images Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-20 overflow-hidden"
        >
          <div className="flex animate-scroll-right space-x-6">
            {/* First set of images */}
            {decorImages.map((image, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-80 h-60 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`Decor ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {decorImages.map((image, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-80 h-60 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`Decor ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Partner Brands Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-neutral-800 mb-12">
            Partner Brands
          </h3>
          
          {/* Floating Bubbles Animation */}
          <div className="relative">
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              {partnerBrands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6 + index * 0.1,
                    ease: "easeOut"
                  }}
                  className="floating-bubble"
                  style={{
                    animationDelay: `${index * 0.5}s`
                  }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-12 w-auto mx-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
          width: calc(320px * 16 + 24px * 15); /* 16 images + gaps */
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .floating-bubble {
          animation: float 3s ease-in-out infinite;
        }

        .floating-bubble:nth-child(2n) {
          animation-delay: 1s;
        }

        .floating-bubble:nth-child(3n) {
          animation-delay: 2s;
        }

        .floating-bubble:nth-child(4n) {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default DesignCatalogue;