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
      description: "Complete end-to-end wedding planning with meticulous attention to every detail",
      image: "/image copy.png"
    },
    {
      title: "Destination & Venue Selection",
      description: "Curated selection of stunning venues and destinations that perfectly match your vision",
      image: "/destination.JPG"
    },
    {
      title: "Design & Decor Management",
      description: "Breathtaking decorations and design management that transform spaces into magical celebrations",
      image: "/decor.jpg"
    },
    {
      title: "RSVP & Hospitality",
      description: "Comprehensive guest management and exceptional hospitality services for memorable experiences",
      image: "/hospitality.jpg"
    },
    {
      title: "Entertainment & Special Effects",
      description: "Live performances, entertainment coordination and special effects that create unforgettable atmospheres",
      image: "/enter.JPG"
    },
    {
      title: "Special Entries",
      description: "Grand entrances and special moments that leave lasting impressions on your guests",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
    },
    {
      title: "FnB & Catering",
      description: "Exquisite culinary experiences with diverse menus and impeccable food & beverage service",
      image: "https://images.pexels.com/photos/8108042/pexels-photo-8108042.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
    },
    {
      title: "Photography",
      description: "Professional photography capturing every precious moment of your celebration",
      image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
    },
    {
      title: "Choreography",
      description: "Professional dance choreography for memorable performances and celebrations",
      image: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
    },
    {
      title: "Logistics Management",
      description: "Comprehensive logistics coordination ensuring seamless execution of all event elements",
      image: "https://images.pexels.com/photos/264917/pexels-photo-264917.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
    },
    {
      title: "Stationery & Invites",
      description: "Beautiful stationery and invitations that set the perfect tone for your event",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
    },
    {
      title: "Renting Essentials",
      description: "Complete rental solutions for furniture, equipment, and all event essentials",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
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
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content - Mobile/Tablet: Bottom center, Desktop: Centered with hover description */}
              <div className="absolute inset-0 p-3 md:p-4 lg:p-6 flex flex-col justify-end lg:justify-center items-center text-center text-white">
                {/* Title - Bottom center on mobile/tablet, centered on desktop */}
                <h3 className="font-oswald text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal leading-tight uppercase tracking-wide text-center mb-3 lg:mb-4">
                  {service.title}
                </h3>

                {/* Description - Only visible on desktop hover */}
                <p className="text-white/90 leading-relaxed text-sm lg:text-base font-opensauce opacity-0 lg:group-hover:opacity-100 transform translate-y-2 lg:group-hover:translate-y-0 transition-all duration-300 max-w-xs text-center hidden lg:block">
                  {service.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 transition-all duration-300 rounded-lg"></div>
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