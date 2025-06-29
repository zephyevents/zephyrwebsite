import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Calendar, 
  MapPin, 
  Palette, 
  Users, 
  Music, 
  Star, 
  Camera, 
  ChefHat,
  Zap,
  Mail,
  Package,
  MoreHorizontal
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Calendar,
      title: "Planning & Execution",
      description: "Complete end-to-end wedding planning with meticulous attention to every detail",
      image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: MapPin,
      title: "Venue Selection",
      description: "Curated selection of stunning venues that perfectly match your vision and style",
      image: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: Palette,
      title: "Decor",
      description: "Breathtaking decorations that transform spaces into magical celebrations",
      image: "https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: Users,
      title: "Hospitality Services",
      description: "Exceptional guest services ensuring comfort and memorable experiences",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: Music,
      title: "Entertainment and Vibes",
      description: "Live performances and entertainment that create unforgettable atmospheres",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: Star,
      title: "Special Entries",
      description: "Grand entrances and special moments that leave lasting impressions",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography capturing every precious moment of your celebration",
      image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: ChefHat,
      title: "Catering",
      description: "Exquisite culinary experiences with diverse menus and impeccable service",
      image: "https://images.pexels.com/photos/8108042/pexels-photo-8108042.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: Zap,
      title: "Choreography",
      description: "Professional dance choreography for memorable performances and celebrations",
      image: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: Mail,
      title: "Digital Invites",
      description: "Beautiful digital invitations that set the perfect tone for your event",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: Package,
      title: "Renting Essentials",
      description: "Complete rental solutions for furniture, equipment, and event essentials",
      image: "https://images.pexels.com/photos/264917/pexels-photo-264917.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: MoreHorizontal,
      title: "Miscellaneous",
      description: "Additional specialized services tailored to your unique requirements",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-normal text-neutral-800 mb-6">
            Thoughtful services, priceless moments
          </h2>
          <p className="text-lg font-medium tracking-wider uppercase" style={{ color: '#B03F3F' }}>
            LOVINGLY CRAFTED JUST FOR YOU
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-rose-100"
            >
              {/* Background Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Simple Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-ppacma font-light mb-3 text-center group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-neutral-100">
            <h3 className="text-3xl font-heading font-medium text-neutral-800 mb-6">
              Ready to Create Something Extraordinary?
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your vision and create a customized service package that perfectly 
              matches your dreams and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{ backgroundColor: '#B03F3F' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#9A3535'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B03F3F'}
              >
                Get Free Consultation
              </button>
              <button className="border-2 border-neutral-300 hover:border-neutral-400 text-neutral-700 hover:text-neutral-800 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
                View Our Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;