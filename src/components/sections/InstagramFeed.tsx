import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

const InstagramFeed = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const instagramPosts = [
    {
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      likes: 245,
      comments: 18
    },
    {
      image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      likes: 189,
      comments: 12
    },
    {
      image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      likes: 321,
      comments: 25
    },
    {
      image: "https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      likes: 156,
      comments: 9
    },
    {
      image: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      likes: 278,
      comments: 21
    },
    {
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      likes: 203,
      comments: 14
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-secondary-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Instagram className="h-8 w-8 sm:h-12 sm:w-12 text-primary-600 mr-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-neutral-800">
              Follow Our Journey
            </h2>
          </div>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Get inspired by our latest events and behind-the-scenes moments. Follow us on Instagram 
            for daily inspiration and event planning tips.
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-12">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
            >
              <img
                src={post.image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center space-x-3 sm:space-x-4 text-white">
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-xs sm:text-sm font-medium">{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-xs sm:text-sm font-medium">{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Instagram Icon */}
              <div className="absolute top-2 sm:top-3 right-2 sm:right-3 p-1.5 sm:p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="h-3 w-3 sm:h-4 sm:w-4 text-neutral-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <a
            href="https://instagram.com/zephyrevents"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
            <span>Follow @ZephyrEvents</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;