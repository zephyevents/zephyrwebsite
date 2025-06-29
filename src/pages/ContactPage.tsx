import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, Users } from 'lucide-react';

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@zephyrevents.com",
      subtitle: "hello@zephyrevents.com",
      description: "Send us an email anytime and we'll get back to you within 24 hours."
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtitle: "+1 (555) 123-4568",
      description: "Speak directly with our planning team during business hours."
    },
    {
      icon: MapPin,
      title: "Visit Our Studio",
      details: "123 Event Plaza",
      subtitle: "New York, NY 10001",
      description: "Schedule an appointment to visit our beautiful planning studio."
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon - Fri: 9AM - 6PM",
      subtitle: "Sat: 10AM - 4PM",
      description: "We're here when you need us most, including weekend consultations."
    }
  ];

  const faqs = [
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking 6-12 months in advance for weddings, 3-6 months for other events."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment plans customized to your needs and timeline."
    },
    {
      question: "What's included in your packages?",
      answer: "Our packages include planning, coordination, vendor management, and day-of support."
    }
  ];

  return (
    <div className="bg-background-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[92vh] md:h-[90vh] lg:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Contact Hero"
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
              Let's Plan Your Perfect Event
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
              Ready to start planning? Get in touch with us today for a complimentary consultation. 
              We'd love to hear about your vision and help make it a reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section ref={ref} className="py-20 lg:py-32 bg-background-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl p-8 lg:p-12">
                <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-2">
                  Tell Us About Your Event
                </h2>
                <p className="text-neutral-600 mb-8">
                  The more details you share, the better we can tailor our services to your needs.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 rounded-xl border border-neutral-200 bg-white focus:border-primary-900 focus:ring-2 focus:ring-primary-200 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 rounded-xl border border-neutral-200 bg-white focus:border-primary-900 focus:ring-2 focus:ring-primary-200 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-4 rounded-xl border border-neutral-200 bg-white focus:border-primary-900 focus:ring-2 focus:ring-primary-200 transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-semibold text-neutral-700 mb-2">
                        Event Type *
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 rounded-xl border border-neutral-200 bg-white focus:border-primary-900 focus:ring-2 focus:ring-primary-200 transition-colors"
                      >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="engagement">Engagement Party</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-semibold text-neutral-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-4 rounded-xl border border-neutral-200 bg-white focus:border-primary-900 focus:ring-2 focus:ring-primary-200 transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="guestCount" className="block text-sm font-semibold text-neutral-700 mb-2">
                        Guest Count
                      </label>
                      <select
                        id="guestCount"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full px-4 py-4 rounded-xl border border-neutral-200 bg-white focus:border-primary-900 focus:ring-2 focus:ring-primary-200 transition-colors"
                      >
                        <option value="">Select range</option>
                        <option value="1-25">1-25 guests</option>
                        <option value="26-50">26-50 guests</option>
                        <option value="51-100">51-100 guests</option>
                        <option value="101-200">101-200 guests</option>
                        <option value="200+">200+ guests</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-neutral-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-4 rounded-xl border border-neutral-200 bg-white focus:border-primary-900 focus:ring-2 focus:ring-primary-200 transition-colors"
                      >
                        <option value="">Select budget</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k+">$100,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Tell Us About Your Vision *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 rounded-xl border border-neutral-200 bg-white focus:border-primary-900 focus:ring-2 focus:ring-primary-200 transition-colors resize-none"
                      placeholder="Share your ideas, preferences, style inspiration, and any specific requirements. The more details you provide, the better we can understand your vision..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-primary-900 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-800 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-heading font-bold text-neutral-800 mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary-100 rounded-xl">
                          <info.icon className="h-6 w-6 text-primary-900" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-neutral-800 mb-1">
                            {info.title}
                          </h4>
                          <p className="text-neutral-800 font-medium mb-1">
                            {info.details}
                          </p>
                          <p className="text-neutral-600 text-sm mb-2">
                            {info.subtitle}
                          </p>
                          <p className="text-neutral-500 text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 text-white"
              >
                <h4 className="text-lg font-semibold mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors">
                    <Calendar className="h-5 w-5" />
                    <span>Schedule Consultation</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors">
                    <MessageCircle className="h-5 w-5" />
                    <span>Live Chat Support</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors">
                    <Users className="h-5 w-5" />
                    <span>Meet Our Team</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral-800 mb-4">
              Visit Our Studio
            </h2>
            <p className="text-lg text-neutral-600">
              Located in the heart of New York, our beautiful planning studio is the perfect place 
              to discuss your event vision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="h-96 bg-neutral-100 rounded-xl flex items-center justify-center">
              <div className="text-center text-neutral-500">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p className="text-neutral-600">123 Event Plaza, New York, NY 10001</p>
                <p className="text-sm text-neutral-500 mt-2">
                  Convenient parking available • Subway accessible
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral-800 mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-neutral-600">
              Quick answers to help you get started with your event planning journey.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6"
              >
                <h4 className="text-lg font-semibold text-neutral-800 mb-3">
                  {faq.question}
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;