import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Planning & Execution",
      image: "/image copy.png"
    },
    {
      title: "Destination & Venue Selection",
      image: "/udai.webp"
    },
    {
      title: "Design & Decor Management",
      image: "/decor.jpg"
    },
    {
      title: "RSVP & Hospitality",
      image: "/hospitality.jpg"
    },
    {
      title: "Entertainment",
      image: "/enter1.JPG"
    },
    {
      title: "Special Entries",
      image: "/entry.jpg"
    },
    {
      title: "FnB & Catering",
      image: "/catering.JPG"
    },
    {
      title: "Photography",
      image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      title: "Choreography",
      image: "/choreo.JPG"
    },
    {
      title: "Special Effects",
      image: "/enter.JPG"
    },
    {
      title: "Stationery & Invites",
      image: "/station..jpg"
    },
    {
      title: "Miscellaneous",
      image: "/miscgif.gif"
    }
  ];

  const handleTalkToUs = () => {
    window.open('https://wa.me/919027379045?text=Hi%21%20I%27m%20interested%20in%20your%20wedding%20planning%20services.%20Can%20you%20share%20more%20details%3F', '_blank');
  };

  return (
    <section ref={ref} className="py-12 lg:py-20 bg-neutral-50" style={{ backgroundColor: '#EDE6DE' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-normal text-neutral-800 mb-6">
            Bespoke Services, Lasting Impressions
          </h2>
          <p className="text-lg font-medium tracking-wider uppercase" style={{ color: '#B03F3F' }}>
            LOVINGLY TAILORED TO YOUR VISION
          </p>
        </motion.div>

        {/* Services Grid - Square Cards with Small Gaps */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden aspect-square bg-white cursor-pointer rounded-lg"
            >
              {/* Background Image with optimized loading */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                
                {/* Base Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Hover Gradient Overlay with custom color */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#B64D4D]/90 via-[#B64D4D]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content - Bottom center for all screen sizes */}
              <div className="absolute inset-0 p-3 md:p-4 lg:p-6 flex flex-col justify-end items-center text-center text-white">
                {/* Title - Bottom center on all screen sizes with gradient text effect on hover */}
                <h3 className="font-oswald text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal leading-tight uppercase tracking-wide text-center transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-pink-100 group-hover:to-white group-hover:bg-clip-text group-hover:text-transparent group-hover:drop-shadow-lg">
                  {service.title}
                </h3>
              </div>

              {/* Hover Border Effect with gradient */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/40 transition-all duration-300 rounded-lg group-hover:shadow-lg group-hover:shadow-[#B64D4D]/20"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12 lg:mt-20"
        >
          <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-12 shadow-xl border border-neutral-100">
            <h3 className="text-xl lg:text-3xl font-heading font-medium text-neutral-800 mb-4 lg:mb-6">
              Ready to Create Something Extraordinary?
            </h3>
            <p className="text-base lg:text-lg text-neutral-600 mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your vision and create a customized service package that perfectly 
              matches your dreams and requirements.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={handleTalkToUs}
                className="text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{ backgroundColor: '#B03F3F' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#9A3535'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B03F3F'}
              >
                Talk to Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;