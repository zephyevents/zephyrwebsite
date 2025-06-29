import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, User, Tag, ArrowRight, Search } from 'lucide-react';

const BlogPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'planning', name: 'Planning Tips', count: 8 },
    { id: 'trends', name: 'Trends', count: 6 },
    { id: 'venues', name: 'Venues', count: 5 },
    { id: 'decor', name: 'Decor Ideas', count: 5 },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Wedding Planning Tips for 2024",
      excerpt: "Planning your dream wedding can feel overwhelming, but with these expert tips, you'll be well on your way to creating the perfect celebration.",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "planning",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Spring Wedding Color Palettes That Will Take Your Breath Away",
      excerpt: "Discover the most stunning color combinations for spring weddings, from soft pastels to bold botanical hues.",
      image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "trends",
      author: "Emily Chen",
      date: "March 12, 2024",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 3,
      title: "Choosing the Perfect Venue: A Complete Guide",
      excerpt: "From intimate gardens to grand ballrooms, learn how to select a venue that perfectly matches your vision and budget.",
      image: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "venues",
      author: "Michael Rodriguez",
      date: "March 10, 2024",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 4,
      title: "DIY Wedding Decor Ideas That Look Professionally Made",
      excerpt: "Create stunning wedding decorations on a budget with these creative DIY projects that will impress your guests.",
      image: "https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "decor",
      author: "Amanda Thompson",
      date: "March 8, 2024",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 5,
      title: "The Ultimate Wedding Timeline: 12 Months to 'I Do'",
      excerpt: "Stay organized and stress-free with our comprehensive month-by-month wedding planning timeline.",
      image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "planning",
      author: "Sarah Johnson",
      date: "March 5, 2024",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 6,
      title: "Sustainable Wedding Ideas for Eco-Conscious Couples",
      excerpt: "Plan an environmentally friendly wedding without compromising on style or elegance with these sustainable ideas.",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "trends",
      author: "Emily Chen",
      date: "March 3, 2024",
      readTime: "5 min read",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="bg-background-500">
      {/* Hero Section with Slideshow */}
      <section className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Blog Hero"
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
              Wedding & Event Blog
            </h1>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              Expert tips, inspiration, and insights to help you plan the perfect celebration. 
              From planning advice to the latest trends, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section ref={ref} className="py-12 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
              className="relative flex-1 max-w-md"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-900 focus:ring-2 focus:ring-primary-200 transition-colors"
              />
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary-900 text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-primary-50 hover:text-primary-900'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'all' && !searchTerm && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-800 mb-2">Featured Article</h2>
              <div className="w-20 h-1 bg-primary-900 rounded-full"></div>
            </motion.div>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-background-500 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary-900 text-white rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-neutral-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-heading font-bold text-neutral-800 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <button className="inline-flex items-center space-x-2 text-primary-900 font-semibold hover:text-primary-800 transition-colors">
                    <span>Read Full Article</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-background-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regularPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-neutral-800 capitalize">
                      <Tag className="h-3 w-3 inline mr-1" />
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-neutral-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-neutral-800 mb-3 group-hover:text-primary-900 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <button className="inline-flex items-center space-x-2 text-primary-900 font-medium hover:text-primary-800 transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-semibold text-neutral-800 mb-2">No articles found</h3>
              <p className="text-neutral-600">Try adjusting your search or filter criteria.</p>
            </motion.div>
          )}

          {/* Load More Button */}
          {regularPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mt-16"
            >
              <button className="bg-primary-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-800 transition-colors shadow-lg hover:shadow-xl">
                Load More Articles
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral-800 mb-6">
              Stay Updated with Our Latest Tips
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Subscribe to our newsletter and never miss our latest wedding planning tips, 
              trends, and exclusive insights from our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border border-neutral-200 focus:border-primary-900 focus:ring-2 focus:ring-primary-200 transition-colors"
              />
              <button className="bg-primary-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-800 transition-colors shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;