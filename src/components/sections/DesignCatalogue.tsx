import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Filter } from 'lucide-react';

const DesignCatalogue = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState('Reception');

  const categories = [
    'Reception',
    'Stage Decor',
    'Welcome Decor',
    'Accent Decor',
    'Traditional Decor',
    'Decor Essentials',
    'Product Add Ons',
    'Meragi Special 3D',
    'Guide'
  ];

  const designs = [
    {
      name: "Morrocana",
      price: "₹21,000",
      image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Lavender Florals",
      price: "₹35,000",
      image: "https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Archie Radiance",
      price: "₹28,000",
      image: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Marigold Muse",
      price: "₹28,000",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Written In Stars",
      price: "₹21,000",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Sunkissed Symphony",
      price: "₹20,000",
      image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-rose-50 to-mauve-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-normal text-neutral-800 mb-6">
            Designs as unique as your love
          </h2>
          <p className="text-lg text-rose-500 font-medium tracking-wider uppercase">
            DESIGN CATALOGUE
          </p>
        </motion.div>

        {/* Design Browser Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          {/* Browser Header */}
          <div className="bg-neutral-100 px-6 py-4 border-b border-neutral-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-sm text-neutral-600">meragi.com/designs</div>
              </div>
              <div className="text-xs text-neutral-500">PID: 18154 Test lead</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="px-6 py-4 border-b border-neutral-200">
            <div className="flex items-center space-x-8 text-sm">
              <span className="font-medium">Venue</span>
              <span className="font-medium">Decor</span>
              <span className="font-medium">Catering</span>
              <span className="font-medium">Photography</span>
              <span className="font-medium">Makeup</span>
              <span className="font-medium">Mehendi</span>
              <span className="font-medium">Fashion</span>
              <span className="font-medium">Gifts & Invites</span>
              <span className="font-medium">Essential Services</span>
              <span className="font-medium">Marketing</span>
              <span className="font-medium">Photography MP</span>
            </div>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="w-80 bg-neutral-50 p-6 border-r border-neutral-200">
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-lg text-sm"
                />
              </div>

              {/* Categories */}
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-rose-100 text-rose-700'
                        : 'text-neutral-600 hover:bg-neutral-100'
                    }`}
                  >
                    <Filter className="inline h-4 w-4 mr-2" />
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {designs.map((design, index) => (
                  <motion.div
                    key={design.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={design.image}
                          alt={design.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-neutral-800 mb-1">{design.name}</h3>
                        <p className="text-rose-600 font-medium">{design.price}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-neutral-700">
            Browse through <span className="text-rose-600 font-medium">10,000+</span> expertly selected designs to bring your vision to life
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignCatalogue;