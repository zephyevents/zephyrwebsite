import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Users, Award, Sparkles, Star, Camera } from 'lucide-react';

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "500+", label: "Events Planned" },
    { number: "12+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Vendor Partners" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Lead Planner",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "With over 12 years in event planning, Sarah brings passion and precision to every celebration."
    },
    {
      name: "Emily Chen",
      role: "Creative Director",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Emily's artistic vision transforms spaces into magical settings that perfectly reflect each couple's style."
    },
    {
      name: "Michael Rodriguez",
      role: "Logistics Coordinator",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Michael ensures every detail runs smoothly, managing timelines and vendor coordination flawlessly."
    },
    {
      name: "Amanda Thompson",
      role: "Client Relations Manager",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Amanda is dedicated to making your planning journey stress-free and enjoyable from start to finish."
    }
  ];

  return (
    <div className="bg-background-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[92vh] md:h-[92vh] lg:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="About Us Hero"
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
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold mb-6">
              About Zephyr Events
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
              We believe every love story deserves a celebration as unique and beautiful as the couple themselves. 
              Since 2010, we've been crafting unforgettable moments with elegant design and flawless execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section ref={ref} className="py-20 lg:py-32 bg-background-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <p>
                  Zephyr Events was born from a simple belief: that every celebration should be as unique 
                  as the people it honors. Founded in 2010 by Sarah Johnson, our company started as a 
                  small dream to create meaningful, beautiful events that would be remembered for a lifetime.
                </p>
                <p>
                  What began as planning intimate gatherings for friends and family has grown into one of 
                  the region's most trusted event planning companies. We've had the privilege of being 
                  part of over 500 celebrations, each one teaching us something new about the art of 
                  bringing people together.
                </p>
                <p>
                  Today, our team combines years of experience with fresh creativity, ensuring that every 
                  event we plan reflects the personality and style of our clients while exceeding their 
                  expectations in every way.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Sarah Johnson planning an event"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <Heart className="h-8 w-8 text-primary-900" />
                  <div>
                    <div className="text-2xl font-bold text-neutral-800">500+</div>
                    <div className="text-sm text-neutral-600">Happy Couples</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values and Approach */}
      <section className="py-20 lg:py-32 bg-background-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-neutral-800 mb-6">
              Our Values & Approach
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Everything we do is guided by our core values and commitment to excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Passion", description: "We pour our hearts into every event, treating each celebration as if it were our own." },
              { icon: Users, title: "Collaboration", description: "We work closely with you to understand your vision and bring it to life authentically." },
              { icon: Award, title: "Excellence", description: "We maintain the highest standards in every aspect of planning and execution." },
              { icon: Sparkles, title: "Creativity", description: "We bring fresh ideas and innovative solutions to make your event truly special." }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white hover:bg-primary-50 transition-colors group"
              >
                <div className="w-16 h-16 bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-neutral-800 mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Behind every successful event is a dedicated team of professionals who bring passion, 
              creativity, and expertise to your celebration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 text-center">
                  {member.name}
                </h3>
                <p className="text-primary-900 font-medium text-center mb-4">
                  {member.role}
                </p>
                <p className="text-neutral-600 text-sm leading-relaxed text-center">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="py-20 lg:py-32 bg-background-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-neutral-800 mb-6">
              Awards & Recognition
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              We're honored to be recognized by industry leaders and publications for our 
              commitment to excellence in event planning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { year: "2023", award: "Best Wedding Planner", organization: "Wedding Industry Awards", icon: Award },
              { year: "2022", award: "Event Planner of the Year", organization: "Regional Business Awards", icon: Star },
              { year: "2021", award: "Excellence in Design", organization: "Event Design Magazine", icon: Camera }
            ].map((recognition, index) => (
              <motion.div
                key={recognition.award}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl"
              >
                <div className="w-16 h-16 bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <recognition.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-neutral-800 mb-2">{recognition.year}</div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">{recognition.award}</h3>
                <p className="text-neutral-600">{recognition.organization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;