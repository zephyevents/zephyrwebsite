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
      image: "/plan.png",
    },
    {
      title: "Destination & Venue Selection",
      image: "/udai.webp",
    },
    {
      title: "Design & Décor Management",
      image: "https://images.pexels.com/photos/32808785/pexels-photo-32808785.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    },
    {
      title: "RSVP & Hospitality",
      image: "https://images.pexels.com/photos/32808782/pexels-photo-32808782.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    },
    {
      title: "Entertainment",
      image: "https://images.pexels.com/photos/32808781/pexels-photo-32808781.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    },
    {
      title: "Special Entries",
      image: "https://images.pexels.com/photos/32864600/pexels-photo-32864600.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    },
    {
      title: "FnB & Catering",
      image: "https://images.pexels.com/photos/32808780/pexels-photo-32808780.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    },
    {
      title: "Photography",
      image: "https://images.pexels.com/photos/32864598/pexels-photo-32864598.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    },
    {
      title: "Choreography",
      image: "https://images.pexels.com/photos/32864597/pexels-photo-32864597.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    },
    {
      title: "Special Effects",
      image: "https://images.pexels.com/photos/32864599/pexels-photo-32864599.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    },
    {
      title: "Stationery & Invites",
      image: "/station..jpg",
    },
    {
      title: "Miscellaneous",
      image: "/miscgif.gif",
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
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-normal text-neutral-800 mb-6">
            Bespoke Services, Lasting Impressions
          </h2>
          <p className="text-lg font-medium tracking-wider uppercase" style={{ color: '#B03F3F' }}>
            LOVINGLY TAILORED TO YOUR VISION
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: "easeOut"
              }}
              className="service-card group bg-white relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Image with proper sizing */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                style={{ objectFit: 'cover' }}
              />
              
              {/* Base Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-3 md:p-4 lg:p-6 flex flex-col justify-end items-center text-center text-white">
                <h3 className="font-oswald text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal leading-tight uppercase tracking-wide text-center text-white gradient-text-hover">
                  {service.title}
                </h3>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 transition-all duration-300 rounded-lg"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
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
                className="text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-medium hover-scale shadow-lg hover:shadow-xl"
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