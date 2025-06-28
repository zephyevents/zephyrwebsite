import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Users, Sparkles, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Heart,
      title: "The Story",
      description: "Born from a passion for creating magical moments, Zephyr Events has been crafting unforgettable celebrations for over a decade."
    },
    {
      icon: Users,
      title: "The People",
      description: "Our team of experienced planners, designers, and coordinators work tirelessly to bring your vision to life with precision and care."
    },
    {
      icon: Sparkles,
      title: "The Style",
      description: "We specialize in elegant, sophisticated events that reflect your unique personality while maintaining timeless appeal."
    },
    {
      icon: Award,
      title: "The Values",
      description: "Excellence, creativity, and attention to detail are at the heart of everything we do, ensuring your day is absolutely perfect."
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-neutral-800 mb-6">
            About Zephyr Events
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We believe every love story deserves a celebration as unique and beautiful as the couple themselves. 
            Let us help you create memories that will last a lifetime.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Wedding planning team"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-neutral-100"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-neutral-600">Events Crafted</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-heading font-semibold text-neutral-800 mb-6">
              Creating Magic Since 2010
            </h3>
            <p className="text-neutral-600 leading-relaxed mb-8">
              What started as a small dream has blossomed into one of the region's most trusted 
              event planning companies. We've had the privilege of being part of countless love 
              stories, each one teaching us something new about the art of celebration.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Our approach combines meticulous planning with creative flair, ensuring that every 
              detail reflects your personal style while exceeding your expectations. From intimate 
              gatherings to grand celebrations, we bring the same level of passion and expertise 
              to every event.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="text-center group"
            >
              <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                <feature.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="text-xl font-semibold text-neutral-800 mb-4">{feature.title}</h4>
              <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;