import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const CustomPackages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-mauve-500 to-rose-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-normal mb-8 leading-tight">
              Custom packages,<br />
              fully editable by you
            </h2>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <button 
                className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 shadow-lg text-sm sm:text-base"
                style={{ backgroundColor: '#B03F3F' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#9A3535'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B03F3F'}
              >
                Get a Free Design Consultation
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Mock Interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full">
              {/* Mock Browser Interface */}
              <div className="bg-neutral-100 px-4 py-3 border-b border-neutral-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>

              {/* Mock Content */}
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="h-24 sm:h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
                    <div className="h-3 sm:h-4 bg-neutral-200 rounded"></div>
                    <div className="h-2 sm:h-3 bg-neutral-100 rounded w-3/4"></div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="h-24 sm:h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-lg"></div>
                    <div className="h-3 sm:h-4 bg-neutral-200 rounded"></div>
                    <div className="h-2 sm:h-3 bg-neutral-100 rounded w-2/3"></div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="h-24 sm:h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg"></div>
                    <div className="h-3 sm:h-4 bg-neutral-200 rounded"></div>
                    <div className="h-2 sm:h-3 bg-neutral-100 rounded w-4/5"></div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="h-24 sm:h-32 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg"></div>
                    <div className="h-3 sm:h-4 bg-neutral-200 rounded"></div>
                    <div className="h-2 sm:h-3 bg-neutral-100 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomPackages;