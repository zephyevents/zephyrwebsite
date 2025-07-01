import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const ServicesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Planning & Execution",
      image: "/plan.png",
      features: ["Timeline Creation", "Vendor Coordination", "Budget Management", "Day-of Coordination"]
    },
    {
      title: "Destination & Venue Selection",
      image: "/udai.webp",
      features: ["Location Scouting", "Venue Negotiations", "Site Visits", "Contract Review"]
    },
    {
      title: "Design & Décor Management",
      image: "https://images.pexels.com/photos/32808785/pexels-photo-32808785.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Custom Design", "Floral Arrangements", "Lighting Design", "Décor-Based Special Entries (Matrix, Vogue, Retro Glam)"]
    },
    {
      title: "RSVP & Hospitality",
      image: "https://images.pexels.com/photos/32808782/pexels-photo-32808782.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Guest Management", "RSVP Tracking", "Check-in Welcome Desk", "Pickup Support"]
    },
    {
      title: "Entertainment",
      image: "https://images.pexels.com/photos/32808781/pexels-photo-32808781.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["DJ Services", "Live Bands", "Sound Systems", "Choreography"]
    },
    {
      title: "Special Entries",
      image: "https://images.pexels.com/photos/32808784/pexels-photo-32808784.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Entrance Design", "Special Effects", "Choreography", "Timing Coordination"]
    },
    {
      title: "FnB & Catering",
      image: "https://images.pexels.com/photos/32808780/pexels-photo-32808780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Menu Planning", "Dietary Accommodations", "Service Staff", "Bar Services"]
    },
    {
      title: "Photography",
      image: "https://images.pexels.com/photos/32808778/pexels-photo-32808778.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Engagement Sessions", "Wedding Day Coverage", "Photo Albums", "Video Editing"]
    },
    {
      title: "Choreography",
      image: "https://images.pexels.com/photos/32808783/pexels-photo-32808783.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Dance Lessons", "Performance Choreography", "Music Selection", "Rehearsal Coordination"]
    },
    {
      title: "Special Effects",
      image: "https://images.pexels.com/photos/32808779/pexels-photo-32808779.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["LED Displays", "Skyshots", "Fireworks", "Fog Machines"]
    },
    {
      title: "Stationery & Invites",
      image: "/station..jpg",
      features: ["Custom Design", "Digital Invites", "Itinerary Design", "Thank You Cards"]
    },
    {
      title: "Miscellaneous",
      image: "/miscgif.gif",
      features: ["Hampers & Return Favors Curation", "Cake & Champagne Tower", "Equipment Rentals (Mist Fans, Steam Iron, Hangers)", "Snacking & Relax Corners (Popcorn, DIY Snacks, Foot Spa)"]
    }
  ];

  // Split planning features into two groups for side-by-side layout
  const planningFeaturesGroup1 = [
    "Event planning consultation",
    "Timeline creation", 
    "Vendor recommendations",
    "Day-of coordination",
    "Venue selection assistance"
  ];

  const planningFeaturesGroup2 = [
    "Design & Décor Consultation",
    "Unlimited planning meetings",
    "Weekend support",
    "Guest service coordination"
  ];

  return (
    <div className="bg-background-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[92vh] md:h-[90vh] lg:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/serviceshero.webp"
            alt="Services Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-oswald font-normal mb-6 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
              Your celebration deserves nothing short of extraordinary.
            </h1>
            <p className="text-lg sm:text-xl font-oswald font-normal leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              We're here to make that happen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section ref={ref} className="py-12 lg:py-20 bg-background-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-neutral-800 mb-6">
              What We Offer
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Each service is designed to bring your vision to life with attention to detail and 
              personalized touches that make your event uniquely yours.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group bg-white rounded-xl lg:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-32 md:h-48 lg:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
                  
                  {/* Title - Bottom center overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 text-center">
                    <h3 className="text-sm md:text-lg lg:text-xl font-oswald font-normal leading-tight uppercase tracking-wide text-white transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#B64D4D] group-hover:to-white group-hover:bg-clip-text group-hover:text-transparent group-hover:drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content - Features */}
                <div className="p-3 md:p-6">
                  {/* Features */}
                  <ul className="space-y-1 md:space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start text-xs md:text-sm text-neutral-600">
                        <Check className="h-3 w-3 md:h-4 md:w-4 text-primary-900 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-neutral-800 mb-6">
              Why Choose Zephyr Events?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "12+ Years Experience",
                description: "Over a decade of creating unforgettable celebrations with expertise you can trust."
              },
              {
                title: "200+ Events Planned",
                description: "From intimate gatherings to grand celebrations, we've brought countless visions to life."
              },
              {
                title: "98% Client Satisfaction",
                description: "Our clients consistently rate us highly for our professionalism and attention to detail."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center p-8 bg-white rounded-2xl"
              >
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#B14040' }}>
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Your Happily Ever After Section - FIXED: Two columns centered as a group */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-rose-50 to-mauve-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-neutral-800 mb-6">
              Plan Your Happily Ever After with Us
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
            >
              {/* Two-column layout centered as a group */}
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
                  {/* Left Column */}
                  <div>
                    <ul className="space-y-4">
                      {planningFeaturesGroup1.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Check className="h-5 w-5 text-primary-900 mr-3 flex-shrink-0" />
                          <span className="text-neutral-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column */}
                  <div>
                    <ul className="space-y-4">
                      {planningFeaturesGroup2.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Check className="h-5 w-5 text-primary-900 mr-3 flex-shrink-0" />
                          <span className="text-neutral-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mt-8">
                <Link
                  to="/contact"
                  className="inline-block text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: '#B14040' }}
                >
                  Talk to Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;