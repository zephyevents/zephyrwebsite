import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`New Event Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Type: ${formData.eventType}
Event Date: ${formData.eventDate}
Guest Count: ${formData.guestCount}
Budget: ${formData.budget}

Message:
${formData.message}
      `);
      
      // Open default email client
      window.location.href = `mailto:yashdtb@gmail.com,contact@wezephyr.com?subject=${subject}&body=${body}`;
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          guestCount: '',
          budget: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "contact@wezephyr.com",
      subtitle: "Feedback Form",
      description: "Send us an email anytime and we'll get back to you within 24 hours."
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 7678590878",
      subtitle: "",
      description: "Speak directly with our planning team during business hours."
    },
    {
      icon: MapPin,
      title: "Our Location",
      details: "Zephyr Events,",
      subtitle: "B 36, Second Floor, Block B, Mayapuri Industrial Area Phase I, Mayapuri, New Delhi, Delhi, 110064",
      description: "Schedule an appointment to visit our planning office."
    }
  ];

  const handleWhatsAppChat = () => {
    window.open('https://wa.me/919027379045?text=Hi%21%20I%27m%20interested%20in%20your%20event%20planning%20services.%20Can%20you%20share%20more%20details%3F', '_blank');
  };

  return (
    <div className="bg-background-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[92vh] md:h-[90vh] lg:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.pexels.com/photos/32867556/pexels-photo-32867556.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Contact Hero"
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
              Connect With Us
            </h1>
            <p className="text-lg sm:text-xl font-oswald font-normal leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              Every great event begins with a conversation.
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
                        placeholder="+91 7678590878"
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
                        <option value="1L-3L">₹1L - ₹3L</option>
                        <option value="3L-5L">₹3L - ₹5L</option>
                        <option value="5L-10L">₹5L - ₹10L</option>
                        <option value="10L-25L">₹10L - ₹25L</option>
                        <option value="25L+">₹25L+</option>
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
                    disabled={isSubmitting}
                    className="w-full bg-primary-900 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-800 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    <Send className="h-5 w-5" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </motion.button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="text-center text-green-600 font-medium">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="text-center text-red-600 font-medium">
                      There was an error sending your message. Please try again.
                    </div>
                  )}
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
                          {info.subtitle && (
                            <p className="text-neutral-600 text-sm mb-2">
                              {info.subtitle}
                            </p>
                          )}
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
                  <button 
                    onClick={handleWhatsAppChat}
                    className="w-full flex items-center space-x-3 p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Live Chat Support</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;