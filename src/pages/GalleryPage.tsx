import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const GalleryPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Events', count: 48 },
    { id: 'weddings', name: 'Weddings', count: 24 },
    { id: 'decor', name: 'Decor', count: 12 },
    { id: 'venues', name: 'Venues', count: 8 },
    { id: 'catering', name: 'Catering', count: 6 },
  ];

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Elegant wedding ceremony setup",
      category: "weddings",
      title: "Garden Wedding Ceremony",
      description: "Romantic outdoor ceremony with white florals and natural greenery"
    },
    {
      src: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Wedding reception table setting",
      category: "decor",
      title: "Reception Table Design",
      description: "Elegant table setting with gold accents and candlelight"
    },
    {
      src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Bridal bouquet arrangements",
      category: "decor",
      title: "Bridal Florals",
      description: "Custom bridal bouquet with seasonal blooms"
    },
    {
      src: "https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Reception centerpiece",
      category: "decor",
      title: "Centerpiece Design",
      description: "Luxurious centerpiece with mixed textures and heights"
    },
    {
      src: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Outdoor wedding venue",
      category: "venues",
      title: "Waterfront Venue",
      description: "Stunning lakeside venue with mountain backdrop"
    },
    {
      src: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Wedding cake display",
      category: "catering",
      title: "Custom Wedding Cake",
      description: "Three-tier cake with fresh flowers and gold details"
    },
    {
      src: "https://images.pexels.com/photos/8108042/pexels-photo-8108042.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Mehendi ceremony setup",
      category: "weddings",
      title: "Mehendi Celebration",
      description: "Colorful mehendi ceremony with traditional decor"
    },
    {
      src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Live entertainment at wedding",
      category: "weddings",
      title: "Reception Entertainment",
      description: "Live band performance during wedding reception"
    },
    {
      src: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Cocktail hour setup",
      category: "catering",
      title: "Cocktail Reception",
      description: "Elegant cocktail hour with signature drinks"
    },
    {
      src: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Ceremony aisle decoration",
      category: "decor",
      title: "Ceremony Aisle",
      description: "Petal-lined aisle with hanging floral installations"
    },
    {
      src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Ballroom venue setup",
      category: "venues",
      title: "Grand Ballroom",
      description: "Elegant ballroom with crystal chandeliers"
    },
    {
      src: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Outdoor lounge area",
      category: "venues",
      title: "Outdoor Lounge",
      description: "Comfortable outdoor seating area with fire features"
    }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="bg-background-500">
      {/* Hero Section with Slideshow */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Gallery Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              Event Gallery
            </h1>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              Explore our portfolio of beautiful weddings and events. Each celebration tells a unique 
              story of love, joy, and unforgettable moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section ref={ref} className="py-12 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === category.id
                    ? 'bg-primary-900 text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-primary-50 hover:text-primary-900'
                }`}
              >
                <Filter className="h-4 w-4" />
                <span>{category.name}</span>
                <span className="text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${activeFilter}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm text-neutral-200">{image.description}</p>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-neutral-800 capitalize">
                  {image.category}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <button className="bg-primary-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-800 transition-colors shadow-lg hover:shadow-xl">
              Load More Images
            </button>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-full w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg mx-auto"
            />
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-center text-white">
              <h3 className="text-xl font-semibold mb-2">{filteredImages[selectedImage].title}</h3>
              <p className="text-neutral-300 mb-2">{filteredImages[selectedImage].description}</p>
              <p className="text-sm text-neutral-400">
                {selectedImage + 1} of {filteredImages.length} • {filteredImages[selectedImage].category}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral-800 mb-6">
              Ready to Create Your Own Story?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Let us help you create beautiful memories that will be treasured for a lifetime. 
              Every event is unique, and we're here to bring your vision to life.
            </p>
            <button className="bg-primary-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-800 transition-colors shadow-lg hover:shadow-xl">
              Start Planning Your Event
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;