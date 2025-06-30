import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Users, Award, Sparkles, Linkedin, Mail, Globe } from 'lucide-react';

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "200+", label: "Events Planned" },
    { number: "12+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Vendor Partners" }
  ];

  const values = [
    { icon: Heart, title: "Passion", description: "We pour our hearts into every event, treating each celebration as if it were our own." },
    { icon: Users, title: "Collaboration", description: "We work closely with you to understand your vision and bring it to life authentically." },
    { icon: Award, title: "Excellence", description: "We maintain the highest standards in every aspect of planning and execution." },
    { icon: Sparkles, title: "Creativity", description: "We bring fresh ideas and innovative solutions to make your event truly special." }
  ];

  return (
    <div className="bg-background-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[92vh] md:h-[90vh] lg:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/about.webp"
            alt="About Us Hero"
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
              Behind every celebration lies a story.
            </h1>
            <p className="text-lg sm:text-xl font-oswald font-normal leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              Ours is one of passion, precision, and purpose.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section ref={ref} className="py-12 lg:py-20 bg-background-500">
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
                  Zephyr Events is a Delhi/NCR-based event planning and design company with over 12 years of experience in crafting exceptional social and corporate events across India. From intimate gatherings to large-scale celebrations, we specialize in curating seamless experiences that are thoughtfully designed and flawlessly executed.
                </p>
                <p>
                  With a trusted network of vendors across the country, our team ensures smooth coordination, tailored concepts, and elevated guest experiences — no matter the scale or location. Every event we create is a reflection of our commitment to creativity, precision, and personalized service.
                </p>
                <p>
                  Founded by Hitin Sethi, Zephyr stands as a symbol of passion-driven planning, where every detail is handled with care and every celebration tells a story worth remembering.
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
                src="/ourstoryimg.webp"
                alt="Our story"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <Heart className="h-8 w-8 text-primary-900" />
                  <div>
                    <div className="text-2xl font-bold text-neutral-800">100+</div>
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

      {/* Meet Our Founder */}
      <section className="py-12 lg:py-20 bg-background-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-neutral-800 mb-6">
              Meet Our Founder
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Founder Image */}
                <div className="text-center">
                  <div className="relative mb-6">
                    <img
                      src="/founder.webp"
                      alt="Hitin Sethi"
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                    Hitin Sethi
                  </h3>
                  <p className="text-primary-900 font-medium mb-4">
                    Founder
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href="https://www.linkedin.com/in/hitinsethi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary-100 rounded-full text-primary-900 hover:bg-primary-200 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="mailto:hitin@wezephyr.com"
                      className="p-2 bg-primary-100 rounded-full text-primary-900 hover:bg-primary-200 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href="https://hitinsethi.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary-100 rounded-full text-primary-900 hover:bg-primary-200 transition-colors"
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* Founder Description */}
                <div className="md:col-span-2">
                  <p className="text-neutral-600 leading-relaxed">
                    With over a decade of experience in hospitality and event management, he brings a rare combination of structure, creativity, and calm precision to the ever-evolving world of events. From curating high-profile corporate gatherings to designing emotionally resonant social celebrations, his work is rooted in a deep understanding of guest experience and operational excellence.
                  </p>
                  <br />
                  <p className="text-neutral-600 leading-relaxed">
                    An engineer by education and a creator by passion, he has led the vision and execution behind countless seamless events across India. His journey also includes co-founding a successful café venture, reflecting his broader commitment to elevating experiences — whether through a plate, a party, or a perfectly planned moment.
                  </p>
                  <br />
                  <p className="text-neutral-600 leading-relaxed">
                    Driven by a love for design, detail, and genuine connection, he continues to push boundaries and set new standards in event planning.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values and Approach */}
      <section className="py-12 lg:py-20 bg-white">
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
            {values.map((value, index) => (
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
                <h4 className="text-xl font-semibold text-neutral-800 mb-4">{value.title}</h4>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;