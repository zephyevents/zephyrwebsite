import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const DesignCatalogue = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  // All available images
  const allImages = [
    "https://images.pexels.com/photos/32866211/pexels-photo-32866211.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866213/pexels-photo-32866213.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866210/pexels-photo-32866210.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866209/pexels-photo-32866209.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866208/pexels-photo-32866208.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866207/pexels-photo-32866207.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866206/pexels-photo-32866206.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866205/pexels-photo-32866205.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866204/pexels-photo-32866204.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866203/pexels-photo-32866203.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866202/pexels-photo-32866202.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866201/pexels-photo-32866201.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866200/pexels-photo-32866200.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866199/pexels-photo-32866199.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866198/pexels-photo-32866198.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866197/pexels-photo-32866197.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866195/pexels-photo-32866195.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866194/pexels-photo-32866194.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866193/pexels-photo-32866193.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866192/pexels-photo-32866192.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866191/pexels-photo-32866191.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866190/pexels-photo-32866190.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866189/pexels-photo-32866189.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866188/pexels-photo-32866188.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866187/pexels-photo-32866187.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866186/pexels-photo-32866186.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866184/pexels-photo-32866184.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866183/pexels-photo-32866183.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32866182/pexels-photo-32866182.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/32864600/pexels-photo-32864600.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
  ];

  // Randomize images on component mount
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  useEffect(() => {
    const shuffled = [...allImages].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, []);

  // Auto-advance carousel with much slower, smoother speed
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shuffledImages.length);
    }, 8000); // Very slow - 8 seconds

    return () => clearInterval(interval);
  }, [shuffledImages.length]);

  // Partner brand logos with proper paths
  const partnerBrands = [
    { name: "Taj", logo: "/src/assets/logopartners/taj.png" },
    { name: "ITC", logo: "/src/assets/logopartners/itc.png" },
    { name: "Oberoi", logo: "/src/assets/logopartners/oebroi.png" },
    { name: "Leela", logo: "/src/assets/logopartners/leela.png" },
    { name: "JW Marriott", logo: "/src/assets/logopartners/jwmarriott.png" },
    { name: "Accor", logo: "/src/assets/logopartners/accor.png" }
  ];

  const getVisibleImages = () => {
    if (shuffledImages.length === 0) return [];
    
    const visibleCount = 5; // Show 5 images at once
    const images = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % shuffledImages.length;
      images.push({
        src: shuffledImages[index],
        index: i,
        isCenter: i === 2 // Center image
      });
    }
    
    return images;
  };

  return (
    <section ref={ref} className="py-12 lg:py-20 bg-gradient-to-br from-rose-50 to-mauve-50 overflow-x-hidden">
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

        {/* Enhanced Ultra-Smooth Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-20 overflow-hidden h-96 md:h-[500px] lg:h-[600px]"
        >
          <div className="flex items-center justify-center h-full relative">
            {getVisibleImages().map((image, idx) => (
              <motion.div
                key={`${currentIndex}-${idx}`}
                initial={{ opacity: 0, scale: 0.6, x: 400 }}
                animate={{ 
                  opacity: image.isCenter ? 1 : 0.4,
                  scale: image.isCenter ? 1.2 : 0.6, // Much bigger center card
                  x: (idx - 2) * (window.innerWidth < 768 ? 200 : 320),
                  filter: image.isCenter ? 'blur(0px)' : 'blur(4px)',
                  zIndex: image.isCenter ? 20 : 5
                }}
                transition={{ 
                  duration: 2.5, // Much slower transition
                  ease: [0.23, 1, 0.32, 1], // Ultra-smooth cubic-bezier easing
                  type: "tween"
                }}
                className="absolute w-72 md:w-96 lg:w-[450px] h-80 md:h-96 lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={image.src}
                  alt={`Event ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
            ))}
          </div>

          {/* Enhanced Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {shuffledImages.slice(0, 8).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentIndex % 8
                    ? 'bg-white scale-150 shadow-lg'
                    : 'bg-white/60 hover:bg-white/80 scale-100'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Partner Brands Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-4xl lg:text-6xl font-heading font-semibold text-neutral-800 mb-16">
            Partner Brands
          </h3>
          
          {/* Enhanced Partner Brands Layout */}
          <div className="relative max-w-6xl mx-auto">
            <div className="relative">
              {/* First row - 4 brands */}
              <div className="flex justify-center items-center space-x-8 md:space-x-16 lg:space-x-20 mb-12 lg:mb-20">
                {partnerBrands.slice(0, 4).map((brand, index) => (
                  <motion.div
                    key={brand.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.6 + index * 0.15,
                      ease: "easeOut"
                    }}
                    className="floating-bubble"
                    style={{
                      animationDelay: `${index * 0.7}s`
                    }}
                  >
                    <div className="bg-white rounded-full p-6 md:p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-100 w-32 h-32 md:w-48 lg:w-56 md:h-48 lg:h-56 flex items-center justify-center group">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="w-full h-full object-contain scale-150 opacity-80 group-hover:opacity-100 group-hover:scale-[1.7] transition-all duration-500"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.src = `https://via.placeholder.com/200x200/B03F3F/FFFFFF?text=${encodeURIComponent(brand.name)}`;
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Second row - 2 brands positioned between the bubbles above */}
              <div className="flex justify-center items-center space-x-16 md:space-x-32 lg:space-x-40">
                {partnerBrands.slice(4, 6).map((brand, index) => (
                  <motion.div
                    key={brand.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 1.2 + index * 0.15,
                      ease: "easeOut"
                    }}
                    className="floating-bubble"
                    style={{
                      animationDelay: `${(index + 4) * 0.7}s`
                    }}
                  >
                    <div className="bg-white rounded-full p-6 md:p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-100 w-32 h-32 md:w-48 lg:w-56 md:h-48 lg:h-56 flex items-center justify-center group">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="w-full h-full object-contain scale-150 opacity-80 group-hover:opacity-100 group-hover:scale-[1.7] transition-all duration-500"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.src = `https://via.placeholder.com/200x200/B03F3F/FFFFFF?text=${encodeURIComponent(brand.name)}`;
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom CSS for enhanced animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .floating-bubble {
          animation: float 5s ease-in-out infinite;
        }

        .floating-bubble:nth-child(2n) {
          animation-delay: 1.5s;
        }

        .floating-bubble:nth-child(3n) {
          animation-delay: 3s;
        }

        .floating-bubble:nth-child(4n) {
          animation-delay: 0.8s;
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .floating-bubble div {
            width: 120px !important;
            height: 120px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default DesignCatalogue;