import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Calendar, 
  Palette, 
  MapPin, 
  ChefHat, 
  Camera, 
  Music, 
  Flower,
  Gift,
  Check,
  ArrowRight
} from 'lucide-react';

const ServicesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Calendar,
      title: "Wedding Planning",
      description: "Complete wedding coordination from concept to execution",
      image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Timeline Creation", "Vendor Coordination", "Budget Management", "Day-of Coordination"],
      price: "Starting at $2,500"
    },
    {
      icon: Palette,
      title: "Event Decor",
      description: "Stunning decorations that transform your venue",
      image: "https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Custom Design", "Floral Arrangements", "Lighting Design", "Centerpiece Creation"],
      price: "Starting at $1,800"
    },
    {
      icon: MapPin,
      title: "Venue Selection",
      description: "Perfect locations for your special celebration",
      image: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Location Scouting", "Venue Negotiations", "Site Visits", "Contract Review"],
      price: "Starting at $800"
    },
    {
      icon: ChefHat,
      title: "Catering Services",
      description: "Exquisite cuisine crafted by renowned chefs",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Menu Planning", "Dietary Accommodations", "Service Staff", "Bar Services"],
      price: "Starting at $65 per person"
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Professional photographers to capture every moment",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Engagement Sessions", "Wedding Day Coverage", "Photo Albums", "Video Editing"],
      price: "Starting at $2,200"
    },
    {
      icon: Flower,
      title: "Mehendi & Henna",
      description: "Traditional and contemporary henna designs",
      image: "https://images.pexels.com/photos/8108042/pexels-photo-8108042.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Custom Designs", "Bridal Packages", "Guest Services", "Traditional Patterns"],
      price: "Starting at $150"
    },
    {
      icon: Music,
      title: "Entertainment",
      description: "Live music, DJs, and entertainment coordination",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["DJ Services", "Live Bands", "Sound Systems", "Special Performances"],
      price: "Starting at $1,200"
    },
    {
      icon: Gift,
      title: "Guest Services",
      description: "Welcome gifts, accommodations, and guest care",
      image: "https://images.pexels.com/photos/264917/pexels-photo-264917.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Welcome Bags", "Transportation", "Accommodation Booking", "Concierge Services"],
      price: "Starting at $50 per guest"
    }
  ];

  const packages = [
    {
      name: "Essential",
      price: "$3,500",
      description: "Perfect for intimate celebrations",
      features: [
        "Event planning consultation",
        "Timeline creation",
        "Vendor recommendations",
        "Day-of coordination",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "$6,500",
      description: "Our most popular comprehensive package",
      features: [
        "Everything in Essential",
        "Venue selection assistance",
        "Design consultation",
        "Unlimited planning meetings",
        "Rehearsal coordination",
        "Weekend support"
      ],
      popular: true
    },
    {
      name: "Luxury",
      price: "$12,000",
      description: "Full-service planning with premium touches",
      features: [
        "Everything in Premium",
        "Guest services coordination",
        "Welcome event planning",
        "VIP vendor access",
        "24/7 planning support",
        "Post-event cleanup"
      ],
      popular: false
    }
  ];

  return (
    <div className="bg-background-500">
      {/* Hero Section with Slideshow */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Services Hero"
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
              Our Services
            </h1>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              From intimate ceremonies to grand celebrations, we offer comprehensive event planning 
              services tailored to your unique vision and style.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-20 lg:py-32 bg-background-500">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-full">
                    <service.icon className="h-6 w-6 text-primary-900" />
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-neutral-800">
                    {service.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-3 group-hover:text-primary-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-neutral-600">
                        <Check className="h-4 w-4 text-primary-900 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="w-full bg-primary-50 text-primary-900 px-4 py-3 rounded-lg font-medium hover:bg-primary-100 transition-colors flex items-center justify-center space-x-2 group-hover:bg-primary-900 group-hover:text-white">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-neutral-800 mb-6">
              Planning Packages
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Choose the package that best fits your needs, or let us create a custom solution 
              tailored specifically for your event.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  pkg.popular ? 'scale-105 border-2 border-primary-200' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-primary-900 text-white rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-bold text-neutral-800 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-neutral-600 mb-4">{pkg.description}</p>
                  <div className="text-4xl font-bold text-primary-900 mb-2">{pkg.price}</div>
                  <p className="text-sm text-neutral-500">Starting price</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-primary-900 mr-3 flex-shrink-0" />
                      <span className="text-neutral-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-semibold transition-colors ${
                  pkg.popular
                    ? 'bg-primary-900 text-white hover:bg-primary-800'
                    : 'bg-primary-50 text-primary-900 hover:bg-primary-100'
                }`}>
                  Choose {pkg.name}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Custom Package CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-background-500 rounded-3xl p-8 lg:p-12 shadow-xl max-w-3xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-neutral-800 mb-4">
                Need Something Custom?
              </h3>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Every event is unique, and we're happy to create a custom package that perfectly 
                fits your vision, style, and budget. Let's discuss your specific needs.
              </p>
              <button className="bg-gradient-to-r from-primary-900 to-primary-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-primary-800 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Request Custom Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-background-500">
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
                title: "500+ Events Planned",
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
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;