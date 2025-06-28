import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How far in advance should I book your services?",
      answer: "We recommend booking our services 6-12 months in advance for weddings and 3-6 months for other events. However, we understand that sometimes plans come together quickly, and we'll do our best to accommodate shorter timelines when possible."
    },
    {
      question: "What's included in your wedding planning packages?",
      answer: "Our wedding planning packages include initial consultation, vendor coordination, timeline creation, budget management, venue selection assistance, décor planning, and day-of coordination. We also offer customizable add-ons like additional planning sessions, rehearsal coordination, and extended day-of support."
    },
    {
      question: "Do you handle events outside of weddings?",
      answer: "Absolutely! While weddings are our specialty, we plan all types of celebrations including corporate events, birthday parties, anniversaries, baby showers, engagement parties, and holiday gatherings. Each event receives the same level of attention and care."
    },
    {
      question: "How do you handle budget management?",
      answer: "We work closely with you to establish a realistic budget from the start and provide detailed tracking throughout the planning process. We'll help you prioritize spending on what matters most to you and find creative ways to maximize your budget while achieving your vision."
    },
    {
      question: "Can you work with vendors I've already chosen?",
      answer: "Of course! We're happy to coordinate with vendors you've already selected. We can also recommend trusted vendors from our network to fill any gaps. Our goal is to create a cohesive team that works together seamlessly for your event."
    },
    {
      question: "What happens if there's bad weather for an outdoor event?",
      answer: "We always have contingency plans in place for outdoor events. This includes backup indoor locations, tent rentals, and timeline adjustments. We monitor weather forecasts closely and communicate all backup plans with you well in advance."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we understand that event planning is a significant investment. We offer flexible payment plans that can be customized to your needs, typically with an initial deposit followed by scheduled payments leading up to your event date."
    },
    {
      question: "How many events do you take on per month?",
      answer: "We intentionally limit the number of events we take on each month to ensure every client receives our full attention and expertise. This allows us to maintain our high standards of service and be fully present for your special day."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-neutral-800 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Find answers to common questions about our event planning services and process.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-neutral-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-neutral-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-neutral-800 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-primary-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-neutral-500" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-neutral-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8">
            <h3 className="text-2xl font-heading font-semibold text-neutral-800 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              We're here to help! Don't hesitate to reach out for a personalized consultation 
              where we can address all your specific questions and concerns.
            </p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
              Contact Us Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;