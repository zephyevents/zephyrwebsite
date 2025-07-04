import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DesignCatalogue = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  // All available images with proper Pexels URLs
  const allImages = [
    "https://images.pexels.com/photos/32866211/pexels-photo-32866211.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866213/pexels-photo-32866213.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866210/pexels-photo-32866210.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866209/pexels-photo-32866209.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866208/pexels-photo-32866208.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866207/pexels-photo-32866207.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866206/pexels-photo-32866206.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866205/pexels-photo-32866205.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866204/pexels-photo-32866204.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866203/pexels-photo-32866203.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866202/pexels-photo-32866202.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866201/pexels-photo-32866201.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866200/pexels-photo-32866200.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866199/pexels-photo-32866199.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866198/pexels-photo-32866198.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866197/pexels-photo-32866197.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866195/pexels-photo-32866195.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866194/pexels-photo-32866194.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866193/pexels-photo-32866193.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866192/pexels-photo-32866192.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866191/pexels-photo-32866191.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866190/pexels-photo-32866190.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866189/pexels-photo-32866189.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866188/pexels-photo-32866188.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866187/pexels-photo-32866187.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866186/pexels-photo-32866186.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866184/pexels-photo-32866184.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866183/pexels-photo-32866183.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32866182/pexels-photo-32866182.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop",
    "https://images.pexels.com/photos/32864600/pexels-photo-32864600.jpeg?auto=compress&cs=tinysrgb&w=1900&h=2560&fit=crop"
  ];

  // Randomize images on component mount
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  useEffect(() => {
    const shuffled = [...allImages].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, []);

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    if (isDragging) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shuffledImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [shuffledImages.length, isDragging]);

  // Partner brand logos - 4 in first row, 2 in second row
  const partnerBrands = [
    { name: "Partner 1", logo: "/partnerslogo/4.webp" },
    { name: "Partner 2", logo: "/partnerslogo/5.webp" },
    { name: "Partner 3", logo: "/partnerslogo/6.webp" },
    { name: "Partner 4", logo: "/partnerslogo/7.webp" },
    { name: "Partner 5", logo: "/partnerslogo/8.webp" },
    { name: "Partner 6", logo: "/partnerslogo/9.webp" }
  ];

  const getVisibleImages = () => {
    if (shuffledImages.length === 0) return [];
    
    const visibleCount = 5;
    const images = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % shuffledImages.length;
      images.push({
        src: shuffledImages[index],
        index: i,
        isCenter: i === 2
      });
    }
    
    return images;
  };

  // Touch/Mouse handlers for swiping
  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragOffset(0);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    const offset = clientX - startX;
    setDragOffset(offset);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    
    const threshold = 50;
    if (dragOffset > threshold) {
      // Swipe right - go to previous
      setCurrentIndex((prev) => (prev - 1 + shuffledImages.length) % shuffledImages.length);
    } else if (dragOffset < -threshold) {
      // Swipe left - go to next
      setCurrentIndex((prev) => (prev + 1) % shuffledImages.length);
    }
    
    setIsDragging(false);
    setDragOffset(0);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % shuffledImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + shuffledImages.length) % shuffledImages.length);
  };

  return (
    <section ref={ref} className="py-12 lg:py-16 bg-gradient-to-br from-rose-50 to-mauve-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Reduced size */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-heading font-normal text-neutral-800 mb-6">
            A Glimpse Into Our Celebrations
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            From heartfelt weddings to grand corporate galas, each event we craft tells a unique story. 
            Browse through some of our favorite moments, beautifully captured.
          </p>
        </motion.div>

        {/* Enhanced Swipeable Carousel with proper dimensions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16 overflow-hidden h-96 md:h-[500px] lg:h-[600px]"
        >
          <div 
            className="flex items-center justify-center h-full relative cursor-grab active:cursor-grabbing"
            onMouseDown={(e) => handleStart(e.clientX)}
            onMouseMove={(e) => handleMove(e.clientX)}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchEnd={handleEnd}
          >
            {getVisibleImages().map((image, idx) => (
              <motion.div
                key={`${currentIndex}-${idx}`}
                initial={{ opacity: 0, scale: 0.6, x: 400 }}
                animate={{ 
                  opacity: image.isCenter ? 1 : 0.4,
                  scale: image.isCenter ? 1.2 : 0.7,
                  x: (idx - 2) * (window.innerWidth < 768 ? 200 : 320) + (isDragging ? dragOffset * 0.5 : 0),
                  filter: image.isCenter ? 'blur(0px)' : 'blur(3px)',
                  zIndex: image.isCenter ? 20 : 5
                }}
                transition={{ 
                  duration: isDragging ? 0.1 : 2,
                  ease: isDragging ? "linear" : [0.23, 1, 0.32, 1],
                  type: "tween"
                }}
                className="absolute rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30"
                style={{
                  width: window.innerWidth < 768 ? '280px' : '380px',
                  height: window.innerWidth < 768 ? '380px' : '500px',
                  aspectRatio: '1900/2560'
                }}
              >
                <img
                  src={image.src}
                  alt={`Event ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors z-30"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors z-30"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {shuffledImages.slice(0, 8).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex % 8
                    ? 'bg-white scale-125'
                    : 'bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Partner Brands Section - Reduced heading and improved layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-3xl lg:text-4xl font-heading font-semibold text-neutral-800 mb-12">
            Partner Brands
          </h3>
          
          {/* Partner Brands Layout - 4 in first row, 2 in second row with proper positioning */}
          <div className="relative max-w-6xl mx-auto">
            <div className="relative">
              {/* First row - 4 brands */}
              <div className="flex justify-center items-center space-x-8 md:space-x-16 lg:space-x-20 mb-12 lg:mb-16">
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
                    <div className="bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-100 flex items-center justify-center group overflow-hidden w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 p-4 md:p-6 lg:p-8">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="w-full h-full object-contain scale-110 opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"
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
                    <div className="bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-100 flex items-center justify-center group overflow-hidden w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 p-4 md:p-6 lg:p-8">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="w-full h-full object-contain scale-110 opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"
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

        .floating-bubble:nth-child(5n) {
          animation-delay: 1.5s;
        }

        .floating-bubble:nth-child(6n) {
          animation-delay: 2.5s;
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .floating-bubble div {
            width: 96px !important;
            height: 96px !important;
            padding: 12px !important;
          }
        }

        @media (max-width: 640px) {
          .floating-bubble div {
            width: 80px !important;
            height: 80px !important;
            padding: 10px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default DesignCatalogue;