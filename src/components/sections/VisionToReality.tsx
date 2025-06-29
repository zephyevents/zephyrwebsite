import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const VisionToReality = () => {
  const ref = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [dragPosition, setDragPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setDragPosition(percentage);
  };

  // Mouse events
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    updatePosition(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch events for mobile
  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const touch = e.touches[0];
    updatePosition(touch.clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Global mouse events to handle dragging outside the container
  React.useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      updatePosition(e.clientX);
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const touch = e.touches[0];
      updatePosition(touch.clientX);
    };

    const handleGlobalTouchEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('touchmove', handleGlobalTouchMove, { passive: false });
      document.addEventListener('touchend', handleGlobalTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchmove', handleGlobalTouchMove);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, [isDragging]);

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-normal text-neutral-800 mb-6">
            From vision to reality
          </h2>
          <p className="text-lg text-rose-500 font-medium tracking-wider uppercase">
            3D RENDERS OF YOUR SELECTED DESIGNS
          </p>
        </motion.div>

        {/* Interactive Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-6xl mx-auto w-full"
        >
          <div 
            ref={containerRef}
            className="relative h-64 sm:h-96 lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl cursor-ew-resize w-full select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: 'none' }}
          >
            {/* Reality Image (Background) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                alt="Reality"
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
              <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 text-white pointer-events-none">
                <h3 className="text-lg sm:text-2xl font-heading font-medium mb-2">REALITY</h3>
              </div>
            </div>

            {/* Render Image (Overlay) */}
            <div 
              className="absolute inset-0 overflow-hidden w-full h-full pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - dragPosition}% 0 0)` }}
            >
              <img
                src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                alt="Render"
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-white pointer-events-none">
                <h3 className="text-lg sm:text-2xl font-heading font-medium mb-2">RENDER</h3>
              </div>
            </div>

            {/* Drag Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize pointer-events-none"
              style={{ left: `${dragPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full shadow-lg flex items-center justify-center pointer-events-auto cursor-ew-resize">
                <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-neutral-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-8"
          >
            <p className="text-neutral-600">Drag the slider to compare render vs reality</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionToReality;