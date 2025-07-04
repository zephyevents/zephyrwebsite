import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DesignCatalogue = () => {
  const ref = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const animationFrameRef = useRef<number>();

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Memoized images array for performance - LARGER LANDSCAPE IMAGES
  const allImages = useMemo(() => [
    "https://images.pexels.com/photos/32866211/pexels-photo-32866211.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866213/pexels-photo-32866213.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866210/pexels-photo-32866210.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866209/pexels-photo-32866209.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866208/pexels-photo-32866208.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866207/pexels-photo-32866207.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866206/pexels-photo-32866206.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866205/pexels-photo-32866205.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866204/pexels-photo-32866204.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866203/pexels-photo-32866203.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866202/pexels-photo-32866202.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866201/pexels-photo-32866201.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866200/pexels-photo-32866200.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866199/pexels-photo-32866199.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866198/pexels-photo-32866198.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866197/pexels-photo-32866197.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866195/pexels-photo-32866195.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866194/pexels-photo-32866194.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866193/pexels-photo-32866193.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866192/pexels-photo-32866192.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866191/pexels-photo-32866191.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866190/pexels-photo-32866190.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866189/pexels-photo-32866189.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866188/pexels-photo-32866188.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866187/pexels-photo-32866187.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866186/pexels-photo-32866186.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866184/pexels-photo-32866184.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866183/pexels-photo-32866183.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32866182/pexels-photo-32866182.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    "https://images.pexels.com/photos/32864600/pexels-photo-32864600.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
  ], []);

  // Mobile vertical images (portrait)
  const mobileImages = useMemo(() => [
    "https://images.pexels.com/photos/32866211/pexels-photo-32866211.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866213/pexels-photo-32866213.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866210/pexels-photo-32866210.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866209/pexels-photo-32866209.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866208/pexels-photo-32866208.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866207/pexels-photo-32866207.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866206/pexels-photo-32866206.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866205/pexels-photo-32866205.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866204/pexels-photo-32866204.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866203/pexels-photo-32866203.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866202/pexels-photo-32866202.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866201/pexels-photo-32866201.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866200/pexels-photo-32866200.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866199/pexels-photo-32866199.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866198/pexels-photo-32866198.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866197/pexels-photo-32866197.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866195/pexels-photo-32866195.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866194/pexels-photo-32866194.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866193/pexels-photo-32866193.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866192/pexels-photo-32866192.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866191/pexels-photo-32866191.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866190/pexels-photo-32866190.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866189/pexels-photo-32866189.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866188/pexels-photo-32866188.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866187/pexels-photo-32866187.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866186/pexels-photo-32866186.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866184/pexels-photo-32866184.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866183/pexels-photo-32866183.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32866182/pexels-photo-32866182.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/32864600/pexels-photo-32864600.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop"
  ], []);

  // Shuffled images state
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  // Initialize shuffled images based on screen size
  useEffect(() => {
    const imagesToUse = isMobile ? mobileImages : allImages;
    const shuffled = [...imagesToUse].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, [allImages, mobileImages, isMobile]);

  // Partner brand logos
  const partnerBrands = useMemo(() => [
    { name: "Partner 1", logo: "/partnerslogo/4.webp" },
    { name: "Partner 2", logo: "/partnerslogo/5.webp" },
    { name: "Partner 3", logo: "/partnerslogo/6.webp" },
    { name: "Partner 4", logo: "/partnerslogo/7.webp" },
    { name: "Partner 5", logo: "/partnerslogo/8.webp" },
    { name: "Partner 6", logo: "/partnerslogo/9.webp" }
  ], []);

  // Auto-advance carousel with RAF for smooth timing
  useEffect(() => {
    if (!isAutoPlaying || isDragging || shuffledImages.length === 0) return;
    
    const autoAdvance = () => {
      setCurrentIndex((prev) => (prev + 1) % shuffledImages.length);
    };

    const interval = setInterval(autoAdvance, 4000);
    return () => clearInterval(interval);
  }, [shuffledImages.length, isDragging, isAutoPlaying]);

  // Optimized visible images calculation
  const getVisibleImages = useCallback(() => {
    if (shuffledImages.length === 0) return [];
    
    const visibleCount = 7;
    const images = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % shuffledImages.length;
      images.push({
        src: shuffledImages[index],
        index: i,
        isCenter: i === 3
      });
    }
    
    return images;
  }, [shuffledImages, currentIndex]);

  // Optimized drag handlers with RAF
  const handleStart = useCallback((clientX: number) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setStartX(clientX);
    setDragOffset(0);
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging) return;
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    animationFrameRef.current = requestAnimationFrame(() => {
      const offset = clientX - startX;
      setDragOffset(offset);
    });
  }, [isDragging, startX]);

  const handleEnd = useCallback(() => {
    if (!isDragging) return;
    
    const threshold = 80;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        setCurrentIndex((prev) => (prev - 1 + shuffledImages.length) % shuffledImages.length);
      } else {
        setCurrentIndex((prev) => (prev + 1) % shuffledImages.length);
      }
    }
    
    setIsDragging(false);
    setDragOffset(0);
    
    // Resume autoplay after interaction
    setTimeout(() => setIsAutoPlaying(true), 2000);
  }, [isDragging, dragOffset, shuffledImages.length]);

  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % shuffledImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  }, [shuffledImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + shuffledImages.length) % shuffledImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  }, [shuffledImages.length]);

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const visibleImages = getVisibleImages();

  return (
    <section ref={ref} className="py-12 lg:py-16 bg-gradient-to-br from-rose-50 to-mauve-50 overflow-hidden">
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

        {/* 3D Carousel Container - FIXED MOBILE PADDING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16 overflow-hidden"
          style={{ 
            height: isMobile ? '500px' : '800px', // Fixed heights instead of clamp
            paddingTop: isMobile ? '2rem' : '4rem', // Reduced mobile padding
            paddingBottom: isMobile ? '2rem' : '4rem' // Reduced mobile padding
          }}
        >
          <div 
            ref={containerRef}
            className="carousel-container"
            onMouseDown={(e) => handleStart(e.clientX)}
            onMouseMove={(e) => handleMove(e.clientX)}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchEnd={handleEnd}
          >
            {visibleImages.map((image, idx) => {
              const isCenter = idx === 3;
              const distanceFromCenter = idx - 3;
              
              // Responsive calculations - MUCH LARGER DESKTOP CARDS
              const isTablet = typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 1024;
              
              // 3D positioning with GPU optimization - INCREASED SPACING FOR LARGER CARDS
              const translateX = distanceFromCenter * (isMobile ? 140 : isTablet ? 350 : 500); // Increased spacing
              const translateZ = isCenter ? 50 : -Math.abs(distanceFromCenter) * 200;
              const rotateY = distanceFromCenter * (isMobile ? 12 : 18);
              const scale = isCenter ? 1 : Math.max(0.65, 1 - Math.abs(distanceFromCenter) * 0.12);
              const opacity = Math.max(0.4, 1 - Math.abs(distanceFromCenter) * 0.15);
              
              const dragAdjustment = isDragging ? dragOffset * 0.6 : 0;
              
              // MUCH LARGER RESPONSIVE CARD DIMENSIONS
              const cardWidth = isMobile ? '220px' : isTablet ? '480px' : '720px'; // 3x larger desktop
              const cardHeight = isMobile ? '320px' : isTablet ? '320px' : '480px'; // 3x larger desktop
              
              return (
                <div
                  key={`${currentIndex}-${idx}`}
                  className="carousel-card"
                  style={{
                    transform: `translate3d(${translateX + dragAdjustment}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, 1)`,
                    opacity: opacity,
                    zIndex: isCenter ? 20 : 10 - Math.abs(distanceFromCenter),
                    width: cardWidth,
                    height: cardHeight,
                    transition: isDragging ? 'none' : 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease',
                    willChange: 'transform, opacity'
                  }}
                >
                  <div className="card-inner">
                    <img
                      src={image.src}
                      alt={`Event ${idx + 1}`}
                      className="card-image"
                      loading="lazy"
                      draggable={false}
                    />
                    <div className="card-overlay" />
                    
                    {/* Center card highlight */}
                    {isCenter && <div className="center-highlight" />}
                    
                    {/* Hover effect */}
                    <div className="hover-effect" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="nav-arrow nav-arrow-left"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="nav-arrow nav-arrow-right"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="dots-container">
            {shuffledImages.slice(0, 8).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 3000);
                }}
                className={`dot ${index === currentIndex % 8 ? 'dot-active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
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
          <h3 className="text-3xl lg:text-4xl font-heading font-semibold text-neutral-800 mb-12">
            Partner Brands
          </h3>
          
          {/* Mobile Layout - 3x2 Grid */}
          <div className="block md:hidden">
            <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto">
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
                  <div className="bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-100 flex items-center justify-center group overflow-hidden w-24 h-24 p-3">
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

          {/* Desktop/Tablet Layout - 4 in first row, 2 in second row */}
          <div className="hidden md:block relative max-w-6xl mx-auto">
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
                    <div className="bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-100 flex items-center justify-center group overflow-hidden w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 p-4 md:p-6 lg:p-8">
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
                    <div className="bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-100 flex items-center justify-center group overflow-hidden w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 p-4 md:p-6 lg:p-8">
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

        /* 3D Carousel Styles with GPU Acceleration */
        .carousel-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 2000px; /* Increased for larger cards */
          perspective-origin: center center;
          cursor: grab;
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }

        .carousel-container:active {
          cursor: grabbing;
        }

        .carousel-card {
          position: absolute;
          border-radius: 1.5rem;
          overflow: hidden;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          will-change: transform, opacity;
          contain: layout style paint;
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.3);
          transform: translateZ(0);
          will-change: transform;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: translateZ(0);
          will-change: transform;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, transparent 50%);
          pointer-events: none;
        }

        .center-highlight {
          position: absolute;
          inset: -4px;
          border: 4px solid rgba(255, 255, 255, 0.6);
          border-radius: 1.5rem;
          pointer-events: none;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }

        .hover-effect {
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.1);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .carousel-card:hover .hover-effect {
          opacity: 1;
        }

        .carousel-card:hover .card-image {
          transform: translateZ(0) scale3d(1.05, 1.05, 1);
        }

        /* Navigation Arrows */
        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%) translateZ(0);
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 30;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          will-change: transform, background-color;
        }

        .nav-arrow:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-50%) translateZ(0) scale3d(1.1, 1.1, 1);
        }

        .nav-arrow-left {
          left: 1rem;
        }

        .nav-arrow-right {
          right: 1rem;
        }

        @media (min-width: 768px) {
          .nav-arrow {
            padding: 1rem;
          }
          
          .nav-arrow-left {
            left: 2rem;
          }
          
          .nav-arrow-right {
            right: 2rem;
          }
        }

        /* Dots Indicator */
        .dots-container {
          position: absolute;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%) translateZ(0);
          display: flex;
          gap: 0.5rem;
          z-index: 30;
        }

        .dot {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, background-color;
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: translateZ(0) scale3d(1.2, 1.2, 1);
        }

        .dot-active {
          background: white;
          transform: translateZ(0) scale3d(1.25, 1.25, 1);
        }

        /* Performance optimizations */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .carousel-card,
          .card-image,
          .nav-arrow,
          .dot,
          .floating-bubble {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default DesignCatalogue;