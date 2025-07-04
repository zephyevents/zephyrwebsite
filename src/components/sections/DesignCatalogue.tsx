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
    "https://images.pexels.com/photos/32866211/pexels-photo-32866211.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866213/pexels-photo-32866213.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866210/pexels-photo-32866210.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866209/pexels-photo-32866209.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866208/pexels-photo-32866208.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866207/pexels-photo-32866207.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866206/pexels-photo-32866206.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866205/pexels-photo-32866205.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866204/pexels-photo-32866204.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866203/pexels-photo-32866203.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866202/pexels-photo-32866202.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866201/pexels-photo-32866201.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866200/pexels-photo-32866200.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866199/pexels-photo-32866199.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866198/pexels-photo-32866198.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866197/pexels-photo-32866197.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866195/pexels-photo-32866195.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866194/pexels-photo-32866194.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866193/pexels-photo-32866193.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866192/pexels-photo-32866192.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866191/pexels-photo-32866191.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866190/pexels-photo-32866190.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866189/pexels-photo-32866189.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866188/pexels-photo-32866188.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866187/pexels-photo-32866187.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866186/pexels-photo-32866186.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866184/pexels-photo-32866184.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866183/pexels-photo-32866183.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32866182/pexels-photo-32866182.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    "https://images.pexels.com/photos/32864600/pexels-photo-32864600.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
  ];

  // Randomize images on component mount
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  useEffect(() => {
    const shuffled = [...allImages].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shuffledImages.length);
    }, 4000); // Slower speed - 4 seconds

    return () => clearInterval(interval);
  }, [shuffledImages.length]);

  // Partner brand placeholders (6 brands)
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

        {/* Enhanced Carousel */}
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
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: image.isCenter ? 1 : 0.4,
                  scale: image.isCenter ? 1 : 0.8,
                  x: (idx - 2) * (window.innerWidth < 768 ? 200 : 300),
                  filter: image.isCenter ? 'blur(0px)' : 'blur(2px)'
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute w-64 md:w-80 lg:w-96 h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                style={{ zIndex: image.isCenter ? 10 : 5 }}
              >
                <img
                  src={image.src}
                  alt={`Event ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {shuffledImages.slice(0, 10).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex % 10
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
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
          <h3 className="text-3xl lg:text-5xl font-heading font-semibold text-neutral-800 mb-12">
            Partner Brands
          </h3>
          
          {/* Enhanced Floating Bubbles Animation */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative">
              {/* First row - 4 brands */}
              <div className="flex justify-center items-center space-x-8 lg:space-x-12 mb-8 lg:mb-12">
                {partnerBrands.slice(0, 4).map((brand, index) => (
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
                    <div className="bg-white rounded-full p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 w-28 h-28 lg:w-36 lg:h-36 flex items-center justify-center">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="w-full h-full rounded-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Second row - 2 brands positioned between the bubbles above */}
              <div className="flex justify-center items-center space-x-16 lg:space-x-24">
                {partnerBrands.slice(4, 6).map((brand, index) => (
                  <motion.div
                    key={brand.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.0 + index * 0.1,
                      ease: "easeOut"
                    }}
                    className="floating-bubble"
                    style={{
                      animationDelay: `${(index + 4) * 0.5}s`
                    }}
                  >
                    <div className="bg-white rounded-full p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 w-28 h-28 lg:w-36 lg:h-36 flex items-center justify-center">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="w-full h-full rounded-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .floating-bubble {
          animation: float 4s ease-in-out infinite;
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