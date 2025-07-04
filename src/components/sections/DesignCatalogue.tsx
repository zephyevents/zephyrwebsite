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

  // Auto-advance carousel every 4 seconds with smooth transition
  useEffect(() => {
    if (isDragging) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shuffledImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [shuffledImages.length, isDragging]);

  // Partner brand logos - 6 brands total
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
    
    const visibleCount = 7; // Show 7 cards for better 3D effect
    const images = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % shuffledImages.length;
      images.push({
        src: shuffledImages[index],
        index: i,
        isCenter: i === 3 // Center card is at index 3
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
      setCurrentIndex((prev) => (prev - 1 + shuffledImages.length) % shuffledImages.length);
    } else if (dragOffset < -threshold) {
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
    <section ref={ref} className="py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-rose-50 to-mauve-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Responsive sizing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-normal text-neutral-800 mb-6">
            A Glimpse Into Our Celebrations
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            From heartfelt weddings to grand corporate galas, each event we craft tells a unique story. 
            Browse through some of our favorite moments, beautifully captured.
          </p>
        </motion.div>

        {/* Enhanced 3D Carousel - Responsive padding and sizing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16 md:mb-20 lg:mb-24 overflow-hidden"
          style={{ 
            height: 'clamp(400px, 60vh, 700px)',
            paddingTop: 'clamp(2rem, 5vw, 4rem)',
            paddingBottom: 'clamp(2rem, 5vw, 4rem)'
          }}
        >
          <div 
            className="flex items-center justify-center h-full relative cursor-grab active:cursor-grabbing"
            style={{ perspective: '1200px' }}
            onMouseDown={(e) => handleStart(e.clientX)}
            onMouseMove={(e) => handleMove(e.clientX)}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchEnd={handleEnd}
          >
            {getVisibleImages().map((image, idx) => {
              const isCenter = idx === 3;
              const distanceFromCenter = idx - 3;
              
              // 3D positioning calculations
              const translateX = distanceFromCenter * (window.innerWidth < 768 ? 120 : window.innerWidth < 1024 ? 180 : 220);
              const translateZ = isCenter ? 0 : -Math.abs(distanceFromCenter) * 150;
              const rotateY = distanceFromCenter * (window.innerWidth < 768 ? 15 : 20);
              const scale = isCenter ? 1 : Math.max(0.6, 1 - Math.abs(distanceFromCenter) * 0.15);
              const opacity = Math.max(0.3, 1 - Math.abs(distanceFromCenter) * 0.2);
              
              const dragAdjustment = isDragging ? dragOffset * 0.5 : 0;
              
              return (
                <motion.div
                  key={`${currentIndex}-${idx}`}
                  animate={{ 
                    x: translateX + dragAdjustment,
                    z: translateZ,
                    rotateY: rotateY,
                    scale: scale,
                    opacity: opacity,
                    zIndex: isCenter ? 20 : 10 - Math.abs(distanceFromCenter)
                  }}
                  transition={{ 
                    duration: isDragging ? 0.1 : 0.8,
                    ease: isDragging ? "linear" : [0.25, 0.46, 0.45, 0.94],
                    type: "tween"
                  }}
                  className="absolute rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50"
                  style={{
                    width: 'clamp(200px, 25vw, 350px)',
                    height: 'clamp(280px, 35vw, 480px)',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden'
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
                  
                  {/* Center card highlight */}
                  {isCenter && (
                    <div className="absolute inset-0 ring-4 ring-white/60 rounded-2xl md:rounded-3xl pointer-events-none" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrows - Responsive positioning */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 lg:left-8 top-1/2 transform -translate-y-1/2 p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors z-30 shadow-lg"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 lg:right-8 top-1/2 transform -translate-y-1/2 p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors z-30 shadow-lg"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          {/* Dots Indicator - Responsive */}
          <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {shuffledImages.slice(0, 8).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex % 8
                    ? 'bg-white scale-125'
                    : 'bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Partner Brands Section - Enhanced responsive padding */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-semibold text-neutral-800 mb-8 md:mb-12 lg:mb-16">
            Partner Brands
          </h3>
          
          {/* Mobile Layout - 3x2 Grid with better spacing */}
          <div className="block md:hidden">
            <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto px-4">
              {partnerBrands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.6 + index * 0.1,
                    ease: "easeOut"
                  }}
                  className="floating-bubble"
                >
                  <div className="bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-100 flex items-center justify-center group overflow-hidden w-20 h-20 p-3">
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

          {/* Tablet Layout - Enhanced padding to prevent edge touching */}
          <div className="hidden md:block lg:hidden">
            <div className="relative max-w-4xl mx-auto px-8">
              <div className="relative">
                {/* First row - 4 brands with better spacing */}
                <div className="flex justify-center items-center space-x-12 mb-12">
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
                      <div className="bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-100 flex items-center justify-center group overflow-hidden w-32 h-32 p-6">
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

                {/* Second row - 2 brands centered */}
                <div className="flex justify-center items-center space-x-24">
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
                      <div className="bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-100 flex items-center justify-center group overflow-hidden w-32 h-32 p-6">
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
          </div>

          {/* Desktop Layout - 4+2 layout with optimal spacing */}
          <div className="hidden lg:block relative max-w-6xl mx-auto">
            <div className="relative">
              {/* First row - 4 brands */}
              <div className="flex justify-center items-center space-x-16 xl:space-x-20 mb-16">
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
                    <div className="bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-100 flex items-center justify-center group overflow-hidden w-40 h-40 xl:w-48 xl:h-48 p-6 xl:p-8">
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
              <div className="flex justify-center items-center space-x-32 xl:space-x-40">
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
                    <div className="bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-100 flex items-center justify-center group overflow-hidden w-40 h-40 xl:w-48 xl:h-48 p-6 xl:p-8">
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

      {/* Enhanced CSS for 3D animations */}
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

        /* 3D Carousel specific styles */
        [style*="perspective"] {
          perspective-origin: center center;
        }
      `}</style>
    </section>
  );
};

export default DesignCatalogue;