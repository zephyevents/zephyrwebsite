import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const VisionToReality = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [dragPosition, setDragPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setDragPosition(percentage);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

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
            className="relative h-64 sm:h-96 lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl cursor-ew-resize w-full"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Reality Image (Background) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                alt="Reality"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 text-white">
                <h3 className="text-lg sm:text-2xl font-heading font-medium mb-2">REALITY</h3>
              </div>
            </div>

            {/* Render Image (Overlay) */}
            <div 
              className="absolute inset-0 overflow-hidden w-full h-full"
              style={{ clipPath: `inset(0 ${100 - dragPosition}% 0 0)` }}
            >
              <img
                src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                alt="Render"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-white">
                <h3 className="text-lg sm:text-2xl font-heading font-medium mb-2">RENDER</h3>
              </div>
            </div>

            {/* Drag Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
              style={{ left: `${dragPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
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