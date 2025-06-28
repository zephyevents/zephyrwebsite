import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya & Arjun",
      role: "Wedding Clients",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Meragi made our dream wedding come true! Every detail was perfect, from the stunning floral arrangements to the seamless coordination. We couldn't have asked for a better team.",
      rating: 5,
      event: "Garden Wedding, Mumbai"
    },
    {
      name: "Kavya & Rohit",
      role: "Wedding Clients",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The creativity and attention to detail exceeded all our expectations. They transformed our venue into a magical space that our guests are still talking about.",
      rating: 5,
      event: "Palace Wedding, Rajasthan"
    },
    {
      name: "Ananya & Vikram",
      role: "Wedding Clients",
      image: "https://images.pexels.com/photos/1130623/pexels-photo-1130623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "From our first consultation to the last dance, Meragi handled everything with such grace. They truly understood our vision and brought it to life beautifully.",
      rating: 5,
      event: "Beach Wedding, Goa"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

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
          <h2 className="text-4xl lg:text-5xl font-heading font-normal text-neutral-800 mb-6">
            Stories of love, joy & celebration
          </h2>
          <p className="text-lg text-rose-500 font-medium tracking-wider uppercase">
            CLIENT TESTIMONIALS
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-rose-50 to-mauve-50 rounded-3xl p-8 lg:p-12 shadow-lg border border-rose-100"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-rose-100 rounded-full">
                  <Quote className="h-8 w-8 text-rose-600" />
                </div>
              </div>

              {/* Content */}
              <blockquote className="text-lg lg:text-xl text-neutral-700 leading-relaxed text-center mb-8 font-light">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-rose-500 fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="text-center">
                  <div className="font-medium text-neutral-800 text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-neutral-600 text-sm">
                    {testimonials[currentIndex].event}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white border border-rose-200 rounded-full shadow-lg hover:shadow-xl hover:border-rose-300 transition-all duration-300 group"
            >
              <ChevronLeft className="h-5 w-5 text-neutral-600 group-hover:text-rose-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 bg-white border border-rose-200 rounded-full shadow-lg hover:shadow-xl hover:border-rose-300 transition-all duration-300 group"
            >
              <ChevronRight className="h-5 w-5 text-neutral-600 group-hover:text-rose-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-rose-500 scale-125'
                    : 'bg-rose-200 hover:bg-rose-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;