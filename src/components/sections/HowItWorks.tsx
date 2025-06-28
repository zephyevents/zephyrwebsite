import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Search, Palette, Calendar, Sparkles } from 'lucide-react';

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: MessageCircle,
      title: "Talk to Us",
      description: "Share your vision, dreams, and ideas with our expert planning team during a personalized consultation.",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Search,
      title: "Explore Options",
      description: "We present curated options for venues, vendors, and services that align with your style and budget.",
      color: "from-secondary-500 to-secondary-600"
    },
    {
      icon: Palette,
      title: "Customize Package",
      description: "Design your perfect event package with our flexible options and personalized touches.",
      color: "from-accent-500 to-accent-600"
    },
    {
      icon: Calendar,
      title: "Book & Plan",
      description: "Secure your date and let us handle every detail with our comprehensive planning timeline.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Sparkles,
      title: "Relax & Celebrate",
      description: "Enjoy your special day while we ensure everything runs perfectly behind the scenes.",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-neutral-800 mb-6">
            How It Works
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Our proven 5-step process ensures your event planning journey is smooth, 
            enjoyable, and stress-free from start to finish.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-secondary-200 to-accent-200 transform -translate-y-1/2" />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative text-center group"
              >
                {/* Step Number */}
                <div className="relative z-10 mb-6">
                  <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-neutral-100">
                    <span className="text-sm font-bold text-neutral-700">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-3 group-hover:text-primary-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-4 h-4 transform -translate-x-2">
                    <div className="w-0 h-0 border-l-8 border-l-neutral-300 border-t-8 border-t-transparent border-b-8 border-b-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-neutral-800 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Let's begin with step one. Schedule your complimentary consultation and 
              let us help bring your dream event to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;